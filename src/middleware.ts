// Astro Middleware
// Protects admin routes and adds user to locals

import { defineMiddleware } from 'astro:middleware';
import { getTokenFromRequest, verifyToken, validateSession, getUserById } from '~/lib/auth';

export const onRequest = defineMiddleware(async ({ request, locals, redirect, url }, next) => {
  const path = url.pathname;

  // Block dev-components routes in production
  if (path.startsWith('/dev-components/')) {
    if (import.meta.env.PROD) {
      return new Response('Not Found', {
        status: 404,
        headers: { 'Content-Type': 'text/plain' },
      });
    }
    const response = await next();
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return response;
  }

  // Protect admin page routes (not API routes - they handle their own auth)
  if (path.startsWith('/admin') && !path.startsWith('/admin/login') && !path.startsWith('/api/')) {
    try {
      const env = locals.runtime?.env;

      if (!env) {
        // In static build or missing runtime, redirect to login
        return redirect('/admin/login');
      }

      const { DB } = env;
      const token = getTokenFromRequest(request);

      if (!token) {
        return redirect('/admin/login');
      }

      try {
        const payload = await verifyToken(token, env.JWT_SECRET);

        // Validate session exists in database
        const sessionValid = await validateSession(DB, payload.jti);

        if (!sessionValid) {
          return redirect('/admin/login');
        }

        // Get full user from database
        const user = await getUserById(DB, payload.sub);

        if (!user) {
          return redirect('/admin/login');
        }

        // Add user info to locals for use in pages
        locals.user = user;
      } catch {
        // Token invalid or expired
        return redirect('/admin/login');
      }
    } catch (error) {
      console.error('Middleware error:', error);
      return redirect('/admin/login');
    }
  }

  return next();
});

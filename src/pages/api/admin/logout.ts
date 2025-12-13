// Logout API endpoint
import type { APIRoute } from 'astro';
import { getTokenFromRequest, verifyToken, deleteSession, createLogoutCookie } from '~/lib/auth';

export const prerender = false;

export const GET: APIRoute = async ({ request, locals }) => {
  try {
    const env = locals.runtime?.env;

    if (env?.DB && env?.JWT_SECRET) {
      const token = getTokenFromRequest(request);

      if (token) {
        try {
          const payload = await verifyToken(token, env.JWT_SECRET);
          await deleteSession(env.DB, payload.jti);
        } catch {
          // Token invalid, continue to logout anyway
        }
      }
    }
  } catch (error) {
    console.error('Logout error:', error);
  }

  // Redirect to login with cleared cookie
  return new Response(null, {
    status: 302,
    headers: {
      Location: '/admin/login',
      'Set-Cookie': createLogoutCookie(),
    },
  });
};

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const env = locals.runtime?.env;

    if (env?.DB && env?.JWT_SECRET) {
      const token = getTokenFromRequest(request);

      if (token) {
        try {
          const payload = await verifyToken(token, env.JWT_SECRET);
          await deleteSession(env.DB, payload.jti);
        } catch {
          // Token invalid, continue to logout anyway
        }
      }
    }
  } catch (error) {
    console.error('Logout error:', error);
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': createLogoutCookie(),
    },
  });
};

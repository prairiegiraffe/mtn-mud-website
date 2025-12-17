// Serve resume files from R2 storage (authenticated)
import type { APIRoute } from 'astro';
import { getTokenFromRequest, verifyToken, validateSession } from '~/lib/auth';

export const prerender = false;

export const GET: APIRoute = async ({ params, request, locals }) => {
  try {
    const env = locals.runtime?.env;
    if (!env?.STORAGE || !env?.DB || !env?.JWT_SECRET) {
      return new Response('Server not configured', { status: 500 });
    }

    // Verify auth - resumes contain personal data
    const token = getTokenFromRequest(request);
    if (!token) {
      return new Response('Unauthorized', { status: 401 });
    }

    const payload = await verifyToken(token, env.JWT_SECRET);
    const sessionValid = await validateSession(env.DB, payload.jti);
    if (!sessionValid) {
      return new Response('Session expired', { status: 401 });
    }

    const path = params.path;
    if (!path) {
      return new Response('File not found', { status: 404 });
    }

    const key = `resumes/${path}`;
    const object = await env.STORAGE.get(key);

    if (!object) {
      return new Response('File not found', { status: 404 });
    }

    const headers = new Headers();
    headers.set('Content-Type', object.httpMetadata?.contentType || 'application/pdf');
    headers.set('Content-Disposition', object.customMetadata?.contentDisposition || 'inline');
    headers.set('Cache-Control', 'private, no-store'); // Don't cache personal data

    return new Response(object.body, { headers });
  } catch (error) {
    console.error('Resume serve error:', error);
    return new Response('Server error', { status: 500 });
  }
};

// File Download API (R2)
import type { APIRoute } from 'astro';
import { getTokenFromRequest, verifyToken, validateSession } from '~/lib/auth';

export const prerender = false;

export const GET: APIRoute = async ({ params, request, locals }) => {
  try {
    const env = locals.runtime?.env;

    if (!env?.STORAGE || !env?.DB || !env?.JWT_SECRET) {
      return new Response('Server not configured', { status: 500 });
    }

    // Verify auth
    const token = getTokenFromRequest(request);
    if (!token) {
      return new Response('Unauthorized', { status: 401 });
    }

    const payload = await verifyToken(token, env.JWT_SECRET);
    const sessionValid = await validateSession(env.DB, payload.jti);
    if (!sessionValid) {
      return new Response('Session expired', { status: 401 });
    }

    const key = params.key;

    if (!key) {
      return new Response('File key required', { status: 400 });
    }

    // Get file from R2
    const object = await env.STORAGE.get(key);

    if (!object) {
      return new Response('File not found', { status: 404 });
    }

    // Get original filename from metadata
    const originalName = object.customMetadata?.originalName || key.split('/').pop() || 'download';

    const headers = new Headers();
    headers.set('Content-Type', object.httpMetadata?.contentType || 'application/octet-stream');
    headers.set('Content-Disposition', `attachment; filename="${originalName}"`);

    if (object.httpMetadata?.cacheControl) {
      headers.set('Cache-Control', object.httpMetadata.cacheControl);
    }

    return new Response(object.body, {
      headers,
    });
  } catch (error) {
    console.error('File download error:', error);
    return new Response('Failed to download file', { status: 500 });
  }
};

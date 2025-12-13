// File Download API (R2)
import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ params, locals }) => {
  try {
    const env = locals.runtime?.env;
    const user = locals.user;

    if (!env?.STORAGE) {
      return new Response('Storage not configured', { status: 500 });
    }

    // Must be logged in
    if (!user) {
      return new Response('Unauthorized', { status: 401 });
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

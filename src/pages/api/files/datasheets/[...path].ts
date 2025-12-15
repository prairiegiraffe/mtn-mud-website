// Serve files from R2 storage
import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ params, locals }) => {
  try {
    const env = locals.runtime?.env;
    if (!env?.STORAGE) {
      return new Response('Storage not configured', { status: 500 });
    }

    const path = params.path;
    if (!path) {
      return new Response('File not found', { status: 404 });
    }

    const key = `datasheets/${path}`;
    const object = await env.STORAGE.get(key);

    if (!object) {
      return new Response('File not found', { status: 404 });
    }

    const headers = new Headers();
    headers.set('Content-Type', object.httpMetadata?.contentType || 'application/pdf');
    headers.set('Content-Disposition', object.httpMetadata?.contentDisposition || 'inline');
    headers.set('Cache-Control', 'public, max-age=31536000'); // Cache for 1 year

    return new Response(object.body, { headers });
  } catch (error) {
    console.error('File serve error:', error);
    return new Response('Server error', { status: 500 });
  }
};

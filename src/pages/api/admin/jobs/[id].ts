// Jobs API - Get, Update, Delete single job
import type { APIRoute } from 'astro';
import { getTokenFromRequest, verifyToken, validateSession, canModify } from '~/lib/auth';

export const prerender = false;

// GET - Get single job
export const GET: APIRoute = async ({ params, request, locals }) => {
  const headers = { 'Content-Type': 'application/json' };
  const { id } = params;

  try {
    const env = locals.runtime?.env;
    if (!env?.DB || !env?.JWT_SECRET) {
      return new Response(JSON.stringify({ success: false, error: 'Server not configured' }), {
        status: 500,
        headers,
      });
    }

    const token = getTokenFromRequest(request);
    if (!token) {
      return new Response(JSON.stringify({ success: false, error: 'Unauthorized' }), { status: 401, headers });
    }

    const payload = await verifyToken(token, env.JWT_SECRET);
    const sessionValid = await validateSession(env.DB, payload.jti);
    if (!sessionValid) {
      return new Response(JSON.stringify({ success: false, error: 'Session expired' }), { status: 401, headers });
    }

    const job = await env.DB.prepare('SELECT * FROM jobs WHERE id = ?').bind(id).first();

    if (!job) {
      return new Response(JSON.stringify({ success: false, error: 'Job not found' }), { status: 404, headers });
    }

    return new Response(JSON.stringify({ success: true, data: job }), { status: 200, headers });
  } catch (error) {
    console.error('Job get error:', error);
    return new Response(JSON.stringify({ success: false, error: 'Server error' }), { status: 500, headers });
  }
};

// PUT - Update job
export const PUT: APIRoute = async ({ params, request, locals }) => {
  const headers = { 'Content-Type': 'application/json' };
  const { id } = params;

  try {
    const env = locals.runtime?.env;
    if (!env?.DB || !env?.JWT_SECRET) {
      return new Response(JSON.stringify({ success: false, error: 'Server not configured' }), {
        status: 500,
        headers,
      });
    }

    const token = getTokenFromRequest(request);
    if (!token) {
      return new Response(JSON.stringify({ success: false, error: 'Unauthorized' }), { status: 401, headers });
    }

    const payload = await verifyToken(token, env.JWT_SECRET);
    const sessionValid = await validateSession(env.DB, payload.jti);
    if (!sessionValid) {
      return new Response(JSON.stringify({ success: false, error: 'Session expired' }), { status: 401, headers });
    }

    if (!canModify(payload)) {
      return new Response(JSON.stringify({ success: false, error: 'Permission denied' }), { status: 403, headers });
    }

    const body = await request.json();
    const { title, locations, description, is_active, sort_order } = body;

    if (!title || !locations) {
      return new Response(JSON.stringify({ success: false, error: 'Title and locations required' }), {
        status: 400,
        headers,
      });
    }

    await env.DB.prepare(
      `
      UPDATE jobs SET
        title = ?,
        locations = ?,
        description = ?,
        is_active = ?,
        sort_order = ?,
        updated_at = datetime('now')
      WHERE id = ?
    `
    )
      .bind(title, locations, description || null, is_active !== false ? 1 : 0, sort_order || 0, id)
      .run();

    const job = await env.DB.prepare('SELECT * FROM jobs WHERE id = ?').bind(id).first();

    return new Response(JSON.stringify({ success: true, data: job }), { status: 200, headers });
  } catch (error) {
    console.error('Job update error:', error);
    return new Response(JSON.stringify({ success: false, error: 'Server error' }), { status: 500, headers });
  }
};

// DELETE - Delete job
export const DELETE: APIRoute = async ({ params, request, locals }) => {
  const headers = { 'Content-Type': 'application/json' };
  const { id } = params;

  try {
    const env = locals.runtime?.env;
    if (!env?.DB || !env?.JWT_SECRET) {
      return new Response(JSON.stringify({ success: false, error: 'Server not configured' }), {
        status: 500,
        headers,
      });
    }

    const token = getTokenFromRequest(request);
    if (!token) {
      return new Response(JSON.stringify({ success: false, error: 'Unauthorized' }), { status: 401, headers });
    }

    const payload = await verifyToken(token, env.JWT_SECRET);
    const sessionValid = await validateSession(env.DB, payload.jti);
    if (!sessionValid) {
      return new Response(JSON.stringify({ success: false, error: 'Session expired' }), { status: 401, headers });
    }

    if (!canModify(payload)) {
      return new Response(JSON.stringify({ success: false, error: 'Permission denied' }), { status: 403, headers });
    }

    await env.DB.prepare('DELETE FROM jobs WHERE id = ?').bind(id).run();

    return new Response(JSON.stringify({ success: true }), { status: 200, headers });
  } catch (error) {
    console.error('Job delete error:', error);
    return new Response(JSON.stringify({ success: false, error: 'Server error' }), { status: 500, headers });
  }
};

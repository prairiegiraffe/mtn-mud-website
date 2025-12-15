// Jobs API - List and Create
import type { APIRoute } from 'astro';
import { getTokenFromRequest, verifyToken, validateSession, canModify } from '~/lib/auth';

export const prerender = false;

// GET - List all jobs
export const GET: APIRoute = async ({ request, locals }) => {
  const headers = { 'Content-Type': 'application/json' };

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

    const result = await env.DB.prepare(
      `
      SELECT * FROM jobs
      ORDER BY sort_order, title
    `
    ).all();

    return new Response(JSON.stringify({ success: true, data: result.results || [] }), { status: 200, headers });
  } catch (error) {
    console.error('Jobs list error:', error);
    return new Response(JSON.stringify({ success: false, error: 'Server error' }), { status: 500, headers });
  }
};

// POST - Create new job
export const POST: APIRoute = async ({ request, locals }) => {
  const headers = { 'Content-Type': 'application/json' };

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

    // Generate UUID
    const id = crypto.randomUUID();

    await env.DB.prepare(
      `
      INSERT INTO jobs (id, title, locations, description, is_active, sort_order)
      VALUES (?, ?, ?, ?, ?, ?)
    `
    )
      .bind(id, title, locations, description || null, is_active !== false ? 1 : 0, sort_order || 0)
      .run();

    const job = await env.DB.prepare('SELECT * FROM jobs WHERE id = ?').bind(id).first();

    return new Response(JSON.stringify({ success: true, data: job }), { status: 201, headers });
  } catch (error) {
    console.error('Job create error:', error);
    return new Response(JSON.stringify({ success: false, error: 'Server error' }), { status: 500, headers });
  }
};

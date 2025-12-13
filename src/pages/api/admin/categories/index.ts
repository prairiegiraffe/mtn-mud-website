// Categories API - List and Create
import type { APIRoute } from 'astro';
import { getTokenFromRequest, verifyToken, validateSession, canModify } from '~/lib/auth';

export const prerender = false;

// GET - List all categories
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

    // Verify auth
    const token = getTokenFromRequest(request);
    if (!token) {
      return new Response(JSON.stringify({ success: false, error: 'Unauthorized' }), { status: 401, headers });
    }

    const payload = await verifyToken(token, env.JWT_SECRET);
    const sessionValid = await validateSession(env.DB, payload.jti);
    if (!sessionValid) {
      return new Response(JSON.stringify({ success: false, error: 'Session expired' }), { status: 401, headers });
    }

    // Get categories with product counts
    const result = await env.DB.prepare(
      `
      SELECT c.*, COUNT(p.id) as product_count
      FROM categories c
      LEFT JOIN products p ON c.id = p.category_id
      GROUP BY c.id
      ORDER BY c.sort_order, c.name
    `
    ).all();

    return new Response(JSON.stringify({ success: true, data: result.results || [] }), { status: 200, headers });
  } catch (error) {
    console.error('Categories list error:', error);
    return new Response(JSON.stringify({ success: false, error: 'Server error' }), { status: 500, headers });
  }
};

// POST - Create new category
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

    // Verify auth
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
    const { name, sort_order } = body;

    if (!name) {
      return new Response(JSON.stringify({ success: false, error: 'Name required' }), { status: 400, headers });
    }

    // Generate slug
    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    // Check for duplicate
    const existing = await env.DB.prepare('SELECT id FROM categories WHERE slug = ? OR name = ?')
      .bind(slug, name)
      .first();

    if (existing) {
      return new Response(JSON.stringify({ success: false, error: 'Category already exists' }), {
        status: 400,
        headers,
      });
    }

    // Generate UUID
    const id = crypto.randomUUID();

    await env.DB.prepare(
      `
      INSERT INTO categories (id, name, slug, sort_order)
      VALUES (?, ?, ?, ?)
    `
    )
      .bind(id, name, slug, sort_order || 0)
      .run();

    const category = await env.DB.prepare('SELECT * FROM categories WHERE id = ?').bind(id).first();

    return new Response(JSON.stringify({ success: true, data: category }), { status: 201, headers });
  } catch (error) {
    console.error('Category create error:', error);
    return new Response(JSON.stringify({ success: false, error: 'Server error' }), { status: 500, headers });
  }
};

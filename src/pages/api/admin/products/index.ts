// Products API - List and Create
import type { APIRoute } from 'astro';
import { getTokenFromRequest, verifyToken, validateSession, canModify } from '~/lib/auth';

export const prerender = false;

// GET - List all products
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

    // Get products with category names
    const result = await env.DB.prepare(
      `
      SELECT p.*, c.name as category_name
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.id
      ORDER BY c.name, p.sort_order, p.title
    `
    ).all();

    return new Response(JSON.stringify({ success: true, data: result.results || [] }), { status: 200, headers });
  } catch (error) {
    console.error('Products list error:', error);
    return new Response(JSON.stringify({ success: false, error: 'Server error' }), { status: 500, headers });
  }
};

// POST - Create new product
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
    const { title, category_id, size, description, sort_order, in_stock, pdf_url } = body;

    if (!title || !category_id) {
      return new Response(JSON.stringify({ success: false, error: 'Title and category required' }), {
        status: 400,
        headers,
      });
    }

    // Generate slug
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    // Check for duplicate slug
    const existing = await env.DB.prepare('SELECT id FROM products WHERE slug = ?').bind(slug).first();
    const finalSlug = existing ? `${slug}-${Date.now()}` : slug;

    // Generate UUID
    const id = crypto.randomUUID();

    await env.DB.prepare(
      `
      INSERT INTO products (id, slug, title, category_id, size, description, sort_order, in_stock, pdf_url)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `
    )
      .bind(
        id,
        finalSlug,
        title,
        category_id,
        size || null,
        description || null,
        sort_order || 0,
        in_stock ? 1 : 0,
        pdf_url || null
      )
      .run();

    // Get the created product
    const product = await env.DB.prepare(
      `
      SELECT p.*, c.name as category_name
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.id
      WHERE p.id = ?
    `
    )
      .bind(id)
      .first();

    return new Response(JSON.stringify({ success: true, data: product }), { status: 201, headers });
  } catch (error) {
    console.error('Product create error:', error);
    return new Response(JSON.stringify({ success: false, error: 'Server error' }), { status: 500, headers });
  }
};

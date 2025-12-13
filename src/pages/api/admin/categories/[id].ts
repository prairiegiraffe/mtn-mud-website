// Categories API - Update and Delete
import type { APIRoute } from 'astro';
import { getTokenFromRequest, verifyToken, validateSession, canModify } from '~/lib/auth';

export const prerender = false;

// PUT - Update category
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
    const { name, sort_order } = body;

    if (!name) {
      return new Response(JSON.stringify({ success: false, error: 'Name required' }), { status: 400, headers });
    }

    await env.DB.prepare(
      `
      UPDATE categories SET
        name = ?,
        sort_order = ?,
        updated_at = datetime('now')
      WHERE id = ?
    `
    )
      .bind(name, sort_order || 0, id)
      .run();

    const category = await env.DB.prepare('SELECT * FROM categories WHERE id = ?').bind(id).first();

    return new Response(JSON.stringify({ success: true, data: category }), { status: 200, headers });
  } catch (error) {
    console.error('Category update error:', error);
    return new Response(JSON.stringify({ success: false, error: 'Server error' }), { status: 500, headers });
  }
};

// DELETE - Delete category
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

    // Check if category has products
    const productCount = await env.DB.prepare('SELECT COUNT(*) as count FROM products WHERE category_id = ?')
      .bind(id)
      .first<{ count: number }>();

    if (productCount && productCount.count > 0) {
      return new Response(
        JSON.stringify({
          success: false,
          error: `Cannot delete category with ${productCount.count} products. Move or delete products first.`,
        }),
        { status: 400, headers }
      );
    }

    await env.DB.prepare('DELETE FROM categories WHERE id = ?').bind(id).run();

    return new Response(JSON.stringify({ success: true }), { status: 200, headers });
  } catch (error) {
    console.error('Category delete error:', error);
    return new Response(JSON.stringify({ success: false, error: 'Server error' }), { status: 500, headers });
  }
};

// Products API - Get, Update, Delete single product
import type { APIRoute } from 'astro';
import { getTokenFromRequest, verifyToken, validateSession, canModify } from '~/lib/auth';

export const prerender = false;

// GET - Get single product
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

    if (!product) {
      return new Response(JSON.stringify({ success: false, error: 'Product not found' }), { status: 404, headers });
    }

    return new Response(JSON.stringify({ success: true, data: product }), { status: 200, headers });
  } catch (error) {
    console.error('Product get error:', error);
    return new Response(JSON.stringify({ success: false, error: 'Server error' }), { status: 500, headers });
  }
};

// PUT - Update product
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
    const { title, category_id, size, description, sort_order, in_stock, pdf_url, remove_pdf } = body;

    if (!title || !category_id) {
      return new Response(JSON.stringify({ success: false, error: 'Title and category required' }), {
        status: 400,
        headers,
      });
    }

    // Handle PDF: if remove_pdf is true, clear it; if new pdf_url provided, use it; otherwise keep existing
    if (remove_pdf) {
      // Explicitly remove PDF - set to null
      await env.DB.prepare(
        `
        UPDATE products SET
          title = ?,
          category_id = ?,
          size = ?,
          description = ?,
          sort_order = ?,
          in_stock = ?,
          pdf_url = NULL,
          updated_at = datetime('now')
        WHERE id = ?
      `
      )
        .bind(title, category_id, size || null, description || null, sort_order || 0, in_stock ? 1 : 0, id)
        .run();
    } else {
      // Keep existing or update with new URL
      await env.DB.prepare(
        `
        UPDATE products SET
          title = ?,
          category_id = ?,
          size = ?,
          description = ?,
          sort_order = ?,
          in_stock = ?,
          pdf_url = COALESCE(?, pdf_url),
          updated_at = datetime('now')
        WHERE id = ?
      `
      )
        .bind(
          title,
          category_id,
          size || null,
          description || null,
          sort_order || 0,
          in_stock ? 1 : 0,
          pdf_url || null,
          id
        )
        .run();
    }

    // Get updated product
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

    return new Response(JSON.stringify({ success: true, data: product }), { status: 200, headers });
  } catch (error) {
    console.error('Product update error:', error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Server error',
        debug: { message: errorMessage },
      }),
      { status: 500, headers }
    );
  }
};

// DELETE - Delete product
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

    await env.DB.prepare('DELETE FROM products WHERE id = ?').bind(id).run();

    return new Response(JSON.stringify({ success: true }), { status: 200, headers });
  } catch (error) {
    console.error('Product delete error:', error);
    return new Response(JSON.stringify({ success: false, error: 'Server error' }), { status: 500, headers });
  }
};

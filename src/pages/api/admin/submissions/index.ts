// Submissions List API
import type { APIRoute } from 'astro';
import type { Submission } from '~/lib/types';
import { getTokenFromRequest, verifyToken, validateSession } from '~/lib/auth';

export const prerender = false;

export const GET: APIRoute = async ({ request, locals, url }) => {
  const corsHeaders = {
    'Content-Type': 'application/json',
  };

  try {
    const env = locals.runtime?.env;

    if (!env?.DB || !env?.JWT_SECRET) {
      return new Response(JSON.stringify({ error: 'Server not configured' }), {
        status: 500,
        headers: corsHeaders,
      });
    }

    // Verify auth
    const token = getTokenFromRequest(request);
    if (!token) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: corsHeaders });
    }

    const payload = await verifyToken(token, env.JWT_SECRET);
    const sessionValid = await validateSession(env.DB, payload.jti);
    if (!sessionValid) {
      return new Response(JSON.stringify({ error: 'Session expired' }), { status: 401, headers: corsHeaders });
    }

    // Get filter parameters
    const type = url.searchParams.get('type'); // 'contact' | 'application'
    const status = url.searchParams.get('status'); // 'new' | 'read' | 'archived'
    const limit = parseInt(url.searchParams.get('limit') || '50');
    const offset = parseInt(url.searchParams.get('offset') || '0');

    // Build query
    let query = 'SELECT * FROM submissions WHERE 1=1';
    const params: (string | number)[] = [];

    if (type) {
      query += ' AND type = ?';
      params.push(type);
    }

    if (status) {
      query += ' AND status = ?';
      params.push(status);
    }

    query += ' ORDER BY created_at DESC LIMIT ? OFFSET ?';
    params.push(limit, offset);

    const result = await env.DB.prepare(query)
      .bind(...params)
      .all();
    const submissions = (result.results || []) as Submission[];

    // Get total count for pagination
    let countQuery = 'SELECT COUNT(*) as count FROM submissions WHERE 1=1';
    const countParams: string[] = [];

    if (type) {
      countQuery += ' AND type = ?';
      countParams.push(type);
    }

    if (status) {
      countQuery += ' AND status = ?';
      countParams.push(status);
    }

    const countResult = await env.DB.prepare(countQuery)
      .bind(...countParams)
      .first<{ count: number }>();
    const total = countResult?.count || 0;

    return new Response(
      JSON.stringify({
        submissions,
        total,
        limit,
        offset,
      }),
      {
        status: 200,
        headers: corsHeaders,
      }
    );
  } catch (error) {
    console.error('Submissions fetch error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch submissions' }), {
      status: 500,
      headers: corsHeaders,
    });
  }
};

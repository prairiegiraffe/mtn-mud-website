// Submission Detail API
import type { APIRoute } from 'astro';
import type { Submission } from '~/lib/types';
import { getTokenFromRequest, verifyToken, validateSession } from '~/lib/auth';

export const prerender = false;

// Get single submission
export const GET: APIRoute = async ({ params, locals }) => {
  const corsHeaders = {
    'Content-Type': 'application/json',
  };

  try {
    const env = locals.runtime?.env;

    if (!env?.DB) {
      return new Response(JSON.stringify({ error: 'Database not configured' }), {
        status: 500,
        headers: corsHeaders,
      });
    }

    const { id } = params;

    const submission = await env.DB.prepare('SELECT * FROM submissions WHERE id = ?').bind(id).first<Submission>();

    if (!submission) {
      return new Response(JSON.stringify({ error: 'Submission not found' }), {
        status: 404,
        headers: corsHeaders,
      });
    }

    return new Response(JSON.stringify(submission), {
      status: 200,
      headers: corsHeaders,
    });
  } catch (error) {
    console.error('Submission fetch error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch submission' }), {
      status: 500,
      headers: corsHeaders,
    });
  }
};

// Update submission status
export const PUT: APIRoute = async ({ params, request, locals }) => {
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

    // Viewers cannot modify
    if (payload.role === 'viewer') {
      return new Response(JSON.stringify({ error: 'Permission denied' }), {
        status: 403,
        headers: corsHeaders,
      });
    }

    const { id } = params;
    const { status, notes } = await request.json();

    // Validate status
    if (status && !['new', 'read', 'archived'].includes(status)) {
      return new Response(JSON.stringify({ error: 'Invalid status' }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    // Check submission exists
    const existing = await env.DB.prepare('SELECT id FROM submissions WHERE id = ?').bind(id).first();

    if (!existing) {
      return new Response(JSON.stringify({ error: 'Submission not found' }), {
        status: 404,
        headers: corsHeaders,
      });
    }

    // Build update query
    const updates: string[] = [];
    const values: (string | number)[] = [];

    if (status) {
      updates.push('status = ?');
      values.push(status);
    }

    if (notes !== undefined) {
      updates.push('notes = ?');
      values.push(notes);
    }

    if (updates.length === 0) {
      return new Response(JSON.stringify({ error: 'No updates provided' }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    values.push(id as string);

    await env.DB.prepare(`UPDATE submissions SET ${updates.join(', ')} WHERE id = ?`)
      .bind(...values)
      .run();

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: corsHeaders,
    });
  } catch (error) {
    console.error('Submission update error:', error);
    return new Response(JSON.stringify({ error: 'Failed to update submission' }), {
      status: 500,
      headers: corsHeaders,
    });
  }
};

// Delete submission (soft delete - only hard delete when both client and agency delete)
export const DELETE: APIRoute = async ({ params, request, locals }) => {
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

    // Only admins and above can delete
    if (!['superadmin', 'agency', 'admin'].includes(payload.role)) {
      return new Response(JSON.stringify({ error: 'Permission denied' }), {
        status: 403,
        headers: corsHeaders,
      });
    }

    const { id } = params;

    // Check submission exists and get current soft delete state
    const existing = await env.DB.prepare(
      'SELECT id, resume_file_key, deleted_by_client, deleted_by_agency FROM submissions WHERE id = ?'
    )
      .bind(id)
      .first<{ id: string; resume_file_key: string | null; deleted_by_client: number; deleted_by_agency: number }>();

    if (!existing) {
      return new Response(JSON.stringify({ error: 'Submission not found' }), {
        status: 404,
        headers: corsHeaders,
      });
    }

    // Determine if this is an agency user or client user
    const isAgency = ['superadmin', 'agency'].includes(payload.role);

    // Calculate new delete states
    const newDeletedByClient = isAgency ? existing.deleted_by_client : 1;
    const newDeletedByAgency = isAgency ? 1 : existing.deleted_by_agency;

    // If both will be deleted, do a hard delete
    if (newDeletedByClient === 1 && newDeletedByAgency === 1) {
      // Delete resume from R2 if exists
      if (existing.resume_file_key && env.STORAGE) {
        try {
          await env.STORAGE.delete(existing.resume_file_key);
        } catch (e) {
          console.error('Failed to delete resume file:', e);
        }
      }

      await env.DB.prepare('DELETE FROM submissions WHERE id = ?').bind(id).run();
    } else {
      // Soft delete - just set the appropriate flag
      if (isAgency) {
        await env.DB.prepare('UPDATE submissions SET deleted_by_agency = 1 WHERE id = ?').bind(id).run();
      } else {
        await env.DB.prepare('UPDATE submissions SET deleted_by_client = 1 WHERE id = ?').bind(id).run();
      }
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: corsHeaders,
    });
  } catch (error) {
    console.error('Submission delete error:', error);
    return new Response(JSON.stringify({ error: 'Failed to delete submission' }), {
      status: 500,
      headers: corsHeaders,
    });
  }
};

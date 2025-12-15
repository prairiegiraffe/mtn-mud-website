// User Detail API
import type { APIRoute } from 'astro';
import { hashPassword, canManageUsers, getTokenFromRequest, verifyToken, validateSession } from '~/lib/auth';

export const prerender = false;

// Update user
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

    // Only superadmin, agency, and admin can update users
    if (!canManageUsers(payload.role)) {
      return new Response(JSON.stringify({ error: 'Permission denied' }), {
        status: 403,
        headers: corsHeaders,
      });
    }

    const user = payload;
    const { id } = params;
    const { email, name, password, role, notify_contact, notify_applications } = await request.json();

    // Get existing user
    const existing = await env.DB.prepare('SELECT * FROM admin_users WHERE id = ?')
      .bind(id)
      .first<{ id: string; email: string; role: string }>();

    if (!existing) {
      return new Response(JSON.stringify({ error: 'User not found' }), {
        status: 404,
        headers: corsHeaders,
      });
    }

    // Check role hierarchy - users can only edit users at their level or below
    const roleHierarchy = { superadmin: 4, agency: 3, admin: 2, viewer: 1 };
    const currentUserLevel = roleHierarchy[user.role as keyof typeof roleHierarchy] || 0;
    const existingUserLevel = roleHierarchy[existing.role as keyof typeof roleHierarchy] || 0;

    // Cannot edit users with higher or equal role (unless it's yourself)
    if (existingUserLevel >= currentUserLevel && existing.id !== user.sub) {
      return new Response(JSON.stringify({ error: 'Cannot edit user with equal or higher role' }), {
        status: 403,
        headers: corsHeaders,
      });
    }

    // Validate role if changing
    if (role) {
      const validRoles = ['superadmin', 'agency', 'admin', 'viewer'];
      if (!validRoles.includes(role)) {
        return new Response(JSON.stringify({ error: 'Invalid role' }), {
          status: 400,
          headers: corsHeaders,
        });
      }

      const newUserLevel = roleHierarchy[role as keyof typeof roleHierarchy];

      // Cannot promote user above your own level
      if (newUserLevel > currentUserLevel) {
        return new Response(JSON.stringify({ error: 'Cannot promote user above your role level' }), {
          status: 403,
          headers: corsHeaders,
        });
      }

      // Only superadmin can assign superadmin role
      if (role === 'superadmin' && user.role !== 'superadmin') {
        return new Response(JSON.stringify({ error: 'Only superadmins can assign superadmin role' }), {
          status: 403,
          headers: corsHeaders,
        });
      }
    }

    // Check email uniqueness if changing
    if (email && email !== existing.email) {
      const emailExists = await env.DB.prepare('SELECT id FROM admin_users WHERE email = ? AND id != ?')
        .bind(email, id)
        .first();

      if (emailExists) {
        return new Response(JSON.stringify({ error: 'Email already in use' }), {
          status: 400,
          headers: corsHeaders,
        });
      }
    }

    // Build update query
    const updates: string[] = [];
    const values: (string | number)[] = [];

    if (email) {
      updates.push('email = ?');
      values.push(email);
    }

    if (name) {
      updates.push('name = ?');
      values.push(name);
    }

    if (role) {
      updates.push('role = ?');
      values.push(role);
    }

    if (password) {
      const password_hash = await hashPassword(password);
      updates.push('password_hash = ?');
      values.push(password_hash);
    }

    if (notify_contact !== undefined) {
      updates.push('notify_contact = ?');
      values.push(notify_contact ? 1 : 0);
    }

    if (notify_applications !== undefined) {
      updates.push('notify_applications = ?');
      values.push(notify_applications ? 1 : 0);
    }

    if (updates.length === 0) {
      return new Response(JSON.stringify({ error: 'No updates provided' }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    values.push(id as string);

    await env.DB.prepare(`UPDATE admin_users SET ${updates.join(', ')} WHERE id = ?`)
      .bind(...values)
      .run();

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: corsHeaders,
    });
  } catch (error) {
    console.error('User update error:', error);
    return new Response(JSON.stringify({ error: 'Failed to update user' }), {
      status: 500,
      headers: corsHeaders,
    });
  }
};

// Delete user
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

    // Only superadmin, agency, and admin can delete users
    if (!canManageUsers(payload.role)) {
      return new Response(JSON.stringify({ error: 'Permission denied' }), {
        status: 403,
        headers: corsHeaders,
      });
    }

    const user = payload;
    const { id } = params;

    // Cannot delete yourself
    if (id === user.sub) {
      return new Response(JSON.stringify({ error: 'Cannot delete your own account' }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    // Get existing user
    const existing = await env.DB.prepare('SELECT role FROM admin_users WHERE id = ?')
      .bind(id)
      .first<{ role: string }>();

    if (!existing) {
      return new Response(JSON.stringify({ error: 'User not found' }), {
        status: 404,
        headers: corsHeaders,
      });
    }

    // Check role hierarchy
    const roleHierarchy = { superadmin: 4, agency: 3, admin: 2, viewer: 1 };
    const currentUserLevel = roleHierarchy[user.role as keyof typeof roleHierarchy] || 0;
    const existingUserLevel = roleHierarchy[existing.role as keyof typeof roleHierarchy] || 0;

    // Cannot delete users with higher or equal role
    if (existingUserLevel >= currentUserLevel) {
      return new Response(JSON.stringify({ error: 'Cannot delete user with equal or higher role' }), {
        status: 403,
        headers: corsHeaders,
      });
    }

    // Delete user's sessions first
    await env.DB.prepare('DELETE FROM sessions WHERE user_id = ?').bind(id).run();

    // Delete user
    await env.DB.prepare('DELETE FROM admin_users WHERE id = ?').bind(id).run();

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: corsHeaders,
    });
  } catch (error) {
    console.error('User delete error:', error);
    return new Response(JSON.stringify({ error: 'Failed to delete user' }), {
      status: 500,
      headers: corsHeaders,
    });
  }
};

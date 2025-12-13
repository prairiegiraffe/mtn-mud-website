// Users List/Create API
import type { APIRoute } from 'astro';
import type { AdminUser } from '~/lib/types';
import { hashPassword, canManageUsers } from '~/lib/auth';

export const prerender = false;

// Get all users
export const GET: APIRoute = async ({ locals }) => {
  const corsHeaders = {
    'Content-Type': 'application/json',
  };

  try {
    const env = locals.runtime?.env;
    const user = locals.user;

    if (!env?.DB) {
      return new Response(JSON.stringify({ error: 'Database not configured' }), {
        status: 500,
        headers: corsHeaders,
      });
    }

    // Only superadmin, agency, and admin can view users
    if (!canManageUsers(user?.role)) {
      return new Response(JSON.stringify({ error: 'Permission denied' }), {
        status: 403,
        headers: corsHeaders,
      });
    }

    // Build query based on role hierarchy
    let query = `
      SELECT id, email, name, role, notify_contact, notify_applications, last_login, created_at
      FROM admin_users
    `;

    // Role-based filtering: users can only see users at their level or below
    if (user?.role === 'agency') {
      query += ` WHERE role IN ('agency', 'admin', 'viewer')`;
    } else if (user?.role === 'admin') {
      query += ` WHERE role IN ('admin', 'viewer')`;
    }

    query += ' ORDER BY role, name';

    const result = await env.DB.prepare(query).all();

    // Never return password hashes
    const users = (result.results || []) as Omit<AdminUser, 'password_hash'>[];

    return new Response(JSON.stringify(users), {
      status: 200,
      headers: corsHeaders,
    });
  } catch (error) {
    console.error('Users fetch error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch users' }), {
      status: 500,
      headers: corsHeaders,
    });
  }
};

// Create new user
export const POST: APIRoute = async ({ request, locals }) => {
  const corsHeaders = {
    'Content-Type': 'application/json',
  };

  try {
    const env = locals.runtime?.env;
    const user = locals.user;

    if (!env?.DB) {
      return new Response(JSON.stringify({ error: 'Database not configured' }), {
        status: 500,
        headers: corsHeaders,
      });
    }

    // Only superadmin, agency, and admin can create users
    if (!canManageUsers(user?.role)) {
      return new Response(JSON.stringify({ error: 'Permission denied' }), {
        status: 403,
        headers: corsHeaders,
      });
    }

    const { email, name, password, role, notify_contact, notify_applications } = await request.json();

    // Validate required fields
    if (!email || !name || !password || !role) {
      return new Response(JSON.stringify({ error: 'Email, name, password, and role are required' }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    // Validate role
    const validRoles = ['superadmin', 'agency', 'admin', 'viewer'];
    if (!validRoles.includes(role)) {
      return new Response(JSON.stringify({ error: 'Invalid role' }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    // Check role hierarchy - users can only create users at their level or below
    const roleHierarchy = { superadmin: 4, agency: 3, admin: 2, viewer: 1 };
    const currentUserLevel = roleHierarchy[user?.role as keyof typeof roleHierarchy] || 0;
    const newUserLevel = roleHierarchy[role as keyof typeof roleHierarchy];

    if (newUserLevel > currentUserLevel) {
      return new Response(JSON.stringify({ error: 'Cannot create user with higher role than your own' }), {
        status: 403,
        headers: corsHeaders,
      });
    }

    // Only superadmin can create other superadmins
    if (role === 'superadmin' && user?.role !== 'superadmin') {
      return new Response(JSON.stringify({ error: 'Only superadmins can create other superadmins' }), {
        status: 403,
        headers: corsHeaders,
      });
    }

    // Check if email already exists
    const existing = await env.DB.prepare('SELECT id FROM admin_users WHERE email = ?').bind(email).first();

    if (existing) {
      return new Response(JSON.stringify({ error: 'Email already exists' }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    // Hash password
    const password_hash = await hashPassword(password);

    // Generate ID
    const id = crypto.randomUUID();

    // Insert user
    await env.DB.prepare(
      `
      INSERT INTO admin_users (id, email, name, password_hash, role, notify_contact, notify_applications, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, datetime('now'))
    `
    )
      .bind(id, email, name, password_hash, role, notify_contact ? 1 : 0, notify_applications ? 1 : 0)
      .run();

    return new Response(
      JSON.stringify({
        success: true,
        user: { id, email, name, role },
      }),
      {
        status: 201,
        headers: corsHeaders,
      }
    );
  } catch (error) {
    console.error('User create error:', error);
    return new Response(JSON.stringify({ error: 'Failed to create user' }), {
      status: 500,
      headers: corsHeaders,
    });
  }
};

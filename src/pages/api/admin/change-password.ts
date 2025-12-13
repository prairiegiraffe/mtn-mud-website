// Change Password API
import type { APIRoute } from 'astro';
import { hashPassword, verifyPassword } from '~/lib/auth';

export const prerender = false;

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

    if (!user) {
      return new Response(JSON.stringify({ error: 'Not authenticated' }), {
        status: 401,
        headers: corsHeaders,
      });
    }

    const { current_password, new_password } = await request.json();

    if (!current_password || !new_password) {
      return new Response(JSON.stringify({ error: 'Current and new password are required' }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    if (new_password.length < 8) {
      return new Response(JSON.stringify({ error: 'New password must be at least 8 characters' }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    // Get user with password hash
    const fullUser = await env.DB.prepare('SELECT password_hash FROM admin_users WHERE id = ?')
      .bind(user.id)
      .first<{ password_hash: string }>();

    if (!fullUser) {
      return new Response(JSON.stringify({ error: 'User not found' }), {
        status: 404,
        headers: corsHeaders,
      });
    }

    // Verify current password
    const isValid = await verifyPassword(current_password, fullUser.password_hash);

    if (!isValid) {
      return new Response(JSON.stringify({ error: 'Current password is incorrect' }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    // Hash new password
    const newHash = await hashPassword(new_password);

    // Update password
    await env.DB.prepare('UPDATE admin_users SET password_hash = ? WHERE id = ?').bind(newHash, user.id).run();

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: corsHeaders,
    });
  } catch (error) {
    console.error('Change password error:', error);
    return new Response(JSON.stringify({ error: 'Failed to change password' }), {
      status: 500,
      headers: corsHeaders,
    });
  }
};

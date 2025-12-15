// Login API endpoint
import type { APIRoute } from 'astro';
import {
  getUserByEmail,
  verifyPassword,
  generateToken,
  generateSessionId,
  createSession,
  createAuthCookie,
  updateLastLogin,
} from '~/lib/auth';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  const corsHeaders = {
    'Content-Type': 'application/json',
  };

  try {
    const env = locals.runtime?.env;

    if (!env?.DB || !env?.JWT_SECRET) {
      console.error('Missing env bindings:', {
        hasRuntime: !!locals.runtime,
        hasEnv: !!env,
        hasDB: !!env?.DB,
        hasJWT: !!env?.JWT_SECRET,
      });
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Server not configured',
          debug: {
            hasRuntime: !!locals.runtime,
            hasEnv: !!env,
            hasDB: !!env?.DB,
            hasJWT: !!env?.JWT_SECRET,
          },
        }),
        {
          status: 500,
          headers: corsHeaders,
        }
      );
    }

    const { email, password } = await request.json();

    if (!email || !password) {
      return new Response(JSON.stringify({ success: false, error: 'Email and password required' }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    // Get user by email
    const user = await getUserByEmail(env.DB, email);

    if (!user) {
      return new Response(JSON.stringify({ success: false, error: 'Invalid email or password' }), {
        status: 401,
        headers: corsHeaders,
      });
    }

    // Verify password
    const passwordValid = await verifyPassword(password, user.password_hash);

    if (!passwordValid) {
      return new Response(JSON.stringify({ success: false, error: 'Invalid email or password' }), {
        status: 401,
        headers: corsHeaders,
      });
    }

    // Create session
    const sessionId = generateSessionId();
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    await createSession(env.DB, user.id, sessionId, expiresAt);

    // Generate JWT token
    const token = await generateToken(user, env.JWT_SECRET, sessionId);

    // Update last login
    await updateLastLogin(env.DB, user.id);

    // Set cookie and return success
    return new Response(
      JSON.stringify({
        success: true,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        },
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          'Set-Cookie': createAuthCookie(token),
        },
      }
    );
  } catch (error) {
    console.error('Login error:', error);
    return new Response(JSON.stringify({ success: false, error: 'Server error' }), {
      status: 500,
      headers: corsHeaders,
    });
  }
};

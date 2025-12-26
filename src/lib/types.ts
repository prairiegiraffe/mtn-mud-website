// TypeScript interfaces for CMS

export interface Category {
  id: string;
  name: string;
  slug: string;
  sort_order: number;
  created_at: string;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  category_id: string;
  category_name?: string; // Joined from categories table
  size: string | null;
  description: string | null;
  pdf_url: string | null;
  sort_order: number;
  in_stock: number; // 0 or 1
  created_at: string;
  updated_at: string;
}

export interface Job {
  id: string;
  title: string;
  locations: string;
  description: string | null;
  is_active: number; // 0 or 1
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface Submission {
  id: string;
  type: 'contact' | 'application';
  status: 'new' | 'read' | 'archived';
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  message: string | null;
  job_id: string | null;
  job_title: string | null;
  resume_file_key: string | null;
  resume_file_name: string | null;
  notes: string | null;
  created_at: string;
}

export interface AdminUser {
  id: string;
  email: string;
  password_hash: string;
  name: string;
  role: 'superadmin' | 'agency' | 'admin' | 'viewer';
  notify_contact: number; // 0 or 1
  notify_applications: number; // 0 or 1
  created_at: string;
  last_login: string | null;
}

export interface Session {
  id: string;
  user_id: string;
  expires_at: string;
  created_at: string;
}

export interface JWTPayload {
  sub: string; // user id
  email: string;
  name: string;
  role: 'superadmin' | 'agency' | 'admin' | 'viewer';
  jti: string; // session id
  iat: number;
  exp: number;
}

export interface EmailLog {
  id: number;
  submission_id: number | null;
  tenant_id: string;
  from_address: string;
  to_addresses: string; // JSON array
  subject: string;
  status: 'sent' | 'failed' | 'pending';
  error_message: string | null;
  message_id: string | null;
  created_at: string;
  sent_at: string | null;
}

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Dashboard stats
export interface DashboardStats {
  products: {
    total: number;
    in_stock: number;
    out_of_stock: number;
  };
  jobs: {
    total: number;
    active: number;
  };
  submissions: {
    total: number;
    new_count: number;
    contacts: number;
    applications: number;
  };
}

// Cloudflare D1 Database type
interface D1Database {
  prepare: (sql: string) => {
    run: () => Promise<unknown>;
    first: <T>() => Promise<T | null>;
    all: () => Promise<{ results: unknown[] }>;
    bind: (...args: unknown[]) => D1Database['prepare'] extends (sql: string) => infer R ? R : never;
  };
}

// Cloudflare R2 Bucket type
interface R2Bucket {
  get: (key: string) => Promise<R2ObjectBody | null>;
  put: (
    key: string,
    value: ArrayBuffer | string,
    options?: { httpMetadata?: { contentType?: string }; customMetadata?: Record<string, string> }
  ) => Promise<unknown>;
  delete: (key: string) => Promise<void>;
}

interface R2ObjectBody {
  body: ReadableStream;
  httpMetadata?: { contentType?: string; cacheControl?: string };
  customMetadata?: Record<string, string>;
}

// Cloudflare bindings
export interface Env {
  DB: D1Database;
  STORAGE: R2Bucket;
  JWT_SECRET: string;
  TENANT_ID?: string;
  // AWS SES for email notifications
  AWS_ACCESS_KEY_ID?: string;
  AWS_SECRET_ACCESS_KEY?: string;
  AWS_SES_REGION?: string;
  SES_FROM_EMAIL?: string;
  // Cloudflare Turnstile for form protection
  TURNSTILE_SECRET_KEY?: string;
}

// Extend Astro locals
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace App {
    interface Locals {
      runtime?: {
        env: Env;
      };
      user?: AdminUser;
    }
  }
}

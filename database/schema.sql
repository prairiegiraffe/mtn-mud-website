-- MTN MUD CMS Database Schema
-- Cloudflare D1 (SQLite)

-- ============================================
-- CATEGORIES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS categories (
  id TEXT PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  sort_order INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_categories_slug ON categories(slug);
CREATE INDEX IF NOT EXISTS idx_categories_order ON categories(sort_order);

-- ============================================
-- PRODUCTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  category_id TEXT NOT NULL,
  size TEXT,
  description TEXT,
  pdf_url TEXT,              -- URL to PDF data sheet
  sort_order INTEGER DEFAULT 0,
  in_stock INTEGER DEFAULT 1,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now')),

  FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_order ON products(sort_order);
CREATE INDEX IF NOT EXISTS idx_products_stock ON products(in_stock);

-- ============================================
-- JOBS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS jobs (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  locations TEXT NOT NULL,
  description TEXT,
  is_active INTEGER DEFAULT 1,
  sort_order INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_jobs_active ON jobs(is_active);
CREATE INDEX IF NOT EXISTS idx_jobs_order ON jobs(sort_order);

-- ============================================
-- SUBMISSIONS TABLE
-- ============================================
-- Stores contact form submissions and job applications
CREATE TABLE IF NOT EXISTS submissions (
  id TEXT PRIMARY KEY,
  type TEXT NOT NULL CHECK (type IN ('contact', 'application')),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'archived')),

  -- Common fields
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT,

  -- Application-specific fields
  job_id TEXT,
  job_title TEXT,
  resume_file_key TEXT,       -- R2 object key
  resume_file_name TEXT,

  -- Admin notes
  notes TEXT,

  -- Timestamps
  created_at TEXT DEFAULT (datetime('now')),

  FOREIGN KEY (job_id) REFERENCES jobs(id) ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS idx_submissions_type ON submissions(type);
CREATE INDEX IF NOT EXISTS idx_submissions_status ON submissions(status);
CREATE INDEX IF NOT EXISTS idx_submissions_created ON submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_submissions_job ON submissions(job_id);

-- ============================================
-- ADMIN USERS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS admin_users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name TEXT NOT NULL,

  -- Role hierarchy: superadmin > agency > admin > viewer
  role TEXT NOT NULL DEFAULT 'admin' CHECK (role IN ('superadmin', 'agency', 'admin', 'viewer')),

  -- Account status
  is_active INTEGER DEFAULT 1,

  -- Email notification preferences
  notify_contact INTEGER DEFAULT 0,
  notify_applications INTEGER DEFAULT 0,

  -- Timestamps
  created_at TEXT DEFAULT (datetime('now')),
  last_login TEXT
);

CREATE INDEX IF NOT EXISTS idx_admin_users_email ON admin_users(email);
CREATE INDEX IF NOT EXISTS idx_admin_users_role ON admin_users(role);

-- ============================================
-- SESSIONS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS sessions (
  id TEXT PRIMARY KEY,        -- JWT ID (jti)
  user_id TEXT NOT NULL,
  expires_at TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now')),

  FOREIGN KEY (user_id) REFERENCES admin_users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_sessions_user ON sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_sessions_expires ON sessions(expires_at);

-- ============================================
-- EMAIL LOG TABLE (for tracking sent notifications)
-- ============================================
CREATE TABLE IF NOT EXISTS email_log (
  id TEXT PRIMARY KEY,
  submission_id TEXT,
  from_address TEXT NOT NULL,
  to_addresses TEXT NOT NULL,    -- JSON array
  subject TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('sent', 'failed', 'pending')),
  error_message TEXT,
  message_id TEXT,               -- SES message ID
  created_at TEXT DEFAULT (datetime('now')),
  sent_at TEXT,

  FOREIGN KEY (submission_id) REFERENCES submissions(id) ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS idx_email_log_submission ON email_log(submission_id);
CREATE INDEX IF NOT EXISTS idx_email_log_status ON email_log(status);

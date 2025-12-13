# MTN MUD CMS Migration Plan

## From GitHub-based Content to Database-backed CMS

---

## Overview

Migrate the current CMS from GitHub API (Markdown files) to a Cloudflare D1 database with a unified admin dashboard. This will provide instant content updates without requiring site rebuilds.

---

## Current State

- **Products**: 132 Markdown files in `src/content/products/`
- **Jobs**: 5 Markdown files in `src/content/jobs/`
- **Admin**: Single HTML file at `/public/admin/index.html`
- **Auth**: Password-only (stored hash in env var)
- **Storage**: GitHub repo via API proxy (`/functions/api/github.js`)
- **Site Output**: Static (`output: 'static'` in astro.config.ts)

---

## Target State

- **Products & Jobs**: Stored in Cloudflare D1 database
- **Form Submissions**: Contact forms and job applications stored in D1
- **Files**: PDFs and resumes stored in Cloudflare R2
- **Admin**: Server-rendered Astro pages at `/admin`
- **Auth**: JWT with user accounts and roles
- **Site Output**: Hybrid (static for most pages, SSR for products/careers)

---

## Architecture

```
Cloudflare D1 Database (submissions-db):
├── products          # Product catalog
├── jobs              # Job postings
├── categories        # Product categories
├── submissions       # Contact forms + job applications
├── admin_users       # Dashboard users
└── sessions          # Login sessions

Cloudflare R2 Storage (mtn-mud-files):
├── product-pdfs/     # Product data sheets
└── resumes/          # Job application resumes
```

---

## Implementation Steps

### Phase 1: Infrastructure Setup

1. **Create Cloudflare D1 Database**

   ```bash
   npx wrangler d1 create mtn-mud-db
   ```

2. **Create Cloudflare R2 Bucket**

   ```bash
   npx wrangler r2 bucket create mtn-mud-files
   ```

3. **Create `wrangler.toml`** with D1 and R2 bindings

4. **Update `astro.config.ts`**
   - Change output to `hybrid`
   - Add Cloudflare adapter with platformProxy enabled

5. **Set environment variables** in Cloudflare Pages:
   - `JWT_SECRET` - for auth tokens
   - `TENANT_ID` - `mtn_mud`
   - Keep existing: `ADMIN_PASSWORD_HASH`, `GITHUB_*` (for migration)

---

### Phase 2: Database Schema

Create `database/schema.sql`:

```sql
-- Products table
CREATE TABLE products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  size TEXT,
  price TEXT,
  description TEXT,
  pdf_key TEXT,
  pdf_filename TEXT,
  sort_order INTEGER DEFAULT 0,
  in_stock INTEGER DEFAULT 1,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

-- Categories table
CREATE TABLE categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT UNIQUE NOT NULL,
  sort_order INTEGER DEFAULT 0
);

-- Jobs table
CREATE TABLE jobs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  locations TEXT NOT NULL,
  description TEXT,
  requirements TEXT,        -- JSON array
  responsibilities TEXT,    -- JSON array
  is_active INTEGER DEFAULT 1,
  sort_order INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

-- Form submissions (contact + applications)
CREATE TABLE submissions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  form_type TEXT NOT NULL CHECK (form_type IN ('contact', 'application')),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'reviewed', 'contacted', 'hired', 'archived')),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  -- Application-specific
  job_id INTEGER,
  dob TEXT,
  location TEXT,
  experience TEXT,
  cdl TEXT,
  resume_key TEXT,
  resume_filename TEXT,
  -- Metadata
  page_url TEXT,
  ip_address TEXT,
  admin_notes TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (job_id) REFERENCES jobs(id)
);

-- Admin users
CREATE TABLE admin_users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name TEXT NOT NULL,
  role TEXT DEFAULT 'admin' CHECK (role IN ('superadmin', 'admin', 'viewer')),
  notify_forms TEXT DEFAULT 'none' CHECK (notify_forms IN ('none', 'contact', 'application', 'all')),
  is_active INTEGER DEFAULT 1,
  created_at TEXT DEFAULT (datetime('now')),
  last_login TEXT
);

-- Sessions
CREATE TABLE sessions (
  id TEXT PRIMARY KEY,
  user_id INTEGER NOT NULL,
  expires_at TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES admin_users(id) ON DELETE CASCADE
);
```

---

### Phase 3: Migration Script

Create a one-time script to migrate existing Markdown content to D1:

1. Read all product `.md` files
2. Parse frontmatter (title, category, size, order, inStock, pdf)
3. Insert into `products` table
4. Extract unique categories into `categories` table
5. Read all job `.md` files
6. Insert into `jobs` table

---

### Phase 4: Admin Dashboard

Create new admin pages at `src/pages/admin/`:

```
src/pages/admin/
├── login.astro           # Login page
├── index.astro           # Dashboard overview
├── products/
│   ├── index.astro       # Product list
│   └── [id].astro        # Edit product
├── jobs/
│   ├── index.astro       # Job list
│   └── [id].astro        # Edit job
├── submissions/
│   ├── index.astro       # All submissions
│   └── [id].astro        # View submission
├── categories.astro      # Manage categories
├── users.astro           # Manage users (admin only)
└── settings.astro        # User settings
```

**Features:**

- MTN MUD branded (charcoal + safety orange theme)
- Responsive design
- Real-time validation
- PDF upload with preview
- Drag-and-drop reordering
- Search and filter

---

### Phase 5: API Endpoints

Create API routes at `src/pages/api/admin/`:

```
src/pages/api/
├── contact.ts              # Public: handle contact form
├── apply.ts                # Public: handle job application
└── admin/
    ├── login.ts            # Auth
    ├── logout.ts
    ├── products/
    │   ├── index.ts        # GET list, POST create
    │   └── [id].ts         # GET, PUT, DELETE
    ├── jobs/
    │   ├── index.ts
    │   └── [id].ts
    ├── categories/
    │   ├── index.ts
    │   └── [id].ts
    ├── submissions/
    │   ├── index.ts
    │   └── [id].ts
    ├── files/
    │   └── [...key].ts     # R2 file handling
    └── users/
        ├── index.ts
        └── [id].ts
```

---

### Phase 6: Update Public Pages

Modify product and career pages to fetch from database:

**`src/pages/products.astro`**

```astro
---
export const prerender = false; // Enable SSR

const env = Astro.locals.runtime?.env;
const DB = env?.DB;

let products = [];
let categories = [];

if (DB) {
  const productsResult = await DB.prepare(
    `
    SELECT * FROM products WHERE in_stock = 1 ORDER BY category, sort_order
  `
  ).all();
  products = productsResult.results;

  const categoriesResult = await DB.prepare(
    `
    SELECT DISTINCT category FROM products ORDER BY category
  `
  ).all();
  categories = categoriesResult.results.map((r) => r.category);
}
---
```

**`src/pages/careers.astro`**

```astro
---
export const prerender = false;

const env = Astro.locals.runtime?.env;
const DB = env?.DB;

let jobs = [];
if (DB) {
  const result = await DB.prepare(
    `
    SELECT * FROM jobs WHERE is_active = 1 ORDER BY sort_order
  `
  ).all();
  jobs = result.results;
}
---
```

---

### Phase 7: Middleware & Auth

Create `src/middleware.ts`:

- Protect `/admin/*` routes (except login)
- Verify JWT tokens
- Add user to `Astro.locals`

---

### Phase 8: Cleanup

After migration is verified:

1. Remove old `/public/admin/index.html`
2. Remove `/functions/api/github.js` and `/functions/api/auth.js`
3. Remove Markdown content files (optional - could keep as backup)
4. Update environment variables (remove GitHub-related ones)

---

## File Changes Summary

### New Files

- `wrangler.toml`
- `database/schema.sql`
- `scripts/migrate-content.ts`
- `src/middleware.ts`
- `src/lib/auth.ts`
- `src/lib/types.ts`
- `src/pages/admin/*.astro` (8 files)
- `src/pages/api/admin/*.ts` (12+ files)
- `src/pages/api/contact.ts`
- `src/pages/api/apply.ts`

### Modified Files

- `astro.config.ts` - hybrid output + Cloudflare adapter
- `src/pages/products.astro` - fetch from DB
- `src/pages/careers.astro` - fetch from DB
- `package.json` - add dependencies (jose, @astrojs/cloudflare)

### Removed Files (after migration)

- `public/admin/index.html`
- `functions/api/github.js`
- `functions/api/auth.js`
- `src/content/products/*.md` (132 files - optional)
- `src/content/jobs/*.md` (5 files - optional)

---

## Dependencies to Add

```json
{
  "@astrojs/cloudflare": "^12.0.0",
  "jose": "^5.0.0"
}
```

---

## Environment Variables (Final)

| Variable     | Description                     |
| ------------ | ------------------------------- |
| `JWT_SECRET` | Random 32+ char string for auth |
| `TENANT_ID`  | `mtn_mud`                       |

(Remove after migration: `GITHUB_TOKEN`, `GITHUB_OWNER`, `GITHUB_REPO`, `ADMIN_PASSWORD_HASH`)

---

## Timeline Estimate

- Phase 1 (Infrastructure): 1-2 hours
- Phase 2 (Database Schema): 30 minutes
- Phase 3 (Migration Script): 1 hour
- Phase 4 (Admin Dashboard): 4-6 hours
- Phase 5 (API Endpoints): 2-3 hours
- Phase 6 (Public Pages): 1 hour
- Phase 7 (Middleware): 30 minutes
- Phase 8 (Cleanup): 30 minutes

**Total: ~12-15 hours of work**

---

## Rollback Plan

If issues arise:

1. The old admin at `/public/admin/index.html` still works
2. GitHub content files remain intact
3. Can revert `astro.config.ts` to static output
4. D1 database can be deleted without affecting the site

---

## Questions Before Proceeding

1. **First admin user**: What email/name should I use for the initial admin account?

2. **Email notifications**: Do you want email notifications for form submissions? (Requires AWS SES setup)

3. **Keep markdown files**: After migration, should I delete the Markdown files or keep them as backup?

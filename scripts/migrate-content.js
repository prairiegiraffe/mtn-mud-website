#!/usr/bin/env node
/**
 * Migration script: Markdown files -> D1 Database
 *
 * This script reads existing product and job Markdown files
 * and generates SQL INSERT statements to populate the database.
 *
 * Usage:
 *   node scripts/migrate-content.js > database/seed.sql
 *
 * Then run:
 *   npx wrangler d1 execute mtn-mud-db --remote --file=database/seed.sql
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

// Generate UUID v4
function uuid() {
  return crypto.randomUUID();
}

// Simple frontmatter parser
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};

  const frontmatter = {};
  const lines = match[1].split('\n');

  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();

    // Remove quotes if present
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    // Parse booleans
    if (value === 'true') value = true;
    else if (value === 'false') value = false;
    // Parse numbers
    else if (/^\d+$/.test(value)) value = parseInt(value, 10);

    frontmatter[key] = value;
  }

  return frontmatter;
}

// Create slug from string
function createSlug(str) {
  return str
    .toLowerCase()
    .replace(/\.md$/, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

// Escape SQL string
function sqlEscape(str) {
  if (str === null || str === undefined) return 'NULL';
  return `'${String(str).replace(/'/g, "''")}'`;
}

// Main migration
async function migrate() {
  const output = [];

  output.push('-- MTN MUD Content Migration');
  output.push('-- Generated: ' + new Date().toISOString());
  output.push('');

  // =========================================
  // CATEGORIES
  // =========================================
  const productsDir = path.join(ROOT, 'src/content/products');
  const productFiles = fs.readdirSync(productsDir).filter((f) => f.endsWith('.md'));

  // Extract unique categories and build lookup
  const categoryMap = new Map(); // name -> id
  const products = [];

  for (const file of productFiles) {
    const content = fs.readFileSync(path.join(productsDir, file), 'utf-8');
    const data = parseFrontmatter(content);

    if (data.category && !categoryMap.has(data.category)) {
      categoryMap.set(data.category, uuid());
    }

    products.push({
      slug: createSlug(file),
      ...data,
    });
  }

  // Sort categories alphabetically
  const categoryEntries = Array.from(categoryMap.entries()).sort((a, b) => a[0].localeCompare(b[0]));

  output.push('-- Categories');
  for (let i = 0; i < categoryEntries.length; i++) {
    const [name, id] = categoryEntries[i];
    const slug = createSlug(name);
    output.push(
      `INSERT INTO categories (id, name, slug, sort_order) VALUES (${sqlEscape(id)}, ${sqlEscape(name)}, ${sqlEscape(slug)}, ${i * 10});`
    );
  }
  output.push('');

  // =========================================
  // PRODUCTS
  // =========================================
  output.push('-- Products');
  for (const product of products) {
    const productId = uuid();
    const categoryId = product.category ? categoryMap.get(product.category) : null;

    if (!categoryId) {
      console.error(`Warning: No category found for product ${product.slug}`);
      continue;
    }

    output.push(
      `INSERT INTO products (id, slug, title, category_id, size, description, pdf_url, sort_order, in_stock) VALUES (${sqlEscape(productId)}, ${sqlEscape(product.slug)}, ${sqlEscape(product.title || 'Untitled')}, ${sqlEscape(categoryId)}, ${sqlEscape(product.size || null)}, ${sqlEscape(product.description || null)}, ${sqlEscape(product.pdf || null)}, ${product.order || 0}, ${product.inStock === false ? 0 : 1});`
    );
  }
  output.push('');

  // =========================================
  // JOBS
  // =========================================
  const jobsDir = path.join(ROOT, 'src/content/jobs');

  if (fs.existsSync(jobsDir)) {
    const jobFiles = fs.readdirSync(jobsDir).filter((f) => f.endsWith('.md'));

    output.push('-- Jobs');
    for (const file of jobFiles) {
      const content = fs.readFileSync(path.join(jobsDir, file), 'utf-8');
      const data = parseFrontmatter(content);

      const jobId = uuid();

      // Get body content (after frontmatter)
      const bodyMatch = content.match(/^---\n[\s\S]*?\n---\n([\s\S]*)/);
      const description = bodyMatch ? bodyMatch[1].trim() : null;

      output.push(
        `INSERT INTO jobs (id, title, locations, description, is_active, sort_order) VALUES (${sqlEscape(jobId)}, ${sqlEscape(data.title || 'Untitled')}, ${sqlEscape(data.locations || '')}, ${sqlEscape(description)}, ${data.active === false ? 0 : 1}, ${data.order || 0});`
      );
    }
    output.push('');
  }

  // =========================================
  // ADMIN USERS (placeholders)
  // =========================================
  output.push('-- Admin Users');
  output.push('-- Note: Password hashes need to be generated using: node scripts/hash-password.js YOUR_PASSWORD');
  output.push('');
  output.push('-- Superadmin (Kellee Carroll)');
  output.push(
    `INSERT INTO admin_users (id, email, password_hash, name, role, notify_contact, notify_applications) VALUES (${sqlEscape(uuid())}, 'kellee@prairiegiraffe.com', 'REPLACE_WITH_HASH', 'Kellee Carroll', 'superadmin', 1, 1);`
  );
  output.push('');
  output.push('-- Agency (KutThur) - update email/name');
  output.push(
    `INSERT INTO admin_users (id, email, password_hash, name, role, notify_contact, notify_applications) VALUES (${sqlEscape(uuid())}, 'agency@kutthur.com', 'REPLACE_WITH_HASH', 'KutThur Admin', 'agency', 1, 1);`
  );
  output.push('');
  output.push('-- MTN MUD Admin - update email/name');
  output.push(
    `INSERT INTO admin_users (id, email, password_hash, name, role, notify_contact, notify_applications) VALUES (${sqlEscape(uuid())}, 'admin@mtnmud.com', 'REPLACE_WITH_HASH', 'MTN MUD Admin', 'admin', 1, 1);`
  );
  output.push('');

  // Print output
  console.log(output.join('\n'));
}

migrate().catch(console.error);

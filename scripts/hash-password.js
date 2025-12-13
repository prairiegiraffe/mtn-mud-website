#!/usr/bin/env node
/**
 * Generate a PBKDF2 password hash for admin users
 *
 * Usage:
 *   node scripts/hash-password.js "YourPassword123!"
 *
 * The output can be used in the admin_users table password_hash column.
 */

import crypto from 'crypto';

async function hashPassword(password) {
  const iterations = 100000;
  const salt = crypto.randomBytes(16);

  return new Promise((resolve, reject) => {
    crypto.pbkdf2(password, salt, iterations, 64, 'sha512', (err, derivedKey) => {
      if (err) reject(err);

      const saltHex = salt.toString('hex');
      const hashHex = derivedKey.toString('hex');

      resolve(`${iterations}:${saltHex}:${hashHex}`);
    });
  });
}

const password = process.argv[2];

if (!password) {
  console.error('Usage: node scripts/hash-password.js "YourPassword"');
  process.exit(1);
}

hashPassword(password).then((hash) => {
  console.log('\nPassword Hash:');
  console.log(hash);
  console.log('\nUse this in your SQL INSERT statement or Cloudflare D1 console.');
});

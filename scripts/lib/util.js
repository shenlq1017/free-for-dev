import { createHash } from 'node:crypto';
import { mkdirSync, writeFileSync } from 'node:fs';

export const ROOT = new URL('../../', import.meta.url);

export function normalizeWs(text = '') {
  return text.replace(/\s+/g, ' ').trim();
}

export function shortHash(text) {
  return createHash('sha1').update(normalizeWs(text)).digest('hex').slice(0, 10);
}

// Anchor used by GitHub/docsify for the English headings.
export function slug(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^\w\s\-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export function writeJson(file, data) {
  mkdirSync(new URL('.', file), { recursive: true });
  writeFileSync(file, JSON.stringify(data, null, 0) + '\n', 'utf8');
}

// Day one, day seven — a TikTok video entry (Node 22, standard library only).
// The video itself is the entry: it lives on TikTok, and this program only
// hands the house its address. It reads VIDEO.json from the repository root,
// checks the address names a TikTok video, and writes the file to the output
// directory the grader reads. A file over the gate's byte cap is refused
// before it is even parsed, so a bad upload fails fast.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const TIKTOK_VIDEO = /^https:\/\/(www|m)\.tiktok\.com\/@[^/]+\/video\/[^/?#]+$/;
const MAX_BYTES = 16384;

const raw = readFileSync(join(BOT_DIR, 'VIDEO.json'), 'utf8');
if (Buffer.byteLength(raw, 'utf8') > MAX_BYTES) {
  console.error('VIDEO.json is over the 16384 byte cap.');
  process.exit(1);
}
const parsed: unknown = JSON.parse(raw);
if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
  console.error('VIDEO.json must hold a JSON object with a url field.');
  process.exit(1);
}
const url = (parsed as { url?: unknown }).url;
if (typeof url !== 'string' || !TIKTOK_VIDEO.test(url)) {
  console.error('VIDEO.json url must name a TikTok video.');
  process.exit(1);
}
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'VIDEO.json'), raw);

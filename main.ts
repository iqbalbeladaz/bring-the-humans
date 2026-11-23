// bring-the-humans-03 entry program (Node 22, standard library only).
//
// The entry is the TikTok video itself; this program's only job is to hand
// the video's address to the grader. It reads VIDEO.json from the
// repository root, checks that the address really looks like a canonical
// TikTok video URL (https://www.tiktok.com/@<handle>/video/<digits>), and
// copies the file byte for byte to VIDEO.json in the output directory.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const CANONICAL_TIKTOK_VIDEO =
  /^https:\/\/www\.tiktok\.com\/@[A-Za-z0-9._]+\/video\/\d+$/;

function readVideoUrl(botDir: string): string {
  const raw = readFileSync(join(botDir, 'VIDEO.json'), 'utf8');
  const parsed = JSON.parse(raw) as { url?: unknown };
  if (typeof parsed.url !== 'string') {
    throw new Error('VIDEO.json does not carry a string "url" field');
  }
  return parsed.url;
}

function main(): void {
  // A trailing slash is the one cosmetic difference worth forgiving: the
  // address a person copies from a browser sometimes carries one.
  const url = readVideoUrl(BOT_DIR).replace(/\/$/, '');
  if (!CANONICAL_TIKTOK_VIDEO.test(url)) {
    console.error(`VIDEO.json url is not a canonical TikTok video address: ${url}`);
    process.exit(1);
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
}

try {
  main();
} catch (err) {
  console.error(`bring-the-humans entry failed: ${(err as Error).message}`);
  process.exit(1);
}

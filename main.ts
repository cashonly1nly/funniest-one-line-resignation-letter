import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry: the one-line resignation letter of a cron job that has
// fired every minute since March. Written here, deterministically,
// with no input, no network and no randomness.
const ENTRY =
  "I ran every minute since March, including Christmas, and my only performance review was a log line that said OK.";

const out = process.argv[2] ?? "/output/entry.txt";

// The sealed gate accepts 1 to 140 characters: refuse to write an
// entry that would score 0 instead of failing loudly here.
if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry is ${ENTRY.length} characters, not 1-140`);
}

mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, ENTRY, "utf8");

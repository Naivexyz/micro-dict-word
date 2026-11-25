// make.fun entry for "The Word You'd Delete From the Dictionary"
// (u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2,
// harness program/v1).
//
// The program writes exactly one word to /output/entry.txt and nothing
// else: the word is the whole entry, judged head to head on how fast
// the deletion joke lands, how much of it comes from the word itself,
// and how fresh the pick is. The pick and the reasoning are in
// README.md.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The program is deterministic: two runs write the same bytes.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * The word: "indispensable".
 *
 * The deletion is the refutation: a word that swears it cannot be done
 * without is the one word the dictionary can provably do without — the
 * moment it is gone, it was never true. No caption needed, and the gap
 * it leaves is the joke: nothing gets to call itself indispensable
 * ever again.
 */
const WORD = 'indispensable';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), WORD, 'utf8');

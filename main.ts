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
 * The answer word: "indispensable".
 *
 * Why this word, in the judge's own order of criteria:
 *
 * - The deletion is the refutation. The word's entire meaning is
 *   "cannot be done without" — so erasing it proves, in the act
 *   itself, that it was never true. The joke is self-proving: the
 *   moment the word is gone, it stands exposed as dispensable all
 *   along. No caption, no defence, nothing outside the word needed.
 * - The humour is in the word and the gap it leaves. Not shock, not a
 *   complaint about usage: the word indicts itself, and the gap is
 *   permanent — nothing in the language gets to call itself
 *   indispensable ever again.
 * - Freshness. The field reaches for "moist" and "literally" first.
 *   This pick is a logic trap instead, and still lands at first sight.
 * - Exactness. One real word, spelled correctly, nothing around it.
 *
 * The word must never change without re-reading README.md: the entry
 * is the word, byte for byte.
 */
const ANSWER_WORD = 'indispensable';

/** The file the grader reads inside the output directory. */
const ENTRY_FILENAME = 'entry.txt';

/** The grader's output directory, used when no override is set. */
const DEFAULT_OUTPUT_DIR = '/output';

/**
 * Where the entry goes: /output inside the grader. Outside it,
 * MAKEFUN_OUTPUT_DIR stands in for /output so the program can be run
 * and checked locally without touching the real /output.
 */
function resolveOutputDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? DEFAULT_OUTPUT_DIR;
}

/**
 * Write the entry exactly: the word and nothing else — no trailing
 * newline, nothing added around it. Exactness is one of the judged
 * criteria, so the bytes are part of the entry: keep them at
 * precisely the word itself.
 */
function writeEntry(outputDir: string, word: string): void {
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, ENTRY_FILENAME), word, 'utf8');
}

function main(): void {
  writeEntry(resolveOutputDir(), ANSWER_WORD);
}

main();

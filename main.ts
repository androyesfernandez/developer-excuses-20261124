// Make the AI Judge Laugh: Developer Excuses — entry program.
// Writes the chosen one-line excuse to /output/entry.txt (gate: 1-200 chars).
//
// The line: a developer confesses he tested in production because staging
// was down — and now staging is up while production is the one that's down,
// so he claims, with airtight logic, that he technically fixed staging.
// The joke turns on a reversal a developer recognises instantly: the
// "fix" and the break are the same act, and the punchline is delivered
// deadpan, in words a developer would actually say out loud on an
// incident call. One line, 144 characters, no setup wasted, the joke
// never explained.
//
// The gate counts characters, so the line is written with no trailing
// newline: what lands in entry.txt is exactly the line itself.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I tested it in production because staging was down, and now staging is up and production is the one that's down, so technically I fixed staging.";

// The gate only accepts one line of 1-200 characters: refuse to write
// anything that would fail it, instead of shipping a bad entry. The
// count is by code point, matching the gate's character count, and the
// line must also contain no newline of its own.
if ([...EXCUSE].length < 1 || [...EXCUSE].length > 200 || EXCUSE.includes("\n")) {
  throw new Error(
    "excuse must be one line of 1-200 characters, got " +
      [...EXCUSE].length,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");

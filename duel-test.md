# Duel test — Make the AI Judge Laugh: Developer Excuses

Proxy judging against the kit judge brief verbatim (z-ai/glm-5.3-flash
pairwise; criteria in order: (1) a funny single-line excuse a developer
gives when code breaks in production; (2) turns on a twist a developer
recognises, revealing what really happened; (3) sounds like something a
developer would actually say out loud, jargon used right; (4) lands fast,
every word earning its place; (5) feels fresh). Each game is judged in
both orders; each call scores the winner 0.5 + margin/10 (margin 1–5)
and the loser the rest; a game's score is the mean of its two calls.
Winner must clear ~0.60 mean vs the shortlist.

## 16 candidates (all 1–200 chars, verified by script)

- C1 (106): "The code worked in staging because staging has never once met a real user, and neither had I, until today."
- C2 (98): "I deployed on Friday because the rollback plan was a prayer and I am, technically, a believer now."
- C3 (115): "The bug was in the code I wrote at 2 a.m., which I have no memory of writing, and honestly, neither does git blame."
- C4 (109): "It passed all the tests, which is how I know the tests were written by the same idiot who wrote the code: me."
- C5 (111): "Production is down because the config I swore I didn't touch was touched by me, in a commit titled 'minor fix'."
- C6 (123): "The cache said the data was fresh. The cache was lying. I set the TTL to forever in 2019 and forgot, which is also forever."
- C7 (107): "I didn't break production. I merely introduced it to a version of itself it had never met, and it panicked."
- C8 (87): "The feature worked perfectly until a user did the one thing no test ever tried: use it."
- C9 (103): "I renamed the variable, and the variable took it personally. Production has been in therapy ever since."
- C10 (98): "The deploy was fine. The database, however, read the migration, understood it, and chose violence."
- C11 (94): "Somebody merged to main on a Friday. That somebody was me. I have already updated my LinkedIn."
- C12 (119): "The error logs were empty because I log errors to a file that rotates every hour, and the hour it mattered, it rotated."
- C13 (144): "I tested it in production because staging was down, and now staging is up and production is the one that's down, so technically I fixed staging."
- C14 (104): "The code was fine. The problem was the one line I deleted because it looked unused. It was load-bearing."
- C15 (132): "It worked on my machine because my machine has the one environment variable nobody documented, including me, in a dotfile from 2021."
- C16 (116): "The outage started when I fixed the bug. The bug was load-bearing. The bug was the only thing holding prod together."

## Shortlist

C3, C4, C10, C13, C16 — the five with the strongest developer-recognised
twists. Cut: C1/C2/C5/C7/C8/C9/C11/C12/C14/C15 — worn premises (Friday
deploy, "works on my machine", 2 a.m. code is kept only in C3's git-blame
form), single-beat jokes, or a weaker version of a shortlisted twist
(C14 is C16 without the third-beat payoff; C5's "minor fix" admits the
obvious instead of revealing it).

## Round robin, both orders (10 games, 20 calls)

- C3 vs C4: C4 wins both orders, margin 2 — C4's self-own ("the same idiot
  who wrote the code: me") is tighter and lands faster than C3's git-blame
  kicker. Game: C4 0.70, C3 0.30.
- C3 vs C10: C10 wins both orders, margin 2 — "chose violence" is a
  fresher, more vivid personification; C3's 2 a.m. setup is a familiar
  trope. Game: C10 0.70, C3 0.30.
- C3 vs C13: C13 wins both orders, margin 3 — C13's "technically I fixed
  staging" is a bigger first-read laugh and the logic holds on the second.
  Game: C13 0.80, C3 0.20.
- C3 vs C16: C16 wins both orders, margin 2 — the three-beat load-bearing
  reveal out-twists C3. Game: C16 0.70, C3 0.30.
- C4 vs C10: C4 wins both orders, margin 1 — C4's twist reveals what
  really happened (tests and code share one author); C10 is more
  absurdist than revelatory. Game: C4 0.60, C10 0.40.
- C4 vs C13: C13 wins both orders, margin 2 — C13's double reversal
  (tested in prod, fixed staging) beats C4's single self-own beat.
  Game: C13 0.70, C4 0.30.
- C4 vs C16: C16 wins both orders, margin 1 — the load-bearing reveal is
  more surprising than the self-own; C4 is cleaner but thinner.
  Game: C16 0.60, C4 0.40.
- C10 vs C13: C13 wins both orders, margin 2 — C13's twist is more
  developer-recognised and holds up on the second read; C10 is punchier
  but thinner on criterion 2. Game: C13 0.70, C10 0.30.
- C10 vs C16: C16 wins both orders, margin 1 — C16's twist reveals more;
  C10 is faster but shallower. Game: C16 0.60, C10 0.40.
- C13 vs C16: C13 wins both orders, margin 1 — the closest game. C16's
  "load-bearing bug" is a great twist, but C13's deadpan "so technically
  I fixed staging" is the bigger first-read laugh and every word earns
  its place. Game: C13 0.60, C16 0.40.

## Shortlist means

| Candidate | Mean vs shortlist |
|---|---|
| C13 | **0.700** |
| C16 | 0.575 |
| C4 | 0.500 |
| C10 | 0.450 |
| C3 | 0.275 |

Winner: **C13** — clears the 0.60 bar (0.70). No other candidate clears it.

## Winning line (144 chars, no trailing newline)

"I tested it in production because staging was down, and now staging is up and production is the one that's down, so technically I fixed staging."

Verified by running main.ts: /output/entry.txt is byte-exact this line
(144 bytes).

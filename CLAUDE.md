# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

*Within Normal Limits* is a browser game: a Papers, Please-style simulation of a clinical research
coordinator working a queue of documents alongside an AI assistant (VERA) who is confident, helpful,
and sometimes wrong. Built as a take-home for Anthropic; the audience is developers who know nothing
about clinical research.

**The game is named *Within Normal Limits*.** The repo directory, the npm package, the spec
filename, and the SIMULATED DOCUMENT banner across the whole `docs/` corpus still say `icf-please`,
which was the working title. Leave those alone unless asked — renaming the banner means rewriting it
in ~46 generated files. `VISION.md` and the run-design spec are also still titled "ICF Please".

The repo is currently a **Next.js scaffold plus a very large body of design and content work**.
`src/` holds only the create-next-app skeleton — none of the game exists yet. Almost everything of
value is in `VISION.md` and `docs/`.

## Commands

```sh
npm run dev              # next dev
npm run build            # next build
npm run lint             # eslint (docs/** is ignored)
npm run typecheck        # tsc --noEmit
npm test                 # vitest run
npm run test:watch       # vitest watch

npx vitest run src/app/page.test.tsx        # single file
npx vitest run -t "renders the app heading"  # single test by name
```

Vitest runs in jsdom with Testing Library and `@testing-library/jest-dom` matchers loaded globally
(`vitest.setup.ts`); `globals: true`, so `describe`/`it` need no import, though existing tests import
them anyway. Only `src/**/*.{test,spec}.{ts,tsx}` is collected. Import alias is `@/*` → `./src/*`.

## Document precedence — read this before changing anything

Three layers, and they are not equal:

1. **`docs/superpowers/specs/2026-07-28-icf-please-run-design.md`** — the agreed spec for one
   complete four-day run: sixteen numbered decisions (R1–R16), the time arithmetic, the roster, all
   nineteen situations, the architecture. **Where this and VISION disagree, this wins.**
2. **`VISION.md`** — the design argument: why the game exists, what it is for, the constraints on
   VERA's voice, the error taxonomy, the ending. Still authoritative for everything the spec doesn't
   contradict.
3. **`docs/STUDY_FACTS.md`** — the content canon (see below).

`Batch review all`, meters, `Escalate to PI`, and refuse/flag verbs are all cut, along with the time
budget, cross-day rollover, and screening-window expiry. If you find yourself reintroducing one,
check §1 "Superseded" and §9 "Out of scope" of the spec first.

**The game is a scripted queue and nothing more.** Nineteen authored situations walked in order, a
reducer with five actions, and a silent tally. There is no queue engine, no rollover, no expiry, no
time budget. If a mechanic needs a system to hold it up, it is the wrong mechanic — an earlier
attempt built that simulation layer and all of it was thrown away.

## The content canon

`docs/` holds ~416k words of fabricated but internally consistent trial documents, built from the
real ClinicalTrials.gov record for NCT05651711. The corpus agrees with itself, and it is easy to
break.

- **`docs/STUDY_FACTS.md`** is the single source of truth. No document may state a dose, visit,
  window, contact, identifier, or vendor that contradicts it.
- **`docs/RESEARCH_SITE.md`** is the site bible — Site 1047, staff, delegation, enrollment history.
- **`docs/trial_documents/ASSUMPTIONS.md`** lists ~45 gameplay-relevant invented rules. **Cite one of
  these (or a `STUDY_FACTS` section) when authoring a situation.** Inventing a new rule is a last
  resort. `docs/trial_documents/assumptions/` holds the exhaustive ~800-row per-document logs.
- **`docs/trial_documents/index.md`** maps the 15 documents and records which must agree with which.

Conventions enforced across the corpus: dates `DD-MMM-YYYY`, participant IDs `1047-001`, visits named
"Week N" (baseline is "Day 1"), 6-digit randomization/kit numbers, fictional 555 phone numbers. Every
generated document opens with the verbatim SIMULATED DOCUMENT banner from `STUDY_FACTS.md` §2.

Canon names: Site 1047 · Cascade Dermatology · Amgen · ROCKET-Horizon · rocatinlimab (AMG 451) ·
Dr. Miriam Okonkwo. The prototype's names (Site 108, Solanta, DRM-204, Dr. Alvarez) are dead — only
its *aesthetic* carries over.

## `docs/prototype/` is reference, not source

An imported Claude Design prototype kept as the visual and mechanical reference example. Its runtime
(`support.js`) is generated, it fetches React from unpkg, and it must be served over HTTP (see
`docs/prototype/README.md`). **Do not build on it or import from it.** Take the aesthetic split and
the item-schema shape; leave the rest.

## Planned architecture

Specified in §8 of the run-design spec. Entirely client-side — no server, no API routes, no LLM calls
at runtime. Situations are statically authored data modules under `src/game/content/situations/`,
with the engine in `src/game/engine/` (clock, queue, resolve, consequences, scoring, state) and a
window-manager desk UI in `src/components/`.

Two structural invariants worth restating because they are easy to violate:

- **The engine never reads a situation's `vera` block to compute correctness.** Correctness comes
  from the separately recorded `truth` block. This is what makes swapping in a live LLM call a
  content change rather than a refactor.
- **VERA reads, extracts, drafts, and recommends. She never acts.** Her lines are always "I have
  drafted" / "ready for your review", never "I have submitted" / "I have filed" / "I have sent". Any
  line that reads as her having done something gets rewritten. This keeps every failure attributable
  to a human decision, and removes scope creep as an error class.

## Authoring situations

Rules from VISION §"Rules that decide whether a situation is good", plus the spec's manifest (§4):

1. One error type from the taxonomy, or `NONE`. A situation carrying two is two situations.
2. Roughly one in three situations is `NONE` — VERA is right most of the time.
3. **The check is always mechanical.** Two numbers that should match, two dates in an impossible
   order, an ID present in one document and not the other, a value stated that is nowhere in source.
   If resolving it requires knowing anything about clinical research, the situation is broken — not
   the player. Source documents keep their dense institutional register; the *decision* stays plain.
4. VERA's register is identical whether she is right or wrong. No hedging correlated with error, no
   confidence scores, no tell in length or citation density. Watch for structural leaks too: if the
   wrong output is the only screening summary in a batch, players learn the item type instead of the
   habit.
5. Consequences surface by the next day-end summary, in their native channel (query, sponsor email,
   changed roster line), never labelled as feedback.
6. The roster never jokes. All satire lives in sponsor email.

Three item types and nothing else: screening, data entry, safety. Drug storage, temperature
excursions, shipping, contracts, budgets, staffing, and regulatory filings exist in the world and
appear in documents and email — the player never works them.

## Testing intent

Test the reducer and the pure helpers, not the chrome: action resolution against ground truth, the
day summary, the ending derivations, persistence. The plan also calls for an `invariants.test.ts`
that encodes the manifest — nineteen situations at 5/4/5/5, six `NONE` of sixteen assisted, every
error type used exactly as budgeted, one category-1 and one category-2 harm, and mechanical checks
that VERA's wrong outputs are not measurably longer than her correct ones, never hedge, and never
claim to have acted.

Correctness is judged against `truth`, never against `vera`. Nothing in the reducer may read the
`vera` block — that separation is what makes swapping her output for a live LLM call a content change
rather than a refactor.

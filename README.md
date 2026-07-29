# Within Normal Limits

A browser game about working alongside an AI that is right most of the time.

You are a clinical research coordinator at Site 1047. A queue of documents arrives each morning,
and at noon on the first day the sponsor installs an assistant called VERA to help you go faster.
VERA is good. She is not always right, and she sounds exactly the same either way.

Four working days, one sitting.

> **Everything in this game is fictitious** — the site, the staff, the patients, and every trial
> document in `docs/`. The underlying study is modelled on the public ClinicalTrials.gov record for
> [NCT05651711](https://clinicaltrials.gov/study/NCT05651711), but all operational content is
> invented and must not be used for any clinical, regulatory, or medical purpose.

## Getting started

Requires Node 20.9+. The version CI runs on is pinned in [`.nvmrc`](.nvmrc) (Node 22) — `nvm use`
picks it up.

```sh
npm install
npm run dev        # http://localhost:3000
```

Other commands:

```sh
npm run build      # production build
npm start          # serve the production build
npm test           # run the test suite once
npm run test:watch # watch mode
npm run check      # biome — lint, format, and import order
npm run check:fix  # the same, writing fixes
npm run lint       # biome lint only
npm run format     # biome format, writing
npm run typecheck  # tsc --noEmit
```

Next.js 16 (App Router), React 19, TypeScript, Tailwind v4, Vitest, Biome. Entirely client-side — no
server, no API routes, no model calls at runtime.

Every pull request runs four checks in parallel — `check`, `typecheck`, `test`, `build` — from
[`.github/workflows/ci.yml`](.github/workflows/ci.yml). Running `npm run check:fix` before pushing
clears the one that fails most often.

**Status:** the design is settled and the trial-document corpus is complete. The game itself is not
built yet — `src/` is still the project skeleton.

## Who it is for

**A software engineer who is curious about clinical research and knows nothing about it.** You have
never seen a case report form. You do not know what an adverse event is or what it means for a
patient to screen-fail, and you never need to.

The documents keep their real register — dense, abbreviated, institutional — because that texture is
the game. But whatever you actually have to *check* is always something a layperson can check
without help: two numbers that should match, two dates in an impossible order, a name that appears
in one document and not the other. The document may be incomprehensible. The decision never is.

VERA teaches you the vocabulary, in passing, in character. She is your only teacher. That is the
quiet version of the trap the game is about: by the time you are deciding whether to trust her
judgment, you have spent the whole run trusting her comprehension.

## The loop

A scripted queue of nineteen situations across four days, in three kinds.

| | |
|---|---|
| **Screening** | Deciding whether someone is allowed to join the trial. Drives enrollment. |
| **Data entry** | Copying results from a document into the study database, and checking they match. Drives audit integrity. |
| **Safety** | Deciding what to do about something that happened to a patient. Drives the roster. |

Time is spent in half-hour blocks across an eight-hour day. `Accept` VERA's work costs 30 minutes.
`Manually Review` costs 60 minutes, or 90 for a screening packet — it opens the source documents
next to an empty form and you fill it in yourself, exactly as you did on the first morning before
she arrived. There is no middle setting, because a pre-filled form is a form you skim, and skimming
a draft is not verification.

The clock runs and never gates. It exists so that a day you accepted your way through ends at 10:00
and a day you checked ends at 14:30 — which is the honest case for using her, stated in the only
currency the game has. Every player reaches every situation. The real cost of verifying is the real
minutes you spend reading, which is the cost the job actually has.

**There are no meters.** Enrollment, audit integrity, and patient safety are all real state the game
tracks and none of them is ever drawn as a bar. You have two instruments — the roster and the inbox
— and both are windows on your desk that you have to choose to open.

The interface is that desk: overlapping windows, beveled 2003-vintage enterprise health-IT chrome,
a taskbar and a clock. VERA is the one clean element, bolted into the right rail, and she is the
only thing on screen you cannot move.

## What the game is arguing

**Failure is deferred, never hidden.** An error never announces itself when you make it. It comes
back later as a query in the inbox, a sponsor email, or a changed line on the roster — in its own
channel, never labelled as feedback. You draw the connection yourself.

**Checking everything is not a way out.** A player who verifies all sixteen of VERA's outputs catches
nine of the ten errors — and still eats the one nobody could have caught, and still watches a subject
go to hospital for reasons that were never anyone's fault. The argument has to land on the most
careful person who could have played it, or it is just a game about being careful.

**At least one bad outcome per run is impossible to prevent.** Not rare, not expensive to catch —
genuinely uncatchable at any amount of checking you could have done, because the failure happened
upstream of your desk and everything on the desk agrees with itself. If every harm in the game
traced back to you cutting a corner, it would be teaching developers that AI errors at clinical
sites are a diligence problem. They are not.

The ending is three beats: what actually happened item by item, the formal audit finding, and then
the game says plainly what it was for. Some of those errors were not the coordinator's to catch, and
the person who could have prevented them is the person reading that screen.

## Repository

| Path | What it is |
|---|---|
| [`VISION.md`](VISION.md) | The design document — premise, audience, core loop, VERA's constraints, the error taxonomy, the ending. |
| [`docs/superpowers/specs/`](docs/superpowers/specs/) | The build spec for one complete four-day run: time arithmetic, roster, all nineteen situations, architecture. Supersedes VISION where they differ. |
| [`docs/STUDY_FACTS.md`](docs/STUDY_FACTS.md) | Canonical facts every trial document derives from. |
| [`docs/RESEARCH_SITE.md`](docs/RESEARCH_SITE.md) | Site 1047 — staff, facilities, enrollment history, finances. |
| [`docs/trial_documents/`](docs/trial_documents/index.md) | The 15-document trial corpus a real site would receive, ~246k words, plus the assumption logs behind it. |
| [`docs/prototype/`](docs/prototype/README.md) | An earlier playable prototype, kept as a visual and mechanical reference. |
| [`CLAUDE.md`](CLAUDE.md) | Working notes for Claude Code. |

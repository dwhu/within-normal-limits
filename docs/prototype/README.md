# Site 108 — prototype reference

Imported from the Claude Design project [Site 108](https://claude.ai/design/p/413dd915-a375-4142-9f31-60906fc5c79b) on 2026-07-28. Kept here as the **reference example for gameplay and aesthetic** — not as source we build on.

| File | What it is |
| --- | --- |
| `Site 108.dc.html` | The playable prototype: sign-in → desktop shift → changeover → PI thread → session end → debrief. All game content lives in the `Component.ITEMS` data table near the bottom of the file. |
| `support.js` | The `dc-runtime` harness the prototype is authored against (`<x-dc>` template + `sc-if`/`sc-for` directives, compiled to React at load). Generated, not hand-edited. |
| `Design context - Site 108.md` | The design doc: premise, core loop, meters, item schema, failure taxonomy, day structure, interface rules. Read this first. |

## Running it

The runtime re-fetches `location.href` to parse its own template, so `file://` will not work. Serve the directory:

```sh
cd docs/prototype && python3 -m http.server 8000
# then open http://localhost:8000/Site%20108.dc.html
```

It also pulls React 18 and Babel standalone from unpkg, so it needs network access on first load.

## What to take from it

- **The aesthetic split** (design doc §8): beveled Tahoma/gradient "TrialCore EDC 4.2" chrome for everything institutional, flat teal IBM Plex for VERA, bolted into the right rail. The contrast is the argument, not decoration.
- **The item schema** (§4): every situation is a pure data object with an outcome table keyed by player action, including separate `accept` vs `verified` outcomes so an item can punish you identically whether or not you read the source.
- **The failure taxonomy** (§5) driving the end-of-day debrief.
- **The clock as the real constraint** (§3): verification costs half-hour blocks and usually confirms VERA was right.

Not imported: `Site 108 (pixel v1).dc.html` (archived pixel-art direction) and `Aesthetic options.dc.html` (visual-direction exploration) — both still in the Design project if the earlier looks are wanted.

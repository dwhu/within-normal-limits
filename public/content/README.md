# public/content

Static assets the game fetches at runtime.

## `documents/`

The fifteen trial documents the player can open from the in-game Documents window.

**Every `.md` here and `index.json` are generated and gitignored — do not edit them.** They are
copied out of `docs/trial_documents/`, which is where the corpus is authored and where the rest of
the documentation links to it. `scripts/build-doc-index.mjs` does the copy and writes the index; it
runs automatically from `predev` and `prebuild`, so run `npm run dev` (or the script directly) after
a fresh clone or the Documents window will 404.

The manifest is the `TITLES` map in that script, not the directory listing: adding or removing a
document means editing the map. `ASSUMPTIONS.md` and `index.md` are deliberately left out — they are
authoring metadata, not documents a trial site would ever receive.

These were symlinks into `docs/` until the first Vercel deploy, which served fine under `next dev`
and `next start` but failed the build: Vercel copies `public/` into the output bundle, and `fs.cp`
refuses a relative symlink pointing outside the tree being copied.

## `source/`

Per-situation source documents — the chart notes, lab reports and screening packets the player reads
to check VERA's work. Authored directly here.

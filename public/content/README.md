# public/content

Static assets the game fetches at runtime.

## `documents/`

The fifteen trial documents the player can open from the in-game Documents window.

**These are symlinks into `docs/trial_documents/`, not copies.** The corpus is ~1.6 MB and
`docs/trial_documents/` is where it is authored and where the rest of the documentation links to it.
Duplicating it here would mean two copies drifting apart the first time one is edited.

`ASSUMPTIONS.md` and `index.md` are deliberately not linked — they are authoring metadata, not
documents a trial site would ever receive.

Next serves symlinked files out of `public/` in both `next dev` and a production `next build` /
`next start`; this was verified rather than assumed. If you ever move to an output mode that copies
`public/` into a bundle rather than serving it from disk, check this still holds before shipping.

`index.json` is generated — run `node scripts/build-doc-index.mjs` after adding or removing a
document. It is a real file, not a symlink.

## `source/`

Per-situation source documents — the chart notes, lab reports and screening packets the player reads
to check VERA's work. Authored directly here.

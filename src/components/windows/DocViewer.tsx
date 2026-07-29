"use client";

import { type ReactNode, useEffect, useMemo, useRef, useState } from "react";

import { findMatches } from "@/components/windows/find";
import { renderMarkdownDocument } from "@/components/windows/markdown-render";
import { loadDocument, loadSource } from "@/game/documents";
import { buildCorpus, parseMarkdown } from "@/game/markdown";

type Props = { file: string; kind: "document" | "source" };

/** Used only for `kind="source"` — the fixed-width per-subject worksheets, kept as raw
 * preformatted text (see the module doc below) rather than parsed as markdown. */
function highlight(text: string, query: string, active: number): ReactNode {
  const matches = findMatches(text, query);
  if (matches.length === 0) return text;

  const out: ReactNode[] = [];
  let cursor = 0;

  matches.forEach((m, i) => {
    if (m.start > cursor) out.push(text.slice(cursor, m.start));
    out.push(
      <mark
        key={`${m.start}-${m.end}`}
        style={{ background: i === active ? "#ffd54a" : "#fff3b0", color: "inherit" }}
      >
        {text.slice(m.start, m.end)}
      </mark>,
    );
    cursor = m.end;
  });

  if (cursor < text.length) out.push(text.slice(cursor));
  return out;
}

/**
 * `kind="document"` (the reference manuals, opened from the Documents window) is genuinely
 * authored markdown — real headings, GFM tables, bold — and is rendered as such below.
 *
 * `kind="source"` (the per-subject worksheets opened from the Work Queue) are fixed-width
 * ASCII forms: multi-space column alignment, `====`/`----` rules, dot-leaders. Parsing those as
 * markdown would actively destroy them (whitespace collapses, a `====` under a title becomes a
 * setext heading), so they stay on the old `<pre>` + raw-text-search path, unchanged.
 */
export function DocViewer({ file, kind }: Props) {
  const [text, setText] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let live = true;
    setText(null);
    setFailed(false);

    (kind === "document" ? loadDocument(file) : loadSource(file))
      .then((t) => live && setText(t))
      .catch(() => live && setFailed(true));

    return () => {
      live = false;
    };
  }, [file, kind]);

  // Parsed once per document load (not per keystroke): the same tree is walked once here to
  // build the search corpus and once more at render time to produce the highlighted markup —
  // see src/game/markdown.ts and markdown-render.tsx for why that's the fix for search drift.
  const parsed = useMemo(
    () => (kind === "document" && text !== null ? parseMarkdown(text) : null),
    [kind, text],
  );
  const corpus = useMemo(() => (parsed ? buildCorpus(parsed) : null), [parsed]);

  // What the player is actually searching: the rendered text for a document, the raw worksheet
  // text for a source (which *is* what's displayed, since it's shown verbatim in a <pre>).
  const searchText = kind === "document" ? (corpus?.text ?? "") : (text ?? "");

  const matches = useMemo(() => findMatches(searchText, query), [searchText, query]);
  const count = matches.length;

  // biome-ignore lint/correctness/useExhaustiveDependencies: resets the active match whenever the query changes
  useEffect(() => setActive(0), [query]);

  // `active` can point past the end of the match list when something other than the query
  // changes the match count (e.g. switching to a document where the same query matches fewer
  // times). Clamp at render so the displayed index and the highlight always stay in range,
  // rather than only fixing the one path that resets `active` via an effect dependency.
  const shownActive = count === 0 ? 0 : Math.min(active, count - 1);

  // shownActive isn't read in the body below, but it's what moves data-match="active" to a
  // different <mark> on re-render, which is exactly when this effect needs to re-query the DOM.
  // biome-ignore lint/correctness/useExhaustiveDependencies: see above
  useEffect(() => {
    if (!query) return;
    const el = bodyRef.current?.querySelector('mark[data-match="active"]');
    el?.scrollIntoView?.({ block: "center" });
  }, [query, shownActive]);

  if (failed) {
    return <p className="p-3">This document could not be opened.</p>;
  }

  return (
    <div className="flex h-full flex-col">
      <div className="bevel-out flex items-center gap-2 px-2 py-1">
        <label htmlFor="find">Find</label>
        <input
          id="find"
          className="bevel-in flex-1 px-1 py-0.5"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className="font-mono text-neutral-600">
          {count === 0 ? 0 : shownActive + 1} of {count}
        </span>
        <button
          type="button"
          className="bevel-out px-2"
          onClick={() => setActive((a) => (count ? (a + 1) % count : 0))}
        >
          Next
        </button>
      </div>

      <div ref={bodyRef} className="flex-1 overflow-auto p-3 font-mono text-[11px] leading-[1.5]">
        {text === null ? (
          "Opening…"
        ) : kind === "source" ? (
          <pre className="whitespace-pre-wrap">{highlight(text, query, shownActive)}</pre>
        ) : (
          parsed && corpus && renderMarkdownDocument(parsed, corpus.leaves, matches, shownActive)
        )}
      </div>
    </div>
  );
}

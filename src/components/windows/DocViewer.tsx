"use client";

import { Children, type ReactNode, useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

import { findMatches } from "@/components/windows/find";
import { loadDocument, loadSource } from "@/game/documents";

type Props = { file: string; kind: "document" | "source" };

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
 * Highlights one run of raw text, numbering each match against the shared `counter` so the
 * "active" one lines up with the count shown in the find bar, however many other text runs
 * (table cells, list items, headings…) it's scattered across.
 */
function highlightRun(
  text: string,
  query: string,
  active: number,
  counter: { n: number },
): ReactNode {
  const matches = findMatches(text, query);
  if (matches.length === 0) return text;

  const out: ReactNode[] = [];
  let cursor = 0;

  matches.forEach((m) => {
    if (m.start > cursor) out.push(text.slice(cursor, m.start));
    const isActive = counter.n === active;
    out.push(
      <mark
        key={`${counter.n}-${m.start}`}
        data-match={isActive ? "active" : undefined}
        style={{ background: isActive ? "#ffd54a" : "#fff3b0", color: "inherit" }}
      >
        {text.slice(m.start, m.end)}
      </mark>,
    );
    counter.n += 1;
    cursor = m.end;
  });

  if (cursor < text.length) out.push(text.slice(cursor));
  return out;
}

/**
 * react-markdown hands each block/inline override the children React already knows how to
 * render: a mix of plain strings (raw text run directly inside this node) and elements produced
 * by a *different* override one level down (e.g. `strong` nested inside a table cell). Only the
 * strings belong to this node — nested elements search themselves, via their own override, once
 * React gets to them — so walking one level and only touching strings is enough to reach every
 * text run in the document without highlighting anything twice.
 */
function highlightChildren(
  children: ReactNode,
  query: string,
  active: number,
  counter: { n: number },
): ReactNode {
  return Children.map(children, (child) =>
    typeof child === "string" ? highlightRun(child, query, active, counter) : child,
  );
}

/**
 * Builds the react-markdown `components` override table used to render matches inside rendered
 * markdown. `counter` is shared by every override below and is fresh per render, so matches are
 * numbered in document order (top to bottom, left to right) no matter which element they land
 * in — the same ordering `findMatches` would produce over the raw text.
 */
function useHighlightComponents(query: string, active: number): Components {
  return useMemo(() => {
    const counter = { n: 0 };
    const hl = (children: ReactNode) => highlightChildren(children, query, active, counter);

    return {
      h1: ({ children }) => (
        <h1 className="mt-3 mb-1 text-[13px] font-bold first:mt-0">{hl(children)}</h1>
      ),
      h2: ({ children }) => <h2 className="mt-3 mb-1 text-[12px] font-bold">{hl(children)}</h2>,
      h3: ({ children }) => <h3 className="mt-2 mb-1 font-bold">{hl(children)}</h3>,
      h4: ({ children }) => <h4 className="mt-2 mb-1 font-bold">{hl(children)}</h4>,
      h5: ({ children }) => <h5 className="mt-2 mb-1 font-bold">{hl(children)}</h5>,
      h6: ({ children }) => <h6 className="mt-2 mb-1 font-bold">{hl(children)}</h6>,
      p: ({ children }) => <p className="mb-2 last:mb-0">{hl(children)}</p>,
      li: ({ children }) => <li className="ml-4">{hl(children)}</li>,
      ul: ({ children }) => <ul className="mb-2 list-disc pl-4">{children}</ul>,
      ol: ({ children }) => <ol className="mb-2 list-decimal pl-4">{children}</ol>,
      strong: ({ children }) => <strong className="font-bold">{hl(children)}</strong>,
      em: ({ children }) => <em className="italic">{hl(children)}</em>,
      del: ({ children }) => <del>{hl(children)}</del>,
      a: ({ children, href }) => (
        <a href={href} className="underline">
          {hl(children)}
        </a>
      ),
      code: ({ children }) => <code>{hl(children)}</code>,
      blockquote: ({ children }) => (
        <blockquote className="my-2 border-l-2 border-neutral-500 pl-2 italic">
          {children}
        </blockquote>
      ),
      table: ({ children }) => (
        <table className="mb-3 border-collapse border border-neutral-400">{children}</table>
      ),
      thead: ({ children }) => <thead className="bg-[var(--edc-face)]">{children}</thead>,
      th: ({ children }) => (
        <th className="border border-neutral-400 px-2 py-1 text-left align-top">{hl(children)}</th>
      ),
      td: ({ children }) => (
        <td className="border border-neutral-400 px-2 py-1 align-top">{hl(children)}</td>
      ),
      hr: () => <hr className="my-3 border-neutral-400" />,
    };
  }, [query, active]);
}

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

  const count = useMemo(() => (text ? findMatches(text, query).length : 0), [text, query]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: resets the active match whenever the query changes
  useEffect(() => setActive(0), [query]);

  // `active` can point past the end of the match list when something other than the query
  // changes the match count (e.g. switching to a document where the same query matches fewer
  // times). Clamp at render so the displayed index and the highlight always stay in range,
  // rather than only fixing the one path that resets `active` via an effect dependency.
  const shownActive = count === 0 ? 0 : Math.min(active, count - 1);

  const components = useHighlightComponents(query, shownActive);

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
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
            {text}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
}

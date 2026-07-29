"use client";

import { type ReactNode, useEffect, useMemo, useState } from "react";

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

export function DocViewer({ file, kind }: Props) {
  const [text, setText] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

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
          {count === 0 ? 0 : active + 1} of {count}
        </span>
        <button
          type="button"
          className="bevel-out px-2"
          onClick={() => setActive((a) => (count ? (a + 1) % count : 0))}
        >
          Next
        </button>
      </div>

      <pre className="flex-1 overflow-auto whitespace-pre-wrap p-3 font-mono text-[11px] leading-[1.5]">
        {text === null ? "Opening…" : highlight(text, query, active)}
      </pre>
    </div>
  );
}

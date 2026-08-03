"use client";

import { useEffect, useState } from "react";
import type { Situation } from "@/game/types";

const COST_LABEL: Record<number, string> = { 60: "1 HOUR", 90: "1.5 HR" };

const VERA_FONT = "var(--font-vera-mono), monospace";
const TYPE_MS = 16;

/**
 * How many characters of `text` have been "typed" so far. Restarts whenever the text changes,
 * and completes immediately for players who have asked for reduced motion.
 *
 * The caller still renders the whole string — the untyped tail is transparent, not absent — so
 * the message is available to assistive tech and the panel does not reflow as it types.
 */
function useTypedLength(text: string): number {
  const [typed, setTyped] = useState({ text, count: 0 });

  if (typed.text !== text) setTyped({ text, count: 0 });
  const count = typed.text === text ? typed.count : 0;

  useEffect(() => {
    if (count >= text.length) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setTyped({ text, count: text.length });
      return;
    }
    const id = setTimeout(() => {
      setTyped((t) => (t.text === text ? { text, count: t.count + 1 } : t));
    }, TYPE_MS);
    return () => clearTimeout(id);
  }, [count, text]);

  return count;
}

type Props = {
  situation?: Situation;
  onAccept: () => void;
  onReview: () => void;
};

export function Rail({ situation, onAccept, onReview }: Props) {
  const assisted = situation?.vera !== undefined;
  const summary = situation?.vera?.summary ?? "";
  const typed = useTypedLength(summary);

  return (
    <aside
      className="absolute right-0 top-0 bottom-[30px] w-[320px] overflow-auto p-3"
      style={{ background: "var(--vera-face)", borderLeft: "1px solid #c9c9c4" }}
    >
      {situation && !assisted && (
        <div
          className="border border-dashed border-neutral-300 bg-white p-3"
          style={{ color: "var(--vera-teal)" }}
        >
          <div className="font-mono text-[10px] tracking-widest">SITE BULLETIN</div>
          <p className="mt-2 leading-relaxed text-neutral-700">
            Coming soon to Site 1047: VERA. Your new AI research assistant reads source, drafts
            entries, and flags eligibility issues, so your coordinators can spend their time with
            patients. Rollout begins this month. No training required.
          </p>
        </div>
      )}

      {situation?.vera && (
        <div style={{ fontFamily: VERA_FONT }}>
          <div
            className="flex items-baseline gap-2 text-[10px] tracking-widest"
            style={{ color: "var(--vera-teal)" }}
          >
            <span aria-hidden="true" className="text-[14px] leading-none">
              🤖
            </span>
            VERA · v1.0
          </div>
          <p className="mt-3 text-[11px] leading-relaxed">
            {summary.slice(0, typed)}
            <span className="opacity-0">{summary.slice(typed)}</span>
            {typed < summary.length && (
              <span
                aria-hidden="true"
                className="ml-px inline-block w-0 animate-pulse border-l-2 border-current align-text-bottom"
                style={{ height: "1em", color: "var(--vera-teal)" }}
              />
            )}
          </p>
          <hr className="mt-6 border-t border-neutral-300" />
        </div>
      )}

      {situation && (
        <div className="mt-6">
          <div className="font-mono text-[10px] tracking-widest text-neutral-500">ACTIONS</div>
          {assisted && (
            <button
              type="button"
              onClick={onAccept}
              className="mt-2 flex w-full justify-between border border-neutral-300 bg-white px-3 py-2 text-left"
            >
              <span>Accept as drafted</span>
              <span className="font-mono text-neutral-500">30 MIN</span>
            </button>
          )}
          <button
            type="button"
            onClick={onReview}
            className="mt-2 flex w-full justify-between border border-neutral-300 bg-white px-3 py-2 text-left"
          >
            <span>Manually review</span>
            <span className="font-mono text-neutral-500">{COST_LABEL[situation.cost]}</span>
          </button>
        </div>
      )}
    </aside>
  );
}

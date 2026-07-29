"use client";

import type { Situation } from "@/game/types";

const COST_LABEL: Record<number, string> = { 60: "1 HOUR", 90: "1.5 HR" };

type Props = {
  situation?: Situation;
  onAccept: () => void;
  onReview: () => void;
};

export function Rail({ situation, onAccept, onReview }: Props) {
  const assisted = situation?.vera !== undefined;

  return (
    <aside
      className="absolute right-0 top-0 bottom-[30px] w-[320px] overflow-auto p-3"
      style={{ background: "var(--vera-face)", borderLeft: "1px solid #c9c9c4" }}
    >
      {situation && !assisted && (
        <p className="leading-relaxed text-neutral-700">
          No assistant provisioned for this site. Source documents must be opened and
          entered by hand.
        </p>
      )}

      {situation?.vera && (
        <>
          <div
            className="font-mono text-[10px] tracking-widest"
            style={{ color: "var(--vera-teal)" }}
          >
            VERA · v3.0
          </div>
          <p className="mt-3 leading-relaxed">{situation.vera.summary}</p>
        </>
      )}

      {situation && (
        <div className="mt-6">
          <div className="font-mono text-[10px] tracking-widest text-neutral-500">
            ACTIONS
          </div>
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

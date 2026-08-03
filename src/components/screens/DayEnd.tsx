"use client";

import { summariseDay } from "@/game/state";
import type { Situation, State } from "@/game/types";

const DAY_LABEL: Record<number, string> = {
  1: "MONDAY 08-JAN-2024",
  2: "TUESDAY 09-JAN-2024",
  3: "WEDNESDAY 10-JAN-2024",
  4: "THURSDAY 11-JAN-2024",
};

type Props = {
  state: State;
  script: Situation[];
  onBegin: () => void;
};

export function DayEnd({ state, script, onBegin }: Props) {
  const { worked, emails } = summariseDay(state, script);

  return (
    <div className="flex h-screen items-center justify-center p-8">
      <div className="bevel-out max-h-full w-[720px] overflow-auto shadow-2xl">
        <div className="titlebar px-1.5 py-1">Veriscribe EDC 9.2 — End of session</div>

        <div className="bevel-in m-0.5 p-6 font-mono text-[11px] leading-[1.7]">
          <div className="tracking-widest text-neutral-600">{DAY_LABEL[state.day]} · 4:00 PM</div>

          <h2 className="mt-4 tracking-widest">WORKED TODAY</h2>
          {worked.map(({ situation, resolution }) => (
            <div key={situation.id} className="ml-2">
              {situation.id} — {situation.subject} · {situation.title}
              <span className="text-neutral-500">
                {" "}
                ({resolution.action === "accepted" ? "accepted as drafted" : "reviewed"})
              </span>
            </div>
          ))}

          {emails.length > 0 && (
            <>
              <h2 className="mt-6 tracking-widest">TODAY&apos;S MAIL</h2>
              {emails.map((e) => (
                <div key={e.id} className="ml-2">
                  {e.from} — {e.subject}
                </div>
              ))}
            </>
          )}

          {state.dayRosterChanges.length > 0 && (
            <>
              <h2 className="mt-6 tracking-widest">ROSTER CHANGES</h2>
              {state.dayRosterChanges.map((t) => {
                const subject = state.roster.find((s) => s.id === t.subject);
                return (
                  <div key={`${t.subject}-${t.from}-${t.to}`} className="ml-2">
                    {t.subject} &nbsp;{subject?.name} &nbsp;{t.from} → {t.to}
                  </div>
                );
              })}
            </>
          )}

          <div className="mt-8 flex justify-end gap-2">
            <button type="button" className="bevel-out px-4 py-1.5" onClick={onBegin}>
              Begin day {state.day + 1}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

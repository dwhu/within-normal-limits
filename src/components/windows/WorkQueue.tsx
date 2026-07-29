"use client";

import type { Situation } from "@/game/types";

const TYPE_LABEL: Record<Situation["type"], string> = {
  screening: "SCREENING",
  "data-entry": "DATA ENTRY",
  safety: "SAFETY",
};

type Props = {
  today: Situation[];
  current?: Situation;
  doneIds: string[];
};

export function WorkQueue({ today, current, doneIds }: Props) {
  return (
    <div className="flex h-full flex-col">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bevel-out">
            <th className="px-2 py-1 font-normal">#</th>
            <th className="px-2 py-1 font-normal">Type</th>
            <th className="px-2 py-1 font-normal">Subject / Item</th>
            <th className="px-2 py-1 font-normal">Status</th>
          </tr>
        </thead>
        <tbody>
          {today.map((s, i) => {
            const done = doneIds.includes(s.id);
            return (
              <tr key={s.id} className={s.id === current?.id ? "bg-[#dce6f2]" : ""}>
                <td className="px-2 py-1 font-mono">{String(i + 1).padStart(2, "0")}</td>
                <td className="px-2 py-1">{TYPE_LABEL[s.type]}</td>
                <td className="px-2 py-1">
                  {s.subject} · {s.title}
                </td>
                <td className="px-2 py-1">
                  <span className={done ? "text-neutral-500" : "bg-[#2c4a6e] px-1 text-white"}>
                    {done ? "DONE" : "OPEN"}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {current && (
        <div className="bevel-out m-2 p-3">
          <div className="flex justify-between font-mono text-[10px] tracking-widest text-neutral-600">
            <span>
              {TYPE_LABEL[current.type]} — {current.id}
            </span>
            <span>Subject {current.subject}</span>
          </div>
          <h2 className="mt-2 text-base">{current.title}</h2>
          <p className="mt-1 leading-relaxed">{current.blurb}</p>
        </div>
      )}
    </div>
  );
}

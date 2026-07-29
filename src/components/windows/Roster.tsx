"use client";

import type { Roster as RosterType } from "@/game/types";

type Props = { roster: RosterType; changed: string[] };

export function Roster({ roster, changed }: Props) {
  return (
    <table className="w-full border-collapse text-left">
      <tbody>
        {roster.map((s) => {
          const isChanged = changed.includes(s.id);
          return (
            <tr key={s.id} data-changed={isChanged} className={isChanged ? "bg-[#fff7d6]" : ""}>
              <td className="px-2 py-1 font-mono">{s.id}</td>
              <td className="px-2 py-1">{s.name}</td>
              <td className="px-2 py-1">{s.status}</td>
              <td className="px-2 py-1 font-mono text-neutral-500">{isChanged ? "◂" : ""}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

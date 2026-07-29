"use client";

import type { WindowId, WindowState } from "@/components/desk/useWindows";

const DAY_LABEL: Record<number, string> = {
  1: "Mon 08 Jan 2024",
  2: "Tue 09 Jan 2024",
  3: "Wed 10 Jan 2024",
  4: "Thu 11 Jan 2024",
};

/** Minutes since 08:00 → a wall clock the player reads the way they read a clock. */
export function formatClock(minutes: number): string {
  const total = 8 * 60 + minutes;
  const h24 = Math.floor(total / 60);
  const m = total % 60;
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${h12}:${String(m).padStart(2, "0")} ${h24 < 12 ? "AM" : "PM"}`;
}

type Props = {
  windows: WindowState[];
  clock: number;
  day: number;
  onFocus: (id: WindowId) => void;
  onOpen: (id: WindowId, title: string) => void;
};

export function Taskbar({ windows, clock, day, onFocus, onOpen }: Props) {
  return (
    <div className="bevel-out absolute inset-x-0 bottom-0 flex h-[30px] items-center gap-1 px-1">
      <button
        type="button"
        className="bevel-out px-2 py-0.5"
        onClick={() => onOpen("inbox", "Inbox")}
      >
        Inbox
      </button>
      <button
        type="button"
        className="bevel-out px-2 py-0.5"
        onClick={() => onOpen("roster", "Subject Roster")}
      >
        Roster
      </button>
      <button
        type="button"
        className="bevel-out px-2 py-0.5"
        onClick={() => onOpen("documents", "Documents")}
      >
        Documents
      </button>

      {windows.length > 0 && <div className="bevel-in mx-1 h-[20px] w-px" />}

      {windows.map((w) => (
        <button
          key={w.id}
          type="button"
          className="bevel-in max-w-[160px] truncate px-2 py-0.5"
          onClick={() => onFocus(w.id)}
        >
          {w.title}
        </button>
      ))}
      <div className="ml-auto bevel-in px-2 py-0.5 font-mono">
        {DAY_LABEL[day]} &nbsp; {formatClock(clock)}
      </div>
    </div>
  );
}

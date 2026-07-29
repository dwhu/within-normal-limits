"use client";

import { useEffect, useRef, useState } from "react";

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

/** What the Start-style EDC button opens — every launchable window that isn't the base queue. */
const LAUNCHERS: { id: WindowId; title: string; label: string }[] = [
  { id: "inbox", title: "Inbox", label: "Inbox" },
  { id: "roster", title: "Subject Roster", label: "Roster" },
  { id: "documents", title: "Documents", label: "Documents" },
];

type Props = {
  windows: WindowState[];
  clock: number;
  day: number;
  onFocus: (id: WindowId) => void;
  onOpen: (id: WindowId, title: string) => void;
};

export function Taskbar({ windows, clock, day, onFocus, onOpen }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onPointerDown = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [menuOpen]);

  return (
    <div className="bevel-out absolute inset-x-0 bottom-0 flex h-[30px] items-center gap-1 px-1">
      <div ref={menuRef} className="relative h-full">
        <button
          type="button"
          className={`${menuOpen ? "bevel-in" : "bevel-out"} h-full px-2 py-0.5 font-bold`}
          onClick={() => setMenuOpen((v) => !v)}
        >
          EDC
        </button>

        {menuOpen && (
          <div className="bevel-out absolute bottom-full left-0 mb-1 flex w-[140px] flex-col py-0.5">
            {LAUNCHERS.map((l) => (
              <button
                key={l.id}
                type="button"
                className="px-2 py-1 text-left hover:bg-[#dce6f2]"
                onClick={() => {
                  onOpen(l.id, l.title);
                  setMenuOpen(false);
                }}
              >
                {l.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {windows.map((w) => (
        <button
          key={w.id}
          type="button"
          className="bevel-in-active max-w-[160px] truncate px-2 py-0.5"
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

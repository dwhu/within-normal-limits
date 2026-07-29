"use client";

import { useState } from "react";

import type { Email } from "@/game/types";

export function Inbox({ emails }: { emails: Email[] }) {
  const [openId, setOpenId] = useState<string | null>(emails.at(-1)?.id ?? null);
  const open = emails.find((e) => e.id === openId);

  if (emails.length === 0) {
    return <p className="p-3 text-neutral-600">No mail.</p>;
  }

  return (
    <div className="flex h-full">
      <ul className="w-[220px] overflow-auto border-r border-neutral-400">
        {emails.map((e) => (
          <li key={e.id}>
            <button
              type="button"
              className={`w-full px-2 py-1 text-left ${e.id === openId ? "bg-[#dce6f2]" : ""}`}
              onClick={() => setOpenId(e.id)}
            >
              <span className="block truncate font-bold">{e.from}</span>
              <span className="block truncate text-neutral-700">{e.subject}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="flex-1 overflow-auto p-3">
        {open && (
          <>
            <div className="font-mono text-[10px] tracking-widest text-neutral-600">
              FROM {open.from.toUpperCase()}
            </div>
            <h3 className="mt-1 text-sm font-bold">{open.subject}</h3>
            <p className="mt-3 whitespace-pre-wrap leading-relaxed">{open.body}</p>
          </>
        )}
      </div>
    </div>
  );
}

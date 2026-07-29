"use client";

import { useEffect, useState } from "react";

import { type DocEntry, loadDocIndex } from "@/game/documents";

type Props = { onOpen: (file: string, title: string) => void };

export function Documents({ onOpen }: Props) {
  const [index, setIndex] = useState<DocEntry[]>([]);

  useEffect(() => {
    let live = true;
    loadDocIndex()
      .then((i) => live && setIndex(i))
      .catch(() => live && setIndex([]));
    return () => {
      live = false;
    };
  }, []);

  return (
    <ul>
      {index.map((d) => (
        <li key={d.file} className="border-b border-neutral-300 last:border-0">
          <button
            type="button"
            className="flex w-full justify-between px-2 py-1 text-left hover:bg-[#dce6f2]"
            onClick={() => onOpen(d.file, d.title)}
          >
            <span>{d.title}</span>
            <span className="font-mono text-neutral-500">{d.words.toLocaleString()}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

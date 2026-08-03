"use client";

import { useCallback, useState } from "react";

import { clampToViewport, type Rect } from "@/components/desk/geometry";

export type WindowId = "queue" | "viewer" | "ecrf" | "inbox" | "roster" | "documents";

export type WindowState = Rect & {
  id: WindowId;
  title: string;
  z: number;
};

/** Where each window lands the first time it is opened. */
const PLACEMENT: Record<WindowId, Rect> = {
  queue: { x: 16, y: 16, w: 900, h: 560 },
  viewer: { x: 60, y: 90, w: 620, h: 620 },
  ecrf: { x: 700, y: 140, w: 460, h: 520 },
  inbox: { x: 200, y: 200, w: 640, h: 420 },
  roster: { x: 260, y: 120, w: 480, h: 500 },
  documents: { x: 320, y: 160, w: 560, h: 440 },
};

/**
 * The desk the player signs in to: the work queue at the back, with the three reference windows
 * cascaded over it so every title bar is reachable and the queue's left columns stay readable.
 * These are the things VERA gets checked against — none of them should be something the player
 * has to go find in the taskbar first.
 */
const START: { id: WindowId; title: string; at?: Partial<Rect> }[] = [
  { id: "queue", title: "Work Queue" },
  { id: "documents", title: "Documents", at: { x: 300, y: 150 } },
  { id: "roster", title: "Roster", at: { x: 340, y: 190 } },
  { id: "inbox", title: "Inbox", at: { x: 320, y: 230 } },
];

function viewport() {
  if (typeof window === "undefined") return { w: 1280, h: 800 };
  return { w: window.innerWidth, h: window.innerHeight };
}

export function useWindows() {
  const [windows, setWindows] = useState<WindowState[]>(() =>
    START.map(({ id, title, at }, i) => ({
      id,
      title,
      ...PLACEMENT[id],
      ...at,
      z: i + 1,
    })),
  );

  const focus = useCallback((id: WindowId) => {
    setWindows((ws) => {
      const top = Math.max(...ws.map((w) => w.z));
      return ws.map((w) => (w.id === id ? { ...w, z: top + 1 } : w));
    });
  }, []);

  /**
   * `at` overrides the default placement — and repositions the window even when it is already
   * open, because the callers that pass it are forcing a window somewhere the player can't miss.
   */
  const open = useCallback((id: WindowId, title: string, at?: Partial<Rect>) => {
    setWindows((ws) => {
      const top = Math.max(0, ...ws.map((w) => w.z));
      if (ws.some((w) => w.id === id)) {
        return ws.map((w) =>
          w.id === id
            ? { ...w, ...(at ? clampToViewport({ ...w, ...at }, viewport()) : {}), z: top + 1 }
            : w,
        );
      }
      const placement = clampToViewport({ ...PLACEMENT[id], ...at }, viewport());
      return [...ws, { id, title, ...placement, z: top + 1 }];
    });
  }, []);

  const close = useCallback((id: WindowId) => {
    if (id === "queue") return; // the base window is never closable
    setWindows((ws) => ws.filter((w) => w.id !== id));
  }, []);

  const move = useCallback((id: WindowId, x: number, y: number) => {
    setWindows((ws) =>
      ws.map((w) => (w.id === id ? { ...w, ...clampToViewport({ ...w, x, y }, viewport()) } : w)),
    );
  }, []);

  const isOpen = useCallback((id: WindowId) => windows.some((w) => w.id === id), [windows]);

  const topmost = useCallback((): WindowId | undefined => {
    return windows.reduce<WindowState | undefined>(
      (best, w) => (!best || w.z > best.z ? w : best),
      undefined,
    )?.id;
  }, [windows]);

  return { windows, open, close, focus, move, isOpen, topmost };
}

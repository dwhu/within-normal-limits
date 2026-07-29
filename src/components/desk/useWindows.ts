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

function viewport() {
  if (typeof window === "undefined") return { w: 1280, h: 800 };
  return { w: window.innerWidth, h: window.innerHeight };
}

export function useWindows() {
  const [windows, setWindows] = useState<WindowState[]>([
    { id: "queue", title: "Work Queue", ...PLACEMENT.queue, z: 1 },
  ]);

  const focus = useCallback((id: WindowId) => {
    setWindows((ws) => {
      const top = Math.max(...ws.map((w) => w.z));
      return ws.map((w) => (w.id === id ? { ...w, z: top + 1 } : w));
    });
  }, []);

  const open = useCallback((id: WindowId, title: string) => {
    setWindows((ws) => {
      const top = Math.max(0, ...ws.map((w) => w.z));
      if (ws.some((w) => w.id === id)) {
        return ws.map((w) => (w.id === id ? { ...w, z: top + 1 } : w));
      }
      return [...ws, { id, title, ...clampToViewport(PLACEMENT[id], viewport()), z: top + 1 }];
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

"use client";

import { type PointerEvent, type ReactNode, useCallback, useRef } from "react";

import type { WindowId, WindowState } from "@/components/desk/useWindows";

type Props = {
  window: WindowState;
  onFocus: (id: WindowId) => void;
  onMove: (id: WindowId, x: number, y: number) => void;
  onClose?: (id: WindowId) => void;
  children: ReactNode;
};

export function Window({ window: win, onFocus, onMove, onClose, children }: Props) {
  const grab = useRef<{ dx: number; dy: number } | null>(null);

  const handleDown = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      onFocus(win.id);
      grab.current = { dx: e.clientX - win.x, dy: e.clientY - win.y };
      // jsdom has no pointer capture; the drag works without it in the browser too.
      e.currentTarget.setPointerCapture?.(e.pointerId);
    },
    [onFocus, win.id, win.x, win.y],
  );

  const handleMove = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      const g = grab.current;
      if (!g) return;
      onMove(win.id, e.clientX - g.dx, e.clientY - g.dy);
    },
    [onMove, win.id],
  );

  const handleUp = useCallback(() => {
    grab.current = null;
  }, []);

  return (
    <div
      className="bevel-out absolute flex flex-col shadow-lg"
      style={{ left: win.x, top: win.y, width: win.w, height: win.h, zIndex: win.z }}
      onPointerDown={() => onFocus(win.id)}
    >
      <div
        className="titlebar flex items-center justify-between px-1.5 py-1"
        onPointerDown={handleDown}
        onPointerMove={handleMove}
        onPointerUp={handleUp}
        onPointerCancel={handleUp}
      >
        <span>{win.title}</span>
        {onClose && (
          <button
            type="button"
            aria-label="Close"
            className="bevel-out px-1.5 leading-none text-black"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => onClose(win.id)}
          >
            ×
          </button>
        )}
      </div>
      <div className="bevel-in m-0.5 flex-1 overflow-auto">{children}</div>
    </div>
  );
}

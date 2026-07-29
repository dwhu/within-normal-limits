export type Rect = { x: number; y: number; w: number; h: number };
export type Viewport = { w: number; h: number };

/** Height of the taskbar, which windows may not sit underneath. */
export const TASKBAR = 30;

export function clampToViewport(rect: Rect, viewport: Viewport): Rect {
  const w = Math.min(rect.w, viewport.w);
  const h = Math.min(rect.h, viewport.h - TASKBAR);

  return {
    w,
    h,
    x: Math.max(0, Math.min(rect.x, viewport.w - w)),
    y: Math.max(0, Math.min(rect.y, viewport.h - TASKBAR - h)),
  };
}

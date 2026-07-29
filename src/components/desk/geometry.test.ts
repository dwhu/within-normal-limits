import { describe, expect, it } from "vitest";

import { clampToViewport } from "@/components/desk/geometry";

const viewport = { w: 1200, h: 800 };

describe("clampToViewport", () => {
  it("leaves a window that already fits alone", () => {
    const rect = { x: 100, y: 100, w: 400, h: 300 };
    expect(clampToViewport(rect, viewport)).toEqual(rect);
  });

  it("pulls a window back when it runs off the right edge", () => {
    const r = clampToViewport({ x: 1100, y: 100, w: 400, h: 300 }, viewport);
    expect(r.x).toBe(800);
  });

  it("pulls a window back when it runs off the bottom, allowing for the taskbar", () => {
    const r = clampToViewport({ x: 100, y: 780, w: 400, h: 300 }, viewport);
    expect(r.y).toBe(470); // 800 - 300 - 30px taskbar
  });

  it("never allows a negative origin", () => {
    const r = clampToViewport({ x: -50, y: -50, w: 400, h: 300 }, viewport);
    expect(r).toMatchObject({ x: 0, y: 0 });
  });

  it("shrinks a window that is wider than the viewport", () => {
    const r = clampToViewport({ x: 0, y: 0, w: 2000, h: 300 }, viewport);
    expect(r.w).toBe(1200);
    expect(r.x).toBe(0);
  });
});

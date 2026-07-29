import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { useWindows } from "@/components/desk/useWindows";

describe("useWindows", () => {
  it("starts with the work queue open and nothing else", () => {
    const { result } = renderHook(() => useWindows());
    expect(result.current.windows.map((w) => w.id)).toEqual(["queue"]);
  });

  it("opens a window and puts it on top", () => {
    const { result } = renderHook(() => useWindows());
    act(() => result.current.open("inbox", "Inbox"));

    expect(result.current.isOpen("inbox")).toBe(true);
    expect(result.current.topmost()).toBe("inbox");
  });

  it("focusing an existing window raises it above the others", () => {
    const { result } = renderHook(() => useWindows());
    act(() => result.current.open("inbox", "Inbox"));
    act(() => result.current.open("roster", "Roster"));
    act(() => result.current.focus("inbox"));

    expect(result.current.topmost()).toBe("inbox");
  });

  it("opening an already-open window focuses it rather than duplicating it", () => {
    const { result } = renderHook(() => useWindows());
    act(() => result.current.open("inbox", "Inbox"));
    act(() => result.current.open("roster", "Roster"));
    act(() => result.current.open("inbox", "Inbox"));

    expect(result.current.windows.filter((w) => w.id === "inbox")).toHaveLength(1);
    expect(result.current.topmost()).toBe("inbox");
  });

  it("closes a window", () => {
    const { result } = renderHook(() => useWindows());
    act(() => result.current.open("inbox", "Inbox"));
    act(() => result.current.close("inbox"));

    expect(result.current.isOpen("inbox")).toBe(false);
  });

  it("refuses to close the work queue", () => {
    const { result } = renderHook(() => useWindows());
    act(() => result.current.close("queue"));

    expect(result.current.isOpen("queue")).toBe(true);
  });

  it("clamps a window that is dragged off the edge", () => {
    const { result } = renderHook(() => useWindows());
    act(() => result.current.move("queue", -400, -400));

    const queue = result.current.windows.find((w) => w.id === "queue");
    expect(queue).toMatchObject({ x: 0, y: 0 });
  });
});

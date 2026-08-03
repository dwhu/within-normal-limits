import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { useWindows } from "@/components/desk/useWindows";

describe("useWindows", () => {
  it("starts with the queue, documents, roster and inbox open, and nothing else", () => {
    const { result } = renderHook(() => useWindows());
    expect(result.current.windows.map((w) => w.id)).toEqual([
      "queue",
      "documents",
      "roster",
      "inbox",
    ]);
    expect(result.current.topmost()).toBe("inbox");
  });

  it("cascades the reference windows it starts with rather than stacking them flush", () => {
    const { result } = renderHook(() => useWindows());
    const at = (id: "documents" | "roster" | "inbox") =>
      result.current.windows.find((w) => w.id === id);

    expect(at("documents")).toMatchObject({ x: 300, y: 150 });
    expect(at("roster")).toMatchObject({ x: 340, y: 190 });
    expect(at("inbox")).toMatchObject({ x: 320, y: 230 });
  });

  it("lets the player close the reference windows it started with", () => {
    const { result } = renderHook(() => useWindows());
    act(() => result.current.close("documents"));
    act(() => result.current.close("roster"));
    act(() => result.current.close("inbox"));

    expect(result.current.windows.map((w) => w.id)).toEqual(["queue"]);
  });

  it("opens a window and puts it on top", () => {
    const { result } = renderHook(() => useWindows());
    act(() => result.current.open("ecrf", "eCRF"));

    expect(result.current.isOpen("ecrf")).toBe(true);
    expect(result.current.topmost()).toBe("ecrf");
  });

  it("focusing an existing window raises it above the others", () => {
    const { result } = renderHook(() => useWindows());
    act(() => result.current.open("ecrf", "eCRF"));
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

  it("opens a window at a forced placement instead of its default", () => {
    const { result } = renderHook(() => useWindows());
    act(() => result.current.open("viewer", "Viewer", { y: 16 }));

    expect(result.current.windows.find((w) => w.id === "viewer")).toMatchObject({ x: 60, y: 16 });
  });

  it("moves an already-open window when it is reopened at a forced placement", () => {
    const { result } = renderHook(() => useWindows());
    act(() => result.current.open("inbox", "Inbox"));
    act(() => result.current.move("inbox", 300, 300));
    act(() => result.current.open("inbox", "Inbox", { y: 16 }));

    expect(result.current.windows.find((w) => w.id === "inbox")).toMatchObject({ x: 300, y: 16 });
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

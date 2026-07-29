import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { WindowState } from "@/components/desk/useWindows";
import { Window } from "@/components/desk/Window";

const w: WindowState = { id: "inbox", title: "Inbox", x: 100, y: 100, w: 400, h: 300, z: 2 };

const noop = () => {};

describe("Window", () => {
  it("renders its title and children", () => {
    render(
      <Window window={w} onFocus={noop} onMove={noop}>
        <p>body text</p>
      </Window>,
    );

    expect(screen.getByText("Inbox")).toBeInTheDocument();
    expect(screen.getByText("body text")).toBeInTheDocument();
  });

  it("focuses when the title bar is pressed", () => {
    const onFocus = vi.fn();
    render(
      <Window window={w} onFocus={onFocus} onMove={noop}>
        <p>body</p>
      </Window>,
    );

    fireEvent.pointerDown(screen.getByText("Inbox"), { clientX: 150, clientY: 110 });
    expect(onFocus).toHaveBeenCalledWith("inbox");
  });

  it("reports the new origin while the title bar is dragged", () => {
    const onMove = vi.fn();
    render(
      <Window window={w} onFocus={noop} onMove={onMove}>
        <p>body</p>
      </Window>,
    );

    const bar = screen.getByText("Inbox");
    fireEvent.pointerDown(bar, { clientX: 150, clientY: 110 });
    fireEvent.pointerMove(bar, { clientX: 250, clientY: 160 });

    // grabbed 50px right and 10px down of the origin, so the origin follows
    expect(onMove).toHaveBeenCalledWith("inbox", 200, 150);
  });

  it("stops moving after the pointer is released", () => {
    const onMove = vi.fn();
    render(
      <Window window={w} onFocus={noop} onMove={onMove}>
        <p>body</p>
      </Window>,
    );

    const bar = screen.getByText("Inbox");
    fireEvent.pointerDown(bar, { clientX: 150, clientY: 110 });
    fireEvent.pointerUp(bar);
    fireEvent.pointerMove(bar, { clientX: 400, clientY: 400 });

    expect(onMove).not.toHaveBeenCalled();
  });

  it("shows a close button only when onClose is given", () => {
    const { rerender } = render(
      <Window window={w} onFocus={noop} onMove={noop}>
        <p>body</p>
      </Window>,
    );
    expect(screen.queryByRole("button", { name: "Close" })).toBeNull();

    rerender(
      <Window window={w} onFocus={noop} onMove={noop} onClose={vi.fn()}>
        <p>body</p>
      </Window>,
    );
    expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument();
  });
});

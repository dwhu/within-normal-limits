import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Desk } from "@/components/desk/Desk";
import { FIXTURE_SCRIPT } from "@/game/fixtures";
import { initialState } from "@/game/state";
import type { Situation, State } from "@/game/types";

const desk = (over: Partial<State> = {}): State => ({
  ...initialState,
  screen: "desk",
  ...over,
});

describe("Desk", () => {
  it("shows the current situation's title and blurb", () => {
    render(<Desk state={desk()} dispatch={vi.fn()} script={FIXTURE_SCRIPT} />);

    expect(screen.getByText("Week 8 vitals")).toBeInTheDocument();
    expect(screen.getByText(/Paper source only/)).toBeInTheDocument();
  });

  it("tells the player no assistant is provisioned before VERA arrives", () => {
    render(<Desk state={desk()} dispatch={vi.fn()} script={FIXTURE_SCRIPT} />);

    expect(screen.getByText(/No assistant provisioned/)).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /Accept as drafted/ })).toBeNull();
  });

  it("shows VERA's summary and an Accept button once she has arrived", () => {
    render(<Desk state={desk({ index: 1 })} dispatch={vi.fn()} script={FIXTURE_SCRIPT} />);

    expect(screen.getByText("The panel is within range.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Accept as drafted/ })).toBeInTheDocument();
  });

  it("dispatches ACCEPT when the player takes her word", async () => {
    const dispatch = vi.fn();
    render(<Desk state={desk({ index: 1 })} dispatch={dispatch} script={FIXTURE_SCRIPT} />);

    await userEvent.click(screen.getByRole("button", { name: /Accept as drafted/ }));
    expect(dispatch).toHaveBeenCalledWith({ type: "ACCEPT" });
  });

  it("shows the manual review cost for the item type", () => {
    render(<Desk state={desk({ index: 2, day: 2 })} dispatch={vi.fn()} script={FIXTURE_SCRIPT} />);
    expect(screen.getByRole("button", { name: /Manually review/ })).toHaveTextContent("1.5 HR");
  });

  it("puts the clock in the taskbar", () => {
    render(<Desk state={desk({ clock: 150 })} dispatch={vi.fn()} script={FIXTURE_SCRIPT} />);
    expect(screen.getByText(/10:30 AM/)).toBeInTheDocument();
  });

  it("opens exactly one window, the form, when manual review begins", async () => {
    render(<Desk state={desk()} dispatch={vi.fn()} script={FIXTURE_SCRIPT} />);

    await userEvent.click(screen.getByRole("button", { name: /Manually review/ }));
    expect(screen.getByText(/eCRF — VITAL SIGNS/)).toBeInTheDocument();
    expect(screen.queryByLabelText("Find")).not.toBeInTheDocument();
  });

  it("opens the viewer on a listed source document when clicked", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => ({ ok: true, text: async () => "source text" })),
    );

    render(<Desk state={desk()} dispatch={vi.fn()} script={FIXTURE_SCRIPT} />);

    await userEvent.click(screen.getByRole("button", { name: "fix-001.md" }));
    expect(screen.getByLabelText("Find")).toBeInTheDocument();

    vi.unstubAllGlobals();
  });

  it("does not leak values typed during manual review into the next item, even after Accept", async () => {
    // Two same-day, same-form items: the first is assisted (so "Accept as drafted" is
    // available) and the second reuses the vitals template, so a leaked value from the
    // first item's form would show up pre-filled in the second item's identical field.
    const sameForm: Situation[] = [
      { ...FIXTURE_SCRIPT[1], id: "REG-1", form: "vitals" },
      { ...FIXTURE_SCRIPT[0], id: "REG-2" },
    ];

    const dispatch = vi.fn();
    const { rerender } = render(<Desk state={desk()} dispatch={dispatch} script={sameForm} />);

    await userEvent.click(screen.getByRole("button", { name: /Manually review/ }));
    await userEvent.type(screen.getByLabelText("BP sitting"), "999/999");

    await userEvent.click(screen.getByRole("button", { name: /Accept as drafted/ }));
    expect(dispatch).toHaveBeenCalledWith({ type: "ACCEPT" });

    // Simulate the state update the real reducer produces for ACCEPT: the index advances
    // to the next item on the same day.
    rerender(<Desk state={desk({ index: 1 })} dispatch={dispatch} script={sameForm} />);

    await userEvent.click(screen.getByRole("button", { name: /Manually review/ }));
    expect(screen.getByLabelText("BP sitting")).toHaveValue("");
  });
});

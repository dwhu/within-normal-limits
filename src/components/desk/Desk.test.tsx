import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Desk } from "@/components/desk/Desk";
import { FIXTURE_SCRIPT } from "@/game/fixtures";
import { initialState } from "@/game/state";
import type { State } from "@/game/types";

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

  it("opens the source and an empty form when manual review begins", async () => {
    render(<Desk state={desk()} dispatch={vi.fn()} script={FIXTURE_SCRIPT} />);

    await userEvent.click(screen.getByRole("button", { name: /Manually review/ }));
    expect(screen.getByText(/eCRF — VITAL SIGNS/)).toBeInTheDocument();
  });
});

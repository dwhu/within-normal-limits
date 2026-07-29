import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { DayEnd } from "@/components/screens/DayEnd";
import { FIXTURE_SCRIPT } from "@/game/fixtures";
import { initialState, reducer } from "@/game/state";
import type { State } from "@/game/types";

const afterDay1 = (): State =>
  [{ type: "ACCEPT" } as const, { type: "ACCEPT" } as const].reduce(
    (s, a) => reducer(s, a, FIXTURE_SCRIPT),
    { ...initialState, screen: "desk" } as State,
  );

const noop = () => {};

describe("DayEnd", () => {
  it("lists what was worked", () => {
    render(<DayEnd state={afterDay1()} script={FIXTURE_SCRIPT} onBegin={noop} onSkip={noop} />);
    expect(screen.getByText(/Week 8 vitals/)).toBeInTheDocument();
  });

  it("shows the day's mail", () => {
    render(<DayEnd state={afterDay1()} script={FIXTURE_SCRIPT} onBegin={noop} onSkip={noop} />);
    expect(screen.getByText(/we're SO close/)).toBeInTheDocument();
  });

  it("shows no score, no percentage, and no verdict on the player's accuracy", () => {
    const { container } = render(
      <DayEnd state={afterDay1()} script={FIXTURE_SCRIPT} onBegin={noop} onSkip={noop} />,
    );
    const banned = /%|score|accuracy|correct|wrong|missed/i;
    // Visible text — the obvious leak.
    expect(container.textContent).not.toMatch(banned);
    // The full markup — titles, aria-labels, data- attributes, class names. A verdict hidden
    // in a tooltip or a colour-coded class is still a verdict.
    expect(container.innerHTML).not.toMatch(banned);
  });

  it("begins the next day", async () => {
    const onBegin = vi.fn();
    render(<DayEnd state={afterDay1()} script={FIXTURE_SCRIPT} onBegin={onBegin} onSkip={noop} />);

    await userEvent.click(screen.getByRole("button", { name: /Begin day 2/ }));
    expect(onBegin).toHaveBeenCalled();
  });

  it("offers to skip the next day", async () => {
    const onSkip = vi.fn();
    render(<DayEnd state={afterDay1()} script={FIXTURE_SCRIPT} onBegin={noop} onSkip={onSkip} />);

    await userEvent.click(screen.getByRole("button", { name: /Skip day/ }));
    expect(onSkip).toHaveBeenCalled();
  });
});

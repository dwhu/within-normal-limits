import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Ending } from "@/components/screens/Ending";
import { FIXTURE_SCRIPT } from "@/game/fixtures";
import { initialState, reducer } from "@/game/state";
import type { State } from "@/game/types";

const finished = (): State =>
  (
    [
      { type: "ACCEPT" },
      { type: "ACCEPT" },
      { type: "BEGIN_DAY" },
      { type: "ACCEPT" },
    ] as Parameters<typeof reducer>[1][]
  ).reduce((s, a) => reducer(s, a, FIXTURE_SCRIPT), {
    ...initialState,
    screen: "desk",
  } as State);

describe("Ending", () => {
  it("opens on the answer", () => {
    render(<Ending state={finished()} script={FIXTURE_SCRIPT} />);
    expect(screen.getByText(/EASI 15.8 is below the threshold/)).toBeInTheDocument();
  });

  it("moves through the audit finding to the point", async () => {
    render(<Ending state={finished()} script={FIXTURE_SCRIPT} />);

    await userEvent.click(screen.getByRole("button", { name: /Continue/ }));
    expect(screen.getByText(/AUDIT FINDING/)).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: /Continue/ }));
    expect(screen.getByText(/you verified/i)).toBeInTheDocument();
  });

  it("states the uncatchable item as impossible rather than as a mistake", () => {
    render(<Ending state={finished()} script={FIXTURE_SCRIPT} />);
    expect(screen.queryByText(/you should have caught/i)).toBeNull();
  });
});

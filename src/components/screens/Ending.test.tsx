import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Ending, UNCATCHABLE_WORDING } from "@/components/screens/Ending";
import { ENDING_FIXTURE, FIXTURE_SCRIPT } from "@/game/fixtures";
import { initialState, reducer } from "@/game/state";
import type { Situation, State } from "@/game/types";

const play = (script: Situation[], actions: Parameters<typeof reducer>[1][]): State =>
  actions.reduce((s, a) => reducer(s, a, script), {
    ...initialState,
    screen: "desk",
  } as State);

const finished = (): State =>
  play(FIXTURE_SCRIPT, [
    { type: "ACCEPT" },
    { type: "ACCEPT" },
    { type: "BEGIN_DAY" },
    { type: "ACCEPT" },
  ]);

// Every situation in ENDING_FIXTURE is on day 1, so accepting the three of them in order
// walks straight through to the ending screen without a BEGIN_DAY.
const finishedEnding = (): State =>
  play(ENDING_FIXTURE, [{ type: "ACCEPT" }, { type: "ACCEPT" }, { type: "ACCEPT" }]);

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

  describe("with a category 1, category 2, and category 3 harm all present", () => {
    it("renders category 1 and category 2 under separate headings that share no body text", () => {
      render(<Ending state={finishedEnding()} script={ENDING_FIXTURE} />);

      expect(screen.getByText("WHAT THE DRUG DID")).toBeInTheDocument();
      expect(screen.getByText("WHAT YOU COULD NOT HAVE CAUGHT")).toBeInTheDocument();

      const background = screen.getByText(/A trial is an experiment on people who volunteered/);
      const uncatchable = screen.getByText(UNCATCHABLE_WORDING);

      // Different paragraphs, and each one's language is exclusive to it: the category 1
      // wording never turns up in the category 2 paragraph, and vice versa.
      expect(background).not.toBe(uncatchable);
      expect(background.textContent).toMatch(/Nobody erred/);
      expect(background.textContent).not.toMatch(/requisition form/);
      expect(uncatchable.textContent).toMatch(/requisition form/);
      expect(uncatchable.textContent).not.toMatch(/Nobody erred/);
    });

    it("renders the uncatchable paragraph with its exact authored wording", () => {
      render(<Ending state={finishedEnding()} script={ENDING_FIXTURE} />);
      expect(screen.getByText(UNCATCHABLE_WORDING)).toBeInTheDocument();
    });

    it("never attributes the uncatchable item to the player", () => {
      render(<Ending state={finishedEnding()} script={ENDING_FIXTURE} />);
      expect(screen.queryByText(/should have/i)).toBeNull();
      expect(screen.queryByText(/missed/i)).toBeNull();
      expect(screen.queryByText(/failed to/i)).toBeNull();
    });

    it("gives category 3 its own framing paragraph", () => {
      render(<Ending state={finishedEnding()} script={ENDING_FIXTURE} />);
      expect(
        screen.getByText(
          "These were in the source. Opening it would have found them, at the price the clock had already shown you.",
        ),
      ).toBeInTheDocument();
    });
  });
});

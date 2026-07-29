import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Ending } from "@/components/screens/Ending";
import { ENDING_FIXTURE, FIXTURE_SCRIPT } from "@/game/fixtures";
import { initialState, reducer } from "@/game/state";
import type { Situation, State } from "@/game/types";

// Hardcoded on purpose — do NOT import UNCATCHABLE_WORDING from Ending.tsx and compare
// against itself. That comparison can only ever detect total absence: reword the
// component's copy and an import-based check still passes, because both sides of the
// comparison move together.
//
// This paragraph is duplicated in four places: VISION.md ("Uncatchable by design"),
// docs/superpowers/specs/2026-07-28-icf-please-run-design.md (the run-design spec, same
// section), docs/superpowers/plans/2026-07-28-icf-please-run.md (the plan's
// UNCATCHABLE_WORDING literal), and this component. All four currently agree byte-for-byte,
// including the curly quotes around "not collected for this study" and the subject IDs
// 1047-005 / 1047-010. This literal exists so that if any one of those four drifts from the
// others — including this component's own copy — the corresponding test below fails instead
// of the divergence going unnoticed.
const EXPECTED_UNCATCHABLE_PARAGRAPH =
  "The blood filed under 1047-005 was drawn from 1047-010, and the other way round. " +
  "Nothing on your desk disagreed with anything else on your desk. The requisition form " +
  "has a field for participant initials — field 5 — and it is pre-printed “not " +
  "collected for this study.” Had it been filled in, the mismatch would have been " +
  "caught before the results ever reached you. That was decided by whoever designed the " +
  "form, not by you.";

// Phrasings that would shift responsibility for an item that is impossible by
// construction onto the player. None of these may appear anywhere in the rendered ending.
const BLAME_PATTERNS = [
  /should have/i,
  /you missed/i,
  /you failed/i,
  /you didn't/i,
  /could have caught/i,
  /\bon you\b/i,
];

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
      const uncatchable = screen.getByText(EXPECTED_UNCATCHABLE_PARAGRAPH);

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
      expect(screen.getByText(EXPECTED_UNCATCHABLE_PARAGRAPH)).toBeInTheDocument();
    });

    it("never attributes the uncatchable item to the player, in any beat", async () => {
      const { container } = render(<Ending state={finishedEnding()} script={ENDING_FIXTURE} />);

      const rendered: string[] = [];
      rendered.push(container.textContent ?? "");
      await userEvent.click(screen.getByRole("button", { name: /Continue/ }));
      rendered.push(container.textContent ?? "");
      await userEvent.click(screen.getByRole("button", { name: /Continue/ }));
      rendered.push(container.textContent ?? "");

      const combined = rendered.join(" ");
      for (const pattern of BLAME_PATTERNS) {
        expect(combined).not.toMatch(pattern);
      }
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

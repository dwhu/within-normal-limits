import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Roster } from "@/components/windows/Roster";
import { SEED_ROSTER } from "@/game/subjects";

describe("Roster", () => {
  it("shows the subject id and the name together", () => {
    render(<Roster roster={SEED_ROSTER} changed={[]} />);

    const row = screen.getByText("1047-018").closest("tr");
    expect(row).toHaveTextContent("L. Lit");
  });

  it("shows each subject's status", () => {
    render(<Roster roster={SEED_ROSTER} changed={[]} />);

    expect(screen.getByText("1047-004").closest("tr")).toHaveTextContent("Withdrawn (by subject)");
  });

  it("marks rows that changed today and says nothing else about them", () => {
    render(<Roster roster={SEED_ROSTER} changed={["1047-001"]} />);

    const row = screen.getByText("1047-001").closest("tr");
    expect(row).toHaveAttribute("data-changed", "true");
    expect(row).not.toHaveTextContent(/error|mistake|missed/i);
  });
});

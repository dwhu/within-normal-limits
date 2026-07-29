import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { ECRF } from "@/components/windows/ECRF";
import { FIXTURE_SCRIPT } from "@/game/fixtures";

const vitals = FIXTURE_SCRIPT[0];
const eligibility = FIXTURE_SCRIPT[2];

describe("ECRF", () => {
  it("renders one empty input per field, with nothing pre-filled", () => {
    render(<ECRF situation={vitals} onSubmit={vi.fn()} />);

    expect(screen.getByLabelText("BP sitting")).toHaveValue("");
    expect(screen.getByLabelText("Pulse")).toHaveValue("");
  });

  it("submits what the player typed", async () => {
    const onSubmit = vi.fn();
    render(<ECRF situation={vitals} onSubmit={onSubmit} />);

    await userEvent.type(screen.getByLabelText("BP sitting"), "128/82");
    await userEvent.type(screen.getByLabelText("Pulse"), "72");
    await userEvent.click(screen.getByRole("button", { name: /Submit to database/ }));

    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ bp: "128/82", pulse: "72" }),
      undefined,
    );
  });

  it("shows a determination for a screening item", () => {
    render(<ECRF situation={eligibility} onSubmit={vi.fn()} />);
    expect(screen.getByLabelText("Screen failure")).toBeInTheDocument();
  });

  it("will not submit a screening item until a determination is chosen", async () => {
    const onSubmit = vi.fn();
    const noVera = { ...eligibility, vera: undefined };
    render(<ECRF situation={noVera} onSubmit={onSubmit} />);

    await userEvent.click(screen.getByRole("button", { name: /Submit to database/ }));
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("submits the chosen determination", async () => {
    const onSubmit = vi.fn();
    render(<ECRF situation={eligibility} onSubmit={onSubmit} />);

    await userEvent.click(screen.getByLabelText("Screen failure"));
    await userEvent.click(screen.getByRole("button", { name: /Submit to database/ }));

    expect(onSubmit).toHaveBeenCalledWith(expect.any(Object), "screen-fail");
  });

  it("pre-fills the form with VERA's drafted values and determination", () => {
    render(<ECRF situation={eligibility} onSubmit={vi.fn()} />);
    expect(screen.getByLabelText("EASI (screening)")).toHaveValue("15.8");
    expect(screen.getByLabelText("Eligible — randomize")).toBeChecked();
  });

  it("opens empty when the situation has no VERA block", () => {
    render(<ECRF situation={vitals} onSubmit={vi.fn()} />);
    expect(screen.getByLabelText("BP sitting")).toHaveValue("");
    expect(screen.getByLabelText("Pulse")).toHaveValue("");
  });
});

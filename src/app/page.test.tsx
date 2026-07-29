import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import Home from "./page";

describe("Home", () => {
  it("opens on the sign-in screen", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Site 1047 · Coordinator" }),
    ).toBeInTheDocument();
  });

  it("moves to the desk when signed in", async () => {
    render(<Home />);
    await userEvent.click(screen.getByRole("button", { name: "Sign in" }));

    expect(screen.getByText("Week 8 vitals")).toBeInTheDocument();
  });
});

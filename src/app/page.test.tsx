import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";

import { SAVE_KEY, save } from "@/game/persist";
import { initialState } from "@/game/state";

import Home from "./page";

describe("Home", () => {
  // Home saves on every state change, so without this the tests share one jsdom store and
  // each one's run leaks into the next.
  beforeEach(() => {
    localStorage.clear();
    window.history.replaceState(null, "", "/");
  });

  it("opens on the sign-in screen", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Site 1047 · Coordinator Login" }),
    ).toBeInTheDocument();
  });

  it("moves to the desk when signed in", async () => {
    render(<Home />);
    await userEvent.click(screen.getByRole("button", { name: "Sign in" }));

    expect(screen.getByText("Eligibility review")).toBeInTheDocument();
  });

  it("opens a saved run on the sign-in screen, then resumes where it was left", async () => {
    save({ ...initialState, screen: "desk", index: 1, clock: 90 });

    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Site 1047 · Coordinator Login" }),
    ).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "Sign in" }));

    // The second situation of day 1, not the first: the run resumed rather than restarted.
    expect(screen.getByText("Week 8 vitals")).toBeInTheDocument();
  });

  it("discards the saved run and strips the param when loaded with ?reset=1", async () => {
    save({ ...initialState, screen: "desk", index: 1, clock: 90 });
    window.history.replaceState(null, "", "/?reset=1");

    render(<Home />);
    await userEvent.click(screen.getByRole("button", { name: "Sign in" }));

    // The first situation of day 1: the save was thrown away rather than resumed.
    expect(screen.getByText("Eligibility review")).toBeInTheDocument();
    expect(localStorage.getItem(SAVE_KEY)).not.toContain('"index":1');
    expect(window.location.search).toBe("");
  });
});

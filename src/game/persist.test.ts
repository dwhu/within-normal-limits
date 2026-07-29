import { beforeEach, describe, expect, it } from "vitest";

import { clear, load, SAVE_KEY, save } from "@/game/persist";
import { initialState } from "@/game/state";

beforeEach(() => localStorage.clear());

describe("persistence", () => {
  it("returns null when there is nothing saved", () => {
    expect(load()).toBeNull();
  });

  it("round-trips a run", () => {
    save({ ...initialState, day: 3, clock: 120 });
    expect(load()).toMatchObject({ day: 3, clock: 120 });
  });

  it("discards a save written by an older version", () => {
    localStorage.setItem(SAVE_KEY, JSON.stringify({ version: 0, state: initialState }));
    expect(load()).toBeNull();
  });

  it("discards a corrupt save rather than throwing", () => {
    localStorage.setItem(SAVE_KEY, "{{{not json");
    expect(load()).toBeNull();
  });

  it("clears a save", () => {
    save(initialState);
    clear();
    expect(load()).toBeNull();
  });
});

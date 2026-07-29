import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

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

  describe("when localStorage throws", () => {
    afterEach(() => {
      vi.restoreAllMocks();
    });

    it("save() does not throw when setItem throws (e.g. a full store)", () => {
      vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
        throw new Error("QuotaExceededError");
      });

      expect(() => save(initialState)).not.toThrow();
    });

    it("load() returns null rather than throwing when getItem throws", () => {
      vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
        throw new Error("localStorage unavailable");
      });

      expect(load()).toBeNull();
    });

    it("clear() does not throw when removeItem throws", () => {
      vi.spyOn(Storage.prototype, "removeItem").mockImplementation(() => {
        throw new Error("localStorage unavailable");
      });

      expect(() => clear()).not.toThrow();
    });
  });
});

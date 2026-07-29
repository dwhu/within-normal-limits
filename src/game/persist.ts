import type { State } from "@/game/types";

export const SAVE_KEY = "icf-please:run";
export const SAVE_VERSION = 1;

export function save(state: State): void {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify({ version: SAVE_VERSION, state }));
  } catch {
    // A full or unavailable localStorage must never interrupt a run.
  }
}

export function load(): State | null {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as { version?: number; state?: State };
    if (parsed.version !== SAVE_VERSION || !parsed.state) return null;

    return parsed.state;
  } catch {
    return null;
  }
}

export function clear(): void {
  try {
    localStorage.removeItem(SAVE_KEY);
  } catch {
    // ignored
  }
}

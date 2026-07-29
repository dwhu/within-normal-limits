import { afterEach, describe, expect, it, vi } from "vitest";

import { loadDocIndex, loadDocument } from "@/game/documents";

afterEach(() => vi.unstubAllGlobals());

describe("documents", () => {
  it("loads and returns the index", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => ({
        ok: true,
        json: async () => [{ file: "protocol.md", title: "Protocol", words: 25077 }],
      })),
    );

    const index = await loadDocIndex();
    expect(index).toHaveLength(1);
    expect(index[0].title).toBe("Protocol");
  });

  it("loads a document's text", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => ({ ok: true, text: async () => "# Protocol\n" })),
    );

    expect(await loadDocument("protocol.md")).toBe("# Protocol\n");
  });

  it("throws a named error when a document is missing", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => ({ ok: false, status: 404 })));

    await expect(loadDocument("nope.md")).rejects.toThrow("nope.md");
  });
});

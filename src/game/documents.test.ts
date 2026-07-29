import { afterEach, describe, expect, it, vi } from "vitest";

import { loadDocIndex, loadDocument, loadSource } from "@/game/documents";

afterEach(() => vi.unstubAllGlobals());

describe("documents", () => {
  it("loads and returns the index", async () => {
    const fetchMock = vi.fn(async () => ({
      ok: true,
      json: async () => [{ file: "protocol.md", title: "Protocol", words: 25077 }],
    }));
    vi.stubGlobal("fetch", fetchMock);

    const index = await loadDocIndex();
    expect(index).toHaveLength(1);
    expect(index[0].title).toBe("Protocol");
    expect(fetchMock).toHaveBeenCalledWith("/content/documents/index.json");
  });

  it("loads a document's text", async () => {
    const fetchMock = vi.fn(async () => ({ ok: true, text: async () => "# Protocol\n" }));
    vi.stubGlobal("fetch", fetchMock);

    expect(await loadDocument("protocol.md")).toBe("# Protocol\n");
    expect(fetchMock).toHaveBeenCalledWith("/content/documents/protocol.md");
  });

  it("throws a named error when a document is missing", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => ({ ok: false, status: 404 })));

    await expect(loadDocument("nope.md")).rejects.toThrow("nope.md");
  });

  it("loads a source document's text", async () => {
    const fetchMock = vi.fn(async () => ({ ok: true, text: async () => "# Source\n" }));
    vi.stubGlobal("fetch", fetchMock);

    expect(await loadSource("consent-addendum.md")).toBe("# Source\n");
    expect(fetchMock).toHaveBeenCalledWith("/content/source/consent-addendum.md");
  });

  it("caches a document after the first fetch", async () => {
    const fetchMock = vi.fn(async () => ({ ok: true, text: async () => "# Cached\n" }));
    vi.stubGlobal("fetch", fetchMock);

    const first = await loadDocument("cached-doc.md");
    const second = await loadDocument("cached-doc.md");

    expect(first).toBe("# Cached\n");
    expect(second).toBe("# Cached\n");
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});

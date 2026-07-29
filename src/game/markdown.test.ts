import { describe, expect, it } from "vitest";

import { buildCorpus, parseMarkdown } from "@/game/markdown";

const corpusOf = (markdown: string) => buildCorpus(parseMarkdown(markdown)).text;

describe("buildCorpus", () => {
  it("flows inline content across a bold boundary with no separator", () => {
    expect(corpusOf("This **Protocol** shall govern.\n")).toBe("This Protocol shall govern.");
  });

  it("flows inline content across an emphasis boundary with no separator", () => {
    expect(corpusOf("Study *drug* administration.\n")).toBe("Study drug administration.");
  });

  it("flows a link's visible text into the surrounding sentence", () => {
    expect(corpusOf("See [the protocol](https://example.com) for details.\n")).toBe(
      "See the protocol for details.",
    );
  });

  it("separates two paragraphs so they can't read as one phrase", () => {
    expect(corpusOf("Foo bar.\n\nBaz qux.\n")).toBe("Foo bar.\nBaz qux.");
  });

  it("separates table cells so adjacent cells can't read as one phrase", () => {
    const text = corpusOf("| Analyte | Result |\n| --- | --- |\n| ALT | 24 |\n");
    expect(text).not.toContain("ALT24");
    expect(text).not.toContain("ALT 24");
    expect(text).toContain("ALT");
    expect(text).toContain("24");
  });

  it("separates list items", () => {
    const text = corpusOf("- first item\n- second item\n");
    expect(text).not.toContain("itemsecond");
    expect(text).toContain("first item");
    expect(text).toContain("second item");
  });

  it("includes heading and code text as searchable", () => {
    const text = corpusOf("# A Heading\n\n`inline code`\n");
    expect(text).toContain("A Heading");
    expect(text).toContain("inline code");
  });

  it("drops raw <br> HTML without leaving it as visible/searchable text", () => {
    const text = corpusOf("Line one<br>Line two\n");
    expect(text).not.toContain("<br>");
    expect(text).toContain("Line one");
    expect(text).toContain("Line two");
  });

  it("records leaf offsets that slice back into the corpus as the original leaf text", () => {
    const root = parseMarkdown("This **Protocol** shall govern.\n");
    const { text, leaves } = buildCorpus(root);
    const slices = leaves.map((l) => text.slice(l.start, l.end));
    expect(slices).toEqual(["This ", "Protocol", " shall govern."]);
  });
});

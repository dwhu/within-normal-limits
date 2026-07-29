import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { DocViewer } from "@/components/windows/DocViewer";

const TEXT = "5.2 Inclusion Criteria\n4. EASI >=16 at screening\n5. vIGA-AD >=3\n";

afterEach(() => vi.unstubAllGlobals());

const stub = (text: string) =>
  vi.stubGlobal(
    "fetch",
    vi.fn(async () => ({ ok: true, text: async () => text })),
  );

const stubByFile = (byFile: Record<string, string>) =>
  vi.stubGlobal(
    "fetch",
    vi.fn(async (input: string | URL) => {
      const file = String(input).split("/").pop() ?? "";
      const text = byFile[file];
      if (text === undefined) return { ok: false, status: 404 };
      return { ok: true, text: async () => text };
    }),
  );

describe("DocViewer", () => {
  it("renders the document text", async () => {
    stub(TEXT);
    render(<DocViewer file="protocol-a.md" kind="document" />);

    await waitFor(() => expect(screen.getByText(/Inclusion Criteria/)).toBeInTheDocument());
  });

  it("reports the match count as the player types", async () => {
    stub(TEXT);
    render(<DocViewer file="protocol-b.md" kind="document" />);
    await waitFor(() => screen.getByText(/Inclusion Criteria/));

    await userEvent.type(screen.getByLabelText("Find"), "EASI");
    expect(screen.getByText("1 of 1")).toBeInTheDocument();
  });

  it("reports no matches when there are none", async () => {
    stub(TEXT);
    render(<DocViewer file="protocol-c.md" kind="document" />);
    await waitFor(() => screen.getByText(/Inclusion Criteria/));

    await userEvent.type(screen.getByLabelText("Find"), "zzzz");
    expect(screen.getByText("0 of 0")).toBeInTheDocument();
  });

  it("keeps the active match index in range after switching to a document with fewer matches", async () => {
    const many = "alt alt alt";
    const few = "alt only once here";
    stubByFile({ "many.md": many, "few.md": few });

    const { rerender } = render(<DocViewer file="many.md" kind="document" />);
    await waitFor(() => expect(screen.getByText(many)).toBeInTheDocument());

    await userEvent.type(screen.getByLabelText("Find"), "alt");
    expect(screen.getByText("1 of 3")).toBeInTheDocument();

    const next = screen.getByRole("button", { name: "Next" });
    await userEvent.click(next);
    await userEvent.click(next);
    expect(screen.getByText("3 of 3")).toBeInTheDocument();

    rerender(<DocViewer file="few.md" kind="document" />);

    await waitFor(() => expect(screen.getByText("1 of 1")).toBeInTheDocument());
    expect(screen.queryByText("3 of 1")).not.toBeInTheDocument();
  });

  it("shows an error when the document cannot be loaded", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => ({ ok: false, status: 404 })),
    );
    render(<DocViewer file="missing.md" kind="document" />);

    await waitFor(() => expect(screen.getByText(/could not be opened/i)).toBeInTheDocument());
  });
});

// Search has to run over what the player actually sees, not the raw markdown source — a
// regression suite of its own, since every case above uses plain unformatted text and would
// pass even if search were matching raw "**bold**" syntax instead of rendered "bold" text.
describe("DocViewer — search over rendered markdown", () => {
  it("finds a phrase that crosses a **bold** boundary", async () => {
    stub("This **Protocol** shall govern the conduct of the study.\n");
    const { container } = render(<DocViewer file="bold-boundary.md" kind="document" />);
    await waitFor(() => expect(screen.getByText("Protocol")).toBeInTheDocument());

    // The raw markdown is "This **Protocol** shall govern…" — searching raw text would find
    // nothing here, because "**" sits between "Protocol" and "shall". The rendered text is
    // "This Protocol shall govern…", where the phrase is contiguous.
    await userEvent.type(screen.getByLabelText("Find"), "Protocol shall govern");
    expect(screen.getByText("1 of 1")).toBeInTheDocument();
    expect(container.querySelectorAll("mark").length).toBeGreaterThan(0);
  });

  it("finds a match inside a GFM table cell", async () => {
    stub("| Analyte | Result |\n| --- | --- |\n| ALT | 24 U/L |\n");
    const { container } = render(<DocViewer file="table-cell.md" kind="document" />);
    await waitFor(() => expect(screen.getByText("24 U/L")).toBeInTheDocument());

    await userEvent.type(screen.getByLabelText("Find"), "24 U/L");
    expect(screen.getByText("1 of 1")).toBeInTheDocument();
    expect(container.querySelector("td mark, th mark")).not.toBeNull();
  });

  it("finds a phrase spanning a link boundary", async () => {
    stub("See [the protocol](https://example.com/protocol) for details.\n");
    const { container } = render(<DocViewer file="link-boundary.md" kind="document" />);
    await waitFor(() => expect(screen.getByText("the protocol")).toBeInTheDocument());

    // "the protocol" is the link's visible text; " for" is plain text right after it. The raw
    // markdown has the link syntax (`](url)`) sitting in between.
    await userEvent.type(screen.getByLabelText("Find"), "the protocol for");
    expect(screen.getByText("1 of 1")).toBeInTheDocument();
    expect(container.querySelector("a mark")).not.toBeNull();
  });

  it("does not let two different table cells read as one contiguous phrase", async () => {
    stub("| Analyte | Result |\n| --- | --- |\n| ALT | 24 |\n");
    render(<DocViewer file="table-no-bleed.md" kind="document" />);
    await waitFor(() => expect(screen.getByText("ALT")).toBeInTheDocument());

    // "ALT" and "24" are adjacent cells on the same row; nothing on screen reads "ALT24" or
    // "ALT 24", so that shouldn't be a match.
    await userEvent.type(screen.getByLabelText("Find"), "ALT24");
    expect(screen.getByText("0 of 0")).toBeInTheDocument();
  });
});

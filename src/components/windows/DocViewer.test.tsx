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

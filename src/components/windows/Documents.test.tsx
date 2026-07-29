import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { Documents } from "@/components/windows/Documents";

const INDEX = [
  {
    file: "protocol.md",
    title: "Protocol 20210143, Amendment 3",
    bytes: 166253,
    modified: "2023-11-29",
  },
  { file: "lab_manual.md", title: "Laboratory Manual", bytes: 125741, modified: "2023-03-15" },
];

afterEach(() => vi.unstubAllGlobals());

describe("Documents", () => {
  it("lists every document with its file size and modified date", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => ({ ok: true, json: async () => INDEX })),
    );
    render(<Documents onOpen={vi.fn()} />);

    await waitFor(() => screen.getByText("Laboratory Manual"));
    expect(screen.getByText("162 KB")).toBeInTheDocument();
    expect(screen.getByText("29-NOV-2023")).toBeInTheDocument();
  });

  it("opens the document the player picks", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => ({ ok: true, json: async () => INDEX })),
    );
    const onOpen = vi.fn();
    render(<Documents onOpen={onOpen} />);

    await waitFor(() => screen.getByText("Laboratory Manual"));
    await userEvent.click(screen.getByText("Laboratory Manual"));

    expect(onOpen).toHaveBeenCalledWith("lab_manual.md", "Laboratory Manual");
  });
});

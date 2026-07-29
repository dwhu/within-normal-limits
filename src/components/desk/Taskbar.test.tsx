import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Taskbar } from "@/components/desk/Taskbar";
import type { WindowState } from "@/components/desk/useWindows";

const WINDOWS: WindowState[] = [
  { id: "queue", title: "Work Queue", x: 16, y: 16, w: 900, h: 560, z: 1 },
  { id: "documents", title: "Documents", x: 320, y: 160, w: 560, h: 440, z: 2 },
];

describe("Taskbar", () => {
  it("shows only open windows in the bar, not the launchers", () => {
    render(<Taskbar windows={WINDOWS} clock={0} day={1} onFocus={vi.fn()} onOpen={vi.fn()} />);

    expect(screen.getByRole("button", { name: "Work Queue" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Documents" })).toBeInTheDocument();
    // Inbox and Roster aren't open, so they shouldn't appear as taskbar buttons at all.
    expect(screen.queryByRole("button", { name: "Inbox" })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Roster" })).not.toBeInTheDocument();
  });

  it("opens the launcher menu from the EDC button and launches a window from it", async () => {
    const onOpen = vi.fn();
    render(<Taskbar windows={[]} clock={0} day={1} onFocus={vi.fn()} onOpen={onOpen} />);

    expect(screen.queryByRole("button", { name: "Inbox" })).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "EDC" }));
    const inbox = screen.getByRole("button", { name: "Inbox" });
    expect(inbox).toBeInTheDocument();

    await userEvent.click(inbox);
    expect(onOpen).toHaveBeenCalledWith("inbox", "Inbox");
    // The menu closes once an item is chosen.
    expect(screen.queryByRole("button", { name: "Inbox" })).not.toBeInTheDocument();
  });

  it("closes the launcher menu on an outside click without opening anything", async () => {
    const onOpen = vi.fn();
    render(
      <div>
        <div data-testid="outside">elsewhere</div>
        <Taskbar windows={[]} clock={0} day={1} onFocus={vi.fn()} onOpen={onOpen} />
      </div>,
    );

    await userEvent.click(screen.getByRole("button", { name: "EDC" }));
    expect(screen.getByRole("button", { name: "Roster" })).toBeInTheDocument();

    await userEvent.click(screen.getByTestId("outside"));
    expect(screen.queryByRole("button", { name: "Roster" })).not.toBeInTheDocument();
    expect(onOpen).not.toHaveBeenCalled();
  });

  it("focuses an open window when its taskbar button is clicked", async () => {
    const onFocus = vi.fn();
    render(<Taskbar windows={WINDOWS} clock={0} day={1} onFocus={onFocus} onOpen={vi.fn()} />);

    await userEvent.click(screen.getByRole("button", { name: "Documents" }));
    expect(onFocus).toHaveBeenCalledWith("documents");
  });

  it("shows the clock and day label", () => {
    const { container } = render(
      <Taskbar windows={[]} clock={90} day={2} onFocus={vi.fn()} onOpen={vi.fn()} />,
    );
    expect(container.textContent).toContain("Tue 09 Jan 2024");
    expect(container.textContent).toContain("9:30 AM");
  });
});

import type {
  Blockquote,
  Code,
  Delete,
  Emphasis,
  Heading,
  Html,
  InlineCode,
  Link,
  List,
  ListItem,
  Nodes,
  Paragraph,
  Root,
  Strong,
  Table,
  TableCell,
  TableRow,
  Text,
} from "mdast";
import { Fragment, type ReactNode } from "react";

import type { Match } from "@/components/windows/find";
import type { LeafOffset } from "@/game/markdown";

type RenderState = {
  leaves: LeafOffset[];
  leafIndex: number;
  matches: Match[];
  matchIndex: number;
  active: number;
};

const HEADING_CLASS: Record<Heading["depth"], string> = {
  1: "mt-3 mb-1 text-[13px] font-bold first:mt-0",
  2: "mt-3 mb-1 text-[12px] font-bold",
  3: "mt-2 mb-1 font-bold",
  4: "mt-2 mb-1 font-bold",
  5: "mt-2 mb-1 font-bold",
  6: "mt-2 mb-1 font-bold",
};

/**
 * Highlights one text-bearing leaf against the globally-computed `matches` (corpus
 * coordinates), consuming exactly one entry from `state.leaves` — the entry `buildCorpus`
 * recorded for this exact leaf, in this exact traversal order. A match that starts in a
 * previous leaf (e.g. inside `**bold**`) or continues into the next one is rendered as a
 * partial `<mark>` here and picked back up where it left off; `state.matchIndex` (the "which
 * match is this" counter that decides active/inactive) only advances once a match is fully
 * consumed, so a match split across leaves still counts as one match, not two.
 */
function renderLeafText(value: string, state: RenderState, keyPrefix: string): ReactNode {
  const offset = state.leaves[state.leafIndex];
  state.leafIndex += 1;
  if (!offset || value.length === 0) return value;

  const { start, end } = offset;
  const out: ReactNode[] = [];
  let cursor = start;

  while (state.matchIndex < state.matches.length && state.matches[state.matchIndex].start < end) {
    const m = state.matches[state.matchIndex];
    if (m.end <= cursor) {
      state.matchIndex += 1;
      continue;
    }

    const segStart = Math.max(m.start, cursor);
    const segEnd = Math.min(m.end, end);
    if (segStart > cursor) out.push(value.slice(cursor - start, segStart - start));

    const isActive = state.matchIndex === state.active;
    out.push(
      <mark
        key={`${keyPrefix}-${segStart}`}
        data-match={isActive ? "active" : undefined}
        style={{ background: isActive ? "#ffd54a" : "#fff3b0", color: "inherit" }}
      >
        {value.slice(segStart - start, segEnd - start)}
      </mark>,
    );
    cursor = segEnd;

    if (m.end <= end) {
      state.matchIndex += 1;
    } else {
      break;
    }
  }

  if (cursor < end) out.push(value.slice(cursor - start));
  return out;
}

function renderChildren(nodes: Nodes[] | undefined, state: RenderState): ReactNode {
  // Index keys are safe here: this is a one-shot render of a freshly-parsed, static mdast
  // tree — nodes are never reordered, inserted, or removed within a render, only re-parsed
  // wholesale when the document text changes (a fresh tree, fresh indices, fresh render).
  // biome-ignore lint/suspicious/noArrayIndexKey: static tree, see above
  return (nodes ?? []).map((node, i) => <Fragment key={i}>{renderNode(node, state)}</Fragment>);
}

function alignStyle(align: Table["align"], i: number): { textAlign: "left" | "right" | "center" } {
  return { textAlign: align?.[i] ?? "left" };
}

function renderTableRow(
  row: TableRow,
  state: RenderState,
  cellTag: "td" | "th",
  align: Table["align"],
): ReactNode {
  return (
    <tr>
      {row.children.map((cell: TableCell, i) => {
        const Cell = cellTag;
        // Index keys are safe here: a static, freshly-parsed row that's never reordered (see
        // renderChildren above).
        const key = i;
        return (
          <Cell
            key={key}
            className="border border-neutral-400 px-2 py-1 align-top"
            style={alignStyle(align, i)}
          >
            {renderChildren(cell.children, state)}
          </Cell>
        );
      })}
    </tr>
  );
}

function renderNode(node: Nodes, state: RenderState): ReactNode {
  switch (node.type) {
    case "text":
      return renderLeafText((node as Text).value, state, "t");
    case "inlineCode":
      return <code>{renderLeafText((node as InlineCode).value, state, "c")}</code>;
    case "code": {
      const c = node as Code;
      return (
        <pre className="my-2 overflow-x-auto">
          <code>{renderLeafText(c.value, state, "cb")}</code>
        </pre>
      );
    }
    case "break":
      return <br />;
    case "html": {
      const h = node as Html;
      return /^<br\s*\/?>$/i.test(h.value.trim()) ? <br /> : null;
    }
    case "thematicBreak":
      return <hr className="my-3 border-neutral-400" />;
    case "paragraph":
      return (
        <p className="mb-2 last:mb-0">{renderChildren((node as Paragraph).children, state)}</p>
      );
    case "heading": {
      const h = node as Heading;
      const Tag = `h${h.depth}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
      return <Tag className={HEADING_CLASS[h.depth]}>{renderChildren(h.children, state)}</Tag>;
    }
    case "strong":
      return (
        <strong className="font-bold">{renderChildren((node as Strong).children, state)}</strong>
      );
    case "emphasis":
      return <em className="italic">{renderChildren((node as Emphasis).children, state)}</em>;
    case "delete":
      return <del>{renderChildren((node as Delete).children, state)}</del>;
    case "link": {
      const l = node as Link;
      return (
        <a href={l.url} className="underline">
          {renderChildren(l.children, state)}
        </a>
      );
    }
    case "blockquote":
      return (
        <blockquote className="my-2 border-l-2 border-neutral-500 pl-2 italic">
          {renderChildren((node as Blockquote).children, state)}
        </blockquote>
      );
    case "list": {
      const l = node as List;
      return l.ordered ? (
        <ol className="mb-2 list-decimal pl-4" start={l.start ?? undefined}>
          {renderChildren(l.children, state)}
        </ol>
      ) : (
        <ul className="mb-2 list-disc pl-4">{renderChildren(l.children, state)}</ul>
      );
    }
    case "listItem":
      return <li className="ml-4">{renderChildren((node as ListItem).children, state)}</li>;
    case "table": {
      const t = node as Table;
      const [head, ...body] = t.children;
      return (
        <table className="mb-3 border-collapse border border-neutral-400">
          {head && (
            <thead className="bg-[var(--edc-face)]">
              {renderTableRow(head, state, "th", t.align)}
            </thead>
          )}
          <tbody>
            {body.map((row, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: static tree, see renderChildren above
              <Fragment key={i}>{renderTableRow(row, state, "td", t.align)}</Fragment>
            ))}
          </tbody>
        </table>
      );
    }
    default:
      // Anything we didn't anticipate: recurse into its children (if any) rather than
      // dropping them silently — matches buildCorpus's own fallback, so leafIndex stays in
      // sync with the offsets it recorded even for a node type neither of us special-cased.
      return "children" in node && Array.isArray(node.children)
        ? renderChildren(node.children as Nodes[], state)
        : null;
  }
}

/** Renders a parsed markdown document, highlighting `matches` (corpus coordinates, from the
 * same `buildCorpus(root)` this document's search box searches) with `active` as the current
 * one. */
export function renderMarkdownDocument(
  root: Root,
  leaves: LeafOffset[],
  matches: Match[],
  active: number,
): ReactNode {
  const state: RenderState = { leaves, leafIndex: 0, matches, matchIndex: 0, active };
  return renderChildren(root.children, state);
}

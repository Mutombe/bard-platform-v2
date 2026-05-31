import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  MagnifyingGlassIcon,
  XIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  StorefrontIcon,
  NewspaperIcon,
  BuildingsIcon,
  UsersThreeIcon,
  CompassIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  CornersOutIcon,
} from "@phosphor-icons/react";
import { PRODUCTS } from "../data/products.js";
import { INSIGHTS } from "../data/insights.js";
import { GROUP_ENTITIES } from "../data/group.js";
import { AUDIENCES } from "../data/audiences.js";

/**
 * Institutional search modal — the "command-K" pattern, ours.
 *
 * Triggered from the Nav search icon or the / and Cmd-K keyboard
 * shortcuts. Opens a centred dialog above an ink/60 blurred backdrop.
 * Searches across products, insights, group entities, audiences and
 * key destinations; results are grouped by section with type chips,
 * keyboard-navigable, and reveal with stagger.
 *
 * Beauty moves:
 *  • Animated scale-fade in/out via framer-motion
 *  • Big leading search icon + tracking-wide placeholder
 *  • Grouped section headers with hairline accents
 *  • Per-result hover state — orange tint + arrow nudge
 *  • Empty state shows "Frequently asked" suggestions
 *  • Footer with keyboard hints (↑↓ to navigate, ⏎ to open, esc to close)
 */

// Build a flat, searchable index from the four data files.
function buildIndex() {
  const items = [];
  PRODUCTS.forEach((p) =>
    items.push({
      id: `p-${p.slug}`,
      type: "product",
      title: p.name,
      eyebrow: p.eyebrow,
      summary: p.summary,
      path: `/products/${p.slug}`,
      keywords: [p.name, p.eyebrow, p.category, ...(p.audience || [])].join(" "),
    })
  );
  INSIGHTS.forEach((it) =>
    items.push({
      id: `i-${it.slug}`,
      type: "insight",
      title: it.title,
      eyebrow: it.eyebrow,
      summary: it.summary,
      path: `/insights/${it.slug}`,
      keywords: [it.title, it.eyebrow, it.author, ...(it.audience || [])].join(" "),
    })
  );
  GROUP_ENTITIES.forEach((e) =>
    items.push({
      id: `g-${e.id}`,
      type: "group",
      title: e.name,
      eyebrow: e.role,
      summary: e.tagline,
      path: e.href,
      keywords: [e.name, e.short, e.role, e.tagline].join(" "),
    })
  );
  AUDIENCES.forEach((a) =>
    items.push({
      id: `a-${a.id}`,
      type: "audience",
      title: `${a.label} banking`,
      eyebrow: "Audience",
      summary: a.eyebrow || `Banking for ${a.id}`,
      path: a.path,
      keywords: [a.label, a.label_full, a.id].join(" "),
    })
  );
  // Static destinations
  [
    { title: "Banking", path: "/banking", summary: "All banking products on one shelf", eyebrow: "Service" },
    { title: "Wealth", path: "/wealth", summary: "Discretionary mandates, advisory portfolios, structured credit", eyebrow: "Service" },
    { title: "Markets & Treasury", path: "/markets", summary: "Treasury, FX, debt capital markets, trade finance", eyebrow: "Service" },
    { title: "Online Banking", path: "/online-banking", summary: "Manage accounts, send and receive, pay bills, monitor in real time", eyebrow: "Digital" },
    { title: "Log in", path: "/login", summary: "Continue with Google, Apple, or your Bard Santner credentials", eyebrow: "Digital" },
    { title: "Banking app dashboard", path: "/app", summary: "Accounts, transfers, statements — the signed-in customer view", eyebrow: "Digital" },
    { title: "The Group", path: "/group", summary: "Five institutions, one discipline", eyebrow: "About" },
    { title: "About Bard Santner", path: "/about", summary: "A modern African financial platform", eyebrow: "About" },
    { title: "Leadership", path: "/leadership", summary: "Named, accountable, reachable", eyebrow: "About" },
    { title: "Locations", path: "/locations", summary: "Branches, desks, representative offices", eyebrow: "About" },
    { title: "Contact", path: "/contact", summary: "Telephone, email, WhatsApp, by appointment", eyebrow: "Reach" },
    { title: "Insights", path: "/insights", summary: "Editorial commentary from the desk", eyebrow: "Reading" },
  ].forEach((p) =>
    items.push({
      id: `s-${p.path}`,
      type: "page",
      title: p.title,
      eyebrow: p.eyebrow,
      summary: p.summary,
      path: p.path,
      keywords: `${p.title} ${p.summary} ${p.eyebrow}`,
    })
  );
  return items;
}

const TYPE_META = {
  product: { label: "Products", icon: StorefrontIcon, order: 1 },
  insight: { label: "Insights", icon: NewspaperIcon, order: 2 },
  group: { label: "The Group", icon: BuildingsIcon, order: 3 },
  audience: { label: "Audiences", icon: UsersThreeIcon, order: 4 },
  page: { label: "Pages", icon: CompassIcon, order: 5 },
};

// Curated empty-state suggestions
const SUGGESTIONS = [
  { label: "Log in to Online Banking", path: "/login" },
  { label: "Preview the app", path: "/app" },
  { label: "Open an Everyday Account", path: "/products/everyday-account" },
  { label: "Diaspora banking", path: "/international" },
  { label: "Wealth management", path: "/wealth" },
  { label: "Speak to a banker", path: "/contact" },
];

export default function SearchModal({ open, onClose }) {
  const [query, setQuery] = useState("");
  const [highlighted, setHighlighted] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const index = useMemo(() => buildIndex(), []);

  // Filter + group results. Empty query → empty results (we show
  // suggestions instead). Non-empty → case-insensitive includes match
  // over the keywords field.
  const { groups, flat } = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = q
      ? index.filter((it) => it.keywords.toLowerCase().includes(q))
      : [];
    const byType = {};
    filtered.forEach((it) => {
      if (!byType[it.type]) byType[it.type] = [];
      byType[it.type].push(it);
    });
    const ordered = Object.entries(byType).sort(
      (a, b) => TYPE_META[a[0]].order - TYPE_META[b[0]].order
    );
    return { groups: ordered, flat: filtered };
  }, [query, index]);

  // Reset on open
  useEffect(() => {
    if (open) {
      setQuery("");
      setHighlighted(0);
      // Focus the input on next tick (after the modal is in DOM)
      requestAnimationFrame(() => inputRef.current?.focus());
      document.body.classList.add("scroll-lock");
    } else {
      document.body.classList.remove("scroll-lock");
    }
    return () => document.body.classList.remove("scroll-lock");
  }, [open]);

  // Reset highlighted when results change
  useEffect(() => setHighlighted(0), [query]);

  // Keyboard handling — arrows, enter, esc
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHighlighted((h) => Math.min(h + 1, Math.max(flat.length - 1, 0)));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setHighlighted((h) => Math.max(h - 1, 0));
      } else if (e.key === "Enter") {
        const target = flat[highlighted];
        if (target) {
          e.preventDefault();
          navigate(target.path);
          onClose();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, flat, highlighted, navigate, onClose]);

  // Build an absolute index per group so we can highlight the right
  // item across grouped sections.
  let cursor = 0;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="search-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-16 md:pt-28 px-4 md:px-6 bg-ink/60 backdrop-blur-[6px]"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-2xl bg-paper rounded-2xl shadow-[0_24px_80px_rgba(12,10,20,0.28)] overflow-hidden flex flex-col max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Search Bard Santner"
          >
            {/* Input row */}
            <div className="relative border-b border-bone-200">
              <MagnifyingGlassIcon
                size={20}
                weight="regular"
                className="absolute left-6 top-1/2 -translate-y-1/2 text-bone-500"
              />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search products, insights, the Group…"
                className="w-full pl-16 pr-14 py-5 md:py-6 text-[16px] md:text-[18px] text-navy-700 placeholder:text-bone-400 bg-transparent outline-none"
                aria-label="Search query"
              />
              <button
                onClick={onClose}
                aria-label="Close search"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full hover:bg-smoke text-bone-500 hover:text-navy-700 transition-colors"
              >
                <XIcon size={18} weight="bold" />
              </button>
            </div>

            {/* Body — suggestions when empty, grouped results otherwise */}
            <div className="flex-1 overflow-y-auto">
              {query.trim() === "" ? (
                <EmptyState onPick={(path) => { navigate(path); onClose(); }} />
              ) : flat.length === 0 ? (
                <NoResults query={query} />
              ) : (
                <div className="py-2">
                  {groups.map(([type, items]) => {
                    const meta = TYPE_META[type];
                    const Icon = meta.icon;
                    return (
                      <div key={type} className="py-2">
                        <div className="px-6 py-3 flex items-center gap-3">
                          <Icon size={14} weight="regular" className="text-orange-600" />
                          <p className="eyebrow eyebrow-accent">{meta.label}</p>
                          <span className="h-[1px] flex-1 bg-bone-200 ml-2" />
                          <span className="text-[11px] text-bone-500 font-medium">
                            {items.length}
                          </span>
                        </div>
                        <ul>
                          {items.map((it) => {
                            const i = cursor++;
                            const active = i === highlighted;
                            return (
                              <li key={it.id}>
                                <button
                                  type="button"
                                  onMouseEnter={() => setHighlighted(i)}
                                  onClick={() => { navigate(it.path); onClose(); }}
                                  className={`w-full text-left px-6 py-3.5 flex items-center gap-4 transition-colors ${
                                    active ? "bg-orange-50/70" : "hover:bg-orange-50/40"
                                  }`}
                                >
                                  <div className="min-w-0 flex-1">
                                    <p className={`text-[14.5px] font-medium leading-tight truncate ${
                                      active ? "text-orange-700" : "text-navy-700"
                                    }`}>
                                      {it.title}
                                    </p>
                                    <p className="text-[12.5px] text-bone-500 mt-1 truncate">
                                      {it.summary}
                                    </p>
                                  </div>
                                  <ArrowRightIcon
                                    size={14}
                                    weight="bold"
                                    className={`shrink-0 transition-all ${
                                      active ? "text-orange-600 translate-x-0.5" : "text-bone-400"
                                    }`}
                                  />
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer — keyboard hints */}
            <div className="hidden md:flex items-center justify-between px-6 py-3 border-t border-bone-200 bg-bone-50/50 text-[11px] text-bone-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <Kbd><ArrowUpIcon size={9} weight="bold" /></Kbd>
                  <Kbd><ArrowDownIcon size={9} weight="bold" /></Kbd>
                  navigate
                </span>
                <span className="flex items-center gap-1.5">
                  <Kbd>↵</Kbd>
                  open
                </span>
                <span className="flex items-center gap-1.5">
                  <Kbd>esc</Kbd>
                  close
                </span>
              </div>
              <span className="flex items-center gap-1.5 text-bone-600">
                Search by Bard Santner
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function EmptyState({ onPick }) {
  return (
    <div className="px-6 py-7">
      <p className="eyebrow mb-4">Frequently asked</p>
      <ul className="space-y-1">
        {SUGGESTIONS.map((s) => (
          <li key={s.path}>
            <button
              onClick={() => onPick(s.path)}
              className="group w-full text-left flex items-center justify-between gap-4 px-3 py-3 rounded-md hover:bg-orange-50/60 transition-colors"
            >
              <span className="flex items-center gap-3 min-w-0">
                <ArrowUpRightIcon size={13} weight="bold" className="text-orange-500 shrink-0" />
                <span className="text-[14.5px] text-navy-700 group-hover:text-orange-700 transition-colors truncate">
                  {s.label}
                </span>
              </span>
              <span className="text-[11px] text-bone-400 group-hover:text-orange-500 transition-colors font-mono">
                {s.path}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-7 pt-5 border-t border-bone-200">
        <p className="text-[12.5px] text-bone-500 leading-relaxed flex items-start gap-3">
          <CornersOutIcon size={14} weight="regular" className="text-bone-400 mt-0.5 shrink-0" />
          <span>
            Search across <strong className="text-navy-700">13 products</strong>,{" "}
            <strong className="text-navy-700">8 insights</strong>,{" "}
            <strong className="text-navy-700">5 institutions in the Group</strong> and every
            page on bardsantner.com. Try a product name, "diaspora", or "treasury".
          </span>
        </p>
      </div>
    </div>
  );
}

function NoResults({ query }) {
  return (
    <div className="px-6 py-12 text-center">
      <p className="font-display text-[20px] text-navy-700 mb-2">
        No results for "{query}"
      </p>
      <p className="text-[13.5px] text-bone-600 leading-relaxed max-w-md mx-auto">
        Try a product name like "diaspora account", or a service like "treasury",
        or simply browse the Group.
      </p>
    </div>
  );
}

function Kbd({ children }) {
  return (
    <kbd className="inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-sm border border-bone-300 bg-white text-bone-600 font-mono text-[10px] leading-none">
      {children}
    </kbd>
  );
}

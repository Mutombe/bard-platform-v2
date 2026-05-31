import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MagnifyingGlassIcon,
  LockIcon,
  ListIcon,
  XIcon,
  ArrowRightIcon,
  CaretDownIcon,
} from "@phosphor-icons/react";
import { AUDIENCES } from "../data/audiences.js";
import SearchModal from "./SearchModal.jsx";
import { HERO, MARQUEE } from "../data/images.js";

/**
 * MegaNav — v2 navigation.
 *
 * Three tiers stacked:
 *   1. Audience strip (dark navy band, 5 tabs + right-side meta)
 *   2. Brand row (white, brand mark + 6 primary items + search + login)
 *   3. Mega-dropdown panels — each primary item opens a wide panel:
 *      • Featured offering (image + headline + CTA)
 *      • Categorised sub-link columns
 *      • Insight call-out at the bottom
 *
 * Hover-and-click both open the dropdown on desktop; click only on
 * mobile (drawer). Esc closes; click-outside closes.
 */

// V2 — six chapters of the editorial letter.
// URLs unchanged; labels rewritten in the heritage publication voice.
const PRIMARY_NAV = [
  { id: "banking",  label: "The Bank",   to: "/banking" },
  { id: "wealth",   label: "The Counsel",to: "/wealth" },
  { id: "markets",  label: "The Desk",   to: "/markets" },
  { id: "insights", label: "The Almanac",to: "/insights" },
  { id: "group",    label: "The House",  to: "/group" },
  { id: "about",    label: "Provenance", to: "/about" },
];

/* ── Mega-panel content per chapter — heritage publication voice ──
   v1's plain "Open an Account / Speak to a banker" is replaced
   throughout with editorial naming: "Open a Current", "Open a private
   conversation", "Through the Wire", "The Almanac", etc. Featured
   panel titles, column headings and sub-link labels all moved.
   URLs unchanged. */
const PANELS = {
  banking: {
    eyebrow: "§ Chapter IV · The Bank",
    title: "The Bank",
    description:
      "Every instrument on a single shelf — for households, for commerce, for the considered, for institutions. Anchored in Harare.",
    featured: {
      eyebrow: "Open a Current",
      title: "The Current",
      body: "Salary in, bills out, card in pocket. No annual fee for the first twelve months. The everyday instrument.",
      cta: { label: "Open a Current", to: "/products/everyday-account" },
      image: HERO.banking,
    },
    columns: [
      {
        heading: "For Households",
        items: [
          { label: "The Current",       to: "/products/everyday-account" },
          { label: "The Savings Book",  to: "/products/savings-account" },
          { label: "The Mortgage",      to: "/products/home-loan" },
        ],
      },
      {
        heading: "For Commerce",
        items: [
          { label: "The Operating Account", to: "/products/business-account" },
          { label: "Working Capital",       to: "/products/working-capital" },
          { label: "Cross-border Trade",    to: "/products/trade-finance" },
        ],
      },
      {
        heading: "Through the Wire",
        items: [
          { label: "Through the Wire",       to: "/online-banking" },
          { label: "Enter the Lobby (Log in)", to: "/login" },
          { label: "Glimpse the App",        to: "/app" },
        ],
      },
    ],
    insight: {
      eyebrow: "From the Almanac",
      title: "The quiet case for a deposit base",
      to: "/insights/the-quiet-case-for-a-deposit-base",
    },
  },
  wealth: {
    eyebrow: "§ Chapter V · The Counsel",
    title: "The Counsel",
    description:
      "Discretionary mandates, advisory portfolios and the long counsel of an international house — anchored in Africa. Patient capital, patient counsel.",
    featured: {
      eyebrow: "Discretionary",
      title: "Discretionary Mandate",
      body: "The long horizon, written down. Patient capital and patient counsel for households of established consequence.",
      cta: { label: "Open a Mandate", to: "/wealth" },
      image: MARQUEE.wealth,
    },
    columns: [
      {
        heading: "Mandates",
        items: [
          { label: "Discretionary",     to: "/products/wealth-management" },
          { label: "Advisory",          to: "/products/wealth-management" },
          { label: "Structured Credit", to: "/products/structured-credit" },
        ],
      },
      {
        heading: "Pathways",
        items: [
          { label: "By Appointment",   to: "/private-banking" },
          { label: "Family Office",    to: "/private-banking" },
          { label: "Succession",       to: "/private-banking" },
        ],
      },
      {
        heading: "Open a Conversation",
        items: [
          { label: "Open a private conversation", to: "/contact?audience=private" },
          { label: "The Names",                    to: "/leadership" },
          { label: "The Places",                   to: "/locations" },
        ],
      },
    ],
    insight: {
      eyebrow: "From the Almanac",
      title: "Wealth and the second conversation",
      to: "/insights/wealth-and-the-second-conversation",
    },
  },
  markets: {
    eyebrow: "§ Chapter VI · The Desk",
    title: "The Desk",
    description:
      "Treasury, FX, debt-capital-markets origination, trade finance. The desk-grade infrastructure on which a serious treasurer runs an institution.",
    featured: {
      eyebrow: "Origination",
      title: "Originated. Syndicated. Settled.",
      body: "The capital-markets desk from the parent institution. Bonds, structured paper, syndicated facilities.",
      cta: { label: "Approach the Desk", to: "/markets" },
      image: HERO.markets,
    },
    columns: [
      {
        heading: "Markets",
        items: [
          { label: "Treasury & FX",     to: "/products/treasury-services" },
          { label: "Foreign Exchange",  to: "/products/foreign-exchange" },
          { label: "Origination (DCM)", to: "/products/debt-capital-markets" },
        ],
      },
      {
        heading: "The Corridor",
        items: [
          { label: "Trade Finance",        to: "/products/trade-finance" },
          { label: "For the Diaspora",     to: "/international" },
          { label: "For Institutions",     to: "/institutional" },
        ],
      },
      {
        heading: "Open a Conversation",
        items: [
          { label: "Approach the desk", to: "/contact?audience=institutional" },
          { label: "The Names",         to: "/leadership" },
        ],
      },
    ],
    insight: {
      eyebrow: "From the Almanac",
      title: "Treasury and the discipline of the end-of-day",
      to: "/insights/treasury-and-the-discipline-of-the-end-of-day",
    },
  },
  insights: {
    eyebrow: "§ Chapter VII · The Almanac",
    title: "The Almanac",
    description:
      "Editorial commentary by the people who run the desks. Bardiq Journal carries the long form. Quarterly print, weekly online.",
    featured: {
      eyebrow: "From the Almanac",
      title: "The diaspora is not a niche.",
      body: "Remittance flows now exceed FDI in nine of Africa's largest economies. The diaspora is the primary capital allocator.",
      cta: { label: "Read the entry", to: "/insights/the-diaspora-is-not-a-niche" },
      image: HERO.insights,
    },
    columns: [
      {
        heading: "By Subject",
        items: [
          { label: "On the Corridor", to: "/insights/africa-and-the-cross-border-rail" },
          { label: "On Deposits",     to: "/insights/the-quiet-case-for-a-deposit-base" },
          { label: "On the Diaspora", to: "/insights/the-diaspora-is-not-a-niche" },
        ],
      },
      {
        heading: "By Desk",
        items: [
          { label: "On Credit",   to: "/insights/credit-when-the-rate-is-the-conversation" },
          { label: "On Treasury", to: "/insights/treasury-and-the-discipline-of-the-end-of-day" },
          { label: "On Wealth",   to: "/insights/wealth-and-the-second-conversation" },
        ],
      },
      {
        heading: "Editions",
        items: [
          { label: "Bardiq Journal — Vol. II", to: "/group/journal" },
          { label: "All entries",              to: "/insights" },
        ],
      },
    ],
    insight: {
      eyebrow: "Long form",
      title: "Bardiq Journal — Vol. II",
      to: "/group/journal",
    },
  },
  group: {
    eyebrow: "§ Chapter III · The House",
    title: "The House",
    description:
      "Five institutions, one discipline. The bank at the centre; markets, lending, sport and editorial around it.",
    featured: {
      eyebrow: "The Bank",
      title: "Bard Santner Microfinance Bank",
      body: "The flagship deposit-taking institution of the House. Open the door at BSMFB.",
      cta: { label: "Enter the Bank", to: "/group/bsmfb" },
      image: MARQUEE.wealth,
    },
    columns: [
      {
        heading: "The Five",
        items: [
          { label: "BSMFB — the bank",          to: "/group/bsmfb" },
          { label: "Markets Inc — the parent",  to: "/group/markets" },
          { label: "Bard Loans — credit",       to: "/group/loans" },
        ],
      },
      {
        heading: "The Adjacencies",
        items: [
          { label: "Bard Santner Golf",   to: "/group/golf" },
          { label: "Bardiq Journal",      to: "/group/journal" },
        ],
      },
      {
        heading: "Foundation",
        items: [
          { label: "Provenance",      to: "/about" },
          { label: "The Names",       to: "/leadership" },
          { label: "The Places",      to: "/locations" },
        ],
      },
    ],
    insight: {
      eyebrow: "From the Almanac",
      title: "Becoming a bank",
      to: "/insights/becoming-a-bank",
    },
  },
  about: {
    eyebrow: "§ Chapter I · Provenance",
    title: "Provenance",
    description:
      "A modern African financial platform. Banking, markets, advisory. Anchored in Harare; built to international standards.",
    featured: {
      eyebrow: "The Manifesto",
      title: "What we measure ourselves against",
      body: "A bank is two things at once — a regulated, capital-bearing institution AND a relationship held by a name between two people.",
      cta: { label: "Read the manifesto", to: "/about" },
      image: HERO.about,
    },
    columns: [
      {
        heading: "The Mark",
        items: [
          { label: "Provenance",     to: "/about" },
          { label: "The House",      to: "/group" },
          { label: "The Names",      to: "/leadership" },
          { label: "The Places",     to: "/locations" },
        ],
      },
      {
        heading: "Reach",
        items: [
          { label: "The Door (contact)",  to: "/contact" },
          { label: "Through the Wire",    to: "/online-banking" },
        ],
      },
      {
        heading: "The Warrant",
        items: [
          { label: "Security",      to: "/security" },
          { label: "Regulatory",    to: "/regulatory" },
          { label: "Privacy",       to: "/privacy" },
          { label: "Accessibility", to: "/accessibility" },
        ],
      },
    ],
    insight: {
      eyebrow: "From the Almanac",
      title: "The bank as a publishing institution",
      to: "/insights/the-bank-as-a-publishing-institution",
    },
  },
};

// V2 — drawer secondary section, editorial labels
const DRAWER_SECONDARY = [
  { label: "Through the Wire (Online Banking)", to: "/online-banking" },
  { label: "The Places (Locations)",            to: "/locations" },
  { label: "The Door (Contact)",                to: "/contact" },
  { label: "The Names (Leadership)",            to: "/leadership" },
];

export default function MegaNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openPanel, setOpenPanel] = useState(null); // id of open mega panel
  const closeTimer = useRef(null);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [loc.pathname]);
  useEffect(() => setOpenPanel(null), [loc.pathname]);

  useEffect(() => {
    if (mobileOpen) document.body.classList.add("scroll-lock");
    else document.body.classList.remove("scroll-lock");
    return () => document.body.classList.remove("scroll-lock");
  }, [mobileOpen]);

  // Global keyboard shortcuts
  useEffect(() => {
    const onKey = (e) => {
      const inField =
        e.target.tagName === "INPUT" ||
        e.target.tagName === "TEXTAREA" ||
        e.target.isContentEditable;
      if (!inField && (e.key === "/" || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k"))) {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape") setOpenPanel(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const matchedAudienceId = AUDIENCES.find((a) =>
    loc.pathname.startsWith(a.path)
  )?.id;
  const activeAudienceId = matchedAudienceId || "personal";

  // Hover handlers — open instantly, close after a brief grace so the
  // cursor can travel from the nav item into the panel.
  function openPanelById(id) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenPanel(id);
  }
  function schedulePanelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenPanel(null), 160);
  }

  return (
    <>
      {/* ─── Tier 1 — Audience strip (dark) ──────────────────────── */}
      <div className="bg-navy-700 text-white relative z-50">
        <div className="container-bank">
          <div className="relative">
            <div className="flex items-stretch h-10 md:h-11 overflow-x-auto no-scrollbar">
              {AUDIENCES.map((a) => {
                const isActive = activeAudienceId === a.id;
                return (
                  <NavLink
                    key={a.id}
                    to={a.path}
                    className={() =>
                      `flex items-center px-3.5 md:px-7 text-[12px] md:text-[13px] tracking-[0.04em] md:tracking-[0.06em] font-medium transition-colors whitespace-nowrap ${
                        isActive ? "tab-active" : "text-white/80 hover:text-white hover:bg-white/5"
                      }`
                    }
                  >
                    {a.label}
                  </NavLink>
                );
              })}
              {/* Right meta — sovereign mini-row, editorial voice */}
              <div className="ml-auto hidden md:flex items-center gap-6 text-[11.5px] tracking-[0.04em] text-white/65 pr-1">
                <span className="font-mono-data text-[10.5px] tracking-[0.18em] uppercase text-orange-400/80">
                  Anno · MMXXV · Harare
                </span>
                <span className="text-white/20">|</span>
                <Link to="/locations" className="hover:text-white">The Places</Link>
                <Link to="/contact" className="hover:text-white">The Door</Link>
                <Link to="/group" className="hover:text-white">The House</Link>
              </div>
            </div>
            <div className="md:hidden pointer-events-none absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-navy-700 to-transparent" />
          </div>
        </div>
      </div>

      {/* ─── Tier 2 — Brand row (sticky, white) ──────────────────── */}
      <header
        className={`sticky top-0 z-40 bg-white transition-shadow ${
          scrolled
            ? "shadow-[0_1px_0_0_var(--color-bone-200),0_8px_24px_rgba(12,10,20,0.05)]"
            : "border-b border-bone-200"
        }`}
        onMouseLeave={schedulePanelClose}
      >
        <div className="container-bank">
          <div className="flex items-center justify-between h-16 md:h-[72px]">
            {/* Brand */}
            <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Bard Santner home">
              <img src="/favicon.png" alt="" className="h-9 w-9 md:h-10 md:w-10 object-contain" loading="eager" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-[14px] md:text-[16px] tracking-[0.04em] text-navy-600 font-medium uppercase">
                  Bard Santner
                </span>
                <span className="hidden sm:inline-block text-[9.5px] tracking-[0.18em] text-bone-500 uppercase mt-0.5">
                  Markets Inc · Harare
                </span>
              </span>
            </Link>

            {/* Primary nav with mega dropdowns */}
            <nav className="hidden lg:flex items-center gap-1">
              {PRIMARY_NAV.map((l) => {
                const isOpen = openPanel === l.id;
                const isActive = loc.pathname === l.to;
                return (
                  <div
                    key={l.id}
                    className="relative"
                    onMouseEnter={() => openPanelById(l.id)}
                  >
                    <NavLink
                      to={l.to}
                      className={`group inline-flex items-center gap-1.5 px-3.5 py-2 text-[14.5px] font-medium transition-colors ${
                        isActive ? "text-orange-600" : "text-navy-700 hover:text-orange-600"
                      }`}
                      onClick={() => setOpenPanel(null)}
                    >
                      {l.label}
                      <CaretDownIcon
                        size={10}
                        weight="bold"
                        className={`opacity-50 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </NavLink>
                  </div>
                );
              })}
            </nav>

            {/* Trailing actions */}
            <div className="flex items-center gap-2 md:gap-3">
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Search Bard Santner"
                className="group hidden md:inline-flex items-center gap-2.5 h-10 pl-3 pr-2.5 rounded-full hover:bg-smoke text-navy-600 transition-colors border border-transparent hover:border-bone-300"
              >
                <MagnifyingGlassIcon size={17} weight="regular" />
                <span className="hidden lg:inline text-[12.5px] font-medium text-bone-500 group-hover:text-navy-600 transition-colors">Search</span>
                <kbd className="hidden lg:inline-flex items-center justify-center min-w-[20px] h-[20px] px-1 rounded-sm border border-bone-300 bg-paper text-bone-500 font-mono text-[10px] leading-none">
                  /
                </kbd>
              </button>

              {/* Sovereign login pill — dark navy with gold lock circle */}
              <Link
                to="/login"
                aria-label="Enter the Lobby — Bard Santner Online Banking"
                className="group hidden md:inline-flex items-center gap-2.5 h-11 pl-1.5 pr-5 rounded-full bg-navy-700 hover:bg-navy-800 border border-navy-800 transition-all duration-300 shadow-[0_1px_2px_rgba(12,10,20,0.04)] hover:shadow-[0_6px_18px_rgba(12,10,20,0.20)] hover:-translate-y-[1px]"
              >
                <span className="w-8 h-8 rounded-full bg-gold-400 group-hover:bg-orange-500 flex items-center justify-center transition-colors duration-300">
                  <LockIcon size={13} weight="bold" className="text-navy-800" />
                </span>
                <span className="text-[14px] font-medium text-white">Enter the Lobby</span>
              </Link>

              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="lg:hidden w-11 h-11 flex items-center justify-center text-navy-600 -mr-1 rounded-md hover:bg-smoke"
              >
                <ListIcon size={24} weight="bold" />
              </button>
            </div>
          </div>
        </div>

        {/* Mega dropdown panel — single panel overlays at brand-row's bottom */}
        <AnimatePresence>
          {openPanel && PANELS[openPanel] && (
            <motion.div
              key={openPanel}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 right-0 top-full bg-paper border-y border-bone-200 shadow-[0_24px_60px_rgba(12,10,20,0.10)]"
              onMouseEnter={() => openPanelById(openPanel)}
              onMouseLeave={schedulePanelClose}
            >
              <div className="container-bank py-10">
                <Panel data={PANELS[openPanel]} onClick={() => setOpenPanel(null)} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ─── Mobile drawer ───────────────────────────────────────── */}
      {mobileOpen && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-[55] lg:hidden bg-ink/40 backdrop-blur-[2px]"
          />
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-y-0 right-0 z-[60] lg:hidden w-full max-w-[420px] bg-white shadow-[0_24px_80px_rgba(12,10,20,0.18)] flex flex-col"
          >
            <div className="px-6 pt-5 pb-4 border-b border-bone-200 flex items-center justify-between">
              <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3">
                <img src="/favicon.png" alt="" className="h-8 w-8 object-contain" />
                <span className="font-display text-[15px] tracking-[0.04em] text-navy-600 uppercase font-medium">
                  Bard Santner
                </span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="w-11 h-11 flex items-center justify-center -mr-2 rounded-md hover:bg-smoke text-navy-600"
              >
                <XIcon size={22} weight="bold" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-7">
              <button
                onClick={() => { setMobileOpen(false); setSearchOpen(true); }}
                className="w-full mb-7 flex items-center gap-3 px-4 py-3.5 rounded-md border border-bone-200 bg-paper hover:border-orange-500 transition-colors text-left"
              >
                <MagnifyingGlassIcon size={17} weight="regular" className="text-bone-500" />
                <span className="text-[14px] text-bone-500 flex-1">Search Bard Santner</span>
                <ArrowRightIcon size={12} weight="bold" className="text-bone-400" />
              </button>

              <p className="eyebrow mb-4">Choose your station</p>
              <div className="grid grid-cols-2 gap-2.5 mb-8">
                {AUDIENCES.map((a) => (
                  <Link
                    key={a.id}
                    to={a.path}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between gap-2 px-4 py-3.5 rounded-md border transition-colors ${
                      activeAudienceId === a.id
                        ? "border-orange-500 bg-orange-50 text-navy-700"
                        : "border-bone-200 bg-paper text-navy-600 hover:border-orange-300"
                    }`}
                  >
                    <span className="text-[13.5px] font-medium leading-tight">{a.label}</span>
                    <ArrowRightIcon size={12} weight="bold" className="opacity-60 shrink-0" />
                  </Link>
                ))}
              </div>

              <p className="eyebrow mb-4">The Chapters</p>
              <nav className="flex flex-col mb-8 border-y border-bone-200">
                {PRIMARY_NAV.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between py-4 text-[17px] font-medium text-navy-600 border-b border-bone-100 last:border-b-0 hover:text-orange-600 transition-colors"
                  >
                    <span>{l.label}</span>
                    <ArrowRightIcon size={13} weight="bold" className="opacity-50" />
                  </Link>
                ))}
              </nav>

              <p className="eyebrow mb-4">Reach the Institution</p>
              <nav className="flex flex-col gap-3 mb-9">
                {DRAWER_SECONDARY.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setMobileOpen(false)}
                    className="text-[14.5px] text-bone-600 hover:text-navy-600 transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="px-6 py-5 border-t border-bone-200 bg-bone-50/60 space-y-3">
              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="btn btn-navy w-full justify-center"
              >
                <LockIcon size={14} weight="bold" /> Enter the Lobby
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn btn-ghost-light w-full justify-center"
              >
                Open a conversation
                <ArrowRightIcon size={14} weight="bold" />
              </Link>
            </div>
          </div>
        </>
      )}

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

/* ── Mega panel content ──────────────────────────────────────────── */
function Panel({ data, onClick }) {
  return (
    <div className="grid grid-cols-12 gap-10">
      {/* Featured offering — left third */}
      <Link
        to={data.featured.cta.to}
        onClick={onClick}
        className="col-span-12 lg:col-span-4 group block relative overflow-hidden rounded-lg bg-ink text-white"
      >
        <div
          className="aspect-[4/3] bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
          style={{
            backgroundImage: `url(${data.featured.image})`,
            filter: "saturate(0.78) brightness(0.88)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="font-mono-data text-[9.5px] tracking-[0.22em] uppercase text-orange-400 mb-1.5">
            {data.featured.eyebrow}
          </p>
          <p className="font-display text-[18px] font-medium text-white leading-tight mb-1.5">
            {data.featured.title}
          </p>
          <p className="text-[12.5px] text-white/70 leading-snug mb-3 line-clamp-2">
            {data.featured.body}
          </p>
          <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-orange-300 group-hover:text-orange-200 transition-colors">
            {data.featured.cta.label}
            <ArrowRightIcon size={11} weight="bold" />
          </span>
        </div>
      </Link>

      {/* Categorised columns + insight callout */}
      <div className="col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {data.columns.map((col) => (
          <div key={col.heading}>
            <p className="eyebrow eyebrow-accent mb-4">{col.heading}</p>
            <ul className="space-y-2.5">
              {col.items.map((it) => (
                <li key={it.to + it.label}>
                  <Link
                    to={it.to}
                    onClick={onClick}
                    className="text-[13.5px] text-navy-600 hover:text-orange-600 transition-colors"
                  >
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Insight callout — full-width bottom row */}
      <Link
        to={data.insight.to}
        onClick={onClick}
        className="col-span-12 group flex items-center justify-between gap-6 pt-6 border-t border-bone-200 hover:text-orange-600 transition-colors"
      >
        <div className="flex items-center gap-4 min-w-0">
          <span className="font-mono-data text-[10px] tracking-[0.22em] uppercase text-orange-600 shrink-0">
            {data.insight.eyebrow}
          </span>
          <span className="font-display text-[15px] font-medium text-navy-700 group-hover:text-orange-600 transition-colors truncate">
            {data.insight.title}
          </span>
        </div>
        <ArrowRightIcon size={14} weight="bold" className="shrink-0 group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  );
}

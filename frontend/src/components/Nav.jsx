import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  MagnifyingGlassIcon,
  LockIcon,
  ListIcon,
  XIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react";
import { AUDIENCES } from "../data/audiences.js";
import SearchModal from "./SearchModal.jsx";

/**
 * Institutional Nav. Modelled on Lloyds + AfrAsia.
 *
 *   ╔══════════════════════════════════════════════════════════════════╗
 *   ║ Personal · Business · Private · International · Institutional   ║   ← audience strip
 *   ╠══════════════════════════════════════════════════════════════════╣
 *   ║ [Mark]  BARD SANTNER   Banking  Wealth  Markets  …   [Search] [Log in] ║
 *   ╚══════════════════════════════════════════════════════════════════╝
 *
 * Mobile behaviour:
 *  • Audience strip remains scrollable but tightens its tracking and
 *    padding so the five labels survive a 375px viewport without losing
 *    institutional weight.
 *  • Brand row keeps a 44×44 hamburger touch target. Login becomes
 *    icon-only on mobile — the verb moves into the drawer where it has
 *    room to be a primary CTA.
 *  • Mobile drawer is a full-screen panel with backdrop, scroll-lock,
 *    and a compact link scale (no more enormous display-md links).
 */

const PRIMARY_NAV = [
  { label: "Banking", to: "/banking" },
  { label: "Wealth", to: "/wealth" },
  { label: "Markets", to: "/markets" },
  { label: "Insights", to: "/insights" },
  { label: "Group", to: "/group" },
  { label: "About", to: "/about" },
];

const DRAWER_SECONDARY = [
  { label: "Online Banking", to: "/online-banking" },
  { label: "Locations", to: "/locations" },
  { label: "Contact us", to: "/contact" },
  { label: "Leadership", to: "/leadership" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile drawer on every route change.
  useEffect(() => setMobileOpen(false), [loc.pathname]);

  // Scroll-lock the page body while the drawer is open so the drawer
  // owns the entire viewport's focus.
  useEffect(() => {
    if (mobileOpen) document.body.classList.add("scroll-lock");
    else document.body.classList.remove("scroll-lock");
    return () => document.body.classList.remove("scroll-lock");
  }, [mobileOpen]);

  // Global keyboard shortcuts — / and Cmd/Ctrl-K open the search.
  // Skipped when the user is typing inside a form field.
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
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const matchedAudienceId = AUDIENCES.find((a) =>
    loc.pathname.startsWith(a.path)
  )?.id;
  const activeAudienceId = matchedAudienceId || "personal";

  return (
    <>
      {/* ─── Audience strip (top tier, dark) ──────────────────────── */}
      <div className="bg-navy-700 text-white relative z-50">
        <div className="container-bank">
          {/* On mobile the five audience labels don't all fit a 375px
              viewport (the long ones — "Private Banking", "International",
              "Institutional" — push the strip to ~550px). The strip
              scrolls horizontally and we layer a right-edge fade so the
              scrollability reads at a glance without a visible scrollbar. */}
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
                        isActive
                          ? "tab-active"
                          : "text-white/80 hover:text-white hover:bg-white/5"
                      }`
                    }
                  >
                    {a.label}
                  </NavLink>
                );
              })}
              <div className="ml-auto hidden md:flex items-center gap-7 text-[13px] text-white/70 pr-1">
                <Link to="/locations" className="hover:text-white">Locations</Link>
                <Link to="/contact" className="hover:text-white">Contact us</Link>
                <Link to="/group" className="hover:text-white">Bard Santner Group</Link>
              </div>
            </div>
            {/* Mobile-only right-edge fade — institutional scroll
                affordance. Hidden on md+ where the strip fits cleanly. */}
            <div className="md:hidden pointer-events-none absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-navy-700 to-transparent" />
          </div>
        </div>
      </div>

      {/* ─── Brand row (white, sticky) ───────────────────────────── */}
      <header
        className={`sticky top-0 z-40 bg-white transition-shadow ${
          scrolled
            ? "shadow-[0_1px_0_0_var(--color-bone-200),0_8px_24px_rgba(12,10,20,0.04)]"
            : "border-b border-bone-200"
        }`}
      >
        <div className="container-bank">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Brand mark */}
            <Link
              to="/"
              className="flex items-center gap-3 shrink-0"
              aria-label="Bard Santner home"
            >
              <img
                src="/favicon.png"
                alt=""
                className="h-9 w-9 md:h-10 md:w-10 object-contain"
                loading="eager"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display text-[14px] md:text-[17px] tracking-[0.04em] text-navy-600 font-medium uppercase">
                  Bard Santner
                </span>
                <span className="hidden sm:inline-block text-[9.5px] tracking-[0.18em] text-bone-500 uppercase mt-0.5">
                  Markets Inc
                </span>
              </span>
            </Link>

            {/* Primary nav — desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              {PRIMARY_NAV.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `text-[15px] font-medium transition-colors relative py-2 ${
                      isActive
                        ? "text-orange-600"
                        : "text-navy-600 hover:text-orange-600"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>

            {/* Trailing actions — search/login on desktop, hamburger on mobile */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Search trigger — composite pill with icon + a faint
                  keyboard hint ("/"). Click opens the search modal;
                  the same modal also responds to "/" anywhere on the
                  site. Mobile drawer carries its own search row. */}
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Search Bard Santner"
                className="group hidden md:inline-flex items-center gap-2.5 h-10 pl-3 pr-2.5 rounded-full hover:bg-smoke text-navy-600 transition-colors border border-transparent hover:border-bone-300"
              >
                <MagnifyingGlassIcon size={17} weight="regular" />
                <span className="hidden lg:inline text-[12.5px] font-medium text-bone-500 group-hover:text-navy-600 transition-colors">
                  Search
                </span>
                <kbd className="hidden lg:inline-flex items-center justify-center min-w-[20px] h-[20px] px-1 rounded-sm border border-bone-300 bg-paper text-bone-500 font-mono text-[10px] leading-none">
                  /
                </kbd>
              </button>
              {/* Desktop login — the Nav's showcase moment.
                  Composite pill: lock icon in a navy circle (warms to
                  orange on hover — "the door is opening"), then the
                  "Log in" verb in navy medium. Subtle shadow lift on
                  hover; border darkens to navy.
                  Routes to /online-banking — the landing page is the
                  log-in surface; from there the secure portal opens. */}
              <Link
                to="/login"
                aria-label="Log in to Online Banking"
                className="group hidden md:inline-flex items-center gap-3 h-11 pl-1.5 pr-5 rounded-full bg-white border border-bone-300 hover:border-navy-600 transition-all duration-300 shadow-[0_1px_2px_rgba(12,10,20,0.04)] hover:shadow-[0_6px_18px_rgba(12,10,20,0.12)] hover:-translate-y-[1px]"
              >
                <span className="w-8 h-8 rounded-full bg-navy-700 group-hover:bg-orange-500 flex items-center justify-center transition-colors duration-300 shadow-[inset_0_-1px_0_rgba(0,0,0,0.12)]">
                  <LockIcon size={13} weight="bold" className="text-white" />
                </span>
                <span className="text-[14px] font-medium text-navy-700 group-hover:text-navy-900 transition-colors">
                  Log in
                </span>
              </Link>
              {/* Mobile hamburger — 44px square touch target */}
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
      </header>

      {/* ─── Mobile drawer ───────────────────────────────────────── */}
      {mobileOpen && (
        <>
          {/* Backdrop — tap-to-close. Lives below the panel z. */}
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-[55] lg:hidden bg-ink/40 backdrop-blur-[2px]"
          />
          {/* Panel — full-screen on small phones, side-drawer feel via max-w
              on larger mobile. Scrollable internally. */}
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-y-0 right-0 z-[60] lg:hidden w-full max-w-[420px] bg-white shadow-[0_24px_80px_rgba(12,10,20,0.18)] flex flex-col"
          >
            {/* Drawer head */}
            <div className="px-6 pt-5 pb-4 border-b border-bone-200 flex items-center justify-between">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3"
              >
                <img
                  src="/favicon.png"
                  alt=""
                  className="h-8 w-8 object-contain"
                />
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

            {/* Drawer body — scrolls internally */}
            <div className="flex-1 overflow-y-auto px-6 py-7">
              {/* Mobile search trigger inside the drawer */}
              <button
                onClick={() => { setMobileOpen(false); setSearchOpen(true); }}
                className="w-full mb-7 flex items-center gap-3 px-4 py-3.5 rounded-md border border-bone-200 bg-paper hover:border-orange-500 transition-colors text-left"
              >
                <MagnifyingGlassIcon size={17} weight="regular" className="text-bone-500" />
                <span className="text-[14px] text-bone-500 flex-1">Search Bard Santner</span>
                <ArrowRightIcon size={12} weight="bold" className="text-bone-400" />
              </button>

              {/* Audience grid */}
              <p className="eyebrow mb-4">Choose your context</p>
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
                    <span className="text-[13.5px] font-medium leading-tight">
                      {a.label}
                    </span>
                    <ArrowRightIcon size={12} weight="bold" className="opacity-60 shrink-0" />
                  </Link>
                ))}
              </div>

              {/* Primary nav — compact size, not display-md huge */}
              <p className="eyebrow mb-4">The bank</p>
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

              {/* Secondary links */}
              <p className="eyebrow mb-4">Reach us</p>
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

            {/* Drawer foot — login + speak to a banker */}
            <div className="px-6 py-5 border-t border-bone-200 bg-bone-50/60 space-y-3">
              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="btn btn-navy w-full justify-center"
              >
                <LockIcon size={14} weight="bold" /> Log in to Online Banking
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn btn-ghost-light w-full justify-center"
              >
                Speak to a banker
                <ArrowRightIcon size={14} weight="bold" />
              </Link>
            </div>
          </div>
        </>
      )}

      {/* Search modal — global; mounted once at the Nav level so the
          shortcut and the click trigger share state. */}
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

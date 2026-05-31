import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MagnifyingGlassIcon,
  CaretDownIcon,
  ListIcon,
  XIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react";
import { HERO, MARQUEE } from "../../data/images.js";

/**
 * NavSerious — JPM Private Bank / Morgan Stanley / BlackRock voice.
 *
 *   ╔══════════════════════════════════════════════════════════════╗
 *   ║ navy bar · For You · Private Wealth · Institutions · Diaspora║   ← audience strip
 *   ╠══════════════════════════════════════════════════════════════╣
 *   ║ Bard Santner   Banking · Wealth · Markets · Insights · ··· [⌕] [Sign In] ║
 *   ║                                                              ║
 *   ║   on hover, a wide white dropdown panel slides down with     ║
 *   ║   three categorised link columns + a small featured image.   ║
 *   ║   Hairline borders. No card bento. Restrained.               ║
 *   ╚══════════════════════════════════════════════════════════════╝
 *
 * Visual rules:
 *   • dark navy top strip (audience switcher) — JPM canon
 *   • white sticky brand row with hairline border underneath
 *   • dropdown is a single white panel with hairline rules between
 *     columns, NO rounded corners, NO shadows except subtle
 *   • dropdown content structure preserved from the previous version
 */

const CHAPTERS = [
  { id: "banking",  label: "Banking",  to: "/banking" },
  { id: "wealth",   label: "Wealth",   to: "/wealth" },
  { id: "markets",  label: "Markets",  to: "/markets" },
  { id: "insights", label: "Insights", to: "/insights" },
  { id: "group",    label: "Our Firm", to: "/group" },
  { id: "about",    label: "About",    to: "/about" },
];

const AUDIENCE_STRIP = [
  { id: "personal",     label: "For You",         to: "/personal" },
  { id: "business",     label: "For Business",    to: "/business" },
  { id: "private",      label: "Private Wealth",  to: "/private-banking" },
  { id: "international",label: "Diaspora & International", to: "/international" },
  { id: "institutional",label: "Institutions",    to: "/institutional" },
];

const PANELS = {
  banking: {
    title: "Banking",
    dek: "Day-to-day banking for households, founders and growing businesses — built on the standards of an international house.",
    image: HERO.banking,
    columns: [
      {
        heading: "For Households",
        items: [
          { label: "Everyday Account",   to: "/products/everyday-account" },
          { label: "Savings Plus",       to: "/products/savings-account" },
          { label: "Home Loans",         to: "/products/home-loan" },
        ],
      },
      {
        heading: "For Businesses",
        items: [
          { label: "Business Account",   to: "/products/business-account" },
          { label: "Working Capital",    to: "/products/working-capital" },
          { label: "Trade Finance",      to: "/products/trade-finance" },
        ],
      },
      {
        heading: "Digital Banking",
        items: [
          { label: "Online Banking",     to: "/online-banking" },
          { label: "Sign in",            to: "/login" },
          { label: "Mobile preview",     to: "/app" },
        ],
      },
    ],
    cta: { label: "Open an account", to: "/personal" },
  },
  wealth: {
    title: "Wealth Management",
    dek: "Discretionary mandates, advisory portfolios and the long counsel of an international house — anchored in Africa.",
    image: MARQUEE.wealth,
    columns: [
      {
        heading: "Investment Solutions",
        items: [
          { label: "Discretionary Portfolios",  to: "/products/wealth-management" },
          { label: "Advisory Mandates",         to: "/products/wealth-management" },
          { label: "Structured Credit",         to: "/products/structured-credit" },
        ],
      },
      {
        heading: "Private Banking",
        items: [
          { label: "Private Banking Services",  to: "/private-banking" },
          { label: "Family Office Services",    to: "/private-banking" },
          { label: "Succession Planning",       to: "/private-banking" },
        ],
      },
      {
        heading: "Speak With Us",
        items: [
          { label: "Schedule a consultation",   to: "/contact?audience=private" },
          { label: "Our wealth team",           to: "/leadership" },
          { label: "Office locations",          to: "/locations" },
        ],
      },
    ],
    cta: { label: "Speak with a private banker", to: "/contact?audience=private" },
  },
  markets: {
    title: "Markets & Treasury",
    dek: "Capital markets origination, treasury, foreign exchange and trade finance — the desk-grade infrastructure institutional treasurers expect.",
    image: HERO.markets,
    columns: [
      {
        heading: "Capital Markets",
        items: [
          { label: "Debt Capital Markets",      to: "/products/debt-capital-markets" },
          { label: "Treasury Services",         to: "/products/treasury-services" },
          { label: "Foreign Exchange",          to: "/products/foreign-exchange" },
        ],
      },
      {
        heading: "Trade & Cross-Border",
        items: [
          { label: "Trade Finance",             to: "/products/trade-finance" },
          { label: "Diaspora Banking",          to: "/international" },
          { label: "Institutional Banking",     to: "/institutional" },
        ],
      },
      {
        heading: "Connect",
        items: [
          { label: "Contact the desk",          to: "/contact?audience=institutional" },
          { label: "Our markets team",          to: "/leadership" },
        ],
      },
    ],
    cta: { label: "Contact the desk", to: "/contact?audience=institutional" },
  },
  insights: {
    title: "Research & Insights",
    dek: "Commentary from the people who run the desks. Bardiq Journal carries the long form.",
    image: HERO.insights,
    columns: [
      {
        heading: "By Topic",
        items: [
          { label: "Trade & Corridors",         to: "/insights/africa-and-the-cross-border-rail" },
          { label: "Deposits & Banking",        to: "/insights/the-quiet-case-for-a-deposit-base" },
          { label: "Diaspora Capital",          to: "/insights/the-diaspora-is-not-a-niche" },
        ],
      },
      {
        heading: "By Desk",
        items: [
          { label: "Credit Markets",            to: "/insights/credit-when-the-rate-is-the-conversation" },
          { label: "Treasury & FX",             to: "/insights/treasury-and-the-discipline-of-the-end-of-day" },
          { label: "Wealth Management",         to: "/insights/wealth-and-the-second-conversation" },
        ],
      },
      {
        heading: "Publications",
        items: [
          { label: "Bardiq Journal",            to: "/group/journal" },
          { label: "All research",              to: "/insights" },
        ],
      },
    ],
    cta: { label: "View all research", to: "/insights" },
  },
  group: {
    title: "Our Firm",
    dek: "Five institutions, one discipline. The Bard Santner Group spans banking, capital markets, credit, sport and editorial.",
    image: MARQUEE.wealth,
    columns: [
      {
        heading: "Institutions",
        items: [
          { label: "Bard Santner Microfinance Bank", to: "/group/bsmfb" },
          { label: "Bard Santner Markets Inc",       to: "/group/markets" },
          { label: "Bard Loans",                     to: "/group/loans" },
        ],
      },
      {
        heading: "Adjacencies",
        items: [
          { label: "Bard Santner Golf",         to: "/group/golf" },
          { label: "Bardiq Journal",            to: "/group/journal" },
        ],
      },
      {
        heading: "About the Firm",
        items: [
          { label: "Our story",                 to: "/about" },
          { label: "Leadership",                to: "/leadership" },
          { label: "Locations",                 to: "/locations" },
        ],
      },
    ],
    cta: { label: "Learn about our firm", to: "/about" },
  },
  about: {
    title: "About Bard Santner",
    dek: "A modern African financial platform anchored in Harare; built to international standards.",
    image: HERO.about,
    columns: [
      {
        heading: "Our Firm",
        items: [
          { label: "Our story",                 to: "/about" },
          { label: "Our Firm — the Group",      to: "/group" },
          { label: "Leadership",                to: "/leadership" },
          { label: "Office locations",          to: "/locations" },
        ],
      },
      {
        heading: "Connect",
        items: [
          { label: "Contact us",                to: "/contact" },
          { label: "Online banking",            to: "/online-banking" },
        ],
      },
      {
        heading: "Regulatory",
        items: [
          { label: "Security",                  to: "/security" },
          { label: "Regulatory information",    to: "/regulatory" },
          { label: "Privacy",                   to: "/privacy" },
          { label: "Accessibility",             to: "/accessibility" },
        ],
      },
    ],
    cta: { label: "Read our story", to: "/about" },
  },
};

export default function NavSerious() {
  const [open, setOpen] = useState(null);
  const [mobile, setMobile] = useState(false);
  const closeTimer = useRef(null);
  const loc = useLocation();

  useEffect(() => { setOpen(null); setMobile(false); }, [loc.pathname]);

  useEffect(() => {
    if (mobile) document.body.classList.add("scroll-lock");
    else document.body.classList.remove("scroll-lock");
    return () => document.body.classList.remove("scroll-lock");
  }, [mobile]);

  function openById(id) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(id);
  }
  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), 200);
  }

  return (
    <>
      {/* ── Top audience strip — dark navy, JPM canon ────────── */}
      <div className="surface-navy-deep relative z-50">
        <div className="container-wide">
          <div className="flex items-center justify-between h-10 text-[12px]">
            <div className="flex items-center gap-7 overflow-x-auto no-scrollbar">
              {AUDIENCE_STRIP.map((a) => {
                const active = loc.pathname.startsWith(a.to);
                return (
                  <NavLink
                    key={a.id}
                    to={a.to}
                    className={`whitespace-nowrap font-utility tracking-[0.04em] transition-colors hover:text-white ${
                      active ? "text-white" : "text-white/70"
                    }`}
                    style={{ fontFamily: "var(--font-utility)" }}
                  >
                    {a.label}
                  </NavLink>
                );
              })}
            </div>
            <div className="hidden md:flex items-center gap-6 text-white/60 text-[11.5px]">
              <span className="font-mono text-[10.5px] tracking-[0.16em] uppercase">
                Member · CIPZ 42656A0252025
              </span>
              <Link to="/contact" className="hover:text-white">Contact</Link>
              <Link to="/locations" className="hover:text-white">Locations</Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Brand row — white, sticky, serious ──────────────── */}
      <header
        className="sticky top-0 z-40 surface-white border-b border-line"
        onMouseLeave={scheduleClose}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-[68px] md:h-[78px]">
            {/* Brand */}
            <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Bard Santner home">
              <img src="/favicon.png" alt="" className="h-9 w-9 md:h-10 md:w-10 object-contain" loading="eager" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-[17px] md:text-[19px] tracking-[-0.012em] text-ink font-semibold"
                      style={{ fontVariationSettings: '"opsz" 56' }}>
                  Bard Santner
                </span>
                <span className="t-mono text-[9.5px] mt-1 text-dim">Markets Inc · Harare</span>
              </span>
            </Link>

            {/* Primary nav */}
            <nav className="hidden lg:flex items-center gap-9">
              {CHAPTERS.map((c) => {
                const isOpen = open === c.id;
                const active = loc.pathname === c.to;
                return (
                  <div
                    key={c.id}
                    className="relative"
                    onMouseEnter={() => openById(c.id)}
                  >
                    <Link
                      to={c.to}
                      className={`group inline-flex items-center gap-1.5 py-3 text-[14.5px] font-utility transition-colors ${
                        active || isOpen ? "text-navy-600" : "text-graphite hover:text-navy-600"
                      }`}
                      style={{ fontFamily: "var(--font-utility)", fontWeight: 500, letterSpacing: "0.01em" }}
                      onClick={() => setOpen(null)}
                    >
                      {c.label}
                      <CaretDownIcon
                        size={10}
                        weight="bold"
                        className={`opacity-50 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </Link>
                    {/* Underline indicator on active/open */}
                    <span
                      className={`absolute left-0 right-0 -bottom-px h-[2px] bg-navy-600 transition-transform origin-left ${
                        isOpen || active ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </div>
                );
              })}
            </nav>

            {/* Trailing actions */}
            <div className="flex items-center gap-2 md:gap-3">
              <button
                aria-label="Search"
                className="hidden md:flex w-10 h-10 items-center justify-center text-graphite hover:text-navy-600 transition-colors"
              >
                <MagnifyingGlassIcon size={18} weight="regular" />
              </button>
              <Link
                to="/login"
                className="hidden md:inline-flex btn btn-navy text-[13px]"
                style={{ fontFamily: "var(--font-utility)" }}
              >
                Sign In
                <ArrowRightIcon size={11} weight="bold" />
              </Link>
              <button
                onClick={() => setMobile(true)}
                aria-label="Open menu"
                className="lg:hidden w-11 h-11 flex items-center justify-center text-graphite -mr-1"
              >
                <ListIcon size={22} weight="bold" />
              </button>
            </div>
          </div>
        </div>

        {/* Dropdown panel */}
        <AnimatePresence>
          {open && PANELS[open] && (
            <motion.div
              key={open}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 right-0 top-full surface-white border-b border-line shadow-card"
              onMouseEnter={() => openById(open)}
              onMouseLeave={scheduleClose}
            >
              <SeriousPanel data={PANELS[open]} onPick={() => setOpen(null)} />
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── Mobile drawer ─────────────────────────────────── */}
      <AnimatePresence>
        {mobile && (
          <>
            <motion.button
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              type="button"
              aria-label="Close menu"
              onClick={() => setMobile(false)}
              className="fixed inset-0 z-[55] lg:hidden bg-ink/40 backdrop-blur-[2px]"
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 z-[60] lg:hidden w-full max-w-[420px] surface-white flex flex-col"
            >
              <div className="px-6 pt-5 pb-4 border-b border-line flex items-center justify-between">
                <Link to="/" onClick={() => setMobile(false)} className="flex items-center gap-2.5">
                  <img src="/favicon.png" alt="" className="h-8 w-8 object-contain" />
                  <span className="font-display text-[15px] font-semibold text-ink">Bard Santner</span>
                </Link>
                <button
                  onClick={() => setMobile(false)}
                  aria-label="Close menu"
                  className="w-11 h-11 flex items-center justify-center -mr-2 text-graphite"
                >
                  <XIcon size={20} weight="bold" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-7">
                <p className="t-eyebrow mb-4 text-dim">Clients</p>
                <ul className="space-y-3 mb-9">
                  {AUDIENCE_STRIP.map((a) => (
                    <li key={a.id}>
                      <Link
                        to={a.to}
                        onClick={() => setMobile(false)}
                        className="flex items-center justify-between text-[15.5px] text-graphite hover:text-navy-600"
                        style={{ fontFamily: "var(--font-utility)" }}
                      >
                        <span>{a.label}</span>
                        <ArrowRightIcon size={11} weight="bold" className="opacity-50" />
                      </Link>
                    </li>
                  ))}
                </ul>

                <hr className="hairline mb-7" />

                <p className="t-eyebrow mb-4 text-dim">Services</p>
                <ul className="space-y-4">
                  {CHAPTERS.map((c) => (
                    <li key={c.id}>
                      <Link
                        to={c.to}
                        onClick={() => setMobile(false)}
                        className="flex items-center justify-between"
                      >
                        <span className="font-display text-[20px] text-ink"
                              style={{ fontVariationSettings: '"opsz" 28' }}>
                          {c.label}
                        </span>
                        <ArrowRightIcon size={12} weight="bold" className="text-dim" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-6 py-5 border-t border-line space-y-3">
                <Link
                  to="/login"
                  onClick={() => setMobile(false)}
                  className="btn btn-navy w-full justify-center"
                >
                  Sign In <ArrowRightIcon size={11} weight="bold" />
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setMobile(false)}
                  className="btn btn-outline w-full justify-center"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* ── Dropdown content — restrained columns ─────────────────── */
function SeriousPanel({ data, onPick }) {
  return (
    <div className="container-wide py-10">
      <div className="grid grid-cols-12 gap-x-10 gap-y-8">
        {/* Title block */}
        <div className="col-span-12 lg:col-span-3">
          <p className="t-eyebrow mb-3 text-orange-600">Bard Santner</p>
          <h2 className="font-display text-[26px] font-semibold text-ink leading-tight mb-3"
              style={{ fontVariationSettings: '"opsz" 48' }}>
            {data.title}
          </h2>
          <p className="text-[14px] text-dim leading-relaxed mb-5">{data.dek}</p>
          {data.cta && (
            <Link to={data.cta.to} onClick={onPick} className="btn-text">
              {data.cta.label}
              <span className="arrow">→</span>
            </Link>
          )}
        </div>

        {/* Hairline divider */}
        <div className="hidden lg:block col-span-1">
          <span className="block w-px h-full bg-line ml-auto" />
        </div>

        {/* Three categorised columns */}
        <div className="col-span-12 lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-7">
          {data.columns.map((col) => (
            <div key={col.heading}>
              <p className="t-eyebrow mb-3 text-dim">{col.heading}</p>
              <ul className="space-y-2.5">
                {col.items.map((it) => (
                  <li key={it.to + it.label}>
                    <Link
                      to={it.to}
                      onClick={onPick}
                      className="text-[14px] text-graphite hover:text-navy-600 transition-colors"
                      style={{ fontFamily: "var(--font-utility)", fontWeight: 500 }}
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Featured image */}
        <Link
          to={data.cta?.to || "/"}
          onClick={onPick}
          className="hidden lg:block col-span-3 group"
        >
          <div
            className="aspect-[4/3] bg-cover bg-center"
            style={{
              backgroundImage: `url(${data.image})`,
              filter: "saturate(0.94) brightness(0.98) contrast(1.02)",
            }}
          />
          <p className="t-caption mt-2 group-hover:text-navy-600 transition-colors">
            {data.title} · Explore →
          </p>
        </Link>
      </div>
    </div>
  );
}

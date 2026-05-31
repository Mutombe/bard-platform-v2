import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AUDIENCES } from "../../data/audiences.js";
import { HERO, MARQUEE } from "../../data/images.js";

/**
 * NavZine — v2 navigation.
 *
 * The dropdown CONTENT structure is preserved (each chapter exposes a
 * featured offering + 3 categorised columns + an editorial entry).
 * The PRESENTATION is entirely new — magazine masthead at the top,
 * full-viewport takeover panels on hover, printed-TOC layout inside,
 * type-driven (no card grids), cream-on-cabernet colourway.
 *
 * v1's MegaNav was a dropdown card that hung below a sticky nav. This
 * is closer to how Vogue or the New Yorker present digital nav:
 *
 *   ╔══════════════════════════════════════════════════════════════╗
 *   ║ ─────  HOUSEHOLD · COMMERCE · BY APPT · DIASPORA · INST.    ║
 *   ║                                                              ║
 *   ║ BARD SANTNER ─────────────────── No. II · Anno MMXXVI · HRE ║
 *   ║ — A modern African financial institution                     ║
 *   ║                                                              ║
 *   ║ I. The Bank   II. The Counsel   III. The Desk               ║
 *   ║ IV. The Almanac   V. The House   VI. Provenance              ║
 *   ║                                                              ║
 *   ║                       Search ⌥  ·  Enter the Lobby           ║
 *   ╚══════════════════════════════════════════════════════════════╝
 *
 * On hover: a full-bleed plate slides down from the top. Inside:
 *   • left half — full-bleed editorial photograph with a single
 *     italic caption and the "Featured" verb
 *   • right half — printed Table of Contents listing each sub-link
 *     as "I.  Title  ·  italic dek ·  pg. NN"
 *
 * On mobile: a single "Contents ⌥" toggle opens a full-screen panel
 * with the same TOC printed at large scale (no horizontal scrolling
 * audience pills — those move into the panel).
 */

const CHAPTERS = [
  { id: "banking",  numeral: "I.",   label: "The Bank",   to: "/banking" },
  { id: "wealth",   numeral: "II.",  label: "The Counsel",to: "/wealth" },
  { id: "markets",  numeral: "III.", label: "The Desk",   to: "/markets" },
  { id: "insights", numeral: "IV.",  label: "The Almanac",to: "/insights" },
  { id: "group",    numeral: "V.",   label: "The House",  to: "/group" },
  { id: "about",    numeral: "VI.",  label: "Provenance", to: "/about" },
];

/* Dropdown PANEL CONTENT — preserved from the previous renaming pass;
   now rendered in the printed-TOC layout below instead of v1's
   card+columns grid. */
const PANELS = {
  banking: {
    folio: "Chap. I",
    title: "The Bank",
    dek: "Every instrument on a single shelf — for households, commerce, the considered, institutions.",
    image: HERO.banking,
    caption: "From the counter at Beverly Court, Harare.",
    featured: { label: "Open a Current", to: "/products/everyday-account" },
    entries: [
      { roman: "i.",    title: "The Current",          dek: "Salary in, bills out, the everyday instrument.",  to: "/products/everyday-account", folio: 14 },
      { roman: "ii.",   title: "The Savings Book",     dek: "Tiered interest, compounded monthly.",            to: "/products/savings-account",  folio: 16 },
      { roman: "iii.",  title: "The Mortgage",         dek: "Decided with a real banker, twenty-year tenors.", to: "/products/home-loan",        folio: 18 },
      { roman: "iv.",   title: "The Operating Account",dek: "For founders, ateliers, growing houses of trade.",to: "/products/business-account", folio: 22 },
      { roman: "v.",    title: "Working Capital",      dek: "The bridge across the cash-flow gap.",            to: "/products/working-capital",  folio: 24 },
      { roman: "vi.",   title: "Cross-border Trade",   dek: "Trade finance for the corridor.",                 to: "/products/trade-finance",    folio: 26 },
      { roman: "vii.",  title: "Through the Wire",     dek: "Online banking — the bank in your pocket.",       to: "/online-banking",            folio: 28 },
      { roman: "viii.", title: "Enter the Lobby",      dek: "Log in to your accounts.",                        to: "/login",                      folio: 30 },
    ],
  },
  wealth: {
    folio: "Chap. II",
    title: "The Counsel",
    dek: "Discretionary mandates, advisory portfolios and the long counsel of an international house.",
    image: MARQUEE.wealth,
    caption: "The wealth division. By appointment.",
    featured: { label: "Open a private conversation", to: "/contact?audience=private" },
    entries: [
      { roman: "i.",   title: "Discretionary Mandate", dek: "Patient capital. Patient counsel.",              to: "/products/wealth-management",  folio: 34 },
      { roman: "ii.",  title: "Advisory",              dek: "Counsel written down, decided together.",        to: "/products/wealth-management",  folio: 36 },
      { roman: "iii.", title: "Structured Credit",     dek: "Bespoke facilities for considered borrowers.",   to: "/products/structured-credit",  folio: 38 },
      { roman: "iv.",  title: "By Appointment",        dek: "Private banking — the inner office.",            to: "/private-banking",             folio: 40 },
      { roman: "v.",   title: "Family Office",         dek: "Multi-generational stewardship.",                to: "/private-banking",             folio: 42 },
      { roman: "vi.",  title: "Succession",            dek: "The conversation that survives the principal.",  to: "/private-banking",             folio: 44 },
    ],
  },
  markets: {
    folio: "Chap. III",
    title: "The Desk",
    dek: "Treasury, FX, debt-capital-markets origination, trade finance. The desk that runs the book.",
    image: HERO.markets,
    caption: "End-of-day, Harare. The book is reconciled.",
    featured: { label: "Approach the desk", to: "/contact?audience=institutional" },
    entries: [
      { roman: "i.",   title: "Treasury & FX",          dek: "Liquidity, custody, daily cash management.",    to: "/products/treasury-services",     folio: 48 },
      { roman: "ii.",  title: "Foreign Exchange",       dek: "Spot, forward, swap. With the audit trail.",     to: "/products/foreign-exchange",      folio: 50 },
      { roman: "iii.", title: "Origination (DCM)",      dek: "Bond issuance, structured paper, syndication.",  to: "/products/debt-capital-markets",  folio: 52 },
      { roman: "iv.",  title: "Trade Finance",          dek: "Letters of credit, guarantees, the corridor.",   to: "/products/trade-finance",         folio: 54 },
      { roman: "v.",   title: "For the Diaspora",       dek: "Cross-border instruments and corridor desks.",   to: "/international",                  folio: 56 },
      { roman: "vi.",  title: "For Institutions",       dek: "Correspondent banking and originator-of-record.",to: "/institutional",                  folio: 58 },
    ],
  },
  insights: {
    folio: "Chap. IV",
    title: "The Almanac",
    dek: "Editorial commentary by the people who run the desks. Bardiq Journal carries the long form.",
    image: HERO.insights,
    caption: "The library at Gladstone's — a reading room for the institution.",
    featured: { label: "Bardiq Journal — Vol. II", to: "/group/journal" },
    entries: [
      { roman: "i.",   title: "On the Corridor",       dek: "Africa and the cross-border rail.",                to: "/insights/africa-and-the-cross-border-rail",         folio: 62 },
      { roman: "ii.",  title: "On Deposits",           dek: "The quiet case for a deposit base.",                to: "/insights/the-quiet-case-for-a-deposit-base",        folio: 66 },
      { roman: "iii.", title: "On the Diaspora",       dek: "The diaspora is not a niche.",                      to: "/insights/the-diaspora-is-not-a-niche",              folio: 70 },
      { roman: "iv.",  title: "On Credit",             dek: "Credit when the rate is the conversation.",         to: "/insights/credit-when-the-rate-is-the-conversation", folio: 74 },
      { roman: "v.",   title: "On Treasury",           dek: "Treasury and the discipline of the end-of-day.",    to: "/insights/treasury-and-the-discipline-of-the-end-of-day", folio: 78 },
      { roman: "vi.",  title: "On Wealth",             dek: "Wealth and the second conversation.",               to: "/insights/wealth-and-the-second-conversation",       folio: 82 },
      { roman: "vii.", title: "All entries",            dek: "The full almanac, paginated.",                      to: "/insights",                                          folio: 86 },
    ],
  },
  group: {
    folio: "Chap. V",
    title: "The House",
    dek: "Five institutions, one discipline. The bank at the centre; markets, lending, sport and editorial around it.",
    image: MARQUEE.wealth,
    caption: "The five institutions — a single discipline shared.",
    featured: { label: "Enter the Bank (BSMFB)", to: "/group/bsmfb" },
    entries: [
      { roman: "i.",   title: "BSMFB",          dek: "The flagship deposit-taking institution.", to: "/group/bsmfb",   folio: 92  },
      { roman: "ii.",  title: "Markets Inc",    dek: "The parent. Capital-markets advisory.",    to: "/group/markets", folio: 94  },
      { roman: "iii.", title: "Bard Loans",     dek: "Credit, for civil servants and SMEs.",     to: "/group/loans",   folio: 96  },
      { roman: "iv.",  title: "Bard Santner Golf", dek: "Sport and wealth, on the fairway.",     to: "/group/golf",    folio: 98  },
      { roman: "v.",   title: "Bardiq Journal", dek: "The Group's editorial publication.",       to: "/group/journal", folio: 100 },
    ],
  },
  about: {
    folio: "Chap. VI",
    title: "Provenance",
    dek: "How the institution came to be — the manifesto, the people, the places.",
    image: HERO.about,
    caption: "Anchored in Harare; built to international standards.",
    featured: { label: "Read the manifesto", to: "/about" },
    entries: [
      { roman: "i.",    title: "The Manifesto", dek: "What we measure ourselves against.",        to: "/about",      folio: 106 },
      { roman: "ii.",   title: "The Names",     dek: "Named, accountable, reachable.",            to: "/leadership", folio: 110 },
      { roman: "iii.",  title: "The Places",    dek: "Branches, desks, diaspora offices.",        to: "/locations",  folio: 114 },
      { roman: "iv.",   title: "The Door",      dek: "Telephone, email, WhatsApp, by appointment.",to: "/contact",   folio: 118 },
      { roman: "v.",    title: "The Warrant",   dek: "On security, regulation and the warrant.",   to: "/security",  folio: 122 },
    ],
  },
};

export default function NavZine() {
  const [openChapter, setOpenChapter] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef(null);
  const loc = useLocation();

  useEffect(() => { setOpenChapter(null); setMobileOpen(false); }, [loc.pathname]);

  useEffect(() => {
    if (mobileOpen) document.body.classList.add("scroll-lock");
    else document.body.classList.remove("scroll-lock");
    return () => document.body.classList.remove("scroll-lock");
  }, [mobileOpen]);

  function openById(id) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenChapter(id);
  }
  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenChapter(null), 200);
  }

  const matchedAudienceId = AUDIENCES.find((a) => loc.pathname.startsWith(a.path))?.id;
  const activeAudienceId = matchedAudienceId || null;

  return (
    <>
      {/* ── MASTHEAD — three lines, printed-publication style ─── */}
      <header
        className="relative z-40 surface-paper border-b border-cabernet-500/15"
        onMouseLeave={scheduleClose}
      >
        {/* Stations strip — replaces v1's "audience tabs". Reads like
            an editorial subtitle line. */}
        <div className="page py-2.5 hidden md:flex items-center justify-between border-b border-cabernet-500/10">
          <p className="t-eyebrow text-walnut">
            ❦ &nbsp; The Annual Letter — Vol. II
          </p>
          <div className="flex items-center gap-7 t-eyebrow">
            {AUDIENCES.map((a, i) => {
              const isActive = activeAudienceId === a.id;
              return (
                <NavLink
                  key={a.id}
                  to={a.path}
                  className={`whitespace-nowrap transition-colors hover:text-cabernet-500 ${
                    isActive ? "text-cabernet-500" : "text-walnut"
                  }`}
                >
                  {a.label}
                </NavLink>
              );
            })}
            <span className="text-walnut/40">|</span>
            <span className="font-mono text-[10.5px] tracking-[0.18em] text-cabernet-500">
              Anno · MMXXVI · Harare
            </span>
          </div>
        </div>

        {/* Masthead row — brand mark + 6 chapter links + actions */}
        <div className="page py-5 md:py-6 flex items-end justify-between gap-6">
          {/* Brand */}
          <Link to="/" className="shrink-0 group" aria-label="Bard Santner — the cover">
            <span className="block t-eyebrow text-walnut mb-1">
              No. II · Anno MMXXVI
            </span>
            <span className="block font-display text-[28px] md:text-[36px] lg:text-[40px] font-semibold tracking-[-0.018em] text-print leading-none"
                  style={{ fontVariationSettings: '"opsz" 96' }}>
              Bard Santner
            </span>
            <span className="block font-italic italic text-[14px] md:text-[15px] text-walnut mt-1.5">
              A modern African financial institution.
            </span>
          </Link>

          {/* Chapter links — desktop. NOT a typical horizontal nav;
              presented as printed roman-numeralled headings. */}
          <nav className="hidden lg:flex items-end gap-6 xl:gap-8 pb-1.5">
            {CHAPTERS.map((c) => {
              const isActive = loc.pathname === c.to;
              const isOpen = openChapter === c.id;
              return (
                <button
                  key={c.id}
                  onMouseEnter={() => openById(c.id)}
                  onClick={() => window.location.assign(c.to)}
                  className="group flex flex-col items-start leading-tight"
                >
                  <span className={`font-mono text-[9.5px] tracking-[0.22em] uppercase mb-1 transition-colors ${
                    isOpen || isActive ? "text-seal" : "text-walnut"
                  }`}>
                    {c.numeral}
                  </span>
                  <span className={`font-display text-[15px] font-medium tracking-[-0.006em] transition-colors ${
                    isOpen || isActive ? "text-cabernet-500" : "text-print group-hover:text-cabernet-500"
                  }`}>
                    {c.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Trailing actions — flush-right, minimal */}
          <div className="flex items-end gap-4 pb-1.5">
            <Link
              to="/login"
              className="hidden md:inline-flex items-center gap-2 t-eyebrow text-cabernet-500 hover:text-cabernet-700 transition-colors"
            >
              ⊙ &nbsp; Enter the Lobby
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open contents"
              className="lg:hidden flex items-center gap-2 t-eyebrow text-print"
            >
              Contents ⌥
            </button>
          </div>
        </div>

        {/* ── Mega-spread dropdown — appears on chapter hover ───── */}
        <AnimatePresence>
          {openChapter && PANELS[openChapter] && (
            <motion.div
              key={openChapter}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 right-0 top-full surface-paper-deep border-y border-cabernet-500/20 shadow-[var(--shadow-deep)]"
              onMouseEnter={() => openById(openChapter)}
              onMouseLeave={scheduleClose}
            >
              <Spread data={PANELS[openChapter]} onPick={() => setOpenChapter(null)} />
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── Mobile full-screen contents panel ─────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 lg:hidden surface-paper overflow-y-auto"
          >
            <div className="page py-6 flex items-center justify-between border-b border-cabernet-500/15">
              <Link to="/" onClick={() => setMobileOpen(false)} className="font-display text-[20px] font-semibold text-print">
                Bard Santner
              </Link>
              <button onClick={() => setMobileOpen(false)} className="t-eyebrow text-cabernet-500">
                Close ⌥
              </button>
            </div>
            <div className="page py-8 space-y-7">
              <p className="t-eyebrow text-walnut">Stations</p>
              <ul className="space-y-3 -mt-3">
                {AUDIENCES.map((a) => (
                  <li key={a.id}>
                    <Link to={a.path} onClick={() => setMobileOpen(false)} className="font-display text-[22px] text-print">
                      {a.label}
                      <span className="font-italic italic text-[14px] text-walnut ml-3">— {a.eyebrow}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <hr className="hairline-warm" />

              <p className="t-eyebrow text-walnut">The Chapters</p>
              <ul className="space-y-4 -mt-3">
                {CHAPTERS.map((c) => (
                  <li key={c.id}>
                    <Link to={c.to} onClick={() => setMobileOpen(false)} className="flex items-baseline gap-3">
                      <span className="font-mono text-[12px] tracking-[0.18em] text-seal">{c.numeral}</span>
                      <span className="font-display text-[24px] font-medium text-print">{c.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <hr className="hairline-warm" />

              <div className="flex flex-col gap-3">
                <Link to="/login" onClick={() => setMobileOpen(false)} className="btn-letterpress btn-letterpress-cabernet w-full justify-center">
                  ⊙ &nbsp; Enter the Lobby
                </Link>
                <Link to="/contact" onClick={() => setMobileOpen(false)} className="btn-letterpress w-full justify-center">
                  Open a conversation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ── Spread — the dropdown content rendered as a magazine page ─── */
function Spread({ data, onPick }) {
  return (
    <div className="page-wide py-12 md:py-16 grid grid-cols-12 gap-x-10 gap-y-8">
      {/* LEFT — image with caption */}
      <Link
        to={data.featured.to}
        onClick={onPick}
        className="col-span-12 lg:col-span-5 group block relative"
      >
        <div
          className="aspect-[4/5] bg-cover bg-center relative overflow-hidden"
          style={{
            backgroundImage: `url(${data.image})`,
            filter: "saturate(0.55) brightness(0.86) contrast(1.06)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-cabernet-700/30 via-transparent to-transparent" />
        </div>
        <p className="t-caption mt-3 pl-1">{data.caption}</p>
      </Link>

      {/* RIGHT — printed TOC */}
      <div className="col-span-12 lg:col-span-7">
        <div className="flex items-baseline justify-between border-b border-cabernet-500/25 pb-3 mb-7">
          <p className="t-eyebrow text-cabernet-500">{data.folio}</p>
          <p className="t-eyebrow text-walnut">Contents of the chapter</p>
        </div>

        <h2 className="font-display text-[32px] md:text-[40px] font-medium text-print leading-[1.04] tracking-[-0.014em] mb-3"
            style={{ fontVariationSettings: '"opsz" 72' }}>
          {data.title}
        </h2>
        <p className="t-dek max-w-xl mb-8">{data.dek}</p>

        <ul className="space-y-3">
          {data.entries.map((e) => (
            <li key={e.title}>
              <Link
                to={e.to}
                onClick={onPick}
                className="group grid grid-cols-12 gap-3 items-baseline py-2 hover:bg-cabernet-500/5 transition-colors"
              >
                <span className="col-span-1 font-mono text-[11px] text-walnut tabular-nums tracking-[0.06em]">
                  {e.roman}
                </span>
                <span className="col-span-7 md:col-span-8 font-display text-[17px] md:text-[19px] text-print group-hover:text-cabernet-500 transition-colors leading-tight">
                  {e.title}
                  <span className="hidden md:inline font-italic italic text-[14px] text-walnut ml-3">— {e.dek}</span>
                </span>
                <span className="col-span-4 md:col-span-3 text-right font-mono text-[10.5px] text-walnut tabular-nums tracking-[0.08em] uppercase opacity-70">
                  pg. {e.folio}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Featured CTA */}
        <div className="mt-9 pt-5 border-t border-cabernet-500/20">
          <Link to={data.featured.to} onClick={onPick} className="btn-letterpress btn-letterpress-cabernet">
            ⌘ &nbsp; {data.featured.label}
          </Link>
        </div>
      </div>
    </div>
  );
}

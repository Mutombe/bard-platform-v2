import { Link } from "react-router-dom";

/**
 * FooterSerious — JPM/Morgan Stanley dense regulatory footer.
 *
 * Dark navy plate. Five columns of links (institution, services,
 * client, regulatory, contact). Below: registered-mark line, copyright,
 * regulatory disclosures. Conservative typography, plenty of fine print.
 */

const COLUMNS = [
  {
    title: "Bard Santner",
    items: [
      { label: "About us",            to: "/about" },
      { label: "Our Firm",            to: "/group" },
      { label: "Leadership",          to: "/leadership" },
      { label: "Office locations",    to: "/locations" },
      { label: "Careers",             to: "/careers" },
      { label: "Press centre",        to: "/press" },
    ],
  },
  {
    title: "Banking",
    items: [
      { label: "Personal banking",    to: "/personal" },
      { label: "Business banking",    to: "/business" },
      { label: "Online banking",      to: "/online-banking" },
      { label: "Open an account",     to: "/products/everyday-account" },
      { label: "Home loans",          to: "/products/home-loan" },
      { label: "Trade finance",       to: "/products/trade-finance" },
    ],
  },
  {
    title: "Wealth & Markets",
    items: [
      { label: "Private banking",     to: "/private-banking" },
      { label: "Wealth management",   to: "/products/wealth-management" },
      { label: "Structured credit",   to: "/products/structured-credit" },
      { label: "Treasury services",   to: "/products/treasury-services" },
      { label: "Foreign exchange",    to: "/products/foreign-exchange" },
      { label: "Debt capital markets",to: "/products/debt-capital-markets" },
    ],
  },
  {
    title: "Research",
    items: [
      { label: "Research & Insights", to: "/insights" },
      { label: "Bardiq Journal",      to: "/group/journal" },
      { label: "Diaspora banking",    to: "/international" },
      { label: "Institutional",       to: "/institutional" },
    ],
  },
  {
    title: "Client Service",
    items: [
      { label: "Contact us",          to: "/contact" },
      { label: "Security centre",     to: "/security" },
      { label: "Complaints",          to: "/complaints" },
      { label: "Accessibility",       to: "/accessibility" },
      { label: "Service status",      to: "/status" },
    ],
  },
];

export default function FooterSerious() {
  return (
    <footer className="surface-navy-deep relative">
      {/* Top — five column dense sitemap */}
      <div className="container-wide pt-16 md:pt-24 pb-12 md:pb-16">
        {/* gap-x-0 on mobile prevents column overflow on narrow phones */}
        <div className="grid grid-cols-12 gap-x-0 sm:gap-x-6 lg:gap-x-8 gap-y-10">
          {/* Brand column */}
          <div className="col-span-12 md:col-span-12 lg:col-span-3 mb-6 lg:mb-0">
            <Link to="/" className="flex items-center gap-3 mb-7">
              <img src="/favicon.png" alt="" className="h-11 w-11 object-contain" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-[19px] font-semibold text-white tracking-[-0.012em]"
                      style={{ fontVariationSettings: '"opsz" 56' }}>
                  Bard Santner
                </span>
                <span className="t-mono text-[10px] text-white/55 mt-1">Markets Inc · Harare</span>
              </span>
            </Link>
            <p className="text-[13.5px] text-white/65 leading-relaxed max-w-xs mb-7">
              A modern African financial platform. Banking, wealth, markets and editorial.
            </p>
            <Link to="/login" className="btn btn-orange text-[13px]">
              Sign In
              <span>→</span>
            </Link>
          </div>

          {/* Five link columns — clean stacking:
              mobile 2-up (col-span-6) → md 3-up (col-span-4) → lg 5-up (col-span-2).
              No orphans because 5 cols × 6 = 30/12 = 2.5 rows, the
              last col is centred via lg:first-of-type:col-start-5 at lg+. */}
          {COLUMNS.map((col) => (
            <div key={col.title} className="col-span-6 md:col-span-4 lg:col-span-2 lg:first-of-type:col-start-5">
              <p className="t-eyebrow text-orange-400 mb-5">{col.title}</p>
              <ul className="space-y-3">
                {col.items.map((it) => (
                  <li key={it.to + it.label}>
                    <Link
                      to={it.to}
                      className="text-[13px] text-white/70 hover:text-white transition-colors"
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
      </div>

      <hr className="hairline-dark" />

      {/* Regulatory + © */}
      <div className="container-wide py-8 md:py-10">
        <div className="grid grid-cols-12 gap-x-0 sm:gap-x-6 lg:gap-x-8 gap-y-8 mb-6">
          <div className="col-span-12 lg:col-span-8">
            <p className="t-eyebrow text-white/45 mb-3">Regulatory Information</p>
            <p className="text-[12.5px] text-white/55 leading-relaxed max-w-3xl">
              Bard Santner Markets Inc is incorporated in the Republic of Zimbabwe
              under CIPZ registration number 42656A0252025 (9 May 2025). Bard Santner
              Microfinance Bank (BSMFB) operates under licence and is supervised by the
              relevant prudential authorities. Capital markets and treasury activity is
              conducted from the firm's offices at 5th Floor, Beverly Court, 100 Nelson
              Mandela Avenue, Harare. Eligibility and terms apply to all products. Nothing
              on this site constitutes financial advice; it is provided for general
              information only.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <p className="t-eyebrow text-white/45 mb-3">Registered Office</p>
            <p className="text-[12.5px] text-white/65 leading-relaxed">
              Bard Santner Markets Inc<br />
              5th Floor, Beverly Court<br />
              100 Nelson Mandela Avenue<br />
              Harare, Zimbabwe
            </p>
            <p className="t-mono text-[10px] text-white/45 mt-3">
              CIPZ · 42656A0252025
            </p>
          </div>
        </div>

        <hr className="hairline-dark mb-6" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[11.5px] text-white/55">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="t-mono text-[10.5px] text-white/45">© {new Date().getFullYear()} BARD SANTNER MARKETS INC</span>
            <Link to="/legal" className="hover:text-white">Legal</Link>
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/cookies" className="hover:text-white">Cookies</Link>
            <Link to="/terms" className="hover:text-white">Terms of use</Link>
            <Link to="/regulatory" className="hover:text-white">Regulatory information</Link>
            <Link to="/accessibility" className="hover:text-white">Accessibility</Link>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-white text-left md:text-right"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

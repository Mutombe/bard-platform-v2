import { Link } from "react-router-dom";

/**
 * Institutional banking footer. Four columns, deep navy ground, regulatory
 * disclosures + locations + connect row. Modelled on the Lloyds + AfrAsia
 * footer pattern documented in the inspirations:
 *
 *   Products and services | Help & security | Legal | About
 *   ─────────────────────────────────────────────────────────
 *   Locations strip
 *   ─────────────────────────────────────────────────────────
 *   © + regulatory disclosure + back to top
 */

const COLUMNS = [
  {
    title: "Banking",
    links: [
      { label: "Current accounts", to: "/products/everyday-account" },
      { label: "Savings", to: "/products/savings-account" },
      { label: "Home loans", to: "/products/home-loan" },
      { label: "Business accounts", to: "/products/business-account" },
      { label: "Working capital", to: "/products/working-capital" },
      { label: "Private Banking", to: "/private-banking" },
      { label: "International", to: "/international" },
    ],
  },
  {
    title: "Markets & Treasury",
    links: [
      { label: "Trade Finance", to: "/products/trade-finance" },
      { label: "Foreign Exchange", to: "/products/foreign-exchange" },
      { label: "Treasury Services", to: "/products/treasury-services" },
      { label: "Debt Capital Markets", to: "/products/debt-capital-markets" },
      { label: "Wealth Management", to: "/products/wealth-management" },
      { label: "Structured Credit", to: "/products/structured-credit" },
    ],
  },
  {
    title: "Help & security",
    links: [
      { label: "Online Banking", to: "/online-banking" },
      { label: "Contact us", to: "/contact" },
      { label: "Locations", to: "/locations" },
      { label: "Security", to: "/security" },
      { label: "Complaints", to: "/complaints" },
      { label: "Accessibility", to: "/accessibility" },
      { label: "Service status", to: "/status" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About Bard Santner", to: "/about" },
      { label: "The Group", to: "/group" },
      { label: "Leadership", to: "/leadership" },
      { label: "Insights", to: "/insights" },
      { label: "Bardiq Journal", to: "/group/journal" },
      { label: "Careers", to: "/careers" },
      { label: "Press room", to: "/press" },
    ],
  },
];

const LOCATIONS = [
  { city: "Harare", line: "5th Floor Beverly Court, 100 Nelson Mandela Avenue" },
  { city: "Bulawayo", line: "Branch coming 2026 Q3" },
  { city: "Johannesburg", line: "Representative office, Sandton" },
  { city: "London", line: "Diaspora desk, Canary Wharf" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      {/* ─── Top — brand row + four columns ─── */}
      <div className="container-bank pt-14 md:pt-24 pb-10 md:pb-12">
        <div className="grid grid-cols-12 gap-8 md:gap-14">
          <div className="col-span-12 md:col-span-3">
            <Link to="/" aria-label="Bard Santner home" className="inline-flex items-center gap-3">
              <img src="/favicon.png" alt="" className="h-11 w-11 md:h-12 md:w-12 object-contain" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-[16px] md:text-[17px] tracking-[0.04em] uppercase">Bard Santner</span>
                <span className="text-[10px] tracking-[0.18em] text-white/55 uppercase mt-1">Markets Inc</span>
              </span>
            </Link>
            <p className="mt-6 md:mt-8 text-[14px] text-white/65 leading-relaxed max-w-xs">
              A modern African financial platform. Banking, markets, advisory.
            </p>
            <p className="mt-6 md:mt-8 eyebrow eyebrow-on-dark mb-3">Open an account</p>
            <Link to="/personal" className="btn btn-primary text-[13.5px] py-3 px-5">
              Get started
            </Link>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="col-span-6 md:col-span-2 lg:col-span-2">
              <p className="font-display text-[15px] md:text-[16px] text-white mb-4 md:mb-5">{col.title}</p>
              <ul className="space-y-2.5 md:space-y-3">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-[13px] md:text-[13.5px] text-white/70 hover:text-white hover-line"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <hr className="hairline-dark" />

      {/* ─── Locations strip ─── */}
      <div className="container-bank py-8 md:py-10">
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="eyebrow eyebrow-on-dark mb-1">Where we operate</p>
            <p className="font-display text-[18px] md:text-[20px] text-white">Offices and desks</p>
          </div>
          {LOCATIONS.map((loc) => (
            <div key={loc.city} className="col-span-6 md:col-span-2 lg:col-span-2">
              <p className="text-[13px] text-white font-medium mb-1">{loc.city}</p>
              <p className="text-[12px] text-white/55 leading-relaxed">{loc.line}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="hairline-dark" />

      {/* ─── Regulatory + © ─── */}
      <div className="container-bank py-7 md:py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-6 text-[12px] text-white/55">
          <div className="flex flex-wrap items-center gap-x-5 md:gap-x-6 gap-y-2">
            <span>© {new Date().getFullYear()} Bard Santner Markets Inc</span>
            <Link to="/legal" className="hover-line hover:text-white">Legal</Link>
            <Link to="/privacy" className="hover-line hover:text-white">Privacy</Link>
            <Link to="/cookies" className="hover-line hover:text-white">Cookies</Link>
            <Link to="/terms" className="hover-line hover:text-white">Terms</Link>
            <Link to="/regulatory" className="hover-line hover:text-white">Regulatory</Link>
            <Link to="/sitemap" className="hover-line hover:text-white">Sitemap</Link>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover-line hover:text-white self-start md:self-auto"
          >
            Back to top ↑
          </button>
        </div>

        <p className="mt-5 md:mt-6 text-[11.5px] text-white/40 leading-relaxed max-w-4xl">
          Bard Santner Markets Inc is a financial services institution incorporated in the
          Republic of Zimbabwe. Bard Santner Microfinance Bank (BSMFB) operates under licence
          and is supervised by the relevant prudential authorities. Eligibility, terms and
          conditions apply to all products. Information on this site is provided for general
          guidance and does not constitute financial advice.
        </p>
      </div>
    </footer>
  );
}

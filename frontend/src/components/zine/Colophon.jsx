import { Link } from "react-router-dom";

/**
 * Colophon — the publisher's colophon at the very end.
 *
 * The block of typographic information at the back of a printed book
 * naming the typefaces, paper, printer, publication date. Replaces
 * v1's standard four-column footer entirely.
 *
 * Structure: full-width surface-cabernet panel. At the top, a thin
 * line of editorial credits. In the centre, a typographic colophon
 * statement. Below, three columns of secondary information: the
 * imprint (institution legal name + registration + warrant), the
 * places (locations), and the door (contact channels). Bottom: legal
 * pills + return-to-cover.
 */
export default function Colophon() {
  return (
    <footer className="surface-cabernet relative">
      <div className="page pt-16 md:pt-24 pb-8 md:pb-12">
        {/* Masthead inside colophon — italic credit line */}
        <div className="border-b border-parchment-100/15 pb-5 mb-12 flex items-baseline justify-between gap-4 flex-wrap">
          <p className="font-italic italic text-[15px] md:text-[16px] text-parchment-100/85">
            The Annual Letter, published in Harare by Bard Santner Markets Inc.
          </p>
          <p className="font-mono text-[10.5px] tracking-[0.20em] uppercase text-brass-400">
            Vol. II &nbsp; · &nbsp; Anno MMXXVI &nbsp; · &nbsp; No. 002
          </p>
        </div>

        {/* The big typographic colophon — Bodoni at scale, centred */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <p className="t-eyebrow text-brass-400 mb-5">❦ &nbsp; Colophon</p>
          <h2 className="font-display text-[32px] md:text-[44px] font-medium text-parchment-100 leading-[1.18] mb-7 tracking-[-0.012em]"
              style={{ fontVariationSettings: '"opsz" 72' }}>
            This issue was typeset in{" "}
            <em className="font-italic italic" style={{ fontFamily: "var(--font-italic)" }}>
              Bodoni Moda
            </em>
            {" "}for display and{" "}
            <em className="font-italic italic" style={{ fontFamily: "var(--font-italic)" }}>
              Source Serif
            </em>
            {" "}for reading.
          </h2>
          <p className="font-italic italic text-[16px] md:text-[18px] text-parchment-100/70 leading-relaxed">
            Composed at Bard Santner Markets Inc, Beverly Court, Harare.
            Printed and published electronically. Reading copy at 17 pt.
            All numerals in the ticker are JetBrains Mono.
          </p>
        </div>

        {/* Three margin columns — imprint, places, door */}
        <div className="grid grid-cols-12 gap-8 md:gap-12 mb-16">
          <div className="col-span-12 md:col-span-4">
            <p className="t-eyebrow text-brass-400 mb-4">The Imprint</p>
            <p className="font-display text-[20px] md:text-[22px] text-parchment-100 mb-3 leading-tight">
              Bard Santner Markets Inc.
            </p>
            <p className="font-italic italic text-[14px] text-parchment-100/65 leading-relaxed mb-4">
              Capital-markets institution incorporated in the Republic of
              Zimbabwe. Parent of the Bard Santner Group.
            </p>
            <p className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-parchment-100/55">
              CIPZ · 42656A0252025 · 9 V MMXXV
            </p>
          </div>

          <div className="col-span-12 md:col-span-4">
            <p className="t-eyebrow text-brass-400 mb-4">The Places</p>
            <ul className="space-y-3">
              <li>
                <p className="font-display text-[15px] md:text-[16px] text-parchment-100">Harare · Flagship</p>
                <p className="font-italic italic text-[13.5px] text-parchment-100/65 leading-snug">
                  5th Floor Beverly Court, 100 Nelson Mandela Avenue.
                </p>
              </li>
              <li>
                <p className="font-display text-[15px] text-parchment-100">Johannesburg · By Appointment</p>
                <p className="font-italic italic text-[13.5px] text-parchment-100/65">Sandton.</p>
              </li>
              <li>
                <p className="font-display text-[15px] text-parchment-100">London · Diaspora Desk</p>
                <p className="font-italic italic text-[13.5px] text-parchment-100/65">Canary Wharf.</p>
              </li>
              <li>
                <p className="font-display text-[15px] text-parchment-100">Bulawayo · Opening 2026 Q3</p>
              </li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-4">
            <p className="t-eyebrow text-brass-400 mb-4">The Door</p>
            <ul className="space-y-3">
              <li>
                <a href="tel:+263861200700" className="block group">
                  <p className="font-display text-[15px] md:text-[16px] text-parchment-100 group-hover:text-brass-400 transition-colors">
                    +263 861 200 0700
                  </p>
                  <p className="font-italic italic text-[13.5px] text-parchment-100/65">Mon–Fri 08:00–17:00 CAT.</p>
                </a>
              </li>
              <li>
                <a href="mailto:info@bardsantner.com" className="block group">
                  <p className="font-display text-[15px] text-parchment-100 group-hover:text-brass-400 transition-colors">
                    info@bardsantner.com
                  </p>
                  <p className="font-italic italic text-[13.5px] text-parchment-100/65">Reply within one business day.</p>
                </a>
              </li>
              <li>
                <Link to="/contact" className="block group">
                  <p className="font-display text-[15px] text-parchment-100 group-hover:text-brass-400 transition-colors">
                    Open a private conversation
                  </p>
                  <p className="font-italic italic text-[13.5px] text-parchment-100/65">A relationship banker, within a day.</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal pills — single line, very subtle */}
        <div className="border-t border-parchment-100/15 pt-6 flex flex-wrap items-center justify-between gap-y-3 gap-x-6 text-[11.5px] text-parchment-100/55 font-mono tracking-[0.06em]">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <span>© Anno {new Date().getFullYear()}</span>
            <Link to="/legal" className="hover:text-parchment-100">By Letter</Link>
            <Link to="/privacy" className="hover:text-parchment-100">On Privacy</Link>
            <Link to="/cookies" className="hover:text-parchment-100">Cookies</Link>
            <Link to="/terms" className="hover:text-parchment-100">Terms</Link>
            <Link to="/regulatory" className="hover:text-parchment-100">The Warrant</Link>
            <Link to="/accessibility" className="hover:text-parchment-100">Accessibility</Link>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-parchment-100"
          >
            ↑ &nbsp; Return to the cover
          </button>
        </div>

        {/* Closing italic */}
        <p className="mt-9 max-w-3xl font-italic italic text-[12.5px] text-parchment-100/50 leading-relaxed">
          Bard Santner Microfinance Bank (BSMFB) operates under licence
          and is supervised by the relevant prudential authorities.
          Eligibility, terms and conditions apply to all instruments.
          This document is editorial in nature; nothing in it
          constitutes financial advice.
        </p>
      </div>
    </footer>
  );
}

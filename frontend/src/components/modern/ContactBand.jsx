import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@phosphor-icons/react";

/**
 * ContactBand — JPM canonical "Connect with us" section.
 *
 * Dark navy plate near the bottom of the home page. Restrained.
 * Two-column grid: left side is the institutional CTA copy, right
 * side is a list of contact channels (phone, email, schedule).
 * No glassmorphism, no rounded cards. Just hairline-divided rows.
 */
export default function ContactBand() {
  return (
    <section className="surface-navy">
      <div className="container-wide py-24 md:py-32 lg:py-40">
        <div className="grid grid-cols-12 gap-x-0 lg:gap-x-10 gap-y-12 md:gap-y-14">
          {/* Left — institutional CTA */}
          <div className="col-span-12 lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="block h-px w-10 bg-orange-500" />
              <p className="t-eyebrow text-orange-400">Connect With Bard Santner</p>
            </div>
            <h2 className="t-headline text-white text-balance mb-7">
              Speak with a banker.
            </h2>
            <p className="t-dek text-white/70 mb-9 max-w-xl">
              A senior banker will reach you within one business day.
              The first conversation costs nothing and commits to nothing —
              it tells both of us whether the relationship makes sense.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <Link to="/contact" className="btn btn-orange w-full sm:w-auto justify-center">
                Schedule a consultation
                <ArrowRightIcon size={11} weight="bold" />
              </Link>
              <Link to="/leadership" className="btn btn-outline-light w-full sm:w-auto justify-center">
                Meet our leadership
              </Link>
            </div>
          </div>

          {/* Right — contact channels, hairline-divided */}
          <div className="col-span-12 lg:col-span-5 lg:pl-10 lg:border-l lg:border-white/12">
            <p className="t-eyebrow text-white/55 mb-6">Contact</p>
            <ul className="divide-y divide-white/12">
              <li>
                <a href="tel:+263861200700" className="group flex items-center justify-between gap-4 py-5">
                  <div>
                    <p className="t-mono text-white/55 mb-1">Telephone</p>
                    <p className="font-display text-[20px] text-white group-hover:text-orange-400 transition-colors"
                       style={{ fontVariationSettings: '"opsz" 28' }}>
                      +263 861 200 0700
                    </p>
                    <p className="text-[13px] text-white/55 mt-1">Mon–Fri 08:00–17:00 CAT</p>
                  </div>
                  <ArrowRightIcon size={14} weight="bold" className="text-white/40 group-hover:text-orange-400 group-hover:translate-x-0.5 transition-all" />
                </a>
              </li>
              <li>
                <a href="mailto:info@bardsantner.com" className="group flex items-center justify-between gap-4 py-5">
                  <div>
                    <p className="t-mono text-white/55 mb-1">Email</p>
                    <p className="font-display text-[20px] text-white group-hover:text-orange-400 transition-colors"
                       style={{ fontVariationSettings: '"opsz" 28' }}>
                      info@bardsantner.com
                    </p>
                    <p className="text-[13px] text-white/55 mt-1">Reply within one business day.</p>
                  </div>
                  <ArrowRightIcon size={14} weight="bold" className="text-white/40 group-hover:text-orange-400 group-hover:translate-x-0.5 transition-all" />
                </a>
              </li>
              <li>
                <Link to="/locations" className="group flex items-center justify-between gap-4 py-5">
                  <div>
                    <p className="t-mono text-white/55 mb-1">In Person</p>
                    <p className="font-display text-[20px] text-white group-hover:text-orange-400 transition-colors"
                       style={{ fontVariationSettings: '"opsz" 28' }}>
                      5th Floor, Beverly Court
                    </p>
                    <p className="text-[13px] text-white/55 mt-1">100 Nelson Mandela Avenue, Harare.</p>
                  </div>
                  <ArrowRightIcon size={14} weight="bold" className="text-white/40 group-hover:text-orange-400 group-hover:translate-x-0.5 transition-all" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

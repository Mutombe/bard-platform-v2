import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { HERO } from "../../data/images.js";

/**
 * HeroSerious — JPM Private Bank / Goldman / BlackRock canonical hero.
 *
 * Layout: 7/5 grid. Left side carries the eyebrow + restrained Bodoni
 * headline + dek + dual CTAs. Right side carries a single editorial
 * photograph with hairline border. No carousel, no overlay text on
 * image, no parallax theatre. Subtle filter only.
 *
 *   ┌───────────────────────────────┬─────────────────────┐
 *   │  CAPITAL · COUNSEL · CORRIDOR │                     │
 *   │                                │                     │
 *   │  A modern African              │   [photograph]     │
 *   │  financial platform.           │                     │
 *   │                                │                     │
 *   │  Bard Santner serves households│                     │
 *   │  …                              │                     │
 *   │                                │                     │
 *   │  [ Sign In ]  [ Contact us ]   │                     │
 *   └───────────────────────────────┴─────────────────────┘
 */
export default function HeroSerious() {
  return (
    <section className="surface-white relative">
      <div className="container-wide py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-12 gap-x-10 gap-y-10 items-center">
          {/* Left — type column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <span className="block w-10 h-px bg-orange-500" />
              <p className="t-eyebrow text-orange-600">A modern African financial institution</p>
            </div>

            <h1 className="t-hero text-ink text-balance">
              Capital, counsel and the corridor —
              <span className="block text-dim font-normal" style={{ fontVariationSettings: '"opsz" 72' }}>
                anchored in Harare, built to international standards.
              </span>
            </h1>

            <p className="t-dek mt-7 md:mt-9 max-w-2xl">
              Bard Santner Markets Inc serves households, growing businesses, the African
              diaspora and the institutions that fund them — with the patient counsel of
              an international house.
            </p>

            <div className="mt-9 md:mt-11 flex flex-wrap items-center gap-3">
              <Link to="/login" className="btn btn-navy">
                Sign In
                <ArrowRightIcon size={11} weight="bold" />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Speak with a banker
              </Link>
            </div>

            {/* Trust line — small, mono, JPM canon */}
            <div className="mt-12 pt-6 border-t border-line max-w-xl">
              <p className="t-mono text-faint">
                Member · CIPZ 42656A0252025 &nbsp;·&nbsp; Founded Anno MMXXV &nbsp;·&nbsp; Harare, Zimbabwe
              </p>
            </div>
          </motion.div>

          {/* Right — editorial photograph, hairline framed */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 lg:col-span-5"
          >
            <figure className="relative">
              <div
                className="aspect-[4/5] bg-cover bg-center border border-line"
                style={{
                  backgroundImage: `url(${HERO.home})`,
                  filter: "saturate(0.94) brightness(0.98) contrast(1.04)",
                }}
              />
              <figcaption className="t-caption mt-3 text-dim">
                Above — the modern Harare skyline at first light.
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </div>

      {/* Hairline divider at base of hero — JPM-style section bookend */}
      <div className="container-wide">
        <hr className="hairline" />
      </div>
    </section>
  );
}

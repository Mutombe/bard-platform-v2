import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { HERO } from "../../data/images.js";

/**
 * HeroSerious — locked to one viewport, no clipping, mobile-safe.
 *
 * THE GRID BUG that caused content to clip off the right edge on
 * mobile: `grid grid-cols-12 gap-x-10` on a 327 px viewport means
 * 11 × 40 px = 440 px of gap inside a 327 px container — the grid
 * tracks shrink to 0, every col-span-12 item becomes >327 px wide,
 * and text clips off the right. Fixed by setting gap-x-0 on small
 * screens, restoring gap-x-10 only at lg.
 *
 * Hero content trimmed for the one-viewport lock:
 *   • headline cut to three short words: Capital. Counsel. Corridor.
 *   • dek reduced to a single line: "A modern African financial
 *     institution — anchored in Harare."
 *   • eyebrow removed; the dek carries the role
 *   • trust line gone (lives in footer)
 *   • photo 21:9 mobile banner, 16:9 sm, 4:5 lg
 */
export default function HeroSerious() {
  return (
    <section className="surface-white relative w-full">
      <div className="container-wide w-full
                      flex flex-col justify-center
                      min-h-[calc(100svh-var(--nav-h-mobile))]
                      md:min-h-[calc(100svh-var(--nav-h-desktop))]
                      py-8 md:py-14 lg:py-20">

        {/* gap-x-0 on mobile so the 12-col grid doesn't add up to more
            than the viewport. gap-x-10 returns at lg where the columns
            are actually different widths. */}
        <div className="grid grid-cols-12 gap-x-0 lg:gap-x-10 gap-y-6 md:gap-y-7 items-center w-full">

          {/* MOBILE photograph — slim 21:9 banner, full width */}
          <motion.figure
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 lg:hidden w-full m-0"
          >
            <div
              className="w-full aspect-[21/9] sm:aspect-[16/9] bg-cover bg-center photo-modern"
              style={{ backgroundImage: `url(${HERO.home})` }}
            />
          </motion.figure>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 lg:col-span-7 w-full text-left"
          >
            {/* Headline — three short words + grey secondary line */}
            <h1 className="t-hero text-ink text-balance text-left">
              Capital. Counsel.
              <span className="block mt-1">Corridor.</span>
              <span className="block mt-2 text-dim font-normal" style={{ fontVariationSettings: '"opsz" 48' }}>
                Anchored in Harare.
              </span>
            </h1>

            <p className="t-dek mt-5 md:mt-7 lg:mt-8 max-w-2xl text-left">
              A modern African financial institution, built to international standards.
            </p>

            <div className="mt-7 md:mt-9 lg:mt-10 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 w-full">
              <Link to="/login" className="btn btn-navy w-full sm:w-auto justify-center">
                Sign In
                <ArrowRightIcon size={11} weight="bold" />
              </Link>
              <Link to="/contact" className="btn btn-outline w-full sm:w-auto justify-center">
                Speak with a banker
              </Link>
            </div>
          </motion.div>

          {/* DESKTOP photograph */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block lg:col-span-5 w-full"
          >
            <figure className="relative w-full">
              {/* Reduced from aspect-[4/5] to aspect-[1/1] — square,
                  noticeably less tall. Less visual weight on the right
                  column; the type column gets equal optical weight. */}
              <div
                className="w-full aspect-[1/1] bg-cover bg-center photo-modern blend-fade-left"
                style={{ backgroundImage: `url(${HERO.home})` }}
              />
              <figcaption className="t-caption mt-3 text-dim">
                Above — modern Harare at first light.
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </div>

      <div className="container-wide w-full">
        <hr className="hairline" />
      </div>
    </section>
  );
}

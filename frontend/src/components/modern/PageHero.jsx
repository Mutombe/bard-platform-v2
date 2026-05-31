import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@phosphor-icons/react";

/**
 * PageHero — the inner-page hero counterpart to HeroSerious.
 *
 * Used for every non-home top-level page (Wealth, About, Markets, etc).
 * Smaller in stature than the home hero (no full-viewport lock), but
 * built on the same restrained type + image system. Photograph blends
 * inward via mask gradient. Crumb above the eyebrow for orientation.
 */
export default function PageHero({
  crumb,
  eyebrow,
  title,
  dek,
  image,
  primaryCTA,
  secondaryCTA,
  tone = "light",
  caption,
}) {
  const palette = tone === "dark"
    ? { surface: "surface-ink",  eyebrow: "text-orange-400", title: "text-white", dek: "text-white/70", rule: "bg-orange-500", crumb: "text-white/55" }
    : { surface: "surface-white", eyebrow: "text-orange-600", title: "text-ink",   dek: "text-dim",      rule: "bg-orange-500", crumb: "text-dim" };

  return (
    <section className={`${palette.surface} relative w-full`}>
      <div className="container-wide w-full pt-12 md:pt-20 lg:pt-24 pb-16 md:pb-20 lg:pb-24">
        <div className="grid grid-cols-12 gap-x-0 lg:gap-x-10 gap-y-10 items-center w-full">

          {/* Mobile photograph */}
          {image && (
            <motion.figure
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="col-span-12 lg:hidden w-full m-0"
            >
              <div
                className="w-full aspect-[16/9] bg-cover bg-center photo-modern"
                style={{ backgroundImage: `url(${image})` }}
              />
            </motion.figure>
          )}

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className={`col-span-12 ${image ? "lg:col-span-7" : "lg:col-span-9"} w-full text-left`}
          >
            {crumb && (
              <p className={`t-mono mb-5 md:mb-6 ${palette.crumb}`}>
                {crumb}
              </p>
            )}
            <div className="flex items-center gap-3 mb-5 md:mb-7">
              <span className={`block h-px w-10 ${palette.rule} shrink-0`} />
              <p className={`t-eyebrow ${palette.eyebrow}`}>{eyebrow}</p>
            </div>
            <h1 className={`t-hero ${palette.title} text-balance text-left`}>
              {title}
            </h1>
            {dek && (
              <p className={`t-dek mt-6 md:mt-8 max-w-2xl text-left ${palette.dek}`}
                 style={{ color: tone === "dark" ? "rgba(255,255,255,0.7)" : "var(--color-dim)" }}>
                {dek}
              </p>
            )}
            {(primaryCTA || secondaryCTA) && (
              <div className="mt-7 md:mt-9 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 w-full">
                {primaryCTA && (
                  <Link to={primaryCTA.to} className={`btn ${tone === "dark" ? "btn-orange" : "btn-navy"} w-full sm:w-auto justify-center`}>
                    {primaryCTA.label}
                    <ArrowRightIcon size={11} weight="bold" />
                  </Link>
                )}
                {secondaryCTA && (
                  <Link to={secondaryCTA.to} className={`btn ${tone === "dark" ? "btn-outline-light" : "btn-outline"} w-full sm:w-auto justify-center`}>
                    {secondaryCTA.label}
                  </Link>
                )}
              </div>
            )}
          </motion.div>

          {/* Desktop photograph */}
          {image && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.16 }}
              className="hidden lg:block lg:col-span-5 w-full"
            >
              <figure className="relative w-full">
                <div
                  className="w-full aspect-[5/6] bg-cover bg-center photo-modern blend-fade-left"
                  style={{ backgroundImage: `url(${image})` }}
                />
                {caption && (
                  <figcaption className={`t-caption mt-3 ${palette.dek}`}>
                    {caption}
                  </figcaption>
                )}
              </figure>
            </motion.div>
          )}
        </div>
      </div>
      <div className="container-wide w-full">
        <hr className="hairline" />
      </div>
    </section>
  );
}

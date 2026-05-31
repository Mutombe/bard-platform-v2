import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { MARQUEE } from "../data/images.js";
import CornerMarks from "./artifacts/CornerMarks.jsx";
import SealStamp from "./artifacts/SealStamp.jsx";
import MonogramPattern from "./artifacts/MonogramPattern.jsx";

/**
 * V2 Wealth Marquee — heritage card, gold + burgundy accents.
 *
 * v1 was a clean Lloyds-card knock: dark ink + orange favicon + white
 * CTA. v2 turns the dial toward Pictet / Edmond de Rothschild:
 *   • Card surface darkens to navy-900 (more aristocratic than ink)
 *   • Monogram pattern in the right panel at 8% opacity (visible
 *     watermark)
 *   • Top brand rule shifts orange → gold for the heritage signal
 *   • Sub-brand mark gets the gold "WEALTH" treatment
 *   • Wax seal stamp floats at the lower-right of the photo panel
 *     ("EST · 2025")
 *   • Corner trim marks on the card frame
 *   • CTA: warm milk against the navy card (unchanged grammar) but
 *     with a thin gold border underline on hover
 *   • Manuscript italic accent date below the eligibility line
 */
export default function WealthMarquee() {
  return (
    <section className="bg-milk">
      <div className="container-bank py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-5xl mx-auto bg-navy-900 rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(12,10,20,0.22)]"
        >
          {/* Gold top brand rule — heritage signature (was orange in v1) */}
          <div className="absolute top-0 left-0 right-0 h-[2px] z-10"
            style={{ background: "linear-gradient(to right, var(--color-gold-400), var(--color-gold-300), var(--color-gold-400))" }} />

          {/* Corner trim marks — paper-cut registration on the card */}
          <CornerMarks color="rgba(212,173,83,0.45)" size={18} opacity={1} inset={18} />

          <div className="grid grid-cols-1 md:grid-cols-2 relative">
            {/* ─── LEFT — photograph + favicon + seal stamp ───────────── */}
            <div className="relative aspect-[5/4] md:aspect-auto md:min-h-[440px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${MARQUEE.wealth})`,
                  filter: "saturate(0.78) brightness(0.82) contrast(1.08)",
                }}
              />

              {/* Heavier blend toward the right edge so the photo merges
                  into the navy text panel cleanly. */}
              <div className="absolute inset-0 bg-gradient-to-r from-navy-900/55 via-transparent to-navy-900/65" />
              <div className="absolute inset-0 md:hidden bg-gradient-to-b from-transparent via-transparent to-navy-900/90" />

              {/* Subtle vignette top + bottom */}
              <div className="absolute inset-0 bg-gradient-to-b from-navy-900/30 via-transparent to-navy-900/30" />

              {/* Sub-brand mark — favicon + Wealth, gold accent text */}
              <div className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-3 md:gap-4">
                <img
                  src="/favicon.png"
                  alt=""
                  className="h-11 w-11 md:h-12 md:w-12 object-contain shrink-0 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                  loading="lazy"
                />
                <div className="leading-none">
                  <p className="font-grotesk text-[10px] md:text-[10.5px] tracking-[0.22em] uppercase font-semibold text-white/70">
                    Bard Santner
                  </p>
                  <p className="font-grotesk text-[18px] md:text-[20px] tracking-[0.12em] uppercase font-semibold mt-1.5"
                     style={{ color: "var(--color-gold-300)" }}>
                    Wealth
                  </p>
                </div>
              </div>

              {/* Wax seal stamp — bottom-right of the photo panel */}
              <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 hidden sm:block">
                <SealStamp size={68} tone="burgundy" label="EST · 2025" initials="BS" rotate={-6} />
              </div>
            </div>

            {/* ─── RIGHT — text content + CTA ─────────────────────────── */}
            <div className="relative bg-navy-900 p-7 sm:p-9 md:p-10 lg:p-12 flex flex-col justify-center overflow-hidden">
              {/* Monogram watermark in the text panel — 8% opacity */}
              <MonogramPattern intensity="default" tone="dark" />

              <div className="relative">
                <h2 className="display-md mb-4 md:mb-5"
                    style={{ color: "var(--color-gold-100)" }}>
                  This is Bard Santner Wealth
                </h2>
                <p className="font-accent text-[18px] md:text-[20px] italic leading-relaxed mb-3 md:mb-4"
                   style={{ color: "var(--color-gold-200)" }}>
                  Patient capital. Patient counsel.
                </p>
                <p className="text-[14.5px] md:text-[15px] text-white/70 leading-relaxed mb-7 md:mb-8 max-w-md">
                  Discretionary mandates, advisory portfolios and the long counsel
                  of an international house — anchored in Africa.
                </p>

                <Link
                  to="/wealth"
                  className="group inline-flex items-center justify-center gap-2 bg-milk text-navy-900 hover:bg-paper px-6 py-4 rounded-lg font-semibold text-[14.5px] md:text-[15px] transition-all w-full md:w-auto border-b-2 border-gold-400/0 hover:border-gold-400"
                >
                  Explore Bard Santner Wealth
                  <ArrowRightIcon size={14} weight="bold" className="group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <p className="mt-5 md:mt-6 text-[11.5px] md:text-[12px] leading-relaxed"
                   style={{ color: "rgba(243,227,181,0.55)" }}>
                  Eligibility criteria apply. Subject to KYC and mandate terms.
                </p>
                <p className="mt-2 font-accent italic text-[12px]"
                   style={{ color: "var(--color-gold-300)" }}>
                  — From the desk of Bard Santner Markets Inc, Harare.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

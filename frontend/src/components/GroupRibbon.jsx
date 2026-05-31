import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@phosphor-icons/react";
import SectionReveal from "./SectionReveal.jsx";
import { GROUP_ENTITIES } from "../data/group.js";

/**
 * The Bard Santner Group ribbon. Each entity is a clean, named card in
 * the Lloyds / Investec institutional grammar:
 *
 *   ───── hairline accent rule ─────
 *   01  ·  THE BANK
 *
 *   Bard Santner
 *   Microfinance Bank
 *   ───── hairline ─────
 *   Banking, savings, credit. The everyday
 *   and the consequential.
 *
 *   Open with BSMFB  →
 *
 * No fake mark images, no thick accent stripes, no decorative chrome.
 * The accent colour exists only in the 1px rule at the top and the
 * role label — the institutional gesture is the hairline, not a chip.
 *
 * Renders as 5-up on home, vertical on /group.
 */
export default function GroupRibbon({ vertical = false }) {
  return (
    <section className="section bg-ink text-white monogram-bg border-y-2 border-orange-500">
      <div className="container-bank">
        <SectionReveal className="mb-10 md:mb-16 max-w-3xl">
          <p className="eyebrow eyebrow-on-dark mb-4">§ 03 · The Group</p>
          <h2 className="display-xl text-white">
            Five institutions. One discipline.
          </h2>
          <p className="mt-5 md:mt-6 text-white/70 leading-relaxed max-w-2xl text-[15.5px] md:text-[17px]">
            Bard Santner is a financial platform, not a single product.
            The bank sits at the centre. Four sister institutions sit
            around it. All share the same standard.
          </p>
        </SectionReveal>

        <div
          className={
            vertical
              ? "flex flex-col gap-3 md:gap-4"
              : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-4"
          }
        >
          {GROUP_ENTITIES.map((e, idx) => (
            <motion.div
              key={e.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
            <Link
              to={e.href}
              className="group relative block bg-navy-800 hover:bg-navy-700 transition-colors flex flex-col h-full"
            >
              {/* Top accent — single 1px rule in the entity colour.
                  No thickness, no chip, just a clean institutional mark. */}
              <div
                className="h-[1px] w-full"
                style={{ backgroundColor: e.accent }}
              />

              {/* Header — index + role + ticker chip.
                  The role label sits in brand orange across all five
                  entities. New show-off detail: a ticker-style code
                  chip floating on the right side of the card header,
                  same grammar as a Bloomberg or Reuters institutional
                  identifier. Carries the entity's short code (BSMFB,
                  Markets, Loans, Golf, Journal) in tracked mono inside
                  a thin-bordered chip. Reads as a financial-house
                  ticker, not a tag. */}
              <div className="px-6 md:px-8 lg:px-9 pt-6 md:pt-8 lg:pt-9 pb-5 md:pb-6 lg:pb-7 flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] tracking-[0.22em] text-white/35">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-white/20">·</span>
                  <span
                    className="font-mono text-[11px] tracking-[0.18em] uppercase text-orange-500"
                  >
                    {e.role}
                  </span>
                </div>
                <span
                  className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40 group-hover:text-white/65 transition-colors border border-white/15 group-hover:border-white/30 px-2 py-1 rounded-sm whitespace-nowrap"
                  aria-hidden="true"
                >
                  {e.short}
                </span>
              </div>

              {/* Hairline divider */}
              <div className="mx-6 md:mx-8 lg:mx-9 h-[1px] bg-white/10" />

              {/* Body — name + tagline + CTA */}
              <div className="px-6 md:px-8 lg:px-9 pt-6 md:pt-7 lg:pt-8 pb-7 md:pb-9 lg:pb-10 flex-1 flex flex-col">
                <h3 className="font-display text-[20px] md:text-[24px] text-white mb-3 md:mb-4 leading-[1.15]">
                  {e.name}
                </h3>
                <p className="text-[14px] md:text-[14.5px] text-white/70 leading-relaxed mb-7 md:mb-9 flex-1">
                  {e.tagline}
                </p>
                <span className="inline-flex items-center gap-2 text-[12.5px] md:text-[13px] font-medium text-white group-hover:text-orange-300 transition-colors tracking-wide">
                  {e.cta}
                  <ArrowRightIcon size={13} weight="bold" />
                </span>
              </div>
            </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

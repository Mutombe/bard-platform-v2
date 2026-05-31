import { motion } from "framer-motion";
import { findLeaderByName } from "../../data/leadership.js";

/**
 * PullQuote — large editorial quote with named attribution.
 *
 * Used between sections to break the rhythm with a principal's voice.
 * Layout:
 *
 *   ┌────────────────────────────────────────────────────────────┐
 *   │   ❝                                                         │
 *   │                                                              │
 *   │      A bank is signed by its people.                        │
 *   │      The CEO is named. The bankers are named.               │
 *   │                                                              │
 *   │   ┌──┐  — Senziwani Sikhosana                               │
 *   │   │  │     Chief Executive Officer · Bard Santner           │
 *   │   └──┘                                                       │
 *   │                                                              │
 *   └────────────────────────────────────────────────────────────┘
 *
 * The ❝ glyph is huge, gold-tinted, set at the top-left as a
 * decorative anchor. The quote itself is Fraunces serif at display
 * scale. Below, a small portrait avatar + attribution.
 */
export default function PullQuote({
  quote = "",
  authorName = "",
  tone = "ink",
  className = "",
}) {
  const leader = findLeaderByName(authorName);
  const role = leader?.role || "";

  const palette = {
    ink: {
      bg: "bg-ink",
      mark: "text-gold-300",
      quote: "text-white",
      name: "text-gold-300",
      role: "text-white/60",
      rule: "bg-gold-400",
      avatarRing: "ring-gold-400/40",
      avatarOffset: "ring-offset-ink",
    },
    burgundy: {
      bg: "bg-burgundy-500",
      mark: "text-gold-200",
      quote: "text-gold-50",
      name: "text-gold-200",
      role: "text-gold-200/70",
      rule: "bg-gold-300",
      avatarRing: "ring-gold-300/40",
      avatarOffset: "ring-offset-burgundy-500",
    },
    milk: {
      bg: "bg-milk",
      mark: "text-orange-500",
      quote: "text-navy-700",
      name: "text-orange-700",
      role: "text-bone-600",
      rule: "bg-orange-500",
      avatarRing: "ring-orange-500/50",
      avatarOffset: "ring-offset-milk",
    },
  };
  const p = palette[tone] || palette.ink;

  return (
    <section className={`${p.bg} relative overflow-hidden ${className}`}>
      <div className="container-bank py-20 md:py-28 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto relative"
        >
          {/* Huge quotation mark — decorative anchor */}
          <span
            className={`absolute -top-12 md:-top-20 -left-2 md:-left-6 font-display font-medium leading-none select-none ${p.mark} opacity-70`}
            style={{
              fontSize: "clamp(7rem, 14vw, 12rem)",
              fontVariationSettings: '"SOFT" 50, "opsz" 144',
            }}
            aria-hidden="true"
          >
            “
          </span>

          {/* The quote itself */}
          <blockquote className="relative">
            <p
              className={`font-display ${p.quote} text-balance`}
              style={{
                fontSize: "clamp(1.75rem, 3.8vw, 3rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.012em",
                fontWeight: 500,
                fontVariationSettings: '"SOFT" 38, "opsz" 72',
              }}
            >
              {quote}
            </p>
          </blockquote>

          {/* Attribution */}
          <div className="mt-10 md:mt-14 flex items-center gap-5">
            {leader?.image && (
              <img
                src={leader.image}
                alt=""
                className={`w-14 h-14 md:w-16 md:h-16 rounded-full object-cover ring-2 ${p.avatarRing} ring-offset-4 ${p.avatarOffset} shrink-0`}
                loading="lazy"
              />
            )}
            <div className="flex items-start gap-3 md:gap-4">
              <span className={`block h-[2px] w-8 md:w-10 ${p.rule} mt-3`} />
              <div className="leading-tight">
                <p className={`font-grotesk text-[14px] md:text-[15px] font-semibold ${p.name}`}>
                  {authorName}
                </p>
                <p className={`font-grotesk text-[11.5px] md:text-[12px] tracking-[0.12em] uppercase font-medium ${p.role} mt-1.5`}>
                  {role}{role && " · "}Bard Santner
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

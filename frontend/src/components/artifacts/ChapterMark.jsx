import { motion } from "framer-motion";

/**
 * ChapterMark — section opener with a giant roman numeral.
 *
 * The editorial-publisher's "Chapter II." page. Used as a section
 * intro on the home page and major content pages. Half-page typo
 * arrangement: huge serif numeral on the left, eyebrow + headline +
 * dek + named author on the right with a thin orange hairline
 * between the two halves.
 *
 * Numerals are passed as roman: "I.", "II.", "III." — these are
 * rendered in Fraunces display at 6vw clamped, slightly soft, with
 * an italic period for the manuscript signature.
 *
 *   ┌───────────────────────────────────────────────┐
 *   │                            §  III.            │
 *   │     ─────────────              ▬▬▬▬▬          │
 *   │            II.              SECTION EYEBROW   │
 *   │       (huge)                Section headline. │
 *   │                             ─────             │
 *   │                             Dek / standfirst… │
 *   │                             ─                 │
 *   │                             — Signed name     │
 *   └───────────────────────────────────────────────┘
 */
export default function ChapterMark({
  numeral = "I.",
  eyebrow = "Chapter",
  headline = "",
  standfirst = "",
  signature = "",
  tone = "milk",
  align = "left",
  className = "",
}) {
  const palette = {
    milk: {
      bg: "bg-milk",
      numeral: "text-orange-500",
      eyebrow: "text-orange-700",
      heading: "text-navy-700",
      body: "text-bone-600",
      rule: "bg-orange-500",
      sig: "text-bone-500",
    },
    parchment: {
      bg: "bg-parchment",
      numeral: "text-burgundy-500",
      eyebrow: "text-burgundy-500",
      heading: "text-navy-800",
      body: "text-bone-700",
      rule: "bg-burgundy-500",
      sig: "text-bone-600",
    },
    ink: {
      bg: "bg-ink",
      numeral: "text-gold-300",
      eyebrow: "text-gold-300",
      heading: "text-white",
      body: "text-white/70",
      rule: "bg-gold-400",
      sig: "text-white/50",
    },
  };
  const p = palette[tone] || palette.milk;

  return (
    <section className={`${p.bg} ${className} relative`}>
      <div className="container-bank py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-12 gap-8 md:gap-14 items-start">
          {/* Giant numeral */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-4 lg:col-span-5"
          >
            <div className="relative">
              <p
                className={`font-display ${p.numeral} font-medium leading-[0.85] tracking-[-0.02em]`}
                style={{
                  fontSize: "clamp(7rem, 16vw, 14rem)",
                  fontVariationSettings: '"SOFT" 35, "opsz" 144',
                }}
              >
                {numeral}
              </p>
              {/* Small mark — § sigil */}
              <span
                className={`absolute -top-3 -left-1 font-display ${p.eyebrow} font-medium opacity-50`}
                style={{ fontSize: "clamp(1rem, 1.4vw, 1.5rem)" }}
              >
                §
              </span>
            </div>
          </motion.div>

          {/* Hairline */}
          <div className="hidden md:flex col-span-1 justify-center pt-8">
            <span className={`block w-[1px] h-32 lg:h-48 ${p.rule} opacity-40`} />
          </div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`col-span-12 md:col-span-7 lg:col-span-6 ${align === "center" ? "text-center" : ""}`}
          >
            <div className={`flex items-center gap-3.5 mb-5 md:mb-6 ${align === "center" ? "justify-center" : ""}`}>
              <span className={`block h-[2px] w-10 ${p.rule}`} />
              <p className={`font-grotesk text-[11.5px] tracking-[0.24em] uppercase font-semibold ${p.eyebrow}`}>
                {eyebrow}
              </p>
            </div>
            <h2 className={`display-lg ${p.heading} mb-6 md:mb-8`}>
              {headline}
            </h2>
            {standfirst && (
              <p className={`text-[16px] md:text-[18px] ${p.body} leading-relaxed max-w-xl`}>
                {standfirst}
              </p>
            )}
            {signature && (
              <p className={`mt-8 md:mt-10 font-accent italic text-[15px] md:text-[16px] ${p.sig}`}>
                {signature}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

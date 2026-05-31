import { motion } from "framer-motion";
import { findLeaderByName } from "../../data/leadership.js";

/**
 * SignedLetter — "From the desk of" institutional letter.
 *
 * Used on the home page as a signed manifesto from the CEO, or on
 * About as a longer letter. Layout:
 *
 *   ┌────────────────────────────────────────────────────────────┐
 *   │  ┌──┐  BARD SANTNER MARKETS INC                            │
 *   │  │BS│  From the desk of                                     │
 *   │  └──┘  ───────                                              │
 *   │                                                              │
 *   │  «To the reader,                                             │
 *   │                                                              │
 *   │   This is the kind of letter our institution writes when …  │
 *   │                                                              │
 *   │   The work, then, is …                                       │
 *   │                                                              │
 *   │   Yours, in commerce,»                                       │
 *   │                                                              │
 *   │  ╲ Senziwani Sikhosana ╱  (handwritten-style signature)     │
 *   │     Chief Executive Officer                                  │
 *   │     2 May 2026 · Harare                                      │
 *   └────────────────────────────────────────────────────────────┘
 *
 * Background: parchment-coloured surface. Heading in grotesk small-caps.
 * Body in Onest with the first letter as a drop-cap. Closing in
 * Cormorant italic. Signature is the principal's name rendered in
 * Cormorant italic at large size; the sub-line gives role + date.
 */
export default function SignedLetter({
  authorName = "Senziwani Sikhosana",
  authorRole = "Chief Executive Officer",
  dateline = "2 May 2026 · Harare",
  salutation = "To the reader,",
  paragraphs = [],
  closing = "Yours, in commerce,",
  tone = "parchment",
}) {
  const leader = findLeaderByName(authorName);

  const palette = {
    parchment: {
      bg: "bg-parchment",
      ink: "text-navy-800",
      mute: "text-bone-700",
      accent: "text-burgundy-500",
      seal: "text-gold-400",
      monoLabel: "text-burgundy-500",
    },
    milk: {
      bg: "bg-milk",
      ink: "text-navy-700",
      mute: "text-bone-600",
      accent: "text-orange-700",
      seal: "text-orange-500",
      monoLabel: "text-orange-700",
    },
  };
  const p = palette[tone] || palette.parchment;

  return (
    <section className={`${p.bg} relative overflow-hidden`}>
      {/* Aged-paper texture — subtle vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 60%, rgba(58,30,14,0.06) 100%)",
        }}
      />

      <div className="relative container-bank py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          {/* Letterhead */}
          <div className="flex items-start gap-4 mb-10 md:mb-12">
            <img
              src="/favicon.png"
              alt=""
              className="h-12 w-12 md:h-14 md:w-14 object-contain shrink-0"
            />
            <div className="leading-tight pt-1">
              <p className={`font-grotesk text-[10.5px] md:text-[11px] tracking-[0.22em] uppercase font-semibold ${p.monoLabel} mb-1`}>
                Bard Santner Markets Inc
              </p>
              <p className={`font-grotesk text-[9px] md:text-[9.5px] tracking-[0.20em] uppercase font-medium ${p.mute} opacity-70`}>
                From the desk of the {authorRole.split(" ").slice(-1)[0] === "Officer" ? "Chief Executive Officer" : authorRole}
              </p>
              <span className={`block h-[1px] w-8 ${p.bg === "bg-parchment" ? "bg-burgundy-500" : "bg-orange-500"} mt-2`} />
            </div>
          </div>

          {/* Salutation */}
          <p className={`font-accent italic text-[22px] md:text-[26px] ${p.accent} mb-7`}>
            {salutation}
          </p>

          {/* Body — first paragraph has drop-cap */}
          <div className={`space-y-6 text-[16px] md:text-[17.5px] leading-[1.75] ${p.ink}`}>
            {paragraphs.map((para, i) => (
              <p key={i} className={i === 0 ? "drop-cap" : ""}>
                {para}
              </p>
            ))}
          </div>

          {/* Closing */}
          <p className={`mt-9 font-accent italic text-[19px] md:text-[21px] ${p.accent}`}>
            {closing}
          </p>

          {/* Signature block */}
          <div className="mt-7 md:mt-8 flex items-end gap-5">
            <div>
              {/* Signature — Cormorant italic, slightly underlined */}
              <p
                className={`font-accent italic ${p.ink} leading-none`}
                style={{
                  fontSize: "clamp(1.75rem, 3.4vw, 2.5rem)",
                  fontVariationSettings: '"wght" 500',
                  textDecoration: "underline",
                  textDecorationStyle: "wavy",
                  textDecorationColor: "currentColor",
                  textDecorationThickness: "1px",
                  textUnderlineOffset: "12px",
                }}
              >
                {authorName}
              </p>
              <p className={`mt-4 font-grotesk text-[12px] tracking-[0.12em] uppercase font-semibold ${p.monoLabel}`}>
                {authorRole}
              </p>
              <p className={`mt-1 font-accent italic text-[13px] ${p.mute}`}>
                {dateline}
              </p>
            </div>

            {/* Author portrait avatar — small, dignified */}
            {leader?.image && (
              <img
                src={leader.image}
                alt={authorName}
                className="hidden sm:block w-16 h-16 md:w-20 md:h-20 rounded-full object-cover ring-2 ring-burgundy-500/40 ring-offset-4 ring-offset-parchment shrink-0"
                loading="lazy"
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

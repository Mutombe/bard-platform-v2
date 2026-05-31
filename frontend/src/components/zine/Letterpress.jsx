import { motion } from "framer-motion";
import { findLeaderByName } from "../../data/leadership.js";

/**
 * Letterpress — a signed letter spread.
 *
 * Used for the CEO's letter at the close of the home publication.
 * Full-bleed cabernet plate. White page mounted inside it like a
 * letter on a desk. Drop-cap on the first paragraph. The signature
 * is rendered in Cormorant italic with a wavy underline; the
 * principal's portrait avatar floats beside it.
 */
export default function Letterpress({
  authorName = "Senziwani Sikhosana",
  authorRole = "Chief Executive Officer",
  dateline = "2 May 2026 · Harare",
  salutation = "To the reader,",
  paragraphs = [],
  closing = "Yours, in commerce,",
  folio = "Letter · v.",
}) {
  const leader = findLeaderByName(authorName);
  return (
    <section className="surface-cabernet relative">
      {/* Running head */}
      <div className="page py-4 border-b border-parchment-100/15 flex items-center justify-between">
        <span className="folio text-parchment-100/70" style={{ color: "currentColor" }}>
          {folio}
        </span>
        <span className="t-eyebrow text-brass-400">A letter from the desk</span>
      </div>

      <div className="page py-20 md:py-28 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto surface-paper p-9 md:p-14 lg:p-16 relative"
          style={{ boxShadow: "0 24px 60px rgba(14,10,8,0.45)" }}
        >
          {/* Letterhead */}
          <div className="flex items-baseline justify-between border-b border-cabernet-500/25 pb-5 mb-10">
            <div>
              <p className="t-eyebrow text-cabernet-500 mb-1">Bard Santner Markets Inc</p>
              <p className="font-italic italic text-[14px] text-walnut">
                From the desk of the {authorRole.split(" ").slice(-1)[0] === "Officer" ? "Chief Executive Officer" : authorRole}
              </p>
            </div>
            <span className="t-eyebrow text-walnut">{dateline}</span>
          </div>

          {/* Salutation */}
          <p className="font-italic italic text-[24px] md:text-[28px] text-cabernet-500 mb-8">
            {salutation}
          </p>

          {/* Body — first paragraph has drop-cap */}
          <div className="space-y-6 text-[17px] md:text-[18.5px] leading-[1.75] text-graphite">
            {paragraphs.map((para, i) => (
              <p key={i} className={i === 0 ? "t-dropcap" : ""}>
                {para}
              </p>
            ))}
          </div>

          {/* Closing */}
          <p className="mt-10 font-italic italic text-[20px] md:text-[22px] text-cabernet-500">
            {closing}
          </p>

          {/* Signature */}
          <div className="mt-8 flex items-end justify-between gap-5">
            <div>
              <p
                className="font-italic italic text-print leading-none"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 500,
                  textDecoration: "underline",
                  textDecorationStyle: "wavy",
                  textDecorationColor: "currentColor",
                  textDecorationThickness: "1px",
                  textUnderlineOffset: "14px",
                }}
              >
                {authorName}
              </p>
              <p className="t-eyebrow text-cabernet-500 mt-4">{authorRole}</p>
            </div>
            {leader?.image && (
              <img
                src={leader.image}
                alt=""
                className="hidden sm:block w-16 h-16 md:w-20 md:h-20 rounded-full object-cover ring-2 ring-cabernet-500/40 ring-offset-4 shrink-0"
                style={{ "--tw-ring-offset-color": "var(--color-canvas)" }}
                loading="lazy"
              />
            )}
          </div>

          {/* Wax-seal closing — bottom-right margin */}
          <div className="mt-12 flex items-center justify-end">
            <span className="wax-seal text-[12px]" style={{ width: 56, height: 56 }}>BS</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

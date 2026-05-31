import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * Spread — a magazine page spread.
 *
 * The general-purpose chapter section. Asymmetric, image-driven,
 * captioned. Used for the major editorial sections after the cover:
 * "The Bank", "The Counsel", "The Desk", etc.
 *
 * Two variants by side:
 *   side="left"  — large photograph on the LEFT (cols 1–7), text right
 *   side="right" — large photograph on the RIGHT (cols 6–12), text left
 *
 * Three tones:
 *   tone="paper"    — cream canvas (default)
 *   tone="cabernet" — deep oxblood spread for dramatic moments
 *   tone="print"    — near-black for the most editorial pages
 */
export default function Spread({
  numeral = "I.",
  folio = "Chap. I",
  eyebrow = "",
  headline = "",
  dek = "",
  body,            // string OR array of paragraphs
  image,
  caption = "",
  cta,
  side = "left",
  tone = "paper",
  numeralStyle = "cabernet", // cabernet | brass | seal
}) {
  const PALETTE = {
    paper:    { surface: "surface-paper",    text: "text-print",         dim: "text-walnut",          numeral: "text-cabernet-500",  rule: "border-cabernet-500/25",  body: "text-graphite" },
    cabernet: { surface: "surface-cabernet", text: "text-parchment-100", dim: "text-parchment-100/70", numeral: "text-brass-400",     rule: "border-parchment-100/25", body: "text-parchment-100/85" },
    print:    { surface: "surface-print",    text: "text-parchment-100", dim: "text-parchment-100/65", numeral: "text-brass-400",     rule: "border-parchment-100/20", body: "text-parchment-100/80" },
  };
  const p = PALETTE[tone] || PALETTE.paper;
  const paragraphs = Array.isArray(body) ? body : (body ? [body] : []);

  // Column placement
  const imageCols = side === "right" ? "lg:col-start-7 lg:col-end-13" : "lg:col-start-1 lg:col-end-8";
  const textCols  = side === "right" ? "lg:col-start-1 lg:col-end-7"  : "lg:col-start-8 lg:col-end-13";

  return (
    <section className={`${p.surface} relative`}>
      {/* Running head */}
      <div className={`page py-4 border-b ${p.rule} flex items-center justify-between`}>
        <span className={`folio ${p.dim}`} style={{ color: "currentColor" }}>
          {folio}
        </span>
        <span className={`t-eyebrow ${p.dim}`} style={{ color: "currentColor" }}>
          A spread from the letter
        </span>
      </div>

      <div className="page py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-12 gap-y-12 gap-x-8 md:gap-x-12 items-start">
          {/* IMAGE side */}
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className={`col-span-12 ${imageCols}`}
          >
            <div
              className="aspect-[4/5] bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${image})`,
                filter: tone === "paper"
                  ? "saturate(0.42) brightness(0.92) contrast(1.06) sepia(0.06)"
                  : "saturate(0.30) brightness(0.74) contrast(1.10)",
              }}
            >
              <div className="absolute inset-0 ring-1 ring-current opacity-10 pointer-events-none" />
            </div>
            <figcaption className={`t-caption mt-3 flex items-start gap-3 ${p.dim}`} style={{ color: "currentColor" }}>
              <span className="font-mono text-[9.5px] tracking-[0.18em] uppercase shrink-0 mt-[3px] opacity-70">
                Plate {numeral.toLowerCase().replace(".","")}
              </span>
              <span style={{ color: "currentColor" }}>{caption}</span>
            </figcaption>
          </motion.figure>

          {/* TEXT side */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`col-span-12 ${textCols}`}
          >
            {/* Giant numeral */}
            <p className={`roman-numeral ${p.numeral} mb-4 md:mb-6`}
               style={{ fontSize: "clamp(4rem, 8vw, 7rem)", fontVariationSettings: '"opsz" 144' }}>
              {numeral}
            </p>

            {eyebrow && (
              <p className={`t-eyebrow mb-4 ${p.dim}`} style={{ color: "currentColor" }}>
                {eyebrow}
              </p>
            )}

            <h2 className={`t-headline ${p.text} text-balance mb-6 md:mb-7`}>
              {headline}
            </h2>

            {dek && (
              <p className={`t-dek mb-8 md:mb-10 ${p.dim}`} style={{ color: "currentColor" }}>
                {dek}
              </p>
            )}

            <div className={`space-y-5 md:space-y-6 ${p.body} text-[16px] md:text-[17.5px] leading-[1.65] max-w-xl`}>
              {paragraphs.map((para, i) => (
                <p key={i} className={i === 0 && paragraphs.length > 1 ? "t-dropcap" : ""}>
                  {para}
                </p>
              ))}
            </div>

            {cta && (
              <div className="mt-9 md:mt-11">
                <Link
                  to={cta.to}
                  className={`btn-letterpress ${tone === "paper" ? "btn-letterpress-cabernet" : "btn-letterpress-light"}`}
                >
                  ⌘ &nbsp; {cta.label}
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

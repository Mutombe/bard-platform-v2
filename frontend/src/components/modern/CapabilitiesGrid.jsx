import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@phosphor-icons/react";

/**
 * CapabilitiesGrid — four restrained capability cells.
 *
 * Each cell:
 *   • thin top hairline that turns navy on hover
 *   • compact eyebrow (number + label)
 *   • Bodoni Moda subhead
 *   • Source Serif body
 *   • subtle "→ Learn more" link at the bottom
 *
 * Sharp corners. No bento radius. No image. No flashy hover lift.
 * Used for "What we do" type sections — JPM canonical.
 */
export default function CapabilitiesGrid({ items = [], tone = "light" }) {
  const palette = tone === "dark"
    ? { card: "border-white/10", eyebrow: "text-orange-400", head: "text-white", body: "text-white/65", rule: "bg-white/15", link: "text-orange-400 hover:text-orange-300", hover: "hover:border-orange-500" }
    : { card: "border-line",     eyebrow: "text-orange-600", head: "text-ink",   body: "text-dim",      rule: "bg-line",      link: "text-navy-600 hover:text-orange-600", hover: "hover:border-navy-400" };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
      {items.map((it, i) => (
        <motion.article
          key={it.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          className={`relative p-7 md:p-9 ${tone === "dark" ? "bg-navy-600" : "bg-white"} group`}
        >
          {/* Top hairline that warms to orange on hover */}
          <span className={`absolute top-0 left-0 right-0 h-px ${palette.rule} group-hover:bg-orange-500 transition-colors`} />

          <p className={`t-mono ${palette.eyebrow} mb-4`}>
            {String(i + 1).padStart(2, "0")} &nbsp; / &nbsp; {it.label}
          </p>
          <h3 className={`font-display text-[22px] md:text-[24px] font-medium ${palette.head} leading-tight mb-3`}
              style={{ fontVariationSettings: '"opsz" 32' }}>
            {it.title}
          </h3>
          <p className={`text-[14.5px] ${palette.body} leading-relaxed mb-7 min-h-[72px]`}>
            {it.body}
          </p>
          {it.cta && (
            <Link to={it.cta.to} className={`inline-flex items-center gap-1.5 text-[13px] font-utility font-semibold ${palette.link}`} style={{ fontFamily: "var(--font-utility)" }}>
              {it.cta.label}
              <ArrowRightIcon size={11} weight="bold" />
            </Link>
          )}
        </motion.article>
      ))}
    </div>
  );
}

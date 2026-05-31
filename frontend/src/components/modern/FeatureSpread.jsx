import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@phosphor-icons/react";

/**
 * FeatureSpread — a restrained 6/6 split image+text section.
 *
 * Used to introduce major divisions (Wealth, Markets, the Group).
 * Layout: photograph on one side, text column on the other. Subtle
 * filter on photograph. Hairline border between text and image only
 * when side="right". No fancy gestures.
 */
export default function FeatureSpread({
  eyebrow,
  title,
  dek,
  body,
  image,
  cta,
  side = "left",
  tone = "light",
  caption,
}) {
  const palette = tone === "dark"
    ? { surface: "surface-navy",  eyebrow: "text-orange-400", head: "text-white",  body: "text-white/75", rule: "bg-orange-500", cta: "btn-outline-light" }
    : tone === "ink"
    ? { surface: "surface-ink",   eyebrow: "text-orange-400", head: "text-white",  body: "text-white/70", rule: "bg-orange-500", cta: "btn-outline-light" }
    : tone === "cream"
    ? { surface: "surface-cream", eyebrow: "text-orange-600", head: "text-ink",    body: "text-mute",     rule: "bg-orange-500", cta: "btn-navy" }
    : { surface: "surface-white", eyebrow: "text-orange-600", head: "text-ink",    body: "text-mute",     rule: "bg-orange-500", cta: "btn-navy" };

  const imageCols = side === "right" ? "lg:col-start-7 lg:col-end-13" : "lg:col-start-1 lg:col-end-7";
  const textCols  = side === "right" ? "lg:col-start-1 lg:col-end-7"  : "lg:col-start-7 lg:col-end-13";

  return (
    <section className={`${palette.surface}`}>
      <div className="container-wide py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-12 gap-x-10 gap-y-12 items-center">
          {/* Image */}
          <motion.figure
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`col-span-12 ${imageCols}`}
          >
            <div
              className="aspect-[5/6] bg-cover bg-center border border-line/40"
              style={{
                backgroundImage: `url(${image})`,
                filter: tone === "light" || tone === "cream"
                  ? "saturate(0.95) brightness(0.98) contrast(1.04)"
                  : "saturate(0.85) brightness(0.88) contrast(1.06)",
              }}
            />
            {caption && (
              <figcaption className={`t-caption mt-3 ${tone === "light" || tone === "cream" ? "text-dim" : "text-white/55"}`}>
                {caption}
              </figcaption>
            )}
          </motion.figure>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`col-span-12 ${textCols}`}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className={`block h-px w-10 ${palette.rule}`} />
              <p className={`t-eyebrow ${palette.eyebrow}`}>{eyebrow}</p>
            </div>
            <h2 className={`t-headline ${palette.head} text-balance mb-6`}>
              {title}
            </h2>
            {dek && (
              <p className={`t-dek ${palette.body} mb-7 max-w-xl`} style={{ color: "currentColor", opacity: 0.85 }}>
                {dek}
              </p>
            )}
            {body && (
              <div className={`space-y-5 ${palette.body} text-[16px] md:text-[17px] leading-[1.62] max-w-xl`}>
                {(Array.isArray(body) ? body : [body]).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}
            {cta && (
              <div className="mt-9">
                <Link to={cta.to} className={`btn ${palette.cta}`}>
                  {cta.label}
                  <ArrowRightIcon size={11} weight="bold" />
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

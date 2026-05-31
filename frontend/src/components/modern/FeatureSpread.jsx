import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@phosphor-icons/react";

/**
 * FeatureSpread — image+text split, mobile-safe.
 *
 * Mobile rules:
 *   • image full width of the column, 16:10 aspect
 *   • text full width, left-aligned
 *   • CTA stacks below with w-full sm:w-auto
 *   • no horizontal-overflow risk
 *
 * Desktop: lg+ swaps via `order` so the image sits left or right
 * depending on `side`, with .blend-fade mask bleeding into the text
 * column.
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
    ? { surface: "surface-navy",  eyebrow: "text-orange-400", head: "text-white",  body: "text-white/75", rule: "bg-orange-500", cta: "btn-outline-light", capt: "text-white/55", photo: "photo-dark" }
    : tone === "ink"
    ? { surface: "surface-ink",   eyebrow: "text-orange-400", head: "text-white",  body: "text-white/70", rule: "bg-orange-500", cta: "btn-outline-light", capt: "text-white/55", photo: "photo-dark" }
    : tone === "cream"
    ? { surface: "surface-cream", eyebrow: "text-orange-600", head: "text-ink",    body: "text-mute",     rule: "bg-orange-500", cta: "btn-navy",          capt: "text-dim",       photo: "photo-modern" }
    : { surface: "surface-white", eyebrow: "text-orange-600", head: "text-ink",    body: "text-mute",     rule: "bg-orange-500", cta: "btn-navy",          capt: "text-dim",       photo: "photo-modern" };

  const imageOrder = side === "right" ? "lg:order-2" : "lg:order-1";
  const textOrder  = side === "right" ? "lg:order-1" : "lg:order-2";
  const blend      = side === "right" ? "lg:blend-fade-left" : "lg:blend-fade-right";
  const textInset  = side === "right" ? "lg:pr-10 xl:pr-16" : "lg:pl-10 xl:pl-16";

  return (
    <section className={`${palette.surface} w-full`}>
      <div className="container-wide w-full py-20 md:py-28 lg:py-36">
        {/* gap-x-0 on mobile prevents the 11×40px gap-x-10 from making
            col-span-12 items wider than the 327px container. */}
        <div className="grid grid-cols-12 gap-x-0 lg:gap-x-10 gap-y-10 items-start w-full">

          {/* Image */}
          <motion.figure
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className={`col-span-12 lg:col-span-6 w-full m-0 ${imageOrder}`}
          >
            <div
              className={`w-full aspect-[16/10] lg:aspect-[5/6] bg-cover bg-center ${palette.photo} ${blend}`}
              style={{ backgroundImage: `url(${image})` }}
            />
            {caption && (
              <figcaption className={`t-caption mt-3 ${palette.capt}`}>
                {caption}
              </figcaption>
            )}
          </motion.figure>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`col-span-12 lg:col-span-6 w-full text-left ${textOrder} ${textInset}`}
          >
            <div className="flex items-center gap-3 mb-6 md:mb-7">
              <span className={`block h-px w-10 ${palette.rule} shrink-0`} />
              <p className={`t-eyebrow ${palette.eyebrow}`}>{eyebrow}</p>
            </div>
            <h2 className={`t-headline ${palette.head} text-balance text-left mb-6 md:mb-8`}>
              {title}
            </h2>
            {dek && (
              <p className="t-dek mb-8 md:mb-10 max-w-xl text-left"
                 style={{ color: tone === "light" || tone === "cream" ? "var(--color-dim)" : "rgba(255,255,255,0.7)" }}>
                {dek}
              </p>
            )}
            {body && (
              <div className={`space-y-5 ${palette.body} text-[16px] md:text-[17px] leading-[1.62] max-w-xl text-left`}>
                {(Array.isArray(body) ? body : [body]).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}
            {cta && (
              <div className="mt-9 md:mt-12 w-full">
                <Link to={cta.to} className={`btn ${palette.cta} w-full sm:w-auto justify-center`}>
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

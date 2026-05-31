import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { INSIGHT } from "../../data/images.js";

/**
 * ResearchGrid — JPM/BlackRock canonical insights cards.
 *
 * 3-column grid (1-col on mobile, 2-col on md). Each card: image at
 * 16:10, eyebrow + headline + 2-line summary + author/date in mono.
 * Sharp corners. Hairline border at the bottom of each card image.
 * No rounded radii. No card-lift shadow. Hover: image saturates,
 * headline shifts to navy.
 */
export default function ResearchGrid({ items = [], tone = "light" }) {
  const palette = tone === "dark"
    ? { card: "border-white/10", eyebrow: "text-orange-400", title: "text-white group-hover:text-orange-300", body: "text-white/65", meta: "text-white/45" }
    : { card: "border-line",     eyebrow: "text-orange-600", title: "text-ink group-hover:text-navy-600", body: "text-dim", meta: "text-faint" };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-12">
      {items.slice(0, 3).map((it, i) => (
        <motion.article
          key={it.slug}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link to={`/insights/${it.slug}`} className="block group">
            <div className="aspect-[16/10] overflow-hidden border-b border-line">
              <div
                className="w-full h-full bg-cover bg-center transition-[filter,transform] duration-700 group-hover:scale-[1.03]"
                style={{
                  backgroundImage: `url(${INSIGHT[it.slug] || it.image || ""})`,
                  filter: "saturate(0.92) brightness(0.98) contrast(1.04)",
                }}
              />
            </div>
            <p className={`t-mono mt-5 mb-3 ${palette.eyebrow}`}>{it.eyebrow}</p>
            <h3 className={`font-display text-[22px] md:text-[24px] font-medium leading-[1.18] mb-3 transition-colors ${palette.title}`}
                style={{ fontVariationSettings: '"opsz" 32' }}>
              {it.title}
            </h3>
            <p className={`text-[14.5px] leading-relaxed mb-5 ${palette.body}`}>
              {it.summary}
            </p>
            <p className={`t-mono ${palette.meta}`}>
              {it.author} &nbsp; · &nbsp; {it.reading_minutes} min read
            </p>
          </Link>
        </motion.article>
      ))}
    </div>
  );
}

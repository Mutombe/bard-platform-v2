import { motion } from "framer-motion";

/**
 * StatsBlock — JPM/BlackRock canonical "by the numbers" strip.
 *
 * Four columns separated by vertical hairlines (no card boxes). Each
 * column: big number in Bodoni Moda + tiny mono label + thin caption.
 * No hover effects, no animations beyond initial reveal.
 *
 *   12  │  40+  │   3    │  MMXXV
 *   ─── │  ───  │  ───   │  ───
 *   on  │  CORR │  Conti │  EST.
 *   the │  Coun │  nents │
 *   shelf│  tries│        │
 */
export default function StatsBlock({ stats = [], tone = "light" }) {
  const palette = tone === "dark"
    ? { wrap: "border-white/12", num: "text-white", label: "text-white/55", body: "text-white/75" }
    : { wrap: "border-line",     num: "text-ink",   label: "text-faint",   body: "text-dim" };

  return (
    <div className={`grid grid-cols-2 md:grid-cols-${Math.min(stats.length, 4)} divide-x ${palette.wrap.replace("border", "divide")} border-y ${palette.wrap}`}>
      {stats.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="px-6 md:px-9 py-10 md:py-14"
        >
          <p className={`font-display ${palette.num} leading-[0.9] tracking-[-0.02em]`}
             style={{ fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)", fontVariationSettings: '"opsz" 96', fontWeight: 500 }}>
            {s.value}
            {s.unit && (
              <span className="ml-1 align-baseline text-[0.4em] text-orange-500" style={{ fontVariationSettings: '"opsz" 28' }}>
                {s.unit}
              </span>
            )}
          </p>
          <p className={`t-mono mt-5 md:mt-6 ${palette.label}`}>
            {s.label}
          </p>
          {s.body && (
            <p className={`text-[13.5px] mt-3 leading-relaxed max-w-[260px] ${palette.body}`}>
              {s.body}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
}

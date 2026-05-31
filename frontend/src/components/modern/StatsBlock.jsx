import { motion } from "framer-motion";

/**
 * StatsBlock — JPM/BlackRock canonical "by the numbers" strip.
 *
 * Four columns separated by vertical hairlines (no card boxes). Each
 * column: big number in Bodoni Moda + mono label + thin caption.
 * Hairline borders top + bottom; vertical hairlines between columns.
 * Generous internal padding for white-space confidence.
 */
const COL_MAP = { 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-4", 5: "md:grid-cols-5" };

export default function StatsBlock({ stats = [], tone = "light" }) {
  const cols = COL_MAP[Math.min(stats.length, 5)] || "md:grid-cols-4";
  const palette = tone === "dark"
    ? { wrap: "border-white/15", divide: "divide-white/15", num: "text-white", label: "text-white/55", body: "text-white/75" }
    : { wrap: "border-line",     divide: "divide-line",     num: "text-ink",   label: "text-faint",   body: "text-dim" };

  return (
    <div className={`grid grid-cols-2 ${cols} md:divide-x ${palette.divide} border-y ${palette.wrap}`}>
      {stats.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="px-5 md:px-9 lg:px-12 py-10 md:py-16 lg:py-20"
        >
          <p className={`font-display ${palette.num} leading-[0.9] tracking-[-0.022em] break-words`}
             style={{ fontSize: "clamp(2rem, 5.5vw, 4.75rem)", fontVariationSettings: '"opsz" 96', fontWeight: 500 }}>
            {s.value}
            {s.unit && (
              <span className="ml-1 align-baseline text-[0.42em] text-orange-500" style={{ fontVariationSettings: '"opsz" 28' }}>
                {s.unit}
              </span>
            )}
          </p>
          <p className={`t-mono mt-6 md:mt-7 ${palette.label}`}>
            {s.label}
          </p>
          {s.body && (
            <p className={`text-[13.5px] mt-4 leading-relaxed max-w-[280px] ${palette.body}`}>
              {s.body}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
}

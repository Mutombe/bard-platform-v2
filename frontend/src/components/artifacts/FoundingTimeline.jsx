import { motion } from "framer-motion";
import SealStamp from "./SealStamp.jsx";

/**
 * FoundingTimeline — vertical institutional milestones.
 *
 * Pictet-annual-report style timeline. A central vertical hairline
 * with year markers and short event descriptions. Each major
 * milestone gets a small SealStamp. Each year is rendered in
 * old-style mono on the left of the line, with the event content
 * on the right.
 *
 * Used on /about, on /group, or as a home-page section showing the
 * institution's brief but proud history.
 */

const DEFAULT_MILESTONES = [
  {
    year: "2025",
    title: "Incorporated.",
    body: "Bard Santner Markets Inc registered in the Republic of Zimbabwe. CIPZ entity 42656A0252025.",
    sealed: true,
  },
  {
    year: "2025",
    title: "Capital markets desk opens.",
    body: "Treasury, FX and debt origination from Harare. First correspondent relationships executed.",
  },
  {
    year: "2026",
    title: "Bardiq Journal founded.",
    body: "The Group's editorial publication. Quarterly print, weekly online. The bank as a publishing institution.",
  },
  {
    year: "2026",
    title: "BSMFB licensed.",
    body: "Bard Santner Microfinance Bank operates under licence from the prudential authority. The flagship deposit-taking institution.",
    sealed: true,
  },
  {
    year: "2026",
    title: "International desk opens.",
    body: "Diaspora corridor desks across the UK, South Africa, the Gulf. Cross-border rails to nine African economies.",
  },
];

export default function FoundingTimeline({
  milestones = DEFAULT_MILESTONES,
  tone = "parchment",
}) {
  const palette = {
    parchment: {
      bg: "bg-parchment",
      year: "text-burgundy-500",
      heading: "text-navy-800",
      body: "text-bone-700",
      rule: "bg-burgundy-500/40",
      node: "bg-burgundy-500",
      label: "text-burgundy-500",
    },
    milk: {
      bg: "bg-milk",
      year: "text-orange-700",
      heading: "text-navy-700",
      body: "text-bone-600",
      rule: "bg-orange-500/40",
      node: "bg-orange-500",
      label: "text-orange-600",
    },
    ink: {
      bg: "bg-ink",
      year: "text-gold-300",
      heading: "text-white",
      body: "text-white/70",
      rule: "bg-gold-400/40",
      node: "bg-gold-400",
      label: "text-gold-300",
    },
  };
  const p = palette[tone] || palette.parchment;

  return (
    <section className={`${p.bg} relative overflow-hidden`}>
      <div className="container-bank py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 max-w-2xl"
        >
          <div className="flex items-center gap-3.5 mb-4">
            <span className={`block h-[2px] w-10 ${p.node}`} />
            <p className={`font-grotesk text-[11.5px] tracking-[0.24em] uppercase font-semibold ${p.label}`}>
              The institution, in five entries
            </p>
          </div>
          <h2 className={`display-lg ${p.heading}`}>
            How this came to be.
          </h2>
        </motion.div>

        <div className="relative max-w-3xl">
          {/* Vertical hairline */}
          <span className={`absolute left-[5rem] md:left-[7rem] top-2 bottom-2 w-[1px] ${p.rule}`} />

          {/* Milestones */}
          <ul className="space-y-12 md:space-y-14">
            {milestones.map((m, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative grid grid-cols-[5rem_1.75rem_1fr] md:grid-cols-[7rem_2rem_1fr] gap-3 md:gap-5"
              >
                {/* Year */}
                <p className={`font-mono-data text-[14px] md:text-[15px] font-semibold ${p.year} tracking-[0.04em] pt-1 tabular-nums`}>
                  {m.year}
                </p>

                {/* Node — circle on the hairline */}
                <div className="relative">
                  <span className={`absolute left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full ${p.node} ring-4 ring-current ring-opacity-10`} style={{ background: `var(--color-burgundy-500)` }} />
                </div>

                {/* Event */}
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className={`font-display text-[20px] md:text-[24px] font-medium ${p.heading} leading-tight tracking-[-0.01em] mb-2 md:mb-3`}
                        style={{ fontVariationSettings: '"SOFT" 38, "opsz" 56' }}>
                      {m.title}
                    </h3>
                    {m.sealed && (
                      <div className="shrink-0 -mt-1 hidden sm:block">
                        <SealStamp size={48} tone={tone === "ink" ? "gold" : "burgundy"} label={`§ ${m.year}`} initials="BS" rotate={-3 + (i % 3)} />
                      </div>
                    )}
                  </div>
                  <p className={`text-[14.5px] md:text-[15.5px] ${p.body} leading-relaxed max-w-xl`}>
                    {m.body}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>

          {/* Closing flourish — manuscript italic */}
          <div className="mt-14 md:mt-16 ml-[5.5rem] md:ml-[7.5rem] pt-6 border-t border-current border-opacity-15">
            <p className={`font-accent italic text-[15px] ${p.body} opacity-75 max-w-md`}>
              — The institution is still young. The work is to make sure that, eighty years from now, this entry on the timeline still reads as the beginning of a serious bank.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

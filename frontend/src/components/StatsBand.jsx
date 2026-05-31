import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal.jsx";

/**
 * Stats Band — the institutional gravitas module. Big numbers, restrained
 * captions, generous whitespace. Models the "Investec — 7 markets, 5,500
 * people" pattern and AfrAsia's market-data tiles.
 *
 * Layouts:
 *  • Mobile (<md):  2-col grid for 4 figures, with the 5th figure spanning
 *                   both columns so the bottom row reads as a deliberate
 *                   horizontal coda rather than an orphan tile.
 *  • Desktop (md+): 5 across, classic Lloyds rule.
 *
 * Numbers here are the institutional posture — directional, not audited.
 * Swap with real audited figures before launch.
 */
const FIGURES = [
  { value: "5",      unit: "",   label: "Institutions in the Group" },
  { value: "40",     unit: "+",  label: "Correspondent banking jurisdictions" },
  { value: "6",      unit: "",   label: "Branches and desks across three continents" },
  { value: "08:00",  unit: " CAT", label: "Day starts. Bankers reachable by 08:01" },
  { value: "MMXX",   unit: "",   label: "Roman numerals optional. The discipline isn't." },
];

export default function StatsBand() {
  return (
    <section className="bg-milk border-t-2 border-orange-500 border-b border-bone-200">
      <div className="container-bank py-14 md:py-24">
        <SectionReveal className="mb-10 md:mb-16 max-w-3xl">
          <div className="flex items-center gap-4 mb-5">
            <span className="h-[2px] w-12 bg-orange-500" />
            <p className="eyebrow eyebrow-accent">§ 04 · By the numbers</p>
          </div>
          <h2 className="display-xl text-navy-600 text-balance">
            The institution as a measurable thing.
          </h2>
        </SectionReveal>

        {/* Symmetry rule: every cell uses flex flex-col justify-between
            + min-height so the TOP of every number sits at the same y
            and the BOTTOM of every caption sits at the same y,
            regardless of caption line count.

            Mobile: 5th figure is col-span-2 so the bottom row is one
            wide cell carrying the closing caption, not an orphan. */}
        <div className="grid grid-cols-2 md:grid-cols-5 border-l border-bone-200 items-stretch">
          {FIGURES.map((f, i) => {
            const isFifth = i === 4;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative border-r border-bone-200 border-b border-bone-200 md:border-b-0 py-8 md:py-12 px-5 md:px-8 flex flex-col justify-between min-h-[180px] md:min-h-[260px] cursor-default transition-colors duration-300 hover:bg-orange-50/45 ${
                  isFifth ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <span className="absolute top-0 left-0 right-0 h-[2px] bg-orange-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                <p className="font-display text-[40px] md:text-[56px] lg:text-[64px] font-medium text-navy-600 leading-[0.95] tracking-[-0.03em] transition-colors duration-300 group-hover:text-navy-700">
                  {f.value}
                  {f.unit && (
                    <span className="text-orange-500 text-[0.55em] align-baseline ml-0.5 transition-colors duration-300 group-hover:text-orange-600">
                      {f.unit}
                    </span>
                  )}
                </p>
                <p className="text-[12.5px] md:text-[13.5px] text-bone-600 leading-relaxed max-w-[280px] mt-5 md:mt-6 transition-colors duration-300 group-hover:text-bone-700">
                  {f.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

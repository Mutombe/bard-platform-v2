import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HERO } from "../../data/images.js";

/**
 * Cover — the magazine cover page.
 *
 * Layout:
 *
 *   ┌──────────────────────────────────────────────────────────────┐
 *   │  NO. II                                  ANNO MMXXVI · HARARE│
 *   │  ──                                      ──                   │
 *   │                                                                │
 *   │  Bard Santner                          ⌗  the wax seal sits   │
 *   │     ─                                       in this margin     │
 *   │     The Annual Letter,                                        │
 *   │     Vol. II.                                                  │
 *   │                                                                │
 *   │     [ giant Bodoni Moda cover title, set across half the      │
 *   │       width, with one italic word for emphasis ]              │
 *   │                                                                │
 *   │  ┌────────────────────────────┐                               │
 *   │  │  Editorial photograph in   │   ❦  Inside this volume:      │
 *   │  │  near-monochrome — fills   │                                │
 *   │  │  roughly half the cover    │   i.   The Bank          pg.14│
 *   │  │  height, vignetted edges   │   ii.  The Counsel       pg.34│
 *   │  │                            │   iii. The Desk          pg.48│
 *   │  │                            │   iv.  The Almanac       pg.62│
 *   │  └────────────────────────────┘   v.   The House       pg. 92│
 *   │                                    vi.  Provenance     pg.106 │
 *   │                                                                │
 *   │  ──                          A modern African financial      │
 *   │  Cover photograph by …         institution.   ─                │
 *   └──────────────────────────────────────────────────────────────┘
 *
 * This is NOT a hero. There is no overlay text on the image. Nothing
 * slides or auto-advances. The image is a CAPTIONED EDITORIAL PLATE,
 * and the cover title is set in display type beside it. Like a New
 * Yorker cover with the table of contents printed in the margin.
 */
export default function Cover() {
  return (
    <section className="relative surface-paper">
      {/* Top folio strip — like the running head of a printed page */}
      <div className="page pt-6 md:pt-9 flex items-center justify-between border-b border-cabernet-500/15 pb-4">
        <span className="folio">No. II · The Annual Letter</span>
        <span className="folio">Anno MMXXVI · Harare</span>
      </div>

      <div className="page pt-10 md:pt-16 pb-14 md:pb-20">
        {/* Cover headline + editorial plate */}
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* LEFT — display headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 lg:col-span-7"
          >
            <p className="t-eyebrow text-cabernet-500 mb-4">From the Frontispiece</p>
            <h1 className="t-cover text-print text-balance"
                style={{ fontVariationSettings: '"opsz" 96' }}>
              A bank,{" "}
              <em className="font-italic italic font-medium" style={{ fontFamily: "var(--font-italic)" }}>
                signed
              </em>
              {" "}by the people who run it.
            </h1>
            <p className="t-dek mt-7 md:mt-9 max-w-xl">
              Banking, counsel, markets and editorial — anchored in Harare;
              built to international standards. The institutional letter,
              published twice a year.
            </p>

            {/* Letterpress CTA pair */}
            <div className="mt-9 md:mt-11 flex flex-wrap gap-3">
              <Link to="/personal" className="btn-letterpress btn-letterpress-cabernet">
                ⌘ &nbsp; Open a Current
              </Link>
              <Link to="/about" className="btn-letterpress">
                Read the manifesto
              </Link>
            </div>

            {/* Volume credit + signature */}
            <div className="mt-12 md:mt-16 flex items-end gap-6 flex-wrap">
              <div>
                <p className="t-eyebrow text-walnut mb-1">Editor in chief</p>
                <p className="font-italic italic text-[19px] md:text-[22px] text-cabernet-500"
                   style={{ textDecorationStyle: "wavy", textDecorationColor: "currentColor", textDecorationThickness: "1px", textDecoration: "underline", textUnderlineOffset: "10px" }}>
                  Senziwani Sikhosana
                </p>
                <p className="t-caption mt-1">Chief Executive Officer · 2 May 2026</p>
              </div>

              {/* The single wax-seal moment — brand orange shows up
                  HERE and almost nowhere else on the cover. */}
              <div className="ml-auto">
                <span className="wax-seal">BS</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — editorial plate + inside-this-volume TOC */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 lg:col-span-5"
          >
            {/* The plate. Single photograph, no overlay text. Italic
                caption underneath, like in a printed publication. */}
            <figure>
              <div
                className="aspect-[3/4] bg-cover bg-center relative overflow-hidden"
                style={{
                  backgroundImage: `url(${HERO.home})`,
                  filter: "saturate(0.36) brightness(0.86) contrast(1.08) sepia(0.08)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-cabernet-700/15 via-transparent to-transparent" />
              </div>
              <figcaption className="t-caption mt-3 flex items-start gap-3">
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-walnut shrink-0 mt-[3px]">Plate i.</span>
                <span>
                  The institution at first light. Cover photograph from
                  the high-rise district of Harare, looking east —
                  rendered in near-monochrome.
                </span>
              </figcaption>
            </figure>

            {/* Inside-this-volume — printed TOC in the margin */}
            <div className="mt-9 md:mt-11 border-t border-cabernet-500/25 pt-5">
              <p className="t-eyebrow text-cabernet-500 mb-4">
                ❦ &nbsp; Inside this volume
              </p>
              <ul className="space-y-2">
                {[
                  { roman: "i.",   label: "The Bank",     folio: "14" },
                  { roman: "ii.",  label: "The Counsel",  folio: "34" },
                  { roman: "iii.", label: "The Desk",     folio: "48" },
                  { roman: "iv.",  label: "The Almanac",  folio: "62" },
                  { roman: "v.",   label: "The House",    folio: "92" },
                  { roman: "vi.",  label: "Provenance",   folio: "106" },
                ].map((e) => (
                  <li key={e.roman} className="grid grid-cols-12 gap-3 items-baseline text-[15px]">
                    <span className="col-span-1 font-mono text-[10px] text-walnut tracking-[0.06em]">{e.roman}</span>
                    <span className="col-span-7 font-display text-print">{e.label}</span>
                    <span className="col-span-4 text-right font-mono text-[10.5px] text-walnut tabular-nums tracking-[0.08em] uppercase opacity-70">
                      pg. {e.folio}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom folio strip — running foot of the cover */}
      <div className="page py-4 border-t border-cabernet-500/15 flex items-center justify-between">
        <span className="t-caption">— A modern African financial institution.</span>
        <span className="folio">↓ Turn the page</span>
      </div>
    </section>
  );
}

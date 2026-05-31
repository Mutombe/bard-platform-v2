import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition.jsx";
import PageHero from "../components/PageHero.jsx";
import AdvisoryBand from "../components/AdvisoryBand.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";
import { HoneycombAside } from "../components/PageHeroAsides.jsx";
import { HERO, INSIGHT } from "../data/images.js";
import { INSIGHTS } from "../data/insights.js";
import { AUDIENCES } from "../data/audiences.js";

const FILTERS = [{ id: "all", label: "All" }, ...AUDIENCES.map((a) => ({ id: a.id, label: a.label }))];

export default function Insights() {
  const [filter, setFilter] = useState("all");
  const items = filter === "all" ? INSIGHTS : INSIGHTS.filter((i) => i.audience.includes(filter));
  const [lead, ...rest] = items;

  return (
    <PageTransition>
      <SEO
        title="Insights"
        description="Editorial commentary from Bard Santner. On the diaspora, the corridor, the deposit base, and the obligations a bank inherits the moment it opens its first account."
        path="/insights"
        jsonLd={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }])]}
      />
      <PageHero
        eyebrow="§ Insights"
        headline="Reading from the desk."
        body="Editorial commentary by the people who run the desks. Bardiq Journal carries the long form."
        image={HERO.insights}
        overlayTint="navy"
        variant="editorial"
        aside={<HoneycombAside />}
      />

      {/* Filter bar — mobile-aware. The six chips don't all fit a 375px
          row so we scroll horizontally with a right-edge fade for the
          scroll affordance. Sticky to the brand row top so the filter
          travels with the reader. */}
      <section className="bg-milk border-b border-bone-200 sticky top-[64px] md:top-[80px] z-30">
        <div className="relative">
          <div className="container-bank py-3 md:py-4 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`px-3.5 md:px-4 py-2 rounded-full text-[12.5px] md:text-[13px] font-medium transition-colors whitespace-nowrap ${
                    filter === f.id
                      ? "bg-navy-600 text-white"
                      : "bg-smoke text-navy-600 hover:bg-bone-200"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
          {/* Mobile-only right-edge fade — scroll affordance */}
          <div className="md:hidden pointer-events-none absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-milk to-transparent" />
        </div>
      </section>

      {/* Lead article */}
      {lead && (
        <section className="bg-milk section">
          <div className="container-bank">
            <Link to={`/insights/${lead.slug}`} className="group grid grid-cols-12 gap-7 md:gap-12 items-center">
              <div className="col-span-12 md:col-span-7">
                <div
                  className="aspect-[16/10] rounded-lg bg-cover bg-center bg-bone-200 overflow-hidden"
                  style={{
                    backgroundImage: `url(${INSIGHT[lead.slug] || lead.image || ""})`,
                    filter: "saturate(0.85) brightness(0.95)",
                  }}
                />
              </div>
              <div className="col-span-12 md:col-span-5">
                <p className="eyebrow eyebrow-accent mb-3">{lead.eyebrow} · Featured</p>
                <h2 className="display-lg text-navy-600 mb-4 md:mb-5 group-hover:text-orange-600 transition-colors">
                  {lead.title}
                </h2>
                <p className="text-[15px] md:text-[16px] text-bone-600 leading-relaxed mb-5 md:mb-6">
                  {lead.summary}
                </p>
                <p className="text-[12px] md:text-[12.5px] text-bone-500 flex flex-wrap items-center gap-x-3 gap-y-1.5">
                  <span>{lead.author}</span>
                  <span className="w-1 h-1 rounded-full bg-bone-400" />
                  <span>{lead.reading_minutes} min read</span>
                  <span className="w-1 h-1 rounded-full bg-bone-400" />
                  <span>{new Date(lead.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</span>
                </p>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Remaining articles — bento grid for symmetric variety.
          Pattern across a 12-col grid:
            Row 1   8 + 4    (large feature + small adjacent)
            Row 2   4 + 4 + 4 (three equal)
            Row 3   4 + 8    (small + large mirror of row 1)
          The grid mirrors itself across the middle row, so symmetry
          holds even with size variety. */}
      {rest.length > 0 && (
        <section className="bg-milk section">
          <div className="container-bank">
            <div className="grid grid-cols-12 gap-5 md:gap-6 auto-rows-fr">
              {rest.map((it, i) => {
                // Bento sizing — indices 0,5 are 8-col; 4,6 are 4-col;
                // 1,2,3 are 4-col equal middle row. Indices wrap if more
                // than 7 articles (rare); falls back to 6-col cards.
                const bentoCols = [
                  "md:col-span-8", // 0  large left
                  "md:col-span-4", // 1  small right
                  "md:col-span-4", // 2  middle row 1/3
                  "md:col-span-4", // 3  middle row 2/3
                  "md:col-span-4", // 4  middle row 3/3
                  "md:col-span-4", // 5  small left mirror
                  "md:col-span-8", // 6  large right mirror
                ];
                const span = bentoCols[i] || "md:col-span-6";
                // Wide cards (col-span-8) use a horizontal layout with
                // image on the left; standard cards stack image-on-top.
                const isWide = span === "md:col-span-8";
                return (
                  <motion.article
                    key={it.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className={`col-span-12 ${span} bank-card flex h-full ${isWide ? "md:flex-row flex-col" : "flex-col"}`}
                  >
                    <Link to={`/insights/${it.slug}`} className={`block overflow-hidden ${isWide ? "md:w-1/2" : ""}`}>
                      <div
                        className={`bg-cover bg-center bg-bone-200 ${isWide ? "aspect-[4/3] md:aspect-auto md:h-full" : "aspect-[16/10]"}`}
                        style={{
                          backgroundImage: `url(${INSIGHT[it.slug] || it.image || ""})`,
                          filter: "saturate(0.85) brightness(0.95)",
                        }}
                      />
                    </Link>
                    <div className={`p-6 md:p-9 flex-1 flex flex-col ${isWide ? "md:w-1/2" : ""}`}>
                      <p className="eyebrow eyebrow-accent mb-3">{it.eyebrow}</p>
                      <h3 className={`font-display text-navy-600 mb-3 leading-tight ${isWide ? "text-[20px] md:text-[28px]" : "text-[18px] md:text-[20px]"}`}>
                        <Link to={`/insights/${it.slug}`} className="hover:text-orange-600 transition-colors">
                          {it.title}
                        </Link>
                      </h3>
                      <p className="text-[14px] md:text-[14.5px] text-bone-600 leading-relaxed mb-4 md:mb-5 flex-1">
                        {it.summary}
                      </p>
                      <p className="text-[11.5px] md:text-[12px] text-bone-500 flex items-center gap-2">
                        <span>{it.author}</span>
                        <span className="w-1 h-1 rounded-full bg-bone-400" />
                        <span>{it.reading_minutes} min</span>
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <AdvisoryBand />
    </PageTransition>
  );
}

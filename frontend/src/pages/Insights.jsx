import { useState } from "react";
import PageTransition from "../components/PageTransition.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";

import PageHero from "../components/modern/PageHero.jsx";
import ResearchGrid from "../components/modern/ResearchGrid.jsx";
import ContactBand from "../components/modern/ContactBand.jsx";

import { HERO } from "../data/images.js";
import { INSIGHTS } from "../data/insights.js";
import { AUDIENCES } from "../data/audiences.js";

const FILTERS = [{ id: "all", label: "All Research" }, ...AUDIENCES.map((a) => ({ id: a.id, label: a.label }))];

export default function Insights() {
  const [filter, setFilter] = useState("all");
  const items = filter === "all" ? INSIGHTS : INSIGHTS.filter((i) => i.audience.includes(filter));

  return (
    <PageTransition>
      <SEO
        title="Research & Insights"
        description="Research and commentary by the people who run our books — on capital, credit, treasury, wealth and the African corridor. Bardiq Journal carries the long form."
        path="/insights"
        jsonLd={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }])]}
      />

      <PageHero
        crumb="Home · Insights"
        eyebrow="Research & Insights"
        title="From the desks that wrote them."
        dek="Commentary by the people who run our books. Quarterly print, weekly online — Bardiq Journal carries the long form."
        image={HERO.insights}
        primaryCTA={{ label: "Bardiq Journal", to: "/group/journal" }}
        caption="The reading room — research is signed."
      />

      <section className="surface-white sticky top-0 z-30 border-b border-line">
        <div className="container-wide py-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-2 rounded-[2px] text-[12.5px] font-utility font-semibold transition-colors whitespace-nowrap ${
                  filter === f.id ? "bg-navy-600 text-white" : "bg-cream text-graphite hover:bg-line"
                }`}
                style={{ fontFamily: "var(--font-utility)" }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-white">
        <div className="container-wide py-20 md:py-28 lg:py-36">
          {items.length > 0 ? (
            <ResearchGrid items={items.slice(0, 9)} />
          ) : (
            <div className="text-center py-20">
              <p className="t-eyebrow text-dim mb-4">No research</p>
              <h2 className="t-subhead text-ink mb-3">No research in this filter yet.</h2>
              <p className="t-dek text-dim max-w-md mx-auto">
                Bardiq Journal publishes quarterly; pieces in this category will appear in the next edition.
              </p>
            </div>
          )}
        </div>
      </section>

      <ContactBand />
    </PageTransition>
  );
}

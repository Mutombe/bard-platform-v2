import PageTransition from "../components/PageTransition.jsx";
import SEO, { organizationJsonLd, websiteJsonLd, breadcrumbJsonLd } from "../components/SEO.jsx";

import HeroSerious     from "../components/modern/HeroSerious.jsx";
import SectionHeader   from "../components/modern/SectionHeader.jsx";
import CapabilitiesGrid from "../components/modern/CapabilitiesGrid.jsx";
import StatsBlock      from "../components/modern/StatsBlock.jsx";
import FeatureSpread   from "../components/modern/FeatureSpread.jsx";
import ResearchGrid    from "../components/modern/ResearchGrid.jsx";
import ContactBand     from "../components/modern/ContactBand.jsx";

import { HERO, MARQUEE } from "../data/images.js";
import { INSIGHTS }      from "../data/insights.js";

/**
 * V2 home — institutional restraint.
 *
 * Page rhythm (JPM Private Bank / Goldman / BlackRock canon):
 *   1. Hero — restrained editorial photo + Bodoni headline + dek + CTAs
 *   2. By the numbers — 4-up hairline-divided stats strip
 *   3. What we do — 4 capability cells (sharp corners, hairline borders)
 *   4. Feature spread — Wealth division
 *   5. Feature spread — Markets & Treasury
 *   6. Research & Insights — 3-card editorial row
 *   7. Connect — dark navy contact band
 *
 * No carousel. No bento. No rounded fashion shapes. No flashy
 * gradients. Everything restrained.
 */
export default function Home() {
  return (
    <PageTransition>
      <SEO
        title="A modern African financial platform"
        description="Bard Santner Markets Inc. Banking, wealth management, capital markets and editorial — anchored in Harare, built to international standards."
        path="/"
        keywords={[
          "African bank", "Bard Santner", "BSMFB", "private banking Africa",
          "wealth management Harare", "trade finance Zimbabwe",
        ]}
        jsonLd={[organizationJsonLd(), websiteJsonLd(), breadcrumbJsonLd([{ name: "Home", path: "/" }])]}
      />

      {/* 1. Hero */}
      <HeroSerious />

      {/* 2. By the numbers */}
      <section className="surface-white">
        <div className="container-wide py-20 md:py-24">
          <SectionHeader
            eyebrow="By the Numbers"
            headline="The institution as a measurable thing."
            dek="A young institution measured by what it intends to be — directional, not audited."
          />
          <StatsBlock
            stats={[
              { value: "5",      label: "Institutions in the firm", body: "BSMFB, Markets Inc, Bard Loans, Golf, Bardiq Journal." },
              { value: "40", unit: "+", label: "Correspondent banking jurisdictions", body: "Cross-border rails through the African corridor." },
              { value: "3",      label: "Continents reached", body: "Harare flagship, Johannesburg, London diaspora desk." },
              { value: "MMXXV",  label: "Year founded", body: "Anno MMXXV · CIPZ entity 42656A0252025." },
            ]}
          />
        </div>
      </section>

      {/* 3. What we do — capability grid */}
      <section className="surface-cream">
        <div className="container-wide py-20 md:py-28">
          <SectionHeader
            eyebrow="What We Do"
            headline="A single institution, four disciplines."
            dek="Banking, wealth, capital markets and editorial — under one governance, with the same standard."
          />
          <CapabilitiesGrid
            items={[
              {
                label: "Banking",
                title: "Day-to-day banking, done seriously.",
                body: "Current accounts, savings, mortgages and the everyday infrastructure for households and growing businesses.",
                cta: { label: "Banking services", to: "/banking" },
              },
              {
                label: "Wealth",
                title: "Private counsel, written down.",
                body: "Discretionary mandates, advisory portfolios and structured credit for households of consequence.",
                cta: { label: "Wealth management", to: "/wealth" },
              },
              {
                label: "Markets",
                title: "The desk that runs the book.",
                body: "Treasury, FX, debt capital markets origination and trade finance for institutional treasurers.",
                cta: { label: "Markets & Treasury", to: "/markets" },
              },
              {
                label: "Editorial",
                title: "An institution that publishes.",
                body: "Bardiq Journal — quarterly print, weekly online. Research from the people who run the desks.",
                cta: { label: "Research & Insights", to: "/insights" },
              },
            ]}
          />
        </div>
      </section>

      {/* 4. Wealth feature spread */}
      <FeatureSpread
        eyebrow="Private Wealth"
        title="Patient capital. Patient counsel."
        dek="Bard Santner Wealth serves households of established consequence — discretionary mandates, advisory portfolios and the long counsel of an international house, anchored in Africa."
        body={[
          "Our wealth practice is named. The mandate is written down. The relationship is with a senior banker who carries it across decades — and the conversation continues until the principal asks it to end.",
        ]}
        image={MARQUEE.wealth}
        caption="Above — the wealth division, by appointment."
        cta={{ label: "Explore Wealth", to: "/wealth" }}
        side="left"
        tone="light"
      />

      <div className="container-wide"><hr className="hairline" /></div>

      {/* 5. Markets feature spread */}
      <FeatureSpread
        eyebrow="Markets & Treasury"
        title="The desk-grade infrastructure institutional treasurers expect."
        dek="Capital markets origination, treasury services, foreign exchange and trade finance — from the parent institution that holds the long correspondent-banking memory."
        body={[
          "Markets is a memory business. The desk's relationships with regulators, correspondents and counterparties are the asset. Bonds are originated, paper is syndicated, the day is reconciled. Tomorrow, the desk opens again.",
        ]}
        image={HERO.markets}
        caption="Above — end-of-day on the markets floor."
        cta={{ label: "Contact the desk", to: "/contact?audience=institutional" }}
        side="right"
        tone="cream"
      />

      {/* 6. Research & Insights */}
      <section className="surface-white">
        <div className="container-wide py-20 md:py-28">
          <SectionHeader
            eyebrow="Research & Insights"
            headline="From the desks that wrote them."
            dek="Editorial commentary by the people who run our books. Bardiq Journal carries the long form."
            viewAll={{ label: "View all research", to: "/insights" }}
          />
          <ResearchGrid items={INSIGHTS.slice(0, 3)} />
        </div>
      </section>

      {/* 7. Contact band */}
      <ContactBand />
    </PageTransition>
  );
}

import PageTransition from "../components/PageTransition.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";

import PageHero        from "../components/modern/PageHero.jsx";
import SectionHeader   from "../components/modern/SectionHeader.jsx";
import CapabilitiesGrid from "../components/modern/CapabilitiesGrid.jsx";
import FeatureSpread   from "../components/modern/FeatureSpread.jsx";
import ResearchGrid    from "../components/modern/ResearchGrid.jsx";
import ContactBand     from "../components/modern/ContactBand.jsx";

import { HERO } from "../data/images.js";
import { INSIGHTS } from "../data/insights.js";

export default function Markets() {
  const marketsInsights = INSIGHTS.filter((i) =>
    ["treasury-and-the-discipline-of-the-end-of-day", "credit-when-the-rate-is-the-conversation", "africa-and-the-cross-border-rail"].includes(i.slug)
  );

  return (
    <PageTransition>
      <SEO
        title="Markets & Treasury"
        description="Capital markets origination, treasury services, foreign exchange and trade finance — the desk-grade infrastructure institutional treasurers expect."
        path="/markets"
        jsonLd={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Markets", path: "/markets" }])]}
      />

      <PageHero
        crumb="Home · Markets"
        eyebrow="Markets & Treasury"
        title="The desk that runs the book."
        dek="Capital markets origination, treasury services, foreign exchange and trade finance. The desk-grade infrastructure on which a serious treasurer runs an institution."
        image={HERO.markets}
        primaryCTA={{ label: "Contact the desk", to: "/contact?audience=institutional" }}
        secondaryCTA={{ label: "Our markets team", to: "/leadership" }}
        caption="The markets desk, end-of-day."
      />

      <section className="surface-white">
        <div className="container-wide py-20 md:py-28 lg:py-36">
          <SectionHeader
            eyebrow="Capabilities"
            headline="Origination. Treasury. FX. Trade."
            dek="Four disciplines, one book. Each carries its own desk, named principal and audit trail. The institution that publishes its end-of-day."
          />
          <CapabilitiesGrid
            items={[
              { label: "Origination", title: "Debt Capital Markets", body: "Bond issuance, structured paper, syndication. We originate, place and clear the book — with the long correspondent memory.", cta: { label: "Debt capital markets", to: "/products/debt-capital-markets" } },
              { label: "Treasury", title: "Treasury Services", body: "Liquidity management, custody, daily cash positioning. The institution's reconciled-day discipline.", cta: { label: "Treasury services", to: "/products/treasury-services" } },
              { label: "FX", title: "Foreign Exchange", body: "Spot, forward, swap. With the audit trail correspondent banks expect. Major and EM crosses.", cta: { label: "Foreign exchange", to: "/products/foreign-exchange" } },
              { label: "Trade", title: "Trade Finance", body: "Letters of credit, guarantees, the African corridor. Lagos to Nairobi to Mombasa — banked.", cta: { label: "Trade finance", to: "/products/trade-finance" } },
            ]}
          />
        </div>
      </section>

      <FeatureSpread
        eyebrow="The Corridor"
        title="Lagos. Nairobi. Mombasa. Harare. Johannesburg. London."
        dek="The cross-border rails on which African capital moves to its work. Letters of credit, guarantees, FX settlement — across the corridor and out to the world."
        body={[
          "We bank the corridor not as a side product, but as the institution's first promise. African capital should not need to leave the continent to find a banker — and African enterprise should not need a London desk to settle a Lagos invoice.",
        ]}
        image={HERO.international}
        caption="The corridor, end-of-day reconciliation."
        cta={{ label: "Diaspora & International", to: "/international" }}
        side="right"
        tone="cream"
      />

      <section className="surface-white">
        <div className="container-wide py-20 md:py-28 lg:py-36">
          <SectionHeader
            eyebrow="From the Desk"
            headline="Research on treasury, credit and the corridor."
            viewAll={{ label: "All research", to: "/insights" }}
          />
          <ResearchGrid items={marketsInsights} />
        </div>
      </section>

      <ContactBand />
    </PageTransition>
  );
}

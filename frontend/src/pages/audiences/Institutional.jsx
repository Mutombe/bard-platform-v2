import PageTransition from "../../components/PageTransition.jsx";
import PageHero from "../../components/PageHero.jsx";
import QuickActionStrip from "../../components/QuickActionStrip.jsx";
import ProductGrid from "../../components/ProductGrid.jsx";
import InsightsRail from "../../components/InsightsRail.jsx";
import AdvisoryBand from "../../components/AdvisoryBand.jsx";
import TrustRibbon from "../../components/TrustRibbon.jsx";
import SEO, { breadcrumbJsonLd } from "../../components/SEO.jsx";
import { HERO } from "../../data/images.js";

import { QUICK_ACTIONS } from "../../data/quickActions.js";
import { productsForAudience } from "../../data/products.js";
import { insightsForAudience } from "../../data/insights.js";
import { findAudience } from "../../data/audiences.js";

export default function Institutional() {
  const audience = findAudience("institutional");
  return (
    <PageTransition>
      <SEO
        title="Corporate & Institutional Banking"
        description="Treasury services, debt and capital markets, custody, syndicated facilities and the originator-of-record discipline correspondent banks expect. Institutional banking on the standards of the international house."
        path="/institutional"
        keywords={["institutional banking", "treasury services Africa", "debt capital markets", "custody", "syndicated facilities", "Bard Santner Institutional"]}
        jsonLd={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Institutional", path: "/institutional" }])]}
      />
      <PageHero
        eyebrow={audience.eyebrow}
        headline="Treasury. Markets. Advisory."
        body="Liquidity, custody, debt origination and the correspondent banking memory institutional treasury requires."
        primaryCTA={{ to: "/products/treasury-services", label: "Treasury Services" }}
        secondaryCTA={{ to: "/contact?audience=institutional", label: "Speak to an institutional banker" }}
        image={HERO.institutional}
        overlayTint="ink"
      />
      <QuickActionStrip actions={QUICK_ACTIONS.institutional} tint="navy" />
      <ProductGrid
        eyebrow="§ Institutional products"
        heading="The desk-grade banking infrastructure of a serious treasurer."
        products={productsForAudience("institutional")}
        showAll={false}
      />
      <InsightsRail
        eyebrow="§ Reading for institutional clients"
        heading="From the desk that runs the book."
        items={insightsForAudience("institutional")}
      />
      <AdvisoryBand />
      <TrustRibbon />
    </PageTransition>
  );
}

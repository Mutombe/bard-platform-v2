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

export default function Business() {
  const audience = findAudience("business");
  return (
    <PageTransition>
      <SEO
        title="Business Banking"
        description="Operating accounts, working-capital facilities, trade rails and merchant tools. Business banking that works as hard as the businesses we serve."
        path="/business"
        keywords={["business banking", "SME banking", "working capital", "trade finance", "Bard Santner Business"]}
        jsonLd={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Business", path: "/business" }])]}
      />
      <PageHero
        eyebrow={audience.eyebrow}
        headline="Banking that works as hard as your business."
        body="Operating accounts, working capital and trade rails for the African enterprise."
        primaryCTA={{ to: "/products/business-account", label: "Open the Operating Account" }}
        secondaryCTA={{ to: "/products/working-capital", label: "Approach for Working Capital" }}
        image={HERO.business}
        overlayTint="navy"
      />
      <QuickActionStrip actions={QUICK_ACTIONS.business} tint="navy" />
      <ProductGrid
        eyebrow="§ Business products"
        heading="Built for the rhythm of a growing African enterprise."
        products={productsForAudience("business")}
        showAll={false}
      />
      <InsightsRail
        eyebrow="§ Reading for business clients"
        heading="Strategy, finance, and the long view."
        items={insightsForAudience("business")}
      />
      <AdvisoryBand />
      <TrustRibbon />
    </PageTransition>
  );
}

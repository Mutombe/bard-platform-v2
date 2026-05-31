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

export default function PrivateBanking() {
  const audience = findAudience("private");
  return (
    <PageTransition>
      <SEO
        title="Private Banking & Wealth"
        description="Relationship-led private banking. Discretionary wealth, structured credit, succession planning and patient counsel that survives more than one market cycle."
        path="/private-banking"
        keywords={["private banking", "wealth management Africa", "discretionary portfolio", "succession planning", "Bard Santner Private"]}
        jsonLd={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Private Banking", path: "/private-banking" }])]}
      />
      <PageHero
        eyebrow={audience.eyebrow}
        headline="Relationship-led banking. For lives with weight."
        body="Discretionary wealth, structured credit and succession. Built around your life, not our product list."
        primaryCTA={{ to: "/contact?audience=private", label: "Meet a private banker" }}
        secondaryCTA={{ to: "/products/wealth-management", label: "Explore Wealth Management" }}
        image={HERO.private}
        overlayTint="ink"
      />
      <QuickActionStrip actions={QUICK_ACTIONS.private} tint="navy" />
      <ProductGrid
        eyebrow="§ Private banking products"
        heading="Discretionary, advisory, and the long counsel in between."
        products={productsForAudience("private")}
        showAll={false}
      />
      <InsightsRail
        eyebrow="§ Reading for private clients"
        heading="On wealth, succession, and the second conversation."
        items={insightsForAudience("private")}
      />
      <AdvisoryBand />
      <TrustRibbon />
    </PageTransition>
  );
}

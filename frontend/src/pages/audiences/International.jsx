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

export default function International() {
  const audience = findAudience("international");
  return (
    <PageTransition>
      <SEO
        title="International & Diaspora Banking"
        description="An African platform with international reach. Diaspora accounts, FX, trade finance and the cross-border rails by which African capital meets the world."
        path="/international"
        keywords={["diaspora banking", "international banking Africa", "FX", "cross-border payments", "Bard Santner International"]}
        jsonLd={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "International", path: "/international" }])]}
      />
      <PageHero
        eyebrow={audience.eyebrow}
        headline="An African platform with international reach."
        body="Diaspora accounts, FX and cross-border trade. Correspondent banking across forty jurisdictions."
        primaryCTA={{ to: "/products/diaspora-account", label: "Open a Diaspora Account" }}
        secondaryCTA={{ to: "/products/foreign-exchange", label: "Foreign Exchange" }}
        image={HERO.international}
        overlayTint="navy"
      />
      <QuickActionStrip actions={QUICK_ACTIONS.international} tint="navy" />
      <ProductGrid
        eyebrow="§ International products"
        heading="The rails by which African capital meets the world."
        products={productsForAudience("international")}
        showAll={false}
      />
      <InsightsRail
        eyebrow="§ Reading for international clients"
        heading="On the diaspora, the corridor, and the cross-border discipline."
        items={insightsForAudience("international")}
      />
      <AdvisoryBand />
      <TrustRibbon />
    </PageTransition>
  );
}

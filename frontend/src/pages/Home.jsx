import PageTransition from "../components/PageTransition.jsx";
import HomeHeroCarousel from "../components/HomeHeroCarousel.jsx";
import QuickActionStrip from "../components/QuickActionStrip.jsx";
import AudienceTiles from "../components/AudienceTiles.jsx";
import StatsBand from "../components/StatsBand.jsx";
import WealthMarquee from "../components/WealthMarquee.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import GroupRibbon from "../components/GroupRibbon.jsx";
import InsightsRail from "../components/InsightsRail.jsx";
import AdvisoryBand from "../components/AdvisoryBand.jsx";
import TrustRibbon from "../components/TrustRibbon.jsx";
import SEO, { organizationJsonLd, websiteJsonLd, breadcrumbJsonLd } from "../components/SEO.jsx";

import TickerStrip from "../components/artifacts/TickerStrip.jsx";
import OrnamentDivider from "../components/artifacts/OrnamentDivider.jsx";
import MonogramPattern from "../components/artifacts/MonogramPattern.jsx";

import { QUICK_ACTIONS } from "../data/quickActions.js";
import { PRODUCTS } from "../data/products.js";
import { INSIGHTS } from "../data/insights.js";

/**
 * V2 home page — heavy art, brand artifacts, manuscript ornaments.
 *
 * Section grammar (each visible move):
 *   § 01  HERO CAROUSEL           three slides, full-bleed
 *         · TICKER STRIP          live institutional ticker below hero
 *   § 02  QUICK ACTIONS           four outline pills
 *   § 03  AUDIENCE TILES          5 cards (monogram pattern backdrop)
 *         · ORNAMENT DIVIDER
 *   § 04  STATS BAND              5 numbers (monogram pattern backdrop)
 *   § 05  WEALTH MARQUEE          Lloyds card moment — heritage gold
 *         · ORNAMENT DIVIDER
 *   § 06  FEATURED PRODUCTS       4-up editorial cards
 *         · ORNAMENT DIVIDER
 *   § 07  GROUP RIBBON            5 dark sub-brand cards
 *         · ORNAMENT DIVIDER
 *   § 08  INSIGHTS                3 article cards
 *   § 09  ADVISORY BAND           "Speak to a banker"
 *   § 10  TRUST RIBBON            4 pillars
 */
export default function Home() {
  const featuredProducts = PRODUCTS.filter((p) =>
    ["everyday-account", "business-account", "wealth-management", "trade-finance"].includes(p.slug)
  );

  return (
    <PageTransition>
      <SEO
        title="A modern African financial platform"
        description="Bard Santner Markets Inc. Banking, wealth management, trade finance, treasury and advisory."
        path="/"
        keywords={[
          "African bank", "Bard Santner", "BSMFB", "Bard Santner Microfinance Bank",
          "private banking Africa", "trade finance Zimbabwe", "diaspora banking",
        ]}
        jsonLd={[
          organizationJsonLd(),
          websiteJsonLd(),
          breadcrumbJsonLd([{ name: "Home", path: "/" }]),
        ]}
      />

      {/* § 01 — Hero carousel */}
      <HomeHeroCarousel />

      {/* Live ticker — Bloomberg-style scrolling band directly under
          the hero. Pauses on hover. Single most visible "this is a
          real institution" signal. */}
      <TickerStrip tone="ink" />

      {/* § 02 — Quick actions */}
      <QuickActionStrip actions={QUICK_ACTIONS.general} tint="navy" />

      {/* § 03 — Audience tiles (monogram backdrop) */}
      <div className="relative artifact-monogram-soft">
        <AudienceTiles heading="Banking experiences" />
      </div>

      {/* Ornament divider — visible publisher's mark between major
          sections. Heritage editorial rhythm. */}
      <div className="bg-milk">
        <div className="container-bank py-2 md:py-4">
          <OrnamentDivider ornament="§" />
        </div>
      </div>

      {/* § 04 — Stats band */}
      <div className="relative artifact-monogram-soft">
        <StatsBand />
      </div>

      {/* § 05 — Wealth marquee */}
      <WealthMarquee />

      <div className="bg-milk">
        <div className="container-bank py-2 md:py-4">
          <OrnamentDivider ornament="◆" tone="gold" />
        </div>
      </div>

      {/* § 06 — Featured products */}
      <ProductGrid
        eyebrow="§ 05 · Featured solutions"
        heading="Four ways to start."
        products={featuredProducts}
      />

      <div className="bg-milk">
        <div className="container-bank py-2 md:py-4">
          <OrnamentDivider ornament="§" />
        </div>
      </div>

      {/* § 07 — Group ribbon */}
      <GroupRibbon />

      <div className="bg-milk">
        <div className="container-bank py-2 md:py-4">
          <OrnamentDivider ornament="❦" />
        </div>
      </div>

      {/* § 08 — Insights */}
      <InsightsRail
        eyebrow="§ 06 · Insights"
        heading="Reading from the desk."
        items={INSIGHTS.slice(0, 3)}
      />

      {/* § 09 — Advisory */}
      <AdvisoryBand />

      {/* § 10 — Trust */}
      <TrustRibbon />
    </PageTransition>
  );
}

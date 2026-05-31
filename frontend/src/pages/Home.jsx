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
import ChapterMark from "../components/artifacts/ChapterMark.jsx";
import SignedLetter from "../components/artifacts/SignedLetter.jsx";
import PullQuote from "../components/artifacts/PullQuote.jsx";
import VintageMap from "../components/artifacts/VintageMap.jsx";
import FoundingTimeline from "../components/artifacts/FoundingTimeline.jsx";

import { QUICK_ACTIONS } from "../data/quickActions.js";
import { PRODUCTS } from "../data/products.js";
import { INSIGHTS } from "../data/insights.js";

/**
 * V2 home — "red pill" arrangement.
 *
 * Editorial chapter sequence rather than a card stack. Each chapter
 * opens with a giant Roman numeral, breathes with manuscript ornament
 * dividers, and lands in a named principal's voice. The Lloyds-card
 * rhythm of v1 is preserved underneath; the v2 layer is the
 * institutional editorial frame around it.
 *
 *   § I.    HERO + TICKER         Three-slide carousel, live ticker
 *   § II.   AUDIENCES             Chapter mark + AudienceTiles
 *   § III.  THE NUMBERS           Chapter mark + StatsBand
 *   ❝       PULL-QUOTE — Sikhosana ("A bank is signed by its people")
 *   § IV.   WEALTH                WealthMarquee in heritage gold
 *   § V.    PRODUCTS              ProductGrid
 *   § VI.   THE CORRIDOR          ChapterMark + VintageMap of Africa
 *   § VII.  THE GROUP             GroupRibbon
 *   ❝       PULL-QUOTE — Mthimkhulu (capital markets)
 *   § VIII. EDITORIAL             InsightsRail
 *   § IX.   FOUNDING              FoundingTimeline + SignedLetter
 *                                 from the CEO
 *   § X.    ADVISORY              AdvisoryBand
 *   § XI.   TRUST                 TrustRibbon
 */
export default function Home() {
  const featuredProducts = PRODUCTS.filter((p) =>
    ["everyday-account", "business-account", "wealth-management", "trade-finance"].includes(p.slug)
  );

  return (
    <PageTransition>
      <SEO
        title="A modern African financial platform"
        description="Bard Santner Markets Inc. Banking, wealth management, trade finance, treasury and advisory. Anchored in Africa. Built to international standards."
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

      {/* § I — Hero carousel + ticker */}
      <HomeHeroCarousel />
      <TickerStrip tone="ink" />

      {/* § II — Quick actions (small interlude before chapter II) */}
      <QuickActionStrip actions={QUICK_ACTIONS.general} tint="navy" />

      {/* Chapter II — Audiences */}
      <ChapterMark
        numeral="II."
        eyebrow="Chapter II · Audiences"
        headline="Five clear contexts. One bank."
        standfirst="The institution organises itself around the lives it banks. Personal, business, private, international, institutional — each with its own desk, its own banker, its own conversation."
        signature="— Choose the one your next conversation belongs in."
      />
      <div className="relative artifact-monogram-soft">
        <AudienceTiles heading="Banking experiences" />
      </div>

      <div className="bg-milk">
        <div className="container-bank py-2 md:py-4">
          <OrnamentDivider ornament="§" />
        </div>
      </div>

      {/* Chapter III — The numbers */}
      <ChapterMark
        numeral="III."
        eyebrow="Chapter III · The numbers"
        headline="The institution as a measurable thing."
        standfirst="Five figures. None inflated, none audited yet — the directional posture of a bank that intends to be counted, not the claim of one that has already been."
        tone="parchment"
      />
      <div className="relative artifact-monogram-soft">
        <StatsBand />
      </div>

      {/* Pull-quote interlude — Sikhosana */}
      <PullQuote
        quote="A bank is signed by its people. The CEO is named. The bankers are named. The complaint reaches a person, not a queue. Accountability cannot be abstract."
        authorName="Senziwani Sikhosana"
        tone="ink"
      />

      {/* Chapter IV — Wealth */}
      <WealthMarquee />

      <div className="bg-milk">
        <div className="container-bank py-2 md:py-4">
          <OrnamentDivider ornament="◆" tone="gold" />
        </div>
      </div>

      {/* Chapter V — Featured products */}
      <ProductGrid
        eyebrow="§ V · Featured solutions"
        heading="Four ways to start."
        products={featuredProducts}
      />

      {/* Chapter VI — The Corridor */}
      <ChapterMark
        numeral="VI."
        eyebrow="Chapter VI · The corridor"
        headline="Where we operate. And where we are next."
        standfirst="The bank built on cross-border rails. Harare flagship; offices and desks in Johannesburg, Cape Town, London; a corridor map drawn through Lagos, Mombasa, Nairobi."
        tone="parchment"
      />
      <section className="bg-parchment relative overflow-hidden">
        <div className="container-bank py-12 md:py-20">
          <div className="text-burgundy-500">
            <VintageMap />
          </div>
        </div>
      </section>

      <div className="bg-milk">
        <div className="container-bank py-2 md:py-4">
          <OrnamentDivider ornament="§" />
        </div>
      </div>

      {/* Chapter VII — The Group */}
      <GroupRibbon />

      {/* Pull-quote interlude — Mthimkhulu */}
      <PullQuote
        quote="Capital markets is a memory business. The work is making sure the desk's relationships with regulators, correspondents and counterparties are still good ten years from now."
        authorName="Alfred Mthimkhulu"
        tone="burgundy"
      />

      {/* Chapter VIII — Editorial */}
      <InsightsRail
        eyebrow="§ VIII · Editorial"
        heading="Reading from the desk."
        items={INSIGHTS.slice(0, 3)}
      />

      {/* Chapter IX — Founding timeline + signed letter */}
      <FoundingTimeline tone="parchment" />

      <SignedLetter
        authorName="Senziwani Sikhosana"
        authorRole="Chief Executive Officer"
        dateline="2 May 2026 · Harare"
        salutation="To the reader,"
        paragraphs={[
          "A bank is two things at once. A regulated, capital-bearing institution operating under licence. And a relationship — held by a name, between two people, over the longest horizon either of them can plan for. Most African banks choose one and ignore the other. We chose both, in the same building, signed by the same person.",
          "We are young. We are also serious. The discipline of the international house and the warmth of the African one are not in tension. They are the same job done well, and they are how we intend to be remembered.",
          "If you are reading this in 2026, you are reading the beginning of a serious bank. If you are reading it in 2096, I hope the institution has earned the time you are giving it.",
        ]}
        closing="Yours, in commerce,"
        tone="parchment"
      />

      {/* Chapter X — Advisory */}
      <AdvisoryBand />

      {/* Chapter XI — Trust */}
      <TrustRibbon />
    </PageTransition>
  );
}

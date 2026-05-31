import PageTransition from "../components/PageTransition.jsx";
import SEO, { organizationJsonLd, websiteJsonLd, breadcrumbJsonLd } from "../components/SEO.jsx";

import Cover       from "../components/zine/Cover.jsx";
import Spread      from "../components/zine/Spread.jsx";
import Letterpress from "../components/zine/Letterpress.jsx";

import { HERO, MARQUEE } from "../data/images.js";

/**
 * V2 home — the Annual Letter.
 *
 * Layout discipline:
 *   • Cover (magazine cover with TOC margin, NOT a hero carousel)
 *   • Spreads — asymmetric image-and-text pages, each numbered with
 *     a roman numeral. No card grids anywhere.
 *   • Letterpress — signed letter from the CEO mounted inside the
 *     cabernet plate.
 *   • Colophon — bottom-of-publication credit + imprint + door.
 *     (Footer is global; lives in App.jsx.)
 *
 * Photography is filtered down to near-monochrome with a slight sepia
 * lift, so the entire publication reads as if printed on aged paper.
 */
export default function Home() {
  return (
    <PageTransition>
      <SEO
        title="No. II — The Annual Letter"
        description="Bard Santner Markets Inc. A modern African financial institution. Banking, counsel, markets and editorial — anchored in Harare; built to international standards."
        path="/"
        keywords={[
          "African bank", "Bard Santner", "BSMFB", "private banking Africa",
          "trade finance Zimbabwe", "diaspora banking", "wealth management Harare",
        ]}
        jsonLd={[
          organizationJsonLd(),
          websiteJsonLd(),
          breadcrumbJsonLd([{ name: "Cover", path: "/" }]),
        ]}
      />

      {/* The cover */}
      <Cover />

      {/* I. The Bank — paper spread, image left */}
      <Spread
        numeral="I."
        folio="Chap. I · The Bank"
        eyebrow="The first instrument"
        headline="Every account on one shelf."
        dek="For households, for commerce, for the considered, for institutions. The bank is the most ordinary thing the institution does, and the most important."
        body={[
          "The flagship deposit-taking institution of the Bard Santner Group is Bard Santner Microfinance Bank, BSMFB. The bank's job is the boring one: hold the deposit as a deposit, extend credit on the conversation, and clear the day on the day. Done well, that is enough for a century.",
          "We are not building a banking app. We are building a bank, and the app is the way clients reach it. Same banker, same conversation, same standard — without the queue.",
        ]}
        image={HERO.banking}
        caption="At the counter — first light, Beverly Court, Harare."
        cta={{ label: "Open the chapter", to: "/banking" }}
        side="left"
        tone="paper"
      />

      {/* II. The Counsel — cabernet plate, image right */}
      <Spread
        numeral="II."
        folio="Chap. II · The Counsel"
        eyebrow="By appointment"
        headline="Patient capital. Patient counsel."
        dek="Discretionary mandates, advisory portfolios and the long counsel of an international house — anchored in Africa."
        body={[
          "Bard Santner Wealth is the division of the institution that meets clients at a longer horizon. Discretionary mandates, advisory portfolios, structured credit and the second conversation that every wealth relationship eventually arrives at.",
          "The relationship is with a named banker; the mandate is written down; the conversation continues until the principal asks it to end.",
        ]}
        image={MARQUEE.wealth}
        caption="The atrium — by appointment, on the upper floor."
        cta={{ label: "Open the counsel", to: "/wealth" }}
        side="right"
        tone="cabernet"
      />

      {/* III. The Desk — paper, image left */}
      <Spread
        numeral="III."
        folio="Chap. III · The Desk"
        eyebrow="The book is the book"
        headline="Treasury. Trade. Markets."
        dek="The capital-markets desk: liquidity, FX, debt-capital-markets origination and trade finance — the desk-grade infrastructure on which a serious treasurer runs an institution."
        body={[
          "Markets is a memory business. The desk's work is keeping its relationships with regulators, correspondents and counterparties intact across the years. Bonds are originated, paper is syndicated, the day is reconciled — and tomorrow the desk opens again at eight.",
          "We do not run the desk to look busy. We run it to be reachable.",
        ]}
        image={HERO.markets}
        caption="End-of-day. The book is reconciled."
        cta={{ label: "Approach the desk", to: "/markets" }}
        side="left"
        tone="paper"
      />

      {/* IV. The Almanac — print plate, image right */}
      <Spread
        numeral="IV."
        folio="Chap. IV · The Almanac"
        eyebrow="From the desk to the reader"
        headline="A bank that publishes."
        dek="Editorial commentary by the people who run the desks. Quarterly print, weekly online — Bardiq Journal carries the long form."
        body={[
          "An institution that does not publish what it thinks is, in our reading, an institution that does not know what it thinks. Bardiq Journal is the second discipline of this house: short reads online, long reads in print, signed by the people on the desks.",
          "Nothing we publish would survive a second reading we cannot answer for.",
        ]}
        image={HERO.insights}
        caption="The reading room — Gladstone's Library, by reference."
        cta={{ label: "Read the almanac", to: "/insights" }}
        side="right"
        tone="print"
      />

      {/* V. Letterpress — the CEO's letter */}
      <Letterpress
        authorName="Senziwani Sikhosana"
        authorRole="Chief Executive Officer"
        dateline="2 May 2026 · Harare"
        folio="Chap. V · A letter to the reader"
        salutation="To the reader,"
        paragraphs={[
          "A bank is two things at once. A regulated, capital-bearing institution operating under licence. And a relationship — held by a name, between two people, over the longest horizon either of them can plan for. Most African banks have chosen one and ignored the other. We chose both, in the same building, signed by the same person.",
          "If you are reading this in 2026, you are reading the beginning of a serious bank. If you are reading it in 2096, we hope the institution has earned the time you are giving it.",
        ]}
        closing="Yours, in commerce,"
      />
    </PageTransition>
  );
}

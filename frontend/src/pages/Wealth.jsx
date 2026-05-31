import PageTransition from "../components/PageTransition.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";

import PageHero        from "../components/modern/PageHero.jsx";
import SectionHeader   from "../components/modern/SectionHeader.jsx";
import CapabilitiesGrid from "../components/modern/CapabilitiesGrid.jsx";
import FeatureSpread   from "../components/modern/FeatureSpread.jsx";
import StatsBlock      from "../components/modern/StatsBlock.jsx";
import ResearchGrid    from "../components/modern/ResearchGrid.jsx";
import ContactBand     from "../components/modern/ContactBand.jsx";

import { HERO, MARQUEE } from "../data/images.js";
import { INSIGHTS }       from "../data/insights.js";

export default function Wealth() {
  const wealthInsights = INSIGHTS.filter((i) =>
    ["wealth-and-the-second-conversation", "the-quiet-case-for-a-deposit-base", "credit-when-the-rate-is-the-conversation"].includes(i.slug)
  ).slice(0, 3);

  return (
    <PageTransition>
      <SEO
        title="Wealth Management"
        description="Patient capital, patient counsel. Discretionary mandates, advisory portfolios and structured credit for households of established consequence — by Bard Santner Wealth."
        path="/wealth"
        jsonLd={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Wealth", path: "/wealth" }])]}
      />

      <PageHero
        crumb="Home · Wealth"
        eyebrow="Wealth Management"
        title="Patient capital. Patient counsel."
        dek="Discretionary mandates, advisory portfolios and structured credit for households of established consequence — anchored in Africa, written down with a senior banker who carries the relationship across decades."
        image={MARQUEE.wealth}
        primaryCTA={{ label: "Speak with a private banker", to: "/contact?audience=private" }}
        secondaryCTA={{ label: "Our wealth team", to: "/leadership" }}
        caption="The wealth division, by appointment."
      />

      <section className="surface-white">
        <div className="container-wide py-20 md:py-28 lg:py-36">
          <SectionHeader
            eyebrow="The Practice"
            headline="Three forms of counsel, one standard."
            dek="Discretionary, advisory, structured. Every mandate is named, written down, and revisited at a longer horizon than the market's."
          />
          <CapabilitiesGrid
            items={[
              { label: "Discretionary", title: "Discretionary Portfolios", body: "The full mandate, written down. We invest on your behalf to the policy we agreed; you receive the audit trail.", cta: { label: "Discretionary mandates", to: "/products/wealth-management" } },
              { label: "Advisory", title: "Advisory Mandates", body: "Counsel without delegation. We propose; you decide. Documented investment recommendations, executed under your direction.", cta: { label: "Advisory mandates", to: "/products/wealth-management" } },
              { label: "Structured", title: "Structured Credit", body: "Bespoke facilities for considered borrowers. Securitised paper, private placements, balance-sheet financing.", cta: { label: "Structured credit", to: "/products/structured-credit" } },
              { label: "Succession", title: "Succession & Family Office", body: "Multi-generational stewardship. The conversation that survives the principal — written into a deed, not held in conversation.", cta: { label: "Family office services", to: "/private-banking" } },
            ]}
          />
        </div>
      </section>

      <FeatureSpread
        eyebrow="Onboarding"
        title="A first conversation that costs and commits to nothing."
        dek="We sit with you to understand the horizon, the liquidity, the obligations and the comfort. From that conversation we agree, in writing, what we are doing and what we are not."
        body={[
          "The mandate is written by a senior banker who will carry the relationship. There is no relationship transfer halfway through; the named principal is the named principal. If they leave the firm, you are the first to know.",
        ]}
        image={HERO.private}
        caption="The first conversation — the discretionary mandate is signed at a second, after time to read."
        cta={{ label: "Schedule the first conversation", to: "/contact?audience=private" }}
        side="left"
        tone="cream"
      />

      <section className="surface-white">
        <div className="container-wide py-20 md:py-28 lg:py-36">
          <SectionHeader
            eyebrow="By the Numbers"
            headline="A firm written down."
            dek="We do not yet publish audited AUM. These are the institutional constants — the structural facts of the practice."
          />
          <StatsBlock
            stats={[
              { value: "USD",     label: "Reporting currency", body: "All mandates booked and reported in USD; receive in your operating currency." },
              { value: "3",  unit: "+",  label: "Generations as the horizon", body: "We work in family-office cycles, not quarterly ones." },
              { value: "1",       label: "Named principal per mandate", body: "Your banker is named; the mandate is signed by both of you." },
              { value: "MMXXV",   label: "The institution, founded", body: "CIPZ 42656A0252025. The firm under licence." },
            ]}
          />
        </div>
      </section>

      <section className="surface-white">
        <div className="container-wide py-20 md:py-28 lg:py-36">
          <SectionHeader
            eyebrow="From the Desk"
            headline="Research on capital, patience, and the second conversation."
            viewAll={{ label: "All research", to: "/insights" }}
          />
          <ResearchGrid items={wealthInsights} />
        </div>
      </section>

      <ContactBand />
    </PageTransition>
  );
}

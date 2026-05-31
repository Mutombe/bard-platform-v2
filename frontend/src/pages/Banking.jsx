import PageTransition from "../components/PageTransition.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";

import PageHero        from "../components/modern/PageHero.jsx";
import SectionHeader   from "../components/modern/SectionHeader.jsx";
import CapabilitiesGrid from "../components/modern/CapabilitiesGrid.jsx";
import FeatureSpread   from "../components/modern/FeatureSpread.jsx";
import ContactBand     from "../components/modern/ContactBand.jsx";

import { HERO } from "../data/images.js";

export default function Banking() {
  return (
    <PageTransition>
      <SEO
        title="Banking"
        description="Day-to-day banking — current accounts, savings, mortgages, business operating accounts, working capital and trade finance — for households and businesses across Africa."
        path="/banking"
        jsonLd={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Banking", path: "/banking" }])]}
      />

      <PageHero
        crumb="Home · Banking"
        eyebrow="Banking"
        title="Day-to-day banking, done seriously."
        dek="Current accounts, savings, mortgages, business operating accounts and the everyday infrastructure for households and growing businesses across Africa."
        image={HERO.banking}
        primaryCTA={{ label: "Open a Current account", to: "/products/everyday-account" }}
        secondaryCTA={{ label: "Speak with a banker", to: "/contact" }}
        caption="At the counter, Beverly Court, Harare."
      />

      <section className="surface-white">
        <div className="container-wide py-20 md:py-28 lg:py-36">
          <SectionHeader
            eyebrow="For Households"
            headline="The everyday instruments."
            dek="Salary in, bills out, debit card in pocket. The boring discipline done well, every day, by a banker you can name."
          />
          <CapabilitiesGrid
            items={[
              { label: "Current", title: "Current Account", body: "No monthly fee in the first twelve months. Debit card with contactless and biometric login. Mobile and internet banking included.", cta: { label: "Open a Current", to: "/products/everyday-account" } },
              { label: "Savings", title: "Savings Plus", body: "Tiered interest, compounded monthly. No minimum balance to open. Goal-based sub-pots for projects and trips.", cta: { label: "Open Savings Plus", to: "/products/savings-account" } },
              { label: "Mortgage", title: "Home Loan", body: "First-home, second-home, refinance. Twenty-year tenors. Fixed or variable, decided with a real banker.", cta: { label: "Home loans", to: "/products/home-loan" } },
              { label: "Diaspora", title: "Diaspora Account", body: "USD-denominated, opens remotely with KYC. Remittance corridor, low-friction settlement back home.", cta: { label: "Diaspora banking", to: "/international" } },
            ]}
          />
        </div>
      </section>

      <FeatureSpread
        eyebrow="For Commerce"
        title="Banking for the growing African enterprise."
        dek="Operating accounts, working capital and the trade rails the African corridor runs on. From the early-stage merchant to the institutional treasurer."
        body={[
          "We bank businesses with the same discipline we bank households — the conversation is named, the credit decision is the end of a conversation, and the relationship is held by a senior banker.",
        ]}
        image={HERO.business}
        caption="On the operating floor — Harare commerce."
        cta={{ label: "Business banking", to: "/business" }}
        side="left"
        tone="cream"
      />

      <ContactBand />
    </PageTransition>
  );
}

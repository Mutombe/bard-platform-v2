import PageTransition from "../components/PageTransition.jsx";
import PageHero from "../components/PageHero.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import AdvisoryBand from "../components/AdvisoryBand.jsx";
import TrustRibbon from "../components/TrustRibbon.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";
import { HERO } from "../data/images.js";
import { PRODUCTS } from "../data/products.js";

export default function Banking() {
  const accounts = PRODUCTS.filter((p) => ["Current accounts", "Savings", "Borrowing"].includes(p.category));
  const business = PRODUCTS.filter((p) => ["Operating accounts", "Credit", "Trade"].includes(p.category));
  return (
    <PageTransition>
      <SEO
        title="Banking"
        description="Every banking product on a single page. Current accounts, savings, mortgages, business operating accounts, working capital and trade finance — from personal banking through to institutional treasury."
        path="/banking"
        jsonLd={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Banking", path: "/banking" }])]}
      />
      <PageHero
        eyebrow="§ Chapter IV · The Bank"
        headline="Every instrument on one shelf."
        body="For households, for commerce, for the considered, for institutions — organised by what they do."
        primaryCTA={{ to: "/products/everyday-account", label: "Open the Current" }}
        secondaryCTA={{ to: "/contact", label: "Open a conversation" }}
        image={HERO.banking}
        overlayTint="navy"
      />
      <ProductGrid
        eyebrow="§ Personal banking"
        heading="For the everyday and the consequential."
        products={accounts}
        showAll={false}
      />
      <ProductGrid
        eyebrow="§ Business banking"
        heading="The accounts and credit a growing business actually needs."
        products={business}
        showAll={false}
      />
      <AdvisoryBand />
      <TrustRibbon />
    </PageTransition>
  );
}

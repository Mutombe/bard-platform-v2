import PageTransition from "../components/PageTransition.jsx";
import PageHero from "../components/PageHero.jsx";
import GroupRibbon from "../components/GroupRibbon.jsx";
import AdvisoryBand from "../components/AdvisoryBand.jsx";
import TrustRibbon from "../components/TrustRibbon.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";
import { HERO } from "../data/images.js";

export default function Group() {
  return (
    <PageTransition>
      <SEO
        title="The Group"
        description="Five institutions, one discipline. Bard Santner Microfinance Bank, Bard Santner Markets, Bard Loans, Bard Santner Golf and Bardiq Journal."
        path="/group"
        jsonLd={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Group", path: "/group" }])]}
      />
      <PageHero
        eyebrow="§ The Group"
        headline="Five institutions. One discipline."
        body="A financial platform, not a single product. Banking at the centre, four sister institutions around it."
        primaryCTA={{ to: "/group/bsmfb", label: "Bard Santner Microfinance Bank" }}
        secondaryCTA={{ to: "/about", label: "About the Group" }}
        image={HERO.group}
        overlayTint="ink"
      />
      <GroupRibbon vertical />
      <AdvisoryBand />
      <TrustRibbon />
    </PageTransition>
  );
}

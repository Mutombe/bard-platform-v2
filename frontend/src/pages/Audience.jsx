import PageTransition from "../components/PageTransition.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";

import PageHero from "../components/modern/PageHero.jsx";
import SectionHeader from "../components/modern/SectionHeader.jsx";
import CapabilitiesGrid from "../components/modern/CapabilitiesGrid.jsx";
import ResearchGrid from "../components/modern/ResearchGrid.jsx";
import ContactBand from "../components/modern/ContactBand.jsx";

import { findAudience } from "../data/audiences.js";
import { productsForAudience } from "../data/products.js";
import { insightsForAudience } from "../data/insights.js";
import { HERO } from "../data/images.js";

/**
 * Audience landing — single template for Personal / Business / Private
 * / International / Institutional. Driven by props.
 */
export default function Audience({ audienceId, image, ctas }) {
  const audience = findAudience(audienceId);
  const products = productsForAudience(audienceId).slice(0, 4);
  const insights = insightsForAudience(audienceId).slice(0, 3);

  return (
    <PageTransition>
      <SEO
        title={audience.label_full}
        description={audience.summary}
        path={audience.path}
        jsonLd={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: audience.label_full, path: audience.path }])]}
      />

      <PageHero
        crumb={`Home · ${audience.label_full}`}
        eyebrow={audience.label_full}
        title={audience.headline_promise}
        dek={audience.summary}
        image={image || HERO[audienceId] || HERO.home}
        primaryCTA={ctas?.primary}
        secondaryCTA={ctas?.secondary}
      />

      {products.length > 0 && (
        <section className="surface-white">
          <div className="container-wide py-20 md:py-28 lg:py-36">
            <SectionHeader
              eyebrow={`For ${audience.label}`}
              headline={`The instruments serving ${audience.label.toLowerCase()} clients.`}
              dek={`Carefully selected products and services for ${audience.eyebrow.toLowerCase()}.`}
              viewAll={{ label: "All banking products", to: "/banking" }}
            />
            <CapabilitiesGrid
              items={products.map((p) => ({
                label: p.eyebrow,
                title: p.name,
                body: p.summary,
                cta: { label: `Explore ${p.name}`, to: `/products/${p.slug}` },
              }))}
            />
          </div>
        </section>
      )}

      {insights.length > 0 && (
        <section className="surface-cream">
          <div className="container-wide py-20 md:py-28 lg:py-36">
            <SectionHeader
              eyebrow="Reading from the desk"
              headline={`Research for ${audience.label.toLowerCase()} clients.`}
              viewAll={{ label: "All research", to: "/insights" }}
            />
            <ResearchGrid items={insights} />
          </div>
        </section>
      )}

      <ContactBand />
    </PageTransition>
  );
}

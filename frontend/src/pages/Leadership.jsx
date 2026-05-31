import PageTransition from "../components/PageTransition.jsx";
import PageHero from "../components/PageHero.jsx";
import AdvisoryBand from "../components/AdvisoryBand.jsx";
import TrustRibbon from "../components/TrustRibbon.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";
import { HERO } from "../data/images.js";
import { LEADERSHIP } from "../data/leadership.js";
import { TriptychAside } from "../components/PageHeroAsides.jsx";

export default function Leadership() {
  return (
    <PageTransition>
      <SEO
        title="Leadership"
        description="The named leadership of Bard Santner Markets Inc. CEO Senziwani Sikhosana and Executive Directors Alfred Mthimkhulu and Tatenda Hungwe."
        path="/leadership"
        jsonLd={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Leadership", path: "/leadership" }])]}
      />
      <PageHero
        eyebrow="§ Leadership"
        headline="A bank is signed by its people."
        body="Named, accountable, reachable. The leadership of Bard Santner Markets Inc."
        image={HERO.leadership}
        overlayTint="navy"
        variant="editorial"
        aside={<TriptychAside />}
      />

      <section className="bg-milk section-lg">
        <div className="container-bank">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {LEADERSHIP.map((p) => (
              <article key={p.slug} className="bank-card p-0 flex flex-col h-full">
                <div
                  className="aspect-[4/5] bg-cover bg-center bg-bone-200"
                  style={{ backgroundImage: p.image ? `url(${p.image})` : undefined }}
                />
                <div className="p-6 md:p-10">
                  <p className="eyebrow eyebrow-accent mb-2 md:mb-3">{p.short_role}</p>
                  <h2 className="font-display text-[20px] md:text-[22px] text-navy-600 mb-1">{p.name}</h2>
                  <p className="text-[12.5px] md:text-[13px] text-bone-500 mb-4 md:mb-5">{p.role}</p>
                  <p className="text-[14px] md:text-[14.5px] text-bone-600 leading-relaxed">{p.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AdvisoryBand />
      <TrustRibbon />
    </PageTransition>
  );
}

import PageTransition from "../components/PageTransition.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";

import PageHero       from "../components/modern/PageHero.jsx";
import LeadershipCard from "../components/modern/LeadershipCard.jsx";
import ContactBand    from "../components/modern/ContactBand.jsx";

import { HERO } from "../data/images.js";
import { LEADERSHIP } from "../data/leadership.js";

export default function Leadership() {
  return (
    <PageTransition>
      <SEO
        title="Leadership"
        description="The named leadership of Bard Santner Markets Inc — CEO Senziwani Sikhosana and Executive Directors Alfred Mthimkhulu and Tatenda Hungwe."
        path="/leadership"
        jsonLd={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Leadership", path: "/leadership" }])]}
      />

      <PageHero
        crumb="About · Leadership"
        eyebrow="Leadership"
        title="The bank is signed by its people."
        dek="Named. Accountable. Reachable. The senior leadership of Bard Santner Markets Inc — each carrying the institution's standard into the desks they run."
        image={HERO.leadership}
        caption="Leadership of Bard Santner — the names that sign the institution."
      />

      <section className="surface-white">
        <div className="container-wide py-20 md:py-28 lg:py-36">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10">
            {LEADERSHIP.map((leader, i) => (
              <LeadershipCard key={leader.slug} leader={leader} index={i} />
            ))}
          </div>
        </div>
      </section>

      <ContactBand />
    </PageTransition>
  );
}

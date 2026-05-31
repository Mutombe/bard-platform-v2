import PageTransition from "../components/PageTransition.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";

import PageHero        from "../components/modern/PageHero.jsx";
import SectionHeader   from "../components/modern/SectionHeader.jsx";
import StatsBlock      from "../components/modern/StatsBlock.jsx";
import LeadershipCard  from "../components/modern/LeadershipCard.jsx";
import ContactBand     from "../components/modern/ContactBand.jsx";

import { HERO } from "../data/images.js";
import { LEADERSHIP } from "../data/leadership.js";

export default function About() {
  return (
    <PageTransition>
      <SEO
        title="About Bard Santner"
        description="Bard Santner Markets Inc — a modern African financial platform. Anchored in Harare; built to international standards. Banking, wealth, capital markets, editorial."
        path="/about"
        jsonLd={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])]}
      />

      <PageHero
        crumb="Home · About"
        eyebrow="About Bard Santner"
        title="An institution, signed by its people."
        dek="A modern African financial platform. Anchored in Harare; built to international standards. Banking, wealth, capital markets and editorial — under one governance, with the same standard."
        image={HERO.about}
        primaryCTA={{ label: "Meet our leadership", to: "/leadership" }}
        secondaryCTA={{ label: "Visit our offices", to: "/locations" }}
        caption="Bard Santner Markets Inc, 5th Floor Beverly Court, Harare."
      />

      {/* Manifesto */}
      <section className="surface-white">
        <div className="container-wide py-20 md:py-28 lg:py-36">
          <div className="grid grid-cols-12 gap-x-0 lg:gap-x-10 gap-y-10">
            <div className="col-span-12 lg:col-span-4">
              <div className="flex items-center gap-3 mb-5">
                <span className="block h-px w-10 bg-orange-500" />
                <p className="t-eyebrow text-orange-600">The Manifesto</p>
              </div>
              <h2 className="t-headline text-ink text-balance">
                What we measure ourselves against.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6 space-y-6 text-[16.5px] md:text-[17.5px] text-mute leading-[1.7] max-w-2xl">
              <p>
                A bank is two things at once. A regulated, capital-bearing institution operating under licence; and a relationship — held by a name, between two people, over the longest horizon either of them can plan for. Most African banks have chosen one and ignored the other.
              </p>
              <p>
                We chose both, in the same building, signed by the same person. The discipline of the international house and the warmth of the African one are not in tension. They are the same job done well.
              </p>
              <p>
                Correspondent banks should be able to verify our discipline and stop counting. Clients should be able to verify our warmth and stop comparing. Those two outcomes, held at the same standard, are the work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founding facts */}
      <section className="surface-cream">
        <div className="container-wide py-20 md:py-28 lg:py-36">
          <SectionHeader
            eyebrow="The Foundation"
            headline="The institution in five lines."
            dek="What's filed, where it's filed, and from where it operates."
          />
          <StatsBlock
            stats={[
              { value: "MMXXV", label: "Year of incorporation", body: "Anno 2025 · 9 May, under the laws of the Republic of Zimbabwe." },
              { value: "42656A", label: "CIPZ entity number", body: "Full registration: 42656A0252025. Supervised under prudential authority." },
              { value: "5",     label: "Institutions in the Group", body: "BSMFB, Markets Inc, Bard Loans, Bard Santner Golf, Bardiq Journal." },
              { value: "1",     label: "Standard, applied across all five", body: "International discipline; African warmth. The same standard signed by the same people." },
            ]}
          />
        </div>
      </section>

      {/* Leadership */}
      <section className="surface-white">
        <div className="container-wide py-20 md:py-28 lg:py-36">
          <SectionHeader
            eyebrow="Leadership"
            headline="Named. Accountable. Reachable."
            dek="Lloyds names Charlie Nunn. Investec names Fani Titi. AfrAsia names Thierry Vallet. We name ours."
            viewAll={{ label: "Full leadership", to: "/leadership" }}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-7 gap-y-10">
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

import PageTransition from "../components/PageTransition.jsx";
import PageHero from "../components/PageHero.jsx";
import GroupRibbon from "../components/GroupRibbon.jsx";
import AdvisoryBand from "../components/AdvisoryBand.jsx";
import TrustRibbon from "../components/TrustRibbon.jsx";
import SEO, { breadcrumbJsonLd, articleJsonLd } from "../components/SEO.jsx";
import { HERO } from "../data/images.js";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <PageTransition>
      <SEO
        title="About Bard Santner"
        description="Bard Santner Markets Inc. A modern African financial platform. The history, the ambition, and the obligation a bank inherits the moment it opens its first account."
        path="/about"
        jsonLd={[
          breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }]),
          articleJsonLd({
            headline: "About Bard Santner",
            description: "A modern African financial platform. Banking, markets, advisory.",
            url: "https://bardsantnerbank.com/about",
            image: "https://bardsantnerbank.com/logo.png",
            datePublished: "2026-05-30",
            author: "Bard Santner",
          }),
        ]}
      />

      <PageHero
        eyebrow="§ About"
        headline="A modern African financial platform."
        body="Bard Santner Markets Inc, Harare. The Microfinance Bank sits at the centre of a group spanning banking, markets, lending, sports finance and editorial."
        primaryCTA={{ to: "/group", label: "Meet the Group" }}
        secondaryCTA={{ to: "/leadership", label: "Leadership" }}
        image={HERO.about}
        overlayTint="navy"
      />

      {/* Manifesto */}
      <section className="bg-milk section">
        <div className="container-bank">
          <div className="grid grid-cols-12 gap-7 md:gap-10">
            <div className="col-span-12 md:col-span-4">
              <p className="eyebrow mb-3 md:mb-4">§ The standard</p>
              <h2 className="display-lg text-navy-600">
                What we measure ourselves against.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8 max-w-3xl space-y-5 md:space-y-6 text-[15.5px] md:text-[17px] text-bone-600 leading-relaxed">
              <p>
                A bank is two things at once. A regulated, capital-bearing institution
                operating under licence. And a relationship — held by a name, between
                two people, over the longest horizon either of them can plan for.
              </p>
              <p>
                Most African financial institutions choose one and ignore the other.
                The institution forgets the conversation. The conversation forgets
                the institution. Bard Santner exists because African banking deserves
                both, in the same building, signed by the same person.
              </p>
              <p>
                Our standard is the standard of the international house. Correspondent
                banks should be able to verify our discipline and stop counting. Our
                clients should be able to verify our warmth and stop comparing. The
                two are not in tension. They are the same job, done well.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The four obligations */}
      <section className="bg-milk section">
        <div className="container-bank">
          <p className="eyebrow text-center mb-4">§ The obligations of a bank</p>
          <h2 className="display-xl text-navy-600 text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <span className="md:hidden">Four obligations of a bank, from day one.</span>
            <span className="hidden md:inline">Four obligations a bank inherits the moment it opens its first account.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-8 max-w-4xl mx-auto">
            {[
              { n: "01", title: "To hold deposits as deposits.", body: "Customer money is customer money. It is not the bank's working capital. We treat it that way before, during and after the crisis we cannot yet name." },
              { n: "02", title: "To extend credit on the conversation.", body: "A credit decision is the end of a conversation, not the beginning. We sit with the borrower long enough to know whether the loan should be made before we run the model." },
              { n: "03", title: "To clear the day on the day.", body: "End-of-day discipline is the measure of an institution. Reconcile what cleared, identify what didn't, resolve before tomorrow. Daily. Without exception." },
              { n: "04", title: "To name the people.", body: "A bank is signed by its people. The CEO is named. The bankers are named. The complaint reaches a person, not a queue. Accountability cannot be abstract." },
            ].map((o) => (
              <div key={o.n}>
                <p className="font-mono text-[12px] text-orange-600 mb-2 md:mb-3">{o.n}</p>
                <h3 className="font-display text-[20px] md:text-[22px] text-navy-600 mb-2 md:mb-3 leading-tight">{o.title}</h3>
                <p className="text-[14px] md:text-[14.5px] text-bone-600 leading-relaxed">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GroupRibbon />
      <AdvisoryBand />
      <TrustRibbon />
    </PageTransition>
  );
}

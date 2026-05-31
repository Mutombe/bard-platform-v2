import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";

import PageHero from "../components/modern/PageHero.jsx";
import ContactBand from "../components/modern/ContactBand.jsx";

import { GROUP_ENTITIES } from "../data/group.js";
import { HERO } from "../data/images.js";
import { ArrowRightIcon } from "@phosphor-icons/react";

export default function Group() {
  return (
    <PageTransition>
      <SEO
        title="Our Firm"
        description="The Bard Santner Group — five institutions, one discipline. BSMFB, Markets Inc, Bard Loans, Bard Santner Golf and Bardiq Journal."
        path="/group"
        jsonLd={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Our Firm", path: "/group" }])]}
      />

      <PageHero
        crumb="Home · Our Firm"
        eyebrow="Our Firm"
        title="Five institutions. One discipline."
        dek="The Bard Santner Group is a financial platform, not a single product. The bank sits at the centre. Around it sit four sister institutions that share the standard."
        image={HERO.group}
        caption="The Bard Santner Group, signed by its leadership."
      />

      <section className="surface-white">
        <div className="container-wide py-20 md:py-28 lg:py-36">
          <ul className="space-y-px bg-line">
            {GROUP_ENTITIES.map((e, idx) => (
              <li key={e.id}>
                <Link to={e.href} className="block surface-white hover:bg-cream transition-colors">
                  <div className="container-wide py-10 md:py-14 grid grid-cols-12 gap-x-0 lg:gap-x-10 gap-y-5 items-start">
                    <div className="col-span-12 lg:col-span-3 flex items-start gap-4">
                      <span className="t-mono text-orange-600 mt-1">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="t-eyebrow text-dim mt-1">{e.role}</span>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                      <h2 className="font-display text-[28px] md:text-[34px] font-medium text-ink leading-tight mb-3"
                          style={{ fontVariationSettings: '"opsz" 48' }}>
                        {e.name}
                      </h2>
                      <p className="text-[15px] md:text-[16px] text-mute leading-relaxed max-w-xl">
                        {e.tagline}
                      </p>
                    </div>
                    <div className="col-span-12 lg:col-span-3 flex lg:justify-end">
                      <span className="inline-flex items-center gap-2 t-eyebrow text-navy-600">
                        {e.cta}
                        <ArrowRightIcon size={11} weight="bold" />
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactBand />
    </PageTransition>
  );
}

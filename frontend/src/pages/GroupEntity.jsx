import { useParams, Link } from "react-router-dom";
import PageTransition from "../components/PageTransition.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";

import PageHero from "../components/modern/PageHero.jsx";
import ContactBand from "../components/modern/ContactBand.jsx";

import { findEntity, GROUP_ENTITIES } from "../data/group.js";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import NotFound from "./NotFound.jsx";

export default function GroupEntity() {
  const { slug } = useParams();
  const e = findEntity(slug);
  if (!e) return <NotFound />;

  const others = GROUP_ENTITIES.filter((g) => g.id !== e.id);

  return (
    <PageTransition>
      <SEO
        title={e.name}
        description={`${e.tagline} ${e.body}`}
        path={`/group/${e.id}`}
        jsonLd={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Our Firm", path: "/group" }, { name: e.name, path: `/group/${e.id}` }])]}
      />

      <section className="surface-white border-b border-line">
        <div className="container-wide py-4">
          <Link to="/group" className="text-[12.5px] text-dim hover:text-navy-600 inline-flex items-center gap-1.5">
            <ArrowLeftIcon size={12} weight="bold" /> Back to Our Firm
          </Link>
        </div>
      </section>

      <PageHero
        crumb={`Our Firm · ${e.short}`}
        eyebrow={e.role}
        title={e.name}
        dek={e.tagline}
        primaryCTA={{ label: e.cta, to: "/contact" }}
        secondaryCTA={{ label: "Back to Our Firm", to: "/group" }}
      />

      {/* Body */}
      <section className="surface-white">
        <div className="container-wide py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <p className="text-[17.5px] md:text-[19px] text-mute leading-[1.72]">
              {e.body}
            </p>
          </div>
        </div>
      </section>

      {/* Sister institutions */}
      <section className="surface-cream">
        <div className="container-wide py-20 md:py-28">
          <div className="flex items-center gap-3 mb-5">
            <span className="block h-px w-10 bg-orange-500" />
            <p className="t-eyebrow text-orange-600">Sister institutions</p>
          </div>
          <h2 className="t-headline text-ink text-balance mb-12">
            Four others on the same shelf.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
            {others.map((o) => (
              <Link key={o.id} to={o.href} className="block surface-white p-7 md:p-9 hover:bg-cream transition-colors">
                <p className="t-mono text-orange-600 mb-3">{o.role}</p>
                <h3 className="font-display text-[20px] md:text-[22px] font-medium text-ink mb-3 leading-tight"
                    style={{ fontVariationSettings: '"opsz" 28' }}>
                  {o.short}
                </h3>
                <p className="text-[14px] text-dim leading-relaxed mb-5">{o.tagline}</p>
                <span className="text-[13px] font-utility font-semibold text-navy-600 inline-flex items-center gap-1.5"
                      style={{ fontFamily: "var(--font-utility)" }}>
                  {o.cta}
                  <ArrowRightIcon size={11} weight="bold" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactBand />
    </PageTransition>
  );
}

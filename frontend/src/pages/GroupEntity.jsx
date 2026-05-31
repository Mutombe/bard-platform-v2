import { useParams, Link } from "react-router-dom";
import PageTransition from "../components/PageTransition.jsx";
import AdvisoryBand from "../components/AdvisoryBand.jsx";
import TrustRibbon from "../components/TrustRibbon.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";
import { findEntity, GROUP_ENTITIES } from "../data/group.js";
import { ArrowRightIcon } from "@phosphor-icons/react";
import NotFound from "./NotFound.jsx";

export default function GroupEntity() {
  const { slug } = useParams();
  const e = findEntity(slug);
  if (!e) return <NotFound />;

  // Index of this entity within the Group so the hero shows "01 / 05",
  // matching the GroupRibbon card grammar.
  const idx = GROUP_ENTITIES.findIndex((g) => g.id === e.id);
  const total = GROUP_ENTITIES.length;
  const others = GROUP_ENTITIES.filter((g) => g.id !== e.id);

  return (
    <PageTransition>
      <SEO
        title={e.name}
        description={`${e.tagline} ${e.body}`}
        path={`/group/${e.id}`}
        jsonLd={[breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Group", path: "/group" },
          { name: e.name, path: `/group/${e.id}` },
        ])]}
      />

      {/* Hero — clean, no fake mark.
          Top accent rule (1px), header (index · role), name, tagline, body, CTAs. */}
      <section className="bg-ink text-white relative monogram-bg">
        <div
          className="absolute top-0 left-0 right-0 h-[1px]"
          style={{ background: e.accent }}
        />
        <div className="container-bank min-h-[calc(100svh-280px)] md:min-h-[calc(100svh-260px)] flex flex-col justify-center py-14 md:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <span className="font-mono text-[11px] tracking-[0.22em] text-white/35">
                {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              <span className="text-white/20">·</span>
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-orange-500">
                {e.role}
              </span>
            </div>
            <h1 className="display-hero text-white mb-6 md:mb-7 text-balance leading-[0.95]">
              {e.name}
            </h1>
            <div className="h-[1px] w-16 bg-white/20 mb-6 md:mb-7" />
            <p className="font-display text-[18px] md:text-[22px] text-white/85 mb-5 md:mb-7 max-w-2xl leading-snug">
              {e.tagline}
            </p>
            <p className="text-[15.5px] md:text-[17px] text-white/75 leading-relaxed max-w-2xl mb-8 md:mb-10">
              {e.body}
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <Link to="/contact" className="btn btn-primary w-full sm:w-auto justify-center">
                {e.cta} <ArrowRightIcon size={14} weight="bold" />
              </Link>
              <Link to="/group" className="btn btn-ghost-dark w-full sm:w-auto justify-center">
                Back to the Group
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sister institutions — same card grammar as GroupRibbon, light theme */}
      <section className="bg-milk section">
        <div className="container-bank">
          <p className="eyebrow mb-3 md:mb-4">§ Sister institutions</p>
          <h2 className="display-lg text-navy-600 mb-8 md:mb-12">
            Four others on the same shelf.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {others.map((o) => {
              const oIdx = GROUP_ENTITIES.findIndex((g) => g.id === o.id);
              return (
                <Link
                  key={o.id}
                  to={o.href}
                  className="group block bg-paper border border-bone-200 hover:border-bone-400 transition-colors flex flex-col"
                >
                  <div
                    className="h-[1px] w-full"
                    style={{ backgroundColor: o.accent }}
                  />
                  <div className="px-6 md:px-7 pt-6 md:pt-7 pb-4 md:pb-5">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[11px] tracking-[0.22em] text-bone-500">
                        {String(oIdx + 1).padStart(2, "0")}
                      </span>
                      <span className="text-bone-300">·</span>
                      <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-orange-600">
                        {o.role}
                      </span>
                    </div>
                  </div>
                  <div className="mx-6 md:mx-7 h-[1px] bg-bone-200" />
                  <div className="px-6 md:px-7 pt-5 md:pt-6 pb-6 md:pb-8 flex-1 flex flex-col">
                    <p className="font-display text-[18px] md:text-[20px] text-navy-600 mb-2 md:mb-3 leading-tight">
                      {o.short}
                    </p>
                    <p className="text-[13.5px] md:text-[14px] text-bone-600 leading-relaxed mb-5 md:mb-7 flex-1">
                      {o.tagline}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[12.5px] md:text-[13px] font-medium text-orange-600 group-hover:text-orange-700">
                      {o.cta} <ArrowRightIcon size={12} weight="bold" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <AdvisoryBand />
      <TrustRibbon />
    </PageTransition>
  );
}

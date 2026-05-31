import { useParams, Link } from "react-router-dom";
import PageTransition from "../components/PageTransition.jsx";
import SEO, { breadcrumbJsonLd, articleJsonLd } from "../components/SEO.jsx";

import ResearchGrid from "../components/modern/ResearchGrid.jsx";
import ContactBand from "../components/modern/ContactBand.jsx";

import { findInsight, INSIGHTS } from "../data/insights.js";
import { findLeaderByName } from "../data/leadership.js";
import { INSIGHT } from "../data/images.js";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import NotFound from "./NotFound.jsx";

export default function InsightDetail() {
  const { slug } = useParams();
  const it = findInsight(slug);
  if (!it) return <NotFound />;
  const leader = findLeaderByName(it.author);
  const others = INSIGHTS.filter((i) => i.slug !== it.slug).slice(0, 3);

  return (
    <PageTransition>
      <SEO
        title={it.title}
        description={it.summary}
        path={`/insights/${it.slug}`}
        type="article"
        image={INSIGHT[it.slug] || it.image}
        jsonLd={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/insights" },
            { name: it.title, path: `/insights/${it.slug}` },
          ]),
          articleJsonLd({
            headline: it.title,
            description: it.summary,
            url: `https://bardsantnerbank.com/insights/${it.slug}`,
            image: INSIGHT[it.slug] || `https://bardsantnerbank.com${it.image}`,
            datePublished: it.date,
            author: it.author,
          }),
        ]}
      />

      {/* Breadcrumb */}
      <section className="surface-white border-b border-line">
        <div className="container-wide py-4">
          <Link to="/insights" className="text-[12.5px] text-dim hover:text-navy-600 inline-flex items-center gap-1.5">
            <ArrowLeftIcon size={12} weight="bold" /> Back to Research & Insights
          </Link>
        </div>
      </section>

      {/* Article header */}
      <article className="surface-white">
        <header className="container-wide py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <p className="t-eyebrow text-orange-600 mb-6">{it.eyebrow}</p>
            <h1 className="t-hero text-ink mb-7 text-balance">
              {it.title}
            </h1>
            <p className="t-dek text-dim mb-9">
              {it.summary}
            </p>

            {/* Byline */}
            <div className="flex items-center justify-center gap-4 mb-5">
              {leader?.image ? (
                <img src={leader.image} alt={it.author} className="w-12 h-12 rounded-full object-cover border border-line" />
              ) : (
                <span className="w-12 h-12 rounded-full bg-navy-600 text-white flex items-center justify-center text-[14px] font-utility font-semibold"
                      style={{ fontFamily: "var(--font-utility)" }}>
                  {it.author.split(/\s+/).map(w => w[0]).join("").slice(0, 2)}
                </span>
              )}
              <div className="text-left">
                <p className="font-display text-[15px] font-medium text-ink"
                   style={{ fontVariationSettings: '"opsz" 28' }}>
                  {it.author}
                </p>
                {it.author_role && <p className="text-[12px] text-dim">{it.author_role}</p>}
              </div>
            </div>

            <p className="t-mono text-faint">
              {new Date(it.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
              &nbsp;·&nbsp; {it.reading_minutes} min read
            </p>
          </div>
        </header>

        {(INSIGHT[it.slug] || it.image) && (
          <div className="container-wide pb-14 md:pb-20">
            <div
              className="max-w-5xl mx-auto aspect-[16/9] bg-cover bg-center photo-modern"
              style={{ backgroundImage: `url(${INSIGHT[it.slug] || it.image})` }}
            />
          </div>
        )}

        {/* Body */}
        <div className="container-wide pb-20 md:pb-28">
          <div className="max-w-2xl mx-auto space-y-6 text-[17px] md:text-[18px] text-mute leading-[1.75]">
            <p className="text-[22px] md:text-[24px] text-ink font-display font-medium leading-snug"
               style={{ fontVariationSettings: '"opsz" 32' }}>
              This research entry is a short read. The long-form version, with citations and accompanying market data, is published in the next quarterly edition of Bardiq Journal.
            </p>
            <p>
              The work of a bank, like any work that touches people for decades, is partly the doing and partly the explaining. This page contains the explaining — short, signed, and dated. The doing happens at the desk.
            </p>
            <p>
              If this piece has prompted a question your banker should answer, the easiest thing is to bring it to them. Use the link below and a member of the team will follow up within one business day.
            </p>
            <div className="pt-6 flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="btn btn-navy w-full sm:w-auto justify-center">
                Speak with a banker
                <ArrowRightIcon size={11} weight="bold" />
              </Link>
              <Link to="/group/journal" className="btn btn-outline w-full sm:w-auto justify-center">
                Bardiq Journal
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related research */}
      <section className="surface-cream">
        <div className="container-wide py-20 md:py-28 lg:py-36">
          <div className="flex items-center gap-3 mb-10">
            <span className="block h-px w-10 bg-orange-500" />
            <p className="t-eyebrow text-orange-600">Continue reading</p>
          </div>
          <h2 className="t-headline text-ink text-balance mb-14">
            Other research from the desk.
          </h2>
          <ResearchGrid items={others} />
        </div>
      </section>

      <ContactBand />
    </PageTransition>
  );
}

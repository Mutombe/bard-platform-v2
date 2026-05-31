import { useParams, Link } from "react-router-dom";
import PageTransition from "../components/PageTransition.jsx";
import InsightsRail from "../components/InsightsRail.jsx";
import AdvisoryBand from "../components/AdvisoryBand.jsx";
import SEO, { breadcrumbJsonLd, articleJsonLd } from "../components/SEO.jsx";
import { findInsight, INSIGHTS } from "../data/insights.js";
import { findLeaderByName } from "../data/leadership.js";
import { INSIGHT } from "../data/images.js";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import NotFound from "./NotFound.jsx";

export default function InsightDetail() {
  const { slug } = useParams();
  const it = findInsight(slug);
  if (!it) return <NotFound />;
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
      <div className="bg-milk border-b border-bone-200">
        <div className="container-bank py-4">
          <Link to="/insights" className="text-[12.5px] text-bone-500 hover:text-navy-600 inline-flex items-center gap-1.5">
            <ArrowLeftIcon size={12} weight="bold" /> Back to Insights
          </Link>
        </div>
      </div>

      {/* Article hero */}
      <article className="bg-milk">
        <header className="container-bank pt-10 md:pt-20 pb-10 md:pb-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow eyebrow-accent mb-5 md:mb-6">{it.eyebrow}</p>
            <h1 className="display-xl text-navy-600 mb-6 md:mb-8 text-balance">
              {it.title}
            </h1>
            <p className="text-[16px] md:text-[20px] text-bone-600 leading-relaxed mb-6 md:mb-8">
              {it.summary}
            </p>
            {/* Byline — portrait avatar + author block. Centered for
                the article-header composition. */}
            <div className="flex items-center justify-center gap-3 mb-3">
              {(() => {
                const leader = findLeaderByName(it.author);
                return (
                  <span
                    className="w-10 h-10 rounded-full overflow-hidden bg-navy-600 text-white flex items-center justify-center text-[12px] font-medium tracking-[0.06em] font-display shrink-0 ring-2 ring-orange-500/60 ring-offset-2 ring-offset-milk"
                    aria-hidden="true"
                  >
                    {leader?.image ? (
                      <img src={leader.image} alt="" className="w-full h-full object-cover" />
                    ) : (
                      it.author.split(/\s+/).map((w) => w[0] || "").join("").slice(0, 2).toUpperCase()
                    )}
                  </span>
                );
              })()}
              <div className="text-left leading-tight">
                <p className="text-[13.5px] md:text-[14px] font-medium text-navy-600">{it.author}</p>
                {it.author_role && (
                  <p className="text-[12px] md:text-[12.5px] text-bone-500 mt-0.5">{it.author_role}</p>
                )}
              </div>
            </div>
            <p className="text-[12px] md:text-[12.5px] text-bone-500 flex items-center justify-center gap-x-3 gap-y-1.5 flex-wrap">
              <span>{new Date(it.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</span>
              <span className="w-1 h-1 rounded-full bg-bone-400" />
              <span>{it.reading_minutes} min read</span>
            </p>
          </div>
        </header>

        {(INSIGHT[it.slug] || it.image) && (
          <div className="container-bank pb-10 md:pb-12">
            <div
              className="max-w-5xl mx-auto aspect-[16/10] md:aspect-[16/9] rounded-xl bg-cover bg-center bg-bone-200 overflow-hidden"
              style={{
                backgroundImage: `url(${INSIGHT[it.slug] || it.image})`,
                filter: "saturate(0.85) brightness(0.95)",
              }}
            />
          </div>
        )}

        {/* Body — editorial placeholder. Real long-form lives in /group/journal */}
        <div className="container-bank pb-14 md:pb-24">
          <div className="max-w-2xl mx-auto prose-bank space-y-5 md:space-y-6 text-[15.5px] md:text-[17px] text-bone-700 leading-relaxed">
            <p className="text-[19px] md:text-[22px] text-navy-600 font-display font-medium leading-snug">
              This insight is a short read. The long-form version, with citations and
              accompanying market data, is published in the next quarterly edition of
              Bardiq Journal.
            </p>
            <p>
              The work of a bank, like any work that touches people for decades, is
              partly the doing and partly the explaining. This page contains the
              explaining — short, signed, and dated. The doing happens at the desk.
            </p>
            <p>
              If this piece has prompted a question your banker should answer, the
              easiest thing is to bring it to them. Use the button below and a member
              of the team will follow up within one business day.
            </p>
            <div className="pt-5 md:pt-6">
              <Link to="/contact" className="btn btn-navy w-full sm:w-auto justify-center">
                Open a conversation about this
              </Link>
            </div>
          </div>
        </div>
      </article>

      <InsightsRail
        eyebrow="§ Continue reading"
        heading="Other pieces from the desk."
        items={others}
      />

      <AdvisoryBand />
    </PageTransition>
  );
}

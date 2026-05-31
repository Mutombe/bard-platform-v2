import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { INSIGHT } from "../data/images.js";
import { findLeaderByName } from "../data/leadership.js";

// Two-letter initials for the author byline avatar — used as a graceful
// fallback when the author isn't in the leadership data and we don't
// have a portrait for them.
//   "Senziwani Sikhosana" → "SS"
//   "Alfred Mthimkhulu"   → "AM"
function initials(name = "") {
  return name
    .split(/\s+/)
    .map((w) => w[0] || "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/**
 * Editorial insights rail. Three to four article cards plus a "View all
 * insights" link. Used on the home page, on each audience landing, and
 * at the bottom of product pages.
 *
 * Models the editorial card pattern from Investec / Lloyds Insights.
 */
export default function InsightsRail({ heading, eyebrow, items = [] }) {
  return (
    <section className="section bg-milk border-t border-bone-200">
      <div className="container-bank">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-14 gap-5">
          <div>
            {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
            <h2 className="display-xl text-navy-600 text-balance max-w-2xl">
              {heading}
            </h2>
          </div>
          <Link to="/insights" className="hover-line text-[14px] font-medium text-orange-600 inline-flex">
            All entries in the Almanac →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-6">
          {items.slice(0, 3).map((it, i) => (
            <motion.article
              key={it.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={`/insights/${it.slug}`} className="block group">
                <div
                  className="aspect-[16/10] rounded-lg overflow-hidden bg-bone-200 bg-cover bg-center mb-5 md:mb-7"
                  style={{
                    backgroundImage: `url(${INSIGHT[it.slug] || it.image || ""})`,
                    filter: "saturate(0.85) brightness(0.95)",
                  }}
                />
                <p className="eyebrow eyebrow-accent mb-3 md:mb-4">{it.eyebrow}</p>
                <h3 className="font-display text-[20px] md:text-[26px] text-navy-600 leading-tight mb-3 md:mb-4 group-hover:text-orange-600 transition-colors">
                  {it.title}
                </h3>
                <p className="text-[14.5px] md:text-[15.5px] text-bone-600 leading-relaxed mb-5 md:mb-6">
                  {it.summary}
                </p>

                {/* Author byline — portrait avatar when we have the
                    leader's photograph, initials in navy as graceful
                    fallback. Orange ring + milk offset reads as a
                    real publishing-house byline. */}
                <AuthorByline
                  name={it.author}
                  role={it.author_role}
                  minutes={it.reading_minutes}
                />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Author byline avatar — shared between the InsightsRail (this file)
 * and InsightDetail (long-form view). When the author exists in the
 * leadership data, we render their portrait inside the avatar circle.
 * When they don't, we fall back to their two-letter initials over
 * navy. Either way the avatar is ringed in orange/60 against a milk
 * offset — the editorial-publication gesture.
 */
export function AuthorByline({ name, role, minutes }) {
  const leader = findLeaderByName(name);
  return (
    <div className="flex items-center gap-3">
      <span
        className="w-9 h-9 rounded-full overflow-hidden bg-navy-600 text-white flex items-center justify-center text-[11px] font-medium tracking-[0.06em] font-display shrink-0 ring-2 ring-orange-500/60 ring-offset-2 ring-offset-milk"
        aria-hidden="true"
      >
        {leader?.image ? (
          <img
            src={leader.image}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          initials(name)
        )}
      </span>
      <div className="leading-tight">
        <p className="text-[13px] md:text-[13.5px] font-medium text-navy-600">
          {name}
        </p>
        <p className="text-[11px] md:text-[11.5px] text-bone-500 mt-0.5 flex items-center gap-2">
          {role && <span>{role}</span>}
          {role && <span className="w-0.5 h-0.5 rounded-full bg-bone-400" />}
          <span>{minutes} min read</span>
        </p>
      </div>
    </div>
  );
}

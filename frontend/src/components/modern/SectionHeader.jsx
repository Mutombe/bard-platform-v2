/**
 * SectionHeader — JPM-canonical section opener.
 *
 * A restrained eyebrow + headline + optional dek + optional right-side
 * "view all" link. Two-line eyebrow uses an orange micro-rule on the
 * left, like Goldman / Morgan Stanley research-section openers.
 *
 *   ─── EYEBROW                              View All →
 *   Restrained section headline.
 *   Optional standfirst at dek size.
 */
import { Link } from "react-router-dom";

export default function SectionHeader({
  eyebrow,
  headline,
  dek,
  viewAll,
  align = "left",
  tone = "light",
}) {
  const palette = tone === "dark"
    ? { eyebrow: "text-orange-400", headline: "text-white", dek: "text-white/70", rule: "bg-orange-500", divider: "border-white/15", link: "text-orange-400 hover:text-orange-300" }
    : { eyebrow: "text-orange-600", headline: "text-ink",   dek: "text-dim",       rule: "bg-orange-500", divider: "border-line",       link: "text-navy-600 hover:text-orange-600" };

  return (
    <div className={`flex flex-col ${viewAll ? "md:flex-row md:items-end md:justify-between" : ""} gap-5 md:gap-8 mb-10 md:mb-14`}>
      <div className={`${align === "center" ? "text-center mx-auto" : ""} max-w-3xl`}>
        {eyebrow && (
          <div className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : ""}`}>
            <span className={`block h-px w-10 ${palette.rule}`} />
            <p className={`t-eyebrow ${palette.eyebrow}`}>{eyebrow}</p>
          </div>
        )}
        <h2 className={`t-headline ${palette.headline} text-balance`}>{headline}</h2>
        {dek && <p className={`t-dek mt-5 md:mt-6 ${palette.dek}`}>{dek}</p>}
      </div>
      {viewAll && (
        <Link to={viewAll.to} className={`btn-text shrink-0 ${palette.link}`} style={{ borderColor: "currentColor" }}>
          {viewAll.label}
          <span className="arrow">→</span>
        </Link>
      )}
    </div>
  );
}

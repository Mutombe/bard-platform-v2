import { Link } from "react-router-dom";

/**
 * SectionHeader — JPM-canonical section opener.
 *
 *   ─── EYEBROW                            View All →
 *
 *   Restrained section headline.
 *
 *   Optional standfirst at dek size.
 *
 * Generous bottom margin for white-space confidence.
 */
export default function SectionHeader({
  eyebrow,
  headline,
  dek,
  viewAll,
  align = "left",
  tone = "light",
}) {
  const palette = tone === "dark"
    ? { eyebrow: "text-orange-400", headline: "text-white", dek: "text-white/70", rule: "bg-orange-500", link: "text-orange-400 hover:text-orange-300" }
    : { eyebrow: "text-orange-600", headline: "text-ink",   dek: "text-dim",      rule: "bg-orange-500", link: "text-navy-600 hover:text-orange-600" };

  return (
    <div className={`flex flex-col ${viewAll ? "md:flex-row md:items-end md:justify-between" : ""} gap-6 md:gap-10 mb-14 md:mb-20`}>
      <div className={`${align === "center" ? "text-center mx-auto" : ""} max-w-3xl`}>
        {eyebrow && (
          <div className={`flex items-center gap-3 mb-5 ${align === "center" ? "justify-center" : ""}`}>
            <span className={`block h-px w-10 ${palette.rule}`} />
            <p className={`t-eyebrow ${palette.eyebrow}`}>{eyebrow}</p>
          </div>
        )}
        <h2 className={`t-headline ${palette.headline} text-balance`}>{headline}</h2>
        {dek && <p className={`t-dek mt-6 md:mt-7 ${palette.dek}`}>{dek}</p>}
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

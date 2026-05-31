import PageTransition from "../PageTransition.jsx";
import SEO, { breadcrumbJsonLd } from "../SEO.jsx";
import PageHero from "./PageHero.jsx";

export default function PolicyPage({
  title, path, description, lastUpdated, jurisdiction = "Zimbabwe",
  sections = [], contactEmail = "legal@bardsantner.com",
}) {
  return (
    <PageTransition>
      <SEO
        title={title}
        description={description}
        path={path}
        jsonLd={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: title, path }])]}
      />

      <PageHero
        crumb={`Home · Legal · ${title}`}
        eyebrow="Legal & Regulatory"
        title={title}
        dek={description}
      />

      <section className="surface-white">
        <div className="container-wide py-16 md:py-24">
          <div className="grid grid-cols-12 gap-x-0 lg:gap-x-10 gap-y-10">
            {/* Meta sidebar */}
            <aside className="col-span-12 lg:col-span-3">
              <div className="lg:sticky lg:top-32 space-y-6 text-[13px]">
                <div>
                  <p className="t-eyebrow text-dim mb-2">Last updated</p>
                  <p className="text-ink font-utility font-semibold" style={{ fontFamily: "var(--font-utility)" }}>{lastUpdated}</p>
                </div>
                <div>
                  <p className="t-eyebrow text-dim mb-2">Jurisdiction</p>
                  <p className="text-ink font-utility font-semibold" style={{ fontFamily: "var(--font-utility)" }}>{jurisdiction}</p>
                </div>
                <div>
                  <p className="t-eyebrow text-dim mb-2">Questions</p>
                  <a href={`mailto:${contactEmail}`} className="text-navy-600 hover:underline">{contactEmail}</a>
                </div>

                {sections.length > 1 && (
                  <div className="mt-10">
                    <p className="t-eyebrow text-dim mb-3">On this page</p>
                    <ul className="space-y-2 text-[13px]">
                      {sections.map((s, i) => (
                        <li key={i}>
                          <a href={`#section-${i + 1}`} className="text-mute hover:text-ink">
                            {String(i + 1).padStart(2, "0")} · {s.heading}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </aside>

            {/* Body */}
            <div className="col-span-12 lg:col-span-9 lg:col-start-4 space-y-12 max-w-3xl">
              {sections.map((s, i) => (
                <section key={i} id={`section-${i + 1}`}>
                  <p className="t-mono text-orange-600 mb-3">§ {String(i + 1).padStart(2, "0")}</p>
                  <h2 className="font-display text-[26px] md:text-[30px] font-medium text-ink mb-5 leading-tight"
                      style={{ fontVariationSettings: '"opsz" 48' }}>
                    {s.heading}
                  </h2>
                  <div className="space-y-4 text-[15px] text-mute leading-relaxed">
                    {s.body.split("\n\n").map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

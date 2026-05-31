import PageTransition from "./PageTransition.jsx";
import SEO, { breadcrumbJsonLd } from "./SEO.jsx";

/**
 * Shared layout for trust + legal pages. Editorial document feel: a left
 * meta column with last-updated, jurisdiction, contact-for-questions, and
 * a right column with the actual policy text in §-numbered sections.
 *
 * Modelled on Lloyds / Investec legal page formatting.
 */
export default function PolicyPage({
  title,
  path,
  description,
  lastUpdated,
  jurisdiction = "Zimbabwe",
  sections = [],
  contactEmail = "legal@bardsantner.com",
}) {
  return (
    <PageTransition>
      <SEO
        title={title}
        description={description}
        path={path}
        jsonLd={[breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: title, path },
        ])]}
      />

      <section className="bg-milk">
        <div className="container-bank pt-12 md:pt-24 pb-10 md:pb-12">
          <div className="max-w-4xl">
            <p className="eyebrow eyebrow-accent mb-3 md:mb-4">§ Legal & regulatory</p>
            <h1 className="display-xl text-navy-600 mb-5 md:mb-6">{title}</h1>
            <p className="text-[15.5px] md:text-[17px] text-bone-600 leading-relaxed max-w-3xl">
              {description}
            </p>
          </div>

          {/* Mobile-only meta strip — three horizontal pills carrying
              the same info the desktop sidebar carries. Sits below the
              hero copy on mobile so the body comes next, not after a
              tall sidebar block. */}
          <div className="md:hidden mt-8 grid grid-cols-3 gap-2 text-[12px]">
            <div className="rounded-md border border-bone-200 bg-paper px-3 py-2.5">
              <p className="eyebrow text-[10px] mb-1">Updated</p>
              <p className="text-navy-600 font-medium leading-tight">{lastUpdated}</p>
            </div>
            <div className="rounded-md border border-bone-200 bg-paper px-3 py-2.5">
              <p className="eyebrow text-[10px] mb-1">Region</p>
              <p className="text-navy-600 font-medium leading-tight">{jurisdiction}</p>
            </div>
            <a
              href={`mailto:${contactEmail}`}
              className="rounded-md border border-bone-200 bg-paper px-3 py-2.5 hover:border-orange-500 transition-colors"
            >
              <p className="eyebrow text-[10px] mb-1">Ask</p>
              <p className="text-orange-600 font-medium leading-tight truncate">{contactEmail}</p>
            </a>
          </div>
        </div>
      </section>

      <hr className="hairline" />

      <section className="bg-milk">
        <div className="container-bank section">
          <div className="grid grid-cols-12 gap-8 md:gap-12">
            {/* Desktop meta sidebar — hidden on mobile (replaced by the
                horizontal pill strip above in the hero section). */}
            <aside className="hidden md:block md:col-span-4 lg:col-span-3">
              <div className="md:sticky md:top-32">
                <div className="space-y-6 text-[13px]">
                  <div>
                    <p className="eyebrow mb-2">Last updated</p>
                    <p className="text-navy-600 font-medium">{lastUpdated}</p>
                  </div>
                  <div>
                    <p className="eyebrow mb-2">Jurisdiction</p>
                    <p className="text-navy-600 font-medium">{jurisdiction}</p>
                  </div>
                  <div>
                    <p className="eyebrow mb-2">Questions</p>
                    <a href={`mailto:${contactEmail}`} className="text-orange-600 hover:underline">
                      {contactEmail}
                    </a>
                  </div>
                </div>

                {sections.length > 1 && (
                  <div className="mt-10">
                    <p className="eyebrow mb-3">On this page</p>
                    <ul className="space-y-2 text-[13px]">
                      {sections.map((s, i) => (
                        <li key={i}>
                          <a href={`#section-${i + 1}`} className="text-bone-600 hover:text-navy-600 hover-line">
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
            <div className="col-span-12 md:col-span-8 lg:col-span-9 max-w-3xl space-y-10 md:space-y-12">
              {sections.map((s, i) => (
                <section key={i} id={`section-${i + 1}`}>
                  <p className="font-mono text-[11px] text-orange-600 mb-2 md:mb-3 tracking-[0.22em]">
                    § {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="font-display text-[22px] md:text-[28px] text-navy-600 mb-4 md:mb-5 leading-tight">
                    {s.heading}
                  </h2>
                  <div className="space-y-3.5 md:space-y-4 text-[14.5px] md:text-[15px] text-bone-700 leading-relaxed">
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

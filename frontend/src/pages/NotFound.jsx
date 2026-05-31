import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition.jsx";
import SEO from "../components/SEO.jsx";

/**
 * 404 — printed errata page.
 *
 * Treated like a missing page in a magazine: a small typographic
 * notice, the relevant folio numbers, and a return-to-cover.
 */
export default function NotFound() {
  return (
    <PageTransition>
      <SEO title="Errata · Page not found" path="/404" noindex />
      <section className="surface-paper min-h-[80vh] flex items-center">
        <div className="page-narrow text-center py-20">
          <p className="t-eyebrow text-cabernet-500 mb-5">§ Errata · pg. 0</p>
          <h1 className="t-headline text-print mb-7">
            This page is not in the publication.
          </h1>
          <p className="font-italic italic text-[18px] md:text-[20px] text-walnut mb-10 max-w-md mx-auto leading-relaxed">
            The folio you asked for has not been set, or the printer
            misnumbered the running head. Either way, the cover
            remains in print.
          </p>
          <Link to="/" className="btn-letterpress btn-letterpress-cabernet">
            ↺ &nbsp; Return to the cover
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}

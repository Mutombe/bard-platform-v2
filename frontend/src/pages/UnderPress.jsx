import { useParams, Link } from "react-router-dom";
import PageTransition from "../components/PageTransition.jsx";
import SEO from "../components/SEO.jsx";

/**
 * UnderPress — placeholder chapter page.
 *
 * v2 is being typeset chapter by chapter. Every chapter route that
 * does not yet have its own designed spread renders this page —
 * a printed-errata-style notice indicating the chapter is "under
 * press", with a folio number and a return-to-cover.
 *
 * This is deliberately public; it says "we are working on this"
 * with the same typographic seriousness as the rest of the
 * publication.
 */
export default function UnderPress({ folio = "—", chapter = "This chapter" }) {
  const params = useParams();
  return (
    <PageTransition>
      <SEO title={`${chapter} · Under press`} path={params.slug ? `/${params.slug}` : undefined} noindex />
      <section className="surface-paper min-h-[80vh] flex items-center">
        <div className="page-narrow text-center py-20">
          <p className="t-eyebrow text-cabernet-500 mb-5">
            ❦ &nbsp; {folio} · Under press
          </p>
          <h1 className="t-headline text-print mb-7">
            {chapter} is being typeset.
          </h1>
          <p className="font-italic italic text-[18px] md:text-[20px] text-walnut mb-10 max-w-md mx-auto leading-relaxed">
            The cover and the first chapters of the Annual Letter have
            been printed. This page is being composed at the press; it
            will be inserted into the bound edition shortly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/" className="btn-letterpress btn-letterpress-cabernet">
              ↺ &nbsp; Return to the cover
            </Link>
            <Link to="/contact" className="btn-letterpress">
              Open a conversation
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

import { useParams, Link } from "react-router-dom";
import PageTransition from "../components/PageTransition.jsx";
import SEO from "../components/SEO.jsx";

/**
 * UnderPress — placeholder section page (institutional voice).
 *
 * Replaces the previous "magazine typesetter" voice with a quieter
 * one suitable for the JPM-tier paradigm. Used for any route whose
 * bespoke page has not yet been built.
 */
export default function UnderPress({ section = "This section" }) {
  const params = useParams();
  return (
    <PageTransition>
      <SEO title={`${section} · Coming soon`} path={params.slug ? `/${params.slug}` : undefined} noindex />
      <section className="surface-white min-h-[78vh] flex items-center">
        <div className="container-text text-center py-24">
          <p className="t-eyebrow text-orange-600 mb-5">Coming soon</p>
          <h1 className="t-headline text-ink mb-7 text-balance">
            {section} is being prepared.
          </h1>
          <p className="t-dek text-dim mb-10 max-w-xl mx-auto">
            This section of bardsantner.com is under construction.
            The home page is live; we will publish the full page shortly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/" className="btn btn-navy">Return to home</Link>
            <Link to="/contact" className="btn btn-outline">Speak with a banker</Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

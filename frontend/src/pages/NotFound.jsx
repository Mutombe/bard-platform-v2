import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition.jsx";
import SEO from "../components/SEO.jsx";

export default function NotFound() {
  return (
    <PageTransition>
      <SEO title="Page not found" path="/404" noindex />
      <section className="surface-white min-h-[78vh] flex items-center">
        <div className="container-text text-center py-24">
          <p className="t-eyebrow text-orange-600 mb-5">Error · 404</p>
          <h1 className="t-headline text-ink mb-7 text-balance">
            The page you requested could not be located.
          </h1>
          <p className="t-dek text-dim mb-10 max-w-xl mx-auto">
            The link may be out of date, the page may have moved, or the URL may
            contain a typographic error. Please return to the home page or contact us.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/" className="btn btn-navy">Return to home</Link>
            <Link to="/contact" className="btn btn-outline">Contact us</Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

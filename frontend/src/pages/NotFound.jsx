import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition.jsx";
import SEO from "../components/SEO.jsx";
import Monogram from "../components/Monogram.jsx";

export default function NotFound() {
  return (
    <PageTransition>
      <SEO title="Page not found" description="The page you were looking for could not be found." path="/404" noindex />
      <section className="min-h-[70vh] bg-milk flex items-center">
        <div className="container-bank text-center max-w-xl mx-auto py-14 md:py-20">
          <Monogram size={48} color="var(--color-orange-500)" className="mx-auto mb-6 md:mb-8 md:!h-14 md:!w-14" />
          <p className="eyebrow eyebrow-accent mb-3 md:mb-4">§ 404</p>
          <h1 className="display-xl text-navy-600 mb-5 md:mb-6">
            We could not find that page.
          </h1>
          <p className="text-[15px] md:text-[16px] text-bone-600 mb-8 md:mb-10 leading-relaxed">
            The link may be out of date, the page may have moved, or the URL may have a typo.
            Either way: the door is still open.
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center gap-3">
            <Link to="/" className="btn btn-primary w-full sm:w-auto justify-center">Back to home</Link>
            <Link to="/contact" className="btn btn-ghost-light w-full sm:w-auto justify-center">Get in touch</Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

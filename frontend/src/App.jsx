import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Component } from "react";

import NavSerious    from "./components/modern/NavSerious.jsx";
import FooterSerious from "./components/modern/FooterSerious.jsx";
import ScrollToTop   from "./components/ScrollToTop.jsx";

import Home       from "./pages/Home.jsx";
import NotFound   from "./pages/NotFound.jsx";
import UnderPress from "./pages/UnderPress.jsx";

class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error, info) { console.error("Bard Santner caught:", error, info); }
  render() {
    if (this.state.hasError) {
      return (
        <div className="surface-white min-h-[60vh] flex items-center justify-center p-10 text-center">
          <div>
            <p className="t-eyebrow text-orange-600 mb-3">Service Interruption</p>
            <h1 className="t-headline text-ink mb-5">An unexpected error has occurred.</h1>
            <p className="t-dek text-dim mb-8 max-w-md mx-auto">
              The fault is on our side. Please refresh, or return home and try again.
            </p>
            <button onClick={() => window.location.reload()} className="btn btn-navy">Refresh</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <NavSerious />

      <main>
        <ErrorBoundary>
          <AnimatePresence mode="popLayout">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />

              {/* Sections under construction — institutional voice */}
              <Route path="/banking"          element={<UnderPress section="Banking" />} />
              <Route path="/wealth"           element={<UnderPress section="Wealth Management" />} />
              <Route path="/markets"          element={<UnderPress section="Markets & Treasury" />} />
              <Route path="/insights"         element={<UnderPress section="Research & Insights" />} />
              <Route path="/insights/:slug"   element={<UnderPress section="This research entry" />} />
              <Route path="/group"            element={<UnderPress section="Our Firm" />} />
              <Route path="/group/:slug"      element={<UnderPress section="This institution of the firm" />} />
              <Route path="/about"            element={<UnderPress section="About Bard Santner" />} />
              <Route path="/leadership"       element={<UnderPress section="Leadership" />} />
              <Route path="/locations"        element={<UnderPress section="Office Locations" />} />
              <Route path="/contact"          element={<UnderPress section="Contact Us" />} />
              <Route path="/products/:slug"   element={<UnderPress section="This product page" />} />
              <Route path="/personal"         element={<UnderPress section="For You — Personal Banking" />} />
              <Route path="/business"         element={<UnderPress section="For Business" />} />
              <Route path="/private-banking"  element={<UnderPress section="Private Banking" />} />
              <Route path="/international"    element={<UnderPress section="Diaspora & International" />} />
              <Route path="/institutional"    element={<UnderPress section="Institutional Banking" />} />
              <Route path="/online-banking"   element={<UnderPress section="Online Banking" />} />
              <Route path="/login"            element={<UnderPress section="Sign In" />} />
              <Route path="/app"              element={<UnderPress section="Banking app preview" />} />
              <Route path="/security"         element={<UnderPress section="Security Centre" />} />
              <Route path="/legal"            element={<UnderPress section="Legal" />} />
              <Route path="/privacy"          element={<UnderPress section="Privacy" />} />
              <Route path="/cookies"          element={<UnderPress section="Cookies" />} />
              <Route path="/terms"            element={<UnderPress section="Terms of Use" />} />
              <Route path="/regulatory"       element={<UnderPress section="Regulatory Information" />} />
              <Route path="/accessibility"    element={<UnderPress section="Accessibility" />} />
              <Route path="/complaints"       element={<UnderPress section="Complaints" />} />
              <Route path="/careers"          element={<UnderPress section="Careers" />} />
              <Route path="/press"            element={<UnderPress section="Press centre" />} />
              <Route path="/status"           element={<UnderPress section="Service status" />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </ErrorBoundary>
      </main>

      <FooterSerious />
    </>
  );
}

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Component } from "react";

import NavZine    from "./components/zine/NavZine.jsx";
import Colophon   from "./components/zine/Colophon.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import Home       from "./pages/Home.jsx";
import NotFound   from "./pages/NotFound.jsx";
import UnderPress from "./pages/UnderPress.jsx";

/**
 * V2 app shell — Annual Letter paradigm.
 *
 * NavZine at the top (masthead with magazine-spread dropdowns).
 * Colophon at the bottom (publisher's colophon, replaces v1 footer).
 * Pages render between them.
 *
 * Routes that have not yet been typeset for v2 render UnderPress —
 * a "this chapter is being composed at the press" notice. As each
 * chapter gets its bespoke spread, the route is replaced with the
 * real page.
 */

class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error, info) { console.error("Bard Santner caught:", error, info); }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] surface-paper flex items-center justify-center p-10 text-center">
          <div>
            <p className="t-eyebrow text-cabernet-500 mb-3">§ A service interruption</p>
            <h1 className="t-headline text-print mb-5">The press has jammed.</h1>
            <p className="font-italic italic text-[16px] text-walnut mb-8 max-w-md mx-auto">
              The fault is on our side. Please refresh, or return to the cover and try again.
            </p>
            <button onClick={() => window.location.reload()} className="btn-letterpress btn-letterpress-cabernet">
              ↺ &nbsp; Refresh
            </button>
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
      <NavZine />

      <main>
        <ErrorBoundary>
          <AnimatePresence mode="popLayout">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />

              {/* Chapters being typeset — all render UnderPress with
                  their own folio + chapter label until the bespoke
                  spread ships. */}
              <Route path="/banking"          element={<UnderPress folio="Chap. I"   chapter="The Bank" />} />
              <Route path="/wealth"           element={<UnderPress folio="Chap. II"  chapter="The Counsel" />} />
              <Route path="/markets"          element={<UnderPress folio="Chap. III" chapter="The Desk" />} />
              <Route path="/insights"         element={<UnderPress folio="Chap. IV"  chapter="The Almanac" />} />
              <Route path="/insights/:slug"   element={<UnderPress folio="Chap. IV"  chapter="This entry of the Almanac" />} />
              <Route path="/group"            element={<UnderPress folio="Chap. V"   chapter="The House" />} />
              <Route path="/group/:slug"      element={<UnderPress folio="Chap. V"   chapter="This institution of the House" />} />
              <Route path="/about"            element={<UnderPress folio="Chap. VI"  chapter="Provenance" />} />
              <Route path="/leadership"       element={<UnderPress folio="Chap. VI"  chapter="The Names" />} />
              <Route path="/locations"        element={<UnderPress folio="Chap. VI"  chapter="The Places" />} />
              <Route path="/contact"          element={<UnderPress folio="Chap. VI"  chapter="The Door" />} />
              <Route path="/products/:slug"   element={<UnderPress folio="Instrument" chapter="This instrument" />} />
              <Route path="/personal"         element={<UnderPress folio="Station"   chapter="For Households" />} />
              <Route path="/business"         element={<UnderPress folio="Station"   chapter="For Commerce" />} />
              <Route path="/private-banking"  element={<UnderPress folio="Station"   chapter="By Appointment" />} />
              <Route path="/international"    element={<UnderPress folio="Station"   chapter="For the Diaspora" />} />
              <Route path="/institutional"    element={<UnderPress folio="Station"   chapter="For Institutions" />} />
              <Route path="/online-banking"   element={<UnderPress folio="The Wire"  chapter="Through the Wire" />} />
              <Route path="/login"            element={<UnderPress folio="The Lobby" chapter="Enter the Lobby" />} />
              <Route path="/app"              element={<UnderPress folio="The App"   chapter="Glimpse the app" />} />
              <Route path="/security"         element={<UnderPress folio="The Warrant" chapter="On Security" />} />
              <Route path="/legal"            element={<UnderPress folio="By Letter" chapter="Legal" />} />
              <Route path="/privacy"          element={<UnderPress folio="On Privacy" chapter="Privacy" />} />
              <Route path="/cookies"          element={<UnderPress folio="Cookies" chapter="Cookies" />} />
              <Route path="/terms"            element={<UnderPress folio="Terms" chapter="Terms" />} />
              <Route path="/regulatory"       element={<UnderPress folio="The Warrant" chapter="Regulatory" />} />
              <Route path="/accessibility"    element={<UnderPress folio="Accessibility" chapter="Accessibility" />} />
              <Route path="/complaints"       element={<UnderPress folio="Grievance" chapter="On Grievance" />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </ErrorBoundary>
      </main>

      <Colophon />
    </>
  );
}

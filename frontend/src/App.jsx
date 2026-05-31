import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Component } from "react";

import NavSerious    from "./components/modern/NavSerious.jsx";
import FooterSerious from "./components/modern/FooterSerious.jsx";
import ScrollToTop   from "./components/ScrollToTop.jsx";

import Home          from "./pages/Home.jsx";
import About         from "./pages/About.jsx";
import Leadership    from "./pages/Leadership.jsx";
import Wealth        from "./pages/Wealth.jsx";
import Markets       from "./pages/Markets.jsx";
import Banking       from "./pages/Banking.jsx";
import Insights      from "./pages/Insights.jsx";
import InsightDetail from "./pages/InsightDetail.jsx";
import Contact       from "./pages/Contact.jsx";
import Locations     from "./pages/Locations.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Group         from "./pages/Group.jsx";
import GroupEntity   from "./pages/GroupEntity.jsx";
import OnlineBanking from "./pages/OnlineBanking.jsx";
import AppDashboard  from "./pages/AppDashboard.jsx";
import Login         from "./pages/Login.jsx";
import NotFound      from "./pages/NotFound.jsx";

import Personal       from "./pages/audiences/Personal.jsx";
import Business       from "./pages/audiences/Business.jsx";
import PrivateBanking from "./pages/audiences/PrivateBanking.jsx";
import International  from "./pages/audiences/International.jsx";
import Institutional  from "./pages/audiences/Institutional.jsx";

import Privacy       from "./pages/legal/Privacy.jsx";
import Terms         from "./pages/legal/Terms.jsx";
import Legal         from "./pages/legal/Legal.jsx";
import Cookies       from "./pages/legal/Cookies.jsx";
import Regulatory    from "./pages/legal/Regulatory.jsx";
import Accessibility from "./pages/legal/Accessibility.jsx";
import Security      from "./pages/legal/Security.jsx";
import Complaints    from "./pages/legal/Complaints.jsx";

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
  // /login and /app run their own focused shells; suppress public nav + footer.
  const isAppShellRoute =
    location.pathname === "/login" || location.pathname.startsWith("/app");

  return (
    <>
      <ScrollToTop />
      {!isAppShellRoute && <NavSerious />}

      <main>
        <ErrorBoundary>
          <AnimatePresence mode="popLayout">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />

              {/* Audience landings */}
              <Route path="/personal"        element={<Personal />} />
              <Route path="/business"        element={<Business />} />
              <Route path="/private-banking" element={<PrivateBanking />} />
              <Route path="/international"   element={<International />} />
              <Route path="/institutional"   element={<Institutional />} />

              {/* Service hubs */}
              <Route path="/banking" element={<Banking />} />
              <Route path="/wealth"  element={<Wealth />} />
              <Route path="/markets" element={<Markets />} />

              {/* Products */}
              <Route path="/products/:slug" element={<ProductDetail />} />

              {/* Institution */}
              <Route path="/about"       element={<About />} />
              <Route path="/leadership"  element={<Leadership />} />
              <Route path="/locations"   element={<Locations />} />
              <Route path="/group"       element={<Group />} />
              <Route path="/group/:slug" element={<GroupEntity />} />

              {/* Editorial */}
              <Route path="/insights"       element={<Insights />} />
              <Route path="/insights/:slug" element={<InsightDetail />} />

              {/* Contact / digital channels */}
              <Route path="/contact"        element={<Contact />} />
              <Route path="/online-banking" element={<OnlineBanking />} />

              {/* App shell — own layout */}
              <Route path="/login" element={<Login />} />
              <Route path="/app"   element={<AppDashboard />} />

              {/* Trust + legal */}
              <Route path="/security"      element={<Security />} />
              <Route path="/legal"         element={<Legal />} />
              <Route path="/privacy"       element={<Privacy />} />
              <Route path="/cookies"       element={<Cookies />} />
              <Route path="/terms"         element={<Terms />} />
              <Route path="/regulatory"    element={<Regulatory />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/complaints"    element={<Complaints />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </ErrorBoundary>
      </main>

      {!isAppShellRoute && <FooterSerious />}
    </>
  );
}

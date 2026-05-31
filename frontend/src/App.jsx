import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Component } from "react";

import MegaNav from "./components/MegaNav.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import Home from "./pages/Home.jsx";
import Personal from "./pages/audiences/Personal.jsx";
import Business from "./pages/audiences/Business.jsx";
import PrivateBanking from "./pages/audiences/PrivateBanking.jsx";
import International from "./pages/audiences/International.jsx";
import Institutional from "./pages/audiences/Institutional.jsx";
import About from "./pages/About.jsx";
import Group from "./pages/Group.jsx";
import GroupEntity from "./pages/GroupEntity.jsx";
import Leadership from "./pages/Leadership.jsx";
import Insights from "./pages/Insights.jsx";
import InsightDetail from "./pages/InsightDetail.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Banking from "./pages/Banking.jsx";
import Wealth from "./pages/Wealth.jsx";
import Markets from "./pages/Markets.jsx";
import OnlineBanking from "./pages/OnlineBanking.jsx";
import Login from "./pages/Login.jsx";
import AppDashboard from "./pages/AppDashboard.jsx";
import Contact from "./pages/Contact.jsx";
import Locations from "./pages/Locations.jsx";
import Security from "./pages/Security.jsx";
import Legal from "./pages/Legal.jsx";
import Privacy from "./pages/Privacy.jsx";
import Cookies from "./pages/Cookies.jsx";
import Terms from "./pages/Terms.jsx";
import Regulatory from "./pages/Regulatory.jsx";
import Accessibility from "./pages/Accessibility.jsx";
import Complaints from "./pages/Complaints.jsx";
import NotFound from "./pages/NotFound.jsx";

class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error, info) { console.error("Bard Santner caught:", error, info); }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex items-center justify-center p-10 text-center bg-milk">
          <div>
            <p className="eyebrow eyebrow-accent mb-4">A service interruption</p>
            <h1 className="display-lg mb-4 text-navy-600">
              We were unable to complete that request.
            </h1>
            <p className="text-bone-600 mb-8 max-w-md mx-auto">
              The fault is on our side. Please refresh, or return to the
              homepage and try again.
            </p>
            <button onClick={() => window.location.reload()} className="btn btn-navy">
              Refresh
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

  // Routes that run their own application shell (own topbar / sidebar
  // / no public Nav + Footer). The public marketing chrome is
  // suppressed for these to keep the surface focused.
  const isAppShellRoute =
    location.pathname === "/login" || location.pathname.startsWith("/app");

  return (
    <>
      <ScrollToTop />
      {!isAppShellRoute && <MegaNav />}

      <main>
        <ErrorBoundary>
          <AnimatePresence mode="popLayout">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />

              {/* Audience landings */}
              <Route path="/personal" element={<Personal />} />
              <Route path="/business" element={<Business />} />
              <Route path="/private-banking" element={<PrivateBanking />} />
              <Route path="/international" element={<International />} />
              <Route path="/institutional" element={<Institutional />} />

              {/* Top-level service hubs */}
              <Route path="/banking" element={<Banking />} />
              <Route path="/wealth" element={<Wealth />} />
              <Route path="/markets" element={<Markets />} />
              <Route path="/online-banking" element={<OnlineBanking />} />

              {/* App shell — own layout, no public Nav/Footer */}
              <Route path="/login" element={<Login />} />
              <Route path="/app" element={<AppDashboard />} />

              {/* Products */}
              <Route path="/products/:slug" element={<ProductDetail />} />

              {/* Institution */}
              <Route path="/about" element={<About />} />
              <Route path="/group" element={<Group />} />
              <Route path="/group/:slug" element={<GroupEntity />} />
              <Route path="/leadership" element={<Leadership />} />

              {/* Editorial */}
              <Route path="/insights" element={<Insights />} />
              <Route path="/insights/:slug" element={<InsightDetail />} />

              {/* Contact / locations */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/locations" element={<Locations />} />

              {/* Trust + legal */}
              <Route path="/security" element={<Security />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/regulatory" element={<Regulatory />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/complaints" element={<Complaints />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </ErrorBoundary>
      </main>

      {!isAppShellRoute && <Footer />}
    </>
  );
}

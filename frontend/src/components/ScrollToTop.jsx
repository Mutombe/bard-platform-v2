import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scroll the page to top on every route change. SPA routers don't do this
// by default; users expect it. Same pattern as bitstudio.co.zw.
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

/* ─── V2 type system — a publication, not a website ───────────────────
   Four faces, each with a specific publishing-house job. NONE of these
   were used in v1; v1 ran Onest + Fraunces + Bricolage + Cormorant.
   v2 is a completely different family:

     Bodoni Moda Variable        — display (Didone, high-contrast,
                                   magazine-cover energy). Tier 1 type.
     Source Serif 4 Variable     — body text (humanist book serif,
                                   designed for long-form reading).
     Inter Tight Variable        — minimal sans for nav and utility
                                   moments only. NOT for body.
     Cormorant Garamond Variable — italic accent (manuscript flourish).
     JetBrains Mono              — data, ticker, ledger marks.
*/
import "@fontsource-variable/bodoni-moda";
import "@fontsource-variable/source-serif-4";
import "@fontsource-variable/inter-tight";
import "@fontsource-variable/cormorant-garamond";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

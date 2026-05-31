import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// ─── V2 Type system — five faces, governed by hierarchy ─────────────
// v1 was Onest-everywhere with Fraunces only on the home hero. v2
// hacks that with deliberate face-changes. Five typefaces, each with
// a specific institutional job:
//
//   Fraunces Variable        — display serif (the heritage voice).
//                              Three variable axes (weight, SOFT, opsz)
//                              tuned per tier. Pictet / Edmond de
//                              Rothschild / Coutts canon.
//   Bricolage Grotesque Var  — display sans with character. Variable
//                              width + weight axes. Modern, sharp,
//                              not corporate-generic. For sub-eyebrows,
//                              ticker chips, callouts where serif
//                              would feel heavy.
//   Cormorant Garamond Var   — accent serif for italic gestures, pull
//                              quotes, dates and the editorial
//                              flourish moments. The "manuscript
//                              italic" voice.
//   Onest Variable           — body text + UI utility (carried over).
//   JetBrains Mono           — data, tickers, codes, tabular figures,
//                              ledger marks, ISIN chips, ticker scroll.
import "@fontsource-variable/onest";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/cormorant-garamond";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

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

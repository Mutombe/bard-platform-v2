import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Bard Santner Markets Inc — institutional banking site.
// React 19 + Tailwind v4 + Framer Motion + react-helmet-async.
// Build output is statically prerendered per route via scripts/prerender.mjs
// so crawlers, social unfurlers and AI scrapers see real HTML, not an SPA shell.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { port: 5180, strictPort: false },
});

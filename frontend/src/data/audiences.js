// The five audience contexts. Mirrors the Lloyds / AfrAsia / Investec
// top-tier strip. Each entry drives:
//   - the audience switcher tab
//   - the audience landing page route
//   - the contextual product surfacing on the home page
//   - the segment-filtered insights list
//
// Order here is the order on screen. Personal sits left because it is the
// largest cohort; Institutional sits right because it is the smallest but
// most consequential. International splits Private and Institutional
// because it intersects both.

export const AUDIENCES = [
  {
    id: "personal",
    label: "Personal",
    label_full: "Personal Banking",
    path: "/personal",
    eyebrow: "For individuals and families",
    headline_promise: "Everyday banking, built around your life.",
    hero_image: "/images/audience/personal.jpg",
    summary:
      "Current accounts, savings, home loans and the day-to-day banking that should never get in the way of the life it serves.",
  },
  {
    id: "business",
    label: "Business",
    label_full: "Business Banking",
    path: "/business",
    eyebrow: "For founders, SMEs and growing companies",
    headline_promise: "Banking that works as hard as your business.",
    hero_image: "/images/audience/business.jpg",
    summary:
      "Operating accounts, working-capital facilities, trade rails and the merchant tools the growing African enterprise actually needs.",
  },
  {
    id: "private",
    label: "Private Banking",
    label_full: "Private Banking & Wealth",
    path: "/private-banking",
    eyebrow: "For established wealth",
    headline_promise: "Relationship-led banking. For lives with weight.",
    hero_image: "/images/audience/private.jpg",
    summary:
      "Discretionary wealth, advisory, structured credit, succession and the kind of patient counsel that survives more than one market cycle.",
  },
  {
    id: "international",
    label: "International",
    label_full: "International & Diaspora",
    path: "/international",
    eyebrow: "For the African diaspora and global investors",
    headline_promise: "An African platform, with international reach.",
    hero_image: "/images/audience/international.jpg",
    summary:
      "Cross-border accounts, FX, trade finance, custody and the rails by which African capital meets the world without leaving its house.",
  },
  {
    id: "institutional",
    label: "Institutional",
    label_full: "Corporate & Institutional",
    path: "/institutional",
    eyebrow: "For corporates, government and large institutions",
    headline_promise: "Treasury, capital markets, advisory. At institutional scale.",
    hero_image: "/images/audience/institutional.jpg",
    summary:
      "Treasury services, debt and capital markets, custody, syndicated facilities and the originator-of-record discipline correspondent banks expect.",
  },
];

export function findAudience(id) {
  return AUDIENCES.find((a) => a.id === id);
}

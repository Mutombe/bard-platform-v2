// The Bard Santner Group ecosystem. Symmetry-engineered:
//
//   name      institutional name, as filed
//   short     2–3 words for nav/footer
//   role      2–4 words, the institution's job
//   tagline   8–11 words, exactly one sentence
//   body      28–36 words, two sentences max, used on /group/:slug
//   cta       2–3 words
//
// The bank sits at the centre. Around it: markets, lending, sports,
// editorial. Each is a real institution in the Group, signed by its
// own people.

export const GROUP_ENTITIES = [
  {
    id: "bsmfb",
    slug: "bsmfb",
    name: "Bard Santner Microfinance Bank",
    short: "BSMFB",
    role: "The bank",
    tagline: "Banking, savings, credit. The everyday and the consequential.",
    body:
      "The flagship banking institution of the Group. Established to serve individuals, businesses, the diaspora and institutional clients with the seriousness African banking deserves and the warmth it has historically lacked.",
    accent: "var(--color-orange-500)",
    href: "/group/bsmfb",
    external: null,
    cta: "Open with BSMFB",
  },
  {
    id: "markets",
    slug: "markets",
    name: "Bard Santner Markets Inc",
    short: "Markets",
    role: "Capital markets",
    tagline: "Treasury, debt and capital markets. Originated with care.",
    body:
      "The parent institution. Capital markets advisory, structured debt origination, treasury services, and the long relationships with correspondent banks, regulators and counterparties on which the rest of the Group is built.",
    accent: "var(--color-navy-600)",
    href: "/group/markets",
    external: null,
    cta: "View Markets",
  },
  {
    id: "loans",
    slug: "loans",
    name: "Bard Loans",
    short: "Loans",
    role: "Credit institution",
    tagline: "Loans for civil servants, businesses and households.",
    body:
      "A dedicated credit institution serving civil servants, household borrowers and growing SMEs with simple, time-bound facilities. Priced honestly. Operates under the Bard Santner credit policy.",
    accent: "var(--color-success)",
    href: "/group/loans",
    external: null,
    cta: "Explore Loans",
  },
  {
    id: "golf",
    slug: "golf",
    name: "Bard Santner Golf",
    short: "Golf",
    role: "Sport and wealth",
    tagline: "Where the game and the portfolio share a fairway.",
    body:
      "A boutique advisory line aligning sport, hospitality and wealth. Memberships, sponsorships, structured experiences, a deliberately small client list. Conversation is the work; the game is the venue.",
    accent: "var(--color-warn)",
    href: "/group/golf",
    external: null,
    cta: "Visit Golf",
  },
  {
    id: "journal",
    slug: "journal",
    name: "Bardiq Journal",
    short: "Journal",
    role: "The editorial arm",
    tagline: "Africa, capital and the long view. In print.",
    body:
      "The Group's editorial publication. Long-form essays, market commentary, founder profiles. We do not publish anything that would not survive a second reading. Quarterly print, weekly online.",
    accent: "var(--color-error)",
    href: "/group/journal",
    external: null,
    cta: "Read the Journal",
  },
];

export function findEntity(id) {
  return GROUP_ENTITIES.find((e) => e.id === id);
}

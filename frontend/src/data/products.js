// Product catalogue. Symmetry-engineered — every entry follows the
// same character-count discipline so cards lay up in matching rhythms
// across the site:
//
//   eyebrow   1–2 words           e.g. "Business banking"
//   name      2–3 words           e.g. "Working Capital"
//   summary   14–18 words / 2 sentences, lands in 2-3 lines at 14px
//   features  4 bullets, 6–10 words each
//   audience  array of audience ids
//
// Order matters — this is the order on the home page product grid.

export const PRODUCTS = [
  // ─── Personal ───────────────────────────────────────────────────
  {
    slug: "everyday-account",
    name: "Everyday Account",
    audience: ["personal"],
    category: "Current accounts",
    eyebrow: "Current account",
    summary:
      "Salary in, bills out, debit card in pocket. No monthly fee for the first twelve months.",
    image: "/images/products/everyday-account.jpg",
    accent: "var(--color-orange-500)",
    features: [
      "No monthly fee for the first 12 months",
      "Debit card with contactless and biometric login",
      "Free transfers between BSMFB accounts",
      "Mobile and internet banking included",
    ],
  },
  {
    slug: "savings-account",
    name: "Savings Plus",
    audience: ["personal"],
    category: "Savings",
    eyebrow: "Savings",
    summary:
      "Tiered interest, compounded monthly. Preferential rates on committed balances, no notice for the everyday.",
    image: "/images/products/savings.jpg",
    accent: "var(--color-orange-500)",
    features: [
      "Tiered interest, paid monthly",
      "No minimum balance to open",
      "Preferential rates on committed balances",
      "Goal-based sub-pots for projects and trips",
    ],
  },
  {
    slug: "home-loan",
    name: "Home Loan",
    audience: ["personal"],
    category: "Borrowing",
    eyebrow: "Mortgage",
    summary:
      "First-home, second-home, refinance. Twenty-year tenors, fixed or variable, decided with a real banker.",
    image: "/images/products/home-loan.jpg",
    accent: "var(--color-orange-500)",
    features: [
      "Up to 20-year tenor",
      "Fixed, variable or split-rate options",
      "Decision in principle within 48 hours",
      "A dedicated banker for the life of the loan",
    ],
  },
  // ─── Business ───────────────────────────────────────────────────
  {
    slug: "business-account",
    name: "Business Account",
    audience: ["business"],
    category: "Operating accounts",
    eyebrow: "Business banking",
    summary:
      "An operating account that doesn't punish the growing SME. Multi-user access and a banker from day one.",
    image: "/images/products/business-account.jpg",
    accent: "var(--color-navy-600)",
    features: [
      "Multi-user roles and approval workflows",
      "Free transfers between BSMFB business accounts",
      "API access for accounting integrations",
      "A dedicated relationship banker from day one",
    ],
  },
  {
    slug: "working-capital",
    name: "Working Capital",
    audience: ["business"],
    category: "Credit",
    eyebrow: "Business credit",
    summary:
      "Revolving facility for the trading cycle. Drawdown, repay, drawdown again. Priced honestly, reviewed annually.",
    image: "/images/products/working-capital.jpg",
    accent: "var(--color-navy-600)",
    features: [
      "Revolving credit up to your turnover ratio",
      "Annual review, not quarterly anxiety",
      "Multi-currency drawdown across major pairs",
      "Direct line to a named credit officer",
    ],
  },
  {
    slug: "trade-finance",
    name: "Trade Finance",
    audience: ["business", "international", "institutional"],
    category: "Trade",
    eyebrow: "Trade finance",
    summary:
      "Letters of credit, documentary collections, supplier finance. The rails that move African goods through the world's ports.",
    image: "/images/products/trade-finance.jpg",
    accent: "var(--color-navy-600)",
    features: [
      "Letters of credit (sight, usance, standby)",
      "Documentary collections",
      "Pre-shipment and post-shipment finance",
      "Correspondent banking in 40+ jurisdictions",
    ],
  },
  // ─── Private ────────────────────────────────────────────────────
  {
    slug: "private-current",
    name: "Private Current",
    audience: ["private"],
    category: "Private banking",
    eyebrow: "Private banking",
    summary:
      "A current account with a private banker on call. Multi-currency, multi-channel, no fee surprises.",
    image: "/images/products/private-current.jpg",
    accent: "var(--color-warn)",
    features: [
      "Multi-currency (USD, EUR, GBP, ZAR, ZWG)",
      "A dedicated private banker on the line",
      "Concierge banking access on weekends",
      "A bespoke fee arrangement, agreed once",
    ],
  },
  {
    slug: "wealth-management",
    name: "Wealth Management",
    audience: ["private"],
    category: "Wealth",
    eyebrow: "Wealth",
    summary:
      "Discretionary portfolios built around your goals, not our product list. Reviewed in person, on your rhythm.",
    image: "/images/products/wealth.jpg",
    accent: "var(--color-warn)",
    features: [
      "Discretionary and advisory mandates",
      "Cross-border asset allocation by default",
      "Annual in-person review at minimum",
      "Succession and intergenerational planning",
    ],
  },
  {
    slug: "structured-credit",
    name: "Structured Credit",
    audience: ["private", "institutional"],
    category: "Credit",
    eyebrow: "Structured credit",
    summary:
      "Asset-backed, off-balance-sheet, syndicated. Where standard credit ends, structured credit begins.",
    image: "/images/products/structured-credit.jpg",
    accent: "var(--color-warn)",
    features: [
      "Asset-backed and receivables financing",
      "Off-balance-sheet structures",
      "Syndicated and club facilities",
      "Cross-border counsel built into the deal",
    ],
  },
  // ─── International ─────────────────────────────────────────────
  {
    slug: "diaspora-account",
    name: "Diaspora Account",
    audience: ["international"],
    category: "Diaspora",
    eyebrow: "Diaspora banking",
    summary:
      "A home-country account opened before you arrive. UK, US, Australia, South Africa. Move money, settle in.",
    image: "/images/products/diaspora.jpg",
    accent: "var(--color-success)",
    features: [
      "Open from abroad, fund on arrival",
      "Multi-currency holdings as standard",
      "Property, school-fee, remittance flows",
      "A dedicated diaspora desk by region",
    ],
  },
  {
    slug: "foreign-exchange",
    name: "Foreign Exchange",
    audience: ["international", "business", "institutional"],
    category: "Markets",
    eyebrow: "FX",
    summary:
      "Spot, forward, swap. Priced from the desk that runs the book, not the one re-pricing yesterday's quote.",
    image: "/images/products/fx.jpg",
    accent: "var(--color-success)",
    features: [
      "Spot, forward, swap on major pairs",
      "Twelve currency pairs traded daily",
      "Hedging programme design on request",
      "Direct dealing line for institutional clients",
    ],
  },
  // ─── Institutional ─────────────────────────────────────────────
  {
    slug: "treasury-services",
    name: "Treasury Services",
    audience: ["institutional", "business"],
    category: "Treasury",
    eyebrow: "Treasury",
    summary:
      "Liquidity, payments, collections, custody. The plumbing on which a serious treasury operates.",
    image: "/images/products/treasury.jpg",
    accent: "var(--color-navy-600)",
    features: [
      "Real-time liquidity dashboard",
      "Bulk payments and collections",
      "Securities custody and safekeeping",
      "API access with quarterly attestation",
    ],
  },
  {
    slug: "debt-capital-markets",
    name: "Debt Capital Markets",
    audience: ["institutional"],
    category: "Capital markets",
    eyebrow: "DCM",
    summary:
      "Bond origination, syndication and distribution. Sovereign, sub-sovereign, corporate. Local and cross-border.",
    image: "/images/products/dcm.jpg",
    accent: "var(--color-navy-600)",
    features: [
      "Sovereign and sub-sovereign issuance",
      "Corporate bond origination by sector",
      "Listed and private placement structures",
      "Cross-border syndication across the region",
    ],
  },
];

export function findProduct(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function productsForAudience(audienceId) {
  return PRODUCTS.filter((p) => p.audience.includes(audienceId));
}

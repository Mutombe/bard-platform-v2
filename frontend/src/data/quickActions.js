// The "quick-action strip" pattern from Lloyds. 3-5 high-intent pills
// under the hero. Each pill points to either a deep page or a non-React
// destination (online banking portal, calculator).
//
// One set per audience. Falls back to GENERAL for the home page.

export const QUICK_ACTIONS = {
  general: [
    { label: "Open an account", path: "/products/everyday-account", icon: "BankIcon" },
    { label: "Calculate a home loan", path: "/products/home-loan", icon: "CalculatorIcon" },
    { label: "Speak to a banker", path: "/contact", icon: "PhoneIcon" },
    { label: "Online banking", path: "https://online.bardsantnerbank.com", icon: "LockIcon", external: true },
  ],
  personal: [
    { label: "Open an Everyday Account", path: "/products/everyday-account", icon: "BankIcon" },
    { label: "Apply for a Home Loan", path: "/products/home-loan", icon: "HouseIcon" },
    { label: "Open Savings Plus", path: "/products/savings-account", icon: "PiggyBankIcon" },
    { label: "Help & security", path: "/security", icon: "ShieldIcon" },
  ],
  business: [
    { label: "Open a Business Account", path: "/products/business-account", icon: "BriefcaseIcon" },
    { label: "Apply for Working Capital", path: "/products/working-capital", icon: "ChartLineIcon" },
    { label: "Trade Finance enquiry", path: "/products/trade-finance", icon: "GlobeIcon" },
    { label: "Speak to a relationship banker", path: "/contact", icon: "UserIcon" },
  ],
  private: [
    { label: "Meet a Private Banker", path: "/contact?audience=private", icon: "UserIcon" },
    { label: "Wealth Management", path: "/products/wealth-management", icon: "TrendUpIcon" },
    { label: "Structured Credit enquiry", path: "/products/structured-credit", icon: "StackIcon" },
    { label: "Private banking team", path: "/leadership", icon: "UsersIcon" },
  ],
  international: [
    { label: "Open a Diaspora Account", path: "/products/diaspora-account", icon: "GlobeIcon" },
    { label: "Foreign Exchange", path: "/products/foreign-exchange", icon: "CurrencyIcon" },
    { label: "International transfers", path: "/contact?audience=international", icon: "ArrowsClockwiseIcon" },
    { label: "Diaspora desk", path: "/contact?audience=international", icon: "PhoneIcon" },
  ],
  institutional: [
    { label: "Treasury Services enquiry", path: "/products/treasury-services", icon: "BankIcon" },
    { label: "Debt Capital Markets", path: "/products/debt-capital-markets", icon: "ChartBarIcon" },
    { label: "Correspondent banking", path: "/contact?audience=institutional", icon: "HandshakeIcon" },
    { label: "Institutional team", path: "/leadership", icon: "UsersIcon" },
  ],
};

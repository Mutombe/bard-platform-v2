// V2 — Quick-action strip labels in the editorial voice.
// Pills under the hero, one set per station.

export const QUICK_ACTIONS = {
  general: [
    { label: "Open a Current",          path: "/products/everyday-account",   icon: "BankIcon" },
    { label: "Reckon the mortgage",     path: "/products/home-loan",          icon: "CalculatorIcon" },
    { label: "Open a private conversation", path: "/contact",                 icon: "PhoneIcon" },
    { label: "Through the Wire",        path: "/login",                       icon: "LockIcon" },
  ],
  personal: [
    { label: "Open the Current",        path: "/products/everyday-account", icon: "BankIcon" },
    { label: "Reckon the Mortgage",     path: "/products/home-loan",        icon: "HouseIcon" },
    { label: "Open the Savings Book",   path: "/products/savings-account",  icon: "PiggyBankIcon" },
    { label: "On the Warrant",          path: "/security",                  icon: "ShieldIcon" },
  ],
  business: [
    { label: "Open the Operating Account",      path: "/products/business-account",  icon: "BriefcaseIcon" },
    { label: "Approach for Working Capital",    path: "/products/working-capital",   icon: "ChartLineIcon" },
    { label: "Apply for Cross-border Trade",    path: "/products/trade-finance",     icon: "GlobeIcon" },
    { label: "Open a conversation with the desk", path: "/contact",                  icon: "UserIcon" },
  ],
  private: [
    { label: "Approach a Private Banker",       path: "/contact?audience=private",      icon: "UserIcon" },
    { label: "Open a Discretionary Mandate",    path: "/products/wealth-management",    icon: "TrendUpIcon" },
    { label: "Approach for Structured Credit",  path: "/products/structured-credit",    icon: "StackIcon" },
    { label: "The Counsel · the names",         path: "/leadership",                    icon: "UsersIcon" },
  ],
  international: [
    { label: "Open a Diaspora Account",    path: "/products/diaspora-account",         icon: "GlobeIcon" },
    { label: "Foreign Exchange",           path: "/products/foreign-exchange",         icon: "CurrencyIcon" },
    { label: "Cross-border counsel",       path: "/contact?audience=international",    icon: "ArrowsClockwiseIcon" },
    { label: "The Diaspora desk",          path: "/contact?audience=international",    icon: "PhoneIcon" },
  ],
  institutional: [
    { label: "Approach the Treasury desk", path: "/products/treasury-services",        icon: "BankIcon" },
    { label: "Origination (DCM)",          path: "/products/debt-capital-markets",     icon: "ChartBarIcon" },
    { label: "Correspondent counsel",      path: "/contact?audience=institutional",    icon: "HandshakeIcon" },
    { label: "The desk · the names",       path: "/leadership",                        icon: "UsersIcon" },
  ],
};

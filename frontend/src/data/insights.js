// Editorial entries for /insights. Symmetry-engineered:
//
//   eyebrow            1–3 words
//   title              4–7 words, 1 line in display-md
//   summary            22–28 words, lands in 3 lines at 14.5px
//   reading_minutes    honest
//
// Dates are absolute. Long-form lives in Bardiq Journal.

export const INSIGHTS = [
  {
    slug: "africa-and-the-cross-border-rail",
    title: "Africa and the cross-border rail.",
    eyebrow: "Trade finance",
    summary:
      "Why the rails moving goods between Lagos, Mombasa and Maputo will be African-built within the decade, and how the bank that builds them captures the corridor.",
    audience: ["business", "international", "institutional"],
    date: "2026-05-19",
    reading_minutes: 8,
    author: "Senziwani Sikhosana",
    author_role: "Chief Executive Officer",
    image: "/images/insights/cross-border-rail.jpg",
  },
  {
    slug: "the-quiet-case-for-a-deposit-base",
    title: "The quiet case for a deposit base.",
    eyebrow: "Banking strategy",
    summary:
      "Wholesale funding looks cheaper on a spreadsheet and crueler in a crisis. An argument for the patient, expensive work of building a real retail book.",
    audience: ["business", "institutional"],
    date: "2026-05-05",
    reading_minutes: 6,
    author: "Alfred Mthimkhulu",
    author_role: "Executive Director",
    image: "/images/insights/deposit-base.jpg",
  },
  {
    slug: "the-diaspora-is-not-a-niche",
    title: "The diaspora is not a niche.",
    eyebrow: "Diaspora banking",
    summary:
      "Remittance flows now exceed foreign direct investment in nine of Africa's largest economies. The diaspora is the primary capital allocator. Bank it that way.",
    audience: ["international", "personal"],
    date: "2026-04-22",
    reading_minutes: 7,
    author: "Tatenda Hungwe",
    author_role: "Executive Director",
    image: "/images/insights/diaspora.jpg",
  },
  {
    slug: "credit-when-the-rate-is-the-conversation",
    title: "Credit, when the rate is the conversation.",
    eyebrow: "Credit",
    summary:
      "How to talk honestly with a borrower in a high-rate environment without selling a refinancing they will regret six months later.",
    audience: ["personal", "business"],
    date: "2026-04-08",
    reading_minutes: 5,
    author: "Bard Santner Credit Committee",
    author_role: "",
    image: "/images/insights/credit-rates.jpg",
  },
  {
    slug: "treasury-and-the-discipline-of-the-end-of-day",
    title: "Treasury, and the discipline of the end of day.",
    eyebrow: "Treasury",
    summary:
      "Why the treasurer who closes the day every day at five builds a stronger book than the one who closes it on month-end.",
    audience: ["institutional", "business"],
    date: "2026-03-25",
    reading_minutes: 6,
    author: "Bard Santner Treasury Desk",
    author_role: "",
    image: "/images/insights/treasury-eod.jpg",
  },
  {
    slug: "wealth-and-the-second-conversation",
    title: "Wealth, and the second conversation.",
    eyebrow: "Wealth",
    summary:
      "The first conversation with a wealth client is about returns. The second is about succession. We start with the second.",
    audience: ["private"],
    date: "2026-03-11",
    reading_minutes: 5,
    author: "Bard Santner Wealth",
    author_role: "",
    image: "/images/insights/wealth.jpg",
  },
  {
    slug: "the-bank-as-a-publishing-institution",
    title: "The bank as a publishing institution.",
    eyebrow: "Group",
    summary:
      "Why a serious bank publishes — in print, in long form, with a masthead. And why Bardiq Journal is part of the bank, not adjacent to it.",
    audience: ["personal", "business", "private", "international", "institutional"],
    date: "2026-02-26",
    reading_minutes: 5,
    author: "Bardiq Journal",
    author_role: "",
    image: "/images/insights/journal.jpg",
  },
  {
    slug: "becoming-a-bank",
    title: "Becoming a bank.",
    eyebrow: "From the desk of the CEO",
    summary:
      "On what changes when an institution accepts deposits, what doesn't, and the four obligations a bank inherits the moment it opens its first account.",
    audience: ["personal", "business", "private", "international", "institutional"],
    date: "2026-02-12",
    reading_minutes: 7,
    author: "Senziwani Sikhosana",
    author_role: "Chief Executive Officer",
    image: "/images/insights/becoming-a-bank.jpg",
  },
];

export function findInsight(slug) {
  return INSIGHTS.find((i) => i.slug === slug);
}

export function insightsForAudience(audienceId) {
  return INSIGHTS.filter((i) => i.audience.includes(audienceId));
}

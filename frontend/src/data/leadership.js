// Leadership. Named, not abstracted to "our team." Per the inspiration
// brief: Lloyds names Charlie Nunn. Investec names Fani Titi. AfrAsia names
// Thierry Vallet. We name ours.
//
// Photographs: stand-in editorial portraits from Unsplash (CC0). Each
// person is shown with a different professional editorial portrait
// until real photography is commissioned. REPLACE WITH REAL PHOTOS
// BEFORE PUBLIC LAUNCH — these portraits are placeholders for layout,
// not likenesses of the named individuals.

const unsplashPortrait = (id) =>
  `https://images.unsplash.com/photo-${id}?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=85`;

export const LEADERSHIP = [
  {
    slug: "senziwani-sikhosana",
    name: "Senziwani Sikhosana",
    role: "Chief Executive Officer",
    short_role: "CEO",
    bio:
      "Senziwani leads Bard Santner Markets Inc and the establishment of Bard Santner Microfinance Bank. A capital markets professional by training, his work centres on building African financial institutions to international standards without losing what is African about them.",
    image: unsplashPortrait("1642257859842-c95f9fa8121d"),
  },
  {
    slug: "alfred-mthimkhulu",
    name: "Alfred Mthimkhulu",
    role: "Executive Director",
    short_role: "ED",
    bio:
      "Alfred oversees the group's institutional banking, capital markets and correspondent relationships. His work pairs originator discipline with the long counterparty memory that compliance-led banking requires.",
    image: unsplashPortrait("1616805765352-beedbad46b2a"),
  },
  {
    slug: "tatenda-hungwe",
    name: "Tatenda Hungwe",
    role: "Executive Director",
    short_role: "ED",
    bio:
      "Tatenda leads the group's market development, brand and the diaspora banking proposition. His remit is the connective tissue between the bank and the people it banks.",
    image: unsplashPortrait("1617244147299-5ef406921c35"),
  },
];

export function findLeader(slug) {
  return LEADERSHIP.find((l) => l.slug === slug);
}

// Author lookup helper — given an insight author name, returns the
// matching leader (or undefined). Used by InsightsRail + InsightDetail
// to surface the author's photograph in the byline avatar with
// graceful fallback to initials when the author isn't in the
// leadership data.
export function findLeaderByName(name) {
  if (!name) return undefined;
  return LEADERSHIP.find((l) => l.name === name);
}

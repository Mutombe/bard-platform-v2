// Central image catalogue. Every URL here was individually searched on
// Unsplash, the candidate photo was opened and inspected, the CDN ID
// resolved, and the licence verified as standard Unsplash (free for
// commercial use, no attribution required for hotlinking). No premium
// Unsplash+ photos are used.
//
// Selection brief — the Lloyds + AfrAsia + Investec aesthetic, applied
// to the Bard Santner vision:
//
//   • universal institutional imagery — modern offices, libraries,
//     museums, refined architecture, professionals at work. African
//     subjects where authentic; international where the subject is
//     architectural or universal.
//   • warm domesticity for personal banking, not stock cliché
//   • photography that earns its placement — every hero photo carries
//     the editorial argument of its page
//   • art paintings used strategically in CTA backdrops (gallery walls,
//     framed artwork) — per institutional-bank canon, the bank that
//     publishes also collects.
//
// Replace any URL with a local /images/... path when production
// photography ships.

const unsplash = (id, w = 3200, q = 85) =>
  `https://images.unsplash.com/photo-${id}?ixlib=rb-4.0.3&auto=format&fit=crop&w=${w}&q=${q}`;

// ─── Page heroes ─────────────────────────────────────────────────────
export const HERO = {
  // High-rise silhouettes against a dawn sky, dramatic golden-orange
  // sunrise light bathing modern urban geometry. Reads as "new day,
  // institutional optimism, the modern African financial platform
  // standing at first light." The warm sunrise tones cooperate with
  // our orange-on-ink overlay system instead of fighting it.
  home:           unsplash("1511371496040-1fb40794e675"),

  // Family at the dining table sharing a meal. Warm, domestic, the
  // everyday — not stock domesticity.
  personal:       unsplash("1576089073624-b5751a8f4de9"),

  // Entrepreneur at a desk with a laptop, candid workplace portrait.
  business:       unsplash("1713946598417-437a1fccf2c6"),

  // Gladstone's Library, Wales — Gothic reading room with wooden
  // beams, leather chairs, the heritage editorial gesture.
  private:        unsplash("1759731224815-87d2706c076c"),

  // Final approach into Hong Kong from an airplane window —
  // dusk light, the cross-border feeling.
  international:  unsplash("1760711678895-b39ef6f3ca1d"),

  // Chicago skyscraper, geometric facade against a clear sky.
  // Modernist office tower, institutional.
  institutional:  unsplash("1775135999483-f0a1470a9e1d"),

  // Bank of Montreal Museum — neoclassical stone facade with
  // pillars. The architectural memory of banking.
  banking:        unsplash("1541354329998-f4d9a9f9297f"),

  // Modern staircase with abstract art on the wall. Refined,
  // collected, the wealth posture.
  wealth:         unsplash("1766756388111-e3d5cb5edafb"),

  // A trader at multiple monitors with a calculator, candlestick
  // charts on each screen, office set at night lighting. The desk
  // that runs the book — the human, the data and the discipline.
  markets:        unsplash("1768055104895-e6185762f2a9"),

  // Aerial view of a mountainous coastal city at dusk — the
  // institution's broader landscape, geography as scale.
  about:          unsplash("1569706971306-de5d78f6418e"),

  // Classical stone facade with arched windows — the Group as
  // institution-of-institutions.
  group:          unsplash("1778429557352-ea4213f69e91"),

  // Environmental portrait of a professional in suit, arms
  // crossed, Copenhagen. The named-leadership posture.
  leadership:     unsplash("1718209881007-c0ecdfc00f9d"),

  // Reading desk in Gladstone's Library, same heritage gesture
  // as private — editorial reading.
  insights:       unsplash("1759731224815-87d2706c076c"),

  // Tall illuminated building at night with blue lighting — modern
  // institutional architecture standing as the visual answer to "where
  // we operate". The vintage world map photo we had here was already
  // doing editorial work on /insights/the-diaspora-is-not-a-niche;
  // letting it be the singular gesture there.
  locations:      unsplash("1645414840873-a1c0826098ba"),

  // Close-up handshake photographed in Nairobi — dignified,
  // close-cropped, no laptop or paper clutter.
  contact:        unsplash("1521790797524-b2497295b8a0"),

  // Person holding a phone — editorial banking-on-mobile composition.
  // Clean professional setup, the device as instrument. Used as the
  // /online-banking hero.
  onlineBanking:  unsplash("1512428559087-560fa5ceab42"),
};

// ─── Audience-tile portraits ─────────────────────────────────────────
// The 5-card carousel that sits directly below the home hero. Each
// tile carries a DIFFERENT photograph from its corresponding page
// hero — same audience, different editorial gesture — so the page
// doesn't render the same image twice within 200px of vertical scroll.
export const AUDIENCE_TILE = {
  // Woman in a dark blazer at a sunlit table — composed, everyday.
  personal:       unsplash("1603464021578-f327592a89de", 1200),
  // Tailor between two sewing machines — the African SME, real workshop.
  business:       unsplash("1537057039314-1105d990934c", 1200),
  // Modern lounge with full-height windows + greenery — refined leisure.
  private:        unsplash("1761971975410-f8dd32d7fbdd", 1200),
  // Vintage propeller aircraft landing at Schiphol at dusk — heritage travel.
  international:  unsplash("1721592873149-9823d9dc6b40", 1200),
  // Conference room with attentive participants — institutional setting.
  institutional:  unsplash("1573167507387-6b4b98cb7c13", 1200),
};

// ─── Sub-brand marquees — the "This is X" institutional moments ─────
// Lloyds canon: pick one division per home page and give it a
// dedicated card marquee. Lloyds uses a horse (heritage equestrian);
// we use modern architecture — the institutional aesthetic of an
// African platform built to international standards.
export const MARQUEE = {
  // Modern building corner against a clear blue sky. Geometric forms,
  // clean glass facade, minimalist architectural photography. The
  // optimistic blue-sky tonality pairs with our dark card surface
  // and signals the modern-institutional posture of Bard Santner
  // Wealth — patient capital, contemporary structure.
  wealth: unsplash("1745698694474-9ecee02b51de", 3200, 88),
  // Backup picks (swap MARQUEE.wealth above if direction changes):
  //   1601726429844-acd8b1385972  — grayscale horse head (Lloyds-direct)
  //   1754281309126-532fd835b358  — horse's eye in darkness (tighter)
};

// ─── Art for CTA backdrops ───────────────────────────────────────────
// Strategic placement — art used as backdrop in CTA modules to lift the
// "call-to-action" gesture from transactional to institutional. The
// bank that publishes also collects.
export const ART = {
  // Ornate museum hallway with paintings along the walls and a
  // skylight ceiling. For the AdvisoryBand "Speak to a banker" CTA.
  advisoryHallway: unsplash("1778975144951-ea2a990c4ab4"),

  // Brown wooden-framed painting on a vibrant green wall, in a
  // Northern-European museum. Standalone CTA accent.
  framedPainting: unsplash("1610589672715-28289f2165d0"),

  // Yemisi Shyllon Museum of Art, Nigeria — African museum
  // collection. For "becoming a bank" type editorial CTAs.
  africanMuseum: unsplash("1769905226750-1db769c30bdc"),
};

// ─── Product cards ───────────────────────────────────────────────────
// Square editorial images for the product grid. The photograph isn't
// a product shot — it's the human moment or institutional context the
// product enables. Most products reuse hero photos thematically; the
// product-specific ones are sourced separately.
export const PRODUCT = {
  "everyday-account":     unsplash("1576089073624-b5751a8f4de9", 1200),
  "savings-account":      unsplash("1610589672715-28289f2165d0", 1200),
  "home-loan":            unsplash("1771143345689-f30959718edf", 1200),
  "business-account":     unsplash("1713946598417-437a1fccf2c6", 1200),
  "working-capital":      unsplash("1718209881007-c0ecdfc00f9d", 1200),
  "trade-finance":        unsplash("1760711678895-b39ef6f3ca1d", 1200),
  "private-current":      unsplash("1759731224815-87d2706c076c", 1200),
  "wealth-management":    unsplash("1766756388111-e3d5cb5edafb", 1200),
  "structured-credit":    unsplash("1778429557352-ea4213f69e91", 1200),
  // Family of three relaxing together on a couch — the diaspora
  // family at home, the moment the Diaspora Account enables.
  "diaspora-account":     unsplash("1637942189191-fa7add81c1bb", 1200),
  // Multiple Euro banknotes arranged on a wooden surface — editorial
  // currency composition, not a cliché money pile.
  "foreign-exchange":     unsplash("1579170053380-58064b2dee67", 1200),
  "treasury-services":    unsplash("1541354329998-f4d9a9f9297f", 1200),
  "debt-capital-markets": unsplash("1775135999483-f0a1470a9e1d", 1200),
};

// ─── Insight article heroes ──────────────────────────────────────────
// Each photograph chosen to carry the editorial argument of the piece.
// 16:9 for article hero, ~1600px wide. EVERY photo is unique to its
// insight — no shared photographs with other heroes, products or
// other insights. The principle: each piece earns its own picture.
export const INSIGHT = {
  // Cargo ship docked at port with cranes — the cross-border rail
  // made visible: containers, gantries, the corridor at work.
  "africa-and-the-cross-border-rail":              unsplash("1769752803898-e7e9a843a120", 1600),

  // Glass jar with coins and a small plant — patient, growing deposit
  // base. Editorial restraint instead of the cliché money pile.
  "the-quiet-case-for-a-deposit-base":             unsplash("1633158829875-e5316a358c6f", 1600),

  // Suitcase + airport-window light — the diaspora's primary moment
  // of capital allocation: arrival and departure. (Unchanged — already
  // unique, already on-argument.)
  "the-diaspora-is-not-a-niche":                   unsplash("1779292235920-5c7862429b35", 1600),

  // Black flat-screen monitor with market data — the rate-as-the-
  // conversation desk: what the credit committee actually looks at.
  "credit-when-the-rate-is-the-conversation":      unsplash("1590283603385-17ffb3a7f29f", 1600),

  // Calculator and pen on a paper ledger — the end-of-day discipline,
  // the act itself. The treasurer's most-used objects.
  "treasury-and-the-discipline-of-the-end-of-day": unsplash("1648201637025-1c77b9be3013", 1600),

  // Two people in conversation across an office table — the "second
  // conversation" wealth article makes visible: the meeting, not the
  // money.
  "wealth-and-the-second-conversation":            unsplash("1551836022-aadb801c60ae", 1600),

  // Typesetting metal letters in a wooden tray — letterpress craft.
  // The bank-as-a-publishing-institution argument shown as a
  // typographer's drawer, the literal apparatus of editorial labour.
  "the-bank-as-a-publishing-institution":          unsplash("1778167093244-33d90e4f76c2", 1600),

  // Architect working on a draft with pencil and ruler — "becoming"
  // as drafting. The bank under design before it is under operation.
  "becoming-a-bank":                                unsplash("1503387762-592deb58ef4e", 1600),
};

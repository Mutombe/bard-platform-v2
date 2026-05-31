import { motion } from "framer-motion";

/**
 * TickerStrip — Bloomberg/Reuters-style scrolling ticker.
 *
 * A horizontal band of mono ticker entries that loops continuously
 * across the screen. Used under the home hero, signalling "this is
 * a live institution" without claiming real-time market data we
 * don't have (the values are institutional posture, not feeds).
 *
 * Mechanics:
 *   • Single inner row holds the items DUPLICATED end-to-end so the
 *     loop is seamless — CSS keyframes translate -50% over N seconds.
 *   • Per-item: ticker code chip + delta with up/down arrow + colour.
 *   • Hover anywhere on the strip pauses the animation.
 */
const ITEMS = [
  { code: "BSMFB", note: "Microfinance Bank", delta: "Operational" },
  { code: "BSM-WEALTH", note: "Discretionary mandates", delta: "Open" },
  { code: "USD/ZWL", note: "CBZ midmarket", delta: "↑ 0.42%" },
  { code: "AFRICA-50", note: "Bardiq index", delta: "↓ 0.18%" },
  { code: "DIASPORA", note: "Cross-border desk", delta: "Live" },
  { code: "TREASURY", note: "Money-market book", delta: "Daily" },
  { code: "GOLD/USD", note: "Spot ref. London PM", delta: "↑ 0.34%" },
  { code: "ZAR/USD", note: "JSE close", delta: "↓ 0.21%" },
  { code: "BARDIQ", note: "Vol. II — Q2 2026", delta: "Available" },
  { code: "BSMFB-AGR", note: "Agri-credit programme", delta: "Open intake" },
];

export default function TickerStrip({ tone = "navy" }) {
  const palettes = {
    navy: {
      bg: "bg-navy-900",
      border: "border-navy-700",
      text: "text-white/80",
      code: "text-orange-400",
      delta: "text-emerald-300",
      sep: "text-white/15",
    },
    ink: {
      bg: "bg-ink",
      border: "border-white/10",
      text: "text-white/80",
      code: "text-gold-300",
      delta: "text-emerald-300",
      sep: "text-white/15",
    },
    paper: {
      bg: "bg-parchment",
      border: "border-bone-300",
      text: "text-bone-700",
      code: "text-orange-700",
      delta: "text-emerald-700",
      sep: "text-bone-400",
    },
  };
  const p = palettes[tone] || palettes.navy;

  // Duplicate items so the marquee loops seamlessly
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div
      className={`relative overflow-hidden border-y ${p.border} ${p.bg} group`}
      aria-label="Live ticker"
      role="region"
    >
      <motion.div
        className="flex items-center gap-10 py-2.5 whitespace-nowrap group-hover:[animation-play-state:paused]"
        style={{
          animation: "ticker-scroll 60s linear infinite",
          width: "max-content",
        }}
      >
        {loop.map((it, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-3 text-[11.5px] tracking-[0.08em] uppercase font-mono-data ${p.text}`}
          >
            <span className={`font-semibold ${p.code}`}>{it.code}</span>
            <span className="opacity-65">{it.note}</span>
            <span className={p.delta}>{it.delta}</span>
            <span className={`mx-2 ${p.sep}`}>·</span>
          </span>
        ))}
      </motion.div>

      {/* Edge fades — left and right ends fade to bg so the loop wrap
          isn't visible. */}
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r to-transparent`}
        style={{
          backgroundImage: `linear-gradient(to right, var(--ticker-bg, var(--color-navy-900)), transparent)`,
        }}
      />
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l to-transparent`}
        style={{
          backgroundImage: `linear-gradient(to left, var(--ticker-bg, var(--color-navy-900)), transparent)`,
        }}
      />

      {/* Local @keyframes shipped inline so the component is self-
          contained. Translates -50% because the visible items are
          duplicated 2x — at the midpoint the next loop's first item
          is exactly where the first loop's first item started. */}
      <style>{`
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

import Monogram from "../Monogram.jsx";

/**
 * BrandCartouche — heritage sub-brand frame.
 *
 * A thin double-rule border wrapping the Monogram + a two-line label.
 * The institutional gesture: this is a SUB-DIVISION (Wealth, Markets,
 * BSMFB), not the parent brand. Heritage cartouche grammar from
 * illuminated manuscripts and old-bank letterheads.
 *
 * Variants:
 *   tone="gold"      — burgundy seal aesthetic (Wealth)
 *   tone="emerald"   — markets/discipline
 *   tone="orange"    — the bank's brand-orange (default)
 *   tone="ink"       — neutral institutional
 *
 * Layout:
 *   ┌──────────────────────────┐
 *   │  ◆ ─────────────────  ◆  │
 *   │ ░░░  BARD SANTNER  ░░░  │
 *   │ ░BS░  WEALTH       ░░░  │
 *   │  ◆ ─────────────────  ◆  │
 *   └──────────────────────────┘
 */
const TONES = {
  gold: {
    border: "border-gold-400",
    cap: "text-gold-200",
    sub: "text-gold-400",
    bg: "bg-gold-700/30",
    monogram: "var(--color-gold-300)",
  },
  emerald: {
    border: "border-emerald-300",
    cap: "text-emerald-100",
    sub: "text-emerald-300",
    bg: "bg-emerald-700/30",
    monogram: "var(--color-emerald-100)",
  },
  burgundy: {
    border: "border-burgundy-300",
    cap: "text-burgundy-50",
    sub: "text-burgundy-300",
    bg: "bg-burgundy-700/40",
    monogram: "var(--color-burgundy-100)",
  },
  orange: {
    border: "border-orange-400",
    cap: "text-orange-50",
    sub: "text-orange-300",
    bg: "bg-orange-700/30",
    monogram: "var(--color-orange-200)",
  },
  ink: {
    border: "border-white/30",
    cap: "text-white/70",
    sub: "text-white",
    bg: "bg-white/[0.04]",
    monogram: "rgba(255,255,255,0.85)",
  },
};

export default function BrandCartouche({
  tone = "orange",
  parent = "Bard Santner",
  division = "Wealth",
  showMonogram = true,
  className = "",
}) {
  const t = TONES[tone] || TONES.orange;
  return (
    <div className={`relative inline-flex items-center gap-3.5 px-4 py-3 border ${t.border} ${t.bg} ${className}`}>
      {/* Corner diamond marks — illuminated-manuscript gesture */}
      <span className={`absolute -top-[5px] left-1/2 -translate-x-1/2 text-[8px] leading-none ${t.sub}`} aria-hidden="true">◆</span>
      <span className={`absolute -bottom-[5px] left-1/2 -translate-x-1/2 text-[8px] leading-none ${t.sub}`} aria-hidden="true">◆</span>

      {showMonogram && (
        <Monogram size={26} color={t.monogram} />
      )}
      <div className="flex flex-col leading-none">
        <span className={`font-grotesk text-[9.5px] tracking-[0.22em] uppercase font-medium ${t.cap}`}>
          {parent}
        </span>
        <span className={`font-grotesk text-[15px] tracking-[0.10em] uppercase font-semibold mt-1 ${t.sub}`}>
          {division}
        </span>
      </div>
    </div>
  );
}

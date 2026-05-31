/**
 * SealStamp — wax-style brand seal.
 *
 * Circular emblem with the brand initials "BS", cross-hatched texture,
 * subtle rotation, deep burgundy / gold defaults. Used on:
 *   • Trust pages (the institutional "warrant" gesture)
 *   • Founding marks ("Est. 2025 Harare")
 *   • End-of-document acknowledgments
 *   • Insight article publishing marks
 *
 * Defaults reflect a classical wax seal: dark burgundy with gold
 * relief. Tone="ink" gives a sharper modern black-on-white version.
 */
const TONES = {
  burgundy: {
    bg: "bg-burgundy-500",
    ring: "var(--color-gold-400)",
    text: "text-gold-200",
    shadow: "shadow-[0_6px_20px_rgba(91,26,46,0.40)]",
  },
  gold: {
    bg: "bg-gold-500",
    ring: "var(--color-gold-700)",
    text: "text-gold-50",
    shadow: "shadow-[0_6px_20px_rgba(146,114,68,0.35)]",
  },
  emerald: {
    bg: "bg-emerald-500",
    ring: "var(--color-gold-400)",
    text: "text-emerald-50",
    shadow: "shadow-[0_6px_20px_rgba(10,74,60,0.35)]",
  },
  ink: {
    bg: "bg-ink",
    ring: "var(--color-orange-400)",
    text: "text-white",
    shadow: "shadow-[0_6px_20px_rgba(12,10,20,0.35)]",
  },
};

export default function SealStamp({
  size = 72,
  tone = "burgundy",
  label = "EST · 2025",
  initials = "BS",
  rotate = -4,
  className = "",
}) {
  const t = TONES[tone] || TONES.burgundy;
  const px = `${size}px`;
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full ${t.bg} ${t.text} ${t.shadow} ${className}`}
      style={{
        width: px,
        height: px,
        transform: `rotate(${rotate}deg)`,
        boxShadow: `
          inset 0 0 0 1px rgba(255,255,255,0.15),
          inset 0 0 0 6px transparent,
          inset 0 0 0 7px ${t.ring}
        `,
      }}
      aria-hidden="true"
    >
      {/* Cross-hatched texture overlay */}
      <span
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: `repeating-conic-gradient(rgba(255,255,255,0.05) 0deg 12deg, transparent 12deg 24deg)`,
        }}
      />
      {/* Stamp content */}
      <div className="relative flex flex-col items-center leading-none">
        <span className="font-display text-[22px] font-medium tracking-[0.04em]">
          {initials}
        </span>
        <span className="font-mono-data text-[7.5px] tracking-[0.18em] uppercase mt-1 opacity-80">
          {label}
        </span>
      </div>
    </div>
  );
}

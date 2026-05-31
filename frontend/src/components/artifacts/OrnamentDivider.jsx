/**
 * OrnamentDivider — typographic ornament between sections.
 *
 * Hairline rule with a centred ornament (default ❦ — the floral
 * heart, an editorial publisher's mark). Other ornaments:
 *   §   — chapter mark, the institutional editorial signature
 *   ◆   — diamond, simple geometric
 *   ✦   — quatrefoil star, heritage
 *   ※   — reference mark, scholarly
 *
 * Used between major page sections to give the document a
 * manuscript-edition rhythm.
 */
export default function OrnamentDivider({
  ornament = "§",
  className = "",
  tone = "default",
}) {
  const colors = {
    default: "text-bone-400",
    onDark: "text-white/30",
    gold: "text-gold-400",
    orange: "text-orange-500",
  };
  return (
    <div
      className={`flex items-center gap-5 md:gap-7 ${colors[tone]} ${className}`}
      aria-hidden="true"
    >
      <span className="flex-1 h-[1px] bg-current opacity-40" />
      <span className="font-display text-[14px] md:text-[15px] opacity-80 select-none">
        {ornament}
      </span>
      <span className="flex-1 h-[1px] bg-current opacity-40" />
    </div>
  );
}

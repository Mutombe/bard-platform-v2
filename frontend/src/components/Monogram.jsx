/**
 * Bard Santner BS monogram, inline SVG. Used in the nav, footer, hero,
 * 404 page and the favicon. Single-colour mode picks up currentColor.
 *
 * Spec from the brand manual:
 *   - circle outline
 *   - central vertical bisector
 *   - mirrored B/S devices on each side of the bisector
 */
export default function Monogram({ size = 32, color = "currentColor", className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      width={size}
      height={size}
      role="img"
      aria-label="Bard Santner"
      className={className}
    >
      <circle cx="60" cy="60" r="54" fill="none" stroke={color} strokeWidth="7" />
      <line x1="60" y1="14" x2="60" y2="106" stroke={color} strokeWidth="7" />
      <path
        d="M 38 28 Q 50 28 50 40 Q 50 52 38 52 Q 50 52 50 64 Q 50 76 38 76"
        fill="none"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 82 28 Q 70 28 70 40 Q 70 52 82 52 Q 70 52 70 64 Q 70 76 82 76"
        fill="none"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

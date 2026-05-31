import { motion } from "framer-motion";

/**
 * VintageMap — Africa with corridor pin annotations.
 *
 * A custom-drawn map of Africa (SVG, hand-crafted minimalist
 * silhouette) with red ink-style pin annotations marking the
 * corridor cities Bard Santner banks across. Each pin carries a
 * code label in the manuscript-italic / mono pairing.
 *
 * Used on the international page, the corridor insight article, and
 * a home-page "where we operate" section.
 *
 * The map silhouette is intentionally NOT a precise geographic
 * boundary — it's a 1920s-cartography-style stylisation, like the
 * maps in old Pictet annual reports.
 */

const PINS = [
  { id: "harare",  city: "Harare",      code: "HRE", cx: 314, cy: 320, role: "Flagship" },
  { id: "johannesburg", city: "Johannesburg", code: "JNB", cx: 300, cy: 358, role: "Representative office" },
  { id: "cape",    city: "Cape Town",   code: "CPT", cx: 268, cy: 392, role: "2026 Q4" },
  { id: "lagos",   city: "Lagos",       code: "LOS", cx: 192, cy: 248, role: "Corridor" },
  { id: "nairobi", city: "Nairobi",     code: "NBO", cx: 340, cy: 252, role: "Corridor" },
  { id: "london",  city: "London",      code: "LON", cx: 230, cy: 64,  role: "Diaspora desk" },
  { id: "mombasa", city: "Mombasa",     code: "MBA", cx: 348, cy: 274, role: "Corridor" },
];

export default function VintageMap({ className = "" }) {
  return (
    <div className={`relative w-full max-w-[640px] mx-auto ${className}`}>
      <svg
        viewBox="0 0 480 480"
        className="w-full h-auto"
        style={{ filter: "sepia(0.05)" }}
        aria-label="Bard Santner corridor map of Africa with pin annotations"
        role="img"
      >
        {/* Compass rose top-right */}
        <g transform="translate(420, 50)" opacity="0.55">
          <circle r="22" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <path d="M0,-22 L0,22 M-22,0 L22,0" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          <path d="M0,-22 L-3,-8 L0,-11 L3,-8 Z" fill="currentColor" />
          <text y="-28" textAnchor="middle" fontSize="10" fontFamily="var(--font-mono)" fill="currentColor">N</text>
        </g>

        {/* Stylised Africa silhouette — hand-crafted minimalist path.
            Not a precise boundary. Drawn from sketch references of
            classical 1920s cartographic stylisations. */}
        <path
          d="M 220,82
             C 232,76 256,78 274,86
             L 286,100 L 298,108 L 304,124
             C 310,140 308,156 318,172
             L 332,188 L 348,200 L 358,224
             L 364,242 L 366,262
             C 364,278 358,292 352,306
             L 348,322 L 344,338 L 340,356
             L 332,374 L 322,388 L 310,398
             L 296,408 L 282,414 L 264,414
             L 248,408 L 232,398 L 218,386
             L 206,372 L 196,358 L 188,342
             L 182,324 L 176,304 L 170,286
             L 162,268 L 156,252 L 152,236
             L 150,218 L 148,200 L 152,182
             L 158,164 L 168,148 L 178,134
             L 192,118 L 208,98 Z"
          fill="currentColor"
          fillOpacity="0.05"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.45"
        />

        {/* Connecting trade lines — corridor */}
        <g stroke="var(--color-orange-500)" strokeWidth="0.7" strokeOpacity="0.7" fill="none" strokeDasharray="3,3">
          <path d="M 192,248 Q 250,260 314,320" />
          <path d="M 340,252 Q 330,290 314,320" />
          <path d="M 314,320 Q 290,360 300,358" />
          <path d="M 300,358 Q 285,380 268,392" />
          <path d="M 314,320 Q 220,200 230,64" />
        </g>

        {/* Latitude / longitude marks — manuscript map gesture */}
        <g stroke="currentColor" strokeWidth="0.4" strokeOpacity="0.18">
          <line x1="40"  y1="240" x2="440" y2="240" />
          <line x1="240" y1="40"  x2="240" y2="440" />
        </g>

        {/* Pins */}
        {PINS.map((p, i) => (
          <motion.g
            key={p.id}
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <circle cx={p.cx} cy={p.cy} r="4.5" fill="var(--color-orange-500)" />
            <circle cx={p.cx} cy={p.cy} r="9" fill="none" stroke="var(--color-orange-500)" strokeWidth="0.8" opacity="0.6" />
            <text
              x={p.cx + 12}
              y={p.cy - 4}
              fontFamily="var(--font-mono)"
              fontSize="8.5"
              fontWeight="600"
              fill="var(--color-orange-700)"
              letterSpacing="0.5"
            >
              {p.code}
            </text>
            <text
              x={p.cx + 12}
              y={p.cy + 6}
              fontFamily="var(--font-accent-italic)"
              fontSize="9.5"
              fontStyle="italic"
              fill="currentColor"
              opacity="0.7"
            >
              {p.city}
            </text>
          </motion.g>
        ))}

        {/* Decorative footer text — manuscript map gesture */}
        <text
          x="240" y="460"
          textAnchor="middle"
          fontFamily="var(--font-accent-italic)"
          fontSize="11"
          fontStyle="italic"
          fill="currentColor"
          opacity="0.55"
        >
          The Bard Santner Corridor · 2026
        </text>
      </svg>
    </div>
  );
}

/**
 * MonogramPattern — repeating BS monogram backdrop.
 *
 * Wraps any section in a positioned div that adds the monogram tile
 * pattern at low opacity behind the content. Compositional:
 *   <section className="relative">
 *     <MonogramPattern intensity="strong" tone="dark" />
 *     ...section content...
 *   </section>
 *
 * Intensity: soft (2.5% / 180px) · default (5% / 140px) · strong (9% / 120px)
 * Tone: light (default — bone monograms on light bg) · dark (white
 *       monograms on dark bg via filter invert).
 */
export default function MonogramPattern({
  intensity = "default",
  tone = "light",
  className = "",
}) {
  const INTENSITY = {
    soft:    { opacity: 0.025, size: 180 },
    default: { opacity: 0.05,  size: 140 },
    strong:  { opacity: 0.09,  size: 120 },
  };
  const { opacity, size } = INTENSITY[intensity] || INTENSITY.default;
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: "url(/monogram-pattern.svg)",
        backgroundSize: `${size}px`,
        backgroundRepeat: "repeat",
        opacity,
        filter: tone === "dark" ? "invert(1)" : undefined,
      }}
      aria-hidden="true"
    />
  );
}

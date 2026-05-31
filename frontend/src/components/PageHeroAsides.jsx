import { motion } from "framer-motion";
import { HERO, INSIGHT } from "../data/images.js";

/**
 * Four creative aside compositions for the editorial PageHero variant.
 * Each gives one specific editorial page a unique right-column gesture,
 * so /insights, /contact, /leadership and /locations stop sharing one
 * generic single-image card.
 *
 *   HoneycombAside  /insights     hex tessellation of editorial moments
 *   StackedAside    /contact      layered offset cards, conversation
 *   TriptychAside   /leadership   three vertical strip portraits
 *   MondrianAside   /locations    quadrant grid, geography as structure
 *
 * The pattern is borrowed from silvergill (honeycomb), Investec (stacked
 * portraits) and Lloyds (triptych) — all institutional banks that use
 * the right column as a visual argument, not a decoration.
 */

// ─── HoneycombAside ──────────────────────────────────────────────────
// Tessellated hex tiles. Six images, five for editorial photos plus one
// orange "EDIT/§" cell that anchors the cluster.
const HEX_CLIP = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";
const layoutHex = (row, col, size, gap = 10) => {
  const height = size * 1.1547;
  const xStep = size + gap;
  const yStep = height * 0.75 + gap;
  const xOffset = row % 2 === 1 ? xStep / 2 : 0;
  return {
    width: `${size}px`,
    height: `${height}px`,
    left: `${col * xStep + xOffset}px`,
    top: `${row * yStep}px`,
    clipPath: HEX_CLIP,
  };
};
export function HoneycombAside() {
  // Five editorial photographs + the orange "§ Editorial" anchor cell
  // in the centre. The diaspora photo (1779292235920-5c7862429b35) was
  // swapped for the becoming-a-bank "architect drafting" photo — the
  // user wanted that specific tile replaced; everything else stays.
  const photos = [
    INSIGHT["the-bank-as-a-publishing-institution"],
    INSIGHT["africa-and-the-cross-border-rail"],
    INSIGHT["becoming-a-bank"],
    INSIGHT["wealth-and-the-second-conversation"],
    INSIGHT["the-quiet-case-for-a-deposit-base"],
  ];
  const SIZE = 118;
  // Outer wrapper adds right padding so the cluster keeps a deliberate
  // gap from the page's right edge instead of pressing against it.
  return (
    <div className="w-full pr-4 md:pr-8 lg:pr-10">
      <div className="relative w-full max-w-[420px] h-[420px] mx-auto">
        {[
          [0, 0, photos[0], 0.0],
          [0, 1, photos[1], 0.08],
          [1, 0, photos[2], 0.16],
          [1, 1, "label", 0.24],
          [1, 2, photos[3], 0.32],
          [2, 1, photos[4], 0.40],
        ].map(([row, col, src, delay], i) => (
          <motion.div
            key={i}
            className="absolute overflow-hidden"
            style={layoutHex(row, col, SIZE, 10)}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
          >
            {src === "label" ? (
              <div className="w-full h-full bg-orange-500 flex flex-col items-center justify-center text-navy-900">
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-80">
                  §
                </span>
                <span className="font-display text-[13px] font-medium mt-1">
                  Editorial
                </span>
              </div>
            ) : (
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
                style={{ filter: "saturate(0.78) brightness(0.93)" }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── StackedAside ────────────────────────────────────────────────────
// Three photos stacked at slight rotation offsets — a conversation
// stack, like polaroids on a desk. For /contact.
export function StackedAside() {
  const photos = [
    HERO.contact,
    HERO.business,
    HERO.leadership,
  ];
  const transforms = [
    { rot: -4, x: -28, y: 20, z: 1 },
    { rot: 3, x: 24, y: -16, z: 2 },
    { rot: -1, x: 0, y: 0, z: 3 },
  ];
  return (
    <div className="relative w-full max-w-[380px] aspect-[4/5] mx-auto">
      {photos.map((src, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-md overflow-hidden shadow-[0_16px_40px_rgba(12,10,20,0.18)]"
          style={{
            transform: `translate(${transforms[i].x}px, ${transforms[i].y}px) rotate(${transforms[i].rot}deg)`,
            zIndex: transforms[i].z,
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: transforms[i].y }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.78) brightness(0.92)" }}
          />
        </motion.div>
      ))}
    </div>
  );
}

// ─── TriptychAside ───────────────────────────────────────────────────
// Three narrow vertical strips, like a banker's lineup. For /leadership.
export function TriptychAside() {
  const photos = [
    HERO.leadership,
    HERO.business,
    HERO.private,
  ];
  return (
    <div className="grid grid-cols-3 gap-2 w-full max-w-[440px] mx-auto">
      {photos.map((src, i) => (
        <motion.div
          key={i}
          className="aspect-[2/5] overflow-hidden rounded-sm"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.72) brightness(0.9)" }}
          />
        </motion.div>
      ))}
    </div>
  );
}

// ─── MondrianAside ───────────────────────────────────────────────────
// Asymmetric quadrant grid — places + geography as institutional
// composition. For /locations.
export function MondrianAside() {
  const cells = [
    {
      src: HERO.locations,
      className: "col-span-2 row-span-2 aspect-square",
    },
    {
      src: HERO.about,
      className: "col-span-1 row-span-1 aspect-square",
    },
    {
      src: HERO.institutional,
      className: "col-span-1 row-span-1 aspect-square",
    },
    {
      // Orange accent cell — institutional mark
      src: null,
      className: "col-span-2 row-span-1 aspect-[2/1]",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-2 w-full max-w-[440px] mx-auto">
      {cells.map((c, i) => (
        <motion.div
          key={i}
          className={`${c.className} overflow-hidden rounded-sm`}
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {c.src ? (
            <img
              src={c.src}
              alt=""
              className="w-full h-full object-cover"
              style={{ filter: "saturate(0.72) brightness(0.9)" }}
            />
          ) : (
            <div className="w-full h-full bg-orange-500 flex items-center justify-center">
              <div className="text-navy-900">
                <p className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-80">
                  § Reach
                </p>
                <p className="font-display text-[18px] md:text-[20px] font-medium leading-tight mt-1">
                  Three continents
                </p>
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

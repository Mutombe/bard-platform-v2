import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { AUDIENCES } from "../data/audiences.js";
import { AUDIENCE_TILE } from "../data/images.js";

/**
 * The AfrAsia "Banking Experiences" tile module. Five tiles (Personal,
 * Business, Private, International, Institutional). Each tile is a
 * full-bleed editorial portrait with overlay caption.
 *
 * Mobile layout: 2-col grid for the first four, and the fifth becomes a
 * wide horizontal tile spanning both columns with a 16:9 photo. This
 * resolves the previous awkward "5th tile col-span-2 at aspect-3/4"
 * which left the bottom tile taller than the four above it.
 *
 * Desktop layout: 5 across at lg+ as a clean institutional row.
 *
 * Reads from /data/audiences.js so this is the same data the audience
 * strip uses; one source of truth.
 */

// Mobile-shortened headlines for the tile copy — the desktop version
// reads "Banking for your business" etc. but on a 165px-wide tile that
// crowds the bottom. Each mobile variant is the noun alone.
const MOBILE_CAPTION = {
  personal: "For you",
  business: "For your business",
  private: "For your wealth",
  international: "For the diaspora",
  institutional: "For institutions",
};
const DESKTOP_CAPTION = {
  personal: "you",
  business: "your business",
  private: "your wealth",
  international: "the diaspora",
  institutional: "institutions",
};

export default function AudienceTiles({ heading = "Banking experiences" }) {
  // Split out the fifth tile so we can give it its own mobile gesture.
  const firstFour = AUDIENCES.slice(0, 4);
  const fifth = AUDIENCES[4];

  return (
    <section className="section bg-milk">
      <div className="container-bank">
        <div className="text-center mb-10 md:mb-16">
          <p className="eyebrow mb-4">§ 02 · How we organise</p>
          <h2 className="display-xl text-navy-600">
            {heading}
            <br className="hidden sm:inline" />
            <span className="text-navy-600">
              {" "}for every life that needs banking.
            </span>
          </h2>
          <p className="mt-5 md:mt-6 text-bone-600 max-w-xl mx-auto leading-relaxed text-[15.5px] md:text-[17px]">
            Five clear contexts. One bank. Choose the one your next
            conversation belongs in.
          </p>
        </div>

        {/* Mobile + tablet: 2-col grid for the first four with aspect-[3/4].
            Desktop (lg+): all five sit side-by-side as a single row. */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-2.5 md:gap-4">
          {firstFour.map((a, i) => (
            <Tile key={a.id} a={a} i={i} aspect="aspect-[3/4]" />
          ))}
          {/* Mobile fifth tile — full-width 16:9, sits below the 2×2 grid.
              On desktop it falls into the 5-col row in its natural slot. */}
          {fifth && (
            <div className="col-span-2 lg:col-span-1">
              <Tile a={fifth} i={4} aspect="aspect-[16/9] lg:aspect-[3/4]" wide />
            </div>
          )}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <Link to="/contact" className="btn btn-primary">
            Become a client
            <ArrowRightIcon size={14} weight="bold" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Tile({ a, i, aspect, wide = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={a.path}
        className={`group block relative overflow-hidden rounded-lg ${aspect}`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage: `url(${AUDIENCE_TILE[a.id] || a.hero_image})`,
            backgroundColor: "var(--color-navy-700)",
            filter: "saturate(0.85) brightness(0.92)",
          }}
        />
        {/* Top ink wash so the label has its own dark canvas */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-ink/55 via-transparent to-transparent"
          style={{ height: "40%" }}
        />
        {/* Warm bottom wash — middle-down orange/ink */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/35 via-50% to-ink/95" />

        {/* Top-pinned audience label — sits at the same y across all five
            tiles regardless of headline length below. Mobile padding
            tightens to p-4 (16px) on aspect-3/4 tiles so the label has
            room without crowding. */}
        <div className="absolute top-0 inset-x-0 p-4 md:p-7 lg:p-8">
          <p className="eyebrow eyebrow-on-dark underline underline-offset-[6px] decoration-1 decoration-orange-400/70 text-[10.5px] md:text-[12px]">
            {a.label}
          </p>
        </div>

        {/* Bottom-pinned headline + CTA */}
        <div className={`absolute inset-x-0 bottom-0 p-4 md:p-7 lg:p-8 ${wide ? "lg:p-8" : ""}`}>
          <p className="font-display text-[16px] md:text-[20px] lg:text-[22px] text-white leading-snug">
            <span className="hidden md:inline">
              Banking for{" "}
              <span className="text-white">{DESKTOP_CAPTION[a.id]}</span>
            </span>
            <span className="md:hidden">{MOBILE_CAPTION[a.id]}</span>
          </p>
          <span className="mt-3 md:mt-5 inline-flex items-center gap-2 text-[11.5px] md:text-[13px] text-white/80 group-hover:text-white transition-colors">
            Open the door
            <ArrowRightIcon size={12} weight="bold" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

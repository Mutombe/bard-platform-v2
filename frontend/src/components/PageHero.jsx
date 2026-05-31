import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@phosphor-icons/react";

// CTA helper — when the destination starts with http(s) we render an
// anchor (and open it in a new tab); otherwise the standard Router Link.
// Lets pages pass external URLs (e.g. the online-banking portal) in
// the same shape as internal routes.
function HeroCTA({ cta, className, withArrow = false }) {
  if (!cta) return null;
  const isExternal = /^https?:\/\//.test(cta.to);
  const inner = (
    <>
      {cta.label}
      {withArrow && <ArrowRightIcon size={14} weight="bold" />}
    </>
  );
  if (isExternal) {
    return (
      <a href={cta.to} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }
  return (
    <Link to={cta.to} className={className}>
      {inner}
    </Link>
  );
}

/**
 * Institutional page hero. Three variants:
 *
 *   variant="full-bleed"  — Lloyds "Almost home" full image + dark overlay + bottom-left text
 *   variant="split"        — Lloyds Club Lloyds: colour panel left + photo right
 *   variant="editorial"    — Investec: large left text, generous whitespace, aside right
 *
 * MOBILE BEHAVIOUR (every variant):
 *   On mobile (<md) every hero — regardless of declared variant — renders
 *   as a full-bleed image hero with white headline overlaid on the
 *   photograph. This is the Lloyds / AfrAsia / Investec mobile pattern.
 *   The variant choice only governs DESKTOP layout. The mobile experience
 *   is consistent: image-led, dramatic, identical rhythm site-wide.
 *
 *   The desktop asides (HoneycombAside / TriptychAside / etc.) stay
 *   desktop-only — they are composed for a 460px right column and don't
 *   survive a 343px mobile container.
 */
export default function PageHero(props) {
  const { variant = "full-bleed" } = props;

  // Full-bleed is already mobile-and-desktop full-bleed by design.
  if (variant === "full-bleed") {
    return <FullBleedHero {...props} />;
  }

  // Editorial and split: render a mobile full-bleed AND a desktop layout.
  // Tailwind's responsive utilities show/hide the right one.
  return (
    <>
      <div className="md:hidden">
        <FullBleedHero {...props} />
      </div>
      <div className="hidden md:block">
        {variant === "editorial" ? <EditorialDesktopHero {...props} /> : <SplitDesktopHero {...props} />}
      </div>
    </>
  );
}

// ─── Shared: full-bleed image hero with parallax + overlays ───────────
function FullBleedHero({
  eyebrow,
  headline,
  italicTail,
  body,
  primaryCTA,
  secondaryCTA,
  image,
  overlayTint = "navy",
  align = "left",
  noteUnderCTA,
}) {
  const tints = {
    navy: {
      multiply: "bg-navy-900/15",
      from: "from-navy-950/95",
      via: "via-navy-900/55",
      to: "to-transparent",
      mobileBottom: "from-navy-950/85",
    },
    ink: {
      multiply: "bg-ink/15",
      from: "from-ink/95",
      via: "via-ink/55",
      to: "to-transparent",
      mobileBottom: "from-ink/85",
    },
    orange: {
      multiply: "bg-orange-900/12",
      from: "from-orange-950/90",
      via: "via-orange-900/45",
      to: "to-transparent",
      mobileBottom: "from-orange-950/85",
    },
  };
  const t = tints[overlayTint] || tints.navy;

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.4]);

  return (
    <section ref={heroRef} className="relative overflow-hidden bg-navy-900">
      {/* L1 — orange accent rule at the top edge */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-orange-500 z-20" />

      {/* L2 — photograph with editorial filter + parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: image ? `url(${image})` : undefined,
          filter: image ? "saturate(0.7) brightness(0.88) contrast(1.05)" : undefined,
          y: photoY,
          scale: photoScale,
        }}
      />

      {/* L3 — light multiply tint */}
      <div className={`absolute inset-0 ${t.multiply} mix-blend-multiply`} />

      {/* L4 — text canvas. Desktop horizontal (Lloyds), mobile vertical
          (bottom-up) so the white headline always lands on dark canvas
          regardless of how narrow the column gets. */}
      <div className={`absolute inset-0 hidden md:block bg-gradient-to-r ${t.from} ${t.via} ${t.to}`} />
      <div className={`absolute inset-0 md:hidden bg-gradient-to-t ${t.mobileBottom} via-ink/55 via-50% to-ink/30`} />

      {/* L5 — soft top dim */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-transparent" />

      <div className="relative container-bank min-h-[calc(100svh-280px)] md:min-h-[calc(100svh-236px)] flex flex-col justify-center pt-14 md:pt-28 pb-14 md:pb-28">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className={`max-w-4xl lg:max-w-5xl ${align === "center" ? "mx-auto text-center" : ""}`}
        >
          {eyebrow && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="eyebrow eyebrow-on-dark mb-5 md:mb-6"
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="display-hero text-white text-balance"
          >
            {headline}
            {italicTail && (
              <>
                <br />
                <span className="text-white">{italicTail}</span>
              </>
            )}
          </motion.h1>
          {body && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 md:mt-9 text-white/85 max-w-xl text-[16px] md:text-[19px] leading-relaxed"
            >
              {body}
            </motion.p>
          )}
          {(primaryCTA || secondaryCTA) && (
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3">
              <HeroCTA cta={primaryCTA} withArrow className="btn btn-primary w-full sm:w-auto justify-center" />
              <HeroCTA cta={secondaryCTA} className="btn btn-ghost-dark w-full sm:w-auto justify-center" />
            </div>
          )}
          {noteUnderCTA && (
            <p className="mt-4 text-[11.5px] text-white/60">{noteUnderCTA}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Desktop editorial layout — text left, aside right ─────────────
function EditorialDesktopHero({
  eyebrow,
  headline,
  italicTail,
  body,
  primaryCTA,
  secondaryCTA,
  image,
  aside,
  noteUnderCTA,
}) {
  return (
    <section className="bg-milk">
      <div className="container-bank min-h-[calc(100svh-236px)] flex flex-col justify-center py-16">
        <div className="grid grid-cols-12 gap-14 items-center">
          <div className="col-span-8">
            {eyebrow && <p className="eyebrow mb-6">{eyebrow}</p>}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="display-hero text-navy-600 text-balance"
            >
              {headline}
              {italicTail && (
                <>
                  <br />
                  <span className="text-navy-600">{italicTail}</span>
                </>
              )}
            </motion.h1>
            {body && (
              <p className="mt-10 text-[20px] text-bone-600 max-w-xl leading-relaxed">
                {body}
              </p>
            )}
            {(primaryCTA || secondaryCTA) && (
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <HeroCTA cta={primaryCTA} withArrow className="btn btn-primary" />
                <HeroCTA cta={secondaryCTA} className="btn btn-ghost-light" />
              </div>
            )}
            {noteUnderCTA && (
              <p className="mt-4 text-[12px] text-bone-500">{noteUnderCTA}</p>
            )}
          </div>
          <div className="col-span-4">
            {aside ? (
              aside
            ) : (
              <div
                className="aspect-[4/5] rounded-xl bg-bone-200 bg-cover bg-center"
                style={{ backgroundImage: image ? `url(${image})` : undefined }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Desktop split layout — panel + photo ─────────────────────────
function SplitDesktopHero({
  eyebrow,
  headline,
  italicTail,
  body,
  primaryCTA,
  secondaryCTA,
  image,
  noteUnderCTA,
}) {
  return (
    <section className="bg-milk">
      <div className="container-bank pt-10 pb-0">
        <div className="grid grid-cols-12 gap-0 rounded-xl overflow-hidden min-h-[calc(100svh-276px)]">
          <div className="col-span-6 bg-navy-600 text-white p-14 lg:p-16 flex flex-col justify-center">
            {eyebrow && <p className="eyebrow eyebrow-on-dark mb-6">{eyebrow}</p>}
            <h1 className="display-xl text-white">
              {headline}
              {italicTail && (
                <>
                  <br />
                  <span className="text-white">{italicTail}</span>
                </>
              )}
            </h1>
            {body && (
              <p className="mt-7 text-white/80 max-w-md text-[18px] leading-relaxed">
                {body}
              </p>
            )}
            {(primaryCTA || secondaryCTA) && (
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <HeroCTA cta={primaryCTA} withArrow className="btn btn-primary" />
                <HeroCTA cta={secondaryCTA} className="btn btn-ghost-dark" />
              </div>
            )}
            {noteUnderCTA && (
              <p className="mt-4 text-[11.5px] text-white/55">{noteUnderCTA}</p>
            )}
          </div>
          <div
            className="col-span-6 bg-bone-200"
            style={{
              backgroundImage: image ? `url(${image})` : undefined,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>
    </section>
  );
}

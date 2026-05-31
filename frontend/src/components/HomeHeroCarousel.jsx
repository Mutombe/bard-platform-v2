import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRightIcon, CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { HERO, MARQUEE } from "../data/images.js";
import CornerMarks from "./artifacts/CornerMarks.jsx";
import BrandCartouche from "./artifacts/BrandCartouche.jsx";

/**
 * Home hero carousel — three slides, each showcasing a different
 * solution. Replaces the static PageHero on the home page.
 *
 * Design rules carried over from PageHero (full-bleed variant):
 *   • 5-layer overlay system per slide (image / multiply / horizontal
 *     fade desktop / bottom-up fade mobile / top dim)
 *   • Section min-h = calc(100svh-280px) mobile and -236px md+ so
 *     QuickActionStrip below still seats at the viewport's bottom
 *   • Orange 2px brand rule at the very top
 *   • Container parallax: photo drifts +22%, text -12% on scroll
 *
 * Carousel mechanics:
 *   • 3 slides, auto-advances every 7.5 s with a CSS-driven progress
 *     bar inside each dot
 *   • Manual navigation: left/right caret buttons + dot indicators
 *   • Hover pauses the auto-advance
 *   • Slide enter/exit via AnimatePresence opacity-fade with subtle
 *     scale; copy slides up from y=20 with delay
 */

const SLIDES = [
  {
    id: "institution",
    eyebrow: "§ 01 · Bard Santner Markets Inc",
    headline: "Built for the African enterprise.",
    body: "A modern African financial platform. Banking, wealth, markets and advisory, built to international standards.",
    image: HERO.home,
    overlayTint: "navy",
    primaryCTA: { to: "/personal", label: "Open an account" },
    secondaryCTA: { to: "/group", label: "Meet the Group" },
  },
  {
    id: "online-banking",
    eyebrow: "§ Online Banking",
    headline: "Banking that travels with you.",
    body: "Send, receive, save and manage from any device. Same bank, same banker — without the queue.",
    image: HERO.onlineBanking,
    overlayTint: "ink",
    primaryCTA: { to: "/login", label: "Log in to Online Banking" },
    secondaryCTA: { to: "/app", label: "Preview the app" },
  },
  {
    id: "wealth",
    eyebrow: "§ Bard Santner Wealth",
    headline: "Patient capital. Patient counsel.",
    body: "Discretionary mandates, advisory portfolios and the long counsel of an international house — anchored in Africa.",
    image: MARQUEE.wealth,
    overlayTint: "orange",
    primaryCTA: { to: "/wealth", label: "Explore Bard Santner Wealth" },
    secondaryCTA: { to: "/contact?audience=private", label: "Speak to a wealth banker" },
  },
];

const TINTS = {
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
    multiply: "bg-orange-900/15",
    from: "from-orange-950/92",
    via: "via-orange-900/50",
    to: "to-transparent",
    mobileBottom: "from-orange-950/88",
  },
};

const AUTOPLAY_MS = 7500;

export default function HomeHeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const heroRef = useRef(null);

  // Parallax — same gesture as the original full-bleed PageHero
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.4]);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [index, paused]);

  const slide = SLIDES[index];
  const t = TINTS[slide.overlayTint] || TINTS.navy;

  const go = (delta) => setIndex((i) => (i + delta + SLIDES.length) % SLIDES.length);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-navy-900"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* L1 — orange brand rule */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-orange-500 z-30" />

      {/* L2 — photograph layer (animated per slide). Parallax wraps the
          AnimatePresence so motion values apply uniformly to whichever
          slide image is mounted. */}
      <motion.div
        className="absolute inset-0"
        style={{ y: photoY, scale: photoScale }}
      >
        <AnimatePresence mode="sync">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              filter: "saturate(0.7) brightness(0.88) contrast(1.05)",
            }}
          />
        </AnimatePresence>
      </motion.div>

      {/* L3 — light brand multiply tint */}
      <div className={`absolute inset-0 ${t.multiply} mix-blend-multiply pointer-events-none`} />
      {/* L4 — desktop horizontal text canvas */}
      <div className={`absolute inset-0 hidden md:block bg-gradient-to-r ${t.from} ${t.via} ${t.to} pointer-events-none`} />
      {/* L4b — mobile bottom-up text canvas */}
      <div className={`absolute inset-0 md:hidden bg-gradient-to-t ${t.mobileBottom} via-ink/55 via-50% to-ink/30 pointer-events-none`} />
      {/* L5 — top dim */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-transparent pointer-events-none" />

      {/* V2 — paper-trim registration marks at the four corners. The
          editorial publisher's gesture: this hero was MADE. */}
      <CornerMarks color="white" size={16} opacity={0.32} inset={20} />

      <div className="relative container-bank min-h-[calc(100svh-280px)] md:min-h-[calc(100svh-236px)] flex flex-col justify-center pt-14 md:pt-28 pb-14 md:pb-28">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="max-w-4xl lg:max-w-5xl"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              {slide.eyebrow && (
                <p className="eyebrow eyebrow-on-dark mb-5 md:mb-6">{slide.eyebrow}</p>
              )}
              {/* Experiment — hero headline uses display-hero-serif
                  (Instrument Serif). Editorial counterpoint to the
                  all-Onest system; the only place on the site where
                  we wear a serif. */}
              <h1 className="display-hero-serif text-white text-balance">
                {slide.headline}
              </h1>
              {slide.body && (
                <p className="mt-6 md:mt-9 text-white/85 max-w-xl text-[16px] md:text-[19px] leading-relaxed">
                  {slide.body}
                </p>
              )}
              {(slide.primaryCTA || slide.secondaryCTA) && (
                <div className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3">
                  {slide.primaryCTA && (
                    <Link
                      to={slide.primaryCTA.to}
                      className="btn btn-primary w-full sm:w-auto justify-center"
                    >
                      {slide.primaryCTA.label}
                      <ArrowRightIcon size={14} weight="bold" />
                    </Link>
                  )}
                  {slide.secondaryCTA && (
                    <Link
                      to={slide.secondaryCTA.to}
                      className="btn btn-ghost-dark w-full sm:w-auto justify-center"
                    >
                      {slide.secondaryCTA.label}
                    </Link>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ─── MOBILE controls — dots only, centred, with empty-space
          confidence around them. Carets + counter are desktop-only;
          on a 343px column the cluster crowded the bottom edge. */}
      <div className="md:hidden absolute z-20 left-0 right-0 bottom-6 flex justify-center">
        <div className="flex items-center gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}: ${s.headline}`}
              className="relative w-8 h-1 rounded-full bg-white/25 overflow-hidden"
            >
              <span
                className="absolute inset-y-0 left-0 bg-white"
                style={
                  i === index && !paused
                    ? { width: "100%", transition: `width ${AUTOPLAY_MS}ms linear` }
                    : i === index
                    ? { width: "100%" }
                    : { width: "0%" }
                }
              />
            </button>
          ))}
        </div>
      </div>

      {/* ─── DESKTOP controls — full kit (dots + carets bottom-right,
          counter bottom-left). Hidden on mobile via md: */}
      <div className="hidden md:flex absolute z-20 right-8 bottom-8 items-center gap-4">
        <div className="flex items-center gap-2.5">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}: ${s.headline}`}
              className="relative w-12 h-1 rounded-full bg-white/25 overflow-hidden"
            >
              <span
                className="absolute inset-y-0 left-0 bg-white"
                style={
                  i === index && !paused
                    ? { width: "100%", transition: `width ${AUTOPLAY_MS}ms linear` }
                    : i === index
                    ? { width: "100%" }
                    : { width: "0%" }
                }
              />
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 ml-2">
          <button
            onClick={() => go(-1)}
            aria-label="Previous slide"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 hover:border-white hover:bg-white/10 text-white transition-colors"
          >
            <CaretLeftIcon size={13} weight="bold" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next slide"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 hover:border-white hover:bg-white/10 text-white transition-colors"
          >
            <CaretRightIcon size={13} weight="bold" />
          </button>
        </div>
      </div>

      {/* Slide counter — desktop-only, bottom-left editorial mark */}
      <div className="hidden md:block absolute z-20 left-8 bottom-8 font-mono text-[11px] tracking-[0.22em] text-white/55">
        <span className="text-white/80 font-medium">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="mx-1.5">/</span>
        <span>{String(SLIDES.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
}

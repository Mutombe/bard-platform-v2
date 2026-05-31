import { Link } from "react-router-dom";
import { PhoneIcon, EnvelopeSimpleIcon, ChatCircleIcon, ArrowRightIcon } from "@phosphor-icons/react";
import { ART } from "../data/images.js";
import SectionReveal from "./SectionReveal.jsx";

/**
 * Advisory band — the "speak to a banker" institutional CTA module.
 *
 * Two distinct compositions:
 *
 *   DESKTOP (md+): Lloyds horizontal blend. Gallery photograph stays
 *     vibrant on the right (framing the white contact card); strong
 *     bone-100 wash on the left gives the editorial headline a clean
 *     canvas. Light card with orange-50 icon tiles + navy CTA.
 *
 *   MOBILE (<md): bg-bone-100 section, but the "Open a conversation"
 *     card is now DARK (bg-navy-700) so it has actual visual weight
 *     against the light section. White text, orange icon tiles,
 *     warm-milk CTA. Reads as the focused conversion module the
 *     entire section is pointing at, not a light card lost on a
 *     light backdrop.
 */
export default function AdvisoryBand() {
  return (
    <section className="relative bg-smoke border-t-2 border-orange-500 overflow-hidden">
      {/* Desktop backdrop — gallery photo + horizontal bone-100 fade */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${ART.advisoryHallway})`,
          filter: "saturate(0.65) brightness(0.95) contrast(1.05)",
        }}
      />
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-bone-100/97 via-bone-100/65 to-bone-100/10" />
      {/* Mobile — clean bone-100 surface, no photo */}
      <div className="md:hidden absolute inset-0 bg-bone-100" />

      <div className="relative container-bank section">
        <div className="grid grid-cols-12 gap-10 md:gap-12 items-center">
          {/* Left — manifesto */}
          <SectionReveal className="col-span-12 md:col-span-7">
            <p className="eyebrow mb-3 md:mb-4">§ Chapter X · The Door</p>
            <h2 className="display-xl text-navy-600 text-balance">
              We bank by relationship.{" "}
              <span className="text-navy-600">Open one.</span>
            </h2>
            <p className="mt-5 md:mt-6 text-[15.5px] md:text-[16px] text-bone-600 max-w-xl leading-relaxed">
              The first conversation costs nothing and commits nothing.
              It tells us whether we are the right bank for what you are
              trying to do. It tells you whether we are a partner you
              would like to spend a decade with.
            </p>
          </SectionReveal>

          {/* Right — "Open a conversation" card.
              Two distinct mobile / desktop renders. */}
          <SectionReveal delay={0.15} className="col-span-12 md:col-span-5">
            {/* ─── MOBILE CARD — dark, focal, properly designed ──── */}
            <div className="md:hidden bg-navy-700 rounded-xl overflow-hidden shadow-[0_16px_40px_rgba(12,10,20,0.18)] relative">
              {/* 2px orange top rule */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-orange-500" />
              <div className="p-5 pt-7">
                {/* Card head */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-[2px] w-7 bg-orange-500" />
                  <p className="font-mono text-[10px] tracking-[0.22em] uppercase font-medium text-orange-400">
                    The Door · Open a conversation
                  </p>
                </div>

                {/* Channel rows — single tap targets, navy-on-navy
                    with subtle outline, orange icon tile, primary
                    text white, secondary white/55 */}
                <div className="space-y-2">
                  <DarkChannelRow
                    href="tel:+263861200700"
                    Icon={PhoneIcon}
                    primary="+263 861 200 0700"
                    secondary="Mon–Fri 08:00–17:00 CAT"
                  />
                  <DarkChannelRow
                    href="mailto:info@bardsantner.com"
                    Icon={EnvelopeSimpleIcon}
                    primary="info@bardsantner.com"
                    secondary="Reply within one business day"
                    truncate
                  />
                  <DarkChannelRow
                    href="https://wa.me/263774954415"
                    external
                    Icon={ChatCircleIcon}
                    primary="WhatsApp the desk"
                    secondary="For existing clients"
                  />
                </div>

                {/* CTA — warm milk button on the dark card.
                    Mirrors the WealthMarquee CTA grammar. */}
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center justify-center gap-2 bg-milk text-navy-700 hover:bg-paper px-6 py-3.5 rounded-lg font-medium text-[14.5px] transition-colors w-full"
                >
                  Open a private conversation
                  <ArrowRightIcon size={14} weight="bold" />
                </Link>
              </div>
            </div>

            {/* ─── DESKTOP CARD — light, sits inside the gallery ─── */}
            <div className="hidden md:block bg-paper rounded-xl p-10 shadow-[var(--shadow-card-lift)] border border-bone-200/60">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[2px] w-8 bg-orange-500" />
                <p className="eyebrow eyebrow-accent">The Door · Open a conversation</p>
              </div>

              <div className="space-y-3">
                <LightChannelRow
                  href="tel:+263861200700"
                  Icon={PhoneIcon}
                  primary="+263 861 200 0700"
                  secondary="Mon–Fri, 08:00–17:00 CAT"
                />
                <LightChannelRow
                  href="mailto:info@bardsantner.com"
                  Icon={EnvelopeSimpleIcon}
                  primary="info@bardsantner.com"
                  secondary="Reply within one business day"
                  truncate
                />
                <LightChannelRow
                  href="https://wa.me/263774954415"
                  external
                  Icon={ChatCircleIcon}
                  primary="WhatsApp the desk"
                  secondary="For existing clients"
                />
              </div>

              <Link
                to="/contact"
                className="btn btn-navy w-full justify-center mt-6"
              >
                Request a banker
                <ArrowRightIcon size={14} weight="bold" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

// Mobile channel row — designed for the dark card.
function DarkChannelRow({ href, Icon, primary, secondary, truncate = false, external = false }) {
  const linkProps = external
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href };
  return (
    <a
      {...linkProps}
      className="flex items-center gap-3.5 p-3 rounded-lg border border-white/10 hover:border-orange-400/60 hover:bg-white/[0.03] transition-colors group"
    >
      <span className="w-9 h-9 rounded-md bg-orange-500/15 flex items-center justify-center shrink-0 group-hover:bg-orange-500/25 transition-colors">
        <Icon size={17} weight="regular" className="text-orange-400" />
      </span>
      <div className="min-w-0 flex-1">
        <p className={`text-[14px] font-medium text-white leading-tight ${truncate ? "truncate" : ""}`}>
          {primary}
        </p>
        <p className="text-[11.5px] text-white/55 mt-0.5 leading-snug">
          {secondary}
        </p>
      </div>
      <ArrowRightIcon size={12} weight="bold" className="text-white/40 group-hover:text-orange-400 shrink-0 transition-colors" />
    </a>
  );
}

// Desktop channel row — light card variant.
function LightChannelRow({ href, Icon, primary, secondary, truncate = false, external = false }) {
  const linkProps = external
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href };
  return (
    <a
      {...linkProps}
      className="flex items-center gap-4 p-4 rounded-lg border border-bone-200 hover:border-orange-500 hover:bg-orange-50/40 transition-colors group"
    >
      <span className="w-11 h-11 rounded-md bg-orange-50 flex items-center justify-center shrink-0 group-hover:bg-orange-100 transition-colors">
        <Icon size={20} weight="regular" className="text-orange-600" />
      </span>
      <div className="min-w-0 flex-1">
        <p className={`text-[15px] font-medium text-navy-600 ${truncate ? "truncate" : ""}`}>
          {primary}
        </p>
        <p className="text-[13px] text-bone-500 mt-0.5 leading-snug">
          {secondary}
        </p>
      </div>
      <ArrowRightIcon size={14} weight="bold" className="text-bone-400 group-hover:text-orange-600 shrink-0 transition-colors" />
    </a>
  );
}

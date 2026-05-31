import { Link } from "react-router-dom";
import { CaretRightIcon } from "@phosphor-icons/react";

/**
 * Quick-action strip — the Lloyds pattern. A thin band of 3-5 pills,
 * placed under the hero, containing the most likely user actions for
 * the audience in context.
 *
 * Brand colour band (navy) with white pills on top. The hover-state
 * is a subtle lift, not a colour swap, because the entire strip already
 * lives inside a brand-coloured panel.
 */
export default function QuickActionStrip({ actions = [], tint = "navy" }) {
  const tintBg =
    tint === "orange"
      ? "bg-orange-600"
      : "bg-navy-600";

  return (
    <section className={`${tintBg} text-white`}>
      {/* Mobile padding lifts to py-7 (28px) — same as desktop — so the
          strip reads as a confident band, not a compressed one. Pills
          stack 2×2 on mobile with a slightly wider gap (gap-2.5 → gap-3)
          to keep symmetry with the rest of the system's spacing rhythm. */}
      <div className="container-bank py-7 md:py-7">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-3">
          {actions.map((a) => {
            const Comp = a.external ? "a" : Link;
            const linkProps = a.external
              ? { href: a.path, target: "_blank", rel: "noopener noreferrer" }
              : { to: a.path };
            return (
              <Comp
                key={a.label}
                {...linkProps}
                className="pill pill-outline"
              >
                <span className="text-[12.5px] md:text-[14px] font-medium leading-tight pr-1.5">
                  {a.label}
                </span>
                <CaretRightIcon size={13} weight="bold" className="shrink-0" />
              </Comp>
            );
          })}
        </div>
      </div>
    </section>
  );
}

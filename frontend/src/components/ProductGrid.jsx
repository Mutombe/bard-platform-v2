import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { PRODUCT } from "../data/images.js";

/**
 * The Lloyds "Our products" grid. Editorial square photo + label + 2-line
 * description + outlined CTA pill, repeated 4-6 times.
 *
 * Pass an array of products (subset of /data/products.js entries).
 */
export default function ProductGrid({ heading, eyebrow, products = [], showAll = true }) {
  return (
    <section className="section bg-milk border-y border-bone-200">
      <div className="container-bank">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-14 gap-5">
          <div>
            {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
            <h2 className="display-xl text-navy-600 text-balance max-w-2xl">
              {heading}
            </h2>
          </div>
          {showAll && (
            <Link to="/banking" className="hover-line text-[14px] font-medium text-orange-600 inline-flex">
              View all products →
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {products.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="bank-card flex flex-col h-full"
            >
              <Link to={`/products/${p.slug}`} className="block overflow-hidden">
                <div
                  className="aspect-[4/3] bg-cover bg-center bg-bone-200 transition-transform duration-700 hover:scale-[1.03]"
                  style={{
                    backgroundImage: `url(${PRODUCT[p.slug] || p.image || ""})`,
                    filter: "saturate(0.82) brightness(0.95)",
                  }}
                />
              </Link>
              {/* Bold orange accent line where the photograph meets the
                  content. Brand signature exactly where the eye lands. */}
              <div className="h-[3px] bg-orange-500" />
              {/* Lloyds-grade card body — bank-card-body now responsive
                  via the token system: 24 mobile / 32 md / 40 lg. The
                  generous interior padding is the move that lets product
                  cards read as institutional rather than catalogue. */}
              <div className="bank-card-body lg:p-10 flex flex-col flex-1">
                <p className="eyebrow eyebrow-accent mb-3">
                  {p.eyebrow}
                </p>
                <h3 className="font-display text-[20px] md:text-[24px] text-navy-600 mb-3 md:mb-4 leading-tight">
                  {p.name}
                </h3>
                <p className="text-[14.5px] md:text-[15px] text-bone-600 leading-relaxed mb-6 md:mb-7 flex-1">
                  {p.summary}
                </p>
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <Link
                    to={`/products/${p.slug}`}
                    className="inline-flex items-center gap-2 text-[13.5px] md:text-[14px] font-medium text-navy-600 hover:text-orange-600 transition-colors"
                  >
                    Explore {p.name}
                    <ArrowRightIcon size={13} weight="bold" />
                  </Link>
                  {/* Apply-online affordance — a single quiet tag. The
                      audience+features metadata was rejected; this one
                      tag carries the action that actually matters. */}
                  <span className="text-[10.5px] tracking-[0.16em] uppercase font-medium text-orange-600">
                    Apply online
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useParams, Link } from "react-router-dom";
import { ArrowRightIcon, CheckIcon } from "@phosphor-icons/react";
import PageTransition from "../components/PageTransition.jsx";
import AdvisoryBand from "../components/AdvisoryBand.jsx";
import TrustRibbon from "../components/TrustRibbon.jsx";
import SEO, { breadcrumbJsonLd, financialProductJsonLd } from "../components/SEO.jsx";
import { findProduct, PRODUCTS } from "../data/products.js";
import { PRODUCT } from "../data/images.js";
import NotFound from "./NotFound.jsx";

/**
 * Product detail page. Single template for all 14 products.
 * Sequence:
 *   1. Breadcrumb + small label
 *   2. Hero: image left, title + summary + apply CTA + speak-to-banker right
 *   3. What's included grid
 *   4. How to apply
 *   5. Eligibility
 *   6. Related products
 *   7. Advisory band
 *   8. Trust ribbon
 */
export default function ProductDetail() {
  const { slug } = useParams();
  const p = findProduct(slug);
  if (!p) return <NotFound />;

  const related = PRODUCTS.filter(
    (q) => q.slug !== p.slug && q.audience.some((a) => p.audience.includes(a))
  ).slice(0, 3);

  return (
    <PageTransition>
      <SEO
        title={p.name}
        description={p.summary}
        path={`/products/${p.slug}`}
        keywords={[p.name, p.category, p.eyebrow, "Bard Santner"]}
        jsonLd={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Banking", path: "/banking" },
            { name: p.name, path: `/products/${p.slug}` },
          ]),
          financialProductJsonLd({
            name: p.name,
            description: p.summary,
            url: `https://bardsantnerbank.com/products/${p.slug}`,
            category: p.category,
          }),
        ]}
      />

      {/* Breadcrumb */}
      <div className="bg-milk border-b border-bone-200">
        <div className="container-bank py-4">
          <nav className="text-[12.5px] text-bone-500 flex items-center gap-2">
            <Link to="/" className="hover:text-navy-600">Home</Link>
            <span className="opacity-50">/</span>
            <Link to="/banking" className="hover:text-navy-600">Banking</Link>
            <span className="opacity-50">/</span>
            <span className="text-navy-600">{p.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero — split layout */}
      <section className="bg-milk">
        <div className="container-bank section">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="col-span-12 md:col-span-7">
              <div
                className="aspect-[16/10] md:aspect-[5/4] rounded-xl bg-bone-200 bg-cover bg-center mb-6"
                style={{
                  backgroundImage: `url(${PRODUCT[p.slug] || p.image || ""})`,
                  filter: "saturate(0.82) brightness(0.95)",
                }}
              />
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="eyebrow eyebrow-accent mb-3 md:mb-4">
                {p.eyebrow}
              </p>
              <h1 className="display-xl text-navy-600 mb-5 md:mb-6">{p.name}</h1>
              <p className="text-[15.5px] md:text-[17px] text-bone-600 leading-relaxed mb-7 md:mb-8">
                {p.summary}
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 mb-5 md:mb-6">
                <Link to={`/contact?product=${p.slug}`} className="btn btn-primary w-full sm:w-auto justify-center">
                  Open the {p.name} <ArrowRightIcon size={14} weight="bold" />
                </Link>
                <Link to="/contact" className="btn btn-ghost-light w-full sm:w-auto justify-center">
                  Open a conversation
                </Link>
              </div>
              <p className="text-[11.5px] text-bone-500">
                Subject to status. Eligibility criteria apply. Terms in the product disclosure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="hairline" />

      {/* What's included */}
      <section className="bg-milk section">
        <div className="container-bank">
          <div className="grid grid-cols-12 gap-7 md:gap-8 mb-8 md:mb-10">
            <div className="col-span-12 md:col-span-4">
              <p className="eyebrow mb-3 md:mb-4">§ What's included</p>
              <h2 className="display-lg text-navy-600">
                The features that travel with this product.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 md:gap-y-5">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                      <CheckIcon size={12} weight="bold" className="text-white" />
                    </span>
                    <span className="text-[14.5px] md:text-[15px] text-bone-700 leading-relaxed">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="bg-milk section">
        <div className="container-bank">
          <div className="grid grid-cols-12 gap-7 md:gap-8 mb-8 md:mb-10">
            <div className="col-span-12 md:col-span-4">
              <p className="eyebrow mb-3 md:mb-4">§ How to apply</p>
              <h2 className="display-lg text-navy-600">
                Three steps, no theatre.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8">
              <ol className="space-y-5 md:space-y-6">
                {[
                  { n: "01", title: "Tell us who you are.", body: "Online application, in-branch, or by appointment with a banker. KYC documents at hand: ID, proof of address, source of funds." },
                  { n: "02", title: "We assess.", body: "Underwriting and onboarding usually complete within 48 hours for personal products, up to 5 business days for credit facilities." },
                  { n: "03", title: "We open the account.", body: "Welcome pack, card despatch, online and mobile banking activation, introduction to your banker if applicable." },
                ].map((s) => (
                  <li key={s.n} className="grid grid-cols-12 gap-3 md:gap-4">
                    <span className="col-span-2 md:col-span-1 font-mono text-[12.5px] md:text-[13px] text-orange-600 pt-1">
                      {s.n}
                    </span>
                    <div className="col-span-10 md:col-span-11">
                      <p className="font-display text-[18px] md:text-[20px] text-navy-600 mb-1 leading-tight">{s.title}</p>
                      <p className="text-[14px] md:text-[14.5px] text-bone-600 leading-relaxed">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-3">
                <Link to={`/contact?product=${p.slug}`} className="btn btn-navy w-full sm:w-auto justify-center">
                  Start your application <ArrowRightIcon size={14} weight="bold" />
                </Link>
                <Link to="/locations" className="btn btn-ghost-light w-full sm:w-auto justify-center">
                  Visit a branch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="bg-milk section">
          <div className="container-bank">
            <p className="eyebrow mb-3 md:mb-4">§ Continue exploring</p>
            <h2 className="display-lg text-navy-600 mb-8 md:mb-10">
              Other products on the same shelf.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              {related.map((r) => (
                <Link key={r.slug} to={`/products/${r.slug}`} className="bank-card flex flex-col h-full p-5 md:p-6">
                  <p className="eyebrow eyebrow-accent mb-2">{r.eyebrow}</p>
                  <h3 className="font-display text-[19px] md:text-[20px] text-navy-600 mb-3">{r.name}</h3>
                  <p className="text-[13.5px] md:text-[14px] text-bone-600 leading-relaxed mb-4 flex-1">{r.summary}</p>
                  <span className="inline-flex items-center gap-2 text-[12.5px] md:text-[13px] font-medium text-orange-600">
                    Explore <ArrowRightIcon size={12} weight="bold" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <AdvisoryBand />
      <TrustRibbon />
    </PageTransition>
  );
}

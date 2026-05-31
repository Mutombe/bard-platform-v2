import { useParams, Link } from "react-router-dom";
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon } from "@phosphor-icons/react";
import PageTransition from "../components/PageTransition.jsx";
import ContactBand from "../components/modern/ContactBand.jsx";
import SEO, { breadcrumbJsonLd, financialProductJsonLd } from "../components/SEO.jsx";

import { findProduct, PRODUCTS } from "../data/products.js";
import { PRODUCT } from "../data/images.js";
import NotFound from "./NotFound.jsx";

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
        keywords={[p.name, p.category, p.eyebrow]}
        jsonLd={[
          breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Banking", path: "/banking" }, { name: p.name, path: `/products/${p.slug}` }]),
          financialProductJsonLd({ name: p.name, description: p.summary, url: `https://bardsantnerbank.com/products/${p.slug}`, category: p.category }),
        ]}
      />

      {/* Breadcrumb */}
      <section className="surface-white border-b border-line">
        <div className="container-wide py-4">
          <Link to="/banking" className="text-[12.5px] text-dim hover:text-navy-600 inline-flex items-center gap-1.5">
            <ArrowLeftIcon size={12} weight="bold" /> Back to Banking
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="surface-white">
        <div className="container-wide py-12 md:py-20">
          <div className="grid grid-cols-12 gap-x-0 lg:gap-x-10 gap-y-10 items-start">
            <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
              <p className="t-eyebrow text-orange-600 mb-5">{p.eyebrow}</p>
              <h1 className="t-hero text-ink mb-7 text-balance">{p.name}</h1>
              <p className="t-dek text-dim mb-10 max-w-xl">{p.summary}</p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-6">
                <Link to={`/contact?product=${p.slug}`} className="btn btn-navy w-full sm:w-auto justify-center">
                  Apply for {p.name}
                  <ArrowRightIcon size={11} weight="bold" />
                </Link>
                <Link to="/contact" className="btn btn-outline w-full sm:w-auto justify-center">
                  Speak with a banker
                </Link>
              </div>
              <p className="text-[11.5px] text-faint">
                Subject to status. Eligibility criteria apply. Terms in the product disclosure.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-5 order-1 lg:order-2">
              <div
                className="aspect-[5/4] bg-cover bg-center photo-modern border border-line"
                style={{ backgroundImage: `url(${PRODUCT[p.slug] || p.image || ""})` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="surface-cream">
        <div className="container-wide py-20 md:py-28 lg:py-36">
          <div className="grid grid-cols-12 gap-x-0 lg:gap-x-10 gap-y-8">
            <div className="col-span-12 lg:col-span-4">
              <div className="flex items-center gap-3 mb-5">
                <span className="block h-px w-10 bg-orange-500" />
                <p className="t-eyebrow text-orange-600">What's included</p>
              </div>
              <h2 className="t-headline text-ink text-balance">
                The features that travel with this product.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                      <CheckIcon size={11} weight="bold" className="text-white" />
                    </span>
                    <span className="text-[15px] text-mute leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="surface-white">
        <div className="container-wide py-20 md:py-28 lg:py-36">
          <div className="grid grid-cols-12 gap-x-0 lg:gap-x-10 gap-y-8">
            <div className="col-span-12 lg:col-span-4">
              <div className="flex items-center gap-3 mb-5">
                <span className="block h-px w-10 bg-orange-500" />
                <p className="t-eyebrow text-orange-600">How to apply</p>
              </div>
              <h2 className="t-headline text-ink text-balance">
                Three steps, no theatre.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <ol className="space-y-7">
                {[
                  { n: "01", title: "Tell us who you are.", body: "Online application, in-branch or by appointment with a banker. KYC documents at hand: ID, proof of address, source of funds." },
                  { n: "02", title: "We assess.", body: "Underwriting and onboarding usually complete within 48 hours for personal products, up to 5 business days for credit facilities." },
                  { n: "03", title: "We open the account.", body: "Welcome pack, card despatch, online and mobile banking activation, introduction to your banker if applicable." },
                ].map((s) => (
                  <li key={s.n} className="grid grid-cols-12 gap-3 md:gap-4">
                    <span className="col-span-2 md:col-span-1 t-mono text-orange-600 pt-1">{s.n}</span>
                    <div className="col-span-10 md:col-span-11">
                      <h3 className="font-display text-[20px] md:text-[22px] font-medium text-ink mb-2"
                          style={{ fontVariationSettings: '"opsz" 28' }}>
                        {s.title}
                      </h3>
                      <p className="text-[14.5px] text-mute leading-relaxed">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-3">
                <Link to={`/contact?product=${p.slug}`} className="btn btn-navy w-full sm:w-auto justify-center">
                  Start your application
                  <ArrowRightIcon size={11} weight="bold" />
                </Link>
                <Link to="/locations" className="btn btn-outline w-full sm:w-auto justify-center">
                  Visit a branch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="surface-cream">
          <div className="container-wide py-20 md:py-28 lg:py-36">
            <p className="t-eyebrow text-orange-600 mb-4">Continue exploring</p>
            <h2 className="t-headline text-ink text-balance mb-12">
              Other products on the same shelf.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line">
              {related.map((r) => (
                <Link key={r.slug} to={`/products/${r.slug}`} className="block surface-white p-7 md:p-9 hover:bg-cream transition-colors">
                  <p className="t-mono text-orange-600 mb-3">{r.eyebrow}</p>
                  <h3 className="font-display text-[20px] font-medium text-ink mb-3"
                      style={{ fontVariationSettings: '"opsz" 28' }}>
                    {r.name}
                  </h3>
                  <p className="text-[14px] text-dim leading-relaxed mb-5">{r.summary}</p>
                  <span className="text-[13px] font-utility font-semibold text-navy-600 inline-flex items-center gap-1.5"
                        style={{ fontFamily: "var(--font-utility)" }}>
                    Explore
                    <ArrowRightIcon size={11} weight="bold" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactBand />
    </PageTransition>
  );
}

import { Helmet } from "react-helmet-async";

const SITE_ORIGIN = "https://bardsantnerbank.com";
const DEFAULT_IMAGE = "/logo.png";
const SITE_NAME = "Bard Santner";

/**
 * Per-route SEO injector. The institutional bank pattern (Lloyds, AfrAsia,
 * Investec) means:
 *   - clean title format: "Page — Bard Santner"
 *   - meaningful canonicals so the same page on /personal/foo and
 *     /products/foo doesn't fight itself in the index
 *   - Organization + BankOrCreditUnion + Article JSON-LD where appropriate
 *   - OG + Twitter for social unfurling
 *
 * Required: title, description.
 * Optional: path, image, type, jsonLd[], keywords[].
 */
export default function SEO({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
  jsonLd = [],
  keywords = [],
}) {
  const url = path.startsWith("http") ? path : `${SITE_ORIGIN}${path}`;
  const fullTitle =
    title && title !== SITE_NAME ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — A modern African financial platform`;
  const imageAbs = image.startsWith("http") ? image : `${SITE_ORIGIN}${image}`;

  return (
    <Helmet prioritizeSeoTags htmlAttributes={{ lang: "en" }}>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      <link rel="canonical" href={url} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageAbs} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageAbs} />

      {jsonLd.map((obj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </Helmet>
  );
}

// ─── Reusable JSON-LD builders ────────────────────────────────────────

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BankOrCreditUnion",
    name: "Bard Santner Markets Inc",
    alternateName: ["Bard Santner", "BSMFB", "Bard Santner Microfinance Bank"],
    url: SITE_ORIGIN,
    logo: `${SITE_ORIGIN}/logo.png`,
    description:
      "Bard Santner Markets Inc is a modern African financial platform. Banking, wealth management, trade finance, treasury and advisory across personal, business, private, international and institutional clients.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5th Floor Beverly Court, 100 Nelson Mandela Avenue",
      addressLocality: "Harare",
      addressCountry: "ZW",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+263861200700",
        email: "info@bardsantner.com",
        areaServed: ["ZW", "ZA", "BW", "ZM", "GB", "US"],
        availableLanguage: ["en"],
      },
    ],
    sameAs: [],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: SITE_ORIGIN,
    name: SITE_NAME,
    publisher: { "@type": "Organization", name: SITE_NAME },
  };
}

export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.path.startsWith("http") ? it.path : `${SITE_ORIGIN}${it.path}`,
    })),
  };
}

export function financialProductJsonLd({ name, description, url, category }) {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name,
    description,
    url: url || SITE_ORIGIN,
    category,
    provider: { "@type": "BankOrCreditUnion", name: "Bard Santner Markets Inc" },
  };
}

export function articleJsonLd({ headline, description, url, image, datePublished, author }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    image,
    datePublished,
    author: { "@type": author?.includes(" ") ? "Person" : "Organization", name: author || "Bard Santner" },
    publisher: {
      "@type": "Organization",
      name: "Bard Santner Markets Inc",
      logo: { "@type": "ImageObject", url: `${SITE_ORIGIN}/logo.png` },
    },
  };
}

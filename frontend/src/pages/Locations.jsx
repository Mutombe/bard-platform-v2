import PageTransition from "../components/PageTransition.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";

import PageHero from "../components/modern/PageHero.jsx";
import ContactBand from "../components/modern/ContactBand.jsx";

import { HERO } from "../data/images.js";
import { MapPinIcon, PhoneIcon, ClockIcon } from "@phosphor-icons/react";

const LOCATIONS = [
  {
    city: "Harare",
    type: "Flagship branch",
    status: "Open",
    address: "5th Floor Beverly Court, 100 Nelson Mandela Avenue, Harare, Zimbabwe",
    phone: "+263 861 200 0700",
    hours: "Mon–Fri, 08:00–17:00 CAT",
    note: "Personal, business, private and treasury services. Wheelchair-accessible.",
  },
  {
    city: "Bulawayo",
    type: "Branch (opening)",
    status: "2026 Q3",
    address: "TBC",
    phone: "+263 861 200 0700",
    hours: "TBC",
    note: "Branch network expansion. Personal and business banking from opening.",
  },
  {
    city: "Mutare",
    type: "Branch (opening)",
    status: "2026 Q4",
    address: "TBC",
    phone: "+263 861 200 0700",
    hours: "TBC",
    note: "Personal banking and SME services.",
  },
  {
    city: "Johannesburg",
    type: "Representative office",
    status: "Open",
    address: "Sandton, South Africa — by appointment",
    phone: "+263 861 200 0700",
    hours: "By appointment",
    note: "South African diaspora desk, structured credit referrals, trade finance origination.",
  },
  {
    city: "London",
    type: "Diaspora desk",
    status: "Open",
    address: "Canary Wharf, London — by appointment",
    phone: "+263 861 200 0700",
    hours: "By appointment",
    note: "UK diaspora desk for account opening, FX and remittance.",
  },
  {
    city: "Cape Town",
    type: "Representative office",
    status: "2026 Q4",
    address: "TBC",
    phone: "+263 861 200 0700",
    hours: "TBC",
    note: "Southern African expansion: wealth and trade finance.",
  },
];

export default function Locations() {
  return (
    <PageTransition>
      <SEO
        title="Office Locations"
        description="Bard Santner offices, branches and diaspora desks across Africa and the world."
        path="/locations"
        jsonLd={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Locations", path: "/locations" }])]}
      />

      <PageHero
        crumb="Home · Locations"
        eyebrow="Office Locations"
        title="Where we operate. Where we are next."
        dek="Harare flagship, regional Zimbabwean branches, Southern African offices and diaspora desks abroad."
        image={HERO.locations}
        caption="Bard Santner — present across the African corridor."
      />

      <section className="surface-white">
        <div className="container-wide py-20 md:py-28 lg:py-36">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
            {LOCATIONS.map((loc) => (
              <article key={loc.city} className="surface-white p-7 md:p-9 flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-display text-[22px] md:text-[24px] font-medium text-ink"
                      style={{ fontVariationSettings: '"opsz" 28' }}>
                    {loc.city}
                  </h3>
                  <span className={`text-[10px] tracking-[0.16em] uppercase px-2 py-1 rounded-[2px] font-utility font-semibold shrink-0 ${
                    loc.status === "Open" ? "bg-orange-50 text-orange-700" : "bg-cream text-dim"
                  }`}
                  style={{ fontFamily: "var(--font-utility)" }}>
                    {loc.status}
                  </span>
                </div>
                <p className="t-mono text-dim mb-5">{loc.type}</p>

                <div className="space-y-3 text-[13.5px] text-mute flex-1">
                  <p className="flex items-start gap-2.5">
                    <MapPinIcon size={15} className="text-orange-600 mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{loc.address}</span>
                  </p>
                  <p className="flex items-start gap-2.5">
                    <PhoneIcon size={15} className="text-orange-600 mt-0.5 shrink-0" />
                    <span>{loc.phone}</span>
                  </p>
                  <p className="flex items-start gap-2.5">
                    <ClockIcon size={15} className="text-orange-600 mt-0.5 shrink-0" />
                    <span>{loc.hours}</span>
                  </p>
                </div>

                <p className="mt-5 pt-5 border-t border-line text-[12.5px] text-dim leading-relaxed">
                  {loc.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactBand />
    </PageTransition>
  );
}

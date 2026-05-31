import PageTransition from "../components/PageTransition.jsx";
import PageHero from "../components/PageHero.jsx";
import AdvisoryBand from "../components/AdvisoryBand.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";
import { HERO } from "../data/images.js";
import { MapPinIcon, PhoneIcon, ClockIcon } from "@phosphor-icons/react";
import { MondrianAside } from "../components/PageHeroAsides.jsx";

const LOCATIONS = [
  {
    city: "Harare",
    type: "Flagship branch",
    status: "Open",
    address: "5th Floor Beverly Court, 100 Nelson Mandela Avenue, Harare, Zimbabwe",
    phone: "+263 861 200 0700",
    hours: "Monday-Friday, 08:00-17:00 CAT",
    note: "Personal, business, private, treasury services. Wheelchair-accessible.",
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
        title="Locations"
        description="Bard Santner offices, branches and diaspora desks across Africa and the world. Harare flagship, regional branches, representative offices and diaspora desks."
        path="/locations"
        jsonLd={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Locations", path: "/locations" }])]}
      />

      <PageHero
        eyebrow="§ Locations"
        headline="Where we operate. And where we are next."
        body="Harare flagship, regional Zimbabwean branches, Southern African offices, and diaspora desks abroad."
        image={HERO.locations}
        overlayTint="navy"
        variant="editorial"
        aside={<MondrianAside />}
      />

      <section className="bg-milk section">
        <div className="container-bank">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {LOCATIONS.map((loc) => (
              <article key={loc.city} className="bank-card p-6 md:p-10 flex flex-col h-full">
                <div className="flex items-start justify-between gap-3 mb-3 md:mb-4">
                  <h2 className="font-display text-[22px] md:text-[24px] text-navy-600">{loc.city}</h2>
                  <span className={`text-[10px] tracking-[0.18em] uppercase px-2 py-1 rounded shrink-0 ${
                    loc.status === "Open"
                      ? "bg-orange-50 text-orange-700"
                      : "bg-smoke text-bone-500"
                  }`}>
                    {loc.status}
                  </span>
                </div>
                <p className="text-[11.5px] md:text-[12px] tracking-[0.12em] uppercase text-bone-500 mb-4 md:mb-5">
                  {loc.type}
                </p>

                <div className="space-y-3 text-[13px] md:text-[13.5px] text-bone-600 flex-1">
                  <p className="flex items-start gap-2.5">
                    <MapPinIcon size={16} weight="regular" className="text-orange-600 mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{loc.address}</span>
                  </p>
                  <p className="flex items-start gap-2.5">
                    <PhoneIcon size={16} weight="regular" className="text-orange-600 mt-0.5 shrink-0" />
                    <span>{loc.phone}</span>
                  </p>
                  <p className="flex items-start gap-2.5">
                    <ClockIcon size={16} weight="regular" className="text-orange-600 mt-0.5 shrink-0" />
                    <span>{loc.hours}</span>
                  </p>
                </div>

                <p className="mt-4 md:mt-5 pt-4 md:pt-5 border-t border-bone-200 text-[12px] md:text-[12.5px] text-bone-500 leading-relaxed">
                  {loc.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AdvisoryBand />
    </PageTransition>
  );
}

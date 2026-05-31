import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import PageTransition from "../components/PageTransition.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";

import PageHero from "../components/modern/PageHero.jsx";
import {
  PhoneIcon, EnvelopeSimpleIcon, ChatCircleIcon, MapPinIcon,
  ArrowRightIcon, CheckCircleIcon,
} from "@phosphor-icons/react";
import { AUDIENCES } from "../data/audiences.js";
import { HERO } from "../data/images.js";

const CHANNELS = [
  { icon: PhoneIcon, title: "Telephone", lines: ["+263 861 200 0700", "Mon–Fri, 08:00–17:00 CAT"], href: "tel:+263861200700" },
  { icon: EnvelopeSimpleIcon, title: "Email", lines: ["info@bardsantner.com", "Reply within one business day"], href: "mailto:info@bardsantner.com" },
  { icon: ChatCircleIcon, title: "WhatsApp", lines: ["+263 774 954 415", "For existing customers"], href: "https://wa.me/263774954415" },
  { icon: MapPinIcon, title: "In person", lines: ["5th Floor, Beverly Court", "100 Nelson Mandela Avenue, Harare"], href: "/locations" },
];

export default function Contact() {
  const [params] = useSearchParams();
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    audience: params.get("audience") || "personal",
    product: params.get("product") || "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function update(k, v) { setForm((f) => ({ ...f, [k]: v })); }
  function onSubmit(e) { e.preventDefault(); setSubmitted(true); }

  return (
    <PageTransition>
      <SEO
        title="Contact"
        description="Reach Bard Santner. Telephone, email, WhatsApp, or by appointment with a banker at our Harare flagship branch."
        path="/contact"
        jsonLd={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])]}
      />

      <PageHero
        crumb="Home · Contact"
        eyebrow="Contact"
        title="Speak with a banker."
        dek="A senior banker will reach you within one business day. The first conversation costs nothing and commits to nothing — it tells us whether the relationship makes sense."
        image={HERO.contact}
        caption="A first conversation, on the terms of a long one."
      />

      <section className="surface-white">
        <div className="container-wide py-20 md:py-28 lg:py-36">
          {/* Channels grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line mb-20 md:mb-28">
            {CHANNELS.map((c) => {
              const Icon = c.icon;
              return (
                <a key={c.title} href={c.href} className="block p-7 md:p-9 surface-white hover:bg-cream transition-colors">
                  <Icon size={22} weight="regular" className="text-orange-600 mb-5" />
                  <p className="font-display text-[18px] md:text-[20px] font-medium text-ink mb-2"
                     style={{ fontVariationSettings: '"opsz" 28' }}>
                    {c.title}
                  </p>
                  {c.lines.map((l, i) => (
                    <p key={i} className={`text-[13.5px] leading-relaxed ${i === 0 ? "text-ink font-medium" : "text-dim"}`}>
                      {l}
                    </p>
                  ))}
                </a>
              );
            })}
          </div>

          {/* Form */}
          <div className="grid grid-cols-12 gap-x-0 lg:gap-x-12 gap-y-10 max-w-6xl mx-auto">
            <div className="col-span-12 lg:col-span-5">
              <div className="flex items-center gap-3 mb-5">
                <span className="block h-px w-10 bg-orange-500" />
                <p className="t-eyebrow text-orange-600">Request a banker</p>
              </div>
              <h2 className="t-headline text-ink text-balance mb-6">
                Tell us what you are looking for.
              </h2>
              <p className="t-dek text-dim mb-9 max-w-md">
                A senior banker will call you back within one business day. If your enquiry is urgent, please use the telephone channel above.
              </p>
              <ul className="space-y-4 text-[14px] text-mute">
                <li className="flex items-start gap-3"><CheckCircleIcon size={18} className="text-orange-600 mt-0.5 shrink-0" /><span>No commitment. No automated chase sequence.</span></li>
                <li className="flex items-start gap-3"><CheckCircleIcon size={18} className="text-orange-600 mt-0.5 shrink-0" /><span>You speak with a banker, not a call-centre agent.</span></li>
                <li className="flex items-start gap-3"><CheckCircleIcon size={18} className="text-orange-600 mt-0.5 shrink-0" /><span>Same banker for the duration of the conversation.</span></li>
              </ul>
            </div>

            <div className="col-span-12 lg:col-span-7">
              {submitted ? (
                <div className="card-flat p-10 md:p-14 text-center">
                  <CheckCircleIcon size={40} className="text-orange-600 mx-auto mb-5" />
                  <h3 className="font-display text-[24px] md:text-[28px] font-medium text-ink mb-4"
                      style={{ fontVariationSettings: '"opsz" 32' }}>
                    Thank you.
                  </h3>
                  <p className="text-[15px] text-mute max-w-md mx-auto leading-relaxed">
                    A senior banker has been notified and will be in touch within one business day. A confirmation has been sent to <strong className="text-ink">{form.email}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="card-flat p-7 md:p-12 space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Full name" value={form.name} onChange={(v) => update("name", v)} required />
                    <Field label="Email" type="email" value={form.email} onChange={(v) => update("email", v)} required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Telephone" type="tel" value={form.phone} onChange={(v) => update("phone", v)} />
                    <div>
                      <label className="block t-eyebrow text-ink mb-1.5">Audience</label>
                      <select
                        value={form.audience}
                        onChange={(e) => update("audience", e.target.value)}
                        className="w-full px-4 py-3 text-[14.5px] bg-white border border-line rounded-[2px] focus:outline-none focus:border-navy-600"
                      >
                        {AUDIENCES.map((a) => (
                          <option key={a.id} value={a.id}>{a.label_full}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block t-eyebrow text-ink mb-1.5">Tell us what you need</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      rows={5}
                      required
                      className="w-full px-4 py-3 text-[14.5px] bg-white border border-line rounded-[2px] focus:outline-none focus:border-navy-600 resize-none"
                      placeholder="What product, what stage, what timeline."
                    />
                  </div>
                  <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4 pt-2">
                    <p className="text-[11.5px] text-faint leading-relaxed md:max-w-sm">
                      We use your details only to respond to this enquiry. See <a href="/privacy" className="underline hover:text-ink">Privacy</a>.
                    </p>
                    <button type="submit" className="btn btn-navy w-full md:w-auto justify-center">
                      Request a banker
                      <ArrowRightIcon size={11} weight="bold" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

function Field({ label, value, onChange, type = "text", required = false }) {
  return (
    <div>
      <label className="block t-eyebrow text-ink mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full px-4 py-3 text-[14.5px] bg-white border border-line rounded-[2px] focus:outline-none focus:border-navy-600"
      />
    </div>
  );
}

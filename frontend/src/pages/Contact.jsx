import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import PageTransition from "../components/PageTransition.jsx";
import PageHero from "../components/PageHero.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";
import { HERO } from "../data/images.js";
import { PhoneIcon, EnvelopeSimpleIcon, ChatCircleIcon, MapPinIcon, ArrowRightIcon, CheckCircleIcon } from "@phosphor-icons/react";
import { AUDIENCES } from "../data/audiences.js";
import { StackedAside } from "../components/PageHeroAsides.jsx";

const CHANNELS = [
  { icon: PhoneIcon, title: "Telephone", lines: ["+263 861 200 0700", "Mon-Fri, 08:00-17:00 CAT"], href: "tel:+263861200700" },
  { icon: EnvelopeSimpleIcon, title: "Email", lines: ["info@bardsantner.com", "Response within one business day"], href: "mailto:info@bardsantner.com" },
  { icon: ChatCircleIcon, title: "WhatsApp", lines: ["+263 774 954 415", "For existing customers"], href: "https://wa.me/263774954415" },
  { icon: MapPinIcon, title: "Visit a branch", lines: ["5th Floor Beverly Court", "100 Nelson Mandela Avenue, Harare"], href: "/locations" },
];

export default function Contact() {
  const [params] = useSearchParams();
  const initialAudience = params.get("audience") || "personal";
  const initialProduct = params.get("product") || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    audience: initialAudience,
    product: initialProduct,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function update(k, v) { setForm((f) => ({ ...f, [k]: v })); }

  function onSubmit(e) {
    e.preventDefault();
    // Client-only submission marker. A real backend handler is wired post-launch.
    setSubmitted(true);
  }

  return (
    <PageTransition>
      <SEO
        title="Contact"
        description="Reach Bard Santner. Telephone, email, WhatsApp, or by appointment with a banker at our Harare flagship branch."
        path="/contact"
        jsonLd={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])]}
      />

      <PageHero
        eyebrow="§ Contact"
        headline="Open a conversation. It commits nothing."
        body="The first call tells us if we are the right bank for you, and tells you if we are a partner worth a decade."
        image={HERO.contact}
        overlayTint="navy"
        variant="editorial"
        aside={<StackedAside />}
      />

      {/* Channels grid */}
      <section className="bg-milk section">
        <div className="container-bank">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 md:gap-5 mb-12 md:mb-16">
            {CHANNELS.map((c) => {
              const Icon = c.icon;
              return (
                <a key={c.title} href={c.href} className="block p-5 md:p-9 rounded-xl border border-bone-200 hover:border-orange-500 hover:shadow-[var(--shadow-card)] transition-all">
                  <div className="w-11 h-11 rounded-lg bg-orange-50 flex items-center justify-center mb-4 md:mb-5">
                    <Icon size={20} weight="regular" className="text-orange-600" />
                  </div>
                  <p className="font-display text-[17px] md:text-[18px] text-navy-600 mb-2">{c.title}</p>
                  {c.lines.map((l, i) => (
                    <p key={i} className={`text-[13px] md:text-[13.5px] ${i === 0 ? "text-navy-600 font-medium" : "text-bone-500"} leading-relaxed break-words`}>
                      {l}
                    </p>
                  ))}
                </a>
              );
            })}
          </div>

          {/* Request a banker — different layouts mobile vs desktop.
              Desktop: 5+7 grid with manifesto on the left, form on the right.
              Mobile: stacked, but with a tighter manifesto (no bullet list — those
              three points are inline pill-tags instead) so the form gets to
              be the focal point quickly. */}
          <div className="grid grid-cols-12 gap-8 md:gap-16 max-w-6xl mx-auto mt-10 md:mt-20">
            <div className="col-span-12 md:col-span-5">
              <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
                <span className="h-[2px] w-10 md:w-12 bg-orange-500" />
                <p className="eyebrow eyebrow-accent">§ The Door · Open a conversation</p>
              </div>
              <h2 className="display-xl text-navy-600 text-balance mb-5 md:mb-7 leading-[1.05]">
                Tell us what you are looking for.
              </h2>
              <p className="text-[15.5px] md:text-[17px] text-bone-600 leading-relaxed mb-6 md:mb-9 max-w-md">
                A relationship banker will call you back within one business day. If your enquiry is urgent, please use the telephone channel above.
              </p>

              {/* Mobile-only: collapse the three commitments into a row of
                  compact pill tags. The full sentence bullets stay on
                  desktop where there is room for the editorial pace. */}
              <div className="md:hidden flex flex-wrap gap-2">
                <Pill>No commitment</Pill>
                <Pill>No auto-chase</Pill>
                <Pill>Real banker</Pill>
                <Pill>Same banker</Pill>
              </div>

              <ul className="hidden md:block space-y-5 text-[14.5px] text-bone-600">
                <li className="flex items-start gap-4">
                  <CheckCircleIcon size={20} weight="regular" className="text-orange-600 mt-0.5 shrink-0" />
                  <span>No commitment. No automated chase sequence.</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircleIcon size={20} weight="regular" className="text-orange-600 mt-0.5 shrink-0" />
                  <span>You speak with a banker, not a call-centre agent.</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircleIcon size={20} weight="regular" className="text-orange-600 mt-0.5 shrink-0" />
                  <span>Same banker for the duration of the conversation.</span>
                </li>
              </ul>
            </div>

            <div className="col-span-12 md:col-span-7">
              {submitted ? (
                <div className="p-7 md:p-14 rounded-xl bg-orange-50 border border-orange-200 text-center">
                  <CheckCircleIcon size={40} weight="regular" className="text-orange-600 mx-auto mb-4 md:mb-5" />
                  <h3 className="font-display text-[22px] md:text-[28px] text-navy-600 mb-3 md:mb-4">Thank you.</h3>
                  <p className="text-[14.5px] md:text-[15px] text-bone-600 max-w-md mx-auto leading-relaxed">
                    A relationship banker has been notified and will be in touch within one business day. We have sent a confirmation to <strong className="text-navy-600">{form.email}</strong>.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  className="p-5 sm:p-7 md:p-12 rounded-xl bg-paper border border-bone-200 space-y-5 md:space-y-7 shadow-[var(--shadow-card)]"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4">
                    <Field label="Full name" value={form.name} onChange={(v) => update("name", v)} required />
                    <Field label="Email" type="email" value={form.email} onChange={(v) => update("email", v)} required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Telephone" type="tel" value={form.phone} onChange={(v) => update("phone", v)} />
                    <div>
                      <label className="block text-[12.5px] font-medium text-navy-600 mb-1.5">Audience</label>
                      <select
                        value={form.audience}
                        onChange={(e) => update("audience", e.target.value)}
                        className="w-full px-4 md:px-5 py-3.5 text-[15px] md:text-[15.5px] bg-white border border-bone-300 rounded-md focus:outline-none focus:border-orange-500 appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 viewBox=%220 0 12 8%22 fill=%22none%22><path d=%22M1 1L6 6L11 1%22 stroke=%22%234a4942%22 stroke-width=%221.5%22 stroke-linecap=%22round%22/></svg>')] bg-no-repeat bg-[right_16px_center]"
                      >
                        {AUDIENCES.map((a) => (
                          <option key={a.id} value={a.id}>{a.label_full}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[12.5px] font-medium text-navy-600 mb-1.5">Tell us what you need</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      rows={4}
                      required
                      className="w-full px-4 md:px-5 py-3.5 text-[15px] md:text-[15.5px] bg-white border border-bone-300 rounded-md focus:outline-none focus:border-orange-500 resize-none min-h-[120px] md:min-h-[140px]"
                      placeholder="What product, what stage, what timeline."
                    />
                  </div>
                  {/* Submit row — on mobile the button is full-width and
                      placed above the privacy note (the verb is the
                      thing, the disclosure is the footnote). On desktop
                      they sit on the same row. */}
                  <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-3 md:gap-4 pt-1">
                    <p className="text-[11.5px] text-bone-500 leading-relaxed md:max-w-sm">
                      We use your details only to respond to this enquiry. See <a href="/privacy" className="underline hover:text-navy-600">Privacy</a>.
                    </p>
                    <button type="submit" className="btn btn-primary w-full md:w-auto justify-center">
                      Open the conversation <ArrowRightIcon size={14} weight="bold" />
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
      <label className="block text-[12.5px] font-medium text-navy-600 mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full px-4 md:px-5 py-3.5 text-[15px] md:text-[15.5px] bg-white border border-bone-300 rounded-md focus:outline-none focus:border-orange-500"
      />
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-orange-50 text-orange-700 text-[12.5px] font-medium border border-orange-200/70">
      {children}
    </span>
  );
}

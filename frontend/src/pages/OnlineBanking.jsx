import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  WalletIcon,
  PaperPlaneTiltIcon,
  ReceiptIcon,
  BellRingingIcon,
  GlobeIcon,
  ChatCircleIcon,
  FingerprintIcon,
  LockKeyIcon,
  DeviceMobileIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  LockIcon,
} from "@phosphor-icons/react";

import PageTransition from "../components/PageTransition.jsx";
import PageHero from "../components/PageHero.jsx";
import QuickActionStrip from "../components/QuickActionStrip.jsx";
import AdvisoryBand from "../components/AdvisoryBand.jsx";
import TrustRibbon from "../components/TrustRibbon.jsx";
import SectionReveal from "../components/SectionReveal.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";
import { HERO } from "../data/images.js";

/**
 * /online-banking — the digital channel's institutional landing page.
 *
 * Distinct from the actual secure portal (online.bardsantnerbank.com)
 * which the Nav login pill opens directly. This page is the
 * marketing / education / SEO surface for online banking — the place
 * a user lands when they want to know what Online Banking can do
 * before they log in, or when they're considering opening an account.
 *
 * Sequence:
 *   § Hero            "Banking that travels with you."
 *   § Quick actions   Log in / Register / Get the app / Help
 *   § Capabilities    6-up grid — what you actually do online
 *   § Security        4 pillars specific to the digital channel
 *                     (biometric, encryption, device-binding, alerts)
 *   § App promo       Mobile-first reminder + dual CTAs
 *   § Advisory + Trust
 */

const ONLINE_QUICK_ACTIONS = [
  { label: "Enter the Lobby",        path: "/login" },
  { label: "Open a Current",         path: "/personal" },
  { label: "Glimpse the app",        path: "/app" },
  { label: "Open a conversation",    path: "/contact" },
];

const CAPABILITIES = [
  {
    icon: WalletIcon,
    title: "Manage every account",
    body: "Current, savings, credit and loan facilities on a single dashboard. Balances, transactions, statements and tax certificates in one place.",
  },
  {
    icon: PaperPlaneTiltIcon,
    title: "Send and receive",
    body: "Local transfers across Zimbabwe, regional rails to Southern Africa, and SWIFT for the cross-border journey. Move money where it needs to go.",
  },
  {
    icon: ReceiptIcon,
    title: "Pay bills, schedule rent",
    body: "Standing orders, recurring debits, scheduled transfers. The reliability your monthly book needs, without picking up the phone.",
  },
  {
    icon: BellRingingIcon,
    title: "Statements and alerts",
    body: "Push, email, SMS — your choice. Threshold-based notifications, monthly statements, end-of-day balance prompts.",
  },
  {
    icon: GlobeIcon,
    title: "Foreign exchange",
    body: "Live rates across the majors, instant conversions for diaspora and business clients, and the audit trail correspondent banks expect.",
  },
  {
    icon: ChatCircleIcon,
    title: "Approach a real banker",
    body: "In-app messaging that reaches a real banker, not a chatbot. Mon–Fri 08:00–17:00 CAT, with after-hours escalation for urgent matters.",
  },
];

const SECURITY_PILLARS = [
  {
    icon: FingerprintIcon,
    title: "Biometric sign-in",
    body: "Face and fingerprint on iOS and Android. Device-bound credentials so a stolen password alone unlocks nothing.",
  },
  {
    icon: LockKeyIcon,
    title: "End-to-end encryption",
    body: "TLS 1.3 in transit, AES-256 at rest. Session keys rotated per device and per channel.",
  },
  {
    icon: DeviceMobileIcon,
    title: "Device binding",
    body: "Every new device is verified before it gets near your accounts. Sessions are revocable from the app at any time.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Real-time alerts",
    body: "Every login, every transfer, every change of detail — surfaced to you the second it happens. The bank that shows its working.",
  },
];

export default function OnlineBanking() {
  return (
    <PageTransition>
      <SEO
        title="Online Banking"
        description="Bard Santner Online Banking. Manage accounts, send and receive, pay bills, monitor in real time. Biometric login, end-to-end encryption, device-bound sessions."
        path="/online-banking"
        keywords={[
          "online banking", "mobile banking", "Bard Santner Online", "BSMFB online",
          "banking app Zimbabwe", "biometric login", "digital banking Africa",
        ]}
        jsonLd={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Online Banking", path: "/online-banking" },
          ]),
        ]}
      />

      {/* § Hero */}
      <PageHero
        eyebrow="§ Online Banking"
        headline="Banking that travels with you."
        body="Send, receive, save and manage from any device. Same bank, same banker — without the queue."
        primaryCTA={{ to: "/login", label: "Log in to Online Banking" }}
        secondaryCTA={{ to: "/app", label: "Preview the app" }}
        image={HERO.onlineBanking}
        overlayTint="navy"
      />

      {/* § Quick actions */}
      <QuickActionStrip actions={ONLINE_QUICK_ACTIONS} tint="navy" />

      {/* § Capabilities — what you do online */}
      <section className="section bg-milk border-b border-bone-200">
        <div className="container-bank">
          <SectionReveal className="mb-10 md:mb-14 max-w-3xl">
            <p className="eyebrow mb-3 md:mb-4">§ Capabilities</p>
            <h2 className="display-xl text-navy-600 text-balance">
              Six instruments. One app.
            </h2>
            <p className="mt-5 md:mt-6 text-[15.5px] md:text-[17px] text-bone-600 leading-relaxed max-w-2xl">
              Online Banking by Bard Santner is the day-to-day apparatus of
              modern banking. Nothing more, nothing less — designed so the
              instrument disappears and the work gets done.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {CAPABILITIES.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.article
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="bank-card p-6 md:p-8 flex flex-col h-full"
                >
                  <div className="w-12 h-12 md:w-13 md:h-13 rounded-lg bg-orange-50 flex items-center justify-center mb-5 md:mb-6">
                    <Icon size={22} weight="regular" className="text-orange-600" />
                  </div>
                  <h3 className="font-display text-[19px] md:text-[20px] text-navy-600 mb-3 leading-tight">
                    {c.title}
                  </h3>
                  <p className="text-[14px] md:text-[14.5px] text-bone-600 leading-relaxed flex-1">
                    {c.body}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* § Security — distinct from the global TrustRibbon. This is
          digital-channel security: biometric, encryption, device-binding,
          real-time alerts. */}
      <section className="section bg-ink text-white relative overflow-hidden border-y-2 border-orange-500">
        <div className="container-bank relative">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
            <SectionReveal className="col-span-12 md:col-span-5">
              <p className="eyebrow eyebrow-on-dark mb-3 md:mb-4">§ Digital security</p>
              <h2 className="display-xl text-white text-balance">
                Secure by composition, not by promise.
              </h2>
              <p className="mt-5 md:mt-6 text-[15.5px] md:text-[16px] text-white/75 leading-relaxed max-w-md">
                The digital channel is a separate discipline from branch
                security. Each layer below is independent — if one fails,
                the others still hold.
              </p>
              <Link
                to="/security"
                className="mt-7 md:mt-8 inline-flex items-center gap-2 text-[14px] font-medium text-orange-400 hover:text-orange-300 transition-colors"
              >
                Read the security policy
                <ArrowRightIcon size={13} weight="bold" />
              </Link>
            </SectionReveal>

            <div className="col-span-12 md:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {SECURITY_PILLARS.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <motion.div
                      key={p.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                      className="p-5 md:p-6 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                    >
                      <div className="w-11 h-11 rounded-md bg-orange-500/15 flex items-center justify-center mb-4">
                        <Icon size={20} weight="regular" className="text-orange-400" />
                      </div>
                      <h3 className="font-display text-[17px] md:text-[18px] text-white mb-2 leading-tight">
                        {p.title}
                      </h3>
                      <p className="text-[13.5px] md:text-[14px] text-white/65 leading-relaxed">
                        {p.body}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* § App promo — full-width card with dual CTAs */}
      <section className="bg-milk section">
        <div className="container-bank">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto bg-paper rounded-2xl border border-bone-200 shadow-[var(--shadow-card)] overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-7 p-8 md:p-12">
                <p className="eyebrow eyebrow-accent mb-4">§ Mobile</p>
                <h2 className="display-lg text-navy-600 text-balance mb-5">
                  The bank in your pocket. Without the noise.
                </h2>
                <p className="text-[15px] md:text-[16px] text-bone-600 leading-relaxed mb-7 max-w-md">
                  iOS and Android. Biometric login, instant transfers,
                  contactless cards, and the same banker you would speak
                  to in branch — reachable in-app.
                </p>
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                  <Link
                    to="/login"
                    className="btn btn-primary w-full sm:w-auto justify-center"
                  >
                    <LockIcon size={14} weight="bold" />
                    Log in to Online Banking
                  </Link>
                  <Link
                    to="/app"
                    className="btn btn-ghost-light w-full sm:w-auto justify-center"
                  >
                    Preview the app
                    <ArrowRightIcon size={14} weight="bold" />
                  </Link>
                </div>
              </div>

              <div className="md:col-span-5 relative min-h-[260px] md:min-h-0 bg-ink overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${HERO.onlineBanking})`,
                    filter: "saturate(0.82) brightness(0.9) contrast(1.04)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-transparent to-transparent md:bg-gradient-to-l md:from-transparent md:via-transparent md:to-ink/25" />
                {/* Orange institutional rule along the meeting edge */}
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[2px] bg-orange-500" />
                <div className="md:hidden absolute top-0 left-0 right-0 h-[2px] bg-orange-500" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AdvisoryBand />
      <TrustRibbon />
    </PageTransition>
  );
}

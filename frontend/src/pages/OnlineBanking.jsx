import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";

import PageHero from "../components/modern/PageHero.jsx";
import SectionHeader from "../components/modern/SectionHeader.jsx";
import CapabilitiesGrid from "../components/modern/CapabilitiesGrid.jsx";
import ContactBand from "../components/modern/ContactBand.jsx";

import {
  WalletIcon, PaperPlaneTiltIcon, ReceiptIcon, BellRingingIcon,
  GlobeIcon, ChatCircleIcon,
  FingerprintIcon, LockKeyIcon, DeviceMobileIcon, ShieldCheckIcon,
  ArrowRightIcon, LockIcon,
} from "@phosphor-icons/react";
import { HERO } from "../data/images.js";

export default function OnlineBanking() {
  return (
    <PageTransition>
      <SEO
        title="Online Banking"
        description="Bard Santner Online Banking — manage accounts, send and receive, pay bills, monitor in real time. Biometric login, end-to-end encryption, device-bound sessions."
        path="/online-banking"
        jsonLd={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Online Banking", path: "/online-banking" }])]}
      />

      <PageHero
        crumb="Home · Online Banking"
        eyebrow="Online Banking"
        title="Same bank. Same banker. Without the queue."
        dek="Manage accounts, send and receive, pay bills and monitor in real time — from any device. The institution that signs your statements is the one signing the app."
        image={HERO.onlineBanking || HERO.home}
        primaryCTA={{ label: "Sign in", to: "/login" }}
        secondaryCTA={{ label: "Preview the app", to: "/app" }}
        caption="Online Banking — the bank, in your pocket."
      />

      <section className="surface-white">
        <div className="container-wide py-20 md:py-28 lg:py-36">
          <SectionHeader
            eyebrow="What you can do"
            headline="Six instruments. One application."
            dek="The day-to-day apparatus of modern banking, designed so the instrument disappears and the work gets done."
          />
          <CapabilitiesGrid
            items={[
              { label: "Accounts", title: "Manage every account", body: "Current, savings, credit and loan facilities on a single dashboard. Balances, transactions, statements, tax certificates." },
              { label: "Transfers", title: "Send and receive", body: "Local transfers, regional rails and SWIFT cross-border. Move money where it needs to go." },
              { label: "Bills", title: "Pay bills, schedule rent", body: "Standing orders, recurring debits, scheduled transfers. The reliability your monthly book needs." },
              { label: "Alerts", title: "Statements and alerts", body: "Push, email, SMS. Threshold-based notifications, monthly statements, end-of-day balance prompts." },
              { label: "FX", title: "Foreign exchange", body: "Live rates across the majors, instant conversions for diaspora and business clients, the audit trail correspondent banks expect." },
              { label: "Service", title: "Speak with a banker", body: "In-app messaging that reaches a real banker, not a chatbot. Mon–Fri 08:00–17:00 CAT, after-hours escalation." },
            ]}
          />
        </div>
      </section>

      {/* Digital security */}
      <section className="surface-navy">
        <div className="container-wide py-20 md:py-28 lg:py-36">
          <div className="grid grid-cols-12 gap-x-0 lg:gap-x-10 gap-y-12">
            <div className="col-span-12 lg:col-span-5">
              <div className="flex items-center gap-3 mb-5">
                <span className="block h-px w-10 bg-orange-500" />
                <p className="t-eyebrow text-orange-400">Digital security</p>
              </div>
              <h2 className="t-headline text-white text-balance mb-6">
                Secure by composition, not by promise.
              </h2>
              <p className="t-dek text-white/70 mb-7 max-w-md">
                The digital channel is a separate discipline from branch security. Each layer below is independent — if one fails, the others still hold.
              </p>
              <Link to="/security" className="inline-flex items-center gap-2 text-[13.5px] font-utility font-semibold text-orange-400 hover:text-orange-300"
                    style={{ fontFamily: "var(--font-utility)" }}>
                Read the security policy
                <ArrowRightIcon size={11} weight="bold" />
              </Link>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <CapabilitiesGrid
                tone="dark"
                items={[
                  { label: "Biometric", title: "Biometric sign-in", body: "Face and fingerprint on iOS and Android. Device-bound credentials so a stolen password alone unlocks nothing." },
                  { label: "Encryption", title: "End-to-end encryption", body: "TLS 1.3 in transit, AES-256 at rest. Session keys rotated per device and per channel." },
                  { label: "Device-bound", title: "Device binding", body: "Every new device is verified before it gets near your accounts. Sessions revocable from the app." },
                  { label: "Alerts", title: "Real-time alerts", body: "Every login, every transfer, every change of detail — surfaced the second it happens." },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <ContactBand />
    </PageTransition>
  );
}

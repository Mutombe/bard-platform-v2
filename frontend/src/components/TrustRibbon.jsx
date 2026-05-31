import { ShieldCheckIcon, BankIcon, LockKeyIcon, ScalesIcon } from "@phosphor-icons/react";

/**
 * Trust ribbon — embedded throughout the site. Communicates the four
 * trust pillars any serious bank shows on the home page:
 *   1. Regulated and supervised
 *   2. Deposit protection
 *   3. Encryption and security
 *   4. Compliance and AML
 */
const TRUST_PILLARS = [
  {
    icon: BankIcon,
    title: "Regulated",
    body: "BSMFB operates under licence from the prudential authority and is supervised in line with international banking standards.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Deposits protected",
    body: "Customer deposits are held in compliance with the Deposit Protection framework. Coverage limits and terms apply.",
  },
  {
    icon: LockKeyIcon,
    title: "Security first",
    body: "All transactions are encrypted end-to-end. Biometric, device-bound and adaptive authentication on every channel.",
  },
  {
    icon: ScalesIcon,
    title: "AML compliant",
    body: "Customer due diligence, transaction monitoring and reporting performed to international AML / CFT standards.",
  },
];

export default function TrustRibbon() {
  return (
    <section className="section bg-milk border-y-2 border-navy-600">
      <div className="container-bank">
        <div className="text-center mb-10 md:mb-12">
          <p className="eyebrow mb-4">§ 07 · Trust architecture</p>
          {/* Headline reads differently mobile vs desktop. Mobile gets
              the shorter, punchier version; desktop carries the full
              clause that breathes inside max-w-2xl. */}
          <h2 className="display-lg text-navy-600 max-w-2xl mx-auto">
            <span className="md:hidden">The obligations of a bank, from day one.</span>
            <span className="hidden md:inline">The obligations a bank inherits the moment it opens its first account.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 md:gap-8">
          {TRUST_PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title}>
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-orange-50 flex items-center justify-center mb-4 md:mb-5">
                  <Icon size={24} weight="regular" className="text-orange-600" />
                </div>
                <p className="font-display text-[18px] md:text-[20px] text-navy-600 mb-2 md:mb-3">
                  {p.title}
                </p>
                <p className="text-[14px] md:text-[14.5px] text-bone-600 leading-relaxed">
                  {p.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

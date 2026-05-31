import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HouseIcon, WalletIcon, CreditCardIcon, ArrowsLeftRightIcon,
  ReceiptIcon, GearIcon, ChatCircleIcon, FileTextIcon,
  MagnifyingGlassIcon, BellIcon, CaretRightIcon,
  PaperPlaneTiltIcon, GlobeIcon, ArrowDownIcon, ArrowUpIcon,
  EyeIcon, EyeSlashIcon, SignOutIcon, ArrowRightIcon, ListIcon, XIcon,
  ShieldCheckIcon, PlusIcon,
} from "@phosphor-icons/react";
import PageTransition from "../components/PageTransition.jsx";
import SEO from "../components/SEO.jsx";

const USER = { name: "Tendai Moyo", initials: "TM", greeting: "Good morning" };

const ACCOUNTS = [
  { id: "everyday",  label: "Current Account",      sub: "Personal", number: "•••• 4329", balance: 12_482.55, trend: "+ $284 this week",         direction: "up",   bg: "surface-ink",   text: "text-white",   subText: "text-white/55" },
  { id: "savings",   label: "Savings Plus",         sub: "Savings",  number: "•••• 8814", balance: 38_750.00, trend: "+ $410 interest YTD",       direction: "up",   bg: "surface-cream", text: "text-ink",     subText: "text-dim" },
  { id: "diaspora",  label: "Diaspora Account",     sub: "USD/GBP",  number: "•••• 2106", balance: 4_215.30,  trend: "1 USD = 0.795 GBP",         direction: "flat", bg: "surface-pearl", text: "text-ink",     subText: "text-dim" },
];

const QUICK = [
  { icon: PaperPlaneTiltIcon, label: "Send money",       note: "Transfer or pay anyone" },
  { icon: ReceiptIcon,        label: "Pay a bill",       note: "Once or recurring" },
  { icon: GlobeIcon,          label: "Foreign exchange", note: "USD · ZAR · GBP · ZWL" },
  { icon: FileTextIcon,       label: "Statements",       note: "Download or share" },
];

const TRANSACTIONS = [
  { id: "t1", date: "Today, 09:14", merchant: "Salary — Bard Santner Markets Inc", category: "Salary",    amount: +4_650.00, account: "Current" },
  { id: "t2", date: "Today, 08:02", merchant: "Cassia Café — Borrowdale",          category: "Dining",    amount: -8.40,    account: "Current" },
  { id: "t3", date: "Yesterday",    merchant: "ZESA Holdings — Electricity",       category: "Utilities", amount: -54.20,   account: "Current" },
  { id: "t4", date: "Yesterday",    merchant: "Transfer to Savings Plus",          category: "Transfer",  amount: -500.00,  account: "Current" },
  { id: "t5", date: "27 May",       merchant: "WorldRemit — From the UK",          category: "Diaspora",  amount: +820.00,  account: "Diaspora" },
];

const SIDEBAR_PRIMARY = [
  { icon: HouseIcon,           label: "Dashboard",       active: true },
  { icon: WalletIcon,          label: "Accounts" },
  { icon: CreditCardIcon,      label: "Cards" },
  { icon: ArrowsLeftRightIcon, label: "Transfers" },
  { icon: ReceiptIcon,         label: "Bills & payments" },
  { icon: FileTextIcon,        label: "Statements" },
  { icon: ChatCircleIcon,      label: "Messages", badge: 2 },
];

function fmt(n) { return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }

export default function AppDashboard() {
  const [hide, setHide] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const navigate = useNavigate();

  return (
    <PageTransition>
      <SEO title="Dashboard" description="Bard Santner Online Banking dashboard." path="/app" noindex />

      <div className="min-h-screen surface-pearl text-ink flex flex-col">
        {/* Top bar */}
        <header className="surface-white border-b border-line sticky top-0 z-40">
          <div className="px-4 md:px-8 h-16 md:h-[68px] flex items-center gap-3 md:gap-6">
            <button onClick={() => setMobileNav(true)} className="lg:hidden w-10 h-10 flex items-center justify-center -ml-1 text-graphite">
              <ListIcon size={20} weight="bold" />
            </button>
            <Link to="/" className="flex items-center gap-2.5">
              <img src="/favicon.png" alt="" className="h-9 w-9" />
              <span className="hidden sm:flex flex-col leading-none">
                <span className="font-display text-[14px] tracking-[-0.012em] font-semibold text-ink"
                      style={{ fontVariationSettings: '"opsz" 28' }}>
                  Bard Santner
                </span>
                <span className="t-mono text-[9.5px] text-dim mt-0.5">Online Banking</span>
              </span>
            </Link>

            <div className="hidden md:flex flex-1 max-w-md mx-auto relative">
              <MagnifyingGlassIcon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-dim" />
              <input
                type="text"
                placeholder="Search transactions, payees, statements"
                className="w-full pl-11 pr-4 h-10 text-[13.5px] bg-cream border border-transparent hover:border-line focus:border-navy-600 focus:bg-white rounded-[2px] focus:outline-none"
              />
            </div>
            <div className="flex-1 md:hidden" />

            <button className="relative w-10 h-10 flex items-center justify-center text-graphite hover:text-navy-600">
              <BellIcon size={18} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full ring-2 ring-white" />
            </button>

            <button className="hidden md:flex items-center gap-2.5 pl-1.5 pr-3 h-10 rounded-[2px] bg-cream hover:bg-line/50 transition-colors">
              <span className="w-7 h-7 rounded-full bg-navy-600 text-white flex items-center justify-center text-[11px] font-utility font-semibold"
                    style={{ fontFamily: "var(--font-utility)" }}>
                {USER.initials}
              </span>
              <span className="text-[13px] font-utility font-semibold text-ink"
                    style={{ fontFamily: "var(--font-utility)" }}>
                {USER.name.split(" ")[0]}
              </span>
              <CaretRightIcon size={11} weight="bold" className="text-dim rotate-90" />
            </button>
            <button onClick={() => navigate("/")} className="hidden md:flex w-10 h-10 items-center justify-center text-graphite hover:text-navy-600">
              <SignOutIcon size={17} />
            </button>
          </div>
        </header>

        <div className="flex flex-1">
          {/* Sidebar — desktop */}
          <aside className="hidden lg:flex flex-col w-64 border-r border-line surface-white py-7 px-4 shrink-0">
            <SidebarBody onNavigate={() => {}} />
          </aside>

          {/* Sidebar — mobile drawer */}
          {mobileNav && (
            <>
              <button onClick={() => setMobileNav(false)} className="fixed inset-0 z-50 lg:hidden bg-ink/40" />
              <aside className="fixed left-0 top-0 bottom-0 z-[60] lg:hidden w-72 max-w-[80%] surface-white py-6 px-4 flex flex-col">
                <div className="flex items-center justify-between px-2 pb-5 mb-2 border-b border-line">
                  <Link to="/" className="flex items-center gap-2.5">
                    <img src="/favicon.png" alt="" className="h-8 w-8" />
                    <span className="font-display text-[14px] font-semibold text-ink"
                          style={{ fontVariationSettings: '"opsz" 28' }}>
                      Bard Santner
                    </span>
                  </Link>
                  <button onClick={() => setMobileNav(false)} className="w-9 h-9 flex items-center justify-center text-graphite">
                    <XIcon size={18} weight="bold" />
                  </button>
                </div>
                <SidebarBody onNavigate={() => setMobileNav(false)} />
              </aside>
            </>
          )}

          {/* Main */}
          <main className="flex-1 min-w-0 px-4 sm:px-6 md:px-10 py-8 md:py-10">
            {/* Greeting */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-9 md:mb-12">
              <div>
                <p className="t-eyebrow text-orange-600 mb-2">{USER.greeting}</p>
                <h1 className="font-display text-[36px] md:text-[44px] font-medium text-ink leading-tight"
                    style={{ fontVariationSettings: '"opsz" 56' }}>
                  {USER.name.split(" ")[0]}.
                </h1>
                <p className="text-[14px] text-dim mt-2 max-w-md">
                  Three accounts on one screen. Send, receive, save — and speak with your banker.
                </p>
              </div>
              <button onClick={() => setHide((v) => !v)} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[2px] surface-white border border-line hover:border-navy-600 text-[12.5px] font-utility font-semibold text-ink transition-colors self-start sm:self-auto"
                      style={{ fontFamily: "var(--font-utility)" }}>
                {hide ? <EyeIcon size={14} /> : <EyeSlashIcon size={14} />}
                {hide ? "Show balances" : "Hide balances"}
              </button>
            </div>

            {/* Accounts row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-10 md:mb-12">
              {ACCOUNTS.map((a, i) => (
                <motion.div key={a.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.06 }} className={`relative ${a.bg} ${a.text} p-7 border border-line/40 rounded-[2px]`}>
                  <span className="absolute top-0 left-0 right-0 h-px bg-orange-500" />
                  <div className="flex items-center justify-between mb-7">
                    <p className={`t-mono ${a.subText}`}>{a.sub}</p>
                    <span className={`font-mono text-[11px] ${a.subText}`}>{a.number}</span>
                  </div>
                  <p className={`text-[13.5px] font-utility font-semibold ${a.subText} mb-2`} style={{ fontFamily: "var(--font-utility)" }}>{a.label}</p>
                  <p className="font-display text-[28px] md:text-[32px] font-medium leading-none tracking-[-0.02em]"
                     style={{ fontVariationSettings: '"opsz" 48' }}>
                    {hide ? "•••••" : <><span className={`text-[18px] font-normal mr-1 ${a.subText}`}>$</span>{fmt(a.balance)}</>}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-[12px]">
                    {a.direction === "up"   && <ArrowUpIcon size={11} className="text-emerald-400" />}
                    {a.direction === "down" && <ArrowDownIcon size={11} className="text-red-400" />}
                    <span className={a.subText}>{a.trend}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-12">
              {QUICK.map((q) => {
                const Icon = q.icon;
                return (
                  <button key={q.label} className="text-left surface-white hover:bg-cream border border-line hover:border-navy-400 rounded-[2px] p-4 md:p-5 transition-all">
                    <span className="w-10 h-10 rounded-[2px] bg-orange-50 flex items-center justify-center mb-3">
                      <Icon size={18} className="text-orange-600" />
                    </span>
                    <p className="text-[13.5px] font-utility font-semibold text-ink" style={{ fontFamily: "var(--font-utility)" }}>{q.label}</p>
                    <p className="text-[11.5px] text-dim mt-1 leading-tight">{q.note}</p>
                  </button>
                );
              })}
            </div>

            {/* Recent transactions */}
            <div className="surface-white border border-line overflow-hidden">
              <div className="px-6 md:px-8 py-5 flex items-center justify-between border-b border-line">
                <p className="font-display text-[16px] font-medium text-ink"
                   style={{ fontVariationSettings: '"opsz" 28' }}>
                  Recent transactions
                </p>
                <button className="text-[12px] font-utility font-semibold text-navy-600 hover:text-orange-600 inline-flex items-center gap-1.5"
                        style={{ fontFamily: "var(--font-utility)" }}>
                  View all
                  <ArrowRightIcon size={10} weight="bold" />
                </button>
              </div>
              <ul>
                {TRANSACTIONS.map((t) => (
                  <li key={t.id} className="px-6 md:px-8 py-3.5 flex items-center gap-4 border-b border-line/60 last:border-b-0 hover:bg-cream transition-colors">
                    <span className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${t.amount > 0 ? "bg-emerald-50 text-emerald-600" : "bg-cream text-ink"}`}>
                      {t.amount > 0 ? <ArrowDownIcon size={14} weight="bold" /> : <ArrowUpIcon size={14} weight="bold" />}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[13.5px] font-utility font-semibold text-ink truncate" style={{ fontFamily: "var(--font-utility)" }}>{t.merchant}</p>
                      <p className="text-[11.5px] text-dim mt-0.5">{t.category} · {t.account} · {t.date}</p>
                    </div>
                    <p className={`font-display text-[15px] font-medium tabular-nums ${t.amount > 0 ? "text-emerald-600" : "text-ink"}`}
                       style={{ fontVariationSettings: '"opsz" 28' }}>
                      {t.amount > 0 ? "+" : "−"}${fmt(Math.abs(t.amount))}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-12 text-[11px] text-faint leading-relaxed max-w-2xl">
              This is a demonstration interface. The Bard Santner Online Banking production environment is operated under the prudential oversight that supervises BSMFB. All session activity is logged and encrypted.
            </p>
          </main>
        </div>
      </div>
    </PageTransition>
  );
}

function SidebarBody({ onNavigate }) {
  return (
    <nav className="flex flex-col h-full">
      <p className="px-3 mb-2 t-eyebrow text-dim text-[10px]">Navigation</p>
      <ul className="space-y-1 mb-7">
        {SIDEBAR_PRIMARY.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.label}>
              <button onClick={onNavigate} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-[2px] text-[13.5px] font-utility font-semibold transition-colors ${item.active ? "bg-orange-50 text-orange-700" : "text-mute hover:bg-cream hover:text-ink"}`} style={{ fontFamily: "var(--font-utility)" }}>
                <Icon size={17} className={item.active ? "text-orange-600" : "text-dim"} />
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <span className="px-1.5 py-0.5 text-[10px] bg-navy-600 text-white rounded-full">{item.badge}</span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
      <p className="px-3 mb-2 t-eyebrow text-dim text-[10px]">Account</p>
      <ul className="space-y-1 mb-7">
        <li>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-[2px] text-[13.5px] font-utility font-semibold text-mute hover:bg-cream hover:text-ink" style={{ fontFamily: "var(--font-utility)" }}>
            <GearIcon size={17} className="text-dim" />
            <span className="flex-1 text-left">Settings</span>
          </button>
        </li>
      </ul>
      <div className="mt-auto p-4 rounded-[2px] surface-cream border border-line">
        <p className="font-display text-[14px] font-medium text-ink mb-1.5" style={{ fontVariationSettings: '"opsz" 24' }}>
          Need a real banker?
        </p>
        <p className="text-[12px] text-dim leading-relaxed mb-3">
          In-app messaging reaches a real banker, not a bot.
        </p>
        <button className="text-[12px] font-utility font-semibold text-navy-600 hover:text-orange-600 inline-flex items-center gap-1.5" style={{ fontFamily: "var(--font-utility)" }}>
          Open a message <PlusIcon size={10} weight="bold" />
        </button>
      </div>
    </nav>
  );
}

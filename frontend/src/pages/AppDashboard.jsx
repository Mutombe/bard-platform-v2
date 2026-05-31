import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HouseIcon,
  WalletIcon,
  CreditCardIcon,
  ArrowsLeftRightIcon,
  ReceiptIcon,
  GearIcon,
  ChatCircleIcon,
  MagnifyingGlassIcon,
  BellIcon,
  CaretRightIcon,
  PaperPlaneTiltIcon,
  GlobeIcon,
  FileTextIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  PlusIcon,
  EyeIcon,
  EyeSlashIcon,
  SignOutIcon,
  ArrowRightIcon,
  ListIcon,
  XIcon,
  ShieldCheckIcon,
} from "@phosphor-icons/react";
import PageTransition from "../components/PageTransition.jsx";
import SEO from "../components/SEO.jsx";

/**
 * /app — Online Banking dashboard mockup.
 *
 * The actual web app. Not the marketing landing (/online-banking)
 * and not the login surface (/login). This is what a signed-in
 * Bard Santner customer sees.
 *
 * Layout:
 *   • Top app bar — logo, search, notifications, profile menu
 *   • Left sidebar (desktop) — Dashboard, Accounts, Cards, Transfers,
 *     Bills, Statements, Messages, Settings
 *   • Main column — greeting, accounts row, quick actions, recent
 *     transactions, spending breakdown, alerts strip
 *
 * Demo state: fixed user "Tendai Moyo" with three accounts, six
 * recent transactions, plausible Zimbabwean / regional context.
 * Numbers are USD. Balances and transactions are mockup data.
 */

const USER = {
  name: "Tendai Moyo",
  initials: "TM",
  greeting: "Good morning",
};

const ACCOUNTS = [
  {
    id: "everyday",
    label: "Everyday Account",
    sub: "Personal · Account",
    number: "•••• 4329",
    balance: 12_482.55,
    currency: "USD",
    trend: "+ $284 this week",
    direction: "up",
    accent: "var(--color-orange-500)",
    bg: "bg-ink",
    text: "text-white",
    subText: "text-white/55",
  },
  {
    id: "savings",
    label: "Savings Plus",
    sub: "Personal · Savings",
    number: "•••• 8814",
    balance: 38_750.00,
    currency: "USD",
    trend: "+ $410 interest YTD",
    direction: "up",
    accent: "var(--color-orange-500)",
    bg: "bg-paper",
    text: "text-navy-700",
    subText: "text-bone-500",
  },
  {
    id: "diaspora",
    label: "Diaspora Account",
    sub: "International · USD/GBP",
    number: "•••• 2106",
    balance: 4_215.30,
    currency: "USD",
    trend: "Last FX: 1 USD = 0.795 GBP",
    direction: "flat",
    accent: "var(--color-navy-600)",
    bg: "bg-smoke",
    text: "text-navy-700",
    subText: "text-bone-600",
  },
];

const QUICK_ACTIONS = [
  { icon: PaperPlaneTiltIcon, label: "Send money", note: "Transfer or pay anyone" },
  { icon: ReceiptIcon, label: "Pay a bill", note: "Once or recurring" },
  { icon: GlobeIcon, label: "Foreign exchange", note: "USD · ZAR · GBP · ZWL" },
  { icon: FileTextIcon, label: "Statements", note: "Download or share" },
];

const TRANSACTIONS = [
  { id: "t1", date: "Today, 09:14", merchant: "Salary — Bard Santner Markets Inc", category: "Salary",   amount: +4_650.00, account: "Everyday" },
  { id: "t2", date: "Today, 08:02", merchant: "Cassia Café — Borrowdale",          category: "Dining",   amount: -8.40,    account: "Everyday" },
  { id: "t3", date: "Yesterday",     merchant: "ZESA Holdings — Electricity",       category: "Utilities", amount: -54.20,   account: "Everyday" },
  { id: "t4", date: "Yesterday",     merchant: "Transfer to Savings Plus",          category: "Transfer", amount: -500.00,  account: "Everyday" },
  { id: "t5", date: "27 May",        merchant: "WorldRemit — From the UK",          category: "Diaspora", amount: +820.00,  account: "Diaspora" },
  { id: "t6", date: "26 May",        merchant: "Pick n Pay — Sam Levy's",           category: "Groceries", amount: -64.85,  account: "Everyday" },
];

const CATEGORY_SPLIT = [
  { label: "Groceries",  pct: 28, amount: 412.00 },
  { label: "Utilities",  pct: 22, amount: 324.00 },
  { label: "Transport",  pct: 15, amount: 220.00 },
  { label: "Dining",     pct: 13, amount: 192.00 },
  { label: "Other",      pct: 22, amount: 324.00 },
];

const SIDEBAR_PRIMARY = [
  { icon: HouseIcon,            label: "Dashboard",  active: true },
  { icon: WalletIcon,           label: "Accounts" },
  { icon: CreditCardIcon,       label: "Cards" },
  { icon: ArrowsLeftRightIcon,  label: "Transfers" },
  { icon: ReceiptIcon,          label: "Bills & payments" },
  { icon: FileTextIcon,         label: "Statements" },
  { icon: ChatCircleIcon,       label: "Messages", badge: 2 },
];

const SIDEBAR_SECONDARY = [
  { icon: GearIcon,             label: "Settings" },
];

function fmt(n) {
  return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function AppDashboard() {
  const [hideBalances, setHideBalances] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const navigate = useNavigate();

  return (
    <PageTransition>
      <SEO title="Dashboard" description="Bard Santner Online Banking dashboard." path="/app" noindex />

      <div className="min-h-screen bg-bone-100/60 text-navy-700 flex flex-col">
        {/* ─── TOP APP BAR ──────────────────────────────────────────── */}
        <header className="bg-white border-b border-bone-200 sticky top-0 z-40">
          <div className="px-4 md:px-8 h-16 md:h-[68px] flex items-center gap-3 md:gap-6">
            <button
              onClick={() => setMobileNav(true)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-md hover:bg-bone-100 text-navy-600 -ml-1"
              aria-label="Open menu"
            >
              <ListIcon size={20} weight="bold" />
            </button>

            <Link to="/" className="flex items-center gap-2.5">
              <img src="/favicon.png" alt="" className="h-9 w-9 object-contain" />
              <span className="hidden sm:flex flex-col leading-none">
                <span className="font-display text-[14px] tracking-[0.04em] uppercase font-medium text-navy-600">
                  Bard Santner
                </span>
                <span className="text-[9.5px] tracking-[0.18em] text-bone-500 uppercase mt-0.5">
                  Online Banking
                </span>
              </span>
            </Link>

            {/* Search */}
            <div className="hidden md:flex flex-1 max-w-md mx-auto relative">
              <MagnifyingGlassIcon
                size={16}
                weight="regular"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-bone-500"
              />
              <input
                type="text"
                placeholder="Search transactions, payees, statements"
                className="w-full pl-11 pr-4 h-10 text-[13.5px] bg-bone-100/80 border border-transparent hover:border-bone-200 focus:border-orange-500 focus:bg-white rounded-full focus:outline-none transition-colors placeholder:text-bone-500"
              />
            </div>
            <div className="flex-1 md:hidden" />

            {/* Trailing actions */}
            <button
              aria-label="Notifications"
              className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-bone-100 text-navy-600"
            >
              <BellIcon size={18} weight="regular" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full ring-2 ring-white" />
            </button>

            {/* Profile chip */}
            <button className="hidden md:flex items-center gap-2.5 pl-1.5 pr-3 h-10 rounded-full bg-bone-100/70 hover:bg-bone-200/50 transition-colors">
              <span className="w-7 h-7 rounded-full bg-navy-700 text-white flex items-center justify-center text-[11px] font-medium font-display">
                {USER.initials}
              </span>
              <span className="text-[13px] font-medium text-navy-700">{USER.name.split(" ")[0]}</span>
              <CaretRightIcon size={11} weight="bold" className="text-bone-400 rotate-90" />
            </button>

            <button
              onClick={() => navigate("/")}
              aria-label="Sign out"
              className="hidden md:flex w-10 h-10 items-center justify-center rounded-full hover:bg-bone-100 text-navy-600"
            >
              <SignOutIcon size={17} weight="regular" />
            </button>
          </div>
        </header>

        {/* ─── BODY ─────────────────────────────────────────────────── */}
        <div className="flex flex-1">
          {/* Sidebar — desktop */}
          <aside className="hidden lg:flex flex-col w-64 border-r border-bone-200 bg-white py-7 px-4 shrink-0">
            <SidebarBody onNavigate={() => {}} />
          </aside>

          {/* Sidebar — mobile drawer */}
          {mobileNav && (
            <>
              <button
                onClick={() => setMobileNav(false)}
                aria-label="Close menu"
                className="fixed inset-0 z-50 lg:hidden bg-ink/40"
              />
              <aside className="fixed left-0 top-0 bottom-0 z-[60] lg:hidden w-72 max-w-[80%] bg-white py-6 px-4 flex flex-col">
                <div className="flex items-center justify-between px-2 pb-5 mb-2 border-b border-bone-200">
                  <Link to="/" className="flex items-center gap-2.5">
                    <img src="/favicon.png" alt="" className="h-8 w-8 object-contain" />
                    <span className="font-display text-[13.5px] tracking-[0.04em] uppercase font-medium text-navy-600">
                      Bard Santner
                    </span>
                  </Link>
                  <button
                    onClick={() => setMobileNav(false)}
                    className="w-9 h-9 flex items-center justify-center rounded-md hover:bg-bone-100 text-navy-600"
                  >
                    <XIcon size={18} weight="bold" />
                  </button>
                </div>
                <SidebarBody onNavigate={() => setMobileNav(false)} />
              </aside>
            </>
          )}

          {/* Main column */}
          <main className="flex-1 min-w-0 px-4 sm:px-6 md:px-10 py-8 md:py-10">
            {/* Greeting + balance toggle */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-7 md:mb-10">
              <div>
                <p className="eyebrow eyebrow-accent mb-2">{USER.greeting}</p>
                <h1 className="display-md text-navy-600 leading-tight">
                  {USER.name.split(" ")[0]}.
                </h1>
                <p className="text-[14px] text-bone-600 mt-2 max-w-md">
                  Three accounts on one screen. Send, receive, save, and speak to your banker.
                </p>
              </div>
              <button
                onClick={() => setHideBalances((v) => !v)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-bone-300 hover:border-navy-600 text-[12.5px] font-medium text-navy-700 transition-colors self-start sm:self-auto"
              >
                {hideBalances ? <EyeIcon size={14} /> : <EyeSlashIcon size={14} />}
                {hideBalances ? "Show balances" : "Hide balances"}
              </button>
            </div>

            {/* Accounts row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-8 md:mb-10">
              {ACCOUNTS.map((a, i) => (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative rounded-xl ${a.bg} ${a.text} p-6 md:p-7 overflow-hidden border border-bone-200/50 shadow-[0_1px_3px_rgba(12,10,20,0.04)]`}
                >
                  <span
                    className="absolute top-0 left-0 right-0 h-[2px]"
                    style={{ backgroundColor: a.accent }}
                  />
                  <div className="flex items-center justify-between mb-7 md:mb-8">
                    <p className={`text-[10.5px] tracking-[0.18em] uppercase font-medium ${a.subText}`}>
                      {a.sub}
                    </p>
                    <span className={`font-mono text-[11px] ${a.subText}`}>{a.number}</span>
                  </div>
                  <p className={`text-[13.5px] font-medium ${a.subText} mb-2`}>{a.label}</p>
                  <p className="font-display text-[28px] md:text-[32px] font-medium leading-none tracking-[-0.02em]">
                    {hideBalances ? (
                      "•••••"
                    ) : (
                      <>
                        <span className={`text-[18px] ${a.subText} font-normal mr-1`}>$</span>
                        {fmt(a.balance)}
                      </>
                    )}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-[12px]">
                    {a.direction === "up" && (
                      <ArrowUpIcon size={11} weight="bold" className="text-emerald-400" />
                    )}
                    {a.direction === "down" && (
                      <ArrowDownIcon size={11} weight="bold" className="text-red-400" />
                    )}
                    <span className={a.subText}>{a.trend}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-10">
              {QUICK_ACTIONS.map((q) => {
                const Icon = q.icon;
                return (
                  <button
                    key={q.label}
                    className="group text-left bg-white hover:bg-paper border border-bone-200 hover:border-orange-500 rounded-lg p-4 md:p-5 transition-all hover:shadow-[0_4px_14px_rgba(12,10,20,0.06)]"
                  >
                    <span className="w-10 h-10 rounded-md bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center mb-3 transition-colors">
                      <Icon size={18} weight="regular" className="text-orange-600" />
                    </span>
                    <p className="text-[13.5px] font-medium text-navy-700">{q.label}</p>
                    <p className="text-[11.5px] text-bone-500 mt-1 leading-tight">{q.note}</p>
                  </button>
                );
              })}
            </div>

            {/* Two-column: transactions + spending */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
              {/* Recent transactions */}
              <div className="lg:col-span-2 bg-white rounded-xl border border-bone-200 overflow-hidden">
                <div className="px-5 md:px-7 py-5 flex items-center justify-between border-b border-bone-200">
                  <p className="font-display text-[15px] md:text-[16px] font-medium text-navy-600">
                    Recent transactions
                  </p>
                  <button className="text-[12px] font-medium text-orange-600 hover:underline inline-flex items-center gap-1">
                    View all
                    <ArrowRightIcon size={10} weight="bold" />
                  </button>
                </div>
                <ul>
                  {TRANSACTIONS.map((t) => (
                    <li
                      key={t.id}
                      className="px-5 md:px-7 py-3.5 flex items-center gap-4 border-b border-bone-100 last:border-b-0 hover:bg-bone-50/60 transition-colors"
                    >
                      <span
                        className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                          t.amount > 0 ? "bg-emerald-50 text-emerald-600" : "bg-bone-100 text-navy-600"
                        }`}
                      >
                        {t.amount > 0 ? (
                          <ArrowDownIcon size={14} weight="bold" />
                        ) : (
                          <ArrowUpIcon size={14} weight="bold" />
                        )}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[13.5px] font-medium text-navy-700 truncate">{t.merchant}</p>
                        <p className="text-[11.5px] text-bone-500 mt-0.5">
                          {t.category} · {t.account} · {t.date}
                        </p>
                      </div>
                      <p
                        className={`font-display text-[14.5px] font-medium tabular-nums ${
                          t.amount > 0 ? "text-emerald-600" : "text-navy-700"
                        }`}
                      >
                        {t.amount > 0 ? "+" : "−"}${fmt(Math.abs(t.amount))}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Spending breakdown + alerts */}
              <div className="space-y-5 md:space-y-6">
                <div className="bg-white rounded-xl border border-bone-200 p-5 md:p-6">
                  <div className="flex items-baseline justify-between mb-5">
                    <p className="font-display text-[15px] md:text-[16px] font-medium text-navy-600">
                      Spending this month
                    </p>
                    <p className="text-[11.5px] text-bone-500">May</p>
                  </div>
                  <p className="font-display text-[26px] md:text-[28px] font-medium text-navy-700 tracking-[-0.02em] mb-4">
                    {hideBalances ? "•••••" : <><span className="text-[16px] text-bone-500 font-normal mr-1">$</span>1,472.00</>}
                  </p>
                  {/* Segmented bar */}
                  <div className="flex h-2 rounded-full overflow-hidden mb-5">
                    {CATEGORY_SPLIT.map((c, i) => (
                      <span
                        key={c.label}
                        className={`block h-full ${
                          ["bg-orange-500", "bg-navy-600", "bg-emerald-500", "bg-amber-400", "bg-bone-300"][i]
                        }`}
                        style={{ width: `${c.pct}%` }}
                      />
                    ))}
                  </div>
                  <ul className="space-y-2">
                    {CATEGORY_SPLIT.map((c, i) => (
                      <li key={c.label} className="flex items-center justify-between text-[12px]">
                        <span className="flex items-center gap-2 text-bone-600">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              ["bg-orange-500", "bg-navy-600", "bg-emerald-500", "bg-amber-400", "bg-bone-300"][i]
                            }`}
                          />
                          {c.label}
                        </span>
                        <span className="font-medium text-navy-700 tabular-nums">
                          {hideBalances ? "•••" : `$${fmt(c.amount)}`}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Alert card */}
                <div className="bg-ink text-white rounded-xl p-5 md:p-6 relative overflow-hidden">
                  <span className="absolute top-0 left-0 right-0 h-[2px] bg-orange-500" />
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldCheckIcon size={14} weight="regular" className="text-orange-400" />
                    <p className="font-mono text-[10.5px] tracking-[0.22em] uppercase font-medium text-orange-400">
                      Session
                    </p>
                  </div>
                  <p className="text-[13.5px] text-white/85 leading-relaxed mb-4">
                    You signed in from <span className="font-medium text-white">Chrome on Windows</span> at 08:01 CAT today. Not you?
                  </p>
                  <button className="text-[12.5px] font-medium text-orange-400 hover:text-orange-300 inline-flex items-center gap-1.5">
                    Review activity
                    <ArrowRightIcon size={10} weight="bold" />
                  </button>
                </div>
              </div>
            </div>

            {/* Footer credit */}
            <p className="mt-12 text-[11px] text-bone-500 leading-relaxed max-w-2xl">
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
      <p className="px-3 mb-2 eyebrow text-[10px]">Navigation</p>
      <ul className="space-y-1 mb-7">
        {SIDEBAR_PRIMARY.map((item) => (
          <SidebarItem key={item.label} item={item} onClick={onNavigate} />
        ))}
      </ul>

      <p className="px-3 mb-2 eyebrow text-[10px]">Account</p>
      <ul className="space-y-1 mb-7">
        {SIDEBAR_SECONDARY.map((item) => (
          <SidebarItem key={item.label} item={item} onClick={onNavigate} />
        ))}
      </ul>

      {/* "Need help?" card */}
      <div className="mt-auto p-4 rounded-lg bg-bone-50 border border-bone-200">
        <p className="font-display text-[14px] font-medium text-navy-600 mb-1.5">
          Need a real banker?
        </p>
        <p className="text-[12px] text-bone-600 leading-relaxed mb-3">
          In-app messaging reaches a real banker, not a bot.
        </p>
        <button className="text-[12px] font-medium text-orange-600 hover:underline inline-flex items-center gap-1">
          Open a message <PlusIcon size={10} weight="bold" />
        </button>
      </div>
    </nav>
  );
}

function SidebarItem({ item, onClick }) {
  const Icon = item.icon;
  return (
    <li>
      <button
        onClick={onClick}
        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-[13.5px] font-medium transition-colors ${
          item.active
            ? "bg-orange-50 text-orange-700"
            : "text-bone-600 hover:bg-bone-100 hover:text-navy-700"
        }`}
      >
        <Icon size={17} weight="regular" className={item.active ? "text-orange-600" : "text-bone-500"} />
        <span className="flex-1 text-left">{item.label}</span>
        {item.badge && (
          <span className="px-1.5 py-0.5 text-[10px] font-medium bg-navy-600 text-white rounded-full">
            {item.badge}
          </span>
        )}
      </button>
    </li>
  );
}

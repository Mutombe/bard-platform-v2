import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  GoogleLogoIcon,
  AppleLogoIcon,
  EyeIcon,
  EyeSlashIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ShieldCheckIcon,
} from "@phosphor-icons/react";

import PageTransition from "../components/PageTransition.jsx";
import SEO from "../components/SEO.jsx";
import { HERO } from "../data/images.js";

/**
 * /login — Online Banking entry surface.
 *
 * Single-viewport rule: the entire form fits inside h-screen with no
 * scrolling on any modern viewport (≥700px tall). Every margin and
 * padding is tuned for that constraint. The biometric option and the
 * subhead-paragraph were dropped because the OAuth buttons and the
 * security footer already say what they would have said.
 *
 * Left panel: form (Google / Apple / email + password / remember-me /
 * log-in / open-account / security note).
 * Right panel (lg+): editorial photograph + headline + trust strip.
 */
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(null);

  function go(name) {
    setLoading(name);
    setTimeout(() => navigate("/app"), 600);
  }

  function handleEmailLogin(e) {
    e.preventDefault();
    if (!email || !password) return;
    go("email");
  }

  return (
    <PageTransition>
      <SEO
        title="Log in"
        description="Log in to Bard Santner Online Banking."
        path="/login"
        noindex
      />

      <div className="h-screen flex bg-milk overflow-hidden">
        {/* ─── LEFT — form panel ────────────────────────────────────── */}
        <div className="flex-1 flex items-center justify-center px-5 sm:px-8 py-6 sm:py-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-md"
          >
            {/* Brand row */}
            <Link to="/" className="inline-flex items-center gap-2.5 mb-5 group">
              <img src="/favicon.png" alt="" className="h-9 w-9 object-contain" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-[14px] tracking-[0.04em] uppercase font-medium text-navy-600">
                  Bard Santner
                </span>
                <span className="text-[9.5px] tracking-[0.18em] text-bone-500 uppercase mt-0.5">
                  Online Banking
                </span>
              </span>
            </Link>

            {/* Headline — compact, single-instance */}
            <p className="eyebrow eyebrow-accent mb-2">§ Welcome back</p>
            <h1 className="display-md text-navy-600 mb-5">
              Log in to your bank.
            </h1>

            {/* OAuth buttons — primary entry points */}
            <div className="space-y-2.5 mb-5">
              <button
                onClick={() => go("google")}
                disabled={!!loading}
                className="w-full flex items-center justify-center gap-3 px-5 py-3 rounded-lg bg-white border border-bone-300 hover:border-navy-600 hover:shadow-[0_4px_14px_rgba(12,10,20,0.08)] disabled:opacity-60 transition-all text-[14px] font-medium text-navy-700"
              >
                <GoogleLogoIcon size={17} weight="bold" className="text-[#4285F4]" />
                {loading === "google" ? "Signing you in…" : "Continue with Google"}
              </button>
              <button
                onClick={() => go("apple")}
                disabled={!!loading}
                className="w-full flex items-center justify-center gap-3 px-5 py-3 rounded-lg bg-ink text-white hover:bg-coal disabled:opacity-60 transition-all text-[14px] font-medium"
              >
                <AppleLogoIcon size={17} weight="fill" />
                {loading === "apple" ? "Signing you in…" : "Continue with Apple"}
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-4">
              <hr className="flex-1 border-bone-200" />
              <span className="text-[10.5px] uppercase tracking-[0.2em] text-bone-500 font-medium">
                Or with email
              </span>
              <hr className="flex-1 border-bone-200" />
            </div>

            {/* Email + password form */}
            <form onSubmit={handleEmailLogin} className="space-y-3">
              <div>
                <label className="block text-[12px] font-medium text-navy-600 mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-3.5 py-2.5 text-[14.5px] bg-white border border-bone-300 rounded-md focus:outline-none focus:border-orange-500 placeholder:text-bone-400"
                />
              </div>
              <div>
                <div className="flex items-baseline justify-between mb-1">
                  <label className="block text-[12px] font-medium text-navy-600">Password</label>
                  <Link to="#" className="text-[11.5px] text-orange-600 hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-3.5 py-2.5 pr-11 text-[14.5px] bg-white border border-bone-300 rounded-md focus:outline-none focus:border-orange-500 placeholder:text-bone-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded text-bone-500 hover:text-navy-600 hover:bg-bone-100"
                  >
                    {showPassword ? <EyeSlashIcon size={16} /> : <EyeIcon size={16} />}
                  </button>
                </div>
              </div>

              <label className="flex items-center gap-2 cursor-pointer select-none pt-0.5">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="w-3.5 h-3.5 rounded border-bone-300 text-orange-500 focus:ring-orange-500/50"
                />
                <span className="text-[12.5px] text-bone-600">Keep me signed in on this device</span>
              </label>

              <button
                type="submit"
                disabled={!!loading}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-medium text-[14.5px] transition-colors disabled:opacity-60"
              >
                {loading === "email" ? "Signing you in…" : "Log in"}
                <ArrowRightIcon size={13} weight="bold" />
              </button>
            </form>

            {/* Footer row — open-account inline + security note */}
            <p className="mt-4 text-center text-[12.5px] text-bone-600">
              New to Bard Santner?{" "}
              <Link to="/personal" className="text-orange-600 font-medium hover:underline">
                Open an account
              </Link>
            </p>

            <div className="mt-4 pt-3 border-t border-bone-200 flex items-start gap-2 text-[10.5px] text-bone-500 leading-snug">
              <ShieldCheckIcon size={12} weight="regular" className="text-bone-400 mt-0.5 shrink-0" />
              <span>
                Biometric authentication, end-to-end encryption (TLS 1.3 / AES-256), and device binding. We will never ask for your password by phone or email.
              </span>
            </div>
          </motion.div>
        </div>

        {/* ─── RIGHT — branding panel (lg+ only) ─────────────────────── */}
        <div className="hidden lg:flex flex-1 relative bg-ink overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${HERO.onlineBanking})`,
              filter: "saturate(0.72) brightness(0.78) contrast(1.06)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-ink/85 via-ink/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/65" />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-orange-500" />

          <div className="relative w-full flex flex-col justify-between p-10 xl:p-14">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[12.5px] text-white/70 hover:text-white transition-colors self-start"
            >
              <ArrowLeftIcon size={12} weight="bold" />
              Back to bardsantner.com
            </Link>

            <div className="max-w-md">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[2px] w-10 bg-orange-500" />
                <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-orange-400">
                  Online Banking
                </p>
              </div>
              <h2 className="font-display text-[36px] xl:text-[44px] font-medium text-white text-balance leading-[1.04] mb-4 tracking-[-0.022em]">
                Banking that travels with you.
              </h2>
              <p className="text-white/80 text-[14.5px] leading-relaxed">
                The same bank, the same banker — without the queue.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10.5px] uppercase tracking-[0.18em] text-white/55 font-medium">
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-orange-500" />
                Biometric
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-orange-500" />
                TLS 1.3
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-orange-500" />
                Device-bound
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-orange-500" />
                Real-time alerts
              </span>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

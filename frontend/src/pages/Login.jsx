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
 * Login — sovereign sign-in surface. No public nav/footer (suppressed
 * by App.jsx isAppShellRoute). Split layout: form on the left,
 * editorial photograph on the right. Bodoni Moda headline restrained.
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
      <SEO title="Sign In" description="Sign in to Bard Santner Online Banking." path="/login" noindex />

      <div className="h-screen flex surface-white overflow-hidden">
        {/* LEFT — form */}
        <div className="flex-1 flex items-center justify-center px-6 sm:px-10 py-8 md:py-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-md"
          >
            <Link to="/" className="inline-flex items-center gap-3 mb-7">
              <img src="/favicon.png" alt="" className="h-10 w-10 object-contain" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-[17px] font-semibold text-ink tracking-[-0.012em]"
                      style={{ fontVariationSettings: '"opsz" 56' }}>
                  Bard Santner
                </span>
                <span className="t-mono text-[9.5px] text-dim mt-1">Online Banking</span>
              </span>
            </Link>

            <p className="t-eyebrow text-orange-600 mb-3">Welcome back</p>
            <h1 className="font-display text-[28px] sm:text-[32px] font-semibold text-ink leading-[1.08] tracking-[-0.018em] mb-6"
                style={{ fontVariationSettings: '"opsz" 56' }}>
              Sign in to your bank.
            </h1>

            <div className="space-y-2.5 mb-5">
              <button
                onClick={() => go("google")}
                disabled={!!loading}
                className="w-full flex items-center justify-center gap-3 px-5 py-3 rounded-[2px] border border-line bg-white hover:border-navy-600 hover:bg-cream disabled:opacity-60 transition-all text-[14px] font-medium text-ink"
                style={{ fontFamily: "var(--font-utility)" }}
              >
                <GoogleLogoIcon size={17} weight="bold" className="text-[#4285F4]" />
                {loading === "google" ? "Signing you in…" : "Continue with Google"}
              </button>
              <button
                onClick={() => go("apple")}
                disabled={!!loading}
                className="w-full flex items-center justify-center gap-3 px-5 py-3 rounded-[2px] bg-ink text-white hover:bg-graphite disabled:opacity-60 transition-all text-[14px] font-medium"
                style={{ fontFamily: "var(--font-utility)" }}
              >
                <AppleLogoIcon size={17} weight="fill" />
                {loading === "apple" ? "Signing you in…" : "Continue with Apple"}
              </button>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <hr className="flex-1 border-line" />
              <span className="t-eyebrow text-faint">Or with email</span>
              <hr className="flex-1 border-line" />
            </div>

            <form onSubmit={handleEmailLogin} className="space-y-3">
              <div>
                <label className="block text-[12px] font-utility font-semibold text-ink mb-1.5 tracking-[0.04em] uppercase"
                       style={{ fontFamily: "var(--font-utility)" }}>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 text-[14.5px] bg-white border border-line rounded-[2px] focus:outline-none focus:border-navy-600 placeholder:text-faint"
                />
              </div>
              <div>
                <div className="flex items-baseline justify-between mb-1.5">
                  <label className="block text-[12px] font-utility font-semibold text-ink tracking-[0.04em] uppercase"
                         style={{ fontFamily: "var(--font-utility)" }}>Password</label>
                  <Link to="#" className="text-[11.5px] text-navy-600 hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 pr-11 text-[14.5px] bg-white border border-line rounded-[2px] focus:outline-none focus:border-navy-600 placeholder:text-faint"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded text-dim hover:text-ink"
                  >
                    {showPassword ? <EyeSlashIcon size={16} /> : <EyeIcon size={16} />}
                  </button>
                </div>
              </div>

              <label className="flex items-center gap-2 cursor-pointer select-none pt-1">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="w-3.5 h-3.5 rounded-[2px] border-line text-navy-600 focus:ring-navy-600/40"
                />
                <span className="text-[12.5px] text-dim">Keep me signed in on this device</span>
              </label>

              <button
                type="submit"
                disabled={!!loading}
                className="w-full btn btn-navy justify-center disabled:opacity-60"
              >
                {loading === "email" ? "Signing you in…" : "Sign in"}
                <ArrowRightIcon size={11} weight="bold" />
              </button>
            </form>

            <p className="mt-5 text-center text-[12.5px] text-dim">
              New to Bard Santner?{" "}
              <Link to="/personal" className="text-navy-600 font-medium hover:underline">
                Open an account
              </Link>
            </p>

            <div className="mt-5 pt-4 border-t border-line flex items-start gap-2 text-[10.5px] text-faint leading-snug">
              <ShieldCheckIcon size={12} weight="regular" className="text-faint mt-0.5 shrink-0" />
              <span>
                Online Banking uses biometric authentication, end-to-end encryption (TLS 1.3 / AES-256), and device binding. We will never ask for your password by phone or email.
              </span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT — editorial photograph */}
        <div className="hidden lg:flex flex-1 relative surface-navy-deep overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${HERO.onlineBanking || HERO.home})`,
              filter: "saturate(0.85) brightness(0.78) contrast(1.06)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/85 via-navy-800/40 to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-px bg-orange-500" />

          <div className="relative w-full flex flex-col justify-between p-12 xl:p-16">
            <Link
              to="/"
              className="inline-flex items-center gap-2 t-eyebrow text-white/65 hover:text-white transition-colors self-start"
            >
              <ArrowLeftIcon size={12} weight="bold" />
              Back to bardsantner.com
            </Link>

            <div className="max-w-md">
              <div className="flex items-center gap-3 mb-5">
                <span className="block h-px w-10 bg-orange-500" />
                <p className="t-eyebrow text-orange-400">Online Banking</p>
              </div>
              <h2 className="font-display text-[36px] xl:text-[42px] font-medium text-white text-balance leading-[1.06] mb-4 tracking-[-0.018em]"
                  style={{ fontVariationSettings: '"opsz" 72' }}>
                Same bank. Same banker. Without the queue.
              </h2>
              <p className="text-[14.5px] text-white/75 leading-relaxed">
                Manage accounts, send and receive, monitor in real time — the institution that signs your statements is the one signing the app.
              </p>
            </div>

            <p className="t-mono text-white/45">
              Member · CIPZ 42656A0252025 &nbsp;·&nbsp; Anno MMXXV · Harare
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

"use client";

import Link from "next/link";
import { motion, type Transition } from "framer-motion";
import {
  ArrowUpRight,
  QrCode,
  MonitorCheck,
  BarChart3,
  Receipt,
  Tag,
  Wifi,
  Check,
  ArrowRight,
  Star,
  Zap,
  Shield,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar"; // ← added

/* ── Brand tokens ───────────────────────────── */
const A  = "#16a34a";
const A2 = "#4ade80";
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 22, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0,  filter: "blur(0px)" },
  transition: { duration: 0.6, delay, ease: EASE } satisfies Transition,
});

/* ── Data ───────────────────────────────────── */
const FEATURES = [
  {
    icon: QrCode,
    title: "Digital QR Menu",
    desc: "Instant, contactless menus at every table. Update items, prices, and availability in real time — no reprinting ever.",
  },
  {
    icon: MonitorCheck,
    title: "Kitchen Display System",
    desc: "Orders routed directly to the kitchen screen the moment a customer taps 'Place Order'. Zero paper, zero delay.",
  },
  {
    icon: BarChart3,
    title: "Revenue Analytics",
    desc: "Track peak hours, bestsellers, and daily revenue from a single admin dashboard. Data-driven decisions, simplified.",
  },
  {
    icon: Receipt,
    title: "Billing & Invoicing",
    desc: "Auto-generate GST-ready bills and digital invoices. Available on the Pro plan with unlimited table support.",
  },
  {
    icon: Tag,
    title: "Offers & Discounts",
    desc: "Create item-level or order-level offers right from the admin panel. Push promotions without any developer help.",
  },
  {
    icon: Wifi,
    title: "Real-time Sync",
    desc: "Every order, status update, and menu change syncs instantly across all devices. Powered by Supabase real-time.",
  },
];

const PLANS = [
  {
    name: "Starter",
    tag: "QR Menu Only",
    monthly: null,
    annual: "₹399",
    annualNote: "/mo · annual only",
    highlight: false,
    features: [
      "Digital QR menu display",
      "Unlimited menu items",
      "Table QR code generation",
      "Annual billing only",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    tag: "Most Popular",
    monthly: "₹699",
    annual: "₹449",
    annualNote: "/mo · billed annually",
    highlight: true,
    features: [
      "Everything in Starter",
      "Food ordering & KDS routing",
      "Admin order management",
      "Offers & discount tools",
      "Revenue analytics (up to 10 tables)",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Pro",
    tag: "Unlimited",
    monthly: "₹799",
    annual: "₹549",
    annualNote: "/mo · billed annually",
    highlight: false,
    features: [
      "Everything in Growth",
      "Unlimited tables",
      "Billing & invoice module",
      "GST invoice generation",
      "Priority support",
    ],
    cta: "Start Free Trial",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Sign up & activate trial",
    desc: "Register your outlet and get full platform access instantly — no payment required for 14 days.",
  },
  {
    n: "02",
    title: "Set up in hours",
    desc: "Our onboarding team walks you through the dashboard, generates your table QR codes, and tests a live order with you.",
  },
  {
    n: "03",
    title: "Go live",
    desc: "Affix QR stickers, go live with real orders, and watch your kitchen run smoother from day one.",
  },
];

/* ── QR Mockup ──────────────────────────────── */
function QRMockup() {
  return (
    <div
      className="relative w-[280px] h-[480px] rounded-[36px] overflow-hidden select-none"
      style={{
        background: "#0a120c",
        border: "1px solid rgba(22,163,74,0.25)",
        boxShadow: `0 32px 80px rgba(22,163,74,0.15), 0 0 0 1px rgba(22,163,74,0.1)`,
      }}
    >
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        <span className="text-[11px] font-semibold" style={{ color: "rgba(255,255,255,0.5)" }}>9:41</span>
        <div
          className="w-20 h-4 rounded-full"
          style={{ background: "#0a120c", border: "1px solid rgba(255,255,255,0.1)" }}
        />
        <div className="flex gap-1 items-center">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-1 rounded-sm"
              style={{ height: `${8 + i * 3}px`, background: i < 2 ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)" }} />
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="px-5 py-3 flex items-center justify-between"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div>
          <p className="text-[10px] font-mono" style={{ color: A }}>TABLE 3</p>
          <p className="text-[13px] font-bold text-white">Brew Corner</p>
        </div>
        <div className="w-8 h-8 rounded-xl flex items-center justify-center"
          style={{ background: `${A}18`, border: `1px solid ${A}30` }}>
          <QrCode size={14} style={{ color: A }} />
        </div>
      </div>

      {/* Menu items */}
      <div className="px-4 pt-3">
        <p className="text-[9px] font-mono font-semibold mb-2"
          style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em" }}>
          POPULAR ITEMS
        </p>
        {[
          { name: "Cold Brew", price: "₹180", tag: "⭐ Best" },
          { name: "Mushroom Pasta", price: "₹320", tag: "🔥 Hot" },
          { name: "Avocado Toast", price: "₹220", tag: null },
        ].map((item, i) => (
          <div key={i}
            className="flex items-center justify-between py-2.5 px-3 rounded-xl mb-1.5"
            style={{ background: i === 0 ? `${A}10` : "rgba(255,255,255,0.03)", border: `1px solid ${i === 0 ? `${A}20` : "rgba(255,255,255,0.05)"}` }}>
            <div>
              <p className="text-[12px] font-semibold text-white">{item.name}</p>
              {item.tag && <p className="text-[9px]" style={{ color: A }}>{item.tag}</p>}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[12px] font-bold" style={{ color: A2 }}>{item.price}</span>
              <div className="w-5 h-5 rounded-full flex items-center justify-center"
                style={{ background: A, fontSize: 12, color: "white", fontWeight: 700 }}>+</div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart bar */}
      <div className="absolute bottom-6 inset-x-4">
        <div className="flex items-center justify-between px-4 py-3 rounded-2xl"
          style={{
            background: `linear-gradient(135deg,${A},#15803d)`,
            boxShadow: `0 8px 24px ${A}50`,
          }}>
          <div>
            <p className="text-[10px] text-green-100 font-mono">2 items</p>
            <p className="text-[13px] font-bold text-white">₹500</p>
          </div>
          <span className="text-[12px] font-bold text-white flex items-center gap-1">
            Place Order <ArrowRight size={13} />
          </span>
        </div>
      </div>

      {/* Glow */}
      <div className="absolute -bottom-10 inset-x-0 h-32 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 100%,${A}20,transparent 70%)` }} />
    </div>
  );
}

/* ── Page ───────────────────────────────────── */
export default function GoSipPage() {
  return (
    <>
      {/* ✅ Global Navbar — handles Products, Contact, and all other nav links */}
      <Navbar />

      <main style={{ background: "#060a07", minHeight: "100vh", color: "white" }}>

        {/* ══ HERO ══ */}
        <section className="relative overflow-hidden" style={{ minHeight: "100svh" }}>

          {/* Grid bg */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage:
              `linear-gradient(${A}04 1px,transparent 1px),` +
              `linear-gradient(90deg,${A}04 1px,transparent 1px)`,
            backgroundSize: "56px 56px",
          }} />

          {/* Orbs */}
          <div className="absolute top-0 right-0 w-[700px] h-[600px] pointer-events-none"
            style={{ background: `radial-gradient(ellipse at 80% 0%,${A}14,transparent 60%)` }} />
          <div className="absolute bottom-0 left-0 w-[500px] h-[400px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 0% 100%,rgba(20,83,45,0.12),transparent 65%)" }} />

          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <span className="font-black select-none"
              style={{
                fontSize: "clamp(100px,18vw,260px)",
                color: "transparent",
                WebkitTextStroke: `1px ${A}07`,
                letterSpacing: "-0.05em",
                whiteSpace: "nowrap",
              }}>
              GoSip
            </span>
          </div>

          {/* Sep */}
          <div className="absolute bottom-0 inset-x-0 h-px"
            style={{ background: `linear-gradient(90deg,transparent,${A2}60 40%,${A} 50%,${A2}60 60%,transparent)` }} />

          <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-7">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-center min-h-[85vh]">

              {/* ── Left ── */}
              <div>
                {/* Breadcrumb */}
                <motion.div {...rise(0)} className="flex items-center gap-2 mb-8">
                  <Link href="/products"
                    className="text-[11px] font-mono hover:opacity-70 transition-opacity"
                    style={{ color: "#6b7280" }}>
                    Products
                  </Link>
                  <span style={{ color: "#374151" }}>/</span>
                  <span
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-mono font-semibold"
                    style={{ color: A, background: `${A}10`, border: `1px solid ${A}25` }}>
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                        style={{ background: A }} />
                      <span className="relative flex h-1.5 w-1.5 rounded-full" style={{ background: A }} />
                    </span>
                    Live · Restaurant SaaS
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 40, filter: "blur(14px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.9, delay: 0.08, ease: EASE }}
                  className="font-black tracking-[-0.055em] leading-[0.93] text-white mb-6"
                  style={{ fontSize: "clamp(52px,8.5vw,104px)" }}
                >
                  Go
                  <span style={{
                    backgroundImage: `linear-gradient(118deg,${A} 10%,${A2} 55%,#bbf7d0)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    Sip
                  </span>
                </motion.h1>

                <motion.p {...rise(0.18)}
                  className="text-[15px] font-semibold mb-3 max-w-lg"
                  style={{ color: "rgba(255,255,255,0.65)" }}>
                  QR-Based Restaurant Management, Reinvented
                </motion.p>

                <motion.p {...rise(0.24)}
                  className="text-[14px] leading-[1.9] mb-10 max-w-lg"
                  style={{ color: "rgba(255,255,255,0.4)" }}>
                  Replace paper menus and verbal orders with a seamless QR ordering flow —
                  digital menu, kitchen display, analytics, and billing unified in one platform
                  built for every F&amp;B outlet.
                </motion.p>

                {/* CTAs */}
                <motion.div {...rise(0.3)} className="flex flex-wrap gap-3 mb-10">
                  <a
                    href="https://gosip-food.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl
                               text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: `linear-gradient(135deg,${A},#15803d)`,
                      boxShadow: `0 12px 32px ${A}45, inset 0 1px 0 rgba(255,255,255,0.2)`,
                    }}>
                    Start Free Trial
                    <ArrowUpRight size={15}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <Link href="/contact"
                    className="inline-flex items-center px-8 py-4 rounded-2xl
                               text-[13px] font-semibold transition-all duration-300 hover:-translate-y-1"
                    style={{
                      color: "rgba(255,255,255,0.45)",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}>
                    Talk to us
                  </Link>
                </motion.div>

                {/* Legal links */}
                <motion.div {...rise(0.5)} className="flex items-center gap-4">
                  {[
                    { label: "Privacy Policy",   href: "/products/gosip/privacy-policy" },
                    { label: "Terms of Service", href: "/products/gosip/terms-of-service" },
                  ].map((l, i) => (
                    <span key={l.label} className="flex items-center gap-4">
                      {i > 0 && <span style={{ color: "rgba(255,255,255,0.1)", fontSize: 12 }}>·</span>}
                      <Link href={l.href}
                        className="text-[11px] font-mono transition-colors duration-200 hover:underline underline-offset-2"
                        style={{ color: "rgba(255,255,255,0.22)" }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.22)")}>
                        {l.label}
                      </Link>
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* ── Right: Phone mockup ── */}
              <motion.div
                initial={{ opacity: 0, y: 48, filter: "blur(14px)" }}
                animate={{ opacity: 1, y: 0,  filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.16, ease: EASE }}
                className="flex justify-center pb-8">
                <QRMockup />
              </motion.div>

            </div>
          </div>
        </section>

        {/* ══ TRIAL BANNER ══ */}
        <section className="relative py-10 overflow-hidden">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className="flex flex-col sm:flex-row items-center justify-between gap-5 px-7 py-5 rounded-3xl"
              style={{
                background: `linear-gradient(135deg,${A}12,rgba(20,83,45,0.08))`,
                border: `1px solid ${A}25`,
              }}>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: `${A}18`, border: `1px solid ${A}30` }}>
                  <Zap size={18} style={{ color: A }} strokeWidth={1.7} />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-white">14-Day Free Trial · No credit card needed</p>
                  <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.4)" }}>
                    Full platform access. ₹1,499 onboarding fee only if you choose to continue.
                  </p>
                </div>
              </div>
              <a href="https://gosip-food.in" target="_blank" rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-[13px] font-bold
                           text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: `linear-gradient(135deg,${A},#15803d)`,
                  boxShadow: `0 8px 24px ${A}40`,
                }}>
                Activate Trial <ArrowRight size={14} />
              </a>
            </motion.div>
          </div>
        </section>

        {/* ══ FEATURES ══ */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mb-14">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono font-semibold mb-4"
                style={{ color: A, background: `${A}10`, border: `1px solid ${A}22` }}>
                Platform Features
              </span>
              <h2 className="font-black tracking-[-0.04em] text-white mb-3"
                style={{ fontSize: "clamp(28px,4vw,44px)" }}>
                Everything your outlet needs
              </h2>
              <p className="text-[14px] leading-[1.8] max-w-xl"
                style={{ color: "rgba(255,255,255,0.4)" }}>
                From the moment a customer scans your QR to the moment the kitchen dispatches the
                order — GoSip handles every step.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
                  className="p-5 rounded-2xl group transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${A}14`, border: `1px solid ${A}25` }}>
                    <f.icon size={17} style={{ color: A }} strokeWidth={1.7} />
                  </div>
                  <p className="text-[13.5px] font-bold text-white mb-1.5">{f.title}</p>
                  <p className="text-[12.5px] leading-[1.75]" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {f.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ HOW IT WORKS ══ */}
        <section className="py-20" style={{ background: "rgba(255,255,255,0.015)" }}>
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mb-12">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono font-semibold mb-4"
                style={{ color: A, background: `${A}10`, border: `1px solid ${A}22` }}>
                Onboarding
              </span>
              <h2 className="font-black tracking-[-0.04em] text-white"
                style={{ fontSize: "clamp(26px,4vw,40px)" }}>
                Live in under 24 hours
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {STEPS.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                  className="relative p-6 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}>
                  <span className="text-[36px] font-black leading-none mb-4 block"
                    style={{ color: `${A}30`, fontVariantNumeric: "tabular-nums" }}>
                    {s.n}
                  </span>
                  <p className="text-[14px] font-bold text-white mb-2">{s.title}</p>
                  <p className="text-[13px] leading-[1.75]" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {s.desc}
                  </p>
                  {i < STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-10 -right-3 z-10">
                      <ArrowRight size={16} style={{ color: `${A}40` }} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* URL structure callout */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
              className="mt-8 flex items-center gap-3 px-5 py-4 rounded-2xl"
              style={{
                background: `${A}08`,
                border: `1px solid ${A}18`,
              }}>
              <Shield size={15} style={{ color: A }} className="shrink-0" strokeWidth={1.7} />
              <div>
                <span className="text-[12px] font-mono" style={{ color: "rgba(255,255,255,0.35)" }}>
                  Your outlet URL:{" "}
                </span>
                <span className="text-[12px] font-mono font-semibold" style={{ color: A2 }}>
                  gosip-food.in/your-outlet/table-1
                </span>
                <span className="text-[12px] font-mono" style={{ color: "rgba(255,255,255,0.35)" }}>
                  {" "}— each table gets its own QR code.
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══ PRICING ══ */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mb-14 text-center">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono font-semibold mb-4"
                style={{ color: A, background: `${A}10`, border: `1px solid ${A}22` }}>
                Pricing
              </span>
              <h2 className="font-black tracking-[-0.04em] text-white mb-3"
                style={{ fontSize: "clamp(28px,4vw,44px)" }}>
                Simple, transparent plans
              </h2>
              <p className="text-[13.5px] mx-auto max-w-md" style={{ color: "rgba(255,255,255,0.4)" }}>
                14-day free trial on all plans. One-time ₹1,499 onboarding fee after trial. All prices exclude GST.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {PLANS.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
                  className="relative flex flex-col p-6 rounded-2xl"
                  style={{
                    background: plan.highlight
                      ? `linear-gradient(160deg,${A}12,rgba(20,83,45,0.06))`
                      : "rgba(255,255,255,0.025)",
                    border: plan.highlight
                      ? `1px solid ${A}40`
                      : "1px solid rgba(255,255,255,0.07)",
                    boxShadow: plan.highlight ? `0 16px 48px ${A}18` : "none",
                  }}>

                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full
                                       text-[10px] font-mono font-bold text-white"
                        style={{ background: `linear-gradient(135deg,${A},#15803d)` }}>
                        <Star size={9} fill="white" /> MOST POPULAR
                      </span>
                    </div>
                  )}

                  <div className="mb-5">
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full mb-2 inline-block"
                      style={{
                        color: plan.highlight ? A : "rgba(255,255,255,0.4)",
                        background: plan.highlight ? `${A}15` : "rgba(255,255,255,0.05)",
                        border: `1px solid ${plan.highlight ? `${A}25` : "rgba(255,255,255,0.08)"}`,
                      }}>
                      {plan.tag}
                    </span>
                    <h3 className="text-[20px] font-black text-white">{plan.name}</h3>
                  </div>

                  {/* Price */}
                  <div className="mb-5 pb-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                    {plan.monthly ? (
                      <>
                        <div className="flex items-baseline gap-1 mb-0.5">
                          <span className="text-[30px] font-black" style={{ color: plan.highlight ? A2 : "white" }}>
                            {plan.annual}
                          </span>
                          <span className="text-[12px]" style={{ color: "rgba(255,255,255,0.4)" }}>
                            {plan.annualNote}
                          </span>
                        </div>
                        <p className="text-[11px] font-mono" style={{ color: "rgba(255,255,255,0.3)" }}>
                          or {plan.monthly}/mo on monthly billing
                        </p>
                      </>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="text-[30px] font-black text-white">{plan.annual}</span>
                        <span className="text-[12px]" style={{ color: "rgba(255,255,255,0.4)" }}>
                          {plan.annualNote}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="flex flex-col gap-2 mb-7 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[12.5px] leading-[1.7]"
                        style={{ color: "rgba(255,255,255,0.55)" }}>
                        <Check size={13} style={{ color: A }} className="mt-[3px] shrink-0" strokeWidth={2.5} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://gosip-food.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl
                               text-[13px] font-bold transition-all duration-300 hover:-translate-y-0.5"
                    style={plan.highlight ? {
                      background: `linear-gradient(135deg,${A},#15803d)`,
                      color: "white",
                      boxShadow: `0 8px 24px ${A}40`,
                    } : {
                      background: "rgba(255,255,255,0.05)",
                      color: "rgba(255,255,255,0.6)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}>
                    {plan.cta} <ArrowRight size={13} />
                  </a>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
              className="text-center text-[12px] font-mono mt-6"
              style={{ color: "rgba(255,255,255,0.25)" }}>
              Annual plans save up to 36% vs monthly billing · All prices exclude GST ·
              Onboarding fee ₹1,499 collected once, after trial
            </motion.p>
          </div>
        </section>

        {/* ══ FINAL CTA ══ */}
        <section className="py-20 pb-24">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE }}
              className="relative overflow-hidden text-center px-8 py-16 rounded-3xl"
              style={{
                background: `linear-gradient(160deg,${A}14,rgba(6,10,7,0) 60%)`,
                border: `1px solid ${A}22`,
              }}>
              {/* Glow */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 50% 0%,${A}12,transparent 70%)` }} />

              <span className="relative inline-block px-3 py-1 rounded-full text-[11px] font-mono
                               font-semibold mb-5"
                style={{ color: A, background: `${A}12`, border: `1px solid ${A}25` }}>
                Get Started Free
              </span>
              <h2 className="relative font-black tracking-[-0.045em] text-white mb-4"
                style={{ fontSize: "clamp(26px,4vw,46px)" }}>
                See GoSip run your kitchen<br />before you pay a rupee.
              </h2>
              <p className="relative text-[14px] leading-[1.8] mb-8 mx-auto max-w-md"
                style={{ color: "rgba(255,255,255,0.45)" }}>
                14 days. Full access. Real orders. No commitment.
              </p>
              <div className="relative flex flex-wrap items-center justify-center gap-3">
                <a href="https://gosip-food.in" target="_blank" rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl
                             text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(135deg,${A},#15803d)`,
                    boxShadow: `0 12px 32px ${A}50, inset 0 1px 0 rgba(255,255,255,0.2)`,
                  }}>
                  Start your free trial
                  <ArrowUpRight size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <Link href="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-2xl text-[13px] font-semibold
                             transition-all duration-300 hover:-translate-y-1"
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}>
                  Contact sales
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </>
  );
}
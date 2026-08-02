import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — CafeAura",
  description:
    "Privacy Policy for CafeAura by Viruzverse Solutions Private Limited",
};

const A = "#f97316";
const A2 = "#fb923c";
const EMAIL = "helpdesk@viruzverse.in";

/* ── Bullet item ──────────────────────────────── */
function Bullet({ text }: { text: string }) {
  return (
    <li
      className="flex items-start gap-2.5 text-[13.5px] leading-[1.75]"
      style={{ color: "rgba(255,255,255,0.5)" }}
    >
      <span
        className="mt-[8px] w-1.5 h-1.5 rounded-full shrink-0"
        style={{ background: A }}
      />
      {text}
    </li>
  );
}

/* ── Section wrapper ──────────────────────────── */
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2.5">
      <h2
        className="text-[15px] font-bold tracking-tight"
        style={{ color: "rgba(255,255,255,0.9)" }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

/* ── Inline info table ─────────────────────────── */
function InfoTable({
  rows,
}: {
  rows: { label: string; value: React.ReactNode }[];
}) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ border: "1px solid rgba(255,255,255,0.07)" }}
    >
      {rows.map(({ label, value }, i) => (
        <div
          key={label}
          className="flex items-start gap-4 px-4 py-3 text-[13px]"
          style={{
            background:
              i % 2 === 0 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.01)",
            borderBottom:
              i < rows.length - 1
                ? "1px solid rgba(255,255,255,0.05)"
                : "none",
          }}
        >
          <span
            className="w-36 shrink-0 font-mono text-[11.5px] pt-px"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            {label}
          </span>
          <span style={{ color: "rgba(255,255,255,0.65)" }}>{value}</span>
        </div>
      ))}
    </div>
  );
}

/* ── Data table ────────────────────────────────── */
function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: (React.ReactNode)[][];
}) {
  return (
    <div
      className="rounded-2xl overflow-hidden text-[12.5px]"
      style={{ border: "1px solid rgba(255,255,255,0.07)" }}
    >
      {/* Header */}
      <div
        className="grid px-4 py-2.5"
        style={{
          gridTemplateColumns: `repeat(${headers.length}, 1fr)`,
          background: "rgba(255,255,255,0.04)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {headers.map((h) => (
          <span
            key={h}
            className="font-mono text-[11px] font-semibold"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            {h}
          </span>
        ))}
      </div>
      {/* Rows */}
      {rows.map((row, i) => (
        <div
          key={i}
          className="grid px-4 py-2.5 items-start"
          style={{
            gridTemplateColumns: `repeat(${headers.length}, 1fr)`,
            background:
              i % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent",
            borderBottom:
              i < rows.length - 1
                ? "1px solid rgba(255,255,255,0.04)"
                : "none",
          }}
        >
          {row.map((cell, j) => (
            <span
              key={j}
              className="leading-[1.7] pr-3"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              {cell}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ── Callout box ──────────────────────────────── */
function Callout({
  children,
  color = A,
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <div
      className="flex items-start gap-2.5 px-4 py-3 rounded-xl text-[13px] leading-[1.8] mt-2"
      style={{
        background: `${color}09`,
        border: `1px solid ${color}20`,
        color: "rgba(255,255,255,0.55)",
      }}
    >
      <span className="shrink-0 mt-px font-bold" style={{ color }}>
        ⓘ
      </span>
      <span>{children}</span>
    </div>
  );
}

/* ── Divider ──────────────────────────────────── */
function Divider({ opacity = "40" }: { opacity?: string }) {
  return (
    <div
      className="h-px"
      style={{
        background: `linear-gradient(90deg,${A}${opacity},transparent)`,
      }}
    />
  );
}

/* ══ Page Component ══════════════════════════════ */
export default function CafeAuraPrivacyPolicy() {
  return (
    <main style={{ background: "#07060f", minHeight: "100vh", color: "white" }}>
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-14">

        {/* Back Button */}
        <Link
          href="/products/cafeaura"
          className="inline-flex items-center gap-2 text-[12px] font-mono mb-8
                     transition-opacity duration-200 hover:opacity-70"
          style={{ color: "#6b7280" }}
        >
          <ArrowLeft size={13} />
          Back to CafeAura
        </Link>

        {/* Header */}
        <div className="mb-8">
          <span
            className="inline-block px-3 py-1 rounded-full text-[11px] font-mono font-semibold mb-3"
            style={{ background: `${A}12`, color: A, border: `1px solid ${A}25` }}
          >
            CafeAura · Privacy & Legal
          </span>
          <h1
            className="font-black tracking-[-0.04em] leading-tight mb-2"
            style={{ fontSize: "clamp(28px,5vw,48px)" }}
          >
            Privacy{" "}
            <span
              style={{
                backgroundImage: `linear-gradient(118deg,${A},${A2})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Policy
            </span>
          </h1>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <p className="text-[12px] font-mono" style={{ color: "#6b7280" }}>
              Effective Date: April 1, 2026
            </p>
            <span style={{ color: "rgba(255,255,255,0.1)", fontSize: 12 }}>·</span>
            <p className="text-[12px] font-mono" style={{ color: "#6b7280" }}>
              Last Updated: April 1, 2026
            </p>
            <span style={{ color: "rgba(255,255,255,0.1)", fontSize: 12 }}>·</span>
            <p className="text-[12px] font-mono" style={{ color: "#6b7280" }}>
              Viruzverse Solutions Private Limited
            </p>
          </div>
        </div>

        {/* Introduction */}
        <p
          className="text-[14px] leading-[1.85] mb-8"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          Viruzverse Solutions Private Limited (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
          operates the CafeAura food ordering platform and services (collectively,
          the &quot;App&quot; or &quot;Platform&quot;). This Privacy Policy outlines how we collect,
          use, store, and protect your information when you use CafeAura. By accessing
          or using the Platform, you agree to the practices described in this Privacy Policy.
        </p>

        <Divider />
        <div className="h-8" />

        {/* ── Sections ── */}
        <div className="flex flex-col gap-8">

          {/* 1 */}
          <Section title="1. Overview & Scope">
            <InfoTable
              rows={[
                { label: "Platform Name", value: "CafeAura" },
                { label: "Operating Entity", value: "Viruzverse Solutions Private Limited" },
                { label: "Jurisdiction", value: "India" },
                {
                  label: "Contact Email",
                  value: (
                    <a
                      href={`mailto:${EMAIL}`}
                      className="underline underline-offset-2 hover:opacity-70 transition-opacity"
                      style={{ color: A }}
                    >
                      {EMAIL}
                    </a>
                  ),
                },
              ]}
            />
            <p
              className="text-[13.5px] leading-[1.8] mt-3"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              CafeAura is a closed-network food ordering and management system designed
              exclusively for verified members of institutional communities (such as college
              campuses, corporate offices, or closed organization facilities).
            </p>
          </Section>

          {/* 2 */}
          <Section title="2. Information We Collect">
            <p
              className="text-[13.5px] leading-[1.8] mb-3"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              We collect only essential data required to facilitate food ordering, order tracking,
              and account management within your community.
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  sub: "a. Profile & Account Information",
                  tag: "Required",
                  tagColor: "#f87171",
                  items: [
                    "Full name",
                    "Email address and phone number",
                    "Assigned community or institution details",
                    "Encrypted authentication credentials",
                  ],
                },
                {
                  sub: "b. Orders & Wishlist Data",
                  tag: "Service Essential",
                  tagColor: "#fbbf24",
                  items: [
                    "Order selections, active cart contents, and past order history",
                    "Selected canteen / food stall choices within your community",
                    "Wishlist saved items and food preferences",
                  ],
                },
                {
                  sub: "c. Wallet & Refund Balance Records",
                  tag: "Transactional",
                  tagColor: "#fbbf24",
                  items: [
                    "Refund balances issued by specific canteens",
                    "Transaction history (credits, debits, order refunds)",
                    "Payment confirmation reference status",
                  ],
                },
                {
                  sub: "d. App Notifications & Usage",
                  tag: "Operational",
                  tagColor: "#10b981",
                  items: [
                    "Device notification tokens used solely for order status updates (e.g., Preparing, Ready for Pickup)",
                    "App version and basic device diagnostic logs to resolve technical issues",
                  ],
                },
              ].map((block) => (
                <div key={block.sub}>
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <p
                      className="text-[13px] font-semibold"
                      style={{ color: "rgba(255,255,255,0.7)" }}
                    >
                      {block.sub}
                    </p>
                    <span
                      className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold"
                      style={{
                        background: `${block.tagColor}12`,
                        color: block.tagColor,
                        border: `1px solid ${block.tagColor}20`,
                      }}
                    >
                      {block.tag}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-1.5 pl-1">
                    {block.items.map((item) => (
                      <Bullet key={item} text={item} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div
              className="mt-3 px-4 py-3 rounded-xl text-[13px] leading-[1.8]"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                color: "rgba(255,255,255,0.45)",
              }}
            >
              <span className="font-semibold" style={{ color: "rgba(255,255,255,0.65)" }}>
                No Advertising Tracking:
              </span>{" "}
              We do <span className="font-bold text-white">not</span> track you across external websites or third-party apps for commercial advertising.
            </div>
          </Section>

          {/* 3 */}
          <Section title="3. How We Use Your Information">
            <p
              className="text-[13.5px] leading-[1.8] mb-2.5"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              We process your data strictly to provide and maintain the CafeAura platform:
            </p>
            <ul className="flex flex-col gap-1.5 pl-1 mb-3">
              {[
                "Account creation, authentication, and community verification",
                "Processing food orders and displaying live kitchen status",
                "Managing per-canteen refund wallet balances and transaction records",
                "Sending order updates and pickup notifications to your device",
                "Preventing unauthorized access, fraudulent activity, or system abuse",
                "Providing customer support and resolving order discrepancies",
                "Maintaining service reliability, fixing bugs, and improving user experience",
              ].map((item) => (
                <Bullet key={item} text={item} />
              ))}
            </ul>
          </Section>

          {/* 4 */}
          <Section title="4. Payments & Refund Wallet Terms">
            <p
              className="text-[13.5px] leading-[1.8] mb-3"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Payments for orders placed through CafeAura are processed through secure, authorized channels.
              We do <strong className="text-white/70">not</strong> store sensitive card numbers, CVVs, or online banking passwords on our platform.
            </p>
            <p
              className="text-[13px] font-semibold mb-2"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Refund Wallet Policy
            </p>
            <ul className="flex flex-col gap-1.5 pl-1 mb-3">
              {[
                "Refunds granted for cancelled or unfulfilled orders are issued to your in-app wallet balance.",
                "Refund balances are scoped to the specific canteen that issued the refund and are redeemable only at that canteen.",
                "In-app wallet balances are non-transferable between users or canteens and cannot be withdrawn as cash, unless required by applicable law.",
              ].map((item) => (
                <Bullet key={item} text={item} />
              ))}
            </ul>
          </Section>

          {/* 5 */}
          <Section title="5. Data Sharing & Disclosure">
            <p
              className="text-[13.5px] leading-[1.8] mb-2.5"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              We respect your privacy and do <strong className="text-white/70">not</strong> sell or rent your personal information to any third parties. We share limited information solely in the following circumstances:
            </p>
            <ul className="flex flex-col gap-1.5 pl-1 mb-3">
              {[
                "Canteen Staff & Kitchen Admin — Your name, token number, and order items are shared with the designated canteen for order preparation and pickup verification.",
                "Community / Campus Administrators — Aggregated operational reporting for facility management.",
                "Legal Compliance — When required by law, regulation, or valid legal requests.",
              ].map((item) => (
                <Bullet key={item} text={item} />
              ))}
            </ul>
          </Section>

          {/* 6 */}
          <Section title="6. Data Security">
            <p
              className="text-[13.5px] leading-[1.8] mb-2.5"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              We implement modern technical and administrative safeguards to protect your personal information:
            </p>
            <ul className="flex flex-col gap-1.5 pl-1 mb-3">
              {[
                "Encrypted data transmission over HTTPS / TLS protocols",
                "Secure token-based user authentication",
                "Role-based administrative access controls to protect user data",
                "Continuous security monitoring and system logging",
              ].map((item) => (
                <Bullet key={item} text={item} />
              ))}
            </ul>
          </Section>

          {/* 7 */}
          <Section title="7. Data Retention">
            <DataTable
              headers={["Category", "Retention Standard"]}
              rows={[
                ["Active Accounts", "Retained while your account remains active"],
                ["Order & Transaction History", "Retained for accounting, auditing, and tax compliance"],
                ["Account Deletion Requests", "Data purged within 45 days of request"],
              ]}
            />
          </Section>

          {/* 8 */}
          <Section title="8. Account Deletion & Rights">
            <p
              className="text-[13.5px] leading-[1.8] mb-3"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              You have full control over your personal data. You can request account deletion or data modification through either method below:
            </p>
            <div className="flex flex-col gap-2.5 mb-3">
              {[
                {
                  step: "1",
                  label: "In-App",
                  desc: "Go to Profile / Settings → Delete Account inside the CafeAura App",
                },
                {
                  step: "2",
                  label: "By Email",
                  desc: `Send an email to ${EMAIL} with subject "Account Deletion Request" from your registered email address`,
                },
              ].map(({ step, label, desc }) => (
                <div
                  key={step}
                  className="flex items-start gap-3 px-4 py-3 rounded-xl text-[13.5px] leading-[1.75]"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-black shrink-0 mt-px"
                    style={{ background: `${A}20`, color: A }}
                  >
                    {step}
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.5)" }}>
                    <strong style={{ color: "rgba(255,255,255,0.7)" }}>
                      {label}:
                    </strong>{" "}
                    {desc}
                  </span>
                </div>
              ))}
            </div>
            <Callout>
              Account deletion is permanent. Upon deletion, your order history, profile details, and any active refund balances associated with your account will be permanently removed, subject to legal recordkeeping retention requirements.
            </Callout>
          </Section>

          {/* 9 */}
          <Section title="9. Children's Privacy">
            <p
              className="text-[13.5px] leading-[1.8]"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              CafeAura is intended for members of institutional communities aged 13 and above. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided personal data, please contact us at{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="underline underline-offset-2 hover:opacity-70 transition-opacity"
                style={{ color: A }}
              >
                {EMAIL}
              </a>{" "}
              and we will promptly delete it.
            </p>
          </Section>

          {/* 10 */}
          <Section title="10. Changes to This Policy">
            <p
              className="text-[13.5px] leading-[1.8]"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              We may update this Privacy Policy from time to time to reflect service updates or regulatory changes. Any modifications will be posted on this page with an updated &quot;Last Updated&quot; date.
            </p>
          </Section>

          {/* 11 */}
          <Section title="11. Contact Us">
            <p
              className="text-[13.5px] leading-[1.8] mb-3"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              If you have any questions or concerns regarding this Privacy Policy or your data:
            </p>
            <div
              className="p-4 rounded-2xl"
              style={{ background: `${A}08`, border: `1px solid ${A}18` }}
            >
              <p
                className="font-bold text-[13.5px] mb-1"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                Viruzverse Solutions Private Limited
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="text-[13px] underline underline-offset-2 hover:opacity-70 transition-opacity"
                style={{ color: A }}
              >
                {EMAIL}
              </a>
              <p
                className="text-[12px] font-mono mt-2"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                Inquiries are typically addressed within 3 to 5 business days.
              </p>
            </div>
          </Section>

        </div>

        {/* Bottom Divider */}
        <div className="mt-12 mb-6">
          <Divider opacity="30" />
        </div>
      </div>
    </main>
  );
}
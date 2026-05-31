import Link from "next/link";
import { ArrowLeft, Shield, Database, Share2, Globe, Clock, Lock, UserCheck, Cookie, Baby, Bell, Mail } from "lucide-react";

const A = "#16a34a";
const A2 = "#4ade80";
const EMAIL_LEGAL = "legal@viruzverse.in";

function Section({ icon: Icon, title, children }: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: `${A}14`, border: `1px solid ${A}25` }}>
          <Icon size={13} style={{ color: A }} strokeWidth={1.8} />
        </div>
        <h2 className="text-[14px] font-bold" style={{ color: "rgba(255,255,255,0.85)" }}>
          {title}
        </h2>
      </div>
      <div className="pl-0">{children}</div>
    </div>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[13.5px] leading-[1.85]" style={{ color: "rgba(255,255,255,0.45)" }}>
      {children}
    </p>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-1.5 mt-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-[13px] leading-[1.75]"
          style={{ color: "rgba(255,255,255,0.45)" }}>
          <span className="mt-[8px] w-1 h-1 rounded-full shrink-0" style={{ background: A }} />
          {item}
        </li>
      ))}
    </ul>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[12.5px] font-semibold mt-3 mb-1.5" style={{ color: "rgba(255,255,255,0.6)" }}>
      {children}
    </p>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2.5 px-4 py-3 rounded-xl mt-3 text-[13px] leading-[1.8]"
      style={{
        background: `${A}08`,
        border: `1px solid ${A}18`,
        color: "rgba(255,255,255,0.5)",
      }}>
      <span className="shrink-0 mt-0.5" style={{ color: A }}>✦</span>
      {children}
    </div>
  );
}

function DataRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-4 px-4 py-2.5 text-[13px]"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <span className="w-40 shrink-0 font-mono text-[11.5px] pt-px"
        style={{ color: "rgba(255,255,255,0.3)" }}>
        {label}
      </span>
      <span style={{ color: "rgba(255,255,255,0.6)" }}>{value}</span>
    </div>
  );
}

export const metadata = {
  title: "Privacy Policy — GoSip",
  description: "Privacy Policy for the GoSip Platform by Viruzverse Solutions Private Limited.",
};

export default function GoSipPrivacyPolicy() {
  return (
    <main style={{ background: "#060a07", minHeight: "100vh", color: "white" }}>
      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-12">

        {/* Back */}
        <Link href="/products/gosip"
          className="inline-flex items-center gap-2 text-[12px] font-mono mb-8
                     transition-opacity duration-200 hover:opacity-60"
          style={{ color: "#6b7280" }}>
          <ArrowLeft size={13} /> Back to GoSip
        </Link>

        {/* Header */}
        <div className="mb-10">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono
                           font-semibold mb-4"
            style={{ color: A, background: `${A}10`, border: `1px solid ${A}25` }}>
            GoSip · Legal
          </span>
          <h1 className="font-black tracking-[-0.04em] leading-tight text-white mb-2"
            style={{ fontSize: "clamp(26px,5vw,40px)" }}>
            Privacy Policy
          </h1>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 mt-3">
            <p className="text-[12px] font-mono" style={{ color: "#4b5563" }}>
              Effective Date: 30th May 2026
            </p>
            <p className="text-[12px] font-mono" style={{ color: "#4b5563" }}>
              Last Updated: 30th May 2026
            </p>
            <p className="text-[12px] font-mono" style={{ color: "#4b5563" }}>
              Ref: VVZ/GOSIP/PP/2026/01
            </p>
          </div>
          <p className="text-[13.5px] leading-[1.85] mt-4"
            style={{ color: "rgba(255,255,255,0.4)" }}>
            This Privacy Policy describes how{" "}
            <strong style={{ color: "rgba(255,255,255,0.7)" }}>
              Viruzverse Solutions Private Limited
            </strong>{" "}
            ("Viruzverse", "we", "our") collects, uses, stores, and protects information
            through the GoSip Platform. This Policy is published in compliance with the
            Information Technology Act, 2000 and is aligned with the Digital Personal Data
            Protection Act, 2023 (DPDP Act).
          </p>
        </div>

        {/* Divider */}
        <div className="h-px mb-8"
          style={{ background: `linear-gradient(90deg,${A}40,transparent)` }} />

        <div className="flex flex-col gap-8">

          {/* 1. Who We Are */}
          <Section icon={Shield} title="1. Who We Are">
            <div className="rounded-2xl overflow-hidden mt-2"
              style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
              <DataRow label="Platform" value="GoSip — Digital QR-based Restaurant Infrastructure Management System" />
              <DataRow label="Operated by" value="Viruzverse Solutions Private Limited" />
              <DataRow label="Country" value="India (Coimbatore, Tamil Nadu)" />
              <div className="flex items-start gap-4 px-4 py-2.5 text-[13px]">
                <span className="w-40 shrink-0 font-mono text-[11.5px] pt-px"
                  style={{ color: "rgba(255,255,255,0.3)" }}>Contact</span>
                <a href={`mailto:${EMAIL_LEGAL}`}
                  className="underline underline-offset-2 hover:opacity-70 transition-opacity"
                  style={{ color: A }}>
                  {EMAIL_LEGAL}
                </a>
              </div>
            </div>
          </Section>

          {/* 2. Information We Collect */}
          <Section icon={Database} title="2. Information We Collect">
            <SubHeading>From Vendors</SubHeading>
            <Bullets items={[
              "Legal business name, trade name, and registered address",
              "GSTIN and PAN (for invoicing and tax compliance)",
              "Authorised signatory name, mobile number, and email address",
              "Outlet type, number of tables, and selected subscription plan",
              "Menu items, pricing, images, and offers uploaded to the Platform",
              "Order transaction records generated through the Platform",
              "Platform usage and analytics data (login activity, feature usage, order volumes)",
            ]} />

            <SubHeading>From End Customers</SubHeading>
            <Body>
              GoSip is designed with a <strong style={{ color: "rgba(255,255,255,0.7)" }}>
              privacy-first approach</strong> for End Customers. No registration, login, or
              personal information is required to browse menus or place orders. We do not collect
              End Customer payment details, phone numbers, or email addresses by design.
            </Body>
            <Bullets items={[
              "Table identifier (table slug) — used for order routing only",
              "Order items and special instructions (if typed by the customer)",
              "Device type and browser information (standard server logs)",
            ]} />

            <SubHeading>Technical Data (Automatically Collected)</SubHeading>
            <Bullets items={[
              "IP addresses (logged by cloud infrastructure)",
              "Browser and device type",
              "Access timestamps and session duration",
              "Session cookies for authentication (no tracking cookies)",
            ]} />
          </Section>

          {/* 3. How We Use */}
          <Section icon={UserCheck} title="3. How We Use Your Information">
            <Bullets items={[
              "Delivering and improving the GoSip Platform services",
              "Processing Vendor subscriptions and issuing GST invoices",
              "Routing orders to kitchen display systems in real time",
              "Providing Vendors with revenue analytics and operational insights",
              "Communicating service updates, maintenance notifications, and support",
              "Complying with applicable legal obligations",
              "Detecting and preventing fraud, abuse, and unauthorised access",
            ]} />
            <Callout>
              We do not use Vendor or End Customer data for advertising, profiling,
              or sale to third parties.
            </Callout>
          </Section>

          {/* 4. Data Sharing */}
          <Section icon={Share2} title="4. Data Sharing & Disclosure">
            <Body>We do not sell, rent, or trade any personal data. Limited sharing occurs only in these circumstances:</Body>
            <div className="flex flex-col gap-2 mt-3">
              {[
                {
                  label: "Cloud Infrastructure",
                  detail: "Supabase (PostgreSQL, Realtime, Edge Functions) and AWS — for platform operation. Bound by their own data protection policies.",
                },
                {
                  label: "Payment Verification",
                  detail: "Minimal business information (name, GSTIN) shared with payment intermediaries solely for invoicing.",
                },
                {
                  label: "Legal Compliance",
                  detail: "Disclosed if required by a court order, regulatory authority, or applicable Indian law.",
                },
                {
                  label: "Business Transfer",
                  detail: "In the event of a merger or acquisition, data may transfer to the successor entity under equivalent privacy obligations.",
                },
              ].map((row) => (
                <div key={row.label} className="px-4 py-3 rounded-xl text-[13px]"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}>
                  <p className="font-semibold mb-0.5" style={{ color: "rgba(255,255,255,0.7)" }}>
                    {row.label}
                  </p>
                  <p className="leading-[1.7]" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {row.detail}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          {/* 5. Data Residency */}
          <Section icon={Globe} title="5. Data Residency & Cross-Border Transfer">
            <Body>
              The GoSip Platform uses cloud infrastructure hosted internationally (Supabase and
              AWS), which may include servers outside India. By using the Platform, Vendors consent
              to the transfer and processing of their data in these jurisdictions for service
              delivery purposes.
            </Body>
            <Body>
              Viruzverse monitors developments under the DPDP Act, 2023 regarding cross-border
              data transfer restrictions and will update practices accordingly when relevant
              provisions are notified.
            </Body>
          </Section>

          {/* 6. Data Retention */}
          <Section icon={Clock} title="6. Data Retention">
            <div className="rounded-2xl overflow-hidden mt-2"
              style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
              {[
                ["Active Vendor accounts", "Duration of subscription"],
                ["Post-termination (tax & legal compliance)", "5 years (Income Tax Act, CGST Act)"],
                ["Order records", "5 years"],
                ["End Customer session data", "Deleted within 90 days"],
                ["Deleted Vendor accounts (PII)", "Purged within 30 days of closure"],
              ].map(([label, value], i, arr) => (
                <div key={label}
                  className="flex items-start gap-4 px-4 py-2.5 text-[13px]"
                  style={{
                    background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                    borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  }}>
                  <span className="w-56 shrink-0 text-[12.5px]"
                    style={{ color: "rgba(255,255,255,0.45)" }}>{label}</span>
                  <span className="font-mono text-[11.5px]" style={{ color: A2 }}>{value}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* 7. Security */}
          <Section icon={Lock} title="7. Data Security">
            <Bullets items={[
              "Row-Level Security (RLS) enforced at the database layer (Supabase PostgreSQL)",
              "JWT-based authentication with role separation for Vendor admin and kitchen staff",
              "Data encrypted in transit (TLS 1.2+) and at rest",
              "Access logs maintained and reviewed periodically",
              "No plain-text storage of passwords or payment credentials",
            ]} />
            <Callout>
              No system is 100% secure. Viruzverse cannot guarantee absolute security and shall
              not be liable for unauthorised access beyond its reasonable control.
            </Callout>
          </Section>

          {/* 8. Your Rights */}
          <Section icon={UserCheck} title="8. Your Rights (DPDP Act, 2023)">
            <Body>Subject to applicable law, Vendors as Data Principals have the following rights:</Body>
            <div className="flex flex-col gap-2 mt-3">
              {[
                { right: "Right to Access", desc: "Request a summary of personal data held by Viruzverse." },
                { right: "Right to Correction", desc: "Request correction of inaccurate or outdated data." },
                { right: "Right to Erasure", desc: "Request deletion of data on account closure, subject to legal retention requirements." },
                { right: "Right to Grievance", desc: "Contact our Grievance Officer for data-related complaints." },
              ].map((r) => (
                <div key={r.right} className="flex items-start gap-3 px-4 py-3 rounded-xl text-[13px]"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}>
                  <span className="mt-px shrink-0 text-[11px] font-mono font-bold px-2 py-0.5
                                   rounded-full"
                    style={{ background: `${A}15`, color: A }}>
                    ✓
                  </span>
                  <div>
                    <p className="font-semibold text-white text-[12.5px]">{r.right}</p>
                    <p className="leading-[1.7] mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                      {r.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[12.5px] mt-3" style={{ color: "rgba(255,255,255,0.35)" }}>
              To exercise these rights, contact{" "}
              <a href={`mailto:${EMAIL_LEGAL}`}
                className="underline underline-offset-2 hover:opacity-70 transition-opacity"
                style={{ color: A }}>
                {EMAIL_LEGAL}
              </a>
              . We will respond within 15 business days.
            </p>
          </Section>

          {/* 9. Cookies */}
          <Section icon={Cookie} title="9. Cookies">
            <Body>
              The GoSip web interface uses minimal session cookies strictly necessary for
              authentication and order routing. No third-party advertising or tracking cookies
              are deployed. End Customers may configure their browsers to block cookies; this
              will not affect menu browsing but may affect order submission.
            </Body>
          </Section>

          {/* 10. Children */}
          <Section icon={Baby} title="10. Children's Privacy">
            <Body>
              The GoSip Platform is not directed at individuals under 18 years of age. We do
              not knowingly collect personal data from minors. If you believe a minor has
              provided data to us, contact{" "}
              <a href={`mailto:${EMAIL_LEGAL}`}
                className="underline underline-offset-2 hover:opacity-70 transition-opacity"
                style={{ color: A }}>
                {EMAIL_LEGAL}
              </a>{" "}
              immediately.
            </Body>
          </Section>

          {/* 11. Updates */}
          <Section icon={Bell} title="11. Updates to This Policy">
            <Body>
              Viruzverse may update this Privacy Policy periodically. Vendors will be notified
              of material changes via email or platform notification at least 15 days in advance.
              Continued use of the Platform following the effective date of the revised Policy
              constitutes acceptance.
            </Body>
          </Section>

          {/* 12. Contact */}
          <Section icon={Mail} title="12. Grievance Officer & Contact">
            <div className="rounded-2xl overflow-hidden mt-2"
              style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
              <DataRow label="Name" value="Vishwadharan Ramesh" />
              <DataRow label="Designation" value="Founder & CEO, Viruzverse Solutions Private Limited" />
              <div className="flex items-start gap-4 px-4 py-2.5 text-[13px]">
                <span className="w-40 shrink-0 font-mono text-[11.5px] pt-px"
                  style={{ color: "rgba(255,255,255,0.3)" }}>Email</span>
                <a href={`mailto:${EMAIL_LEGAL}`}
                  className="underline underline-offset-2 hover:opacity-70 transition-opacity"
                  style={{ color: A }}>
                  {EMAIL_LEGAL}
                </a>
              </div>
              <DataRow label="Address" value="Coimbatore, Tamil Nadu, India" />
              <DataRow label="Response Time" value="Acknowledged within 48 hours · Resolved within 30 days" />
            </div>
          </Section>

        </div>

        {/* Footer */}
        <div className="h-px mt-10 mb-6"
          style={{ background: "linear-gradient(90deg,rgba(255,255,255,0.07),transparent)" }} />
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[11px] font-mono" style={{ color: "#374151" }}>
            © 2026 Viruzverse Solutions Private Limited · GoSip
          </p>
          <div className="flex items-center gap-4">
            <Link href="/products/gosip/terms-of-service"
              className="text-[11px] font-mono hover:opacity-70 transition-opacity"
              style={{ color: "#374151" }}>
              Terms of Service
            </Link>
            <Link href="/products/gosip"
              className="text-[11px] font-mono hover:opacity-70 transition-opacity"
              style={{ color: "#374151" }}>
              GoSip Home
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
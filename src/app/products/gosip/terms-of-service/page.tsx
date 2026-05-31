import Link from "next/link";
import {
  ArrowLeft, FileText, Store, Users, Shield,
  Ban, CreditCard, AlertTriangle, Scale, XCircle, Landmark, Mail,
} from "lucide-react";

const A  = "#16a34a";
const A2 = "#4ade80";

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
      <div>{children}</div>
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

function NumberedClause({ n, text }: { n: string; text: string }) {
  return (
    <div className="flex items-start gap-3 text-[13px] leading-[1.8]"
      style={{ color: "rgba(255,255,255,0.45)" }}>
      <span className="font-mono text-[11px] pt-[3px] shrink-0" style={{ color: A2 }}>{n}</span>
      {text}
    </div>
  );
}

function Callout({ warning, children }: { warning?: boolean; children: React.ReactNode }) {
  const color = warning ? "#ef4444" : A;
  return (
    <div className="flex items-start gap-2.5 px-4 py-3 rounded-xl mt-3 text-[13px] leading-[1.8]"
      style={{
        background: `${color}08`,
        border: `1px solid ${color}20`,
        color: "rgba(255,255,255,0.5)",
      }}>
      <span className="shrink-0 mt-0.5" style={{ color }}>
        {warning ? "⚠" : "✦"}
      </span>
      {children}
    </div>
  );
}

export const metadata = {
  title: "Terms of Service — GoSip",
  description: "Terms of Service for the GoSip Platform by Viruzverse Solutions Private Limited.",
};

export default function GoSipTermsOfService() {
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
            Terms of Service
          </h1>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 mt-3">
            <p className="text-[12px] font-mono" style={{ color: "#4b5563" }}>
              Effective Date: 30th May 2026
            </p>
            <p className="text-[12px] font-mono" style={{ color: "#4b5563" }}>
              Ref: VVZ/GOSIP/TOS/2026/01
            </p>
          </div>
          <p className="text-[13.5px] leading-[1.85] mt-4"
            style={{ color: "rgba(255,255,255,0.4)" }}>
            These Terms of Service ("Terms") govern access to and use of the GoSip Platform
            operated by{" "}
            <strong style={{ color: "rgba(255,255,255,0.7)" }}>
              Viruzverse Solutions Private Limited
            </strong>.
            They apply to both{" "}
            <strong style={{ color: "rgba(255,255,255,0.6)" }}>Vendors</strong>{" "}
            (outlet owners subscribed to the Platform) and{" "}
            <strong style={{ color: "rgba(255,255,255,0.6)" }}>End Customers</strong>{" "}
            (diners who use the QR ordering interface).
          </p>
        </div>

        {/* Divider */}
        <div className="h-px mb-8"
          style={{ background: `linear-gradient(90deg,${A}40,transparent)` }} />

        <div className="flex flex-col gap-8">

          {/* 1 */}
          <Section icon={FileText} title="1. Acceptance of Terms">
            <Body>
              Use of the GoSip Platform constitutes unconditional acceptance of these Terms.
              If you do not agree, you must immediately discontinue use. Viruzverse reserves
              the right to modify these Terms at any time; continued use after publication of
              changes constitutes acceptance.
            </Body>
          </Section>

          {/* 2 */}
          <Section icon={Store} title="2. Description of Service">
            <Body>
              GoSip provides a cloud-hosted SaaS platform enabling restaurants, cafes, and
              beverage outlets to:
            </Body>
            <Bullets items={[
              "Display digital menus via table QR codes",
              "Accept table-side food orders without requiring End Customer login or payment",
              "Manage orders through an admin dashboard and kitchen display system (KDS)",
              "Run promotional offers and analyse revenue",
              "Generate billing and GST invoices (Pro plan)",
            ]} />
            <Callout>
              Viruzverse does not prepare, sell, or deliver food. The Vendor is solely responsible
              for the quality, safety, availability, and pricing of food and beverages.
              Viruzverse is a technology intermediary only.
            </Callout>
          </Section>

          {/* 3 */}
          <Section icon={Store} title="3. Vendor Eligibility & Obligations">
            <div className="flex flex-col gap-2 mt-1">
              <NumberedClause n="3.1"
                text="To register as a Vendor, you must be legally authorised to operate a food and beverage establishment under applicable Indian law (FSSAI licence, local body permit, GST registration where applicable)." />
              <NumberedClause n="3.2"
                text="Vendors must ensure that menu information, prices, images, and availability displayed on the Platform are accurate and updated." />
              <NumberedClause n="3.3"
                text="Vendors are solely responsible for all End Customer interactions, food safety compliance, consumer disputes, and statutory obligations including FSSAI, GST, labour laws, and municipal regulations." />
              <NumberedClause n="3.4"
                text="Vendors must not use the Platform to display illegal items, misleading content, or content that violates any applicable law." />
            </div>
          </Section>

          {/* 4 */}
          <Section icon={Users} title="4. End Customer Use">
            <div className="flex flex-col gap-2 mt-1">
              <NumberedClause n="4.1"
                text="End Customers may access the GoSip digital menu and order interface at a Vendor outlet by scanning a QR code — without creating an account or providing any personal information." />
              <NumberedClause n="4.2"
                text="Orders placed via GoSip constitute a contract solely between the End Customer and the Vendor. Viruzverse is not a party to any order transaction." />
              <NumberedClause n="4.3"
                text="Viruzverse does not handle payments between End Customers and Vendors. All payments are settled directly at the Vendor's cash counter." />
              <NumberedClause n="4.4"
                text="End Customers shall not misuse the QR ordering system by placing spurious orders, attempting unauthorised access, or engaging in any conduct that disrupts the Platform." />
            </div>
          </Section>

          {/* 5 */}
          <Section icon={Shield} title="5. Intellectual Property">
            <div className="flex flex-col gap-2 mt-1">
              <NumberedClause n="5.1"
                text="All technology, software, code, databases, interfaces, trademarks, and content constituting the GoSip Platform are the exclusive intellectual property of Viruzverse Solutions Private Limited, protected under the Copyright Act, 1957, the Trade Marks Act, 1999, and other applicable Indian IP laws." />
              <NumberedClause n="5.2"
                text="Vendors retain ownership of Vendor Data (menus, images, pricing) but grant Viruzverse a licence to host and display such content for service delivery." />
              <NumberedClause n="5.3"
                text="No content from the Platform may be copied, scraped, reproduced, or used outside the Platform without prior written consent from Viruzverse." />
            </div>
          </Section>

          {/* 6 */}
          <Section icon={Ban} title="6. Prohibited Conduct">
            <Body>Users (Vendors and End Customers) shall not:</Body>
            <Bullets items={[
              "Attempt to reverse-engineer, hack, or penetrate the Platform or its infrastructure",
              "Upload malware, viruses, or any harmful code",
              "Use the Platform to engage in fraud, misrepresentation, or unfair trade practices",
              "Post obscene, defamatory, or legally prohibited content in menus or order notes",
              "Attempt to circumvent subscription payments or access features beyond their subscribed plan",
              "Impersonate Viruzverse or any Vendor on the Platform",
            ]} />
          </Section>

          {/* 7 */}
          <Section icon={CreditCard} title="7. Payment & Subscription">
            <Body>
              Vendor subscription terms, pricing, the 14-day free trial, Onboarding Fee (₹1,499),
              cancellation, and refund policies are governed exclusively by the{" "}
              <strong style={{ color: "rgba(255,255,255,0.65)" }}>Vendor SaaS Agreement</strong>.
              End Customers make no payments to Viruzverse.
            </Body>
          </Section>

          {/* 8 */}
          <Section icon={AlertTriangle} title="8. Disclaimers">
            <Callout warning>
              THE GOSIP PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE". VIRUZVERSE MAKES NO
              WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY
              OR FITNESS FOR A PARTICULAR PURPOSE.
            </Callout>
            <div className="flex flex-col gap-2 mt-3">
              <NumberedClause n="8.2"
                text="Viruzverse does not guarantee uninterrupted or error-free service. Temporary unavailability due to maintenance or technical issues does not constitute a breach of these Terms." />
              <NumberedClause n="8.3"
                text="Viruzverse is not responsible for the quality, taste, hygiene, or safety of food or beverages provided by Vendors." />
            </div>
          </Section>

          {/* 9 */}
          <Section icon={Scale} title="9. Limitation of Liability">
            <Body>
              To the maximum extent permitted under applicable Indian law, Viruzverse shall not
              be liable to any user for indirect, incidental, special, or consequential damages.
              Viruzverse's total liability to a Vendor shall not exceed the{" "}
              <strong style={{ color: "rgba(255,255,255,0.65)" }}>
                fees paid in the preceding three (3) months
              </strong>.
            </Body>
          </Section>

          {/* 10 */}
          <Section icon={XCircle} title="10. Termination">
            <Body>
              Viruzverse reserves the right to suspend or terminate access to the Platform for
              any user who violates these Terms, without notice and without refund of any prepaid
              fees. Viruzverse may also discontinue the Platform with{" "}
              <strong style={{ color: "rgba(255,255,255,0.65)" }}>30 days' notice</strong>{" "}
              to Vendors.
            </Body>
          </Section>

          {/* 11 */}
          <Section icon={Landmark} title="11. Governing Law">
            <Body>
              These Terms shall be governed by the laws of India. Any dispute shall be subject
              to the exclusive jurisdiction of the courts of{" "}
              <strong style={{ color: "rgba(255,255,255,0.65)" }}>
                Coimbatore, Tamil Nadu, India
              </strong>.
            </Body>
          </Section>

          {/* 12 */}
          <Section icon={Mail} title="12. Contact">
            <div className="flex flex-col gap-1 mt-2">
              <Body>For any queries regarding these Terms:</Body>
              <div className="flex items-center gap-3 mt-2 px-4 py-3 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}>
                <Mail size={14} style={{ color: A }} strokeWidth={1.7} />
                <a href="mailto:legal@viruzverse.in"
                  className="text-[13.5px] font-mono underline underline-offset-2
                             hover:opacity-70 transition-opacity"
                  style={{ color: A }}>
                  legal@viruzverse.in
                </a>
                <span className="text-[12px]" style={{ color: "rgba(255,255,255,0.3)" }}>
                  · Viruzverse Solutions Private Limited, Coimbatore, Tamil Nadu
                </span>
              </div>
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
            <Link href="/products/gosip/privacy-policy"
              className="text-[11px] font-mono hover:opacity-70 transition-opacity"
              style={{ color: "#374151" }}>
              Privacy Policy
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
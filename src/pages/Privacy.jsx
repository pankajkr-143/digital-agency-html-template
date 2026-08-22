import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield, Lock, Eye, RefreshCw, FileText, CheckCircle2,
  HelpCircle, ChevronDown, Mail, MapPin, Phone, AlertCircle, Download
} from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Privacy() {
  const [activeSection, setActiveSection] = useState("section-1");

  useSEO({
    title: "Privacy Policy | Macky's Tech — Data Protection & Privacy Commitment",
    description: "Read Macky's Tech Privacy Policy. Understand how we collect, process, encrypt, and safeguard client, partner, candidate, and visitor data under Indian DPDP Act 2023 and IT Act standards.",
    canonical: "https://www.mackystech.in/privacy",
  });

  const highlights = [
    { title: "Zero Data Sale", desc: "We strictly never sell, rent, or trade your personal or business data.", icon: Lock },
    { title: "TLS 1.3 Encryption", desc: "All data in transit is encrypted using enterprise TLS protocols.", icon: Shield },
    { title: "Client Data Ownership", desc: "You maintain 100% ownership of project and lead information.", icon: CheckCircle2 },
    { title: "DPDP Act Compliant", desc: "Fully aligned with India's Digital Personal Data Protection Act 2023.", icon: FileText }
  ];

  const sections = [
    {
      id: "section-1",
      title: "1. Scope & Applicability",
      content: `This Privacy Policy describes how Macky's Tech ("Company", "we", "us", or "our") collects, uses, stores, and protects personal data and business information when you visit our website (https://www.mackystech.in), use our cloud applications, inquire about our software services, apply for job or internship positions, or engage our digital growth solutions.

By accessing our website or utilizing our services, you consent to the data collection and usage practices described in this policy. If you do not agree with the terms outlined herein, please refrain from using our digital platforms.`
    },
    {
      id: "section-2",
      title: "2. Information We Collect",
      content: `We collect information directly provided by you, as well as automated technical telemetry required for performance and security:

• Personal Identification Data: Name, business email address, mobile phone number, WhatsApp contact number, postal address, designation, and company name provided during contact inquiries or consultation bookings.
• Candidate & Academic Application Data: Resumes, CVs, educational qualifications, portfolio links, academic certificates, and work experience provided through job and internship application portals.
• Client Project Data: Technical specifications, software requirements, database parameters, and project assets shared under Non-Disclosure Agreements (NDAs).
• Technical & Device Telemetry: IP addresses, browser types, operating systems, referring URLs, screen resolutions, and aggregated analytics events collected to optimize user experience.`
    },
    {
      id: "section-3",
      title: "3. How We Use Your Information",
      content: `Macky's Tech utilizes your collected data strictly for legitimate operational and business purposes:

• Service Delivery & Project Execution: To develop, test, configure, and maintain custom software, mobile apps, CRM systems, and digital campaigns.
• Client Communication & Inquiries: To respond to project quote requests, provide customer support, schedule consultation meetings, and dispatch project milestone updates.
• Recruitment & Academic Verification: To evaluate employment and internship applications and verify student credentials via our certificate verification portal.
• Platform Security & Anti-Fraud: To detect, prevent, and mitigate unauthorized access, cybersecurity threats, spam submissions, and infrastructure vulnerabilities.`
    },
    {
      id: "section-4",
      title: "4. Data Storage, Security & Encryption",
      content: `We enforce multi-layered security controls to protect your data from loss, unauthorized access, alteration, or disclosure:

• Encryption: All website interactions and API endpoints are secured with 256-bit TLS/SSL encryption. Data stored in databases is encrypted at rest using AES-256 standards.
• Restricted Access Control: Access to confidential client files and personal application data is strictly limited on a need-to-know basis to authorized Macky's Tech personnel.
• Infrastructure: Our systems are hosted on enterprise-grade cloud platforms (AWS, GCP, Vercel) featuring continuous firewall protection, automated backups, and DDoS mitigation.`
    },
    {
      id: "section-5",
      title: "5. Third-Party Integrations & Service Providers",
      content: `We do not monetize your data. However, we engage trusted third-party service infrastructure providers necessary to operate our website and services:

• Payment Gateways: Payment transactions (UPI, Cards, Net Banking) are securely processed directly by RBI-regulated gateways (e.g., Razorpay, Stripe). We do not store raw card numbers or CVV data on our servers.
• Communication APIs: Transactional SMS, emails, and WhatsApp status updates are dispatched through verified communication providers (e.g., WhatsApp Business API, Twilio).
• Analytics: Aggregated non-identifiable usage statistics are processed via Google Analytics 4 (GA4) for traffic analysis.`
    },
    {
      id: "section-6",
      title: "6. Data Protection Rights & User Controls",
      content: `In compliance with the Digital Personal Data Protection (DPDP) Act 2023 and applicable privacy regulations, you have the right to:

• Access & Correction: Request a copy of the personal data we hold about you or request corrections to inaccurate records.
• Erasure (Right to be Forgotten): Request the permanent deletion of your contact or application records from our active databases, subject to legal record-keeping obligations.
• Withdraw Consent: Revoke your consent for promotional communications or email newsletters at any time via an unsubscribe link or by emailing privacy@mackystech.in.`
    },
    {
      id: "section-7",
      title: "7. Cookies & Tracking Policy",
      content: `Our website uses functional and analytical cookies to ensure proper navigation and session performance. We do not deploy intrusive third-party cross-site tracking cookies. You can manage or disable cookie preferences directly in your browser settings.`
    },
    {
      id: "section-8",
      title: "8. Data Retention",
      content: `We retain personal data only as long as necessary to fulfill the purposes outlined in this policy or as mandated by statutory compliance laws. Candidate records for unselected applicants are purged or anonymized within 12 months unless explicit consent for future hiring pools is granted.`
    },
    {
      id: "section-9",
      title: "9. Grievance Redressal & Contact Officer",
      content: `If you have any questions, concerns, or privacy grievances regarding our data practices, please contact our Data Protection Office:

Macky's Tech Data Protection Office
Address: Indrapuri Sector C / MP Nagar, Bhopal, Madhya Pradesh 462022, India
Email: privacy@mackystech.in / info@mackystech.in
Phone: +91 8235910315
Hours: Monday to Saturday, 9:00 AM – 6:00 PM IST`
    }
  ];

  return (
    <div className="bg-[#050505] text-gray-300 min-h-screen pt-24 font-sans selection:bg-blue-500/30">
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

      {/* HERO */}
      <section className="relative py-16 overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Shield size={14} /> DATA SECURITY & TRUST
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Privacy Policy & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Data Protection</span>
          </h1>
          <p className="text-base text-gray-400 max-w-2xl mx-auto mb-6">
            Transparency, integrity, and enterprise security are at the core of everything we build. Learn how we safeguard your information.
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
            <RefreshCw size={14} className="text-blue-400" />
            <span>Effective Date: August 22, 2026 | DPDP Act 2023 Compliant</span>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT CARDS */}
      <section className="py-12 bg-[#080808] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div key={i} className="p-6 bg-[#0c0c0c] border border-white/5 rounded-2xl flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm mb-1">{h.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MAIN DOCUMENT BODY */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* SIDEBAR NAVIGATION */}
            <div className="lg:col-span-4 space-y-2 sticky top-28 h-fit hidden lg:block">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 px-3">
                Table of Contents
              </div>
              {sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={() => setActiveSection(sec.id)}
                  className={`block px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
                    activeSection === sec.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {sec.title}
                </a>
              ))}

              <div className="mt-8 p-6 bg-[#0c0c0c] border border-white/10 rounded-2xl">
                <h4 className="font-bold text-white text-sm mb-2">Have Data Questions?</h4>
                <p className="text-xs text-gray-400 mb-4 leading-relaxed">Reach our Data Privacy Officer directly for inquiries or erasure requests.</p>
                <a href="mailto:privacy@mackystech.in" className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:underline">
                  <Mail size={14} /> privacy@mackystech.in
                </a>
              </div>
            </div>

            {/* POLICY SECTIONS */}
            <div className="lg:col-span-8 space-y-12">
              {sections.map((sec) => (
                <div key={sec.id} id={sec.id} className="p-8 bg-[#0c0c0c] border border-white/5 rounded-3xl scroll-mt-28">
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-b border-white/5 pb-4 flex items-center gap-3">
                    <Shield size={20} className="text-blue-400" />
                    {sec.title}
                  </h2>
                  <div className="text-sm text-gray-300 leading-relaxed whitespace-pre-line space-y-4">
                    {sec.content}
                  </div>
                </div>
              ))}

              {/* CONTACT CARD */}
              <div className="p-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-3xl">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Mail size={18} className="text-blue-400" /> Official Privacy Contact Details
                </h3>
                <p className="text-xs text-gray-400 mb-6">
                  For formal data deletion requests, privacy disputes, or regulatory correspondence:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                    <span className="text-gray-500 block mb-1">Grievance Email</span>
                    <a href="mailto:privacy@mackystech.in" className="font-bold text-blue-400 hover:underline">privacy@mackystech.in</a>
                  </div>
                  <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                    <span className="text-gray-500 block mb-1">Head Office Location</span>
                    <span className="font-bold text-white">Bhopal, Madhya Pradesh, India</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

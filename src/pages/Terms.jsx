import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText, Shield, Scale, RefreshCw, CheckCircle2,
  AlertTriangle, HelpCircle, Mail, MapPin, Phone, Lock
} from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Terms() {
  const [activeSection, setActiveSection] = useState("terms-1");

  useSEO({
    title: "Terms of Service | Macky's Tech — Client Agreement & Legal Terms",
    description: "Read Macky's Tech Terms of Service. Understand the legal terms governing software development, digital marketing, business lead acquisition, intellectual property rights, and client agreements.",
    canonical: "https://www.mackystech.in/terms",
  });

  const highlights = [
    { title: "IP Ownership", desc: "Clients receive 100% intellectual property ownership upon full project payment.", icon: Shield },
    { title: "Transparent Pricing", desc: "Clear milestone-based proposals with no hidden surprises or fee traps.", icon: Scale },
    { title: "Service SLAs", desc: "Defined project milestones, sprint timelines, and ongoing support terms.", icon: CheckCircle2 },
    { title: "Governing Law", desc: "Subject to legal jurisdiction of Bhopal, Madhya Pradesh, India.", icon: FileText }
  ];

  const sections = [
    {
      id: "terms-1",
      title: "1. Acceptance of Terms",
      content: `These Terms of Service ("Terms" or "Agreement") constitute a legally binding agreement between you ("Client", "User", or "you") and Macky's Tech ("Company", "we", "us", or "our"), governing your access to and use of the website https://www.mackystech.in, custom software development services, mobile app development, digital growth campaigns, lead generation, and IT consulting services.

By accessing our website, executing a project proposal, or utilizing any of our digital solutions, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use our services.`
    },
    {
      id: "terms-2",
      title: "2. Services Scope & Milestones",
      content: `Macky's Tech provides custom software engineering, web and mobile app development, AI automation, B2B/B2C lead acquisition, and digital marketing services.

• Project Quotations & SOW: All project deliverables, timelines, functional specifications, and payment structures are defined in a formal Statement of Work (SOW) or custom project proposal signed by both parties.
• Scope Modifications: Any changes or additions to agreed project specifications after commencement will require a formal Change Order request and may incur additional charges and timeline adjustments.
• Deliverable Sign-Off: Upon delivery of project milestones or code releases, the Client shall review and provide written feedback within five (5) business days. In the absence of written rejection detailing non-conforming items, the milestone shall be deemed accepted.`
    },
    {
      id: "terms-3",
      title: "3. Intellectual Property (IP) Rights",
      content: `• Client Ownership: Upon receipt of 100% full payment for completed development milestones, Macky's Tech transfers to the Client full ownership rights to the custom source code, design assets, database structures, and custom documentation created exclusively for the Client under the Statement of Work.
• Pre-existing Assets & Frameworks: Macky's Tech retains ownership of its pre-existing core software libraries, reusable algorithms, open-source dependencies, developer tools, and generic frameworks utilized during development. The Client receives a perpetual, non-exclusive, royalty-free license to use such components as integrated into their final software product.
• Portfolio Rights: Unless restricted by a signed Non-Disclosure Agreement (NDA), Macky's Tech reserves the right to showcase completed project case studies, client logos, and non-confidential screenshots on its official website and marketing materials.`
    },
    {
      id: "terms-4",
      title: "4. Client Obligations & Conduct",
      content: `You agree to use our website, developer platforms, and candidate verification portals only for lawful purposes. You explicitly agree that you shall NOT:

• Input false, fraudulent, or deceptive information during consultation bookings or job/internship applications.
• Upload, transmit, or distribute computer viruses, malware, trojans, or malicious code through our forms or API endpoints.
• Attempt to reverse engineer, decompile, crawl, or disrupt the infrastructure of Macky's Tech or our client instances.
• Use our lead generation services or prospect lists for unlawful spamming, harassment, or non-compliant telemarketing activities.`
    },
    {
      id: "terms-5",
      title: "5. Payment Terms, Billing & Refunds",
      content: `• Payment Schedules: Payments are due in accordance with the milestone payment schedule specified in the project agreement or proposal. Advance deposits are non-refundable once design or development sprint work has commenced.
• Invoicing & Taxes: Invoices are payable within seven (7) calendar days of issuance unless specified otherwise. Invoices are subject to applicable Goods and Services Tax (GST) under Indian tax laws.
• Late Payments: Overdue balances may incur interest at the rate of 1.5% per month or the maximum statutory rate allowed by law, alongside temporary suspension of active development or hosting services until paid.`
    },
    {
      id: "terms-6",
      title: "6. Confidentiality & Non-Disclosure",
      content: `Both parties agree to treat all business data, technical architecture documents, financial records, client lists, and trade secrets shared during engagement as strictly confidential. Confidential information shall not be disclosed to any third party without prior written consent, except as required by law or judicial order.`
    },
    {
      id: "terms-7",
      title: "7. Warranties & Limitation of Liability",
      content: `• Performance Warranty: Macky's Tech warrants that services will be performed in a professional, workmanlike manner adhering to modern software development and cybersecurity standards.
• Bug-Fix Support Period: Unless otherwise stated in the project contract, custom software builds include a thirty (30) day complimentary post-launch bug-fix support period for defects departing from agreed specifications.
• Limitation of Liability: In no event shall Macky's Tech, its directors, employees, or partners be liable for any indirect, incidental, punitive, or consequential damages (including loss of profits, data loss, server downtime, or business interruption) exceeding the total amount actually paid by the Client to Macky's Tech for the specific project giving rise to liability.`
    },
    {
      id: "terms-8",
      title: "8. Termination of Engagement",
      content: `Either party may terminate a project agreement for cause if the other party breaches a material term and fails to cure such breach within fourteen (14) days of written notice. Upon termination, the Client shall pay Macky's Tech for all work performed and costs incurred up to the effective termination date.`
    },
    {
      id: "terms-9",
      title: "9. Governing Law & Dispute Resolution",
      content: `These Terms and any agreements between Client and Macky's Tech shall be governed by and construed in accordance with the laws of India. Any disputes or claims arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts located in Bhopal, Madhya Pradesh, India.`
    },
    {
      id: "terms-10",
      title: "10. Contact & Legal Inquiries",
      content: `For legal correspondence, contract inquiries, or official notices, please reach out to:

Macky's Tech Legal Department
Address: Indrapuri Sector C / MP Nagar, Bhopal, Madhya Pradesh 462022, India
Email: legal@mackystech.in / info@mackystech.in
Phone: +91 8235910315`
    }
  ];

  return (
    <div className="bg-[#050505] text-gray-300 min-h-screen pt-24 font-sans selection:bg-indigo-500/30">
      <Breadcrumbs items={[{ label: "Terms of Service" }]} />

      {/* HERO */}
      <section className="relative py-16 overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Scale size={14} /> LEGAL AGREEMENT & GOVERNANCE
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Service</span>
          </h1>
          <p className="text-base text-gray-400 max-w-2xl mx-auto mb-6">
            Please read these Terms carefully before engaging Macky's Tech software, lead generation, or growth consulting services.
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
            <RefreshCw size={14} className="text-indigo-400" />
            <span>Last Updated: August 22, 2026 | Governing Jurisdiction: Bhopal, MP, India</span>
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
                  <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl shrink-0">
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
                      ? "bg-indigo-600 text-white shadow-lg"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {sec.title}
                </a>
              ))}

              <div className="mt-8 p-6 bg-[#0c0c0c] border border-white/10 rounded-2xl">
                <h4 className="font-bold text-white text-sm mb-2">Legal Questions?</h4>
                <p className="text-xs text-gray-400 mb-4 leading-relaxed">Reach our legal team directly for agreement clarifications or SOW questions.</p>
                <a href="mailto:legal@mackystech.in" className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 hover:underline">
                  <Mail size={14} /> legal@mackystech.in
                </a>
              </div>
            </div>

            {/* POLICY SECTIONS */}
            <div className="lg:col-span-8 space-y-12">
              {sections.map((sec) => (
                <div key={sec.id} id={sec.id} className="p-8 bg-[#0c0c0c] border border-white/5 rounded-3xl scroll-mt-28">
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-b border-white/5 pb-4 flex items-center gap-3">
                    <FileText size={20} className="text-indigo-400" />
                    {sec.title}
                  </h2>
                  <div className="text-sm text-gray-300 leading-relaxed whitespace-pre-line space-y-4">
                    {sec.content}
                  </div>
                </div>
              ))}

              {/* CONTACT CARD */}
              <div className="p-8 bg-gradient-to-r from-indigo-900/20 to-blue-900/20 border border-indigo-500/30 rounded-3xl">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Mail size={18} className="text-indigo-400" /> Official Legal Department Contact
                </h3>
                <p className="text-xs text-gray-400 mb-6">
                  For legal notices, service contract clarification, or jurisdiction matters:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                    <span className="text-gray-500 block mb-1">Legal Email</span>
                    <a href="mailto:legal@mackystech.in" className="font-bold text-indigo-400 hover:underline">legal@mackystech.in</a>
                  </div>
                  <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                    <span className="text-gray-500 block mb-1">Jurisdiction & Office</span>
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

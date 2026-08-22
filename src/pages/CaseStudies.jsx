import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";
import Breadcrumbs from "../components/Breadcrumbs";
import { ArrowRight, Sparkles, LayoutTemplate } from "lucide-react";

export default function CaseStudies() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: "Client Case Studies & Verified Results | Macky's Tech",
    description: "Explore real case studies of custom software development, food delivery platforms, LMS platforms, CRMs, multi-vendor marketplaces, and automation solutions built by Macky's Tech.",
    canonical: "https://www.mackystech.in/case-studies"
  });

  const caseStudies = [
    { id: "1", title: "High-Traffic E-commerce Marketplace", industry: "Retail & E-commerce", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600&h=300", desc: "40% increase in mobile conversion rate with zero downtime microservices migration.", tags: ["React", "Node.js", "AWS"] },
    { id: "2", title: "Real-time Driver Tracking Application", industry: "Logistics & Transport", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600&h=300", desc: "Cross-platform mobile app with offline-first tracking saving 500+ hours monthly.", tags: ["React Native", "Firebase", "Maps"] },
    { id: "3", title: "B2B Analytics Dashboard", industry: "Finance & FinTech", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=300", desc: "Sub-second real-time portfolio visualization increasing client engagement by 150%.", tags: ["Next.js", "Python", "PostgreSQL"] },
    { id: "4", title: "Patient Workflow Automation", industry: "Healthcare Technology", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600&h=300", desc: "AI-driven intake automation reducing manual data entry by 85%.", tags: ["Python", "TensorFlow", "React"] },
    { id: "5", title: "Enterprise ERP Modernization", industry: "Manufacturing & Infrastructure", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600&h=300", desc: "Unified cloud ERP rendering cross-department workflows 300% faster.", tags: ["Node.js", "PostgreSQL", "Docker"] },
    { id: "ecommerce", title: "Multi-Vendor E-commerce Platform", industry: "E-Commerce", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600&h=300", desc: "Multi-vendor marketplace with vendor dashboards, payments & delivery tracking.", tags: ["React", "Node.js", "Razorpay"] },
    { id: "food-delivery", title: "Complete Food Delivery Platform", industry: "Food & Restaurant", img: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&q=80&w=600&h=300", desc: "End-to-end food platform: Customer App, KDS, Delivery App & Admin Panel.", tags: ["Flutter", "Socket.io", "Maps"] },
    { id: "lms", title: "Learning Management System (LMS)", industry: "Education Tech", img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=600&h=300", desc: "Full learning platform with live classes, assessments & digital certificates.", tags: ["React", "Zoom SDK", "MongoDB"] },
    { id: "crm", title: "Custom CRM for Sales Teams", industry: "Sales & Marketing", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=300", desc: "Custom CRM with lead pipeline, WhatsApp automation & sales reporting.", tags: ["Node.js", "WhatsApp API", "PostgreSQL"] },
    { id: "marketplace", title: "Service Marketplace Platform", industry: "Marketplace & Services", img: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=600&h=300", desc: "Service marketplace with GPS matching, escrow payments & review system.", tags: ["React Native", "Stripe", "Maps"] },
    { id: "automation", title: "Business Process Automation System", industry: "Business Automation", img: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=600&h=300", desc: "Automated 12 business processes — invoices, follow-ups & live reporting.", tags: ["n8n", "WhatsApp API", "Node.js"] },
    { id: "healthcare", title: "Hospital Management System", industry: "Healthcare", img: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=600&h=300", desc: "Hospital management: OPD, pharmacy, lab, billing & admin analytics.", tags: ["React", "PostgreSQL", "AWS"] },
    { id: "cab-mobility", title: "Cab & Mobility Platform", industry: "Transportation", img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=600&h=300", desc: "Complete ride-hailing platform with driver app, GPS & surge pricing.", tags: ["Flutter", "Socket.io", "Redis"] }
  ];

  return (
    <div className="bg-[#050505] min-h-screen pt-24 text-gray-300 font-sans selection:bg-blue-500/30">
      <Breadcrumbs items={[{ label: "Case Studies" }]} />

      {/* HERO SECTION */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles size={14} /> PROVEN TRACK RECORD
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Case Studies & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">Verified Results</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            Real projects. Real solutions. Real impact. Explore how we engineer scalable software platforms and digital growth engines for our clients.
          </p>
        </div>
      </section>

      {/* CASE STUDY GRID */}
      <section className="py-16 border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => (
              <Link key={i} to={`/case-studies/${study.id}`} className="group rounded-3xl overflow-hidden border border-white/5 bg-[#0c0c0c] hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(59,130,246,0.1)] block text-left">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={study.img}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-bold text-blue-300">
                    {study.industry}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-bold text-white mb-2 leading-snug">{study.title}</h2>
                  <p className="text-xs text-gray-400 mb-4 leading-relaxed">{study.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {study.tags.map((tag, j) => (
                      <span key={j} className="px-2.5 py-0.5 bg-white/5 border border-white/10 rounded-md text-[11px] text-gray-400">{tag}</span>
                    ))}
                  </div>
                  <span className="text-blue-400 text-xs font-bold flex items-center gap-1 group-hover:text-blue-300 transition-all">
                    Read Full Case Study <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-b from-[#080808] to-blue-900/10 border-t border-white/5 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Have a Similar Project in Mind?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Let's discuss how we can build your scalable product.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all">
            Start Your Project →
          </Link>
        </div>
      </section>
    </div>
  );
}

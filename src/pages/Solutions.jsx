import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSEO } from "../hooks/useSEO";
import Breadcrumbs from "../components/Breadcrumbs";
import {
  Code, Smartphone, Database, Cloud, Globe, Bot, ShoppingBag,
  TrendingUp, Users, Target, Zap, Settings, Shield, ArrowRight,
  Sparkles, CheckCircle2
} from "lucide-react";

export default function Solutions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: "Technology, Lead Generation & Growth Solutions | Macky's Tech",
    description: "Explore Macky's Tech business solutions: Website & App Development, Custom Software, AI & Automation, Business Lead Generation, and Digital Marketing.",
    canonical: "https://www.mackystech.in/solutions"
  });

  const pillarCards = [
    {
      title: "Get Customers",
      desc: "Discover relevant business opportunities, B2B/B2C leads, and build a stronger sales pipeline.",
      link: "/get-customers",
      icon: Target,
      color: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/30",
      items: ["Business Leads", "Customer Acquisition", "Sales Prospects", "International Leads", "Campaign Support"]
    },
    {
      title: "Build Technology",
      desc: "Turn ideas into powerful digital products — websites, apps, SaaS, CRM, ERP, and custom software.",
      link: "/build-technology",
      icon: Code,
      color: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/30",
      items: ["Websites & Web Apps", "Mobile Apps (iOS/Android)", "SaaS Platforms", "Custom Software & ERP", "AI & Automation"]
    },
    {
      title: "Scale Your Business",
      desc: "Combine digital marketing, sales systems, CRM, automation, and technology into one growth strategy.",
      link: "/scale-business",
      icon: TrendingUp,
      color: "from-emerald-500/20 to-teal-500/20",
      border: "border-emerald-500/30",
      items: ["Digital Marketing", "SEO & Ads", "CRM & Pipeline", "WhatsApp Automation", "Business Consulting"]
    }
  ];

  const solutionGrid = [
    { slug: "web-development", title: "Website Development", category: "Technology", desc: "High-performance marketing, corporate, and e-commerce websites.", icon: Globe },
    { slug: "mobile-app-development", title: "Mobile App Development", category: "Technology", desc: "iOS and Android apps engineered for speed and user engagement.", icon: Smartphone },
    { slug: "software-development", title: "Software Development", category: "Technology", desc: "Tailored enterprise software, custom tools, and API architectures.", icon: Code },
    { slug: "saas-development", title: "SaaS Development", category: "Technology", desc: "Multi-tenant cloud platforms with recurring subscription billing.", icon: Cloud },
    { slug: "ecommerce-development", title: "E-Commerce Solutions", category: "Technology", desc: "Custom storefronts and multi-vendor marketplaces with logistics integration.", icon: ShoppingBag },
    { slug: "ai-automation", title: "AI & Workflow Automation", category: "Automation", desc: "GPT chatbots, automated data extraction, and API workflow automation.", icon: Bot },
    { slug: "crm-development", title: "CRM Software", category: "Systems", desc: "Lead pipeline tracking, sales task automation, and team reporting.", icon: Database },
    { slug: "erp-development", title: "Enterprise ERP", category: "Systems", desc: "Inventory, HRMS, billing, and site management ERP solutions.", icon: Settings },
    { slug: "edtech-lms", title: "EdTech & LMS Platforms", category: "Education", desc: "Online course portals, virtual classrooms, DRM video hosting, and exams.", icon: Sparkles },
    { slug: "digital-marketing", title: "Digital Marketing", category: "Growth", desc: "Data-driven SEO, Google Ads, Meta campaigns, and CRO funnels.", icon: TrendingUp },
    { slug: "business-leads", title: "Business Lead Generation", category: "Growth", desc: "Verified B2B & B2C prospect inquiries for high conversion rates.", icon: Target },
    { slug: "whatsapp-api", title: "WhatsApp API Automation", category: "Automation", desc: "Automated customer support, order updates, and CRM notifications.", icon: Zap }
  ];

  return (
    <div className="bg-[#050505] min-h-screen pt-24 text-gray-300 font-sans selection:bg-blue-500/30">
      <Breadcrumbs items={[{ label: "Solutions" }]} />

      {/* HERO SECTION */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles size={14} /> MACKY'S TECH BUSINESS SOLUTIONS
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Technology, Customer Acquisition & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">Business Growth Solutions</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            From software development and AI automation to B2B lead generation and digital marketing — explore our integrated solutions built to move your business forward.
          </p>
        </div>
      </section>

      {/* CORE THREE PILLARS */}
      <section className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {pillarCards.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div key={i} className={`p-8 rounded-3xl bg-gradient-to-br ${pillar.color} border ${pillar.border} bg-[#0c0c0c] flex flex-col justify-between group hover:scale-[1.02] transition-transform`}>
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6">
                      <Icon size={28} />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-3">{pillar.title}</h2>
                    <p className="text-sm text-gray-400 leading-relaxed mb-6">{pillar.desc}</p>
                    <ul className="space-y-2 mb-8">
                      {pillar.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-300 font-medium">
                          <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to={pillar.link} className="inline-flex items-center gap-2 text-white font-bold text-sm hover:text-cyan-400 transition-colors">
                    Explore Pillar <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOLUTION CATALOG GRID */}
      <section className="py-20 border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Dedicated Solutions Catalog</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Explore specialized solution pages designed for distinct business requirements.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionGrid.map((sol, i) => {
              const Icon = sol.icon;
              return (
                <Link key={i} to={`/solutions/${sol.slug}`} className="p-6 bg-[#0c0c0c] border border-white/5 rounded-2xl hover:border-blue-500/40 hover:bg-[#111] transition-all group flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {sol.category}
                      </span>
                      <Icon size={22} className="text-gray-500 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{sol.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed mb-6">{sol.desc}</p>
                  </div>
                  <span className="text-xs font-bold text-blue-400 group-hover:text-blue-300 flex items-center gap-1">
                    View Solution Details <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-b from-[#080808] to-blue-900/10 border-t border-white/5 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Need a Custom Solution for Your Business?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Talk with our technical & growth experts to design a solution tailored to your goals.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all">
            Consult a Solutions Architect <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

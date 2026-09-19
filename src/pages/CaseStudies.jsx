import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useSEO } from "../hooks/useSEO";
import Breadcrumbs from "../components/Breadcrumbs";
import {
  ArrowRight, Sparkles, Search, Filter, CheckCircle2,
  TrendingUp, Code2, ShieldCheck, Zap, Layers, Trophy, Star
} from "lucide-react";

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: "Client Case Studies & Verified Results | Macky's Tech",
    description: "Explore real-world case studies of custom software development, mobile applications, LMS platforms, CRMs, multi-vendor marketplaces, and AI automation built by Macky's Tech.",
    canonical: "https://www.mackystech.in/case-studies"
  });

  const categories = [
    "All",
    "E-Commerce",
    "Logistics & Transport",
    "Finance & FinTech",
    "Healthcare",
    "Education",
    "Automation & CRM"
  ];

  const caseStudies = [
    {
      id: "1",
      title: "High-Traffic E-commerce Marketplace",
      category: "E-Commerce",
      industry: "Retail & E-commerce",
      metric: "+40% Conversion Lift",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=400",
      desc: "Migrated legacy monolithic architecture to headless microservices on AWS, eliminating Black Friday crash downtime completely.",
      tags: ["React", "Node.js", "AWS", "MongoDB", "Redis"],
      featured: true
    },
    {
      id: "2",
      title: "Real-time Driver Tracking Application",
      category: "Logistics & Transport",
      industry: "Logistics & Fleet",
      metric: "500+ Hours Saved/Mo",
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800&h=400",
      desc: "Cross-platform mobile app featuring offline-first GPS caching that syncs automatically when driver cellular network is restored.",
      tags: ["React Native", "Firebase", "Google Maps API", "SQLite"]
    },
    {
      id: "3",
      title: "B2B Analytics Dashboard",
      category: "Finance & FinTech",
      industry: "Financial Services",
      metric: "+150% Engagement",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=400",
      desc: "Sub-second real-time portfolio visualization with WebSocket feeds, eliminating data aggregation performance bottlenecks.",
      tags: ["Next.js", "Python", "Django", "PostgreSQL"]
    },
    {
      id: "4",
      title: "Patient Workflow Automation",
      category: "Healthcare",
      industry: "Healthcare Tech",
      metric: "85% Less Data Entry",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=400",
      desc: "AI-driven document extraction system reducing clinic intake waiting times by 15 minutes per patient under HIPAA compliance.",
      tags: ["Python", "TensorFlow", "React", "AWS HealthLake"]
    },
    {
      id: "5",
      title: "Enterprise ERP Modernization",
      category: "Automation & CRM",
      industry: "Manufacturing",
      metric: "300% Faster Workflows",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800&h=400",
      desc: "Unified cloud ERP connecting HR, Finance, and Supply Chain departments into a single source of truth for corporate data.",
      tags: ["Node.js", "Express", "PostgreSQL", "Docker"]
    },
    {
      id: "ecommerce",
      title: "Multi-Vendor E-commerce Platform",
      category: "E-Commerce",
      industry: "Multi-Vendor Marketplace",
      metric: "300+ Vendors Onboarded",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800&h=400",
      desc: "Full-scale multi-vendor marketplace with vendor dashboards, commission split controls, Razorpay payment flows, and parcel tracking.",
      tags: ["React", "Node.js", "MongoDB", "Razorpay", "AWS S3"]
    },
    {
      id: "food-delivery",
      title: "Complete Food Delivery Platform",
      category: "E-Commerce",
      industry: "Food & Restaurant",
      metric: "28 Min Avg Fulfillment",
      img: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&q=80&w=800&h=400",
      desc: "Ecosystem comprising Customer App, Kitchen Display System (KDS), Delivery Partner App, and POS dispatch panel.",
      tags: ["Flutter", "Node.js", "Socket.io", "Google Maps"]
    },
    {
      id: "lms",
      title: "Learning Management System (LMS)",
      category: "Education",
      industry: "EdTech",
      metric: "78% Course Completion Rate",
      img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800&h=400",
      desc: "Comprehensive educational platform with live video classes, DRM anti-piracy protection, automated fee billing, and certificates.",
      tags: ["React", "Node.js", "Zoom SDK", "MongoDB", "Razorpay"]
    },
    {
      id: "crm",
      title: "Custom CRM for Sales Teams",
      category: "Automation & CRM",
      industry: "Sales Development",
      metric: "<20 Min Response Time",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=400",
      desc: "Lead capture pipeline CRM with automated WhatsApp follow-ups, call logging, task assignments, and executive performance dashboards.",
      tags: ["React", "Node.js", "PostgreSQL", "WhatsApp API"]
    },
    {
      id: "marketplace",
      title: "Service Marketplace Platform",
      category: "E-Commerce",
      industry: "Home Services",
      metric: "4.6/5 Avg Rating",
      img: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800&h=400",
      desc: "Two-sided local service provider matching platform with GPS dispatch, escrow booking payments, and customer review systems.",
      tags: ["React Native", "Stripe", "Google Maps", "Node.js"]
    },
    {
      id: "automation",
      title: "Business Process Automation System",
      category: "Automation & CRM",
      industry: "Business Automation",
      metric: "60% Task Time Saved",
      img: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=800&h=400",
      desc: "Automated 12 core business processes including PDF invoice generation, WhatsApp notifications, lead assignment, and nightly reports.",
      tags: ["n8n", "WhatsApp API", "Puppeteer", "PostgreSQL"]
    },
    {
      id: "healthcare",
      title: "Hospital Management System (HMS)",
      category: "Healthcare",
      industry: "Hospitality & Health",
      metric: "99.8% Billing Accuracy",
      img: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=800&h=400",
      desc: "Digitized hospital OPD queues, doctor schedules, electronic prescriptions, lab order dispatch, and pharmacy inventory.",
      tags: ["React", "Node.js", "PostgreSQL", "AWS", "FHIR"]
    },
    {
      id: "cab-mobility",
      title: "Cab & Mobility Platform",
      category: "Logistics & Transport",
      industry: "Transportation",
      metric: "10,000+ Rides Completed",
      img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800&h=400",
      desc: "Full ride-hailing software with Passenger App, Driver App, Dispatcher Dashboard, real-time WebSockets tracking, and surge engine.",
      tags: ["Flutter", "Node.js", "Socket.io", "Google Maps API"]
    }
  ];

  const filteredCaseStudies = caseStudies.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const featuredStudy = caseStudies.find((item) => item.featured) || caseStudies[0];

  return (
    <div className="bg-[#050505] min-h-screen pt-24 text-gray-300 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <Breadcrumbs items={[{ label: "Case Studies" }]} />

      {/* HERO SECTION WITH GLOW ORBS */}
      <section className="relative py-20 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
            <Trophy size={14} className="text-amber-400" /> PROVEN ENGINEERING & VERIFIED RESULTS
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6">
            Real Projects. Real Tech. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
              Measurable Business Impact.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Explore how Macky's Tech partners with ambitious startups, retail enterprises, healthcare networks, and logistics providers to engineer custom software products and digital growth engines.
          </p>

          {/* STATS STRIP */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-6 border-t border-white/10">
            <div>
              <div className="text-3xl font-black text-white">13+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold mt-1">Verified Case Studies</div>
            </div>
            <div>
              <div className="text-3xl font-black text-cyan-400">99.9%</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold mt-1">Platform Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-black text-purple-400">+40%</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold mt-1">Avg Conversion Lift</div>
            </div>
            <div>
              <div className="text-3xl font-black text-green-400">100%</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold mt-1">IP & Source Ownership</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SPOTLIGHT CASE STUDY */}
      {featuredStudy && (
        <section className="py-16 bg-[#080808] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-6">
              <Star size={14} className="fill-amber-400" /> Featured Case Study Spotlight
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-center bg-[#0c0c0c] border border-blue-500/30 rounded-3xl overflow-hidden p-6 md:p-10 shadow-[0_0_50px_rgba(59,130,246,0.1)]">
              <div className="lg:col-span-6 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 text-blue-300 rounded-full text-xs font-bold uppercase tracking-wider">
                    {featuredStudy.industry}
                  </span>
                  <span className="px-3 py-1 bg-green-500/20 border border-green-500/40 text-green-400 rounded-full text-xs font-bold">
                    ⚡ {featuredStudy.metric}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                  {featuredStudy.title}
                </h2>

                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  {featuredStudy.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {featuredStudy.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-semibold text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    to={`/case-studies/${featuredStudy.id}`}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-full font-bold text-sm transition-all shadow-[0_0_25px_rgba(59,130,246,0.3)]"
                  >
                    Read Full Case Study Deep-Dive <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 h-[300px] sm:h-[380px] rounded-2xl overflow-hidden relative border border-white/10">
                <img
                  src={featuredStudy.img}
                  alt={featuredStudy.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FILTER & SEARCH BAR */}
      <section className="py-12 bg-[#050505] sticky top-20 z-30 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto no-scrollbar py-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                    selectedCategory === cat
                      ? "bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                      : "bg-[#0c0c0c] border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
              <input
                type="text"
                placeholder="Search by tech or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0c0c0c] border border-white/10 rounded-full pl-10 pr-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-gray-500 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* CASE STUDIES GRID */}
      <section className="py-20 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredCaseStudies.length === 0 ? (
            <div className="text-center py-20 bg-[#0c0c0c] border border-white/5 rounded-3xl">
              <Search className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No Matching Case Studies</h3>
              <p className="text-sm text-gray-500 max-w-sm mx-auto mb-6">
                No case studies matched "{searchQuery}" under {selectedCategory}. Try resetting your search filter.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-xs font-bold transition-all"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((study) => (
                <motion.div
                  key={study.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Link
                    to={`/case-studies/${study.id}`}
                    className="group rounded-3xl overflow-hidden border border-white/5 bg-[#0c0c0c] hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(59,130,246,0.12)] flex flex-col h-full text-left"
                  >
                    {/* Image Header */}
                    <div className="h-52 relative overflow-hidden">
                      <img
                        src={study.img}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent" />
                      
                      {/* Floating Badges */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-black/70 backdrop-blur-md border border-white/10 rounded-full text-[11px] font-bold text-blue-300">
                          {study.industry}
                        </span>
                      </div>

                      <div className="absolute bottom-3 right-4">
                        <span className="px-3 py-1 bg-green-500/20 backdrop-blur-md border border-green-500/40 rounded-full text-[11px] font-bold text-green-400">
                          ⚡ {study.metric}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors leading-snug">
                          {study.title}
                        </h3>
                        <p className="text-xs text-gray-400 leading-relaxed mb-6">
                          {study.desc}
                        </p>
                      </div>

                      <div>
                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {study.tags.map((tag, j) => (
                            <span
                              key={j}
                              className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-[11px] font-medium text-gray-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* CTA Link */}
                        <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-blue-400 group-hover:text-blue-300">
                          <span>Read Case Study</span>
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-b from-[#080808] to-blue-900/20 border-t border-white/5 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10" data-aos="zoom-in">
          <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-6">
            <Zap size={28} />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Have a Complex Tech Product to Build?
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Our team of senior engineers and product managers can turn your software requirements into a launched, scalable product.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-full transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2 text-sm"
            >
              Consult Solutions Architect <ArrowRight size={16} />
            </Link>
            <Link
              to="/book-consultation"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-full transition-all text-sm"
            >
              Book 1-on-1 Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

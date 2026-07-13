import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";
import { ArrowRight, ExternalLink, Search } from "lucide-react";

const categories = [
  "All", 
  "Enterprise", 
  "Sales", 
  "Education", 
  "E-Commerce", 
  "HR Tech", 
  "Security",
  "Robotics",
  "AI/ML",
  "Trading Tech",
  "FinTech",
  "Construction"
];

const projects = [
  {
    title: "Home Service App",
    category: "Sales",
    desc: "An on-demand home service platform for booking electricians, plumbers, cleaners, and other professionals.",
    img: "https://i.ibb.co/pHrvMgw/image.png",
    tech: ["React Native", "Node.js", "MongoDB", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.smartersvision.home_services",
  },
  {
    title: "Order Management System",
    category: "Enterprise",
    desc: "A centralized order management system to track orders, inventory, invoices, and customer data efficiently.",
    img: "https://i.ibb.co/k60Ms5xt/image.png",
    tech: ["Next.js", "Express.js", "MySQL", "AWS"],
    link: "https://laundry.blarve.com/",
  },
  {
    title: "Quick Delivery App",
    category: "Sales",
    desc: "A hyperlocal quick delivery application for fast delivery of parcels and essentials within minutes.",
    img: "https://i.ibb.co/qMnMWFN0/image.png",
    tech: ["Flutter", "Node.js", "MongoDB", "Google Maps API"],
    link: "https://play.google.com/store/apps/details?id=com.divinetechs.dtbasket",
  },
  {
    title: "E-Commerce App",
    category: "E-Commerce",
    desc: "A full-featured e-commerce platform with product listings, cart, payment gateway integration, and order tracking.",
    img: "https://i.ibb.co/gL9yyxYs/image.png",
    tech: ["Next.js", "Laravel", "MySQL", "Stripe"],
    link: "https://omnimart.geniusdevs.com/",
  },
  {
    title: "Grocery App",
    category: "E-Commerce",
    desc: "An online grocery shopping app with real-time inventory, doorstep delivery, and digital payments.",
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e",
    tech: ["React Native", "Node.js", "MongoDB", "Razorpay"],
    link: "https://play.google.com/store/apps/details?id=com.buildapponline.grocerystore",
  },
  {
    title: "Food Delivery App",
    category: "Sales",
    desc: "A food ordering and delivery app with restaurant listings, live tracking, and multiple payment options.",
    img: "https://i.ibb.co/jPzbLRw1/image.png",
    tech: ["Flutter", "Django", "PostgreSQL", "Firebase"],
    link: "https://drive.google.com/drive/folders/1cXsKn9Lv60zpOiGeCNJnEDfDqtuY3iUe",
  },
  {
    title: "Taxi Booking App",
    category: "Sales",
    desc: "A ride-hailing application with real-time driver tracking, fare calculation, and secure payment integration.",
    img: "https://i.ibb.co/Ps37MX54/image.png",
    tech: ["React Native", "Node.js", "MongoDB", "Google Maps API"],
    link: "https://play.google.com/store/apps/details?hl=en_IN&id=com.sizh.rideon.driver.taxiapp",
  },
  {
    title: "Astrology App",
    category: "Sales",
    desc: "An astrology consultation app offering horoscope readings, live chat with astrologers, and kundli generation.",
    img: "https://i.ibb.co/wrj7fDp4/image.png",
    tech: ["Flutter", "Laravel", "MySQL", "Firebase"],
    link: "https://astro.ftafat.in/",
  },
  {
    title: "GYM App",
    category: "HR Tech",
    desc: "Fitness, Wellness & Yoga workout tracker with personal training, coach class booking and mental health tools.",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600",
    tech: ["Next.js", "Django", "PostgreSQL", "AWS"],
    link: "https://example.com/coaching-app",
  },
  {
    title: "School Management App",
    category: "Education",
    desc: "A comprehensive school management system with attendance tracking, fee management, results, and parent-teacher communication.",
    img: "https://i.ibb.co/PsmMmyxf/image.png",
    tech: ["React", "Node.js", "MongoDB", "Firebase"],
    link: "https://i.ibb.co/PsmMmyxf/image.png",
  },
  {
    title: "NGO Platform",
    category: "Enterprise",
    desc: "A modern NGO platform that supports donations, volunteering, event management, and social impact tracking.",
    img: "https://i.ibb.co/FLvHrywG/image.png",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://arsdf.com/",
  },
  {
    title: "CyberHex – Cyber Education Platform",
    category: "Security",
    desc: "An event organizing platform for hackathons, workshops, and tech events with real-time management.",
    img: "https://i.ibb.co/4ZQkFHRk/image.png",
    tech: ["React", "Supabase", "Node.js", "TypeScript"],
    link: "https://cyberhx.com/",
  },
  {
    title: "Stock Management System",
    category: "Enterprise",
    desc: "A scalable stock and inventory management system with multi-cloud infrastructure support.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200",
    tech: ["Python", "Django", "SQLite"],
    link: "https://github.com/pankajkr-143/Stock-Management-System",
  },
  {
    title: "E-Learning Platform",
    category: "Education",
    desc: "An online learning platform with video courses, assessments, and certifications.",
    img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=600",
    tech: ["Next.js", "Django", "PostgreSQL", "AWS"],
    link: "https://dtlearningweb.divinetechs.com/",
  },
  {
    title: "Multi Hospital – SaaS AI Treatment",
    category: "HR Tech",
    desc: "Digital healthcare solution for managing patients, appointments, and hospital operations.",
    img: "https://i.ibb.co/3mWwWkDh/image.png",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://democa.store/demo/multi-hms/",
  },
  {
    title: "Smart Home Automation",
    category: "Enterprise",
    desc: "IoT-based smart home automation system with mobile and voice control.",
    img: "https://i.ibb.co/Rkt2R8Z2/image.png",
    tech: ["React Native", "Node.js", "MQTT", "MongoDB"],
    link: "https://drive.google.com/file/d/1JRg-g2VU4J0R0xSdt8nTTpMOpuxIRisq/view",
  },
  
  /* Newly added categories using generated illustrations */
  {
    title: "Autonomous Telepresence Rover",
    category: "Robotics",
    desc: "An IoT-enabled telepresence robot running on ROS and ESP32 with live WebRTC video feed mapping and lidar sweeps.",
    img: "/assets/robotics_rover.png",
    tech: ["ROS", "C++", "Python", "WebRTC", "ESP32"],
    link: "https://example.com/robotics-rover",
  },
  {
    title: "DeepSense AI Diagnostics",
    category: "AI/ML",
    desc: "Generative AI medical diagnostics platform built with Claude API, vector files searching, and automated patient data analysis.",
    img: "/assets/ai_diagnostics.png",
    tech: ["Python", "Gemini API", "Pinecone", "Next.js"],
    link: "https://example.com/ai-diagnostics",
  },
  {
    title: "AstroAlgo Strategy Suite",
    category: "Trading Tech",
    desc: "High-speed algorithmic trading signals processor executing EMA crossover trades via broker APIs.",
    img: "/assets/algo_trading.png",
    tech: ["Python", "Websockets", "Pandas", "PineScript"],
    link: "https://example.com/algo-trading",
  },
  {
    title: "LedgerPay double-entry portal",
    category: "FinTech",
    desc: "Enterprise double-entry ledger bookkeeping platform with automated Stripe invoice generation and Plaid feeds.",
    img: "/assets/ledger_pay.png",
    tech: ["React", "Go", "PostgreSQL", "Stripe API"],
    link: "https://example.com/ledger-pay",
  },
  {
    title: "SiteBuild 3D ERP Portal",
    category: "Construction",
    desc: "A civil engineering material tracker displaying 3D BIM models directly inside client dashboard drawers.",
    img: "/assets/sitebuild_erp.png",
    tech: ["Three.js", "React", "Node.js", "AWS S3"],
    link: "https://example.com/sitebuild-erp",
  }
];

/* category badge colors */
const catColor = {
  Enterprise:   "bg-blue-500/15 text-blue-400 border-blue-500/30",
  Sales:        "bg-purple-500/15 text-purple-400 border-purple-500/30",
  Education:    "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  "E-Commerce": "bg-orange-500/15 text-orange-400 border-orange-500/30",
  "HR Tech":    "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
  Security:     "bg-red-500/15 text-red-400 border-red-500/30",
  Robotics:     "bg-amber-500/15 text-amber-400 border-amber-500/30",
  "AI/ML":      "bg-indigo-500/15 text-indigo-400 border-indigo-500/30",
  "Trading Tech":"bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  FinTech:      "bg-violet-500/15 text-violet-400 border-violet-500/30",
  Construction: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
};

export default function Projects() {
  useSEO({
    title: "Our Projects | Software & App Development Portfolio | MackysTech Bhopal",
    description:
      "Explore MackysTech's portfolio of 21+ real-world projects including home service apps, robotics rover, AI medical diagnostics, algorithmic trading, construction ERP and more.",
    canonical: "https://www.mackystech.in/projects",
  });

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = projects.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.tech.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="min-h-screen bg-[#030712] py-24 px-6 relative overflow-hidden">
      {/* Background glow spots */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 right-20 w-96 h-96 rounded-full bg-cyan-500/5 blur-[140px]" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-purple-500/5 blur-[140px]" />
      </div>

      <div className="relative z-10">
        {/* ── HEADER ──────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-white"
          >
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
          >
            A showcase of real-world solutions we've built using modern technologies, robust architectures, and innovative thinking.
          </motion.p>

          {/* ── CTA BUTTONS ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <Link
              to="/contact"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:scale-[1.03] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-cyan-500/25"
            >
              Get a Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-white font-bold text-xs uppercase tracking-wider bg-white/5 transition-all duration-300"
            >
              Custom Development
            </Link>
          </motion.div>
        </div>

        {/* ── SEARCH BAR ─────────────────────────────── */}
        <div className="max-w-xl mx-auto mb-10 relative px-4">
          <Search className="absolute left-8 top-3.5 w-5 h-5 text-slate-500 pointer-events-none" />
          <input
            type="text"
            placeholder="Search projects by name, technology stack, or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-full py-3.5 pl-12 pr-6 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors shadow-2xl"
          />
        </div>

        {/* ── CATEGORY FILTER ─────────────────────────────── */}
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-2.5 mb-14 px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-350 ${
                activeCategory === cat
                  ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20 font-extrabold scale-[1.04]"
                  : "border border-white/10 bg-slate-950/40 text-slate-400 hover:border-cyan-500/30 hover:text-cyan-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── PROJECTS GRID ───────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchTerm}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  whileHover={{ y: -8 }}
                  className="bg-slate-950/80 rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/30 shadow-2xl group flex flex-col justify-between h-full transition-all duration-300"
                >
                  {/* IMAGE */}
                  <div>
                    <div className="overflow-hidden relative">
                      <img
                        src={project.img.includes("unsplash.com") && !project.img.includes("fm=webp") ? `${project.img}&fm=webp&w=500&q=85` : project.img}
                        alt={project.title}
                        className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-108"
                        loading="lazy"
                        width="384"
                        height="208"
                      />
                      {/* Category badge */}
                      <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border backdrop-blur-md shadow-md ${catColor[project.category] || "bg-white/5 text-slate-300 border-white/10"}`}>
                        {project.category}
                      </span>
                    </div>

                    {/* CONTENT */}
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                        {project.desc}
                      </p>

                      {/* TECH STACK */}
                      <div className="flex flex-wrap gap-2.5 pt-1">
                        {project.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-slate-900 border border-white/10 text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="px-6 pb-6 pt-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition group/link"
                    >
                      View Live App
                      <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center text-slate-500 py-24 font-bold">
              No projects matched your search criteria.{" "}
              <Link to="/contact" className="text-cyan-400 hover:underline">
                Contact us
              </Link>{" "}
              to custom develop a solution.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

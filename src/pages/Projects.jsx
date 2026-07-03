import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";
import { ArrowRight, ExternalLink } from "lucide-react";

const categories = ["All", "Enterprise", "Sales", "Education", "E-Commerce", "HR Tech", "Security"];

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
];

/* category badge colors */
const catColor = {
  Enterprise:   "bg-blue-500/15 text-blue-400 border-blue-500/30",
  Sales:        "bg-purple-500/15 text-purple-400 border-purple-500/30",
  Education:    "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  "E-Commerce": "bg-orange-500/15 text-orange-400 border-orange-500/30",
  "HR Tech":    "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
  Security:     "bg-red-500/15 text-red-400 border-red-500/30",
};

export default function Projects() {
  useSEO({
    title: "Our Projects | Software & App Development Portfolio | MackysTech Bhopal",
    description:
      "Explore MackysTech's portfolio of 16+ real-world projects: home service apps, e-commerce platforms, school management systems, healthcare SaaS, e-learning platforms and more.",
    canonical: "https://www.mackystech.in/projects",
  });

  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="min-h-screen bg-[#0b1220] py-20 px-6">

      {/* ── HEADER ──────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          Our <span className="text-blue-400">Projects</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-gray-400 max-w-2xl mx-auto"
        >
          A showcase of real-world solutions we've built using modern technologies and innovative thinking.
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
            className="flex items-center gap-2 px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]"
          >
            Get a Demo <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-2 px-7 py-3 rounded-full border border-white/20 hover:border-blue-400/60 text-white/80 hover:text-white font-semibold text-sm transition-all"
          >
            Custom Development
          </Link>
        </motion.div>
      </div>

      {/* ── CATEGORY FILTER ─────────────────────────────── */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? "bg-blue-600 text-white shadow-[0_0_18px_rgba(59,130,246,0.5)]"
                : "border border-white/15 text-white/60 hover:border-blue-400/50 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── PROJECTS GRID ───────────────────────────────── */}
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
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
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -10 }}
                className="bg-[#111a2e] rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] group"
              >
                {/* IMAGE */}
                <div className="overflow-hidden relative">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Category badge */}
                  <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full border backdrop-blur-sm ${catColor[project.category]}`}>
                    {project.category}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm text-gray-400 leading-relaxed">{project.desc}</p>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-400/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-6">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-white transition group/link"
                    >
                      View Project
                      <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center text-gray-500 py-20">
            No projects in this category yet.{" "}
            <Link to="/contact" className="text-blue-400 hover:underline">
              Contact us
            </Link>{" "}
            to discuss.
          </div>
        )}
      </div>
    </section>
  );
}

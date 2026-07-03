import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";
import {
  Monitor, Smartphone, Brain, Shield, Cloud, BarChart3,
  ShoppingCart, GraduationCap, Zap, ArrowRight, Check, X, Star,
  Globe, Lock, Database, Cpu
} from "lucide-react";

const products = [
  {
    id: "erp-suite",
    icon: BarChart3,
    category: "Enterprise",
    name: "MackysPro ERP Suite",
    tagline: "Complete Business Management Platform",
    description:
      "A fully integrated ERP solution designed for Indian SMEs and enterprises. Manage finance, HR, inventory, procurement, CRM, and reporting from one unified dashboard.",
    color: "from-blue-500 to-indigo-600",
    glow: "rgba(59,130,246,0.3)",
    badge: "Most Popular",
    features: [
      "Finance & Accounting Module",
      "HR & Payroll Management",
      "Inventory & Supply Chain",
      "CRM & Sales Pipeline",
      "Purchase Order Management",
      "GST Compliance & Invoicing",
      "Multi-branch Support",
      "Role-based Access Control",
      "Real-time Dashboard & Reports",
      "Mobile App Included",
    ],
    plans: [
      { name: "Starter", price: "₹4,999/mo", users: "Up to 10 users", highlight: false },
      { name: "Business", price: "₹12,999/mo", users: "Up to 50 users", highlight: true },
      { name: "Enterprise", price: "Custom", users: "Unlimited users", highlight: false },
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    screenshots: ["Finance", "HR", "Inventory"],
  },
  {
    id: "crm-pro",
    icon: Globe,
    category: "Sales",
    name: "MackysLeads CRM",
    tagline: "AI-Powered Customer Relationship Management",
    description:
      "Supercharge your sales team with an intelligent CRM that tracks leads, automates follow-ups, sends WhatsApp reminders, and gives AI-based insights to close deals faster.",
    color: "from-purple-500 to-pink-600",
    glow: "rgba(168,85,247,0.3)",
    badge: "AI Powered",
    features: [
      "Lead Management & Tracking",
      "WhatsApp & Email Automation",
      "AI-based Lead Scoring",
      "Sales Pipeline Visualization",
      "Task & Reminder System",
      "Customer Communication History",
      "Custom Fields & Tags",
      "Team Performance Dashboard",
      "Integration with ERP Suite",
      "Mobile CRM App",
    ],
    plans: [
      { name: "Starter", price: "₹2,499/mo", users: "Up to 5 users", highlight: false },
      { name: "Growth", price: "₹5,999/mo", users: "Up to 25 users", highlight: true },
      { name: "Scale", price: "₹14,999/mo", users: "Unlimited", highlight: false },
    ],
    tech: ["React", "Node.js", "MongoDB", "OpenAI API", "Firebase"],
    screenshots: ["Pipeline", "Leads", "Analytics"],
  },
  {
    id: "school-erp",
    icon: GraduationCap,
    category: "Education",
    name: "MackysSmart School",
    tagline: "Complete School & College Management System",
    description:
      "A comprehensive school management system covering admissions, attendance, fee collection, results, library, timetable, parent communication, and online exam capabilities.",
    color: "from-emerald-500 to-teal-600",
    glow: "rgba(16,185,129,0.3)",
    badge: "New",
    features: [
      "Online Admissions & Enrollment",
      "Student & Staff Database",
      "Attendance (Biometric Ready)",
      "Fee Collection & Receipts",
      "Online Exam & Result Portal",
      "Timetable Management",
      "Library Management",
      "Parent App with Notifications",
      "Certificate Generation",
      "Multi-school Support",
    ],
    plans: [
      { name: "Small School", price: "₹3,999/mo", users: "Up to 500 students", highlight: false },
      { name: "Medium School", price: "₹7,999/mo", users: "Up to 2000 students", highlight: true },
      { name: "Institution", price: "Custom", users: "Unlimited", highlight: false },
    ],
    tech: ["React", "Django", "PostgreSQL", "Firebase", "Razorpay"],
    screenshots: ["Dashboard", "Exam", "Fees"],
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    category: "E-Commerce",
    name: "MackysStore",
    tagline: "Fully Managed E-Commerce Platform",
    description:
      "Launch your own branded online store with product management, payment gateway, order tracking, WhatsApp notifications, GST invoicing, and a powerful admin dashboard.",
    color: "from-orange-500 to-red-600",
    glow: "rgba(249,115,22,0.3)",
    badge: "Ready to Launch",
    features: [
      "Custom Branded Storefront",
      "Product & Category Management",
      "Razorpay / UPI / COD Payments",
      "Order Tracking System",
      "WhatsApp Order Notifications",
      "GST Invoice Generation",
      "Discount & Coupon System",
      "Abandoned Cart Recovery",
      "SEO Optimized Pages",
      "Mobile App for Store Owner",
    ],
    plans: [
      { name: "Basic Store", price: "₹1,999/mo", users: "500 products", highlight: false },
      { name: "Pro Store", price: "₹4,999/mo", users: "Unlimited products", highlight: true },
      { name: "Brand Store", price: "Custom", users: "White Label", highlight: false },
    ],
    tech: ["Next.js", "Node.js", "MongoDB", "Razorpay", "Cloudinary"],
    screenshots: ["Storefront", "Orders", "Admin"],
  },
  {
    id: "hrms",
    icon: Database,
    category: "HR Tech",
    name: "MackysHR",
    tagline: "Modern HR & Payroll Management System",
    description:
      "Automate your entire HR operations — from onboarding and attendance to payroll, compliance, leave management, and employee self-service portal.",
    color: "from-cyan-500 to-blue-600",
    glow: "rgba(6,182,212,0.3)",
    badge: "",
    features: [
      "Employee Onboarding Portal",
      "Biometric Attendance Integration",
      "Leave & Holiday Management",
      "Automated Payroll Processing",
      "PF, ESI & TDS Compliance",
      "Payslip Generation & Distribution",
      "Performance Appraisal System",
      "Employee Self-Service App",
      "Document Management",
      "HR Analytics Dashboard",
    ],
    plans: [
      { name: "Basic", price: "₹2,999/mo", users: "Up to 50 employees", highlight: false },
      { name: "Standard", price: "₹6,999/mo", users: "Up to 200 employees", highlight: true },
      { name: "Enterprise", price: "Custom", users: "Unlimited", highlight: false },
    ],
    tech: ["React", "Node.js", "MySQL", "Redis", "AWS"],
    screenshots: ["Payroll", "Attendance", "Appraisal"],
  },
  {
    id: "cybersec-suite",
    icon: Shield,
    category: "Security",
    name: "MackysShield",
    tagline: "Enterprise Cybersecurity Monitoring Suite",
    description:
      "Protect your business with 24/7 security monitoring, vulnerability scanning, threat detection, and automated incident response powered by AI.",
    color: "from-red-500 to-rose-600",
    glow: "rgba(239,68,68,0.3)",
    badge: "Enterprise",
    features: [
      "24/7 Threat Monitoring (SOC)",
      "Vulnerability Assessment",
      "Penetration Testing Reports",
      "Firewall & IDS Management",
      "Email Security Gateway",
      "Endpoint Protection",
      "Security Incident Reports",
      "Compliance Audit (ISO 27001)",
      "Dark Web Monitoring",
      "Security Awareness Training",
    ],
    plans: [
      { name: "SME Shield", price: "₹8,999/mo", users: "Up to 50 endpoints", highlight: false },
      { name: "Pro Shield", price: "₹19,999/mo", users: "Up to 200 endpoints", highlight: true },
      { name: "Enterprise", price: "Custom", users: "Unlimited", highlight: false },
    ],
    tech: ["Python", "ELK Stack", "Splunk", "OpenVAS", "Suricata"],
    screenshots: ["Dashboard", "Threats", "Reports"],
  },
];

const categories = ["All", "Enterprise", "Sales", "Education", "E-Commerce", "HR Tech", "Security"];

export default function Products() {
  useSEO({
    title: "IT Products | ERP, CRM, School Management, E-Commerce, HRMS | MackysTech",
    description:
      "MackysTech offers ready-to-use IT products: ERP Suite, CRM, School Management System, E-Commerce Platform, HR & Payroll Software, and Cybersecurity Suite for Indian businesses.",
    canonical: "https://www.mackystech.in/products",
    schema: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "MackysTech Software Products",
      itemListElement: products.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.name,
        description: p.description,
        url: `https://www.mackystech.in/products#${p.id}`,
      })),
    },
  });

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="min-h-screen bg-[#060a12] text-white">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <div className="relative overflow-hidden py-24 px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs text-blue-400 font-semibold mb-6">
            <Cpu className="w-3.5 h-3.5" /> Software Products
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Ready-to-Deploy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              IT Products
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Battle-tested software products built for Indian businesses. Launch
            within days, not months — fully customizable to your brand.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]"
            >
              Get a Demo
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 rounded-full border border-white/20 hover:border-blue-400 text-white/80 hover:text-white font-semibold transition-all"
            >
              Custom Development
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ── CATEGORY FILTER ──────────────────────────────────── */}
      <div className="flex justify-center flex-wrap gap-3 px-6 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                : "border border-white/15 text-white/60 hover:border-blue-400/50 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── PRODUCTS GRID ────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 pb-28 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((product, idx) => {
          const Icon = product.icon;
          return (
            <motion.div
              key={product.id}
              id={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              whileHover={{ y: -8 }}
              className="relative group bg-[#0d1221] border border-white/8 rounded-2xl overflow-hidden cursor-pointer"
              style={{
                boxShadow: `0 20px 50px rgba(0,0,0,0.4)`,
              }}
              onClick={() => setSelectedProduct(product)}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(circle at top left, ${product.glow}, transparent 60%)`,
                }}
              />

              {/* Top gradient bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${product.color}`} />

              <div className="p-6">
                {/* Icon + Badge */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${product.color} bg-opacity-20`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  {product.badge && (
                    <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${product.color} text-white`}>
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Name */}
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">
                  {product.category}
                </p>
                <h2 className="text-xl font-bold text-white mb-2">
                  {product.name}
                </h2>
                <p className="text-sm text-blue-400 mb-4">{product.tagline}</p>
                <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                  {product.description}
                </p>

                {/* Key Features preview */}
                <ul className="mt-5 space-y-2">
                  {product.features.slice(0, 4).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-400">
                      <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                  <li className="text-xs text-blue-400 font-medium">
                    +{product.features.length - 4} more features...
                  </li>
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {product.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-6 flex items-center justify-between">
                  <button
                    className={`flex items-center gap-2 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${product.color} group/btn`}
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 text-blue-400 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                  <Link
                    to="/contact"
                    onClick={(e) => e.stopPropagation()}
                    className={`text-xs font-semibold px-4 py-2 rounded-full bg-gradient-to-r ${product.color} text-white hover:opacity-90 transition`}
                  >
                    Get Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ── PRODUCT DETAIL MODAL ─────────────────────────────── */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative bg-[#0d1221] border border-white/10 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top bar */}
              <div className={`h-2 w-full bg-gradient-to-r ${selectedProduct.color} rounded-t-3xl`} />

              <div className="p-8">
                {/* Close */}
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition text-white"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${selectedProduct.color}`}>
                    {(() => { const Icon = selectedProduct.icon; return <Icon className="w-7 h-7 text-white" />; })()}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">
                      {selectedProduct.category}
                    </p>
                    <h2 className="text-2xl font-bold text-white">{selectedProduct.name}</h2>
                    <p className="text-blue-400 text-sm">{selectedProduct.tagline}</p>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed mb-8">
                  {selectedProduct.description}
                </p>

                {/* All Features */}
                <h3 className="text-white font-semibold mb-4">All Features</h3>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {selectedProduct.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <h3 className="text-white font-semibold mb-4">Pricing Plans</h3>
                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  {selectedProduct.plans.map((plan) => (
                    <div
                      key={plan.name}
                      className={`p-4 rounded-xl border text-center ${
                        plan.highlight
                          ? `border-blue-500/50 bg-blue-500/10`
                          : "border-white/10 bg-white/5"
                      }`}
                    >
                      {plan.highlight && (
                        <div className="text-xs font-bold text-blue-400 mb-2">⭐ Recommended</div>
                      )}
                      <div className="text-white font-bold">{plan.name}</div>
                      <div className={`text-xl font-black mt-1 mb-2 text-transparent bg-clip-text bg-gradient-to-r ${selectedProduct.color}`}>
                        {plan.price}
                      </div>
                      <div className="text-xs text-gray-500">{plan.users}</div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex gap-4">
                  <Link
                    to="/contact"
                    className={`flex-1 py-3 rounded-xl text-center font-semibold text-white bg-gradient-to-r ${selectedProduct.color} hover:opacity-90 transition`}
                  >
                    Book Free Demo
                  </Link>
                  <Link
                    to="/contact"
                    className="flex-1 py-3 rounded-xl text-center font-semibold border border-white/20 hover:border-blue-400 text-white/80 hover:text-white transition"
                  >
                    Custom Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── BOTTOM CTA ───────────────────────────────────────── */}
      <div className="border-t border-white/5 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Need Something{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            Custom?
          </span>
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Don't see what you need? We build fully custom software tailored to your
          exact business requirements. From concept to deployment.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition shadow-[0_0_30px_rgba(59,130,246,0.4)]"
        >
          Discuss Your Project <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

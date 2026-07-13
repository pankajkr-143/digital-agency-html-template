import { useState } from "react";
import { useSEO } from "../hooks/useSEO";
import { Link } from "react-router-dom";
import {
  Code,
  Server,
  Database,
  Cloud,
  Globe,
  Shield,
  Monitor,
  Wifi,
  Cpu,
  HelpCircle,
  TrendingUp,
  Brain,
  BarChart,
  Search,
  Users,
  Lock,
  Activity,
  Settings,
  Wrench,
  Smartphone,
  Package,
  Zap,
  Target,
  FileText,
  MessageSquare,
  Phone,
  Mail,
  AlertTriangle,
  CheckCircle,
  RefreshCw,
  ArrowRight,
  Wallet,
  Building2,
  BookOpen
} from "lucide-react";

/* ===================== DATA ===================== */
const services = [
  {
    id: "software-development",
    title: "Software Development",
    desc: "Custom software solutions including web, mobile, and enterprise applications with modern technologies.",
    icon: Code,
    path: "/software-development",
    subServices: [
      "Custom Software Development",
      "Web Application Development",
      "Mobile App Development (Android / iOS)",
      "E-commerce Development",
      "Enterprise Software Solutions (ERP / CRM)",
      "SaaS Product Development",
      "API Development & Integration",
      "Software Maintenance & Upgrades"
    ],
    implementation: "98%",
    status: "Active",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    desc: "B2B digital marketing services to boost your online presence and generate leads.",
    icon: Search,
    path: "/digital-marketing",
    subServices: [
      "SEO Services",
      "Social Media Marketing",
      "Google Ads & PPC",
      "Website Maintenance",
      "Branding & Graphic Design",
      "Lead Generation Services"
    ],
    implementation: "91%",
    status: "Growing",
  },
  {
    id: "robotics",
    title: "Robotics (Project)",
    desc: "Complete robotics research, sensory setups, microcontroller coding, and automated prototype builds.",
    icon: Cpu,
    path: "/robotics",
    subServices: [
      "Embedded Firmware Development",
      "Sensor Nodes Configurations",
      "Microcontroller Coding (ESP32 / Pi / Arduino)",
      "Industrial Telemetry & Robotics Control",
      "Altium PCB Designs",
      "Mechanical Prototype Frameworks"
    ],
    implementation: "92%",
    status: "Active",
  },
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence (Project)",
    desc: "Deploy AI Agents, custom LLM models, conversational engines, and pattern forecast models.",
    icon: Brain,
    path: "/artificial-intelligence",
    subServices: [
      "Autonomous AI Agent Pipelines",
      "LLM API Integrations (OpenAI / Claude / Gemini)",
      "RAG Vector Database Configuration",
      "Predictive Trend Forecast Models",
      "Custom Model Fine-tuning",
      "Internal Business Automation Bots"
    ],
    implementation: "94%",
    status: "Active",
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    desc: "Comprehensive security services including penetration testing, threat monitoring, and code audits.",
    icon: Shield,
    path: "/cyber-security",
    subServices: [
      "Vulnerability Assessment & Pen Testing (VAPT)",
      "Secure Repository Code Auditing",
      "SOC Threat Logging & Monitoring",
      "SOC2 / ISO 27001 Compliance Maps",
      "Cloud Infrastructure Protection",
      "Encryption & Access Security Filters"
    ],
    implementation: "96%",
    status: "Protected",
  },
  {
    id: "stock-market",
    title: "Stock Marketing",
    desc: "Build indicator algorithms, backtesting systems, live dashboard tickers, and risk setups.",
    icon: TrendingUp,
    path: "/stock-market",
    subServices: [
      "Indicator Script Mappings (PineScript / Python)",
      "Auto Execution Trading Algorithms",
      "Historical Strategy Backtesting",
      "High-speed Chart Dashboard Components",
      "Live Prices Websocket Ticker Connectors",
      "Portfolio Risk Management Panels"
    ],
    implementation: "89%",
    status: "Active",
  },
  {
    id: "finance",
    title: "Finance & FinTech",
    desc: "Payment integration flows, digital loan portals, ledger databases, and invoice automations.",
    icon: Wallet,
    path: "/finance",
    subServices: [
      "Stripe Checkout & Subscription Mappings",
      "Digital Loan Processing Portals",
      "Plaid KYC & Verification Connectors",
      "Secure Bookkeeping Ledger Databases",
      "Auto Invoice Tax Calculators",
      "Double-Entry Accounting Systems"
    ],
    implementation: "93%",
    status: "Active",
  },
  {
    id: "building-construction",
    title: "Building Construction",
    desc: "Custom site ERP tracking, worker hours registers, materials inventory loggers, and Gantt charts.",
    icon: Building2,
    path: "/building-construction",
    subServices: [
      "Construction Site Material Inventory ERP",
      "Supervisor Photographic Upload Portals",
      "Gantt Site Timeline Progress Views",
      "Worker Hour Registers & Installment Billing",
      "Autodesk AutoCAD API Integrations",
      "Three.js 3D BIM Blueprint Rendering"
    ],
    implementation: "90%",
    status: "Active",
  },
  {
    id: "sales-marketing",
    title: "Sales & Marketing",
    desc: "Sales funnels, tailored CRM platforms, quotation pipelines, and sequence followups.",
    icon: Users,
    path: "/sales-marketing",
    subServices: [
      "Lead Pipeline CRM Architectures",
      "Dynamic PDF Quotation Generators",
      "SMS, Email & WhatsApp Drip Sequences",
      "Algorithmic Deal Ranking & Prioritization",
      "Zapier CRM Lead Forwarding Connections",
      "High-converting Sales Landing Layouts"
    ],
    implementation: "95%",
    status: "Growing",
  },
  {
    id: "edtech",
    title: "EdTech & LMS",
    desc: "Learning Management Systems (LMS), school ERP, online courses marketplaces, and anti-cheat exam portals.",
    icon: BookOpen,
    path: "/edtech",
    subServices: [
      "Secure Course Video Streaming Drawers",
      "Anti-Cheat Online Examination Engines",
      "Student Fee Collection Calendars",
      "Custom Automated Certificate Generation",
      "Teacher/Tutor Dashboard Workspaces",
      "Rand-generator Question Database Banks"
    ],
    implementation: "97%",
    status: "Active",
  }
];

/* ===================== COMPONENT ===================== */
export default function Services() {
  useSEO({
    title: "IT Services in Bhopal | Software, App, Cloud, Cybersecurity | MackysTech",
    description: "MackysTech offers 10+ IT services in Bhopal: Software Development, Digital Marketing, AI/ML, Robotics, Cybersecurity, Stock Marketing, Finance, Construction, Sales and EdTech.",
    canonical: "https://www.mackystech.in/services",
    schema: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "MackysTech IT Services List",
      "itemListElement": services.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Service",
          "name": s.title,
          "description": s.desc,
          "provider": {
            "@type": "LocalBusiness",
            "name": "MackysTech",
            "url": "https://www.mackystech.in"
          }
        }
      }))
    }
  });

  const [activeService, setActiveService] = useState(services[0]);

  return (
    // Main Section Background: Solid Dark Blue/Black (#0b1220)
    <section className="min-h-screen bg-[#030712] text-white px-6 py-24">

      {/* HEADING */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wider">
          OUR <span className="text-cyan-400">SERVICES</span>
        </h1>

        <p className="mt-6 text-slate-400">
          Technology solutions built for scalability, security, and performance.
        </p>
      </div>

      {/* CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <Link
              key={service.id}
              to={service.path}
              className="
                bg-slate-900/30 hover:bg-slate-900/60
                border border-white/5 hover:border-cyan-500/20
                rounded-2xl
                p-6
                flex flex-col justify-between
                transition-all duration-300
                group
                shadow-xl
              "
            >
              <div>
                <div className="p-3 rounded-xl bg-white/5 text-cyan-400 group-hover:bg-cyan-500/10 group-hover:text-cyan-300 transition-colors w-fit mb-4">
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm mb-4 line-clamp-3">
                  {service.desc}
                </p>
              </div>

              <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase flex items-center gap-1 mt-auto">
                Explore Page
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          );
        })}
      </div>

      {/* ICON SELECTOR */}
      <div className="flex justify-center flex-wrap mt-20 gap-6 max-w-4xl mx-auto mb-16">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <button
              key={service.id}
              onClick={() => setActiveService(service)}
              className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300
                ${
                  activeService.id === service.id
                    ? "bg-cyan-500/10 border-cyan-500 text-cyan-400 scale-[1.05]"
                    : "bg-slate-950/40 border-white/5 text-slate-400 hover:border-white/15 hover:text-slate-300"
                }`}
              title={service.title}
            >
              <Icon size={24} />
            </button>
          );
        })}
      </div>

      {/* ACTIVE INFO DISPLAY DISPLAY */}
      <div className="max-w-4xl mx-auto bg-slate-900/20 border border-white/5 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-black text-white">
            {activeService.title}
          </h2>

          <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto">
            {activeService.desc}
          </p>
        </div>

        {/* SUB-SERVICES LIST */}
        <div className="border-t border-white/5 pt-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-4 text-center sm:text-left">Services Include:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {activeService.subServices.map((subService, index) => (
              <div key={index} className="flex items-start gap-2.5">
                <CheckCircle size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-xs sm:text-sm">{subService}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-white/5 pt-6">
          <div className="flex gap-10 text-xs text-slate-400">
            <span>
              Implementation:
              <span className="text-cyan-400 ml-1 font-bold">
                {activeService.implementation}
              </span>
            </span>

            <span>
              Status:
              <span className="text-emerald-400 ml-1 font-bold">
                {activeService.status}
              </span>
            </span>
          </div>

          <Link
            to={activeService.path}
            className="px-6 py-3 rounded-full text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-[1.03] transition-all shadow-lg shadow-cyan-400/20"
          >
            Explore Complete Page
          </Link>
        </div>
      </div>

    </section>
  );
}
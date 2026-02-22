import { useState } from "react";
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
} from "lucide-react";

/* ===================== DATA ===================== */
const services = [
  {
    id: "software-development",
    title: "Software Development Services",
    desc: "Custom software solutions including web, mobile, and enterprise applications with modern technologies.",
    icon: Code,
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
    id: "cloud-computing",
    title: "Cloud Computing Services",
    desc: "Complete cloud solutions from migration to management with 24/7 monitoring and security.",
    icon: Cloud,
    subServices: [
      "Cloud Consulting & Strategy",
      "Cloud Migration",
      "Cloud Deployment",
      "Cloud Infrastructure Management",
      "Backup & Disaster Recovery",
      "Cloud Security",
      "DevOps & CI/CD Implementation"
    ],
    implementation: "95%",
    status: "Active",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Ethical Hacking",
    desc: "Comprehensive security services including penetration testing, threat monitoring, and incident response.",
    icon: Shield,
    subServices: [
      "Network Security",
      "Endpoint Security",
      "Firewall & Antivirus Management",
      "Vulnerability Assessment",
      "Penetration Testing (Ethical Hacking)",
      "Security Audits & Compliance",
      "Threat Monitoring (24/7 SOC)",
      "Data Encryption Services",
      "Incident Response & Recovery"
    ],
    implementation: "96%",
    status: "Protected",
  },
  {
    id: "networking",
    title: "Networking Services",
    desc: "Complete networking solutions from setup to monitoring with enterprise-grade security.",
    icon: Wifi,
    subServices: [
      "LAN / WAN Setup",
      "Router & Switch Configuration",
      "WiFi Installation",
      "Network Troubleshooting",
      "VPN Setup",
      "Network Monitoring",
      "Structured Cabling"
    ],
    implementation: "94%",
    status: "Active",
  },
  {
    id: "hardware",
    title: "Hardware & Infrastructure Services",
    desc: "End-to-end hardware solutions from procurement to maintenance and asset management.",
    icon: Monitor,
    subServices: [
      "Computer & Laptop Sales",
      "Hardware Installation",
      "Server Setup & Maintenance",
      "Data Center Setup",
      "Hardware Repair & Replacement",
      "IT Asset Management"
    ],
    implementation: "92%",
    status: "Active",
  },
  {
    id: "it-support",
    title: "IT Support & Managed Services",
    desc: "24/7 IT support with multiple service models including AMC and dedicated support teams.",
    icon: HelpCircle,
    subServices: [
      "Helpdesk Support (L1 / L2 / L3)",
      "Remote & Onsite Support",
      "Annual Maintenance Contract (AMC)",
      "System Monitoring (24/7)",
      "Software Updates & Patch Management",
      "IT Outsourcing Services"
    ],
    implementation: "97%",
    status: "Active",
  },
  {
    id: "it-consulting",
    title: "IT Consulting & Business Solutions",
    desc: "Strategic IT consulting to drive digital transformation and business growth.",
    icon: TrendingUp,
    subServices: [
      "IT Consulting",
      "Digital Transformation",
      "Business Process Automation",
      "IT Project Management",
      "Technology Roadmap Planning",
      "Cost Optimization Strategy"
    ],
    implementation: "93%",
    status: "Active",
  },
  {
    id: "emerging-tech",
    title: "Emerging Technology Services",
    desc: "Cutting-edge solutions using AI, ML, Blockchain, IoT, and RPA technologies.",
    icon: Brain,
    subServices: [
      "Artificial Intelligence (AI)",
      "Machine Learning (ML)",
      "Blockchain Development",
      "Internet of Things (IoT)",
      "Robotic Process Automation (RPA)",
      "Data Analytics & Big Data"
    ],
    implementation: "89%",
    status: "Innovation",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & Online Services",
    desc: "B2B digital marketing services to boost your online presence and generate leads.",
    icon: Search,
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
];

/* ===================== COMPONENT ===================== */
export default function Services() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    // Main Section Background: Solid Dark Blue/Black (#0b1220)
    <section className="min-h-screen bg-[#0b1220] text-white px-6 py-24">

      {/* HEADING */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-bold tracking-widest">
          OUR <span className="text-blue-400">SERVICES</span>
        </h1>

        <p className="mt-6 text-gray-400">
          Technology solutions built for scalability, security, and performance.
        </p>
      </div>

      {/* CARDS GRID */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.id}
              // Removed style prop.
              // bg-[#111827] is a solid opaque color.
              // No hover: classes are applied.
              className="
                bg-[#111827]
                border border-[#1f2937]
                rounded-xl
                p-6
              "
            >
              <Icon size={28} className="text-blue-400 mb-4" />

              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {service.desc}
              </p>

              <span className="text-blue-400 text-sm">
                → LEARN MORE
              </span>
            </div>
          );
        })}
      </div>

      {/* ICON SELECTOR */}
      <div className="flex justify-center flex-wrap mt-20 gap-10 mb-16">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.id}
              onClick={() => setActiveService(service)}
              // Logic handles active state color, but adds no hover effects.
              className={`p-4 rounded-lg border cursor-pointer
                ${
                  activeService.id === service.id
                    ? "bg-[#111827] border-blue-500 text-blue-400"
                    : "border-transparent text-gray-400"
                }`}
            >
              <Icon size={32} />
            </div>
          );
        })}
      </div>

      {/* ACTIVE INFO */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-3">
          {activeService.title}
        </h2>

        <p className="text-gray-400 mb-6">
          {activeService.desc}
        </p>

        {/* SUB-SERVICES LIST */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-blue-400 mb-4">Services Include:</h3>
          <div className="grid md:grid-cols-2 gap-3 text-left">
            {activeService.subServices.map((subService, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{subService}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-10 text-sm">
          <span>
            Implementation:
            <span className="text-blue-400 ml-1">
              {activeService.implementation}
            </span>
          </span>

          <span>
            Status:
            <span className="text-green-400 ml-1">
              {activeService.status}
            </span>
          </span>
        </div>
      </div>

    </section>
  );
}
import { useState } from "react";
import {
  Code,
  Server,
  Database,
  Cloud,
  Globe,
  Shield,
} from "lucide-react";

/* ===================== DATA ===================== */
const services = [
  {
    id: "backend",
    title: "Backend",
    desc: "Robust server-side solutions using Node.js, Python, and scalable architectures.",
    icon: Server,
    implementation: "100%",
    status: "Active",
  },
  {
    id: "frontend",
    title: "Frontend",
    desc: "Modern UI/UX using React and responsive systems.",
    icon: Code,
    implementation: "95%",
    status: "Active",
  },
  {
    id: "database",
    title: "Database",
    desc: "Secure databases using PostgreSQL, MongoDB, and MySQL.",
    icon: Database,
    implementation: "90%",
    status: "Optimized",
  },
  {
    id: "cloud",
    title: "Cloud",
    desc: "Scalable infrastructure on AWS, Azure, and GCP.",
    icon: Cloud,
    implementation: "92%",
    status: "Stable",
  },
  {
    id: "web",
    title: "Web Services",
    desc: "High-performance web apps with API integrations.",
    icon: Globe,
    implementation: "96%",
    status: "Live",
  },
  {
    id: "security",
    title: "Security",
    desc: "Enterprise security, authentication & audits.",
    icon: Shield,
    implementation: "88%",
    status: "Protected",
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
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-3">
          {activeService.title}
        </h2>

        <p className="text-gray-400 mb-6">
          {activeService.desc}
        </p>

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
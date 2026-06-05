import { motion } from "framer-motion";
import { BookOpen, Code, Terminal, Play, ArrowRight, ShieldCheck } from "lucide-react";

export default function Documentation() {
  const sections = [
    {
      title: "Getting Started",
      icon: <Play className="w-5 h-5 text-cyan-400" />,
      desc: "Learn how to integrate MackysTech SDKs and set up your development environment in under 5 minutes.",
    },
    {
      title: "API Reference",
      icon: <Code className="w-5 h-5 text-blue-400" />,
      desc: "Detailed API documentation including endpoints, payloads, response schemas, and authentication.",
    },
    {
      title: "CLI & Tooling",
      icon: <Terminal className="w-5 h-5 text-purple-400" />,
      desc: "Control your cloud deployments and app resources directly from your local terminal using our CLI.",
    },
    {
      title: "Security & Auth",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      desc: "Best practices for token management, multi-tenant authentication, and securing API endpoints.",
    },
  ];

  return (
    <section className="relative min-h-screen bg-black text-gray-300 py-28 px-6 md:px-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.1),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-cyan-400 font-semibold mb-6">
            <BookOpen className="w-3.5 h-3.5" /> Developer Hub
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Documentation & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Guides</span>
          </h1>
          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            Everything you need to build, deploy, and scale your digital applications using MackysTech's ecosystem.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-2xl bg-[#0a0f1a]/80 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-cyan-500/10 transition-colors">
                  {section.icon}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {section.title}
                </h3>
              </div>
              <p className="mt-4 text-gray-400 leading-relaxed text-sm">
                {section.desc}
              </p>
              <div className="mt-6 flex items-center gap-2 text-cyan-400 text-sm font-medium hover:underline cursor-pointer">
                Explore Docs <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Code Snippet Example */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl bg-[#090d16] border border-white/10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-500" />
          <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-xs text-gray-500 ml-2 font-mono">quickstart.js</span>
            </div>
            <span className="text-xs text-cyan-400 font-semibold bg-cyan-500/10 px-2 py-1 rounded">JavaScript SDK</span>
          </div>
          <pre className="text-sm font-mono text-cyan-300 overflow-x-auto">
{`// Install SDK: npm install @mackystech/sdk
import { MackysClient } from "@mackystech/sdk";

const client = new MackysClient({
  apiKey: process.env.MACKYS_API_KEY,
  environment: "production"
});

// Deploy cloud function on request
const deployment = await client.deploy({
  projectId: "digital-agency-template",
  service: "frontend-api",
  autoscale: true
});

console.log(\`✅ App live at: \${deployment.url}\`);`}
          </pre>
        </motion.div>
      </div>
    </section>
  );
}

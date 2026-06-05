import { motion } from "framer-motion";
import { FileText, RefreshCw } from "lucide-react";

export default function Terms() {
  return (
    <section className="relative min-h-screen bg-black text-gray-300 py-28 px-6 md:px-16 overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.1),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left border-b border-white/10 pb-8 mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-indigo-400 font-semibold mb-6">
            <FileText className="w-3.5 h-3.5" /> Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-gray-500 flex items-center justify-center md:justify-start gap-2">
            <RefreshCw className="w-3.5 h-3.5" /> Last updated: May 20, 2026
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-10 text-gray-400 leading-relaxed text-sm md:text-base"
        >
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using the website of MackysTech (mackystech.in), you accept and agree to be bound by these terms. If you do not agree, please do not use our services or website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              2. Scope of Services
            </h2>
            <p>
              MackysTech provides professional digital solutions, software consulting, AWS cloud setup, training, internships, and general IT services. We reserve the right to modify, suspend, or discontinue any aspects of these services at any time.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              3. User Obligations
            </h2>
            <p>
              You agree to use this site and our application portals only for lawful purposes. You must not input fraudulent information, upload malicious payloads, or attempt to compromise site architecture or client data security.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              4. Disclaimer of Liability
            </h2>
            <p>
              In no event shall MackysTech be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this site, our software products, or server instances.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

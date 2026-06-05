import { motion } from "framer-motion";
import { Shield, Lock, Eye, RefreshCw } from "lucide-react";

export default function Privacy() {
  return (
    <section className="relative min-h-screen bg-black text-gray-300 py-28 px-6 md:px-16 overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left border-b border-white/10 pb-8 mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-blue-400 font-semibold mb-6">
            <Shield className="w-3.5 h-3.5" /> Privacy Policy
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Privacy Policy
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
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Eye className="w-5 h-5 text-blue-400" /> 1. Information We Collect
            </h2>
            <p>
              We collect information that you provide directly to us when filling out our contact forms, applying for jobs, applying for internships, or requesting details. This includes name, email, phone number, academic data, resume files, and message content.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Lock className="w-5 h-5 text-blue-400" /> 2. How We Secure Your Data
            </h2>
            <p>
              We take security very seriously. All client data and applicant records are encrypted in transit using industry-standard TLS protocols and stored securely in databases protected by enterprise firewall access restrictions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              3. Cookies & Tracking
            </h2>
            <p>
              We use minimal cookies necessary for the operation of this website and for aggregated analytic insights to help us understand client interest. We do not engage in behavioral cross-site marketing tracking.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              4. Contact Us
            </h2>
            <p>
              If you have any questions or concerns regarding this privacy policy or our data practices, please get in touch with us at:
            </p>
            <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 w-fit">
              <p className="font-semibold text-white">MackysTech Security Office</p>
              <p>Email: <a href="mailto:security@mackystech.in" className="text-blue-400 hover:underline">security@mackystech.in</a></p>
              <p>Phone: +91 8235910315</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

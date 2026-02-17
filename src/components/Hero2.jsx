import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Hero2 = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
        /* ================= HERO ================= */
        <section className="relative  min-h-screen bg-[#0a0a0c] overflow-hidden flex items-center justify-center text-white">

          {/* DEPTH BACKGROUND */}
          <motion.div
            animate={{ opacity: [0.25, 0.4, 0.25] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff10,transparent_65%)]"
          />

          {/* LEFT FLOAT CARD */}
          <motion.div
            initial={{ x: -120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-10 top-1/2 -translate-y-1/2 hidden md:block"
          >
            <div className="px-6 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur">
              <p className="text-sm text-gray-400">⚡ Fast Delivery</p>
              <p className="text-lg font-medium">Modern Tech Stack</p>
            </div>
          </motion.div>

          {/* RIGHT FLOAT CARD */}
          <motion.div
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-10 top-1/2 -translate-y-1/2 hidden md:block"
          >
            <div className="px-6 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur">
              <p className="text-sm text-gray-400">☁️ Cloud Ready</p>
              <p className="text-lg font-medium">Scalable Systems</p>
            </div>
          </motion.div>

          {/* MAIN CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 text-center px-6 max-w-5xl"
          >
            {/* TAG */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block mb-6 px-4 py-2 rounded-full border border-white/10 text-sm text-gray-400"
            >
              Web • App • Cloud Engineering
            </motion.div>

            {/* HEADING */}
            <motion.h1
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="text-4xl md:text-7xl lg:text-8xl font-semibold leading-tight"
            >
              Build{" "}
              <span className="text-gray-400">Future-Ready</span>
              <br />
              Digital Products
            </motion.h1>

            {/* SUBTITLE */}
            <motion.p
              animate={{ opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto"
            >
              High-impact websites, scalable cloud systems and modern
              applications — engineered for long-term growth.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-10 flex gap-6 justify-center"
            >
              <motion.button
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.96 }}
                className="px-9 py-3 rounded-lg bg-white text-black font-medium"
              >
                Get Started
              </motion.button>

              <motion.button
                whileHover={{ y: -4 }}
                className="px-9 py-3 rounded-lg border border-white/20 text-gray-300"
              >
                View Work
              </motion.button>
            </motion.div>
          </motion.div>
        </section>
      
    </AnimatePresence>
  );
};

export default Hero2;
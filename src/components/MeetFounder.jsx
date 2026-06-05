import { motion } from "framer-motion";
import { Briefcase, CheckCircle, Award } from "lucide-react";

export default function MeetFounder() {
  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Subtle Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_50%)]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-14 backdrop-blur-md shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
        >
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* FOUNDER IMAGE - LEFT (Lg: 5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative flex justify-center"
            >
              {/* Outer Glowing Border Frame */}
              <div className="relative group w-72 h-72 sm:w-80 sm:h-80 md:w-90 md:h-90">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-2xl blur-xl group-hover:opacity-70 transition duration-500 opacity-40"></div>
                
                {/* Main Card Wrapper */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/15 bg-neutral-900 shadow-2xl transition duration-500 group-hover:border-blue-500/40">
                  <img
                    src="/assets/ceo.jpg"
                    alt="Pankaj Kr Gupta - Founder & CEO"
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  
                  {/* Frosted Glass Overlay Label */}
                  <div className="absolute bottom-4 inset-x-4 bg-black/60 border border-white/10 backdrop-blur-md py-3 px-4 rounded-xl text-center shadow-lg">
                    <span className="text-white text-xs tracking-widest uppercase font-semibold block">Founder & CEO</span>
                    <span className="text-gray-400 text-[10px] mt-0.5 block">MackysTech Solutions</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FOUNDER STORY - RIGHT (Lg: 7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-7 text-white"
            >
              <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider block mb-3">Our Leadership</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Founder</span>
              </h2>
              <h3 className="text-lg sm:text-xl font-medium text-gray-300 mb-6">
                Pankaj Kr Gupta
              </h3>
              
              <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base font-normal">
                <p>
                  With a deep-rooted passion for software craftsmanship and a vision to transform digital landscapes, Pankaj has guided MackysTech from a high-performance development hub into a full-scale digital agency.
                </p>
                <p>
                  Specializing in robust architectures, scalable system design, and cutting-edge user interfaces, he sets the benchmark for engineering excellence across every application we deliver.
                </p>
                <p>
                  Under his guidance, our engineering teams build fast, reliable, and secure web and mobile applications that help enterprise clients and growing startups scale their digital presence seamlessly.
                </p>
              </div>

              {/* Minimal Stats Section */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4 flex items-center gap-3 hover:border-white/20 transition duration-300">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white leading-tight">10+ Years</div>
                    <div className="text-gray-500 text-xs">Experience</div>
                  </div>
                </div>

                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4 flex items-center gap-3 hover:border-white/20 transition duration-300">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white leading-tight">50+ Projects</div>
                    <div className="text-gray-500 text-xs">Delivered</div>
                  </div>
                </div>

                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4 flex items-center gap-3 hover:border-white/20 transition duration-300">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white leading-tight">100% Satisfy</div>
                    <div className="text-gray-500 text-xs">Client Rate</div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}


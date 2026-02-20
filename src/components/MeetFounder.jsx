import { motion } from "framer-motion";

export default function MeetFounder() {
  return (
    <section className="py-20 px-6 bg-[#0b1220]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-[#111a2e] to-[#0f1929] rounded-3xl p-8 md:p-12 border border-white/10 shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* FOUNDER IMAGE - LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-2xl opacity-30"></div>
                <img
                  src="/assets/ceo.jpg"
                  alt="Pankaj Kr Gupta - Founder & CEO"
                  className="relative w-full h-full rounded-full object-cover border-4 border-blue-400/30 shadow-[0_20px_40px_rgba(59,130,246,0.3)]"
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-400 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Founder & CEO
                </div>
              </div>
            </motion.div>

            {/* FOUNDER STORY - RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet Our <span className="text-blue-400">Founder</span>
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-blue-300 mb-6">
                Pankaj Kr Gupta
              </h3>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  With a vision to transform digital landscapes, Pankaj embarked on an extraordinary journey from a passionate developer to a visionary entrepreneur. His story is one of perseverance, innovation, and unwavering commitment to excellence.
                </p>
                
                <p>
                  Starting with just a laptop and big dreams, he built this company from the ground up, facing every challenge head-on and turning obstacles into opportunities. His leadership philosophy centers around empowering teams and fostering a culture of continuous learning.
                </p>
                
                <p>
                  Today, under his guidance, we're not just building products – we're crafting digital experiences that make a difference. His journey reminds us that with passion, dedication, and the right team, impossible is just a word.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                  <span className="text-blue-400 font-semibold">10+ Years</span>
                  <span className="text-gray-400 text-sm ml-2">Experience</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                  <span className="text-blue-400 font-semibold">50+ Projects</span>
                  <span className="text-gray-400 text-sm ml-2">Delivered</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                  <span className="text-blue-400 font-semibold">100% Client</span>
                  <span className="text-gray-400 text-sm ml-2">Satisfaction</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Building, BookOpen } from "lucide-react";

const featured = [
  {
    title: "Software Development",
    subtitle: "Enterprise Platforms & Mobile Apps",
    desc: "Custom high-performance software architectures, secure SaaS products, and native applications engineered for scale.",
    img: "/assets/poster_software.png",
    path: "/software-development",
    icon: Code,
    color: "from-cyan-500 to-blue-500",
    shadow: "shadow-cyan-500/10"
  },
  {
    title: "Construction & Civil Builder",
    subtitle: "Residential Builder & Tenders",
    desc: "End-to-end residential building construction, commercial tender bids, and site tracking infrastructure with 3D BIM rendering.",
    img: "/assets/poster_construction.png",
    path: "/building-construction",
    icon: Building,
    color: "from-yellow-500 to-orange-500",
    shadow: "shadow-yellow-500/10"
  },
  {
    title: "EdTech & LMS Solutions",
    subtitle: "Next-Gen Student Learning Environments",
    desc: "Scalable Learning Management Systems, secure anti-cheat examination engines, and interactive student dashboard portals.",
    img: "/assets/poster_edtech.png",
    path: "/edtech",
    icon: BookOpen,
    color: "from-purple-500 via-indigo-500 to-blue-500",
    shadow: "shadow-purple-500/10"
  }
];

export default function FeaturedServices() {
  return (
    <section className="bg-[#030712] text-white py-24 px-6 relative overflow-hidden border-b border-white/5">
      {/* Background spotlights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title block */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-cyan-400 uppercase"
          >
            Ecosystem Highlights
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight"
          >
            Pioneering Industry <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Powerhouses</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Explore our primary specializations delivering world-class engineering, building solutions, and learning systems.
          </motion.p>
        </div>

        {/* 3 cards container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featured.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`bg-slate-950/65 border border-white/5 hover:border-cyan-500/20 rounded-3xl overflow-hidden shadow-2xl ${item.shadow} hover:shadow-cyan-500/5 group flex flex-col justify-between transition-all duration-300`}
              >
                <div>
                  {/* Poster Image */}
                  <div className="relative overflow-hidden h-72">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    
                    {/* Floating Icon badge */}
                    <div className="absolute top-4 left-4 p-3 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-cyan-400 shadow-lg">
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-8 space-y-3">
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">
                      {item.subtitle}
                    </span>
                    <h3 className="text-2xl font-black text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-8 pb-8 pt-2">
                  <Link
                    to={item.path}
                    className="flex items-center justify-between w-full px-5 py-3 rounded-full bg-slate-900 border border-white/5 hover:border-cyan-500/30 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-all duration-300"
                  >
                    <span>Explore Division</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

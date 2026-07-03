import { motion } from "framer-motion";
import { GraduationCap, Play, Clock, BarChart, ChevronRight } from "lucide-react";
import { useSEO } from "../hooks/useSEO";

export default function Tutorials() {
  useSEO({
    title: "IT Tutorials | AWS, React 19, TailwindCSS, Node.js | MackysTech Academy",
    description: "Free IT tutorials by MackysTech engineers: AWS Cloud Infrastructure, React 19 + Framer Motion, TailwindCSS, Node.js, DevOps, cybersecurity and more. Learn from professionals.",
    canonical: "https://www.mackystech.in/tutorials",
  });

  const tutorials = [
    {
      title: "AWS Cloud Infrastructure from Scratch",
      category: "Cloud",
      duration: "4h 15m",
      level: "Intermediate",
      thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
      desc: "Learn VPC, EC2 autoscaling, RDS setup, and deploying React apps securely on AWS.",
    },
    {
      title: "Advanced TailwindCSS & Modern CSS layouts",
      category: "Design",
      duration: "2h 30m",
      level: "Beginner",
      thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop",
      desc: "Master grid systems, custom animations, variables, and responsive design systems using TailwindCSS.",
    },
    {
      title: "React 19 & Framer Motion Masterclass",
      category: "Frontend",
      duration: "5h 45m",
      level: "Advanced",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop",
      desc: "Deep dive into React Server Actions, concurrent rendering, transitions, and micro-interactions with Framer Motion.",
    },
  ];

  return (
    <section className="relative min-h-screen bg-black text-gray-300 py-28 px-6 md:px-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-blue-400 font-semibold mb-6">
            <GraduationCap className="w-3.5 h-3.5" /> Academy
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Tutorials</span>
          </h1>
          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            Boost your tech skills with step-by-step video courses and written guides curated by MackysTech engineers.
          </p>
        </motion.div>

        {/* Video Tutorials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {tutorials.map((tut, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col bg-[#0a0f1a] border border-white/5 rounded-2xl overflow-hidden shadow-xl hover:border-blue-500/25 transition-all duration-300"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={tut.thumbnail}
                  alt={tut.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-4 rounded-full bg-blue-500 text-white shadow-lg transform scale-75 group-hover:scale-100 transition duration-300">
                    <Play className="w-6 h-6 fill-current" />
                  </div>
                </div>
                <span className="absolute top-4 left-4 text-xs font-semibold bg-blue-500/90 text-white px-2.5 py-1 rounded-full">
                  {tut.category}
                </span>
              </div>

              {/* Details */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {tut.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <BarChart className="w-3.5 h-3.5" /> {tut.level}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors leading-snug">
                    {tut.title}
                  </h3>
                  <p className="mt-3 text-gray-400 text-sm leading-relaxed line-clamp-2">
                    {tut.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-sm text-blue-400 font-semibold cursor-pointer group/btn">
                  <span>Start Learning</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

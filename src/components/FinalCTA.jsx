import { motion } from "framer-motion";
import { ArrowRight, MessageSquareText } from "lucide-react";
import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden flex items-center justify-center min-h-[70vh]">
      
      {/* Background Grid & Globe subtle effect */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#050505_80%)]" />
      </div>

      {/* Center Orbital Elements */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full border border-white/5 flex items-center justify-center"
        >
          {/* Animated Green Orbital Line (SVG) */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <motion.circle 
              cx="50" 
              cy="50" 
              r="49.5" 
              fill="none" 
              stroke="#10B981" 
              strokeWidth="0.5"
              strokeDasharray="150 160"
              animate={{ strokeDashoffset: [310, 0] }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]"
            />
          </svg>
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full shadow-[0_0_15px_#10B981]" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]">
            Your Business Has a Goal. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-green-400">
              Let's Build the Path to Get There.
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-400 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you need customers, technology, marketing or complete business growth — start with Macky’s Tech.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] hover:-translate-y-1 flex items-center justify-center text-lg"
            >
              Start Growing <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            
            <Link 
              to="/book-consultation" 
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full font-bold transition-all duration-300 backdrop-blur-md hover:-translate-y-1 flex items-center justify-center text-lg"
            >
              <MessageSquareText className="mr-2 w-5 h-5 text-gray-400" /> Talk to an Expert
            </Link>
          </div>
        </motion.div>
      </div>

    </section>
  );
}

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { categoriesData } from "../data/categoriesData";

export default function Packages() {
  // Convert categories object to array for mapping
  const categoryKeys = Object.keys(categoriesData);
  const [activeCategory, setActiveCategory] = useState(categoryKeys[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activePackages = categoriesData[activeCategory].packages;
  const activeTitle = categoriesData[activeCategory].hero.title;

  return (
    <div className="bg-[#060a12] min-h-screen pt-32 pb-24 font-sans text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight"
          >
            Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Pricing</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Select a service category below to view our detailed packages and pricing tiers. Start small or go enterprise.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categoryKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeCategory === key
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-500"
                  : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {categoriesData[key].hero.title}
            </button>
          ))}
        </div>

        {/* Active Category Header */}
        <motion.div
          key={`header-${activeCategory}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold text-cyan-400 uppercase tracking-widest">{activeTitle} Packages</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Pricing Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {activePackages.map((pkg, i) => (
              <div key={i} className={`relative p-8 rounded-[2rem] border flex flex-col transition-all duration-300 hover:-translate-y-2
                ${pkg.isPopular 
                  ? 'bg-[#0a1224] border-blue-500 shadow-[0_10px_40px_rgba(37,99,235,0.2)] z-10 scale-105' 
                  : 'bg-white/[0.02] border-white/10 hover:border-white/20'}`}>
                
                {pkg.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg border border-blue-400">
                    Most Popular
                  </div>
                )}
                
                <h3 className={`text-xl font-black mb-2 ${pkg.isPopular ? 'text-white' : 'text-gray-200'}`}>{pkg.name}</h3>
                <p className={`text-xs leading-relaxed mb-8 h-8 ${pkg.isPopular ? 'text-blue-200' : 'text-gray-500'}`}>{pkg.target}</p>
                
                <div className={`text-2xl font-black mb-8 pb-8 border-b ${pkg.isPopular ? 'text-white border-blue-500/30' : 'text-white border-white/10'}`}>
                  {pkg.price}
                </div>
                
                <ul className="space-y-4 mb-10 flex-1">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 shrink-0 ${pkg.isPopular ? 'text-blue-400' : 'text-gray-600'}`} />
                      <span className={`text-sm ${pkg.isPopular ? 'text-gray-200' : 'text-gray-400'}`}>{feat}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact" className={`w-full py-4 rounded-xl font-bold text-sm text-center transition-all flex items-center justify-center gap-2
                  ${pkg.isPopular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-white/5 text-white hover:bg-white/10'}`}>
                  {pkg.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}

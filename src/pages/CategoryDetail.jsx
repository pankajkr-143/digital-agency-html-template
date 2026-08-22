import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useSEO } from "../hooks/useSEO";
import { categoriesData } from "../data/categoriesData";
import * as Icons from "lucide-react";

const DynamicIcon = ({ name, className }) => {
  const IconComponent = Icons[name];
  return IconComponent ? <IconComponent className={className} /> : <Icons.Box className={className} />;
};

export default function CategoryDetail() {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Slug Aliases for SEO Solution URLs
  const SLUG_MAP = {
    "web-development": "it-services",
    "mobile-app-development": "it-services",
    "software-development": "it-services",
    "custom-software-development": "it-services",
    "saas-development": "it-services",
    "ecommerce-development": "it-services",
    "crm-development": "it-services",
    "erp-development": "it-services",
    "payment-integration": "payment-gateway",
  };

  const resolvedSlug = SLUG_MAP[slug] || slug;
  const data = categoriesData[resolvedSlug] || categoriesData["it-services"];

  // Generate Service & FAQ Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.hero.title,
    "description": data.metaDescription,
    "provider": {
      "@type": "Organization",
      "name": "Macky's Tech",
      "url": "https://www.mackystech.in"
    },
    "areaServed": "India",
    "serviceType": data.hero.eyebrow
  };

  const faqSchema = data.faq && data.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faq.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  } : null;

  useSEO({
    title: data.metaTitle,
    description: data.metaDescription,
    canonical: `https://www.mackystech.in/solutions/${slug}`,
    schema: faqSchema || serviceSchema
  });

  return (
    <div className="bg-[#060a12] min-h-screen pt-24 font-sans text-gray-300 selection:bg-blue-500/30 overflow-hidden">
      
      {/* 3. BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-20">
        <nav className="flex items-center text-xs font-semibold text-gray-500 tracking-wider uppercase">
          <Link to="/" className="hover:text-blue-400 transition-colors">HOME</Link>
          <span className="mx-3 text-gray-700">/</span>
          <span>SOLUTIONS</span>
          <span className="mx-3 text-gray-700">/</span>
          <span className="text-gray-300">{data.hero.title}</span>
        </nav>
      </div>

      {/* 4. CATEGORY HERO */}
      <section className="relative pt-12 pb-32">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/20 border border-blue-500/30 mb-8 backdrop-blur-md">
                <Icons.Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">
                  {data.hero.eyebrow}
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6">
                {data.hero.title.split(' ').map((word, i) => (
                  <span key={i} className={i % 2 !== 0 ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300" : ""}>
                    {word}{" "}
                  </span>
                ))}
              </h1>
              
              <h2 className="text-xl md:text-2xl font-semibold text-gray-300 mb-6 leading-snug">
                {data.hero.subheading}
              </h2>
              <p className="text-base text-gray-400 leading-relaxed mb-10 max-w-xl">
                {data.hero.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-full font-bold text-lg transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)] text-center flex items-center justify-center gap-3 group">
                  {data.hero.primaryCTA}
                  <Icons.ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="#packages" className="px-8 py-4 bg-white/5 backdrop-blur-md text-white border border-white/10 hover:border-white/30 rounded-full font-bold text-lg transition-all text-center hover:bg-white/10">
                  {data.hero.secondaryCTA}
                </a>
              </div>
            </motion.div>

            {/* Right Visual - Removed mix-blend-screen to prevent white squares if image is JPG */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative hidden lg:flex items-center justify-center h-[500px]">
              
              <motion.div
                animate={{ y: [-15, 15, -15] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative z-10 w-full flex justify-center"
              >
                <img src={data.hero.image} alt={data.hero.title} className="w-[85%] max-w-md h-auto drop-shadow-2xl" />
              </motion.div>
              
              {/* Floating Glass Cards */}
              {data.hero.floatingElements.map((el, idx) => (
                <motion.div
                  key={idx}
                  animate={{ y: [-10, 10, -10], rotate: [0, 2, -2, 0] }}
                  transition={{ repeat: Infinity, duration: 4 + idx, delay: idx * 0.5 }}
                  className={`absolute bg-gray-900/80 backdrop-blur-md px-5 py-2.5 rounded-xl shadow-2xl border border-white/10 text-sm font-bold text-cyan-300 flex items-center gap-2 z-20
                    ${idx === 0 ? 'top-10 left-0' : idx === 1 ? 'bottom-20 right-0' : idx === 2 ? 'top-32 right-0' : 'bottom-10 left-10'}`}
                >
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  {el.toUpperCase()}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. QUICK VALUE STRIP */}
      <div className="relative border-y border-white/5 bg-white/[0.02] backdrop-blur-sm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {data.valueStrip.map((value, i) => (
              <div key={i} className="flex items-center gap-3">
                <Icons.CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span className="font-semibold text-gray-300 tracking-wide text-sm">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 7. WHAT IS THIS SOLUTION? */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative rounded-[2rem] overflow-hidden group border border-white/10 bg-white/5 p-10 flex justify-center items-center">
              <img src={data.whatIs.image} alt="Overview" className="w-[80%] h-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500" />
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">{data.whatIs.heading}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-cyan-400 mb-3 uppercase tracking-widest"><Icons.Info className="w-4 h-4"/> What it means</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{data.whatIs.meaning}</p>
                </div>
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-cyan-400 mb-3 uppercase tracking-widest"><Icons.Target className="w-4 h-4"/> Why you need it</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{data.whatIs.whyNeed}</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-900/20 to-transparent border-l-2 border-blue-500 p-6 rounded-r-xl">
                <h3 className="text-sm font-bold text-cyan-400 mb-2 uppercase tracking-widest">Problems Solved</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{data.whatIs.problemsSolved}</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 8. WHAT WE PROVIDE (Service Ecosystem) - Removed circle background */}
      <section className="py-32 bg-[#020408] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Service Ecosystem</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">Everything you need under one scalable solution.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.services.map((svc, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-[#060a12] p-8 rounded-[2rem] border border-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all group flex flex-col items-start">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-500/30 text-cyan-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <DynamicIcon name={svc.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{svc.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">{svc.description}</p>
                <Link to="/contact" className="text-cyan-400 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all uppercase tracking-wider">
                  Explore <Icons.ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INDUSTRIES - Fixed Right Side Button & Cards */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Built for Industries</h2>
              <p className="text-lg text-gray-400">Tailored solutions for specific business sectors.</p>
            </div>
            <Link to="/contact" className="px-8 py-3 bg-white/5 border border-white/10 hover:border-white/30 rounded-full text-white font-semibold text-sm transition-all hover:bg-white/10 flex-shrink-0">
              View All Industries →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.industries.map((ind, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="p-8 bg-white/[0.02] border border-white/10 rounded-[2rem] hover:border-blue-500/50 hover:bg-white/[0.04] transition-all group">
                <DynamicIcon name={ind.icon} className="w-10 h-10 text-gray-500 group-hover:text-blue-400 mb-6 transition-colors" />
                <h3 className="text-lg font-bold text-white mb-3">{ind.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. PROBLEMS WE SOLVE - Fixed UI */}
      <section className="py-32 bg-[#020408] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Solve Real Business Problems</h2>
            <p className="text-lg text-gray-400">Select a challenge below to see how we tackle it.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            <div className="lg:col-span-5 space-y-4">
              {data.problems.map((prob, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`w-full text-left px-6 py-5 rounded-2xl font-bold text-sm md:text-base transition-all flex items-center justify-between border ${
                    activeTab === i 
                    ? 'bg-blue-600 border-blue-500 text-white shadow-lg' 
                    : 'bg-[#060a12] border-white/10 text-gray-400 hover:bg-white/5 hover:text-gray-200'
                  }`}
                >
                  {prob.title}
                  <Icons.ChevronRight className={`w-5 h-5 ${activeTab === i ? 'text-white' : 'text-gray-600'}`} />
                </button>
              ))}
            </div>

            <div className="lg:col-span-7 bg-[#060a12] border border-white/10 p-10 md:p-14 rounded-[2rem] h-full flex flex-col justify-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-6 block flex items-center gap-2">
                <Icons.CheckCircle className="w-4 h-4" /> Recommended Solution
              </span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-6">{data.problems[activeTab].solution}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-10">{data.problems[activeTab].desc}</p>
                  <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-bold hover:from-blue-500 hover:to-cyan-500 transition-all shadow-lg">
                    Implement Solution <Icons.ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* 11. FEATURES - More attractive UI */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Powerful Capabilities</h2>
            <p className="text-lg text-gray-400">Enterprise-grade features built directly into your solution.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.features.map((feat, i) => (
              <div key={i} className="flex flex-col p-8 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:bg-white/[0.05] transition-colors group">
                <div className="w-12 h-12 rounded-full bg-blue-900/30 border border-blue-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <DynamicIcon name={feat.icon} className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="font-bold text-white text-lg mb-3">{feat.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. PROCESS */}
      <section className="py-32 bg-[#020408] border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">From Requirement to Result</h2>
            <p className="text-lg text-gray-400">A streamlined process to ensure successful delivery.</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between relative gap-10 md:gap-4">
            <div className="hidden md:block absolute top-8 left-10 right-10 h-[1px] bg-white/10 -z-10" />
            {[
              { title: "Discover", desc: "Understand business goals." },
              { title: "Plan", desc: "Define strategy & scope." },
              { title: "Build", desc: "Design & implement." },
              { title: "Launch", desc: "Deploy & configure." },
              { title: "Grow", desc: "Monitor & scale." }
            ].map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center flex-1 group">
                <div className="w-16 h-16 bg-[#060a12] border-2 border-white/10 group-hover:border-blue-500 text-gray-500 group-hover:text-blue-400 rounded-full flex items-center justify-center font-black text-xl mb-6 transition-colors">
                  0{i + 1}
                </div>
                <h3 className="font-bold text-white mb-3 text-lg">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. PACKAGES - Fixed UI */}
      <section id="packages" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Choose the Right Plan</h2>
            <p className="text-lg text-gray-400">Start with what you need today and scale when your business grows.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.packages.map((pkg, i) => (
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
                      <Icons.CheckCircle2 className={`w-5 h-5 shrink-0 ${pkg.isPopular ? 'text-blue-400' : 'text-gray-600'}`} />
                      <span className={`text-sm ${pkg.isPopular ? 'text-gray-200' : 'text-gray-400'}`}>{feat}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact" className={`w-full py-4 rounded-xl font-bold text-sm text-center transition-all 
                  ${pkg.isPopular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-white/5 text-white hover:bg-white/10'}`}>
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 20. FAQ */}
      <section className="py-32 bg-[#020408] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {data.faq.map((faq, i) => (
              <details key={i} className="group bg-[#060a12] border border-white/5 p-6 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-gray-200 text-lg">
                  {faq.q}
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-open:bg-blue-500/20 group-open:text-cyan-400 transition-colors shrink-0 ml-4">
                    <Icons.Plus className="w-4 h-4 transition-transform group-open:rotate-45" />
                  </div>
                </summary>
                <p className="mt-6 text-gray-400 leading-relaxed text-sm pr-10 border-t border-white/5 pt-4">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 22. RELATED SOLUTIONS - Fixed UI */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white">Explore Related Solutions</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data.related.map((rel, i) => (
              <Link key={i} to={rel.path} className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-blue-500/40 hover:bg-white/[0.04] group flex flex-col justify-between transition-all h-full min-h-[140px]">
                <span className="font-bold text-gray-300 text-lg group-hover:text-white transition-colors">{rel.title}</span>
                <div className="flex items-center gap-2 text-sm text-blue-500 font-bold mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  View Solution <Icons.ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

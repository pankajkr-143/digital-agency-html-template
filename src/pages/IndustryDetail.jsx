import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useSEO } from "../hooks/useSEO";
import Breadcrumbs from "../components/Breadcrumbs";
import { industriesData } from "../data/industriesData";
import {
  Building, GraduationCap, Stethoscope, ShoppingBag, HardHat,
  Truck, Car, Utensils, Rocket, Cloud, ArrowRight, Sparkles, CheckCircle2,
  HelpCircle, ChevronDown, ChevronRight, Layers, Target, ShieldCheck
} from "lucide-react";

export default function IndustryDetail() {
  const { slug } = useParams();
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const data = industriesData[slug] || industriesData["education"];

  const industryName = slug ? slug.replace("-", " ").toUpperCase() : "EDUCATION";

  // Generate Service & FAQ Schema for Industry
  const industrySchema = {
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
    "serviceType": `${industryName} Industry Solution`
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
    canonical: `https://www.mackystech.in/industries/${slug}`,
    schema: faqSchema || industrySchema
  });

  return (
    <div className="bg-[#050505] min-h-screen pt-24 text-gray-300 font-sans selection:bg-purple-500/30">
      <Breadcrumbs items={[
        { label: "Industries", path: "/industries" },
        { label: industryName }
      ]} />

      {/* HERO SECTION */}
      <section className="relative py-16 overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div data-aos="fade-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6">
                <Sparkles size={14} /> {data.hero.eyebrow}
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                {data.hero.title}
              </h1>
              <h2 className="text-xl font-semibold text-purple-300 mb-6">
                {data.hero.subheading}
              </h2>
              <p className="text-base text-gray-400 leading-relaxed mb-8">
                {data.hero.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link to="/contact" className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] flex items-center gap-2">
                  {data.hero.primaryCTA} <ArrowRight size={18} />
                </Link>
                <Link to="/book-consultation" className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-full transition-all">
                  Book Industry Consultation
                </Link>
              </div>
            </div>

            <div className="relative h-[380px] lg:h-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl" data-aos="fade-left">
              <img src={data.hero.image} alt={data.hero.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            </div>

          </div>
        </div>
      </section>

      {/* VALUE STRIP */}
      <section className="py-6 bg-[#090909] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {data.valueStrip.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-xs font-semibold text-gray-300 uppercase tracking-wider">
                <CheckCircle2 size={16} className="text-purple-400" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW & PROBLEMS SOLVED */}
      <section className="py-20 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{data.overview.heading}</h2>
            <p className="text-base text-gray-400 leading-relaxed mb-6">{data.overview.meaning}</p>
            <p className="text-base text-gray-400 leading-relaxed">{data.overview.whyNeed}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-[#0c0c0c] border border-red-500/20 rounded-3xl">
              <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                <span>✕</span> Common Industry Challenges
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">{data.overview.problemsSolved}</p>
            </div>

            <div className="p-8 bg-[#0c0c0c] border border-purple-500/30 rounded-3xl">
              <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                <span>✓</span> How Macky's Tech Solves It
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">{data.overview.howWeHelp}</p>
            </div>
          </div>
        </div>
      </section>

      {/* RECOMMENDED SOLUTIONS */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Recommended Software & Growth Solutions</h2>
            <p className="text-gray-400">Tailored technology components for {industryName}.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.solutions.map((sol, i) => (
              <div key={i} className="p-6 bg-[#0c0c0c] border border-white/5 rounded-2xl hover:border-purple-500/30 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
                    <Sparkles size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{sol.name}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-6">{sol.desc}</p>
                </div>
                <Link to="/contact" className="text-xs font-bold text-purple-400 hover:text-purple-300 flex items-center gap-1">
                  Enquire Solution <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-20 bg-[#080808] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Use Cases in {industryName}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {data.useCases.map((uc, i) => (
              <div key={i} className="p-8 bg-[#0c0c0c] border border-white/5 rounded-3xl">
                <div className="text-xs font-bold text-purple-400 mb-2 uppercase tracking-wider">Use Case 0{i + 1}</div>
                <h3 className="text-xl font-bold text-white mb-3">{uc.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      {data.faq && data.faq.length > 0 && (
        <section className="py-20 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {data.faq.map((item, i) => (
                <div key={i} className="bg-[#0c0c0c] border border-white/5 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full p-6 text-left flex items-center justify-between font-bold text-white focus:outline-none"
                  >
                    {item.q}
                    <ChevronDown size={20} className={`text-gray-500 transition-transform ${activeFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {activeFaq === i && (
                    <div className="px-6 pb-6 text-sm text-gray-400 border-t border-white/5 pt-4 leading-relaxed">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELATED INDUSTRIES / SOLUTIONS */}
      {data.related && data.related.length > 0 && (
        <section className="py-16 bg-[#080808] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-xl font-bold text-white mb-8 text-center">Related Solutions & Services</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {data.related.map((rel, i) => (
                <Link key={i} to={rel.path} className="p-6 bg-[#0c0c0c] border border-white/5 rounded-2xl hover:border-purple-500/30 flex items-center justify-between group">
                  <span className="font-bold text-white text-sm">{rel.title}</span>
                  <ArrowRight size={16} className="text-gray-500 group-hover:text-purple-400 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-b from-[#080808] to-purple-900/10 border-t border-white/5 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Grow Your {industryName} Business?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Get a customized strategy proposal for software, leads, and automation.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full transition-all">
            Request {industryName} Proposal <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

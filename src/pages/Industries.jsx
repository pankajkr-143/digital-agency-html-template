import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";
import Breadcrumbs from "../components/Breadcrumbs";
import { industriesData } from "../data/industriesData";
import {
  Building, GraduationCap, Stethoscope, ShoppingBag, HardHat,
  Truck, Car, Utensils, Rocket, Cloud, ArrowRight, Sparkles, CheckCircle2
} from "lucide-react";

export default function Industries() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: "Industry Specific Software & Growth Solutions | Macky's Tech",
    description: "Discover tailored technology, software development, automation, and lead generation solutions built specifically for Education, Healthcare, Real Estate, E-Commerce, Construction, and 12+ industries.",
    canonical: "https://www.mackystech.in/industries"
  });

  const industryIcons = {
    education: GraduationCap,
    healthcare: Stethoscope,
    "real-estate": Building,
    construction: HardHat,
    ecommerce: ShoppingBag,
    retail: ShoppingBag,
    hospitality: Building,
    travel: Truck,
    transportation: Car,
    restaurants: Utensils,
    startups: Rocket,
    saas: Cloud
  };

  return (
    <div className="bg-[#050505] min-h-screen pt-24 text-gray-300 font-sans selection:bg-purple-500/30">
      <Breadcrumbs items={[{ label: "Industries" }]} />

      {/* HERO SECTION */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles size={14} /> INDUSTRY SPECIFIC EXCELLENCE
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Tailored Technology & Growth <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">For Your Industry</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            Generic software doesn't solve specific industry problems. Explore custom software architectures, targeted lead campaigns, and automation workflows engineered for your sector.
          </p>
        </div>
      </section>

      {/* INDUSTRIES GRID */}
      <section className="py-16 border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.keys(industriesData).map((slug, i) => {
              const ind = industriesData[slug];
              const Icon = industryIcons[slug] || Building;

              return (
                <div key={i} className="p-8 bg-[#0c0c0c] border border-white/5 rounded-3xl hover:border-purple-500/40 hover:bg-[#111] transition-all group flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                      <Icon size={28} />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-3">{ind.hero.title.replace("Technology & Growth for ", "").replace("Growth & Technology Solutions", "")}</h2>
                    <p className="text-xs text-gray-400 leading-relaxed mb-6">{ind.hero.subheading}</p>

                    <div className="space-y-2 mb-8">
                      {ind.valueStrip.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-300 font-medium">
                          <CheckCircle2 size={14} className="text-purple-400 shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link to={`/industries/${slug}`} className="inline-flex items-center justify-between py-3 px-5 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/40 text-white font-bold text-xs transition-all group-hover:bg-purple-600">
                    <span>Explore {slug.replace("-", " ").toUpperCase()} Solutions</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-b from-[#080808] to-purple-900/10 border-t border-white/5 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Don't See Your Exact Industry?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">We build custom digital solutions tailored to any unique business model.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all">
            Discuss Your Custom Industry Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

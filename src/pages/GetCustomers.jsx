import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Search, Target, TrendingUp, Users, Shield, MapPin, 
  Code, ShoppingBag, BookOpen, HeartPulse, Building, Database,
  CheckCircle2, ChevronRight, Filter,
  ArrowRight, ChevronDown, CheckCircle,
  Globe, Clock3, SearchCheck, Layout
} from "lucide-react";

export default function GetCustomers() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const [formStatus, setFormStatus] = useState("idle");
  const [activeFaq, setActiveFaq] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitted");
    setTimeout(() => setFormStatus("idle"), 5000);
  };

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const faqs = [
    { q: "How are leads sourced?", a: "We use a combination of proprietary targeting, multi-channel marketing campaigns, industry databases, and digital outreach to identify businesses actively looking for your specific solutions." },
    { q: "What industries are available?", a: "We cover almost all major sectors including Technology, Real Estate, Healthcare, Education, E-commerce, Retail, and specialized B2B services. If your industry is highly niche, we offer custom campaigns." },
    { q: "Can I request leads for a specific city?", a: "Yes. Our campaigns can be highly localized, targeting specific cities, states, or regions across India and globally." },
    { q: "Can I target international markets?", a: "Yes. We offer international business opportunities targeting regions like the USA, UK, Canada, UAE, Singapore, and Australia." },
    { q: "Can I request B2B leads?", a: "Absolutely. B2B lead generation is one of our core strengths. We can connect you with business owners, procurement managers, and decision-makers." },
    { q: "Can I request B2C leads?", a: "Yes. We can generate direct-to-consumer leads based on demographics, interests, and buying intent." },
    { q: "Can I request custom leads?", a: "Yes, our Custom requirement builder allows you to specify exact criteria, and we will build a tailored campaign pipeline for you." },
    { q: "How are leads delivered?", a: "Leads can be delivered via our secure dashboard, email, or integrated directly into your existing CRM system for immediate sales follow-up." },
    { q: "How is lead relevance evaluated?", a: "We apply rigorous screening to ensure the prospect's requirement matches the services or products you offer before passing them to your pipeline." },
    { q: "Are customers guaranteed?", a: "No. Leads are business opportunities/prospects, not guaranteed sales. Conversion depends on the prospect, offer, market, and your sales process." },
  ];

  return (
    <div className="bg-[#050505] min-h-screen text-gray-300 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.15),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.15),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div data-aos="fade-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold tracking-wide uppercase mb-6">
                <Target size={16} /> MACKY'S TECH — GET CUSTOMERS
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
                Find the Right Customers. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-green-400">Grow Your Business.</span>
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-xl">
                Discover relevant business opportunities, B2B and B2C prospects, industry-specific leads and customer enquiries designed to help your sales team build a stronger pipeline.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <a href="#packages" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all hover:scale-105 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  Explore Lead Solutions <ArrowRight size={18} />
                </a>
                <a href="#custom-lead" className="px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2">
                  Request Custom Leads
                </a>
              </div>
              
              <div className="mt-12 text-sm text-gray-500 flex items-center gap-2">
                <Shield size={16} className="text-green-500 shrink-0" />
                <span>Verified Opportunities. No Guaranteed Conversions. Pure Business Potential.</span>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center" data-aos="fade-left" data-aos-delay="200">
              <div className="absolute w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" />
              
              {/* Floating Orbiting Elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-white/10 rounded-full border-dashed animate-[spin_30s_linear_infinite]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-white/5 rounded-full border-dashed animate-[spin_40s_linear_infinite_reverse]" />
              
              <div className="absolute z-20 flex flex-col items-center justify-center bg-[#0c0c0c] border border-white/10 w-40 h-40 rounded-full shadow-[0_0_50px_rgba(37,99,235,0.2)]">
                 <Target size={48} className="text-blue-500 mb-2"/>
                 <span className="text-xs font-bold text-white tracking-widest uppercase">Target</span>
              </div>

              {/* Floating Cards */}
              <div className="absolute top-10 left-0 p-4 bg-[#111]/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl animate-[bounce_4s_infinite]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400"><Users size={20}/></div>
                  <div>
                    <div className="text-white text-sm font-bold">Customer Profiles</div>
                    <div className="text-xs text-blue-300">Targeted</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-20 right-0 p-4 bg-[#111]/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl animate-[bounce_5s_infinite_reverse]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400"><TrendingUp size={20}/></div>
                  <div>
                    <div className="text-white text-sm font-bold">Sales Pipeline</div>
                    <div className="text-xs text-emerald-300">Growing</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-32 right-10 p-3 bg-[#111]/80 backdrop-blur-md border border-white/10 rounded-full shadow-2xl animate-[bounce_6s_infinite]">
                <MapPin size={24} className="text-red-400"/>
              </div>

              <div className="absolute bottom-32 left-10 p-3 bg-[#111]/80 backdrop-blur-md border border-white/10 rounded-full shadow-2xl animate-[bounce_7s_infinite_reverse]">
                <Database size={24} className="text-purple-400"/>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CUSTOMER NEED SELECTOR */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Who Are You Looking to Reach?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { icon: Code, title: "Software Buyers", desc: "Businesses looking for software, websites, apps and digital solutions.", target: "B2B / Tech" },
              { icon: MapPin, title: "Indian Business Clients", desc: "Business prospects across Indian cities, industries and business segments.", target: "Pan-India B2B" },
              { icon: Globe, title: "International Clients", desc: "Business opportunities for companies targeting international markets.", target: "Global B2B" },
              { icon: ShoppingBag, title: "E-commerce Customers", desc: "Customer and business opportunities for online sellers and e-commerce businesses.", target: "B2B / B2C" },
              { icon: TrendingUp, title: "Digital Marketing Clients", desc: "Businesses looking for SEO, advertising, social media and digital growth services.", target: "B2B" },
              { icon: BookOpen, title: "Coaching & Institute Leads", desc: "Students, parents, institutes and education-related business opportunities.", target: "B2C / B2B" },
              { icon: Building, title: "B2B Leads", desc: "Businesses looking to buy products, services or solutions.", target: "B2B" },
              { icon: Users, title: "B2C Leads", desc: "End customers looking for products or services.", target: "B2C" },
              { icon: HeartPulse, title: "Medical & Pharmacy", desc: "Relevant healthcare, pharmacy and medical-business opportunities where legally and appropriately sourced.", target: "B2B / B2C" },
              { icon: Search, title: "Custom Business Leads", desc: "Custom lead requirements based on industry, geography, audience and business objective.", target: "Custom" }
            ].map((card, idx) => (
              <div key={idx} className="group flex flex-col p-6 bg-[#111] border border-white/5 rounded-2xl hover:bg-[#151515] hover:border-blue-500/30 transition-all duration-300" data-aos="fade-up" data-aos-delay={(idx % 4) * 50}>
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                  <card.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-sm text-gray-400 mb-6 flex-1">{card.desc}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs font-medium text-gray-500 bg-white/5 px-2 py-1 rounded">{card.target}</span>
                  <button className="text-blue-400 font-medium text-sm flex items-center gap-1 group-hover:text-blue-300">
                    Explore <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD CATEGORIES ECOSYSTEM */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">Lead Categories Ecosystem</h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {[
              "B2B Business Leads", "B2C Customer Leads", "Local Business Leads", "City-Wise Leads", 
              "State-Wise Leads", "Industry-Wise Leads", "Niche Leads", "E-commerce Leads", 
              "Software Buyer Leads", "SaaS Buyer Leads", "Digital Marketing Leads", "Education Leads", 
              "Coaching Leads", "Real Estate Leads", "Construction Leads", "Healthcare Business Leads", 
              "Retail Leads", "Hospitality Leads", "Travel Leads", "Automotive Leads", 
              "Cab/Mobility Leads", "Professional Service Leads", "Custom Lead Campaigns"
            ].map((tag, i) => (
              <div key={i} className="px-5 py-3 rounded-full border border-white/10 bg-[#0a0a0a] text-gray-300 text-sm hover:border-blue-500 hover:bg-blue-500/5 hover:text-white transition-all cursor-default">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOFTWARE & IT CLIENT LEADS & INTERNATIONAL */}
      <section className="py-24 bg-[#080808] border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
            
            {/* Software Clients */}
            <div className="p-8 md:p-12 bg-gradient-to-br from-blue-900/20 to-[#111] border border-blue-500/20 rounded-3xl relative overflow-hidden group" data-aos="fade-right">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"><Code size={120}/></div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 relative z-10">Looking for Clients for Your Software Business?</h3>
              <p className="text-gray-400 mb-8 relative z-10">Macky's Tech can help you discover relevant opportunities for:</p>
              
              <ul className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm text-gray-300 mb-10 relative z-10">
                {["Website development", "Mobile app development", "Custom software", "SaaS", "CRM", "ERP", "AI solutions", "E-commerce", "Food delivery", "LMS", "School management", "Healthcare software", "FinTech software", "Marketplace platforms", "Booking platforms", "Business automation"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 truncate"><CheckCircle2 size={14} className="text-blue-500 shrink-0"/> {item}</li>
                ))}
              </ul>
              <button className="relative z-10 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all flex items-center gap-2">
                Find Software Business Opportunities <ArrowRight size={16}/>
              </button>
            </div>

            {/* International Clients */}
            <div className="p-8 md:p-12 bg-gradient-to-bl from-emerald-900/20 to-[#111] border border-emerald-500/20 rounded-3xl relative overflow-hidden group" data-aos="fade-left">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"><Globe size={120}/></div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 relative z-10">Take Your Business Beyond India</h3>
              <p className="text-gray-400 mb-8 relative z-10">International campaigns can be configured according to country, industry, business type, requirement, customer profile, and campaign objective.</p>
              
              <div className="flex flex-wrap gap-2 mb-10 relative z-10">
                {["USA", "UK", "Canada", "Australia", "UAE", "Saudi Arabia", "Singapore", "Europe", "Other international markets"].map((country, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300">{country}</span>
                ))}
              </div>
              <button className="relative z-10 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl transition-all flex items-center gap-2">
                Plan International Lead Campaign <ArrowRight size={16}/>
              </button>
              <p className="text-xs text-gray-500 mt-4 relative z-10">* International campaigns are subject to availability. No guaranteed clients.</p>
            </div>

          </div>
        </div>
      </section>

      {/* LEAD MARKETPLACE UI DASHBOARD */}
      <section className="py-24 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="bg-[#0c0c0c] border border-white/10 rounded-2xl shadow-2xl overflow-hidden" data-aos="fade-up">
            {/* Dashboard Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#111]">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-sm text-gray-400 font-bold tracking-widest">AVAILABLE BUSINESS OPPORTUNITIES</div>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Filter size={16} /> <span className="text-sm">Filter</span>
              </div>
            </div>
            
            {/* Dashboard Content */}
            <div className="p-6 bg-[#0c0c0c]">
              <div className="flex gap-2 mb-6 text-xs text-gray-500">
                <span>Industry</span> • <span>Location</span> • <span>Lead Type</span> • <span>Requirement</span> • <span>Date</span> • <span>Status</span>
              </div>
              <div className="space-y-4">
                {[
                  { type: "Software Buyer", loc: "Bhopal, India", req: "Business Website", status: "Relevant Opportunity", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                  { type: "Digital Marketing", loc: "Indore, India", req: "Lead Generation", status: "New", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
                  { type: "E-commerce", loc: "Delhi, India", req: "Marketing Support", status: "New", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" }
                ].map((row, i) => (
                  <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-[#111] border border-white/5 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
                    <div className="flex items-start md:items-center gap-4 mb-4 md:mb-0">
                      <div>
                        <div className="text-white font-bold text-lg">{row.type}</div>
                        <div className="text-sm text-gray-400 flex items-center gap-1 mt-1"><MapPin size={14}/> {row.loc}</div>
                      </div>
                    </div>
                    <div className="text-left md:text-right">
                      <div className="text-sm text-gray-300 mb-2">Requirement: <span className="font-semibold text-white">{row.req}</span></div>
                      <div className={`inline-block px-3 py-1 rounded-full border text-xs font-bold ${row.bg} ${row.color} ${row.border}`}>{row.status}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all">
                  Explore Available Opportunities →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOM LEAD BUILDER FORM */}
      <section id="custom-lead" className="py-24 bg-[#111] border-t border-white/5">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Tell Us Which Customers You Need</h2>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6 bg-[#0a0a0a] p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl" data-aos="fade-up" data-aos-delay="100">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Business Type</label>
                <input type="text" required className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="e.g. IT Agency" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Industry</label>
                <input type="text" required className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="e.g. Real Estate" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Target Customer</label>
                <select className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors">
                  <option>B2B</option>
                  <option>B2C</option>
                  <option>Both</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Country</label>
                <input type="text" required className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Country" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">State</label>
                <input type="text" className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="State" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">City</label>
                <input type="text" className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="City" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Preferred Lead Volume</label>
                <input type="text" className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="e.g. 50/month" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Budget</label>
                <input type="text" className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Expected Budget" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Timeline</label>
              <input type="text" className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="e.g. Immediate, Next Month" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Additional Requirements</label>
              <textarea rows="4" className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Describe your ideal prospect in detail..."></textarea>
            </div>
            
            {formStatus === "idle" ? (
              <button type="submit" className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                Create My Lead Requirement →
              </button>
            ) : (
              <div className="w-full py-4 bg-green-500/10 text-green-400 font-bold rounded-xl text-center border border-green-500/20 flex items-center justify-center gap-2">
                <CheckCircle size={20} /> Your requirement has been received. Our team will review the targeting criteria and contact you with available options.
              </div>
            )}
          </form>
        </div>
      </section>

      {/* LEAD PACKAGES */}
      <section id="packages" className="py-24 bg-[#050505] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              { name: "STARTER", desc: "For testing a new market.", features: ["Small lead allocation", "Basic targeting", "Standard support", "Basic reporting"], glow: "hover:border-gray-400" },
              { name: "GROWTH", desc: "For businesses actively acquiring customers.", features: ["Larger lead allocation", "Industry targeting", "Location targeting", "Campaign support", "Reporting"], glow: "hover:border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.1)] border-blue-500/30" },
              { name: "SCALE", desc: "For established sales teams.", features: ["High-volume campaigns", "Advanced targeting", "Multiple markets", "Sales support", "Advanced reporting"], glow: "hover:border-purple-500" },
              { name: "CUSTOM", desc: "For enterprise requirements.", features: ["Custom volume", "Custom industry", "Custom geography", "Custom campaign", "Dedicated support"], glow: "hover:border-emerald-500" },
            ].map((pkg, i) => (
              <div key={i} className={`bg-[#0c0c0c] p-8 rounded-3xl border border-white/10 transition-all duration-300 ${pkg.glow} flex flex-col group`} data-aos="fade-up" data-aos-delay={i * 100}>
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-sm text-gray-400 mb-8 min-h-[40px]">{pkg.desc}</p>
                
                <div className="text-3xl font-bold text-white mb-8 pb-8 border-b border-white/10">Custom Quote</div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-gray-300">
                      <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl transition-colors mt-auto">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD QUALITY / VERIFICATION */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <Shield size={64} className="mx-auto text-blue-500 mb-8" data-aos="zoom-in" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8" data-aos="fade-up">Built Around Better Lead Quality</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left" data-aos="fade-up" data-aos-delay="100">
            {[
              "Source screening",
              "Duplicate handling",
              "Relevance checks",
              "Contact validation where applicable",
              "Lead categorization",
              "Campaign-specific targeting",
              "Reporting"
            ].map((item, i) => (
              <div key={i} className="p-4 bg-[#111] border border-white/5 rounded-xl flex items-center gap-3">
                <CheckCircle size={16} className="text-blue-500 shrink-0"/>
                <span className="text-gray-300 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-12 text-gray-500 text-sm bg-blue-500/5 p-4 rounded-xl border border-blue-500/10 inline-block" data-aos="fade-up" data-aos-delay="200">
            * Note: We provide business opportunities and prospects. Not every lead is guaranteed to convert.
          </p>
        </div>
      </section>

      {/* WHO CAN USE THIS? */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white">Who Can Use This?</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" data-aos="fade-up" data-aos-delay="100">
            {[
              "Software Companies", "Digital Agencies", "SaaS Companies", "Real Estate", 
              "Construction", "Education", "Coaching Institutes", "Healthcare Businesses", 
              "E-commerce", "Retail", "Hospitality", "Automotive", "Travel", 
              "Professional Services", "B2B Companies", "Local Businesses", "Startups", "Enterprises"
            ].map((industry, i) => (
              <div key={i} className="p-4 bg-[#0c0c0c] border border-white/5 rounded-2xl text-center hover:bg-[#111] hover:border-white/20 transition-colors">
                <span className="text-sm font-semibold text-gray-300">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS / PIPELINE */}
      <section className="py-32 bg-[#080808] border-y border-white/5 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">How It Works</h2>
          </div>

          <div className="relative mb-32" data-aos="fade-up" data-aos-delay="100">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/5 -translate-y-1/2 hidden lg:block" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
              {[
                { step: "01", title: "Tell Us Your Target" },
                { step: "02", title: "We Define the Audience" },
                { step: "03", title: "Campaign / Lead Sourcing" },
                { step: "04", title: "Review & Validation" },
                { step: "05", title: "Delivery" },
                { step: "06", title: "Sales Follow-Up" }
              ].map((item, i) => (
                <div key={i} className="text-center relative">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-[#111] border-2 border-blue-500/30 rounded-full flex items-center justify-center text-lg md:text-xl font-bold text-white mb-4 relative z-10 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-white text-sm md:text-base px-2">{item.title}</h4>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12 hidden lg:block">
              <p className="inline-flex items-center gap-3 text-lg font-bold text-gray-400 bg-[#111] py-3 px-8 rounded-full border border-white/5 shadow-xl">
                Target <ArrowRight size={16} className="text-blue-500"/> Discover <ArrowRight size={16} className="text-blue-500"/> Validate <ArrowRight size={16} className="text-blue-500"/> Deliver <ArrowRight size={16} className="text-blue-500"/> Contact <ArrowRight size={16} className="text-blue-500"/> Convert
              </p>
            </div>
          </div>

          {/* Sales Pipeline Funnel visual */}
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-white mb-12">Sales Pipeline</h3>
            
            <div className="flex flex-col items-center gap-2">
              <div className="w-full max-w-[600px] py-4 bg-blue-500/10 border border-blue-500/20 rounded-t-2xl font-bold text-blue-400">Lead</div>
              <div className="w-1 h-6 bg-white/10" />
              <div className="w-full max-w-[500px] py-4 bg-white/5 border border-white/10 font-medium text-gray-300">Contact</div>
              <div className="w-1 h-6 bg-white/10" />
              <div className="w-full max-w-[400px] py-4 bg-white/5 border border-white/10 font-medium text-gray-300">Conversation</div>
              <div className="w-1 h-6 bg-white/10" />
              <div className="w-full max-w-[300px] py-4 bg-white/5 border border-white/10 font-medium text-gray-300">Qualified Prospect</div>
              <div className="w-1 h-6 bg-white/10" />
              <div className="w-full max-w-[200px] py-4 bg-white/5 border border-white/10 font-medium text-gray-300">Proposal</div>
              <div className="w-1 h-6 bg-white/10" />
              <div className="w-full max-w-[150px] py-4 bg-green-500/10 border border-green-500/20 rounded-b-2xl font-bold text-green-400">Customer</div>
            </div>

            <p className="mt-8 text-sm text-gray-500 bg-[#111] p-4 rounded-xl border border-white/5">
              Macky’s Tech provides opportunities/leads; final conversion depends on the business's sales process and market conditions.
            </p>
          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: SearchCheck, title: "Find Relevant Prospects" },
              { icon: Globe, title: "Expand Market Reach" },
              { icon: Clock3, title: "Save Prospecting Time" },
              { icon: Layout, title: "Target Specific Industries" },
              { icon: MapPin, title: "Reach New Locations" },
              { icon: TrendingUp, title: "Build a Stronger Sales Pipeline" },
            ].map((b, i) => (
              <div key={i} className="p-8 bg-[#111] border border-white/5 rounded-3xl flex flex-col items-center text-center group hover:border-blue-500/30 transition-colors" data-aos="fade-up" data-aos-delay={i * 50}>
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                  <b.icon size={32} />
                </div>
                <h4 className="text-xl font-bold text-white">{b.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden transition-all">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-white focus:outline-none"
                >
                  {faq.q}
                  <ChevronDown size={20} className={`text-gray-500 transition-transform ${activeFaq === i ? "rotate-180" : ""}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === i ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className={`text-sm ${i === faqs.length - 1 ? "text-blue-400 font-medium" : "text-gray-400"}`}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-gradient-to-b from-[#050505] to-blue-900/10 text-center relative overflow-hidden">
        <div className="max-w-[1000px] mx-auto px-6 relative z-10" data-aos="zoom-in">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Tell Us Who You Want to Reach. <br/>We'll Help You Build the Right Customer Acquisition Strategy.</h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <a href="#custom-lead" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all">
              Request Leads →
            </a>
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all">
              Talk to an Expert
            </Link>
            <a href="#custom-lead" className="w-full sm:w-auto px-8 py-4 bg-[#111] border border-white/20 text-white font-bold rounded-full hover:bg-[#222] transition-all">
              Build Custom Requirement
            </a>
          </div>
        </div>
      </section>
      
    </div>
  );
}

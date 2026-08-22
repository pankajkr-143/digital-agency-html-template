import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  TrendingUp, BarChart3, Users, Zap, Target,
  MessageCircle, Settings, ArrowRight, LineChart,
  PieChart, Activity, CheckCircle2, Globe, Code2,
  HeartPulse, ShoppingBag, Building, BookOpen, Car,
  Plane, Store, CheckCircle, ChevronDown, Star, Bot,
  Megaphone, UserCheck
} from "lucide-react";

export default function ScaleYourBusiness() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const [activeStep, setActiveStep] = useState(1);
  const [calculatorAnswers, setCalculatorAnswers] = useState({ goal: "", market: "" });
  const [activeIndustry, setActiveIndustry] = useState("Real Estate");
  const [activeFaq, setActiveFaq] = useState(null);

  const handleCalcNext = (step, key, value) => {
    setCalculatorAnswers(prev => ({ ...prev, [key]: value }));
    setActiveStep(step + 1);
  };

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const industries = [
    "Real Estate", "Education", "Healthcare", "E-commerce", "Construction",
    "Software Companies", "Coaching", "Hospitality", "Cab & Mobility",
    "Retail", "Professional Services", "Startups"
  ];

  const industryDetails = {
    "Real Estate": "Leads + Marketing + CRM + Sales pipeline for builders and brokers.",
    "Education": "Admissions + Student Leads + Marketing + CRM + WhatsApp automation for institutes.",
    "Healthcare": "Patient acquisition + digital presence + appointment booking + communication systems.",
    "E-commerce": "Performance marketing + customer acquisition + retargeting + retention systems.",
    "Construction": "Business leads + digital marketing + CRM + project management tools.",
    "Software Companies": "B2B leads + international campaigns + sales systems + CRM.",
    "Coaching": "Student enquiries + campaigns + WhatsApp automation + CRM + admissions.",
    "Hospitality": "Bookings + marketing + customer retention + reputation management.",
    "Cab & Mobility": "Customer acquisition + driver ecosystem + operations + marketing.",
    "Retail": "Local marketing + customer acquisition + loyalty + CRM.",
    "Professional Services": "Lead generation + website + digital marketing + sales systems.",
    "Startups": "Technology + marketing + growth strategy + customer acquisition."
  };

  const faqs = [
    { q: "How can Macky's Tech help my business grow?", a: "We combine digital marketing, lead generation, CRM, automation, and technology into one integrated growth system designed around your business goals." },
    { q: "Do you provide digital marketing?", a: "Yes. We offer SEO, Google Ads, Meta Ads, social media marketing, performance marketing, local marketing, content, and conversion optimization." },
    { q: "Can you generate business leads?", a: "Yes. We generate B2B and B2C leads, local leads, industry-specific leads, and custom campaign leads based on your targeting criteria." },
    { q: "Can you build a CRM?", a: "Yes. We can build or deploy a custom CRM tailored to your sales pipeline, customer management, and reporting needs." },
    { q: "Can you automate WhatsApp follow-ups?", a: "Yes. We set up WhatsApp automation for follow-ups, notifications, lead assignment, and customer communication." },
    { q: "Can you help with sales?", a: "Yes. We work on sales strategy, pipeline setup, lead follow-up systems, appointment setting, and CRM to improve your conversion rate." },
    { q: "Can you build custom software?", a: "Yes. Our BUILD TECHNOLOGY division designs and develops websites, mobile apps, SaaS platforms, CRM, ERP, and custom software solutions." },
    { q: "Can you target international markets?", a: "Yes. We can configure marketing and lead generation campaigns for international markets including USA, UK, Canada, UAE, Australia, and more." },
    { q: "How do growth packages work?", a: "Growth packages are structured plans that combine relevant services based on your business size, goals, and budget. You can also request a fully custom package." },
    { q: "Can I create a custom package?", a: "Absolutely. Our Enterprise and Custom options allow us to build a completely bespoke growth strategy around your exact requirements." },
    { q: "Do you guarantee sales or revenue?", a: "No. Growth services are designed to improve opportunities, systems and execution. Actual business results depend on the business, market, offer, budget, execution and other factors." },
  ];

  return (
    <div className="bg-[#050505] min-h-screen text-gray-300 font-sans selection:bg-green-500/30 overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-16 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_60%)] pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold tracking-wide uppercase mb-6">
              <TrendingUp size={16} /> MACKY'S TECH — BUSINESS GROWTH
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Scale Your Business.<br />
              Reach More Customers.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400">Grow Smarter.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
              Combine digital marketing, sales systems, customer acquisition, automation, CRM and technology into one growth strategy built around your business.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#strategy-builder" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2">
                Build My Growth Plan <ArrowRight size={18} />
              </a>
              <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-all">
                Talk to a Growth Expert
              </Link>
            </div>
          </div>
          
          {/* 3D Growth Ecosystem Visual */}
          <div className="mt-20 relative h-[400px] w-full max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            <div className="absolute inset-0 flex items-end justify-center">
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent absolute bottom-0" />
              
              {/* Growth Graph SVG */}
              <svg className="w-full h-full text-green-500/20 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]" viewBox="0 0 1000 400" preserveAspectRatio="none">
                <path d="M0 400 Q 200 300 400 350 T 700 200 T 1000 50" fill="none" stroke="currentColor" strokeWidth="4" className="animate-[pulse_3s_infinite]" />
                <path d="M0 400 Q 200 300 400 350 T 700 200 T 1000 50 L 1000 400 L 0 400 Z" fill="url(#grad)" />
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(16,185,129,0.2)" />
                    <stop offset="100%" stopColor="rgba(16,185,129,0)" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating Cards */}
              <div className="absolute top-20 left-10 p-4 bg-[#111] border border-white/10 rounded-xl shadow-2xl animate-[bounce_5s_infinite]">
                <div className="flex items-center gap-3"><Users size={20} className="text-blue-400"/> <span className="text-white font-bold">New Customers</span></div>
              </div>
              <div className="absolute top-10 right-20 p-4 bg-[#111] border border-white/10 rounded-xl shadow-2xl animate-[bounce_4s_infinite_reverse]">
                <div className="flex items-center gap-3"><LineChart size={20} className="text-green-400"/> <span className="text-white font-bold">Growing Pipeline</span></div>
              </div>
              <div className="absolute bottom-24 left-1/4 p-4 bg-[#111] border border-white/10 rounded-xl shadow-2xl animate-[bounce_6s_infinite]">
                <div className="flex items-center gap-3"><MessageCircle size={20} className="text-emerald-400"/> <span className="text-white font-bold">Automated Follow-ups</span></div>
              </div>
              <div className="absolute bottom-24 right-1/4 p-4 bg-[#111] border border-white/10 rounded-xl shadow-2xl animate-[bounce_7s_infinite_reverse]">
                <div className="flex items-center gap-3"><Zap size={20} className="text-yellow-400"/> <span className="text-white font-bold">CRM Active</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS GROWTH AUDIT */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Where Does Your Business Need Growth?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "More Customers", desc: "Improve customer acquisition through targeted campaigns and lead systems." },
              { icon: Target, title: "More Leads", desc: "Build a stronger prospect pipeline with industry and location targeting." },
              { icon: Megaphone, title: "Better Marketing", desc: "Reach the right audience with digital marketing, ads, and content." },
              { icon: TrendingUp, title: "Better Sales", desc: "Improve follow-up and conversion systems with sales strategy and CRM." },
              { icon: Settings, title: "Better Operations", desc: "Automate repetitive processes and streamline your business workflows." },
              { icon: UserCheck, title: "Better Retention", desc: "Build stronger customer relationships with CRM, automation, and support." },
              { icon: Bot, title: "Better Technology", desc: "Upgrade your digital infrastructure with modern apps and software." },
              { icon: Activity, title: "Complete Growth", desc: "Combine everything into one integrated strategy built for your business." },
            ].map((card, idx) => (
              <div key={idx} className="group flex flex-col p-6 bg-[#111] border border-white/5 rounded-2xl hover:bg-[#151515] hover:border-green-500/30 transition-all duration-300 cursor-pointer" data-aos="fade-up" data-aos-delay={(idx % 4) * 50}>
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-green-400 mb-5 group-hover:scale-110 group-hover:bg-green-500/20 transition-all">
                  <card.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                <p className="text-sm text-gray-400 flex-1">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GROWTH PILLARS */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Six Pillars of Growth</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Don't just run your business. Build a system that helps it grow.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Target, num: "01", title: "DIGITAL MARKETING", items: ["SEO", "Google Ads", "Meta Ads", "Social Media", "Content", "Branding", "Performance Marketing", "Local Marketing", "Conversion Optimization"], cta: "Grow My Marketing →" },
              { icon: Users, num: "02", title: "LEAD GENERATION", items: ["B2B Leads", "B2C Leads", "Local Leads", "Industry Leads", "Campaign Leads", "Customer Acquisition", "Appointment Opportunities", "Custom Lead Campaigns"], cta: "Get More Opportunities →" },
              { icon: TrendingUp, num: "03", title: "SALES & BUSINESS DEVELOPMENT", items: ["Sales Strategy", "Lead Follow-up", "Sales Pipeline", "Appointment Setting", "Sales CRM", "Sales Process", "Customer Management", "Business Development"], cta: "Improve My Sales →" },
              { icon: BarChart3, num: "04", title: "CRM & CUSTOMER MANAGEMENT", items: ["Lead Management", "Customer Database", "Follow-up", "Sales Pipeline", "Task Management", "Customer Segmentation", "Reports", "Team Management", "Automation"], cta: "Build My CRM →" },
              { icon: Zap, num: "05", title: "AUTOMATION", items: ["WhatsApp Automation", "Email Automation", "Lead Assignment", "Follow-up Automation", "Notifications", "CRM Automation", "Workflow Automation", "Reporting", "Business Process Automation"], cta: "Automate My Business →" },
              { icon: Settings, num: "06", title: "BUSINESS CONSULTING", items: ["Digital Strategy", "Growth Planning", "Technology Consulting", "Marketing Strategy", "Sales Strategy", "Process Optimization", "Business Automation", "Customer Acquisition Strategy"], cta: "Talk to a Consultant →" },
            ].map((pillar, i) => (
              <div key={i} className="p-8 bg-[#111] border border-white/5 rounded-3xl group hover:bg-[#151515] hover:border-green-500/30 transition-all duration-300 flex flex-col" data-aos="fade-up" data-aos-delay={(i % 3) * 100}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                    <pillar.icon size={24} />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 font-bold">{pillar.num}</span>
                    <h3 className="text-base font-bold text-white tracking-wider leading-tight">{pillar.title}</h3>
                  </div>
                </div>
                <ul className="space-y-2 mb-8 flex-1">
                  {pillar.items.map((item, j) => (
                    <li key={j} className="text-sm text-gray-400 flex items-start gap-2">
                      <span className="text-green-500 mt-1 shrink-0">•</span> {item}
                    </li>
                  ))}
                </ul>
                <button className="text-green-400 font-semibold text-sm flex items-center gap-1 group-hover:text-green-300 transition-colors mt-auto">
                  {pillar.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GROWTH ENGINE — Animated Circular Ecosystem */}
      <section className="py-32 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <div data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Everything Works Better When Your Growth Systems Work Together.</h2>
          </div>
          
          <div className="relative h-[500px] mt-16 flex items-center justify-center" data-aos="zoom-in" data-aos-delay="200">
            {/* Outer Ring */}
            <div className="absolute w-[480px] h-[480px] border border-green-500/10 rounded-full animate-[spin_40s_linear_infinite]" />
            {/* Middle Ring */}
            <div className="absolute w-[360px] h-[360px] border border-white/5 rounded-full border-dashed animate-[spin_25s_linear_infinite_reverse]" />
            {/* Glow */}
            <div className="absolute w-64 h-64 bg-green-500/10 rounded-full blur-[80px] animate-pulse" />

            {/* Center */}
            <div className="relative z-20 flex flex-col items-center justify-center bg-[#0c0c0c] border border-green-500/20 w-40 h-40 rounded-full shadow-[0_0_60px_rgba(16,185,129,0.2)]">
              <Building size={36} className="text-green-400 mb-2"/>
              <span className="text-sm font-bold text-white tracking-wide uppercase leading-tight text-center">Your<br/>Business</span>
            </div>

            {/* Orbiting Labels */}
            {[
              { label: "Marketing", angle: 0, icon: Megaphone, color: "text-blue-400", bg: "bg-blue-500/10" },
              { label: "Leads", angle: 45, icon: Target, color: "text-yellow-400", bg: "bg-yellow-500/10" },
              { label: "Sales", angle: 90, icon: TrendingUp, color: "text-green-400", bg: "bg-green-500/10" },
              { label: "CRM", angle: 135, icon: BarChart3, color: "text-purple-400", bg: "bg-purple-500/10" },
              { label: "Automation", angle: 180, icon: Zap, color: "text-orange-400", bg: "bg-orange-500/10" },
              { label: "Technology", angle: 225, icon: Bot, color: "text-pink-400", bg: "bg-pink-500/10" },
              { label: "Analytics", angle: 270, icon: Activity, color: "text-teal-400", bg: "bg-teal-500/10" },
              { label: "Retention", angle: 315, icon: UserCheck, color: "text-emerald-400", bg: "bg-emerald-500/10" },
            ].map((item, i) => {
              const rad = (item.angle - 90) * (Math.PI / 180);
              const radius = 210;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;
              return (
                <div key={i} className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2" style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}>
                  <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center ${item.color} border border-white/10`}>
                    <item.icon size={22}/>
                  </div>
                  <span className="text-xs font-bold text-gray-300 whitespace-nowrap bg-[#111]/80 px-2 py-0.5 rounded">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MARKETING → LEAD → SALES → CUSTOMER → RETENTION FUNNEL */}
      <section className="py-24 border-t border-white/5 bg-[#050505]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">The Complete Growth Funnel</h2>
          </div>

          <div className="space-y-4">
            {[
              { stage: "ATTRACT", desc: "Ads + SEO + Content", w: "w-full", bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400" },
              { stage: "CAPTURE", desc: "Landing Page + Forms + WhatsApp", w: "w-[90%]", bg: "bg-teal-500/10", border: "border-teal-500/20", text: "text-teal-400" },
              { stage: "QUALIFY", desc: "Lead Scoring + CRM", w: "w-[78%]", bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-400" },
              { stage: "CONVERT", desc: "Sales + Follow-up", w: "w-[66%]", bg: "bg-green-500/10", border: "border-green-500/20", text: "text-green-400" },
              { stage: "RETAIN", desc: "Support + CRM + Automation", w: "w-[54%]", bg: "bg-yellow-500/10", border: "border-yellow-500/20", text: "text-yellow-400" },
              { stage: "GROW", desc: "Repeat Customers + Referrals + Expansion", w: "w-[42%]", bg: "bg-orange-500/10", border: "border-orange-500/20", text: "text-orange-400" },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center group" data-aos="fade-up" data-aos-delay={i * 80}>
                <div className={`${step.w} mx-auto py-4 px-6 ${step.bg} border ${step.border} rounded-2xl flex items-center justify-between transition-all group-hover:scale-[1.02] group-hover:shadow-lg`}>
                  <div className={`font-bold tracking-wider ${step.text}`}>{step.stage}</div>
                  <div className="text-sm font-medium text-gray-300 hidden md:block">{step.desc}</div>
                </div>
                {i !== 5 && <div className="w-1 h-6 bg-white/10 group-hover:bg-white/30 transition-colors" />}
              </div>
            ))}
          </div>
          <p className="mt-12 text-gray-500 text-sm">Macky's Tech helps you build and optimize every stage of this funnel.</p>
        </div>
      </section>

      {/* INDUSTRY GROWTH SOLUTIONS */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Industry Growth Solutions</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up" data-aos-delay="100">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setActiveIndustry(ind)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeIndustry === ind ? 'bg-green-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]' : 'bg-[#111] text-gray-400 hover:bg-[#222]'}`}
              >
                {ind}
              </button>
            ))}
          </div>

          <div className="bg-[#0c0c0c] border border-white/10 rounded-3xl p-8 md:p-12 text-center" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-white mb-4">Growth Strategy for {activeIndustry}</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">{industryDetails[activeIndustry]}</p>
            <Link to="/contact" className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all">
              Get {activeIndustry} Growth Plan →
            </Link>
          </div>
        </div>
      </section>

      {/* DASHBOARD MOCKUP */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <div data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Business Growth Dashboard</h2>
            <p className="text-gray-400 mb-16">Monitor leads, track conversions, and analyze your pipeline in real-time. <span className="text-yellow-500/80 text-sm">(Demo Data)</span></p>
          </div>

          <div className="relative max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            <div className="absolute inset-0 bg-green-500/5 blur-[100px] rounded-full" />
            
            <div className="relative bg-[#111] border border-white/10 rounded-2xl shadow-2xl p-6 text-left">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-white font-bold flex items-center gap-2"><Activity size={20} className="text-green-500"/> Performance Overview</div>
                <span className="px-3 py-1 bg-white/5 rounded text-xs text-gray-400">Last 30 Days · Demo</span>
              </div>
              
              {/* KPI Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Leads", value: "842", change: "+12.5%", color: "text-green-500" },
                  { label: "Qualified Opportunities", value: "156", change: "+8.2%", color: "text-blue-500" },
                  { label: "Conversion Rate", value: "18.5%", change: "+2.1%", color: "text-green-500" },
                  { label: "Sales Pipeline", value: "₹24.5L", change: "+15.3%", color: "text-emerald-500" }
                ].map((kpi, i) => (
                  <div key={i} className="bg-[#0a0a0a] border border-white/5 p-4 rounded-xl">
                    <div className="text-xs text-gray-500 mb-1">{kpi.label}</div>
                    <div className="text-2xl font-bold text-white mb-1">{kpi.value}</div>
                    <div className={`text-xs ${kpi.color}`}>{kpi.change}</div>
                  </div>
                ))}
              </div>
              
              {/* Chart Area */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-2 bg-[#0a0a0a] border border-white/5 p-4 rounded-xl h-48 flex flex-col justify-between">
                  <div className="text-sm font-semibold text-gray-300">Campaign Performance</div>
                  <div className="flex items-end h-28 gap-2 mt-4">
                    {[40, 70, 45, 90, 65, 85, 100, 50, 75, 60, 80, 95].map((h, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-green-600/20 to-green-500/80 rounded-t-sm transition-all hover:from-green-600/30 hover:to-green-500" style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                </div>
                <div className="bg-[#0a0a0a] border border-white/5 p-4 rounded-xl flex flex-col items-center justify-center gap-4">
                  <PieChart size={60} className="text-blue-500 opacity-80" />
                  <div className="text-sm font-semibold text-gray-300">Traffic Sources</div>
                  <div className="flex gap-3 text-xs">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span> Organic</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span> Ads</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-center text-xs text-gray-600">* All values are demo placeholders for illustration only.</div>
            </div>
          </div>
        </div>
      </section>

      {/* GROWTH CALCULATOR / STRATEGY BUILDER */}
      <section id="strategy-builder" className="py-24 bg-[#111] border-t border-white/5">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <div data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Build Your Growth Strategy</h2>
            <p className="text-gray-400 mb-12">Answer a few questions to get a recommended growth path.</p>
          </div>

          <div className="bg-[#0c0c0c] border border-white/10 rounded-2xl p-8" data-aos="fade-up" data-aos-delay="100">
            
            {activeStep === 1 && (
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">What do you want to improve?</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["Customers", "Leads", "Marketing", "Sales", "Automation", "Technology", "Retention", "Everything"].map(opt => (
                    <button key={opt} onClick={() => handleCalcNext(1, "goal", opt)} className="p-4 bg-[#151515] border border-white/5 rounded-xl hover:bg-green-500/10 hover:border-green-500/30 transition-colors text-gray-300 font-medium">
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">What is your target market?</h3>
                <div className="grid grid-cols-1 gap-4">
                  {["India Only", "International", "Both"].map(opt => (
                    <button key={opt} onClick={() => handleCalcNext(2, "market", opt)} className="p-4 bg-[#151515] border border-white/5 rounded-xl hover:bg-green-500/10 hover:border-green-500/30 transition-colors text-gray-300 font-medium">
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeStep === 3 && (
              <div className="text-left">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 animate-pulse">
                    <CheckCircle size={32} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 text-center">Recommended Growth Path</h3>
                <p className="text-gray-400 text-center mb-8">Based on your goal: <strong className="text-white">{calculatorAnswers.goal}</strong> in <strong className="text-white">{calculatorAnswers.market}</strong>.</p>
                
                <div className="space-y-3 max-w-sm mx-auto mb-8 relative before:absolute before:inset-0 before:ml-[11px] before:w-0.5 before:bg-white/10">
                  {["Marketing setup", "Lead Generation Campaign", "CRM Integration", "WhatsApp Automation", "Sales Follow-up Process"].map((step, i) => (
                    <div key={i} className="flex items-center gap-4 relative z-10">
                      <div className="w-6 h-6 rounded-full bg-green-500 border-4 border-[#0c0c0c] shrink-0" />
                      <div className="text-gray-300 font-medium">{step}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col gap-3">
                  <Link to="/contact" className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-colors text-center">
                    Get Full Growth Plan →
                  </Link>
                  <button onClick={() => { setActiveStep(1); setCalculatorAnswers({ goal: "", market: "" }); }} className="w-full py-3 bg-white/5 text-gray-400 font-medium rounded-xl hover:bg-white/10 transition-colors">
                    Start Over
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 90-DAY ROADMAP & TRANSFORMATION */}
      <section className="py-24 border-t border-white/5 bg-[#050505]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Transformation */}
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Business Transformation</h2>
              <p className="text-gray-400 mb-8">See how Macky's Tech upgrades your entire business operation.</p>
              
              <div className="flex bg-[#111] rounded-2xl overflow-hidden border border-white/10">
                <div className="w-1/2 p-6 bg-red-900/10 border-r border-white/5">
                  <div className="text-red-400 font-bold mb-4 flex items-center gap-2">BEFORE</div>
                  <ul className="space-y-3 text-sm text-gray-400">
                    {["Scattered Leads", "Manual Follow-up", "No CRM", "Low Visibility", "Disconnected Tools", "Manual Reporting"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✕</span> {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="w-1/2 p-6 bg-green-900/10 relative">
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center text-white"><ArrowRight size={12}/></div>
                  <div className="text-green-400 font-bold mb-4">AFTER</div>
                  <ul className="space-y-3 text-sm text-gray-300">
                    {["Centralized Leads", "Automated Follow-up", "Integrated CRM", "Marketing System", "Connected Technology", "Live Analytics"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 90-Day Roadmap */}
            <div data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">90-Day Growth Roadmap</h2>
              <p className="text-sm text-gray-500 mb-6">* Indicative timeline. Results depend on execution, market, and business factors.</p>
              
              <div className="space-y-6">
                <div className="p-6 bg-[#111] border border-white/5 rounded-2xl hover:border-blue-500/20 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-blue-500 font-bold text-sm">DAYS 1–30</div>
                    <div className="h-px flex-1 bg-white/5"></div>
                    <div className="text-white font-semibold text-sm">Foundation</div>
                  </div>
                  <p className="text-sm text-gray-400">Business audit, digital setup, tracking, marketing foundation, CRM setup.</p>
                </div>
                
                <div className="p-6 bg-[#111] border border-green-500/20 rounded-2xl shadow-[0_0_15px_rgba(16,185,129,0.05)]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-green-500 font-bold text-sm">DAYS 31–60</div>
                    <div className="h-px flex-1 bg-white/5"></div>
                    <div className="text-white font-semibold text-sm">Acquisition</div>
                  </div>
                  <p className="text-sm text-gray-400">Campaigns live, lead generation, sales process optimization, automation active.</p>
                </div>

                <div className="p-6 bg-[#111] border border-white/5 rounded-2xl hover:border-purple-500/20 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-purple-500 font-bold text-sm">DAYS 61–90</div>
                    <div className="h-px flex-1 bg-white/5"></div>
                    <div className="text-white font-semibold text-sm">Scale</div>
                  </div>
                  <p className="text-sm text-gray-400">Performance optimization, retargeting, customer retention, analytics, expansion.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* GROWTH PACKAGES */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Growth Packages</h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                name: "STARTER", badge: null,
                desc: "For businesses beginning their digital growth journey.",
                features: ["Digital presence", "Basic marketing", "Lead support", "Basic analytics", "Standard support"],
                cta: "Start Growing →", glow: "hover:border-gray-400"
              },
              {
                name: "GROWTH", badge: "MOST POPULAR",
                desc: "For businesses actively acquiring customers.",
                features: ["Digital marketing", "Lead generation", "CRM setup", "WhatsApp automation", "Sales support", "Analytics"],
                cta: "Choose Growth →", glow: "border-green-500/30 shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:border-green-400"
              },
              {
                name: "SCALE", badge: null,
                desc: "For established growing businesses.",
                features: ["Advanced marketing", "Lead campaigns", "Sales systems", "CRM", "Automation", "Analytics", "Growth consulting", "Priority support"],
                cta: "Scale My Business →", glow: "hover:border-blue-500"
              },
              {
                name: "ENTERPRISE", badge: null,
                desc: "For custom business ecosystems.",
                features: ["Custom growth strategy", "Technology", "Marketing", "Lead systems", "Sales", "CRM", "Automation", "Dedicated team", "Custom integrations"],
                cta: "Build Enterprise Plan →", glow: "hover:border-purple-500"
              }
            ].map((pkg, i) => (
              <div key={i} className={`bg-[#0c0c0c] p-8 rounded-3xl border border-white/10 transition-all duration-300 ${pkg.glow} flex flex-col group relative`} data-aos="fade-up" data-aos-delay={i * 100}>
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-green-600 text-white text-xs font-bold rounded-full">{pkg.badge}</div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-sm text-gray-400 mb-6">{pkg.desc}</p>
                
                <div className="text-2xl font-bold text-white mb-6 pb-6 border-b border-white/10">Custom Pricing</div>
                
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-gray-300">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact" className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl transition-colors text-center mt-auto block">
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MACKY'S TECH */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <div data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">Why Macky's Tech</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "One Growth Partner", desc: "Technology, marketing, leads, CRM, sales — all under one unified partner." },
              { title: "Technology + Marketing", desc: "We combine digital infrastructure with marketing execution for maximum impact." },
              { title: "Lead + Sales Systems", desc: "We don't just generate leads. We help you build systems to convert them." },
              { title: "Automation First", desc: "Every solution is designed to reduce manual work and free your team." },
              { title: "Data-Driven Decisions", desc: "Analytics and reporting at every stage to guide smarter choices." },
              { title: "Long-Term Scale", desc: "We build for growth. Every system is designed to scale with your business." },
            ].map((card, i) => (
              <div key={i} className="p-8 bg-[#111] border border-white/5 rounded-3xl hover:border-green-500/20 transition-colors group text-left" data-aos="fade-up" data-aos-delay={(i % 3) * 80}>
                <Star size={24} className="text-green-500 mb-4 group-hover:scale-110 transition-transform"/>
                <h4 className="text-xl font-bold text-white mb-3">{card.title}</h4>
                <p className="text-sm text-gray-400">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS / KPIs */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <div data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Key Performance Indicators</h2>
            <p className="text-gray-500 mb-16 text-sm">Demo values — actual results vary based on business, market, and execution.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" data-aos="fade-up" data-aos-delay="100">
            {[
              { label: "Lead Volume", value: "↑ High" },
              { label: "Qualified Opportunities", value: "Growing" },
              { label: "Conversion Rate", value: "Optimized" },
              { label: "Campaign Reach", value: "Expanded" },
              { label: "Customer Retention", value: "Improved" },
              { label: "Sales Pipeline", value: "Active" },
            ].map((kpi, i) => (
              <div key={i} className="p-6 bg-[#111] border border-white/5 rounded-2xl hover:border-green-500/20 transition-colors">
                <div className="text-lg font-bold text-green-400 mb-2">{kpi.value}</div>
                <div className="text-xs text-gray-500">{kpi.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Business Stories</h2>
            <p className="text-gray-500 text-sm">Real testimonials connected via CMS. Placeholder data below.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="100">
            {[
              { name: "Business Owner", company: "Tech Startup — Bhopal", industry: "Software", challenge: "No digital presence and zero inbound leads.", result: "Macky's Tech built our website, set up Google Ads and WhatsApp follow-ups. Our enquiries increased significantly." },
              { name: "Marketing Head", company: "Educational Institute — Indore", industry: "Education", challenge: "Struggling to reach students for new courses.", result: "Lead campaigns and CRM setup helped our admissions team manage enquiries more efficiently." },
              { name: "Founder", company: "E-commerce Brand — Delhi", industry: "E-commerce", challenge: "High ad spend with low conversions.", result: "Performance marketing optimization and retargeting strategy brought our cost-per-acquisition down." },
            ].map((t, i) => (
              <div key={i} className="p-8 bg-[#111] border border-white/5 rounded-3xl flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} className="text-yellow-400 fill-yellow-400"/>)}
                </div>
                <p className="text-gray-300 text-sm mb-6 flex-1 italic">"{t.result}"</p>
                <div className="border-t border-white/5 pt-4">
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{t.company} · {t.industry}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
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
                  <ChevronDown size={20} className={`text-gray-500 transition-transform shrink-0 ml-4 ${activeFaq === i ? "rotate-180" : ""}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === i ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className={`text-sm ${i === faqs.length - 1 ? "text-yellow-400 font-medium" : "text-gray-400"}`}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SOLUTIONS */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-white mb-4">Related Solutions</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="100">
            {[
              { q: "Need More Customers?", label: "Business Leads", to: "/get-customers", color: "blue" },
              { q: "Need Technology?", label: "Build Technology", to: "/build-technology", color: "purple" },
              { q: "Need Automation?", label: "AI & Automation", to: "/build-technology", color: "pink" },
              { q: "Need Communication?", label: "WhatsApp API", to: "/contact", color: "green" },
              { q: "Need Marketing?", label: "Digital Marketing", to: "/digital-marketing", color: "orange" },
              { q: "Need Sales?", label: "Sales & Marketing", to: "/sales-marketing", color: "teal" },
            ].map((card, i) => (
              <Link key={i} to={card.to} className="group p-6 bg-[#111] border border-white/5 rounded-2xl hover:border-white/20 hover:bg-[#151515] transition-all flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm mb-1">{card.q}</p>
                  <p className="text-white font-bold text-lg">→ {card.label}</p>
                </div>
                <ArrowRight size={20} className="text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all"/>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-black relative overflow-hidden text-center border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1),transparent_70%)] pointer-events-none" />
        
        <div className="max-w-[800px] mx-auto px-6 relative z-10" data-aos="zoom-in">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Your Next Stage of Growth Starts Here.</h2>
          <p className="text-xl text-gray-400 mb-12">Tell us where your business is today and where you want to go. We'll help you build the systems to move forward.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#strategy-builder" className="w-full sm:w-auto px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              Build My Growth Plan →
            </a>
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-[#111] border border-white/20 text-white font-bold rounded-full hover:bg-[#222] transition-all">
              Talk to a Growth Expert
            </Link>
            <a href="#packages" className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all">
              Explore Packages
            </a>
          </div>
        </div>
      </section>
      
    </div>
  );
}

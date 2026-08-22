import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Code2, Smartphone, Database, Server, Settings, Cpu,
  Cloud, ShoppingCart, Utensils, Calendar, GraduationCap, 
  HeartPulse, Briefcase, Bot, LayoutTemplate, Network,
  ArrowRight, CheckCircle2, ChevronRight, PenTool, Layout,
  Layers, Package, CheckCircle, Building
} from "lucide-react";

export default function BuildTechnology() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const [activeIndustry, setActiveIndustry] = useState("Technology");
  const [formStatus, setFormStatus] = useState("idle");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitted");
    setTimeout(() => setFormStatus("idle"), 5000);
  };

  const industries = [
    "Technology", "Healthcare", "Education", "E-commerce", "Food",
    "Real Estate", "Construction", "Finance", "Retail", "Hospitality",
    "Travel", "Transportation", "Logistics", "Professional Services",
    "Manufacturing", "Startups", "Enterprise"
  ];

  return (
    <div className="bg-[#050505] min-h-screen text-gray-300 font-sans selection:bg-purple-500/30 overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.15),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.15),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div data-aos="fade-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold tracking-wide uppercase mb-6">
                <Code2 size={16} /> MACKY'S TECH — BUILD TECHNOLOGY
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
                Build Technology That <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">Moves Your Business Forward.</span>
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-xl">
                From websites and mobile apps to SaaS platforms, enterprise software, AI and business automation — build your complete digital solution with Macky’s Tech.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <a href="#custom-builder" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all hover:scale-105 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  Start Your Project <ArrowRight size={18} />
                </a>
                <a href="#solutions" className="px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-all">
                  Explore Technology Solutions
                </a>
              </div>
            </div>

            {/* Floating 3D Ecosystem Visual */}
            <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center" data-aos="fade-left" data-aos-delay="200">
              <div className="absolute w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] animate-pulse" />
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/10 rounded-full animate-[spin_40s_linear_infinite]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full border-dashed animate-[spin_30s_linear_infinite_reverse]" />
              
              {/* Central Core */}
              <div className="absolute z-20 flex flex-col items-center justify-center bg-[#0c0c0c] border border-white/10 w-48 h-48 rounded-full shadow-[0_0_50px_rgba(168,85,247,0.2)]">
                 <Code2 size={48} className="text-purple-500 mb-2"/>
                 <span className="text-xs font-bold text-white tracking-widest uppercase">Digital Core</span>
              </div>

              {/* Floating Node Elements */}
              <div className="absolute grid grid-cols-2 gap-4 w-full h-full inset-0">
                {[
                  { icon: Smartphone, color: "text-blue-400", bg: "bg-blue-500/20", label: "Mobile App", pos: "top-10 left-10" },
                  { icon: Cloud, color: "text-purple-400", bg: "bg-purple-500/20", label: "Cloud", pos: "top-20 right-10" },
                  { icon: Database, color: "text-emerald-400", bg: "bg-emerald-500/20", label: "Database", pos: "bottom-20 left-20" },
                  { icon: Bot, color: "text-pink-400", bg: "bg-pink-500/20", label: "AI Engine", pos: "bottom-10 right-20" },
                  { icon: LayoutTemplate, color: "text-orange-400", bg: "bg-orange-500/20", label: "Dashboard", pos: "top-1/2 left-0" },
                  { icon: Network, color: "text-teal-400", bg: "bg-teal-500/20", label: "API Nodes", pos: "bottom-1/3 right-0" },
                ].map((node, i) => (
                  <div key={i} className={`absolute ${node.pos} p-4 bg-[#111]/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl flex flex-col items-center gap-2 transform transition-transform hover:scale-110 ${i % 2 === 0 ? 'animate-[bounce_4s_infinite]' : 'animate-[bounce_5s_infinite_reverse]'}`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${node.bg} ${node.color}`}><node.icon size={24}/></div>
                    <span className="text-xs font-bold text-white">{node.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT CAN WE BUILD? */}
      <section id="solutions" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">What Can We Build?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Explore our complete technology ecosystem designed to scale from startups to enterprise.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="p-8 bg-[#111] border border-white/5 rounded-3xl group hover:border-blue-500/30 transition-all" data-aos="fade-up">
              <LayoutTemplate size={40} className="text-blue-400 mb-6 group-hover:scale-110 transition-transform"/>
              <h3 className="text-2xl font-bold text-white mb-4">Websites</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                {["Business Websites", "Corporate Websites", "Landing Pages", "Portfolio Websites", "E-commerce Websites", "Marketplace Websites", "Booking Websites", "Membership Websites", "Custom Web Applications"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500/50 shrink-0"/> {item}</li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-[#111] border border-white/5 rounded-3xl group hover:border-purple-500/30 transition-all" data-aos="fade-up" data-aos-delay="100">
              <Smartphone size={40} className="text-purple-400 mb-6 group-hover:scale-110 transition-transform"/>
              <h3 className="text-2xl font-bold text-white mb-4">Mobile Applications</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                {["Android Apps", "iOS Apps", "Cross-platform Apps", "Customer Apps", "Vendor Apps", "Delivery Apps", "Driver Apps", "Employee Apps", "Partner Apps", "Admin Applications"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-purple-500/50 shrink-0"/> {item}</li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-[#111] border border-white/5 rounded-3xl group hover:border-emerald-500/30 transition-all" data-aos="fade-up" data-aos-delay="200">
              <Settings size={40} className="text-emerald-400 mb-6 group-hover:scale-110 transition-transform"/>
              <h3 className="text-2xl font-bold text-white mb-4">Custom Software</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                {["CRM", "ERP", "HRMS", "Employee Management", "Inventory Management", "Billing Software", "Accounting Systems", "School Management", "College Management", "Hospital Management", "Pharmacy Management", "Hotel Management", "Event Management", "Project Management", "Restaurant Management", "Fleet Management"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500/50 shrink-0"/> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY SPECIFIC SOLUTIONS (E-Commerce, Food, Marketplace, Edu, Health) */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Build Your Own Digital Platform</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8" data-aos="fade-up">
            {/* E-Commerce */}
            <div className="p-8 md:p-12 bg-gradient-to-br from-orange-900/20 to-[#111] border border-orange-500/20 rounded-3xl relative">
              <ShoppingCart size={40} className="text-orange-400 mb-6"/>
              <h3 className="text-2xl font-bold text-white mb-4">E-Commerce Solutions</h3>
              <p className="text-gray-400 mb-6 text-sm">Build your own digital commerce platform. We provide solutions for Single-vendor E-commerce, Multi-vendor Marketplace, B2B/B2C Marketplace, Grocery, Fashion, Electronics, Medicine, Wholesale, Subscription Commerce, Order/Vendor Management, Inventory, Coupons, Payments, Delivery, and Analytics.</p>
              <div className="flex gap-3 text-orange-300 font-bold text-sm bg-[#0c0c0c] p-4 rounded-xl border border-white/10 overflow-x-auto whitespace-nowrap">
                Customer App → Vendor Panel → Delivery App → Admin Dashboard
              </div>
            </div>

            {/* Food */}
            <div className="p-8 md:p-12 bg-gradient-to-br from-red-900/20 to-[#111] border border-red-500/20 rounded-3xl relative">
              <Utensils size={40} className="text-red-400 mb-6"/>
              <h3 className="text-2xl font-bold text-white mb-4">Food & Restaurant Technology</h3>
              <p className="text-gray-400 mb-6 text-sm">Build your complete food business platform. Includes Food Delivery App, Restaurant App, Customer App, Delivery Partner App, Restaurant Dashboard, Order/Menu Management, Table Booking, POS, Kitchen Display, Delivery Tracking, Coupons, Loyalty, and Payments.</p>
              <div className="flex gap-3 text-red-300 font-bold text-sm bg-[#0c0c0c] p-4 rounded-xl border border-white/10 overflow-x-auto whitespace-nowrap">
                Customer → Restaurant → Kitchen → Delivery → Customer
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
            <div className="p-8 bg-[#111] border border-white/5 rounded-3xl">
              <Calendar size={32} className="text-blue-400 mb-4"/>
              <h3 className="text-xl font-bold text-white mb-2">Marketplace & Booking</h3>
              <p className="text-sm text-gray-400">Multi-vendor Marketplace, Service Marketplace, Hotel Booking, Cab Booking, Salon Booking, Doctor Appointment, Event Booking, Home Services, Travel Booking, Rental Platforms, Ticket Booking.</p>
            </div>
            <div className="p-8 bg-[#111] border border-white/5 rounded-3xl">
              <GraduationCap size={32} className="text-purple-400 mb-4"/>
              <h3 className="text-xl font-bold text-white mb-2">Education Technology</h3>
              <p className="text-sm text-gray-400">LMS, Online Course Platform, Coaching Platform, School/College Management, Exam Platform, Coding Platform, Student/Teacher/Parent Portals, Live Classes, Course Marketplace, Certification System, Attendance, Fees, Assessments.</p>
            </div>
            <div className="p-8 bg-[#111] border border-white/5 rounded-3xl">
              <HeartPulse size={32} className="text-pink-400 mb-4"/>
              <h3 className="text-xl font-bold text-white mb-2">Healthcare Technology</h3>
              <p className="text-sm text-gray-400">Hospital Management, Clinic Management, Doctor Appointment, Pharmacy Management, Medicine Ordering, Lab Management, Patient Management, Prescription Management, Healthcare CRM, Telemedicine platforms*, Admin dashboards.</p>
            </div>
          </div>

        </div>
      </section>

      {/* BUSINESS & ENTERPRISE SOFTWARE */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <div data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Business & Enterprise Software</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4" data-aos="fade-up" data-aos-delay="100">
            {[
              "CRM", "ERP", "HRMS", "Payroll", "Inventory", "Accounting", "Billing", "POS",
              "Project Management", "Helpdesk", "Customer Support", "Sales Management",
              "Lead Management", "Vendor Management", "Procurement", "Warehouse Management",
              "Fleet Management", "Asset Management", "Document Management"
            ].map((item, i) => (
              <div key={i} className="p-4 bg-[#111] border border-white/5 rounded-xl hover:border-emerald-500/30 hover:bg-[#151515] transition-colors cursor-default">
                <span className="text-gray-300 font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI, AUTOMATION & API */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center" data-aos="fade-up">
            <Bot size={64} className="mx-auto text-blue-500 mb-8" />
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Make Your Business Smarter<br/>With AI & Automation</h2>
            <div className="inline-flex items-center gap-3 text-lg font-bold text-gray-400 bg-[#111] py-3 px-8 rounded-full border border-white/5 shadow-xl mb-16">
              Input <ArrowRight size={16} className="text-blue-500"/> AI <ArrowRight size={16} className="text-blue-500"/> Automation <ArrowRight size={16} className="text-blue-500"/> Action <ArrowRight size={16} className="text-blue-500"/> Analytics
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="100">
            {/* AI & Automation */}
            <div className="p-8 bg-[#111]/80 backdrop-blur-md border border-white/10 rounded-2xl">
              <Cpu size={32} className="text-pink-500 mb-4"/>
              <h3 className="text-xl font-bold text-white mb-4">AI & Automation</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {["AI Chatbots", "AI Customer Support", "AI Lead Qualification", "AI Content Systems", "AI Document Processing", "Workflow Automation", "Business Process Automation", "CRM Automation", "WhatsApp Automation", "Email Automation", "API Automation", "Reporting Automation", "Recommendation Systems", "Intelligent Search", "AI Assistants"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2"><CheckCircle2 size={14} className="text-pink-500/50 shrink-0 mt-0.5"/> {item}</li>
                ))}
              </ul>
            </div>
            
            {/* API & Integration */}
            <div className="p-8 bg-[#111]/80 backdrop-blur-md border border-white/10 rounded-2xl">
              <Network size={32} className="text-blue-500 mb-4"/>
              <h3 className="text-xl font-bold text-white mb-4">API & Integration Ecosystem</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {["Payment APIs", "WhatsApp APIs", "SMS", "Email", "Maps", "Authentication", "CRM", "ERP", "Analytics", "Cloud", "Third-party APIs", "Webhooks", "Custom APIs"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2"><CheckCircle2 size={14} className="text-blue-500/50 shrink-0 mt-0.5"/> {item}</li>
                ))}
              </ul>
            </div>

            {/* Cloud & Deployment */}
            <div className="p-8 bg-[#111]/80 backdrop-blur-md border border-white/10 rounded-2xl">
              <Cloud size={32} className="text-purple-500 mb-4"/>
              <h3 className="text-xl font-bold text-white mb-4">Cloud & Deployment</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {["Cloud Deployment", "VPS", "Server Setup", "Database", "CDN", "SSL", "Backup", "Monitoring", "CI/CD", "Domain/DNS", "Production Deployment"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2"><CheckCircle2 size={14} className="text-purple-500/50 shrink-0 mt-0.5"/> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* UI/UX DESIGN */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl font-bold text-white mb-6">Design Before Development</h2>
              <p className="text-lg text-gray-400 mb-8">We believe in visual clarity. Our design phase ensures your product looks premium and functions perfectly before a single line of code is written.</p>
              
              <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm text-gray-300">
                {["UX Research", "Wireframes", "UI Design", "Prototyping", "Design Systems", "Responsive Design", "Mobile UX", "Dashboard UX", "SaaS UX", "Usability Testing"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2"><PenTool size={16} className="text-blue-500"/> {item}</div>
                ))}
              </div>
            </div>
            
            <div className="relative h-[400px]" data-aos="fade-left">
              {/* Figma-style floating boards */}
              <div className="absolute top-10 right-10 w-64 h-48 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-2xl animate-[bounce_5s_infinite] overflow-hidden">
                <div className="h-6 bg-[#222] border-b border-white/5 flex items-center px-3 gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div className="p-4 flex flex-col gap-2">
                  <div className="w-full h-8 bg-blue-500/20 rounded"></div>
                  <div className="w-3/4 h-4 bg-white/5 rounded"></div>
                  <div className="w-1/2 h-4 bg-white/5 rounded"></div>
                </div>
              </div>

              <div className="absolute bottom-10 left-10 w-56 h-64 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-2xl animate-[bounce_6s_infinite_reverse] overflow-hidden">
                <div className="p-4 flex flex-col gap-3 h-full">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full mx-auto"></div>
                  <div className="w-full h-4 bg-white/5 rounded"></div>
                  <div className="w-full h-4 bg-white/5 rounded"></div>
                  <div className="w-full flex-1 bg-white/2 rounded"></div>
                  <div className="w-full h-8 bg-blue-600 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE INDUSTRY SELECTOR */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Industries We Serve</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up" data-aos-delay="100">
            {industries.map((ind) => (
              <button 
                key={ind}
                onClick={() => setActiveIndustry(ind)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeIndustry === ind ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]' : 'bg-[#111] text-gray-400 hover:bg-[#222]'}`}
              >
                {ind}
              </button>
            ))}
          </div>

          <div className="bg-[#0c0c0c] border border-white/10 rounded-3xl p-8 md:p-12 text-center" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-white mb-4">Technology Solutions for {activeIndustry}</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Selecting {activeIndustry} provides tailored software architectures, specialized compliance if required, and pre-built integration paradigms specific to this vertical.</p>
            <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all">
              Discuss Your {activeIndustry} Project →
            </button>
          </div>
        </div>
      </section>

      {/* PRODUCT TYPES */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <div data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">What Are You Building?</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4" data-aos="fade-up" data-aos-delay="100">
            {["Website", "Mobile App", "SaaS", "Marketplace", "CRM", "ERP", "LMS", "AI Product", "Automation", "API Platform", "Business Software", "Custom Platform"].map((item, i) => (
              <div key={i} className="p-6 bg-[#111] border border-white/5 rounded-2xl hover:border-purple-500/30 hover:bg-[#151515] transition-colors cursor-pointer group flex flex-col items-center justify-center gap-3">
                <Layers size={24} className="text-gray-500 group-hover:text-purple-400 transition-colors"/>
                <span className="text-gray-300 font-bold text-sm text-center">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK & DEVELOPMENT PROCESS */}
      <section className="py-24 border-y border-white/5 bg-[#050505]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold text-white mb-8">Technology Stack</h2>
              <div className="space-y-6 bg-[#0c0c0c] p-8 rounded-3xl border border-white/5">
                <div>
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Frontend</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["React", "Next.js", "HTML/CSS", "TypeScript"].map((tech)=><span key={tech} className="px-4 py-2 bg-[#111] border border-white/10 rounded-xl text-sm font-semibold text-white">{tech}</span>)}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Backend & Database</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["Node.js", "PHP", "Laravel", "Python", "MySQL", "PostgreSQL", "MongoDB", "SQLite"].map((tech)=><span key={tech} className="px-4 py-2 bg-[#111] border border-white/10 rounded-xl text-sm font-semibold text-white">{tech}</span>)}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Mobile & Cloud</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["Flutter", "React Native", "Android", "iOS", "AWS", "Cloud Platforms", "VPS", "DevOps"].map((tech)=><span key={tech} className="px-4 py-2 bg-[#111] border border-white/10 rounded-xl text-sm font-semibold text-white">{tech}</span>)}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">AI & Automation</h4>
                  <div className="flex gap-2 flex-wrap">
                    {["Python", "AI APIs", "LLM Integrations", "Automation"].map((tech)=><span key={tech} className="px-4 py-2 bg-[#111] border border-white/10 rounded-xl text-sm font-semibold text-white">{tech}</span>)}
                  </div>
                </div>
                <p className="text-xs text-gray-500 pt-4">* We utilize these technologies internally to build custom solutions.</p>
              </div>
            </div>

            <div data-aos="fade-left">
              <h2 className="text-3xl font-bold text-white mb-8">Development Process</h2>
              <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                {["Discover", "UX/UI Design", "Architecture", "Development", "Testing", "Deployment", "Support"].map((step, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#111] text-gray-400 group-hover:text-purple-400 group-hover:border-purple-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_0_transparent] group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all z-10">
                      <span className="text-sm font-bold">0{i+1}</span>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl bg-[#0c0c0c] border border-white/5 shadow-lg group-hover:border-white/10 transition-colors text-center md:text-left">
                      <h4 className="font-bold text-white">{step}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TECHNOLOGY PACKAGES */}
      <section id="packages" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Technology Packages</h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              { name: "MVP", desc: "For startups testing an idea.", icon: Package, glow: "hover:border-gray-400" },
              { name: "BUSINESS", desc: "For companies launching a complete digital product.", icon: LayoutTemplate, glow: "hover:border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.1)] border-blue-500/30" },
              { name: "SCALE", desc: "For growing businesses requiring advanced systems.", icon: Server, glow: "hover:border-purple-500" },
              { name: "ENTERPRISE", desc: "For large/custom software ecosystems.", icon: Building, glow: "hover:border-emerald-500" },
            ].map((pkg, i) => (
              <div key={i} className={`bg-[#0c0c0c] p-8 rounded-3xl border border-white/10 transition-all duration-300 ${pkg.glow} flex flex-col group`} data-aos="fade-up" data-aos-delay={i * 100}>
                <pkg.icon size={32} className="text-gray-500 mb-6 group-hover:text-white transition-colors" />
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-sm text-gray-400 mb-8 flex-1">{pkg.desc}</p>
                
                <p className="text-xs text-gray-500 mb-4">* Features are dynamic based on selected technology.</p>
                <button className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl transition-colors mt-auto">
                  Get Custom Quote →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM PRODUCT BUILDER */}
      <section id="custom-builder" className="py-24 bg-[#111] border-y border-white/5">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Tell Us What You Want to Build</h2>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6 bg-[#0a0a0a] p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl" data-aos="fade-up" data-aos-delay="100">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">What are you building?</label>
                <input type="text" required className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="e.g. Booking App" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Which platform?</label>
                <select className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors">
                  <option>Web</option>
                  <option>Mobile (iOS/Android)</option>
                  <option>Both Web & Mobile</option>
                  <option>Desktop Software</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Which industry?</label>
                <input type="text" className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="e.g. Healthcare" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Expected users?</label>
                <input type="text" className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="e.g. 10,000+" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Budget?</label>
                <input type="text" className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="Expected Budget" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Timeline?</label>
                <input type="text" className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="e.g. 3 Months" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Which features? / Integrations?</label>
              <textarea rows="4" className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="List core features, APIs, payment gateways, etc."></textarea>
            </div>
            
            {formStatus === "idle" ? (
              <button type="submit" className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                Generate My Project Requirement →
              </button>
            ) : (
              <div className="w-full py-4 bg-green-500/10 text-green-400 font-bold rounded-xl text-center border border-green-500/20 flex items-center justify-center gap-2">
                <CheckCircle size={20} /> Your requirement has been received. Our team will contact you shortly.
              </div>
            )}
          </form>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <div data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Case Studies</h2>
            <p className="text-gray-500 mb-12">Real projects. Real solutions. Real impact.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="100">
            {[
              { label: "E-commerce", id: "ecommerce", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600&h=300", desc: "Multi-vendor marketplace with vendor dashboards, payments & delivery tracking.", tags: ["React", "Node.js", "Razorpay"] },
              { label: "Food Delivery", id: "food-delivery", img: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&q=80&w=600&h=300", desc: "End-to-end food platform: Customer App, KDS, Delivery App & Admin Panel.", tags: ["Flutter", "Socket.io", "Maps"] },
              { label: "LMS", id: "lms", img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=600&h=300", desc: "Full learning platform with live classes, assessments & digital certificates.", tags: ["React", "Zoom SDK", "MongoDB"] },
              { label: "CRM", id: "crm", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=300", desc: "Custom CRM with lead pipeline, WhatsApp automation & sales reporting.", tags: ["Node.js", "WhatsApp API", "PostgreSQL"] },
              { label: "Marketplace", id: "marketplace", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=300", desc: "Service marketplace with GPS matching, escrow payments & review system.", tags: ["React Native", "Stripe", "Maps"] },
              { label: "Business Automation", id: "automation", img: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=600&h=300", desc: "Automated 12 business processes — invoices, follow-ups & live reporting.", tags: ["n8n", "WhatsApp API", "Node.js"] },
              { label: "Healthcare", id: "healthcare", img: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=600&h=300", desc: "Hospital management: OPD, pharmacy, lab, billing & admin analytics.", tags: ["React", "PostgreSQL", "AWS"] },
              { label: "Cab/Mobility", id: "cab-mobility", img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=600&h=300", desc: "Complete ride-hailing platform with driver app, GPS & surge pricing.", tags: ["Flutter", "Socket.io", "Redis"] },
            ].map((study, i) => (
              <Link key={i} to={`/case-studies/${study.id}`} className="group rounded-2xl overflow-hidden border border-white/5 bg-[#111] hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(168,85,247,0.1)] block text-left">
                {/* Real Image */}
                <div className="h-44 relative overflow-hidden">
                  <img
                    src={study.img}
                    alt={`${study.label} case study`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-bold text-purple-300">
                    {study.label}
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-base font-bold text-white mb-2 leading-snug">{study.label} Case Study</h4>
                  <p className="text-xs text-gray-400 mb-4 leading-relaxed">{study.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {study.tags.map((tag, j) => (
                      <span key={j} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-xs text-gray-400">{tag}</span>
                    ))}
                  </div>
                  <span className="text-purple-400 text-sm font-semibold flex items-center gap-1 group-hover:text-purple-300 group-hover:gap-2 transition-all">
                    Read Case Study <ArrowRight size={14}/>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-gradient-to-b from-[#050505] to-purple-900/10 text-center relative overflow-hidden border-t border-white/5">
        <div className="max-w-[800px] mx-auto px-6 relative z-10" data-aos="zoom-in">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Have an Idea? <br/>Let's Turn It Into Technology.</h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <a href="#custom-builder" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all">
              Start My Project →
            </a>
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-[#111] border border-white/20 text-white font-bold rounded-full hover:bg-[#222] transition-all">
              Get a Custom Quote
            </Link>
            <Link to="/book-consultation" className="w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full transition-all">
              Talk to Technology Expert
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Target, Lightbulb, Users, Globe, ArrowRight, ShieldCheck, Zap, Award } from "lucide-react";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "10+", label: "Years Experience" },
    { number: "50+", label: "Team Experts" },
    { number: "98%", label: "Client Retention" }
  ];

  const values = [
    { icon: <Target />, title: "Precision", desc: "We build exactly what your business needs to scale, without unnecessary bloat." },
    { icon: <Lightbulb />, title: "Innovation", desc: "Always leveraging the latest tech stack (AI, Web3, React) to keep you ahead." },
    { icon: <ShieldCheck />, title: "Reliability", desc: "Enterprise-grade security and 99.9% uptime for all our deployed solutions." },
    { icon: <Users />, title: "Partnership", desc: "We don't just act as vendors; we become your long-term technology growth partners." }
  ];

  return (
    <div className="bg-[#060a12] min-h-screen pt-32 pb-24 font-sans text-gray-300 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 mb-32">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">About Macky's Tech</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-8"
          >
            We Build The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Technology</span> That Builds Your Business.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 leading-relaxed"
          >
            Macky's Tech is a premium digital agency specializing in scalable software development, high-performance digital marketing, and enterprise IT consulting. We bridge the gap between complex technology and real business growth.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative border-y border-white/5 bg-white/[0.02] py-16 mb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center px-4"
              >
                <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">
                  {stat.number}
                </div>
                <div className="text-sm font-bold text-cyan-400 uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-[3rem] transform -rotate-3" />
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
              alt="Our Team" 
              className="relative z-10 rounded-[3rem] shadow-2xl object-cover h-[500px] w-full"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Our Mission is Simple.</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We exist to empower businesses with technology that actually works. We've seen too many companies struggle with outdated software, poor marketing strategies, and disconnected systems. 
              <br/><br/>
              Our mission is to provide an all-in-one ecosystem where your web platform, mobile app, and marketing engine work seamlessly together to generate massive ROI.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl">
                <Globe className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="font-bold text-white mb-2">Global Reach</h3>
                <p className="text-sm text-gray-500">Delivering digital excellence to clients worldwide.</p>
              </div>
              <div className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl">
                <Zap className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="font-bold text-white mb-2">Fast Execution</h3>
                <p className="text-sm text-gray-500">Agile methodologies for rapid deployment.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-[#020408] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Our Core Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">The principles that guide our code, our designs, and our client relationships.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#060a12] p-8 rounded-[2rem] border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.02] transition-all group"
              >
                <div className="w-14 h-14 bg-blue-900/30 text-cyan-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership / Team Preview */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Leadership Team</h2>
            <p className="text-gray-400">The minds behind the technology.</p>
          </div>
          <Link to="/contact" className="text-cyan-400 font-bold hover:text-cyan-300 flex items-center gap-2">
            Join Our Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative rounded-[2rem] overflow-hidden"
            >
              <img 
                src={`https://images.unsplash.com/photo-${i === 0 ? '1560250097-0b93528c311a' : i === 1 ? '1573496359142-b8d87734a5a2' : '1519085360753-af0119f7cbe7'}?w=600&q=80`} 
                alt="Team Member" 
                className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060a12] via-[#060a12]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {i === 0 ? "Michael M." : i === 1 ? "Sarah J." : "David C."}
                </h3>
                <p className="text-cyan-400 font-semibold text-sm mb-4">
                  {i === 0 ? "Founder & CEO" : i === 1 ? "Head of Marketing" : "Lead Architect"}
                </p>
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  <a href="#" className="text-gray-400 hover:text-white"><Globe className="w-5 h-5" /></a>
                  <a href="#" className="text-gray-400 hover:text-white"><Users className="w-5 h-5" /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30 p-12 md:p-16 rounded-[3rem] text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 relative z-10">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 mb-10 text-lg relative z-10 max-w-2xl mx-auto">
            Stop dealing with fragmented agencies. Let Macky's Tech handle your complete digital ecosystem from development to marketing.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#060a12] rounded-full font-black hover:scale-105 transition-transform relative z-10">
            Start a Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Code, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const pillars = [
  {
    step: "01",
    title: "GET CUSTOMERS",
    tagline: "Generate opportunities that can turn into real business.",
    features: ["Business Leads", "Customer Acquisition", "Lead Generation", "Sales Support", "Campaigns"],
    cta: "Get Business Leads",
    link: "/get-customers",
    icon: Target
  },
  {
    step: "02",
    title: "BUILD TECHNOLOGY",
    tagline: "Turn your business idea into powerful digital products.",
    features: ["Websites", "Mobile Apps", "SaaS", "Custom Software", "AI", "APIs", "Automation"],
    cta: "Build Your Solution",
    link: "/build-technology",
    icon: Code
  },
  {
    step: "03",
    title: "SCALE YOUR BUSINESS",
    tagline: "Use marketing, automation and technology to grow faster.",
    features: ["Digital Marketing", "Sales & Marketing", "CRM", "WhatsApp Automation", "Analytics", "Business Consulting"],
    cta: "Scale My Business",
    link: "/scale-business",
    icon: TrendingUp
  }
];

export default function CoreGrowth() {
  return (
    <section className="py-24 bg-[#FAFAFA] dark:bg-gray-950 relative z-10 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-4"
          >
            From Idea to Growth <br /> Everything Under One Roof
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium tracking-wide"
          >
            Idea → Build → Launch → Acquire → Scale
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white dark:bg-gray-900 rounded-[2rem] p-10 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-black/50 transition-all duration-500 flex flex-col relative overflow-hidden group"
              >
                {/* Step Number Background */}
                <div className="absolute -top-6 -right-6 text-[120px] font-black text-gray-50/50 dark:text-gray-800/30 group-hover:text-gray-50 dark:group-hover:text-gray-800/80 transition-colors pointer-events-none select-none">
                  {pillar.step}
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center mb-8 text-gray-900 dark:text-white group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-wide">{pillar.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-8 font-medium leading-relaxed">{pillar.tagline}</p>
                  
                  <ul className="space-y-3 mb-10">
                    {pillar.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 mr-3 group-hover:bg-blue-400 transition-colors"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link to={pillar.link} className="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mt-auto">
                    {pillar.cta} <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

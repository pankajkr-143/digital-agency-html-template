import React from 'react';
import { motion } from 'framer-motion';
import { Users, Laptop, Megaphone, TrendingUp, Cpu, Rocket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const needs = [
  { id: 1, title: "I Need Customers", description: "Generate relevant business leads and customer enquiries.", icon: Users, link: "/leads" },
  { id: 2, title: "I Need Technology", description: "Build websites, apps, SaaS and custom software.", icon: Laptop, link: "/software-development" },
  { id: 3, title: "I Need Marketing", description: "Grow visibility through digital marketing.", icon: Megaphone, link: "/digital-marketing" },
  { id: 4, title: "I Need Sales", description: "Build a stronger sales pipeline and customer acquisition.", icon: TrendingUp, link: "/sales-marketing" },
  { id: 5, title: "I Need Automation", description: "Automate repetitive business operations.", icon: Cpu, link: "/artificial-intelligence" },
  { id: 6, title: "I Want Complete Growth", description: "Get technology, marketing, leads and business support together.", icon: Rocket, link: "/packages" }
];

export default function BusinessNeeds() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 relative z-10 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-4"
          >
            What Does Your Business Need Today?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Tell us what you need and discover the right solution for your business.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {needs.map((need, index) => {
            const Icon = need.icon;
            return (
              <motion.div
                key={need.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-gray-50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 rounded-[2rem] p-8 transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 hover:shadow-2xl hover:shadow-gray-200/50 dark:hover:shadow-black/50 flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center mb-6 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">{need.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-8 flex-grow leading-relaxed">
                  {need.description}
                </p>
                <Link to={need.link} className="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mt-auto">
                  Explore <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

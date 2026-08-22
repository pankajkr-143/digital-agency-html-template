import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const packages = [
  {
    title: "STARTER",
    target: "For small businesses starting their digital journey.",
    price: "Starting from ₹15,000",
    features: ["Digital Presence", "Basic Marketing", "Business Setup", "Lead Support"],
    cta: "Get Started",
    popular: false,
    link: "/contact"
  },
  {
    title: "GROWTH",
    target: "For businesses actively looking for customers.",
    price: "Starting from ₹35,000",
    features: ["Website", "Digital Marketing", "Lead Generation", "WhatsApp Integration", "Basic CRM"],
    cta: "Choose Growth",
    popular: true,
    link: "/contact"
  },
  {
    title: "SCALE",
    target: "For growing businesses scaling operations.",
    price: "Starting from ₹75,000",
    features: ["Advanced Technology", "Marketing", "Qualified Leads", "Sales Support", "Automation", "Analytics"],
    cta: "Scale My Business",
    popular: false,
    link: "/contact"
  },
  {
    title: "ENTERPRISE",
    target: "For established businesses requiring custom solutions.",
    price: "Custom Quote",
    features: ["Custom Technology", "Business Consulting", "Advanced Automation", "Dedicated Support", "Custom Growth Strategy"],
    cta: "Talk to an Expert",
    popular: false,
    link: "/contact"
  }
];

export default function GrowthPackages() {
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
            Choose the Growth Level That Fits Your Business
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Start small, grow faster and scale when you're ready.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {packages.map((pkg, index) => (
              <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col bg-white dark:bg-gray-800 rounded-[2rem] p-8 border transition-all duration-300 hover:-translate-y-2 ${
                pkg.popular 
                  ? 'border-blue-600 dark:border-blue-500 shadow-xl shadow-blue-900/5 dark:shadow-blue-900/20' 
                  : 'border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-black/50'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{pkg.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 min-h-[40px]">{pkg.target}</p>
              
              <div className="text-xl font-bold text-gray-900 dark:text-white mb-8 pb-8 border-b border-gray-100 dark:border-gray-700">
                {pkg.price}
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 size={20} className={`mr-3 shrink-0 ${pkg.popular ? 'text-blue-600 dark:text-blue-500' : 'text-gray-400 dark:text-gray-500'}`} strokeWidth={2} />
                    <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to={pkg.link}
                className={`w-full py-4 rounded-xl flex items-center justify-center font-semibold transition-colors ${
                  pkg.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
                }`}
              >
                {pkg.cta} <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium inline-flex items-center transition-colors">
            Need something different? Build a custom package <ArrowRight size={16} className="ml-2" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

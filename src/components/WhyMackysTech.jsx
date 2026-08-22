import { motion } from "framer-motion";
import { ShieldCheck, Target, TrendingUp, PackageSearch, HeadphonesIcon, Handshake } from "lucide-react";

export default function WhyMackysTech() {
  const cards = [
    {
      title: "One Growth Partner",
      description: "Technology, marketing, leads and business support in one ecosystem.",
      icon: ShieldCheck,
      color: "blue"
    },
    {
      title: "Business-Focused",
      description: "Solutions designed around actual business goals.",
      icon: Target,
      color: "indigo"
    },
    {
      title: "Scalable Technology",
      description: "Build today and scale tomorrow.",
      icon: TrendingUp,
      color: "purple"
    },
    {
      title: "Transparent Packages",
      description: "Clear service and package structures.",
      icon: PackageSearch,
      color: "cyan"
    },
    {
      title: "Dedicated Support",
      description: "Support throughout the journey.",
      icon: HeadphonesIcon,
      color: "emerald"
    },
    {
      title: "Long-Term Partnership",
      description: "We aim to become a growth partner, not just a service vendor.",
      icon: Handshake,
      color: "orange"
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900 relative z-10 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800"
          >
            <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
              TRUSTED & PROVEN
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight"
          >
            Why Businesses Choose Macky’s Tech
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative p-8 bg-gray-50 dark:bg-gray-950 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10 overflow-hidden"
              >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-colors duration-500" />
                
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 group-hover:scale-110 transition-transform duration-300 shadow-sm relative z-10`}>
                  <Icon className={`w-6 h-6 text-${card.color}-500`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 relative z-10">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed relative z-10 font-medium">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

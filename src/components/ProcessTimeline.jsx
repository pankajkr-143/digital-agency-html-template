import { motion } from "framer-motion";
import { CheckCircle2, Target, Lightbulb, PackageSearch, Rocket, TrendingUp } from "lucide-react";

export default function ProcessTimeline() {
  const steps = [
    {
      id: "01",
      title: "Tell Us Your Goal",
      description: "Share your business requirement.",
      icon: Target
    },
    {
      id: "02",
      title: "We Understand",
      description: "Our team analyzes your business and requirements.",
      icon: Lightbulb
    },
    {
      id: "03",
      title: "Get Your Solution",
      description: "Receive the right service/package recommendation.",
      icon: PackageSearch
    },
    {
      id: "04",
      title: "We Execute",
      description: "Technology, marketing, leads and implementation begin.",
      icon: Rocket
    },
    {
      id: "05",
      title: "You Grow",
      description: "Track progress, leads, projects and results.",
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-950 relative z-10 border-t border-gray-100 dark:border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800"
          >
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
              HOW MACKY’S TECH WORKS
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight"
          >
            Simple Process. Serious Growth.
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative mt-12 lg:mt-24">
          
          {/* Horizontal Line for Desktop (hidden on mobile) */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gray-200 dark:bg-gray-800 z-0" />
          
          {/* Vertical Line for Mobile (hidden on desktop) */}
          <div className="lg:hidden absolute top-8 bottom-8 left-[38px] w-[2px] bg-gray-200 dark:bg-gray-800 z-0" />

          {/* Steps */}
          <div className="flex flex-col lg:flex-row lg:justify-between relative z-10 gap-12 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="relative flex lg:flex-col items-start lg:items-center w-full lg:w-1/5"
                >
                  {/* Icon & Number Circle */}
                  <div className="relative shrink-0 flex items-center justify-center w-20 h-20 rounded-full bg-white dark:bg-gray-900 border-4 border-white dark:border-gray-950 shadow-xl shadow-gray-200/50 dark:shadow-black/50 z-10 group transition-transform duration-300 hover:scale-110">
                    <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-500 group-hover:text-white relative z-10 transition-colors duration-300" />
                    
                    {/* Floating Step Number */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold border-2 border-white dark:border-gray-950 shadow-md">
                      {step.id}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="ml-6 lg:ml-0 lg:mt-8 lg:text-center flex-grow pt-2 lg:pt-0">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 tracking-wide">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed max-w-[250px] lg:mx-auto">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

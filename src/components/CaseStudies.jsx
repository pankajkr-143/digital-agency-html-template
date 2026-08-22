import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Box } from "lucide-react";
import { Link } from "react-router-dom";

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Web", "Mobile", "SaaS", "AI", "Business Solutions"];

  const projects = [
    {
      id: 1,
      category: "Web",
      image: "/images/case-studies/web.png",
      industry: "Retail & E-commerce",
      solution: "High-Traffic Marketplace",
      technology: "React, Node.js, AWS",
      result: "Improved checkout speed and better mobile conversion.",
    },
    {
      id: 2,
      category: "Mobile",
      image: "/images/case-studies/mobile.png",
      industry: "Logistics",
      solution: "Driver Tracking Application",
      technology: "React Native, Firebase",
      result: "Real-time tracking integration with offline support.",
    },
    {
      id: 3,
      category: "SaaS",
      image: "/images/case-studies/saas.png",
      industry: "Finance",
      solution: "B2B Analytics Dashboard",
      technology: "Next.js, Tailwind, Python",
      result: "Scalable data processing and customized reporting.",
    },
    {
      id: 4,
      category: "AI",
      image: "/images/case-studies/ai.png",
      industry: "Healthcare",
      solution: "Workflow Automation",
      technology: "Python, TensorFlow",
      result: "Automated document sorting and disease detection.",
    },
    {
      id: 5,
      category: "Business Solutions",
      image: "/images/case-studies/erp.png",
      industry: "Corporate",
      solution: "Enterprise ERP",
      technology: "Node.js, PostgreSQL",
      result: "Streamlined multi-department workflows.",
    },
    {
      id: 6,
      category: "Business Solutions",
      image: "/images/case-studies/marketing.png",
      industry: "Digital Marketing",
      solution: "Omnichannel Analytics",
      technology: "Data Studio, BigQuery",
      result: "Unified marketing spend visualization and ROI tracking.",
    },
  ];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-950 relative z-10 border-t border-gray-100 dark:border-gray-800">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800"
          >
            <Box className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
              CASE STUDIES / PROJECTS
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight"
          >
            Built for Real Businesses
          </motion.h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:border-blue-500/30 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 xl:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                key={project.id}
                className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-blue-500/30 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 flex flex-col"
              >
                {/* Image Area */}
                <div className="relative h-48 sm:h-56 overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
                  <img
                    src={project.image}
                    alt={project.solution}
                    className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-60 z-10" />
                  
                  {/* Overlay Badges */}
                  <div className="absolute top-3 left-3 z-20 flex gap-2">
                    <span className="px-2 py-1 text-[10px] font-bold rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20">
                      {project.industry}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                    {project.solution}
                  </h3>
                  <div className="flex flex-wrap gap-1 mb-4">
                    <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded truncate max-w-full">
                      {project.technology}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed mb-6 flex-1">
                    <span className="font-semibold text-gray-900 dark:text-gray-200 block mb-1">Result:</span>
                    {project.result}
                  </p>

                  <Link to={`/case-studies/${project.id}`} className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link mt-auto">
                    View Case Study 
                    <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-500 dark:text-gray-400">
            No case studies found for this category yet.
          </div>
        )}

      </div>
    </section>
  );
}

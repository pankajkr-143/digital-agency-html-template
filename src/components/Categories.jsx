import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  { id: 1, name: "IT Services", slug: "it-services", image: "/images/categories/it_services.png" },
  { id: 2, name: "Leads Growth", slug: "business-leads", image: "/images/categories/leads_growth.png" },
  { id: 3, name: "Construction", slug: "construction", image: "/images/categories/construction.png" },
  { id: 4, name: "EdTech & LMS", slug: "edtech-lms", image: "/images/categories/edtech.png" },
  { id: 5, name: "Digital Marketing", slug: "digital-marketing", image: "/images/categories/digital_marketing.png" },
  { id: 6, name: "AI & Automation", slug: "ai-automation", image: "/images/categories/ai_automation.png" },
  { id: 7, name: "Cab Services", slug: "cab-services", image: "/images/categories/cab_services.png" },
  { id: 8, name: "Payment Gateway", slug: "payment-gateway", image: "/images/categories/payment_gateway.png" },
  { id: 9, name: "WhatsApp API", slug: "whatsapp-api", image: "/images/categories/whatsapp_api.png" },
  { id: 10, name: "Sales & Marketing", slug: "sales-marketing", image: "/images/categories/sales_marketing.png" },
];

export default function Categories() {
  return (
    <section className="py-8 bg-white dark:bg-gray-900 relative z-10 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Responsive Grid: 2 rows on desktop (5 cols), stacks nicely on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 pb-4">
          {categories.map((category, index) => {
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ y: -3, scale: 1.05 }}
              >
                <Link to={`/solutions/${category.slug}`} className="flex flex-col items-center justify-center group w-full h-full">
                  {/* 3D Image Container - Increased Size */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-4 rounded-3xl bg-gray-50/80 dark:bg-gray-800/80 p-3 shadow-sm group-hover:shadow-lg group-hover:shadow-blue-500/10 transition-all duration-300 flex items-center justify-center overflow-hidden border border-gray-100 dark:border-gray-700">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                  {/* Text Label */}
                  <h3 className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200 text-center leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors px-2">
                    {category.name}
                  </h3>
                </Link>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}

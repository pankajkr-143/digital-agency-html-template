import { motion } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Code, 
  Palette, 
  Cloud, 
  Cpu,
  CheckCircle,
  Users,
  Award,
  Zap,
  Shield,
  Target
} from "lucide-react";

export default function SEOContent() {
  const services = [
    {
      icon: Globe,
      title: "Enterprise Web Applications",
      description: "Scalable, secure, and lightning-fast web systems built using modern architectures like React, Next.js, and Node.js.",
      features: ["Next.js & React Apps", "Headless CMS Solutions", "B2B/B2C Portals", "High-Traffic E-commerce"],
      gradient: "from-blue-500/10 to-indigo-500/10"
    },
    {
      icon: Smartphone,
      title: "Mobile App Engineering", 
      description: "Native-grade cross-platform mobile apps for iOS and Android, offering smooth animations and offline-first capabilities.",
      features: ["React Native & Flutter", "App Store Publishing", "Push Notifications", "Biometric Integration"],
      gradient: "from-blue-500/10 to-indigo-500/10"
    },
    {
      icon: Code,
      title: "Custom SaaS Development",
      description: "Robust and secure backend platforms, microservices, and databases engineered to automate and scale business workflows.",
      features: ["REST & GraphQL APIs", "Microservices Design", "Payment Gateway Integrations", "Database Tuning"],
      gradient: "from-blue-500/10 to-indigo-500/10"
    },
    {
      icon: Palette,
      title: "UI/UX Product Design",
      description: "User-centric designs, responsive layouts, and interactive wireframes built after thorough market and user research.",
      features: ["Interactive Prototypes", "Design Systems", "User Journey Mapping", "Usability Testing"],
      gradient: "from-blue-500/10 to-indigo-500/10"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Solutions",
      description: "Optimized infrastructure deployment, CI/CD pipelines, and cloud migration services on AWS, GCP, and Azure.",
      features: ["Docker & Kubernetes", "CI/CD Automation Pipelines", "Cloud Cost Optimization", "Zero-Downtime Deployments"],
      gradient: "from-blue-500/10 to-indigo-500/10"
    },
    {
      icon: Cpu,
      title: "AI & Data Solutions",
      description: "Integration of smart machine learning models, chatbots, and advanced data analytics to drive business decisions.",
      features: ["AI Chatbots & NLP", "Predictive Analytics", "Data Warehousing", "Automated Workflows"],
      gradient: "from-blue-500/10 to-indigo-500/10"
    }
  ];

  const stats = [
    { icon: CheckCircle, value: "500+", label: "Projects Delivered", color: "text-blue-400" },
    { icon: Users, value: "50+", label: "Global Clients", color: "text-blue-400" },
    { icon: Shield, value: "99.9%", label: "Uptime & Security", color: "text-blue-400" },
    { icon: Award, value: "15+", label: "Core Technologies", color: "text-blue-400" }
  ];

  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider block mb-3">Enterprise Offerings</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Engineered for Scale, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Designed for Impact</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            We build high-performance web systems, custom mobile apps, and scalable digital platforms that help brands grow and succeed in a highly competitive digital era.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="relative group"
            >
              <div className="relative h-full bg-white/[0.02] hover:bg-white/[0.04] p-8 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between">
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-105 transition-transform duration-300">
                    <service.icon className="w-5 h-5" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                {/* Features */}
                <div className="space-y-2.5 pt-4 border-t border-white/5">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-400 text-xs">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-md">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Our Execution <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Standards</span>
            </h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="text-center group"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors duration-300">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>{stat.value}</div>
                  <div className="text-gray-500 text-xs sm:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            {/* CTA Content */}
            <div className="text-center space-y-6 pt-6 border-t border-white/5">
              <div className="flex flex-wrap justify-center gap-3 text-xs">
                <span className="px-4 py-2 bg-white/[0.03] text-blue-300 rounded-full border border-white/10 flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-blue-400" /> Enterprise Architecture
                </span>
                <span className="px-4 py-2 bg-white/[0.03] text-blue-300 rounded-full border border-white/10 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-blue-400" /> High Performance & Clean Code
                </span>
                <span className="px-4 py-2 bg-white/[0.03] text-blue-300 rounded-full border border-white/10 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-blue-400" /> Trusted Engineering Partner
                </span>
              </div>
              
              <div className="max-w-3xl mx-auto space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed">
                <p>
                  At <strong>MackysTech</strong>, we follow rigorous architectural practices to make sure every product we build is fast, secure, and ready for global scale. We align business strategy with technical execution to drive measurable outcomes.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

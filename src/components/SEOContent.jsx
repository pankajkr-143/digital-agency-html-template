import { motion } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Code, 
  GraduationCap, 
  Briefcase, 
  Users,
  CheckCircle,
  Star,
  TrendingUp,
  Award,
  Target,
  Zap
} from "lucide-react";

export default function SEOContent() {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Professional websites that convert visitors into customers",
      features: ["E-commerce", "Business Sites", "Portfolio", "Custom Apps"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "App Development", 
      description: "Native & cross-platform mobile apps for iOS & Android",
      features: ["Android Apps", "iOS Apps", "React Native", "Hybrid Apps"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs",
      features: ["ERP Systems", "CRM Software", "SaaS Apps", "Business Automation"],
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: GraduationCap,
      title: "IT Training Institute",
      description: "Industry-leading training with live projects & certification",
      features: ["Full Stack", "Python", "Digital Marketing", "Cyber Security"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Briefcase,
      title: "Internship Programs",
      description: "Real-world experience with certificate & placement support",
      features: ["6 Months Program", "Live Projects", "Work from Home", "Certificate"],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Users,
      title: "Job Placement",
      description: "Direct placement in top IT companies across India",
      features: ["Software Developer", "Web Developer", "Remote Jobs", "Freshers Welcome"],
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  const stats = [
    { icon: CheckCircle, value: "500+", label: "Projects Delivered", color: "text-blue-400" },
    { icon: GraduationCap, value: "1000+", label: "Students Trained", color: "text-green-400" },
    { icon: Briefcase, value: "200+", label: "Interns Placed", color: "text-purple-400" },
    { icon: Star, value: "98%", label: "Client Satisfaction", color: "text-yellow-400" }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#0b1220] to-[#0f1929] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">IT Solutions</span> for Your Business
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            MackysTech is India's most trusted <strong className="text-blue-400">IT company</strong> offering end-to-end digital solutions. 
            From <strong className="text-purple-400">website development</strong> to <strong className="text-green-400">AI solutions</strong>, 
            we provide everything your business needs to dominate the digital landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-[#111a2e] p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
          transition={{ duration: 0.6, delay: 0.7 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-2xl"></div>
          <div className="relative bg-gradient-to-r from-[#111a2e] to-[#0f1929] p-12 rounded-3xl border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-12 text-center">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">MackysTech</span>?
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300`}>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            {/* CTA Content */}
            <div className="text-center space-y-6">
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">
                  <Target className="inline w-4 h-4 mr-1" /> Best IT Company India
                </span>
                <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full border border-green-500/30">
                  <TrendingUp className="inline w-4 h-4 mr-1" /> 500+ Projects
                </span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                  <Award className="inline w-4 h-4 mr-1" /> Trusted Partner
                </span>
                <span className="px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full border border-orange-500/30">
                  <Zap className="inline w-4 h-4 mr-1" /> Fast Delivery
                </span>
              </div>
              
              <div className="max-w-4xl mx-auto space-y-4 text-gray-300">
                <p className="text-lg leading-relaxed">
                  🚀 <strong className="text-blue-400">MackysTech</strong> is your one-stop solution for all IT needs. 
                  We are the <strong className="text-green-400">bharosemand IT company</strong> that provides 
                  <strong className="text-purple-400"> sasti IT services</strong> without compromising on quality.
                </p>
                <p className="text-lg leading-relaxed">
                  🎯 Whether you need a <strong className="text-blue-300">website banane wali IT company</strong>, 
                  <strong className="text-purple-300"> app banane wali IT company</strong>, or 
                  <strong className="text-green-300"> software banane wali IT company</strong>, we've got you covered.
                </p>
                <p className="text-lg leading-relaxed">
                  📍 Serving <strong className="text-orange-400">Madhya Pradesh</strong>, 
                  <strong className="text-pink-400">Bhopal</strong>, and all of India with professional IT services.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

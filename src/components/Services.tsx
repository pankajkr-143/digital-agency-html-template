import { motion } from 'framer-motion';
import { Code2, Cloud, Database, Layout, Cog, Users } from 'lucide-react';
import GlitchText from './effects/GlitchText';
import { Canvas } from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei';

const ServiceCard = ({ icon: Icon, title, description, color, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-neo-black p-6 rounded-sm relative group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,255,65,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className={`text-${color} mb-4 transition-transform duration-300 group-hover:scale-110`}>
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="font-semibold text-xl text-white mb-2">{title}</h3>
      <p className="text-gray-400 font-code text-sm">{description}</p>
      <div className="mt-4">
        <button className={`text-${color} font-code text-sm group-hover:underline`}>
          &gt;_LEARN_MORE
        </button>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: 'Custom Software',
      description: 'Tailored software solutions designed to meet your specific business requirements and objectives.',
      color: 'neo-blue-100'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services for optimal performance and reliability.',
      color: 'neo-green-100'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform your raw data into actionable insights with our advanced analytics solutions.',
      color: 'neo-purple-100'
    },
    {
      icon: Layout,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      color: 'neo-green-100'
    },
    {
      icon: Cog,
      title: 'DevOps',
      description: 'Streamline your development and operations with our automated CI/CD pipelines.',
      color: 'neo-blue-100'
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Expert guidance to help you make informed decisions about your technology stack.',
      color: 'neo-purple-100'
    }
  ];

  return (
    <section id="services" className="py-20 relative bg-neo-dark overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <GlitchText 
              text="OUR SERV_CES" 
              className="text-white text-shadow-neon-green"
              intensity="low"
            />
          </h2>
          
          <p className="max-w-2xl mx-auto text-gray-400 font-code">
            We deliver cutting-edge software solutions that drive innovation and business growth.
            Our services are designed to help you stay ahead in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              {...service}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
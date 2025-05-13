import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Youtube, Mail } from 'lucide-react';
import GlitchText from './effects/GlitchText';

const Footer = () => {
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, url: '#', name: 'GitHub' },
    { icon: <Twitter className="h-5 w-5" />, url: '#', name: 'Twitter' },
    { icon: <Linkedin className="h-5 w-5" />, url: '#', name: 'LinkedIn' },
    { icon: <Youtube className="h-5 w-5" />, url: '#', name: 'YouTube' },
    { icon: <Mail className="h-5 w-5" />, url: '#', name: 'Email' },
  ];
  
  const mainLinks = [
    { name: 'Services', url: '#services' },
    { name: 'About', url: '#about' },
    { name: 'Technologies', url: '#tech' },
    { name: 'Contact', url: '#contact' },
    { name: 'Careers', url: '#' },
    { name: 'Blog', url: '#' },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  return (
    <footer className="relative bg-neo-dark overflow-hidden pt-16 pb-8">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neo-green-100 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="https://i.ibb.co/ymkKpn1w/cropped-image.png"
                alt="Macky's Tech Logo"
                className="h-8 w-auto"
              />
              <span className="ml-2 text-2xl font-vt323 glow-text text-neo-green-100">
                Macky's Tech
              </span>
            </div>
            
            <p className="font-code text-gray-400 text-sm mb-6">
              Pioneering the future at the intersection of artificial intelligence, 
              cybersecurity, and quantum computing.
            </p>
            
            <motion.div 
              className="flex space-x-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  className="p-2 text-gray-400 hover:text-neo-green-100 transition-colors duration-300"
                  aria-label={link.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
          
          <div className="col-span-1 lg:col-span-1">
            <h3 className="font-vt323 text-lg text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {mainLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="font-code text-sm text-gray-400 hover:text-neo-green-100 transition-colors duration-300 flex items-center"
                  >
                    <span className="text-neo-green-100 mr-2">&gt;</span> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-1 lg:col-span-1">
            <h3 className="font-vt323 text-lg text-white mb-6">Our Solutions</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="font-code text-sm text-gray-400 hover:text-neo-blue-100 transition-colors duration-300 flex items-center">
                  <span className="text-neo-blue-100 mr-2">&gt;</span> AI & Machine Learning
                </a>
              </li>
              <li>
                <a href="#" className="font-code text-sm text-gray-400 hover:text-neo-blue-100 transition-colors duration-300 flex items-center">
                  <span className="text-neo-blue-100 mr-2">&gt;</span> Cybersecurity Suite
                </a>
              </li>
              <li>
                <a href="#" className="font-code text-sm text-gray-400 hover:text-neo-blue-100 transition-colors duration-300 flex items-center">
                  <span className="text-neo-blue-100 mr-2">&gt;</span> Quantum Computing
                </a>
              </li>
              <li>
                <a href="#" className="font-code text-sm text-gray-400 hover:text-neo-blue-100 transition-colors duration-300 flex items-center">
                  <span className="text-neo-blue-100 mr-2">&gt;</span> Blockchain Technology
                </a>
              </li>
              <li>
                <a href="#" className="font-code text-sm text-gray-400 hover:text-neo-blue-100 transition-colors duration-300 flex items-center">
                  <span className="text-neo-blue-100 mr-2">&gt;</span> IoT Security
                </a>
              </li>
              <li>
                <a href="#" className="font-code text-sm text-gray-400 hover:text-neo-blue-100 transition-colors duration-300 flex items-center">
                  <span className="text-neo-blue-100 mr-2">&gt;</span> Custom Solutions
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1 lg:col-span-1">
            <h3 className="font-vt323 text-lg text-white mb-6">Subscribe</h3>
            <p className="font-code text-sm text-gray-400 mb-4">
              Stay updated with our latest innovations and research.
            </p>
            
            <form className="space-y-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full bg-neo-black border-0 focus:ring-0 focus:outline-none font-code text-gray-300 px-4 py-3 neon-border-purple hover:bg-neo-purple-100 hover:bg-opacity-5 focus:bg-neo-purple-100 focus:bg-opacity-5 transition-colors duration-300"
                />
              </div>
              <button 
                type="submit"
                className="w-full neon-border-purple px-4 py-2 font-vt323 text-neo-purple-100 hover:bg-neo-purple-100 hover:bg-opacity-10 transition-all duration-300"
              >
                &gt;_SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <div className="font-code text-xs text-gray-500 mb-4 md:mb-0">
            <GlitchText 
              text="© 2025 Macky's Tech. All rights reserved." 
              intensity="low"
            />
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="font-code text-xs text-gray-500 hover:text-neo-green-100 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="font-code text-xs text-gray-500 hover:text-neo-green-100 transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="font-code text-xs text-gray-500 hover:text-neo-green-100 transition-colors duration-300">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { ChevronDown, Terminal, Shield, Cpu, Code, Lock } from 'lucide-react';
import MatrixRain from './effects/MatrixRain';

const Hero = () => {
  const el = useRef<HTMLSpanElement>(null);
  const typedRef = useRef<Typed | null>(null);
  
  useEffect(() => {
    if (el.current) {
      typedRef.current = new Typed(el.current, {
        strings: [
          'Web/App Solution(Developer for Orgs.);',
          'System.infiltrate("secure_network");',
          'AI.analyze("neural_patterns");',
          'Quantum.decrypt("encrypted_data");',
          'Future.initialize("innovation");'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: '_'
      });
    }
    
    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);

  const features = [
    { icon: <Shield className="h-6 w-6" />, text: "Advanced Security" },
    { icon: <Cpu className="h-6 w-6" />, text: "Quantum Computing" },
    { icon: <Code className="h-6 w-6" />, text: "Web/App Dev" },
    { icon: <Lock className="h-6 w-6" />, text: "Blockchain Tech" }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neo-black">
      <MatrixRain />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neo-black/50 to-neo-black"></div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1624895/pexels-photo-1624895.jpeg')] bg-cover bg-center"
      ></motion.div>
      
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-10"></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 inline-flex items-center justify-center space-x-2 bg-neo-dark/80 backdrop-blur-sm px-4 py-2 rounded-full border border-neo-green-100/20"
          >
            <Terminal className="h-4 w-4 text-neo-green-100" />
            <code className="text-sm text-neo-green-100">
              ./initialize_system --mode=quantum
            </code>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl font-vt323 mb-6 text-white text-shadow-neon-green"
          >
            NEXT-GEN
            <span className="text-neo-green-100"> IT/CYBER/Ai </span>
            SOLUTIONS
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <div className="bg-neo-dark/80 backdrop-blur-sm p-4 rounded-lg inline-block">
              <span ref={el} className="text-lg sm:text-xl font-code text-neo-green-100"></span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-neo-dark/80 backdrop-blur-sm p-4 rounded-lg border border-neo-green-100/20 hover:border-neo-green-100/40 transition-all duration-300"
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className="text-neo-green-100">{feature.icon}</div>
                  <span className="text-sm font-code text-gray-400">{feature.text}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a 
              href="#services" 
              className="neon-border-green px-8 py-3 rounded-sm font-vt323 text-neo-green-100 hover:bg-neo-green-100 hover:bg-opacity-10 transition-all duration-300 text-lg backdrop-blur-sm"
            >
              &gt;_INITIALIZE_SYSTEM
            </a>
            <a 
              href="#about" 
              className="px-8 py-3 font-vt323 text-white border border-white hover:border-neo-blue-100 hover:text-neo-blue-100 transition-all duration-300 text-lg group flex items-center backdrop-blur-sm"
            >
              &gt;_ACCESS_DATA
              <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1, 
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <ChevronDown className="h-8 w-8 text-neo-green-100" />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neo-black to-transparent"></div>
    </div>
  );
};

export default Hero;
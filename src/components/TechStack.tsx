import { motion } from 'framer-motion';
import { Code2, Server, Database, Cloud, Globe, Shield } from 'lucide-react';
import GlitchText from './effects/GlitchText';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface TechInfo {
  title: string;
  description: string;
  implementation: string;
  integration: string;
  icon: typeof Code2;
  color: string;
}

const TechStack = () => {
  const [selectedTech, setSelectedTech] = useState<TechInfo | null>(null);
  const navigate = useNavigate();

  const technologies: TechInfo[] = [
    {
      icon: Code2,
      title: 'Frontend',
      description: 'Modern web frameworks and libraries for building responsive, interactive user interfaces.',
      implementation: '100%',
      integration: 'Active',
      color: 'neo-blue-100'
    },
    {
      icon: Server,
      title: 'Backend',
      description: 'Robust server-side solutions using Node.js, Python, and modern frameworks.',
      implementation: '100%',
      integration: 'Active',
      color: 'neo-green-100'
    },
    {
      icon: Database,
      title: 'Databases',
      description: 'PostgreSQL, MongoDB, Redis, and other modern database solutions for data management.',
      implementation: '100%',
      integration: 'Active',
      color: 'neo-purple-100'
    },
    {
      icon: Cloud,
      title: 'Cloud',
      description: 'AWS, Google Cloud, Azure for scalable and reliable infrastructure deployment.',
      implementation: '100%',
      integration: 'Active',
      color: 'neo-green-100'
    },
    {
      icon: Globe,
      title: 'APIs',
      description: 'RESTful and GraphQL APIs built for scalability and performance.',
      implementation: '100%',
      integration: 'Active',
      color: 'neo-blue-100'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Advanced security measures and best practices for data protection.',
      implementation: '100%',
      integration: 'Active',
      color: 'neo-purple-100'
    }
  ];

  const handleRequestDetails = () => {
    navigate('/contact');
  };

  return (
    <section id="tech" className="py-20 relative bg-neo-black overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"></div>
        
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <GlitchText 
              text="Tech Stack" 
              className="text-white text-shadow-neon-blue"
              intensity="low"
            />
          </h2>
            
          <p className="max-w-2xl mx-auto text-gray-400 font-code">
            Our technology stack is carefully chosen to deliver robust, scalable,
            and maintainable solutions for our clients.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className={`w-24 h-24 bg-neo-black flex items-center justify-center cursor-pointer relative hexagon border border-${tech.color} hover:neon-border-${tech.color}`}
              whileHover={{ scale: 1.1 }}
              onClick={() => setSelectedTech(tech)}
            >
              <tech.icon className={`h-8 w-8 text-${tech.color}`} />
            </motion.div>
          ))}
        </div>

        {selectedTech && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`bg-neo-black p-6 rounded-sm neon-border-${selectedTech.color} max-w-2xl mx-auto`}
          >
            <div className="flex items-center mb-4">
              <selectedTech.icon className={`h-6 w-6 text-${selectedTech.color} mr-3`} />
              <h3 className="font-semibold text-xl text-white">{selectedTech.title}</h3>
            </div>
            
            <p className="text-gray-400 font-code text-sm mb-4">
              {selectedTech.description}
            </p>
            
            <div className="space-y-2 font-code text-sm">
              <div className="flex items-center">
                <span className="w-32 text-gray-500">Implementation:</span>
                <span className="text-neo-green-100">{selectedTech.implementation}</span>
              </div>
              <div className="flex items-center">
                <span className="w-32 text-gray-500">Integration:</span>
                <span className="text-neo-blue-100">{selectedTech.integration}</span>
              </div>
            </div>
            
            <button 
              onClick={handleRequestDetails}
              className={`mt-4 px-4 py-2 text-${selectedTech.color} font-code text-sm hover:underline`}
            >
              _REQUEST_DETAILS →
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TechStack;
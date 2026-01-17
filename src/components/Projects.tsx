import { motion } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react';
import GlitchText from './effects/GlitchText';

const Projects = () => {
  const projects = [
    {
      title: 'NGO Platform',
      description: 'A modern NGO Platform who work for charity and more flexible feature like join, volunteer, Donationas and more... .',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: 'https://i.ibb.co/DD0dnCM6/EA335924-CF63-4524-8749-45-D1368879-D2.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: 'https://ngo-helper.vercel.app/'
    },
    {
      title: 'CyberHex - Event Platform',
      description: 'CyberHex is a event organizer platform, where you can oraganize your events like  games, hackathons, workshop and more ..',
      tech: ['React.js', 'Supabase', 'Node.js', 'TypeScript'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: 'https://adorable-centaur-6a441e.netlify.app/'
    },
    {
      title: 'Stock Management System',
      description: 'Multi-cloud infrastructure management solution.',
      tech: ['Python', 'Django', 'SQLite3'],
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: 'https://github.com/pankajkr-143/Stock-Management-System.git'
    }
  ];

  // Additional projects for the projects page
  const additionalProjects = [
    {
      title: 'AI Image Generator',
      description: 'Generate unique images using advanced AI algorithms and deep learning models.',
      tech: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#'
    },
    {
      title: 'Blockchain Voting System',
      description: 'Secure and transparent voting system built on blockchain technology.',
      tech: ['Solidity', 'Web3.js', 'React', 'Node.js'],
      image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#'
    },
    {
      title: 'IoT Dashboard',
      description: 'Real-time monitoring and control system for IoT devices.',
      tech: ['React', 'Node.js', 'MQTT', 'Socket.io'],
      image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#'
    },
    {
      title: 'E-Learning Platform',
      description: 'Comprehensive online learning platform with video courses and assessments.',
      tech: ['Next.js', 'Django', 'PostgreSQL', 'AWS'],
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#'
    },
    {
      title: 'Healthcare Management System',
      description: 'Digital solution for managing patient records and hospital operations.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: 'https://images.pexels.com/photos/7089629/pexels-photo-7089629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#'
    },
    {
      title: 'Smart Home Automation',
      description: 'IoT-based home automation system with mobile app control.',
      tech: ['React Native', 'Node.js', 'MQTT', 'MongoDB'],
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#'
    }
  ];

  // Use all projects for projects page, but only first 3 for home page
  const isProjectsPage = window.location.pathname === '/projects';
  const displayProjects = isProjectsPage ? [...projects, ...additionalProjects] : projects;

  return (
    <section id="projects" className="py-20 relative bg-neo-black overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <GlitchText 
              text="Featured Projects" 
              className="text-white text-shadow-neon-green"
              intensity="low"
            />
          </h2>
          
          <p className="max-w-2xl mx-auto text-gray-400 font-code">
            Explore our portfolio of innovative solutions that showcase our expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-neo-dark rounded-sm overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neo-black to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <h3 className="font-semibold text-xl text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 font-code text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 text-xs font-code bg-neo-green-100 bg-opacity-10 text-neo-green-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link}
                  className="flex items-center text-neo-green-100 font-code text-sm group"
                >
                  <Code className="h-4 w-4 mr-2" />
                  View Project
                  <ExternalLink className="h-4 w-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
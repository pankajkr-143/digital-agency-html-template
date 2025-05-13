import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import GlitchText from './effects/GlitchText';
import TypewriterEffect from './effects/TypewriterEffect';

const About = () => {
  const timelineEvents = [
    {
    year: '2019',
    title: 'Dream Sparked',
    description: 'Thought about starting an IT company while studying in Class 10.'
  },
  {
    year: '2020',
    title: 'Learning Begins',
    description: 'Started learning programming and exploring web development through online courses.'
  },
  {
    year: '2021',
    title: 'First Project',
    description: 'Built and launched a basic website for a local business, gaining real-world experience.'
  },
  {
    year: '2022',
    title: 'Freelance Journey',
    description: 'Took freelance projects and started building a small team of like-minded developers.'
  },
  {
    year: '2023',
    title: 'Company Registered',
    description: 'Officially registered the IT startup focused on web and app development.'
  },
  {
    year: '2024',
    title: 'Client Growth',
    description: 'Delivered over 50 projects and gained clients from multiple countries.'
  },
  {
    year: '2025',
    title: 'Vision Forward',
    description: 'Expanding into AI and cybersecurity to shape the future of digital solutions.'
  },
  ];

  return (
    <section id="about" className="py-20 relative bg-neo-black overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-2">
            <code className="text-xs bg-neo-blue-100 bg-opacity-10 text-neo-blue-100 px-2 py-1 rounded-sm">
              $ ./about --show-history
            </code>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-vt323 mb-4">
            <GlitchText 
              text="OUR JOURNEY" 
              className="text-white text-shadow-neon-blue"
              intensity="low"
            />
          </h2>
          
          <p className="max-w-2xl mx-auto text-gray-400 font-code">
            Since our inception, we've been at the forefront of technological innovation, 
            consistently breaking barriers and redefining what's possible.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-neo-dark p-8 rounded-sm neon-border-blue h-full">
              <div className="flex items-center mb-6">
                <Terminal className="h-5 w-5 text-neo-blue-100 mr-2" />
                <div className="font-vt323 text-neo-blue-100 text-lg">
                  &gt; About Macky's Tech
                </div>
              </div>
              
              <div className="terminal-text font-code text-sm space-y-4 text-gray-300">
                <p>
                  <TypewriterEffect 
                    strings={[
                      'Mackys Tech is at the frontier of technological evolution, where artificial intelligence meets cybersecurity to create unprecedented solutions.'
                    ]}
                    typeSpeed={20}
                    startDelay={500}
                    showCursor={false}
                    loop={false}
                  />
                </p>
                
                <p className="text-gray-400">
                  Our multidisciplinary team combines expertise in machine learning, quantum computing, 
                  blockchain technology, and cybersecurity to address the most complex challenges of the digital age.
                </p>
                
                <p className="text-gray-400">
                  We believe in a future where technology enhances human potential rather than replacing it. 
                  Our mission is to develop systems that augment human capabilities while ensuring 
                  the highest standards of security and ethical implementation.
                </p>
                
                <p className="text-gray-400">
                  With clients ranging from Fortune 500 companies to government agencies, 
                  our solutions have been deployed across diverse sectors including finance, 
                  healthcare, defense, and telecommunications.
                </p>
                
                <div className="flex items-center text-neo-blue-100 mt-6 pt-4 border-t border-gray-800">
                  <span className="animate-pulse mr-2">&#9608;</span>
                  <TypewriterEffect 
                    strings={['Ready to define the future together?']}
                    typeSpeed={40}
                    startDelay={2000}
                    showCursor={true}
                    loop={false}
                  />
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="timeline pl-10 relative">
              {timelineEvents.map((event, index) => (
                <motion.div 
                  key={index}
                  className="timeline-entry mb-8 pl-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-neo-dark p-4 rounded-sm hover:neon-border-green transition-all duration-300">
                    <div className="flex items-center mb-2">
                      <span className="font-vt323 text-neo-green-100 text-xl mr-3">{event.year}</span>
                      <h3 className="font-code text-white text-lg">{event.title}</h3>
                    </div>
                    <p className="font-code text-gray-400 text-sm">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import GlitchText from './effects/GlitchText';

const Founder = () => {
  return (
    <section id="founder" className="py-20 relative bg-neo-dark overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-2">
            <code className="text-xs bg-neo-green-100 bg-opacity-10 text-neo-green-100 px-2 py-1 rounded-sm">
              $ ./about --show-founder
            </code>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-vt323 mb-4">
            <GlitchText 
              text="MEET OUR FOUNDER" 
              className="text-white text-shadow-neon-green"
              intensity="low"
            />
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="w-full lg:w-2/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative max-w-md mx-auto">
              <img 
                src="https://i.ibb.co/yGCWX76/Whats-App-Image-2025-06-08-at-04-10-59-002b80d8.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Founder"
                className="w-full h-[400px] object-cover rounded-sm neon-border-green"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-3/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-vt323 text-3xl text-white mb-4">Pankaj Gupta (Macky)</h3>
            <div className="text-neo-green-100 font-code text-lg mb-6">Founder & CEO</div>
            
            <div className="space-y-4 font-code text-gray-400">
              <p>
                With over 8+ years of experience in software development and technology innovation,
                Macky has led multiple successful startups and technology initiatives.
              </p>
              <p>
                A graduate of TIT Technocrats with a passion for artificial intelligence and cybersecurity in Computer Science,
                Macky founded our company with a vision to revolutionize the software industry
                through cutting-edge solutions.
              </p>
              <p>
                Under his leadership, we've grown from a small startup to a leading software
                development company, serving clients worldwide and pushing the boundaries of
                what's possible in technology.
              </p>
            </div>
            
            <div className="mt-8 flex space-x-6">
              <a 
                href="https://github.com/pankajkr-143" 
                className="text-gray-400 hover:text-neo-green-100 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/pankaj-kumar-647080266/" 
                className="text-gray-400 hover:text-neo-green-100 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://x.com/pankajkrceo" 
                className="text-gray-400 hover:text-neo-green-100 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Co-Founder Section */}
        <div className="mt-20 pt-20 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <motion.div 
              className="w-full lg:w-2/5"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative max-w-md mx-auto">
                <img 
                  src="https://i.ibb.co/NghfzrHP/image.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Co-Founder"
                  className="w-full h-[400px] object-cover rounded-sm neon-border-green"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full lg:w-3/5"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-vt323 text-3xl text-white mb-4">Ayush K Singh</h3>
              <div className="text-neo-green-100 font-code text-lg mb-6">Co-Founder</div>
              
              <div className="space-y-4 font-code text-gray-400">
                <p>
                  With extensive experience in software architecture and technical leadership,
                  our co-founder brings deep expertise in scalable system design and innovation.
                </p>
                <p>
                  A technology visionary with a strong background in full-stack development
                  and cloud computing, they play a crucial role in driving our technical
                  excellence and product innovation.
                </p>
                <p>
                  Their leadership in our technical initiatives has been instrumental in
                  building robust, scalable solutions that meet the evolving needs of our
                  clients and partners worldwide.
                </p>
              </div>
              
              <div className="mt-8 flex space-x-6">
                <a 
                  href="https://github.com/ayushkumar1234/" 
                  className="text-gray-400 hover:text-neo-green-100 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/ayush-kumar-singh-b36b16245/" 
                  className="text-gray-400 hover:text-neo-green-100 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="https://x.com/ayush_k_singh" 
                  className="text-gray-400 hover:text-neo-green-100 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
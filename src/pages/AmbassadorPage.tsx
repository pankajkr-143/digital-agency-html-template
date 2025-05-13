import React, { useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Star, Target, Zap, Gift } from 'lucide-react';
import GlitchText from '../components/effects/GlitchText';
import Contact from '../components/Contact';

const AmbassadorPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Exclusive Training',
      description: 'Access to specialized technical workshops and certification programs.'
    },
    {
      icon: <Gift className="h-8 w-8" />,
      title: 'Company Swag',
      description: 'Receive branded merchandise and exclusive company products.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Networking',
      description: 'Connect with industry professionals and fellow ambassadors.'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Career Growth',
      description: 'Priority consideration for internships and full-time positions.'
    }
  ];

  const responsibilities = [
    'Organize and lead technical workshops on campus',
    'Represent the company at university events and career fairs',
    'Create content for social media and blog posts',
    'Build and maintain relationships with student organizations',
    'Provide feedback on company initiatives and products',
    'Help identify and recruit talented students'
  ];

  return (
    <div className="min-h-screen bg-neo-black pt-20">
      <section className="py-20 relative bg-neo-dark overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-2">
              <code className="text-xs bg-neo-purple-100 bg-opacity-10 text-neo-purple-100 px-2 py-1 rounded-sm">
                $ ./careers --show-ambassador-program
              </code>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-vt323 mb-4">
              <GlitchText 
                text="STUDENT AMBASSADOR PROGRAM" 
                className="text-white text-shadow-neon-purple"
                intensity="low"
              />
            </h2>
            
            <p className="max-w-2xl mx-auto text-gray-400 font-code">
              Become a technology advocate and help shape the future of innovation on your campus.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-neo-black p-8 rounded-sm neon-border-purple"
            >
              <h3 className="font-vt323 text-2xl text-white mb-6 flex items-center">
                <Star className="h-6 w-6 text-neo-purple-100 mr-3" />
                Program Overview
              </h3>
              
              <div className="space-y-6 font-code text-gray-400">
                <p>
                  Our Student Ambassador Program is designed for passionate tech enthusiasts
                  who want to make an impact in their university community while gaining
                  valuable industry experience.
                </p>
                
                <div>
                  <h4 className="font-vt323 text-white mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-neo-purple-100 mr-2">›</span>
                      Currently enrolled university student
                    </li>
                    <li className="flex items-start">
                      <span className="text-neo-purple-100 mr-2">›</span>
                      Strong technical background
                    </li>
                    <li className="flex items-start">
                      <span className="text-neo-purple-100 mr-2">›</span>
                      Excellent communication skills
                    </li>
                    <li className="flex items-start">
                      <span className="text-neo-purple-100 mr-2">›</span>
                      Leadership experience
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-neo-black p-8 rounded-sm neon-border-purple"
            >
              <h3 className="font-vt323 text-2xl text-white mb-6 flex items-center">
                <Zap className="h-6 w-6 text-neo-purple-100 mr-3" />
                Responsibilities
              </h3>
              
              <div className="space-y-4">
                {responsibilities.map((responsibility, index) => (
                  <div
                    key={index}
                    className="flex items-start"
                  >
                    <span className="text-neo-purple-100 mr-3">0{index + 1}</span>
                    <p className="text-gray-400 font-code">{responsibility}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mb-16">
            <h3 className="text-center font-vt323 text-2xl text-white mb-8">Program Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-neo-black p-6 rounded-sm neon-border-purple text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-neo-purple-100 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h4 className="font-vt323 text-white mb-2">{benefit.title}</h4>
                  <p className="text-gray-400 font-code text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button className="neon-border-purple px-8 py-3 font-vt323 text-neo-purple-100 hover:bg-neo-purple-100 hover:bg-opacity-10 transition-all duration-300 text-lg">
              APPLY TO PROGRAM
            </button>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default AmbassadorPage;
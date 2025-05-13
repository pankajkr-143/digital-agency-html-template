import React, { useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Cloud, Shield, Database, Terminal } from 'lucide-react';
import GlitchText from '../components/effects/GlitchText';
import Contact from '../components/Contact';

const JobsPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jobs = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Lead the development of our core platform using modern web technologies.',
      requirements: [
        '5+ years of full-stack development experience',
        'Expertise in React and Node.js',
        'Experience with cloud platforms (AWS/GCP)',
        'Strong system design skills'
      ],
      icon: <Code className="h-6 w-6" />
    },
    {
      title: 'AI/ML Engineer',
      department: 'R&D',
      location: 'Remote',
      type: 'Full-time',
      description: 'Develop and implement machine learning solutions for our products.',
      requirements: [
        'MS/PhD in Computer Science or related field',
        'Strong background in ML/AI',
        'Experience with TensorFlow/PyTorch',
        'Published research is a plus'
      ],
      icon: <Brain className="h-6 w-6" />
    },
    {
      title: 'Cloud Infrastructure Engineer',
      department: 'DevOps',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Design and maintain our cloud infrastructure and deployment pipelines.',
      requirements: [
        'Strong experience with AWS/GCP',
        'Expertise in Kubernetes and Docker',
        'Infrastructure as Code experience',
        'Security best practices knowledge'
      ],
      icon: <Cloud className="h-6 w-6" />
    },
    {
      title: 'Security Engineer',
      department: 'Security',
      location: 'Boston, MA',
      type: 'Full-time',
      description: 'Implement and maintain security measures across our infrastructure.',
      requirements: [
        'Security certifications (CISSP, CEH)',
        'Experience with penetration testing',
        'Knowledge of compliance frameworks',
        'Incident response experience'
      ],
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: 'Database Administrator',
      department: 'Infrastructure',
      location: 'Austin, TX',
      type: 'Full-time',
      description: 'Manage and optimize our database systems and data infrastructure.',
      requirements: [
        'Advanced PostgreSQL experience',
        'Performance tuning expertise',
        'High availability design',
        'Backup and recovery planning'
      ],
      icon: <Database className="h-6 w-6" />
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Seattle, WA',
      type: 'Full-time',
      description: 'Build and maintain our CI/CD pipelines and automation systems.',
      requirements: [
        'Strong Linux/Unix background',
        'CI/CD pipeline expertise',
        'Configuration management',
        'Monitoring and logging systems'
      ],
      icon: <Terminal className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-neo-black pt-20">
      <section className="py-20 relative bg-neo-dark overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-2">
              <code className="text-xs bg-neo-blue-100 bg-opacity-10 text-neo-blue-100 px-2 py-1 rounded-sm">
                $ ./careers --list-positions
              </code>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-vt323 mb-4">
              <GlitchText 
                text="OPEN POSITIONS" 
                className="text-white text-shadow-neon-blue"
                intensity="low"
              />
            </h2>
            
            <p className="max-w-2xl mx-auto text-gray-400 font-code">
              Join our team of innovators and help shape the future of technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                className="bg-neo-black p-6 rounded-sm neon-border-blue"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-neo-blue-100 mb-4">
                  {job.icon}
                </div>
                
                <h3 className="font-vt323 text-xl text-white mb-2">
                  {job.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-neo-blue-100 bg-opacity-10 text-neo-blue-100 text-xs font-code">
                    {job.department}
                  </span>
                  <span className="px-2 py-1 bg-neo-blue-100 bg-opacity-10 text-neo-blue-100 text-xs font-code">
                    {job.location}
                  </span>
                  <span className="px-2 py-1 bg-neo-blue-100 bg-opacity-10 text-neo-blue-100 text-xs font-code">
                    {job.type}
                  </span>
                </div>
                
                <p className="text-gray-400 font-code text-sm mb-4">
                  {job.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-vt323 text-white mb-2">Requirements:</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-neo-blue-100 mr-2">›</span>
                        <span className="text-gray-400 font-code text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full neon-border-blue px-4 py-2 font-vt323 text-neo-blue-100 hover:bg-neo-blue-100 hover:bg-opacity-10 transition-all duration-300">
                  APPLY NOW
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default JobsPage;
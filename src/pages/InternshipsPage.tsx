import React, { useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Brain, Zap, Users, Award } from 'lucide-react';
import GlitchText from '../components/effects/GlitchText';
import { useNavigate } from 'react-router-dom';

const InternshipsPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const internships = [
    {
      title: 'Backend Developer Intern (PostgreSQL)',
      department: 'Engineering',
      duration: '3-6 months',
      description: 'Work with our backend team to build scalable APIs and data-driven systems using Node.js and PostgreSQL.',
      requirements: [
        'Pursuing CS/IT or related degree',
        'Good knowledge of Node.js or Python',
        'Experience with PostgreSQL or any SQL database',
        'Understanding of REST APIs and server-side logic'
      ],
    },
    {
      title: 'Social Media Marketing Intern',
      department: 'Marketing',
      duration: '2-3 months',
      description: 'Join our digital marketing team to manage social media platforms, run campaigns, and grow our brand online.',
      requirements: [
        'Basic understanding of digital marketing',
        'Familiar with Instagram, LinkedIn, and Facebook',
        'Creative mindset and content planning skills',
        'Experience with Canva or basic graphic tools is a plus'
      ],
    },
    {
      title: 'Full Stack Developer Intern',
      department: 'Engineering',
      duration: '3-6 months',
      description: 'Contribute to both frontend and backend projects using modern frameworks such as React and Node.js.',
      requirements: [
        'Strong programming knowledge in JavaScript',
        'Hands-on experience with React and Node.js',
        'Basic knowledge of database systems',
        'Willingness to learn and work on complete web stack'
      ],
    },
    {
      title: 'UI/UX Designer Intern',
      department: 'Design',
      duration: '2-3 months',
      description: 'Assist in designing user-friendly interfaces and enhancing user experiences across digital platforms.',
      requirements: [
        'Basic knowledge of UI/UX principles',
        'Experience with Figma, Adobe XD, or similar tools',
        'Ability to create wireframes and mockups',
        'Attention to detail and user empathy'
      ],
    },
    {
      title: 'Cyber Security Intern',
      department: 'Security',
      duration: '2-4 months',
      description: 'Work with our security team to assess, monitor, and improve the security posture of our applications.',
      requirements: [
        'Pursuing degree in Cyber Security/IT',
        'Familiarity with OWASP Top 10 and basic network security',
        'Understanding of vulnerabilities and penetration testing tools',
        'Ethical hacking certification is a plus'
      ],
    },
    {
      title: 'Content Creator Intern',
      department: 'Content/Marketing',
      duration: '2-3 months',
      description: 'Create engaging content for blogs, social media, and marketing campaigns to drive user engagement.',
      requirements: [
        'Strong written and verbal communication skills',
        'Creativity in content development and storytelling',
        'Familiarity with SEO basics and digital trends',
        'Experience with WordPress or Medium is a plus'
      ],
    },
    {
      title: 'AI Research Intern',
      department: 'R&D',
      duration: '6 months',
      description: 'Work on innovative AI projects and help shape the future of machine learning applications.',
      requirements: [
        'ML/AI academic background',
        'Python programming skills',
        'Understanding of neural networks',
        'Research experience is a plus'
      ],
      icon: <Brain className="h-6 w-6" />
    },
    {
      title: 'DevOps Intern',
      department: 'Infrastructure',
      duration: '3-6 months',
      description: 'Learn and implement modern DevOps practices and cloud infrastructure solutions.',
      requirements: [
        'Knowledge of Linux systems',
        'Basic understanding of CI/CD',
        'Interest in cloud technologies',
        'Scripting skills (Python/Bash)'
      ],
      icon: <Zap className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-neo-black pt-20">
      <section className="py-20 relative bg-neo-dark overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-2">
              <code className="text-xs bg-neo-green-100 bg-opacity-10 text-neo-green-100 px-2 py-1 rounded-sm">
                $ ./careers --list-internships
              </code>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-vt323 mb-4">
              <GlitchText 
                text="INTERNSHIP OPPORTUNITIES" 
                className="text-white text-shadow-neon-green"
                intensity="low"
              />
            </h2>
            
            <p className="max-w-2xl mx-auto text-gray-400 font-code">
              Launch your career with hands-on experience in cutting-edge technology projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internships.map((internship, index) => (
              <motion.div
                key={index}
                className="bg-neo-black p-6 rounded-sm neon-border-green"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-neo-green-100 mb-4">
                  {internship.icon}
                </div>
                
                <h3 className="font-vt323 text-xl text-white mb-2">
                  {internship.title}
                </h3>
                
                <div className="flex items-center mb-4">
                  <Users className="h-4 w-4 text-neo-green-100 mr-2" />
                  <span className="text-gray-400 font-code text-sm">{internship.department}</span>
                  <span className="mx-2 text-gray-600">•</span>
                  <BookOpen className="h-4 w-4 text-neo-green-100 mr-2" />
                  <span className="text-gray-400 font-code text-sm">{internship.duration}</span>
                </div>
                
                <p className="text-gray-400 font-code text-sm mb-4">
                  {internship.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-vt323 text-white mb-2">Requirements:</h4>
                  <ul className="space-y-2">
                    {internship.requirements.map((req, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-neo-green-100 mr-2">›</span>
                        <span className="text-gray-400 font-code text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full neon-border-green px-4 py-2 font-vt323 text-neo-green-100 hover:bg-neo-green-100 hover:bg-opacity-10 transition-all duration-300"
                  onClick={() => navigate('/InternshipFormPage')}
                >
                  APPLY NOW
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-neo-black p-8 rounded-sm neon-border-blue">
            <div className="flex items-center mb-6">
              <Award className="h-8 w-8 text-neo-blue-100 mr-4" />
              <h3 className="font-vt323 text-2xl text-white">Benefits</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4">
                <h4 className="font-vt323 text-neo-blue-100 mb-2">Learning & Development</h4>
                <p className="text-gray-400 font-code text-sm">
                  Access to online courses, workshops, and mentorship from industry experts.
                </p>
              </div>
              <div className="p-4">
                <h4 className="font-vt323 text-neo-blue-100 mb-2">Competitive Compensation</h4>
                <p className="text-gray-400 font-code text-sm">
                  Paid internships with performance-based bonuses.
                </p>
              </div>
              <div className="p-4">
                <h4 className="font-vt323 text-neo-blue-100 mb-2">Future Opportunities</h4>
                <p className="text-gray-400 font-code text-sm">
                  Potential for full-time positions upon successful completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternshipsPage;
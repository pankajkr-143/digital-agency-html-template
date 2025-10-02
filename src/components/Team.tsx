import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import GlitchText from './effects/GlitchText';

const Team = () => {
  const team = [
    {
      name: 'Vipin K Singh',
      role: 'Project Manager',
      image: 'https://i.ibb.co/zhXQ9zMX/image.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Project Manager & Full Stack Developer – A versatile professional skilled in leading projects from concept to deployment, with expertise in managing teams, building scalable applications, and delivering innovative end-to-end digital solutions.',
      social: {
        github: 'https://github.com/Tekush1/',
        linkedin: 'https://www.linkedin.com/in/vipin-kumar-408197382/',
        email: 'kushdwivedikd@gmail.com'
      }
    },
    {
      name: 'Priya Dubey',
      role: 'Hiring Manager',
      image: 'https://i.ibb.co/k2LGbCcc/pd.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'A dynamic individual balancing human resource management with a technical background, known for connecting with audiences through engaging talks and fostering strong teams.',
      social: {
        github: '#',
        linkedin: 'https://www.linkedin.com/in/priya-dubey-869b08347/',
        email: 'pd6838676@gmail.com'
      }
    },
    {
      name: 'Rishabh Raj',
      role: 'Public/Corporative Relation',
      image: 'https://i.ibb.co/3msbYJbn/rishu.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: ' An energetic communicator skilled in managing public and corporate relations, excelling in organizing impactful events and maintaining lasting stakeholder connections.',
      social: {
        github: '#',
        linkedin: 'https://www.linkedin.com/in/rishabh-raj-949717273/',
        email: 'rajrishabh2209@gmail.com'
      }
    },
    {
      name: 'Riya Tiwari',
      role: 'Managing Director',
      image: 'https://i.ibb.co/N6N8SjDy/riyu.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'A versatile developer experienced in building and managing complete web solutions, focused on delivering impactful and scalable applications for businesses..',
      social: {
        linkedin: 'https://www.linkedin.com/in/riya-tiwari-48a93625b/',
      }
    },
    {
      name: 'Kushagra Dwivedy',
      role: 'Chief Technology Officer',
      image: 'https://i.ibb.co/zV47yxgT/kush.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Cybersecurity Expert – A dedicated professional leading teams in securing digital environments, with a passion for ethical hacking and protecting networks from modern threats.',
      social: {
        github: 'https://github.com/Tekush1/',
        linkedin: 'https://www.linkedin.com/in/kushagra-dwivedi-0342062b8/',
        email: 'kushdwivedikd@gmail.com'
      }
    },
    // {
    //   name: 'Sophie Anderson',
    //   role: 'AI Research Lead',
    //   image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    //   bio: 'Leading AI/ML research initiatives with focus on natural language processing.',
    //   social: {
    //     github: '#',
    //     linkedin: '#',
    //     email: 'sophie@example.com'
    //   }
    // },
    // {
    //   name: 'James Wilson',
    //   role: 'Security Engineer',
    //   image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    //   bio: 'Expert in cybersecurity with focus on blockchain and cryptography.',
    //   social: {
    //     github: '#',
    //     linkedin: '#',
    //     email: 'james@example.com'
    //   }
    // },
    // {
    //   name: 'Maria Garcia',
    //   role: 'DevOps Engineer',
    //   image: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    //   bio: 'Specializing in CI/CD pipelines and cloud infrastructure automation.',
    //   social: {
    //     github: '#',
    //     linkedin: '#',
    //     email: 'maria@example.com'
    //   }
    // },
    // {
    //   name: 'Alex Thompson',
    //   role: 'UX Research Lead',
    //   image: 'https://images.pexels.com/photos/2182981/pexels-photo-2182981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    //   bio: 'Leading user research and experience design for our products.',
    //   social: {
    //     github: '#',
    //     linkedin: '#',
    //     email: 'alex@example.com'
    //   }
    // }
  ];

  // Only show first 4 members if not on team page
  const isTeamPage = window.location.pathname === '/team';
  const displayTeam = isTeamPage ? team : team.slice(0, 4);

  return (
    <section id="team" className="py-20 relative bg-neo-black overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-2">
            <code className="text-xs bg-neo-blue-100 bg-opacity-10 text-neo-blue-100 px-2 py-1 rounded-sm">
              $ ./team --list-members
            </code>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-vt323 mb-4">
            <GlitchText 
              text="OUR TEAM" 
              className="text-white text-shadow-neon-blue"
              intensity="low"
            />
          </h2>
          
          <p className="max-w-2xl mx-auto text-gray-400 font-code">
            Meet our team of experienced developers and technology experts who make the magic happen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayTeam.map((member, index) => (
            <motion.div
              key={index}
              className="bg-neo-dark rounded-sm overflow-hidden neon-border-blue"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden group">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neo-black to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <h3 className="font-vt323 text-xl text-white mb-1">{member.name}</h3>
                <div className="text-neo-blue-100 font-code text-sm mb-3">{member.role}</div>
                <p className="text-gray-400 font-code text-sm mb-4">{member.bio}</p>
                
                <div className="flex space-x-4">
                  <a 
                    href={member.social.github}
                    className="text-gray-400 hover:text-neo-blue-100 transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-neo-blue-100 transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href={`mailto:${member.social.email}`}
                    className="text-gray-400 hover:text-neo-blue-100 transition-colors duration-300"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

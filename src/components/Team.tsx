import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import GlitchText from './effects/GlitchText';

const Team = () => {
  const team = [
    {
      name: 'Yash Dhakad',
      role: 'Team Leader',
      image: 'https://i.ibb.co/Y4rCf6tn/Gemini-Generated-Image-ec43lzec43lzec43.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Team Leader – Software Development – A versatile leader skilled in guiding development teams, overseeing the full software lifecycle, and delivering high-quality, scalable solutions from concept to deployment.',
      social: {
        github: '',
        linkedin: '',
        email: ''
      }
    },
    {
      name: 'Neeraj Sharma',
      role: 'Cyber Security Expert',
      image: 'https://i.ibb.co/zhXQ9zMX/image.pg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Cybersecurity Expert – A strategic leader proficient in overseeing security programs, coordinating cross-functional teams, and delivering comprehensive protection through proactive risk management and advanced defensive technologies.',
      social: {
        github: '',
        linkedin: '',
        email: ''
      }
    },
    {
      name: 'Kapil Kr Sahu',
      role: 'DevOps Engineer',
      image: 'https://i.ibb.co/Zzk1FQ34/Gemini-Generated-Image-b6ynsbb6ynsbb6yn.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'DevOps Engineer – Experienced in CI/CD automation, cloud infrastructure management, containerization, and optimizing system performance to enable rapid, secure, and consistent software delivery.',
      social: {
        github: '',
        linkedin: '',
        email: ''
      }
    },
    {
      name: 'Vipin K Singh',
      role: 'Project Manager',
      image: 'https://i.ibb.co/zhXQ9zMX/image.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Project Manager & Full Stack Developer – A versatile professional skilled in leading projects from concept to deployment, with expertise in managing teams, building scalable applications, and delivering innovative end-to-end digital solutions.',
      social: {
        github: 'https://github.com/Vipin840',
        linkedin: 'https://www.linkedin.com/in/vipin-kumar-408197382/',
        email: 'vipinkumarbj807@gmail.com'
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
      name: 'Ranjan Vishwakarma',
      role: 'Data & AI Engineer',
      image: 'https://i.ibb.co/hRFTh7SP/Gemini-Generated-Image-hz58ewhz58ewhz58.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Data & AI Engineer – A versatile professional skilled in designing and deploying data pipelines, building intelligent systems, and delivering scalable end-to-end solutions that transform data into actionable insights.',
      social: {
        github: 'https://github.com/ranjan-89',
        linkedin: 'https://www.linkedin.com/in/ranjan-vishwakarma-a7300624b?utm_source=share_via&utm_content=profile&utm_medium=member_android',
        email: 'ranjanvishwakarma08@gmail.com'
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
      name: 'Riya Mathur',
      role: 'Junior BDA',
      image: 'https://i.ibb.co/bMJKwhpZ/IMG-20251202-WA0020.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Junior BDA – An analytical professional skilled in gathering requirements, interpreting data, and supporting decision-making through clear insights, while contributing to process improvements and collaborative project execution.',
      social: {
        github: 'https://github.com/Riyamathur21',
        linkedin: 'https://www.linkedin.com/in/riya-mathur-594947294?utm_source=share_via&utm_content=profile&utm_medium=member_android',
        email: 'mathurshalini708@gmail.com'
      }
    },
    {
      name: 'Zainab Khan',
      role: 'Senior BDA',
      image: 'https://i.ibb.co/21pcvk7c/image.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Senior BDA – A strategic analytical leader experienced in driving data-driven initiatives, managing complex requirements, mentoring junior analysts, and delivering high-impact insights that guide business strategy and operational excellence.',
      social: {
        github: 'https://github.com/',
        linkedin: 'https://www.linkedin.com/in/',
        email: ''
      }
    },
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
    {
      name: 'Yash Gupta',
      role: 'Full Stack Mern Developer',
      image: 'https://i.ibb.co/RpJ28gJQ/Whats-App-Image-2025-10-02-at-10-22-07-8e518664.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Full Stack MERN Developer – A skilled developer building scalable web applications, with expertise in MongoDB, Express, React, and Node.js, passionate about delivering seamless user experiences.',
      social: {
        github: 'https://github.com/',
        linkedin: 'https://www.linkedin.com/in/yash-gupta-3a13662a0/',
        email: 'yg745192@gmail.com'
      }
    },
    {
      name: 'Vishal Rajput',
      role: 'Full Stack Java Developer',
      image: 'https://i.ibb.co/VcLLB5hX/Whats-App-Image-2025-10-02-at-10-31-30-379cac8e.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Full Stack Java Developer – A versatile developer crafting robust applications with Java technologies, skilled in both front-end and back-end, passionate about performance, scalability, and user-focused solutions.',
      social: {
        github: 'https://github.com/VishalRajput8305',
        linkedin: 'https://www.linkedin.com/in/vishal-rajput-843811247/',
        email: '#'
      }
    },
    {
      name: 'Chandan Kumar',
      role: 'Database Engineer',
      image: 'https://i.ibb.co/whhzpk9j/Whats-App-Image-2025-10-02-at-11-04-58-43b5e423.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Database Engineer – A detail-oriented professional managing data systems and architecture, with a passion for optimization, security, and ensuring reliable access to critical organizational information.',
      social: {
        github: 'https://github.com/Chandankr2004',
        linkedin: 'https://www.linkedin.com/in/chandan6205/',
        email: '#'
      }
    },
    {
      name: 'Ishan Sen',
      role: 'AI Engineer',
      image: 'https://i.ibb.co/gb4Qhkkb/Whats-App-Image-2025-10-02-at-10-18-27-70e18a81.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'AI Engineer – An innovative engineer designing intelligent solutions with machine learning, deep learning, and natural language processing, passionate about advancing automation and human–AI collaboration.',
      social: {
        github: 'https://github.com/IshaanYK',
        linkedin: 'https://www.linkedin.com/in/ishaan-sen-aa467a323/',
        email: 'isen97509@gmail.com'
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
  const displayTeam = isTeamPage ? team : team.slice(0, 8);

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

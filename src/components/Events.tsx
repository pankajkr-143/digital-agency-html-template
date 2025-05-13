import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import GlitchText from './effects/GlitchText';

const Events = () => {
  const events = [
    {
      title: 'FutureHack 2.0 - 2025',
      date: 'June 03-05, 2025',
      location: 'Bhopal, MP',
      description: 'Join us for 24 hours of coding, innovation, and fun. Build something amazing!',
      image: 'https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      status: 'Registration Open',
      registrationStart: 'April 26, 2025',
      registrationEnd: 'May 25, 2025',
      registrationLink: 'https://unstop.com/p/futurehack-20-mackys-tech-1469915'
    },
    {
      title: 'CTF-Hacker 2025',
      date: 'July 15-17, 2025',
      location: 'Virtual Event',
      description: 'Explore the latest trends in CyberSecurity and Hacking.',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      status: 'Upcoming',
      registrationStart: 'June 01, 2025',
      registrationEnd: 'July 01, 2025',
      registrationLink: 'https://unstop.com/p/ctf-hacker.2025'
    },
    {
      title: 'Expert Session 2025',
      date: 'May 17, 2025',
      location: 'Technocrats Group',
      description: 'Learn new programming languages and frameworks from industry experts.',
      image: 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      status: 'Registration Open',
      registrationStart: 'May 01, 2025',
      registrationEnd: 'May 16, 2025',
      registrationLink: '#'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Registration Open':
        return 'bg-green-500';
      case 'Upcoming':
        return 'bg-blue-500';
      case 'Ongoing':
        return 'bg-yellow-500';
      case 'Registration Closed':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section id="events" className="py-20 relative bg-neo-dark overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-2">
            <code className="text-xs bg-neo-blue-100 bg-opacity-10 text-neo-blue-100 px-2 py-1 rounded-sm">
              $ ./events --list-upcoming
            </code>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-vt323 mb-4">
            <GlitchText 
              text="EVENTS & HACKATHONS" 
              className="text-white text-shadow-neon-blue"
              intensity="low"
            />
          </h2>
          
          <p className="max-w-2xl mx-auto text-gray-400 font-code">
            Join our community events and hackathons to learn, network, and innovate together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-neo-black rounded-sm overflow-hidden neon-border-blue"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neo-black to-transparent opacity-60"></div>
                <div className={`absolute top-4 right-4 ${getStatusColor(event.status)} text-white text-xs px-3 py-1 rounded-full font-code`}>
                  {event.status}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-vt323 text-xl text-white mb-3">{event.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-400 font-code text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-neo-blue-100" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-400 font-code text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-neo-blue-100" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-gray-400 font-code text-sm">
                    <Clock className="h-4 w-4 mr-2 text-neo-blue-100" />
                    Registration: {event.registrationStart} to {event.registrationEnd}
                  </div>
                </div>
                
                <p className="text-gray-400 font-code text-sm mb-4">
                  {event.description}
                </p>
                
                <a 
                  href={event.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full neon-border-blue px-4 py-2 font-vt323 text-neo-blue-100 hover:bg-neo-blue-100 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center group ${
                    event.status === 'Registration Closed' ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  onClick={(e) => {
                    if (event.status === 'Registration Closed') {
                      e.preventDefault();
                    }
                  }}
                >
                  <Users className="h-4 w-4 mr-2" />
                  {event.status === 'Registration Closed' ? 'REGISTRATION CLOSED' : 'REGISTER NOW'}
                  <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
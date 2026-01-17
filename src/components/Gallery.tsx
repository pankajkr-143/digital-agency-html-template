import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';
import GlitchText from './effects/GlitchText';

const Gallery = () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Team Collaboration'
    },
    {
      url: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Design Workshop'
    },
    {
      url: 'https://i.ibb.co/v4N8QgCv/IMG-20241212-130033.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Hackathon Winners'
    },
    {
      url: 'https://i.ibb.co/2TFPG6g/image.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'NGO Help'
    },
    {
      url: 'https://i.ibb.co/Jj9zBQLL/Whats-App-Image-2025-05-08-at-16-48-04-562c10d7.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Tech Meetup'
    },
    {
      url: 'https://i.ibb.co/ycVVH212/Whats-App-Image-2025-05-10-at-13-06-41-6923f707.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Company Event'
    }
  ];

  // Additional images for gallery page only
  const additionalImages = [
    {
      url: 'https://i.ibb.co/j9DLMWgy/image.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Expert Session by CEO'
    },
    {
      url: 'https://i.ibb.co/1JqxhJZ5/Whats-App-Image-2025-05-10-at-13-22-39-b296d582.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Innovation Center'
    },
    {
      url: 'https://i.ibb.co/h1W0ZhqT/Whats-App-Image-2025-05-10-at-12-01-28-1ebb612b.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Developer Workspace'
    },
    {
      url: 'https://i.ibb.co/v4N8QgCv/IMG-20241212-130033.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Industrial Meetup'
    },
    {
      url: 'https://i.ibb.co/W4CHfyJv/IMG-20241213-091731.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Visiting'
    },
    {
      url: 'https://i.ibb.co/VpMy4JrP/IMG-20240824-150355.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Data Center'
    },
    {
      url: 'https://i.ibb.co/wh7V4Svj/image.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Seminar'
    },
    {
      url: 'https://i.ibb.co/wFzQ9BHd/Whats-App-Image-2025-05-10-at-13-12-45-4c69540a.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Employee Meetup'
    },
    {
      url: 'https://i.ibb.co/rGJcxZ0N/Whats-App-Image-2025-05-10-at-13-22-38-2ebd5e15.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'IoT Testing Team'
    },
    {
      url: 'https://i.ibb.co/xKZsMx18/Whats-App-Image-2025-05-10-at-13-28-49-82b4b6da.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Canteen'
    }
  ];

  // Use all images for gallery page, but only first 6 for home page
  const isGalleryPage = window.location.pathname === '/gallery';
  const displayImages = isGalleryPage ? [...images, ...additionalImages] : images;

  return (
    <section id="gallery" className="py-20 relative bg-neo-black overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <GlitchText 
              text="Our Gallery" 
              className="text-white"
              intensity="low"
            />
          </h2>
          
          <p className="max-w-2xl mx-auto text-gray-400">
            A glimpse into our company culture, events, and the amazing people behind our success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neo-black to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center">
                    <ImageIcon className="h-5 w-5 text-neo-purple-100 mr-2" />
                    <h3 className="font-semibold text-white text-lg">{image.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
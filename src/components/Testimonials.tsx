import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import GlitchText from './effects/GlitchText';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Mallik Raza',
      role: 'CTO at TechCorp',
      company: 'TechCorp Inc.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      content: 'Their software development expertise has been instrumental in our digital transformation journey. The team delivered exceptional results.',
      rating: 5
    },
    {
      name: 'Lisa Joshi',
      role: 'Product Manager',
      company: 'InnovateTech',
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      content: 'Outstanding technical knowledge and professional service. They helped us modernize our legacy systems efficiently.',
      rating: 5
    },
    {
      name: 'Prem Nath Vishwami',
      role: 'CEO',
      company: 'DataFlow Systems',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      content: 'Their cloud solutions have significantly improved our infrastructure reliability and performance. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative bg-neo-dark overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <GlitchText 
              text="Client Feedback" 
              className="text-white"
              intensity="low"
            />
          </h2>
          
          <p className="max-w-2xl mx-auto text-gray-400">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-neo-black p-6 rounded-sm neon-border-purple"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-neo-purple-100 fill-current"
                  />
                ))}
              </div>
              
              <blockquote className="mb-6">
                <p className="text-gray-400 text-sm italic">
                  "{testimonial.content}"
                </p>
              </blockquote>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-neo-purple-100 text-sm font-medium">{testimonial.role}</div>
                  <div className="text-gray-500 text-xs">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
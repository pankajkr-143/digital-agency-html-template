import { motion } from 'framer-motion';
import { ShoppingCart, ExternalLink } from 'lucide-react';
import GlitchText from './effects/GlitchText';

const Products = () => {
  const products = [
    {
      title: 'Quiz Platform (Faculty/User)',
      description: 'Test Your Knowledge Challenge Others | Join the most engaging quiz platform designed for engineer students. Compete, learn, and climb the ranks!',
      features: ['Admin/Faculty/User Dashboard', 'Secure Login System','Dynamic Quiz Creation','Multi-Level Leaderboard','Performance Dashboard','Faculty Tools','Admin Control Panel','Mobile Friendly UI','Database Integration','Quiz Analytics','No External Signup'],
      image: 'https://i.ibb.co/LDxRjmwG/image.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: 'https://mackysquizz.netlify.app/'
    },
    {
      title: 'MackyBhai Programming Language',
      description: 'A Fun, Natural-Language Inspired Coding Innovation for the Next Generation. | Experience the future of programming with MackyBhai, a language designed to be intuitive and accessible for everyone in desi style.',
      features: ['Natural Syntax', 'Error with Emotion', 'Beginner Friendly', 'Interactive Console', 'Auto Hindi Comments', 'Code Speak Mode', 'Code to Meme Converter', 'Custom IDE', 'Gamified Learning', 'Community Packages'],
      image: 'https://i.ibb.co/TMTpJ6Px/image.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: 'https://mackybhai.vercel.app/'
    },
    {
      title: 'Cyber Security Lab/Practical Learning Platform',
      description: 'A gamified, hands-on cybersecurity platform inspired by Mr. Robot and fsociety. Built for aspiring ethical hackers to train, compete, and simulate real-world cyber attacks.',
      features: [' EchoFrame (AI-based Exploitation) ', ' fsociety Chat (Real-World Hacking Environments) ', ' Dark Army Challenges ', ' Live Operations ', ' Premium Learning Path ', ' Gamified Dashboard ', ' CTF Mode (Capture The Flag) '],
      image: 'https://i.ibb.co/4ZQkFHRk/image.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: 'https://tranquil-truffle-15401f.netlify.app'
    }
  ];

  const displayProducts = products;

  return (
    <section id="products" className="py-20 relative bg-neo-black overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-2">
            <code className="text-xs bg-neo-green-100 bg-opacity-10 text-neo-green-100 px-2 py-1 rounded-sm">
              $ ./products --list-featured
            </code>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-vt323 mb-4">
            <GlitchText 
              text="OUR PRODUCTS"
              className="text-white text-shadow-neon-green"
              intensity="low"
            />
          </h2>
          
          <p className="max-w-2xl mx-auto text-gray-400 font-code">
            Explore our range of innovative products designed to elevate your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProducts.map((product, index) => (
            <motion.div
              key={index}
              className="bg-neo-dark rounded-sm overflow-hidden group relative pb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neo-black to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <h3 className="font-vt323 text-xl text-white mb-2">{product.title}</h3>
                <p className="text-gray-400 font-code text-sm mb-4">{product.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 text-xs font-code bg-neo-green-100 bg-opacity-10 text-neo-green-100"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={product.link}
                  className="flex items-center text-neo-green-100 font-code text-sm group"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Learn More
                  <ExternalLink className="h-4 w-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

              <div className="absolute bottom-4 right-4">
                <a 
                  href={`https://wa.link/jwjxe9?text=I%20want%20to%20buy%20the%20${encodeURIComponent(product.title)}!`}
                  className="flex items-center text-neo-blue-100 font-code text-sm group neon-border-blue px-3 py-1 rounded-sm hover:bg-neo-blue-100 hover:bg-opacity-10 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Buy
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products; 
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Terminal } from 'lucide-react';
import GlitchText from './effects/GlitchText';
import TypewriterEffect from './effects/TypewriterEffect';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const nameInputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'da091ed8-42eb-4541-ade0-28e5cf1c5168',
          ...formState,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        throw new Error('Something went wrong');
      }
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const inputClasses = "w-full bg-neo-black border-0 focus:ring-0 focus:outline-none font-code text-gray-300 px-4 py-3 neon-border-green hover:bg-neo-green-100 hover:bg-opacity-5 focus:bg-neo-green-100 focus:bg-opacity-5 transition-colors duration-300";
  
  return (
    <section id="contact" className="py-20 relative bg-neo-black overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-2">
            <code className="text-xs bg-neo-green-100 bg-opacity-10 text-neo-green-100 px-2 py-1 rounded-sm">
              $ ./connect --initialize-communication
            </code>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-vt323 mb-4">
            <GlitchText 
              text="ESTABLISH CONNECTION" 
              className="text-white text-shadow-neon-green"
              intensity="low"
            />
          </h2>
          
          <p className="max-w-2xl mx-auto text-gray-400 font-code">
            Ready to explore how our technology can revolutionize your operations?
            Initiate contact, and our team will respond within 24 hours.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-neo-dark p-8 rounded-sm h-full">
              <div className="flex items-center mb-6">
                <Terminal className="h-5 w-5 text-neo-green-100 mr-2" />
                <div className="font-vt323 text-neo-green-100 text-lg">
                  &gt; Connection Protocol
                </div>
              </div>
              
              {isSubmitted ? (
                <motion.div 
                  className="terminal-text font-code text-sm space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-neo-green-100 mb-4">
                    <TypewriterEffect 
                      strings={['Message received. Connection established successfully.']}
                      typeSpeed={30}
                      showCursor={true}
                      loop={false}
                    />
                  </div>
                  
                  <p className="text-gray-400">
                    Thank you for contacting Macky's Tech. Our team will analyze your request and respond within 24 hours.
                  </p>
                  
                  <div className="mt-6 text-neo-green-100">
                    <span className="animate-pulse mr-2">&#9608;</span>
                    <span>Transaction ID: {Math.random().toString(36).substring(2, 15)}</span>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="text-red-500 font-code text-sm mb-4">
                      {error}
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="name" className="font-code text-xs text-gray-400 mb-1 block">
                      &gt; IDENTIFIER:
                    </label>
                    <input
                      ref={nameInputRef}
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={inputClasses}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="font-code text-xs text-gray-400 mb-1 block">
                      &gt; COMM_CHANNEL:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className={inputClasses}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="font-code text-xs text-gray-400 mb-1 block">
                      &gt; SUBJECT:
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formState.subject}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      <option value="" disabled>Select interest area</option>
                      <option value="ai">AI Solutions</option>
                      <option value="security">Cybersecurity</option>
                      <option value="quantum">Quantum Computing</option>
                      <option value="blockchain">Blockchain Technology</option>
                      <option value="development">Advanced Development</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="font-code text-xs text-gray-400 mb-1 block">
                      &gt; TRANSMISSION:
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Enter your message"
                      className={inputClasses}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full neon-border-green px-6 py-3 flex items-center justify-center font-vt323 text-neo-green-100 hover:bg-neo-green-100 hover:bg-opacity-10 transition-all duration-300 text-lg group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <span className="animate-pulse mr-2">&#9608;</span> 
                        TRANSMITTING...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        &gt;_SEND_MESSAGE 
                        <Send className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-neo-dark p-8 rounded-sm h-full">
              <div className="flex items-center mb-6">
                <Terminal className="h-5 w-5 text-neo-blue-100 mr-2" />
                <div className="font-vt323 text-neo-blue-100 text-lg">
                  &gt; Connection Nodes
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-vt323 text-xl text-white mb-2">Global Headquarters</h3>
                  <p className="font-code text-gray-400 text-sm">
                    1024 Quantum Drive<br />
                    Silicon Valley, CA 94024<br />
                    United States
                  </p>
                </div>
                
                <div>
                  <h3 className="font-vt323 text-xl text-white mb-2">Satellite Offices</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="font-code text-gray-400 text-sm">
                      <div className="text-neo-green-100 mb-1">India</div>
                      Anand Nagar<br />
                      Bhopal, MP - 462022<br />
                      India
                    </div>
                    <div className="font-code text-gray-400 text-sm">
                      <div className="text-neo-blue-100 mb-1">Bihar</div>
                      Naka No. 05<br />
                      Darbhanga - 846004<br />
                      Bihar
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-vt323 text-xl text-white mb-2">Direct Channels</h3>
                  <div className="space-y-2 font-code text-sm">
                    <div className="flex items-center group">
                      <div className="w-24 text-gray-500">General:</div>
                      <a href="mailto:info@mackystech.ai" className="text-neo-green-100 hover:underline">
                        info@mackystech.in
                      </a>
                    </div>
                    <div className="flex items-center">
                      <div className="w-24 text-gray-500">Support:</div>
                      <a href="mailto:support@mackystech.ai" className="text-neo-blue-100 hover:underline">
                        contact@mackystech.in
                      </a>
                    </div>
                    <div className="flex items-center">
                      <div className="w-24 text-gray-500">Press:</div>
                      <a href="mailto:media@mackystech.ai" className="text-neo-purple-100 hover:underline">
                        co.founder@mackystech
                      </a>
                    </div>
                    <div className="flex items-center">
                      <div className="w-24 text-gray-500">Phone:</div>
                      <span className="text-gray-300">+91 82359 10315</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-800">
                  <h3 className="font-vt323 text-xl text-white mb-3">Response Time</h3>
                  <div className="font-code text-sm text-gray-400">
                    <p>All inquiries receive a response within 24 hours during business days.</p>
                    <div className="flex items-center mt-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                      <span>Systems operational and monitoring active.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

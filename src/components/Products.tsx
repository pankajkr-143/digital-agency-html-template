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
      link: 'https://cyberhx.com/'
    },
    {
      title: 'Employee Management System',
      description: 'Comprehensive HR solution for modern businesses. Streamline employee data, attendance, payroll, and performance management with our all-in-one platform.',
      features: ['Employee Database', 'Attendance Tracking', 'Payroll Management', 'Performance Reviews', 'Leave Management', 'Document Storage', 'Reporting Dashboard', 'Role-based Access', 'Mobile App', 'Integration APIs'],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#'
    },
    {
      title: 'Face Recognition Attendance System',
      description: 'Advanced biometric attendance solution using cutting-edge AI technology. Eliminate proxy attendance and ensure accurate time tracking with facial recognition.',
      features: ['Real-time Face Detection', 'Anti-spoofing Technology', 'Cloud Storage', 'Mobile App', 'Admin Dashboard', 'Attendance Reports', 'Multi-location Support', 'API Integration', 'Custom Notifications', 'Data Analytics'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#'
    },
    {
      title: 'Inventory Management System',
      description: 'Complete inventory control solution for businesses of all sizes. Track stock levels, manage suppliers, and optimize your supply chain operations.',
      features: ['Stock Tracking', 'Supplier Management', 'Purchase Orders', 'Sales Analytics', 'Barcode Scanning', 'Low Stock Alerts', 'Multi-warehouse Support', 'Reporting Tools', 'Mobile Access', 'Integration APIs'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#'
    },
    {
      title: 'UPI Payment Gateway',
      description: 'Secure and reliable payment processing solution for businesses. Accept UPI payments seamlessly with our integrated gateway solution.',
      features: ['UPI Integration', 'Multiple Payment Methods', 'Secure Transactions', 'Real-time Processing', 'Payment Analytics', 'Refund Management', 'Webhook Support', 'Mobile SDK', 'Dashboard Analytics', '24/7 Support'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#'
    },
    {
      title: 'Aadhar Portal',
      description: 'Comprehensive Aadhar services portal for citizens and businesses. Access Aadhar-related services with ease and security.',
      features: ['Aadhar Verification', 'Document Upload', 'Status Tracking', 'Secure Authentication', 'Digital Signatures', 'Government Integration', 'Mobile App', 'Multi-language Support', 'Real-time Updates', 'Customer Support'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#'
    },
    {
      title: 'Hostel Management System',
      description: 'Complete hostel management solution for educational institutions. Manage rooms, residents, fees, and maintenance with our comprehensive platform.',
      features: ['Room Allocation', 'Resident Management', 'Fee Collection', 'Maintenance Tracking', 'Mess Management', 'Visitor Management', 'Reports & Analytics', 'Mobile App', 'Notification System', 'Admin Dashboard'],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#'
    },
    {
      title: 'Chat App',
      description: 'Modern real-time messaging application with advanced features. Connect with your team, friends, and family through secure and fast communication.',
      features: ['Real-time Messaging', 'Group Chats', 'File Sharing', 'Voice & Video Calls', 'Message Encryption', 'Push Notifications', 'Message History', 'Custom Emojis', 'Dark Mode', 'Cross-platform Sync'],
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#'
    },
    {
      title: 'NSS Management System',
      description: 'Comprehensive National Service Scheme management platform for educational institutions. Track activities, volunteers, and community service programs.',
      features: ['Volunteer Registration', 'Activity Tracking', 'Event Management', 'Certificate Generation', 'Reporting System', 'Mobile App', 'Admin Dashboard', 'Document Management', 'Notification System', 'Analytics Dashboard'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#'
    },
    {
      title: 'School/College Management Software',
      description: 'All-in-one educational institution management system. Streamline academic operations, student management, and administrative tasks.',
      features: ['Student Management', 'Academic Records', 'Fee Management', 'Exam System', 'Library Management', 'Transport Management', 'Parent Portal', 'Teacher Dashboard', 'Mobile App', 'Reporting Tools'],
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#'
    },
    {
      title: 'Home Service Provider Platform',
      description: 'On-demand home services marketplace connecting customers with verified service providers. Book cleaning, repairs, maintenance, and more.',
      features: ['Service Booking', 'Provider Verification', 'Real-time Tracking', 'Payment Integration', 'Rating System', 'Scheduling System', 'Customer Support', 'Mobile Apps', 'Service Categories', 'Location-based Search'],
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#'
    },
    {
      title: 'MLM Software',
      description: 'Multi-level marketing platform with advanced features for network marketing businesses. Manage distributors, commissions, and sales networks.',
      features: ['Distributor Management', 'Commission Tracking', 'Genealogy Tree', 'Product Catalog', 'Order Management', 'Payment Processing', 'Reporting Dashboard', 'Mobile App', 'Binary/Matrix Plans', 'E-wallet Integration'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#'
    },
    {
      title: 'Online Learning App',
      description: 'Comprehensive e-learning platform with interactive courses, assessments, and progress tracking. Perfect for educational institutions and training organizations.',
      features: ['Course Management', 'Video Streaming', 'Interactive Quizzes', 'Progress Tracking', 'Certificates', 'Discussion Forums', 'Mobile Learning', 'Offline Access', 'Analytics Dashboard', 'Multi-language Support'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#'
    },
    {
      title: 'Event Management Software',
      description: 'Complete event planning and management solution. Organize conferences, weddings, corporate events, and more with our comprehensive platform.',
      features: ['Event Planning', 'Venue Management', 'Guest Management', 'Ticketing System', 'Payment Processing', 'Marketing Tools', 'Live Streaming', 'Mobile App', 'Analytics Dashboard', 'Vendor Management'],
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#'
    },
    {
      title: 'Billing Software',
      description: 'Professional invoicing and billing solution for businesses. Create invoices, track payments, and manage your financial records efficiently.',
      features: ['Invoice Generation', 'Payment Tracking', 'Tax Management', 'Customer Management', 'Recurring Billing', 'Payment Reminders', 'Financial Reports', 'Multi-currency Support', 'Mobile App', 'Cloud Storage'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#'
    },
    {
      title: 'Restaurant Management System',
      description: 'Complete restaurant management solution. Manage menu, orders, inventory, and more with our comprehensive platform.',
      features: ['Menu Management', 'Order Management', 'Inventory Management', 'Customer Management', 'Payment Processing', 'Reporting System', 'Mobile App', 'Admin Dashboard', 'Table Reservation', 'Food Delivery'],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#'
    },
    {
      title: 'Hotel Management System',
      description: 'Complete hotel management solution. Manage rooms, reservations, billing, and more with our comprehensive platform.',
      features: ['Room Management', 'Reservation Management', 'Billing System', 'Customer Management', 'Payment Processing', 'Reporting System', 'Mobile App', 'Admin Dashboard', 'Housekeeping Management', 'Front Desk Management'],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#'
    },
    {
      title: 'Gym Management System',
      description: 'Complete gym management solution. Manage members, classes, billing, and more with our comprehensive platform.',
      features: ['Member Management', 'Class Management', 'Billing System', 'Payment Processing', 'Reporting System', 'Mobile App', 'Admin Dashboard', 'Front Desk Management', 'Equipment Management', 'Staff Management'],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#'
    },
    {
      title: 'Car Rental Management System',
      description: 'Complete car rental management solution. Manage cars, bookings, billing, and more with our comprehensive platform.',
      features: ['Car Management', 'Booking Management', 'Billing System', 'Payment Processing', 'Reporting System', 'Mobile App', 'Admin Dashboard', 'Front Desk Management', 'Maintenance Management', 'Staff Management'],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#'
    },
    {
      title: 'Event Management System',
      description: 'Complete event management solution. Manage events, registrations, billing, and more with our comprehensive platform.',
      features: ['Event Management', 'Registration Management', 'Billing System', 'Payment Processing', 'Reporting System', 'Mobile App', 'Admin Dashboard', 'Front Desk Management', 'Staff Management', 'Vendor Management'],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#'
    },
    {
      title: 'CRM Software',
      description: 'Complete CRM solution. Manage customers, sales, marketing, and more with our comprehensive platform.',
      features: ['Customer Management', 'Sales Management', 'Marketing Management', 'Reporting System', 'Mobile App', 'Admin Dashboard', 'Front Desk Management', 'Staff Management', 'Vendor Management'],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#'
    }
  ];

  const displayProducts = products;

  return (
    <section id="products" className="py-20 relative bg-neo-black overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <GlitchText 
              text="Our Products"
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
                <h3 className="font-semibold text-xl text-white mb-2">{product.title}</h3>
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

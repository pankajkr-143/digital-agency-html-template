import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Search, LogIn, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { getCertificate, saveToLocalStorage, getVerificationHistory } from '../data/certificates';
import { getCurrentUser, logout } from '../data/users';
import LoginModal from './LoginModal';
import ThemeToggle from './ThemeToggle';

interface DropdownProps {
  items: { name: string; href: string }[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ items, isOpen, setIsOpen }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setIsOpen]);

  if (!isOpen) return null;

  return (
    <motion.div
      ref={dropdownRef}
      className="absolute top-full left-0 mt-2 w-48 bg-neo-dark border border-gray-800 rounded-sm shadow-lg"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
    >
      {items.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className="block px-4 py-2 text-sm font-code text-gray-300 hover:bg-neo-green-100 hover:bg-opacity-10 hover:text-neo-green-100"
          onClick={() => setIsOpen(false)}
        >
          {item.name}
        </Link>
      ))}
    </motion.div>
  );
};

const CertificateVerificationModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [certificateNumber, setCertificateNumber] = useState('');
  const [verificationStatus, setVerificationStatus] = useState<'idle' | 'verifying' | 'verified' | 'invalid'>('idle');
  const [certificateData, setCertificateData] = useState<Certificate | null>(null);
  const [showHistory, setShowHistory] = useState(false);
  const [verificationHistory, setVerificationHistory] = useState<(Certificate & { verificationDate: string })[]>([]);

  useEffect(() => {
    if (showHistory) {
      setVerificationHistory(getVerificationHistory());
    }
  }, [showHistory]);

  const handleVerify = () => {
    setVerificationStatus('verifying');
    
    setTimeout(() => {
      const certificate = getCertificate(certificateNumber);
      
      if (certificate) {
        setCertificateData(certificate);
        setVerificationStatus('verified');
        saveToLocalStorage(certificate);
      } else {
        setVerificationStatus('invalid');
        setCertificateData(null);
      }
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div 
        className="bg-neo-dark p-6 rounded-sm neon-border-green max-w-md w-full mx-4"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-vt323 text-xl text-white">Verify Certificate</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-neo-green-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4">
          {!showHistory ? (
            <>
              <div>
                <label className="block font-code text-sm text-gray-400 mb-1">
                  Certificate Number
                </label>
                <input
                  type="text"
                  value={certificateNumber}
                  onChange={(e) => {
                    setCertificateNumber(e.target.value);
                    setVerificationStatus('idle');
                  }}
                  className="w-full bg-neo-black border-0 focus:ring-0 focus:outline-none font-code text-gray-300 px-4 py-3 neon-border-green"
                  placeholder="Enter certificate number"
                />
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleVerify}
                  disabled={verificationStatus === 'verifying' || !certificateNumber}
                  className="flex-1 neon-border-green px-4 py-3 font-vt323 text-neo-green-100 hover:bg-neo-green-100 hover:bg-opacity-10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {verificationStatus === 'verifying' ? (
                    <span className="flex items-center justify-center">
                      <span className="animate-pulse mr-2">&#9608;</span>
                      VERIFYING...
                    </span>
                  ) : (
                    'VERIFY CERTIFICATE'
                  )}
                </button>
                
                <button
                  onClick={() => setShowHistory(true)}
                  className="neon-border-blue px-4 py-3 font-vt323 text-neo-blue-100 hover:bg-neo-blue-100 hover:bg-opacity-10 transition-all duration-300"
                >
                  HISTORY
                </button>
              </div>

              {verificationStatus === 'verified' && certificateData && (
                <div className="mt-6 p-4 bg-neo-black rounded-sm neon-border-green">
                  <div className="flex items-center mb-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                    <span className="font-vt323 text-neo-green-100">Certificate Verified</span>
                  </div>
                  <div className="space-y-2 font-code text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Name:</span>
                      <span className="text-white">{certificateData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Certificate No:</span>
                      <span className="text-white">{certificateData.serialNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Issue Date:</span>
                      <span className="text-white">{certificateData.dateOfIssue}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">College:</span>
                      <span className="text-white">{certificateData.college}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Course:</span>
                      <span className="text-white">{certificateData.course}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Grade:</span>
                      <span className="text-white">{certificateData.grade}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Valid Until:</span>
                      <span className="text-white">{certificateData.validUntil}</span>
                    </div>
                  </div>
                </div>
              )}

              {verificationStatus === 'invalid' && (
                <div className="mt-4 p-4 bg-red-900 bg-opacity-20 rounded-sm border border-red-500">
                  <p className="text-red-400 font-code text-sm">
                    Invalid certificate number. Please check and try again.
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-vt323 text-lg text-white">Verification History</h3>
                <button
                  onClick={() => setShowHistory(false)}
                  className="text-neo-blue-100 hover:text-neo-blue-200 transition-colors"
                >
                  Back
                </button>
              </div>
              
              <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                {verificationHistory.map((cert, index) => (
                  <div key={index} className="p-4 bg-neo-black rounded-sm neon-border-blue">
                    <div className="space-y-2 font-code text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Name:</span>
                        <span className="text-white">{cert.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Certificate No:</span>
                        <span className="text-white">{cert.serialNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Verified On:</span>
                        <span className="text-white">
                          {new Date(cert.verificationDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                
                {verificationHistory.length === 0 && (
                  <p className="text-gray-400 font-code text-sm text-center py-4">
                    No verification history found
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [careersDropdownOpen, setCareersDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(getCurrentUser());
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add effect to handle body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLogout = () => {
    logout();
    setCurrentUser(null);
    navigate('/');
  };

  const handleLoginSuccess = () => {
    setCurrentUser(getCurrentUser());
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Projects', href: '/projects' },
    {
      name: 'About',
      href: '#',
      dropdown: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Events', href: '/events' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Testimonials', href: '/testimonials' },
      ]
    },
    {
      name: 'Careers',
      href: '#',
      dropdown: [
        { name: 'Job Openings', href: '/jobs' },
        { name: 'Internships', href: '/internships' },
        { name: 'Student Ambassador', href: '/ambassador' },
      ]
    },
    { name: 'Contact', href: '/contact' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-neo-dark bg-opacity-80 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img 
                  src="https://i.ibb.co/ymkKpn1w/cropped-image.png"
                  alt="Macky's Tech Logo"
                  className="h-8 w-auto"
                />
                <div className="ml-3">
                  <span className="text-xl font-vt323 text-neo-green-100">Macky's Tech</span>
                  <span className="block text-xs font-code text-gray-400">TECHNOLOGY</span>
                </div>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <motion.div 
                className="flex items-baseline space-x-4"
                variants={navVariants}
                initial="hidden"
                animate="visible"
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    className="relative group"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    {link.dropdown ? (
                      <div className="relative">
                        <button
                          className="group relative font-code text-sm hover:text-neo-green-100 text-gray-300 px-3 py-2 transition-colors duration-300 flex items-center"
                          onClick={() => {
                            if (link.name === 'Careers') {
                              setCareersDropdownOpen(!careersDropdownOpen);
                              setAboutDropdownOpen(false);
                            } else if (link.name === 'About') {
                              setAboutDropdownOpen(!aboutDropdownOpen);
                              setCareersDropdownOpen(false);
                            }
                          }}
                        >
                          {link.name}
                          <ChevronDown className="ml-1 h-4 w-4" />
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-neo-green-100 transition-all duration-300 group-hover:w-full"></div>
                        </button>
                        <Dropdown
                          items={link.dropdown}
                          isOpen={link.name === 'Careers' ? careersDropdownOpen : aboutDropdownOpen}
                          setIsOpen={link.name === 'Careers' ? setCareersDropdownOpen : setAboutDropdownOpen}
                        />
                      </div>
                    ) : (
                      <Link
                        to={link.href}
                        className="group relative font-code text-sm hover:text-neo-green-100 text-gray-300 px-3 py-2 transition-colors duration-300"
                      >
                        {link.name}
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-neo-green-100 transition-all duration-300 group-hover:w-full"></div>
                      </Link>
                    )}
                  </motion.div>
                ))}

                {currentUser ? (
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-4"
                  >
                    <Link
                      to="/profile"
                      className="neon-border-purple px-4 py-1 rounded-sm font-vt323 text-neo-purple-100 hover:bg-neo-purple-100 hover:bg-opacity-10 transition-all duration-300 flex items-center"
                    >
                      <User className="h-4 w-4 mr-2" />
                      {currentUser.name}
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="font-code text-sm text-gray-400 hover:text-neo-red-100"
                    >
                      Logout
                    </button>
                  </motion.div>
                ) : (
                  <motion.button
                    onClick={() => setIsLoginModalOpen(true)}
                    className="neon-border-purple px-4 py-1 rounded-sm font-vt323 text-neo-purple-100 hover:bg-neo-purple-100 hover:bg-opacity-10 transition-all duration-300 flex items-center"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    LOGIN
                  </motion.button>
                )}
                
                <motion.button
                  onClick={() => setIsVerifyModalOpen(true)}
                  className="neon-border-blue px-4 py-1 rounded-full font-vt323 text-neo-blue-100 hover:bg-neo-blue-100 hover:bg-opacity-10 transition-all duration-300 flex items-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <Search className="h-4 w-4 mr-2" />
                  VERIFY
                </motion.button>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <ThemeToggle size="sm" />
                </motion.div>

                <motion.Link
                  to="/contact"
                  className="neon-border-green px-4 py-1 rounded-sm font-vt323 text-neo-green-100 hover:bg-neo-green-100 hover:bg-opacity-10 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  &gt;_CONNECT
                </motion.Link>
              </motion.div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-neo-green-100 focus:outline-none"
              >
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 top-16 bg-neo-dark bg-opacity-95 backdrop-blur-md overflow-y-auto z-40"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <>
                      <button
                        className="w-full flex items-center justify-between px-3 py-2 text-base font-code text-gray-300 hover:text-neo-green-100 border-l-2 border-transparent hover:border-neo-green-100 transition-all duration-300"
                        onClick={() => {
                          if (link.name === 'Careers') {
                            setCareersDropdownOpen(!careersDropdownOpen);
                            setAboutDropdownOpen(false);
                          } else if (link.name === 'About') {
                            setAboutDropdownOpen(!aboutDropdownOpen);
                            setCareersDropdownOpen(false);
                          }
                        }}
                      >
                        <span>&gt;_ {link.name}</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      {((link.name === 'Careers' && careersDropdownOpen) ||
                        (link.name === 'About' && aboutDropdownOpen)) && (
                        <div className="pl-6 py-2 space-y-1">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="block px-3 py-2 text-sm font-code text-gray-400 hover:text-neo-green-100 transition-all duration-300"
                              onClick={() => {
                                setIsOpen(false);
                                setCareersDropdownOpen(false);
                                setAboutDropdownOpen(false);
                              }}
                            >
                              &gt;_ {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className="block px-3 py-2 text-base font-code text-gray-300 hover:text-neo-green-100 border-l-2 border-transparent hover:border-neo-green-100 transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      &gt;_ {link.name}
                    </Link>
                  )}
                </div>
              ))}

              {currentUser ? (
                <>
                  <Link
                    to="/profile"
                    className="block px-3 py-2 text-base font-code text-neo-purple-100 hover:text-neo-purple-200 border-l-2 border-transparent hover:border-neo-purple-100 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    &gt;_ Profile ({currentUser.name})
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-base font-code text-gray-400 hover:text-red-500 border-l-2 border-transparent hover:border-red-500 transition-all duration-300"
                  >
                    &gt;_ Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsLoginModalOpen(true);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-code text-neo-purple-100 hover:text-neo-purple-200 border-l-2 border-transparent hover:border-neo-purple-100 transition-all duration-300"
                >
                  &gt;_ Login
                </button>
              )}

              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsVerifyModalOpen(true);
                }}
                className="w-full px-3 py-2 text-base font-code text-neo-blue-100 hover:text-neo-blue-100 border-l-2 border-transparent hover:border-neo-blue-100 transition-all duration-300 flex items-center"
              >
                <Search className="h-4 w-4 mr-2" />
                VERIFY CERTIFICATE
              </button>
              
              <div className="flex items-center justify-center px-3 py-2 mt-4">
                <span className="text-sm font-code text-gray-400 mr-3">Theme:</span>
                <ThemeToggle size="sm" />
              </div>
              
              <Link
                to="/contact"
                className="block px-4 py-2 mt-4 text-center neon-border-green font-vt323 text-neo-green-100 hover:bg-neo-green-100 hover:bg-opacity-10 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                &gt;_CONNECT
              </Link>
            </div>
          </motion.div>
        )}
      </motion.nav>

      <CertificateVerificationModal 
        isOpen={isVerifyModalOpen}
        onClose={() => setIsVerifyModalOpen(false)}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSuccess={handleLoginSuccess}
      />
    </>
  );
};

export default Navbar;
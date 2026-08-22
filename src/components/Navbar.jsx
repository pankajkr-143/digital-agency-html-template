import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [growthOpen, setGrowthOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItem =
    "relative text-sm font-medium text-gray-300 hover:text-white transition duration-300 flex items-center gap-1";

  const dropdownItem =
    "block px-4 py-2.5 rounded-md text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all";

  const solutions = [
    { name: "IT Services & Consulting", path: "/solutions/it-services" },
    { name: "Digital Marketing", path: "/solutions/digital-marketing" },
    { name: "Building & Construction", path: "/solutions/construction" },
    { name: "EdTech & LMS", path: "/solutions/edtech-lms" },
    { name: "Cab & Mobility", path: "/solutions/cab-services" },
    { name: "Payment Solutions", path: "/solutions/payment-gateway" },
    { name: "WhatsApp API", path: "/solutions/whatsapp-api" }
  ];

  const businessGrowth = [
    { name: "Get Leads", path: "/solutions/business-leads" },
    { name: "Sales & Marketing", path: "/solutions/sales-marketing" },
    { name: "AI & Automation", path: "/solutions/ai-automation" },
    { name: "Performance Marketing", path: "/solutions/digital-marketing" },
    { name: "IT Consulting", path: "/solutions/it-services" }
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="
        sticky top-0 z-50
        bg-gray-950/80 backdrop-blur-xl
        border-b border-gray-800
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LEFT: LOGO */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <img
            src="/assets/logo23.png"
            alt="MackysTech Logo"
            className="h-20 md:h-28 w-auto object-contain transition duration-300 hover:scale-[1.6] mix-blend-screen scale-150 ml-4 md:ml-8"
          />
        </Link>

        {/* CENTER: NAVIGATION */}
        <nav className="hidden lg:flex items-center justify-center gap-8 flex-grow">
          
          <NavLink to="/" className={navItem}>Home</NavLink>

          {/* SOLUTIONS DROPDOWN */}
          <div
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
            className="relative py-8"
          >
            <span className={`${navItem} cursor-pointer`}>
              Solutions <ChevronDown size={14} className={`transition-transform duration-300 ${solutionsOpen ? 'rotate-180' : ''}`} />
            </span>

            <AnimatePresence>
              {solutionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-20 left-1/2 -translate-x-1/2 w-64 bg-gray-900 border border-gray-800 rounded-xl p-2 shadow-2xl z-50"
                >
                  {solutions.map((service, idx) => (
                    <NavLink key={idx} to={service.path} className={dropdownItem}>
                      {service.name}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* BUSINESS GROWTH DROPDOWN */}
          <div
            onMouseEnter={() => setGrowthOpen(true)}
            onMouseLeave={() => setGrowthOpen(false)}
            className="relative py-8"
          >
            <span className={`${navItem} cursor-pointer`}>
              Business Growth <ChevronDown size={14} className={`transition-transform duration-300 ${growthOpen ? 'rotate-180' : ''}`} />
            </span>

            <AnimatePresence>
              {growthOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-20 left-1/2 -translate-x-1/2 w-64 bg-gray-900 border border-gray-800 rounded-xl p-2 shadow-2xl z-50"
                >
                  {businessGrowth.map((item, idx) => (
                    <NavLink key={idx} to={item.path} className={dropdownItem}>
                      {item.name}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/packages" className={navItem}>Packages</NavLink>
          <NavLink to="/projects" className={navItem}>Projects</NavLink>
          <NavLink to="/blog" className={navItem}>Resources</NavLink>
          <NavLink to="/about" className={navItem}>About</NavLink>

        </nav>

        {/* RIGHT: CTA BUTTONS & THEME TOGGLE */}
        <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all flex items-center justify-center gap-2 text-xs font-semibold"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <>
                <Sun size={18} className="text-amber-400" />
                <span className="hidden xl:inline">Light</span>
              </>
            ) : (
              <>
                <Moon size={18} className="text-blue-400" />
                <span className="hidden xl:inline">Dark</span>
              </>
            )}
          </button>

          <Link 
            to="/contact" 
            className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold py-2.5 px-5 rounded-full transition-all duration-300 flex items-center group shadow-lg shadow-blue-600/20 hover:shadow-blue-500/40"
          >
            Get Started <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* MOBILE MENU BTN */}
        <div className="flex items-center gap-3 lg:hidden">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-white/10 bg-white/5 text-gray-300"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-blue-400" />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="text-white p-2"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU FULL SCREEN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed inset-0 top-20 bg-gray-950 z-40 overflow-y-auto pb-24"
          >
            <nav className="flex flex-col p-6 space-y-4">
              
              <NavLink to="/" onClick={() => setOpen(false)} className="text-lg font-medium text-white border-b border-gray-800 pb-4">Home</NavLink>
              
              {/* Mobile Solutions */}
              <div className="border-b border-gray-800 pb-4">
                <button onClick={() => setSolutionsOpen(!solutionsOpen)} className="w-full text-left text-lg font-medium text-white flex justify-between items-center">
                  Solutions <ChevronDown size={20} className={`transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {solutionsOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="pl-4 mt-4 space-y-3 overflow-hidden">
                      {solutions.map((s, idx) => (
                        <NavLink key={idx} to={s.path} onClick={() => setOpen(false)} className="block text-gray-400 hover:text-white">{s.name}</NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Business Growth */}
              <div className="border-b border-gray-800 pb-4">
                <button onClick={() => setGrowthOpen(!growthOpen)} className="w-full text-left text-lg font-medium text-white flex justify-between items-center">
                  Business Growth <ChevronDown size={20} className={`transition-transform ${growthOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {growthOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="pl-4 mt-4 space-y-3 overflow-hidden">
                      {businessGrowth.map((g, idx) => (
                        <NavLink key={idx} to={g.path} onClick={() => setOpen(false)} className="block text-gray-400 hover:text-white">{g.name}</NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink to="/packages" onClick={() => setOpen(false)} className="text-lg font-medium text-white border-b border-gray-800 pb-4">Packages</NavLink>
              <NavLink to="/projects" onClick={() => setOpen(false)} className="text-lg font-medium text-white border-b border-gray-800 pb-4">Projects</NavLink>
              <NavLink to="/blog" onClick={() => setOpen(false)} className="text-lg font-medium text-white border-b border-gray-800 pb-4">Resources</NavLink>
              <NavLink to="/about" onClick={() => setOpen(false)} className="text-lg font-medium text-white border-b border-gray-800 pb-4">About</NavLink>
              
              <div className="pt-6 flex flex-col gap-4">
                <button
                  onClick={toggleTheme}
                  className="w-full py-3 rounded-full border border-gray-700 text-white font-medium flex items-center justify-center gap-2"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun size={18} className="text-amber-400" /> Switch to Light Mode
                    </>
                  ) : (
                    <>
                      <Moon size={18} className="text-blue-400" /> Switch to Dark Mode
                    </>
                  )}
                </button>
                <Link to="/contact" onClick={() => setOpen(false)} className="w-full py-3 text-center rounded-full bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors flex items-center justify-center">
                  Get Started <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;

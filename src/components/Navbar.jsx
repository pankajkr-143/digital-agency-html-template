import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [careerOpen, setCareerOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);

  const navItem =
    "relative text-sm font-medium text-white/80 hover:text-white transition duration-300";

  const dropdownItem =
    "block px-3 py-2 rounded-md text-sm text-white/70 hover:text-cyan-300 hover:bg-white/5 transition";

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="
        sticky top-0 z-50
        bg-transparent
        border-b border-transparent
      "
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

       <Link to="/" className="flex items-center">
  <img
    src="/assets/logo23.png"
    alt="MackysTech Logo"
    className="
      h-30 w-auto
      object-contain
      transition duration-300
      hover:scale-105
    "
  />
</Link>


        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10">

          {["/", "/projects", "/services"].map((path, i) => {
            const labels = {
              "/": "Home",
              "/projects": "Projects",
              "/services": "Services",
            };
            const label = labels[path];

            return (
              <NavLink key={i} to={path} className="group relative">
                {({ isActive }) => (
                  <>
                    <span className={navItem}>{label}</span>

                    <span
                      className={`absolute -bottom-2 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-transform duration-300 ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            );
          })}

          {/* BLOG */}
          <NavLink to="/blog" className="group relative">
            {({ isActive }) => (
              <>
                <span className={navItem}>Blog</span>
                <span
                  className={`absolute -bottom-2 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </>
            )}
          </NavLink>

          {/* ABOUT */}
          <div
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
            className="relative"
          >
            <span className={`${navItem} cursor-pointer`}>
              About ▾
            </span>

            <AnimatePresence>
              {aboutOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-10 left-0 w-64 bg-[#0b0f1a] border border-white/10 rounded-xl p-4 space-y-1 shadow-xl"
                >
                  <NavLink to="/about" className={dropdownItem}>About Us</NavLink>
                  <NavLink to="/team" className={dropdownItem}>Our Team</NavLink>
                  <NavLink to="/faq" className={dropdownItem}>FAQ</NavLink>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CAREERS */}
          <div
            onMouseEnter={() => setCareerOpen(true)}
            onMouseLeave={() => setCareerOpen(false)}
            className="relative"
          >
            <span className={`${navItem} cursor-pointer`}>
              Careers ▾
            </span>

            <AnimatePresence>
              {careerOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-10 left-0 w-56 bg-[#0b0f1a] border border-white/10 rounded-xl p-4 space-y-1 shadow-xl"
                >
                  <NavLink to="/career" className={dropdownItem}>Career</NavLink>
                  <NavLink to="/jobs" className={dropdownItem}>Job Openings</NavLink>
                  <NavLink to="/internship" className={dropdownItem}>Internship</NavLink>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
         <div
            onMouseEnter={() => setAcademicsOpen(true)}
            onMouseLeave={() => setAcademicsOpen(false)}
            className="relative"
          >
            <span className={`${navItem} cursor-pointer`}>
              Academics ▾
            </span>

            <AnimatePresence>
              {academicsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-10 left-0 w-56 bg-[#0b0f1a] border border-white/10 rounded-xl p-4 space-y-1 shadow-xl"
                >
                  <a href="https://training.mackystech.in/aws-cloud" target="_blank" rel="noopener noreferrer" className={dropdownItem}>AWS</a>
                  <a href="https://training.mackystech.in/" target="_blank" rel="noopener noreferrer" className={dropdownItem}>Training</a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/contact" className={navItem}>
            Contact
          </NavLink>
        </nav>

        {/* MOBILE BTN */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md p-1"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#0b0f1a] border-t border-white/10"
          >
            <nav className="px-6 py-4 space-y-2">
              {/* Main Nav Links */}
              {["/", "/projects", "/services"].map((path, i) => {
                const labels = {
                  "/": "Home",
                  "/projects": "Projects",
                  "/services": "Services",
                };
                const label = labels[path];

                return (
                  <NavLink
                    key={i}
                    to={path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-sm font-medium transition ${
                        isActive
                          ? "text-cyan-400 bg-white/5"
                          : "text-white/80 hover:text-white hover:bg-white/5"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                );
              })}

              {/* Blog mobile */}
              <NavLink
                to="/blog"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-sm font-medium transition ${
                    isActive
                      ? "text-cyan-400 bg-white/5"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`
                }
              >
                Blog
              </NavLink>

              {/* About Dropdown */}
              <div>
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 transition flex items-center justify-between"
                >
                  About ▾
                </button>
                <AnimatePresence>
                  {aboutOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-6 space-y-1 overflow-hidden"
                    >
                      <NavLink to="/about" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-sm text-white/70 hover:text-cyan-300 hover:bg-white/5 transition">
                        About Us
                      </NavLink>
                      <NavLink to="/team" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-sm text-white/70 hover:text-cyan-300 hover:bg-white/5 transition">
                        Our Team
                      </NavLink>
                      <NavLink to="/faq" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-sm text-white/70 hover:text-cyan-300 hover:bg-white/5 transition">
                        FAQ
                      </NavLink>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Careers Dropdown */}
              <div>
                <button
                  onClick={() => setCareerOpen(!careerOpen)}
                  className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 transition flex items-center justify-between"
                >
                  Careers ▾
                </button>
                <AnimatePresence>
                  {careerOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-6 space-y-1 overflow-hidden"
                    >
                      <NavLink to="/career" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-sm text-white/70 hover:text-cyan-300 hover:bg-white/5 transition">
                        Career
                      </NavLink>
                      <NavLink to="/jobs" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-sm text-white/70 hover:text-cyan-300 hover:bg-white/5 transition">
                        Job Openings
                      </NavLink>
                      <NavLink to="/internship" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-sm text-white/70 hover:text-cyan-300 hover:bg-white/5 transition">
                        Internship
                      </NavLink>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Academics Dropdown */}
              <div>
                <button
                  onClick={() => setAcademicsOpen(!academicsOpen)}
                  className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 transition flex items-center justify-between"
                >
                  Academics ▾
                </button>
                <AnimatePresence>
                  {academicsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-6 space-y-1 overflow-hidden"
                    >
                      <a
                        href="https://training.mackystech.in/aws-cloud"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        className="block px-3 py-2 rounded-md text-sm text-white/70 hover:text-cyan-300 hover:bg-white/5 transition"
                      >
                        AWS
                      </a>
                      <a
                        href="https://training.mackystech.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        className="block px-3 py-2 rounded-md text-sm text-white/70 hover:text-cyan-300 hover:bg-white/5 transition"
                      >
                        Training
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact */}
              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-sm font-medium transition ${
                    isActive
                      ? "text-cyan-400 bg-white/5"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`
                }
              >
                Contact
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;

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
            const label =
              path === "/"
                ? "Home"
                : path.replace("/", "").charAt(0).toUpperCase() +
                  path.slice(2);

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
                  <NavLink to="/" className={dropdownItem}>AWS</NavLink>
                  <NavLink to="/" className={dropdownItem}>Traning</NavLink>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA */}
          <NavLink
            to="/verify"
            className="
              px-6 py-2 rounded-full text-sm font-semibold
              text-black
              bg-gradient-to-r from-cyan-400 to-blue-500
              hover:scale-105 transition
            "
          >
            Verify Certificate
          </NavLink>

          <NavLink to="/contact" className={navItem}>
            Contact
          </NavLink>
        </nav>

        {/* MOBILE BTN */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
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
                const label =
                  path === "/"
                    ? "Home"
                    : path.replace("/", "").charAt(0).toUpperCase() +
                      path.slice(2);

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
                      <NavLink
                        to="/about"
                        onClick={() => setOpen(false)}
                        className="block px-3 py-2 rounded-md text-sm text-white/70 hover:text-cyan-300 hover:bg-white/5 transition"
                      >
                        About Us
                      </NavLink>
                      <NavLink
                        to="/team"
                        onClick={() => setOpen(false)}
                        className="block px-3 py-2 rounded-md text-sm text-white/70 hover:text-cyan-300 hover:bg-white/5 transition"
                      >
                        Our Team
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
                      <NavLink
                        to="/jobs"
                        onClick={() => setOpen(false)}
                        className="block px-3 py-2 rounded-md text-sm text-white/70 hover:text-cyan-300 hover:bg-white/5 transition"
                      >
                        Job Openings
                      </NavLink>
                      <NavLink
                        to="/internship"
                        onClick={() => setOpen(false)}
                        className="block px-3 py-2 rounded-md text-sm text-white/70 hover:text-cyan-300 hover:bg-white/5 transition"
                      >
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
                      <div
                       
                        onClick={() => setOpen(false)}
                        className="block px-3 py-2 rounded-md text-sm text-white/70 hover:text-cyan-300 hover:bg-white/5 transition"
                      >
                        AWS
                      </div>
                      <div
                       
                        onClick={() => setOpen(false)}
                        className="block px-3 py-2 rounded-md text-sm text-white/70 hover:text-cyan-300 hover:bg-white/5 transition"
                      >
                        Training
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA Button */}
              <NavLink
                to="/verify"
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-semibold text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-105 transition text-center"
              >
                Verify Certificate
              </NavLink>

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

import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import OurTeam from "./pages/OurTeam";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Jobs from "./pages/Jobs";
import Internship from "./pages/Internship";
import Verify from "./pages/Verify";
import Contact from "./pages/Contact";
import InternshipForm from "./pages/InternshipForm";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(false);

  // 🔥 Important logic
  useEffect(() => {
    if (location.pathname !== "/") {
      setShowNavbar(true); // Always show on other pages
    }
  }, [location]);

  return (
    <>
      {showNavbar && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={<Home setShowNavbar={setShowNavbar} />}
        />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<OurTeam />} />
        {/* <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} /> */}
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/internship-form" element={<InternshipForm />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

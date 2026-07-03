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
import Documentation from "./pages/Documentation";
import Tutorials from "./pages/Tutorials";
import Blog from "./pages/Blog";
import Community from "./pages/Community";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
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

  // 📊 GA4 Page View Tracking — React Router SPA ke liye zaroori
  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: location.pathname + location.search,
        page_title: document.title,
        page_location: window.location.href,
      });
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
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/community" element={<Community />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

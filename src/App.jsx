import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy-loaded routes for code-splitting & performance (Core Web Vitals)
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Products = lazy(() => import("./pages/Products"));
const Projects = lazy(() => import("./pages/Projects"));
const About = lazy(() => import("./pages/About"));
const OurTeam = lazy(() => import("./pages/OurTeam"));
const Jobs = lazy(() => import("./pages/Jobs"));
const Internship = lazy(() => import("./pages/Internship"));
const Career = lazy(() => import("./pages/Career"));
const Verify = lazy(() => import("./pages/Verify"));
const Contact = lazy(() => import("./pages/Contact"));
const InternshipForm = lazy(() => import("./pages/InternshipForm"));
const Documentation = lazy(() => import("./pages/Documentation"));
const Tutorials = lazy(() => import("./pages/Tutorials"));
const Blog = lazy(() => import("./pages/Blog"));
const Community = lazy(() => import("./pages/Community"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const FAQ = lazy(() => import("./pages/FAQ"));

// Multi-page Ecosystem service pages & utilities
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const BookConsultation = lazy(() => import("./pages/BookConsultation"));

// Programmatic Local SEO landing page template
const LocationLanding = lazy(() => import("./pages/LocationLanding"));

import AOS from "aos";
import "aos/dist/aos.css";

// Loading Skeleton for Suspense fallback
const LoadingSkeleton = () => (
  <div className="min-h-screen bg-[#060a12] flex items-center justify-center">
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full"></div>
      <div className="absolute inset-0 border-4 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  </div>
);

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

      <Suspense fallback={<LoadingSkeleton />}>
        <Routes>
          <Route
            path="/"
            element={<Home setShowNavbar={setShowNavbar} />}
          />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/career" element={<Career />} />
          <Route path="/internship-form" element={<InternshipForm />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/community" element={<Community />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/faq" element={<FAQ />} />

          {/* Technology Ecosystem 10 service routes */}
          <Route path="/software-development" element={<ServiceDetail serviceId="software-development" />} />
          <Route path="/digital-marketing" element={<ServiceDetail serviceId="digital-marketing" />} />
          <Route path="/robotics" element={<ServiceDetail serviceId="robotics" />} />
          <Route path="/artificial-intelligence" element={<ServiceDetail serviceId="artificial-intelligence" />} />
          <Route path="/cyber-security" element={<ServiceDetail serviceId="cyber-security" />} />
          <Route path="/stock-market" element={<ServiceDetail serviceId="stock-market" />} />
          <Route path="/finance" element={<ServiceDetail serviceId="finance" />} />
          <Route path="/building-construction" element={<ServiceDetail serviceId="building-construction" />} />
          <Route path="/sales-marketing" element={<ServiceDetail serviceId="sales-marketing" />} />
          <Route path="/edtech" element={<ServiceDetail serviceId="edtech" />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/book-consultation" element={<BookConsultation />} />

          {/* Programmatic Local SEO landing pages */}
          <Route path="/software-company-in-:city" element={<LocationLanding />} />
          <Route path="/it-services-in-:city" element={<LocationLanding />} />
        </Routes>
      </Suspense>

      {/* Footer is statically rendered below the suspense routes */}
      <Footer />
    </>
  );
}

export default App;

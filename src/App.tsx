import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import TeamPage from './pages/TeamPage';
import GalleryPage from './pages/GalleryPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import InternshipsPage from './pages/InternshipsPage';
import JobsPage from './pages/JobsPage';
import AmbassadorPage from './pages/AmbassadorPage';
import ProfilePage from './pages/ProfilePage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Terminal from './components/Terminal';
import ScrollToTop from './components/ScrollToTop';
import InternshipFormPage from './pages/InternshipFormPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen theme-bg-primary theme-text-primary">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/internships" element={<InternshipsPage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/ambassador" element={<AmbassadorPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/InternshipFormPage" element={<InternshipFormPage />} />
          </Routes>
          <Footer />
          <Terminal />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
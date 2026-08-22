import { useEffect, useState } from "react";
import { useSEO } from "../hooks/useSEO";

import HeroSection from "../components/HeroSection";
import Categories from "../components/Categories";
import BusinessNeeds from "../components/BusinessNeeds";
import CoreGrowth from "../components/CoreGrowth";
import GrowthPackages from "../components/GrowthPackages";
import ProcessTimeline from "../components/ProcessTimeline";
import CaseStudies from "../components/CaseStudies";
import WhyMackysTech from "../components/WhyMackysTech";
import Testimonials from "../components/Testimonials";
import FinalCTA from "../components/FinalCTA";
import SmoothScroll from "../components/SmoothScroll";
import Spotlight from "../components/Spotlight";

export default function Home({ setShowNavbar }) {
  useSEO({
    title: "MackysTech - Best IT Company in Bhopal | Software Development | App Development",
    description: "MackysTech is Bhopal's top IT company offering software development, mobile app development, website development, cloud computing, cybersecurity, AI/ML and IT training. Get a free quote today!",
    canonical: "https://www.mackystech.in/",
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mackystech.in/" }
      ]
    }
  });

  /* ================= RESPONSIVE CHECK ================= */
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth >= 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ================= NAVBAR SCROLL ================= */
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 2;

      if (window.scrollY >= heroHeight - 50) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setShowNavbar]);

  return (
    <main>
      <SmoothScroll>
        <HeroSection />
        <Categories />
        <BusinessNeeds />
        <CoreGrowth />
        <GrowthPackages />
        <ProcessTimeline />
        <CaseStudies />
        <WhyMackysTech />
        <Testimonials />
        <FinalCTA />

        {/* ✅ Spotlight only Desktop */}
        {isDesktop && <Spotlight />}
      </SmoothScroll>
    </main>
  );
}

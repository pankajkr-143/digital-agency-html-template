import { useEffect, useState } from "react";

import Services from "../components/Services";
import Process from "../components/Process";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import HeroSection from "../components/HeroSection";
import SmoothScroll from "../components/SmoothScroll";
import Spotlight from "../components/Spotlight";
import MeetFounder from "../components/MeetFounder";
import SEOContent from "../components/SEOContent";

export default function Home({ setShowNavbar }) {

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

        <Services />
        <Process />
        <WhyChooseUs />
        <Testimonials />
        <MeetFounder />
        <SEOContent />

        {/* ✅ Spotlight only Desktop */}
        {isDesktop && <Spotlight />}

      </SmoothScroll>
    </main>
  );
}

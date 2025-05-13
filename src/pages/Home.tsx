import React, { useLayoutEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import About from '../components/About';
import Founder from '../components/Founder';
import TechStack from '../components/TechStack';
import Events from '../components/Events';
import Gallery from '../components/Gallery';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';

const Home = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <TechStack />
      <Founder />
      <Events />
      <Team />
      <Gallery />
      <Testimonials />
    </>
  );
};

export default Home;
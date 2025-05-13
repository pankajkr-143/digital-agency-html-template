import React, { useLayoutEffect } from 'react';
import Services from '../components/Services';
import TechStack from '../components/TechStack';

const ServicesPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-neo-black pt-20">
      <Services />
      <TechStack />
    </div>
  );
};

export default ServicesPage;
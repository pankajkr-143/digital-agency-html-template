import React, { useLayoutEffect } from 'react';
import Testimonials from '../components/Testimonials';

const TestimonialsPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-neo-black pt-20">
      <Testimonials />
    </div>
  );
};

export default TestimonialsPage;
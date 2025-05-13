import React, { useLayoutEffect } from 'react';
import Events from '../components/Events';
import Gallery from '../components/Gallery';

const EventsPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-neo-black pt-20">
      <Events />
      <Gallery />
    </div>
  );
};

export default EventsPage;
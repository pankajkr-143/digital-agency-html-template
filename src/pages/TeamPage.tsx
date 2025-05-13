import React, { useLayoutEffect } from 'react';
import Team from '../components/Team';

const TeamPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-neo-black pt-20">
      <Team />
    </div>
  );
};

export default TeamPage;
import React, { useLayoutEffect } from 'react';
import Projects from '../components/Projects';

const ProjectsPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-neo-black pt-20">
      <Projects />
    </div>
  );
};

export default ProjectsPage;
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    
    // Also reset any potential scroll position in the history
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
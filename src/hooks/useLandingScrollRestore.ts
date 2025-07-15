import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useLandingScrollRestore() {
  const location = useLocation();

  useEffect(() => {
    // Save scroll position when leaving landing page
    const saveScroll = () => {
      if (window.location.pathname === '/') {
        sessionStorage.setItem('landingScroll', window.scrollY.toString());
      }
    };
    window.addEventListener('beforeunload', saveScroll);
    window.addEventListener('popstate', saveScroll);

    return () => {
      window.removeEventListener('beforeunload', saveScroll);
      window.removeEventListener('popstate', saveScroll);
    };
  }, []);

  useEffect(() => {
    // Restore scroll only if coming back to landing page and not on reload
    if (location.pathname === '/') {
      const navType = (performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming)?.type;
      if (navType !== 'reload') {
        const y = sessionStorage.getItem('landingScroll');
        if (y) {
          setTimeout(() => window.scrollTo(0, parseInt(y)), 0);
        }
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [location]);
} 
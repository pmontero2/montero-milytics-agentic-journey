import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll suave hacia arriba cuando cambia la ruta
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);
};

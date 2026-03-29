// components/ScrollToTop.tsx
import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    // Si hay hash (/#section) intentamos scrollear a ese elemento
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'auto' }); // instantáneo antes del paint
        return;
      }
    }
    // Si no hay hash -> ir al top de la página (instantáneo, sin animación)
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;

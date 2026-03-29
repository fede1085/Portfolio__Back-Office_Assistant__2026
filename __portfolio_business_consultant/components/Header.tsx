import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

export const useSmoothScroll = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    if (location.pathname !== '/') {
      // Si no estamos en Home → navegar primero y luego hacer scroll
      navigate(`/${targetId}`);
      setTimeout(() => {
        const el = document.querySelector(targetId);
        if (el) {
          const yOffset = -90;
          const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 400);
      return;
    }

    // Si ya estamos en Home → scroll directo
    const el = document.querySelector(targetId);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
};

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleSmoothScroll = useSmoothScroll();

  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { label: 'Services', href: '#blogs' },
    { label: 'Projects', href: '#projects' },
    { label: 'Methodology', href: '#methodology' },
    { label: 'About', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQs', href: '#faqs' },
  ];

  // Cerrar menú al cambiar de ruta (por si navega a otra página)
  React.useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex justify-between items-center">
        <a
          onClick={(e) => handleSmoothScroll(e, '#home')}
          href="/#home"
          className="font-extrabold text-[18px] sm:text-[20px] tracking-tight"
        >
          Federico Mosqueira
          <span className="text-[20px] sm:text-[22px] bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-transparent bg-clip-text">
            .
          </span>
        </a>

        {/* NAV visible solo ≥ 1024px */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={`/${link.href}`}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-sm font-medium hover:text-gray-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA visible solo ≥ 1024px */}
        <a
          onClick={(e) => handleSmoothScroll(e, '#contact')}
          href="/#contact"
          className="hidden lg:flex items-center space-x-2 text-sm font-bold hover:text-gray-400 transition-colors group"
        >
          <span>Book a Call</span>
          <ArrowRightIcon
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-150"
            aria-hidden="true"
          />
        </a>

        {/* Botón hamburguesa visible < 1024px */}
        <button
          className="flex lg:hidden items-center justify-center w-10 h-10"
          aria-label="Open menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? (
            // Ícono "X"
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Ícono hamburguesa
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Overlay para cerrar al tocar fuera (solo mobile) */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 top-16 bg-black/30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Panel del menú mobile (desliza desde el top, bajo el header) */}
      <div
        className={`lg:hidden fixed top-16 inset-x-0 z-50 bg-white border-b border-gray-100 shadow-xl transition-transform duration-200 ${
          isOpen ? 'translate-y-0' : '-translate-y-4 pointer-events-none opacity-0'
        }`}
      >
        <nav className="px-6 py-5 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={`/${link.href}`}
              onClick={(e) => {
                handleSmoothScroll(e, link.href);
                setIsOpen(false);
              }}
              className="block text-base font-medium text-gray-900 hover:text-gray-600"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-2">
            <a
              onClick={(e) => {
                handleSmoothScroll(e, '#contact');
                setIsOpen(false);
              }}
              href="/#contact"
              className="inline-flex items-center space-x-2 bg-black text-white px-5 py-3 font-semibold rounded-[4px] hover:bg-gray-700 transition-colors"
            >
              <span>Book a Call</span>
              <ArrowRightIcon className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import { ChevronRightIcon } from './icons/ChevronRightIcon';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Federico and the team were very professional and understood exactly what we needed. The result exceeded our expectations.",
    author: "To be announced",
    role: "Client partner",
  },
  {
    quote:
      "Federico quickly identified where we were losing time and automated our internal workflow in just two weeks.",
    author: "Logistics SME — Antwerp",
    role: "Operations Manager",
  },
  {
    quote:
      "The AI prototypes were just what we needed — we went from idea to working dashboard in days, not months.",
    author: "Digital Agency — Brussels",
    role: "Creative Director",
  },
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // Cambio automático cada 6 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    // 🟢 Menos margen vertical (antes: py-24)
    <section className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-transparent bg-clip-text">
          TESTIMONIALS
        </p>

        {/* 🟢 Título: crece a partir de ~600px */}
        <h2 className="text-3xl min-[600px]:text-5xl font-black mt-2 tracking-tight">
          Client Feedback
        </h2>

        <div
          className="mt-12 relative"
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
        >
          {/* 🟢 Altura ajustada para que no “salte” cuando la comilla va arriba */}
          <div className="relative mx-auto max-w-4xl min-h-[220px] min-[600px]:min-h-[240px] text-center overflow-hidden">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full transition-opacity duration-700 ease-in-out ${
                  index === current ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {/* Mobile: comilla arriba. sm+: comilla a la izquierda */}
                <div className="flex flex-col items-center sm:flex-row sm:justify-center mt-2">
                  <span
                    className="select-none mb-3 sm:mb-0 sm:mr-2 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text
                               text-6xl min-[600px]:text-8xl font-black"
                    aria-hidden="true"
                  >
                    “
                  </span>

                  {/* 🟢 Texto del testimonio: más chico <600px, grande ≥600px, leading compacto en mobile */}
                  <span className="text-2xl min-[600px]:text-3xl font-black leading-[1.15] min-[600px]:leading-snug max-w-3xl mx-auto">
                    {t.quote}
                  </span>
                </div>

                <div className="mt-6 min-[600px]:mt-8">
                  <p className="font-black">{t.author}</p>
                  <p className="text-gray-600">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navegación */}
          <div className="flex justify-center mt-8 min-[600px]:mt-10 space-x-2">
            <button
              onClick={prevSlide}
              className="bg-black text-white p-3 font-medium rounded-[4px] hover:bg-gray-200 hover:text-gray-600 transition-colors focus:outline-none focus-visible:ring focus-visible:ring-purple-300"
              aria-label="Previous testimonial"
              type="button"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-black text-white p-3 font-medium rounded-[4px] hover:bg-gray-200 hover:text-gray-600 transition-colors focus:outline-none focus-visible:ring focus-visible:ring-purple-300"
              aria-label="Next testimonial"
              type="button"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

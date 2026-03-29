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
      "The team was very professional and understood exactly what we needed. The result exceeded our expectations.",
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
      "The AI prototypes were impressive — we went from idea to working dashboard in days, not months.",
    author: "Digital Agency — Brussels",
    role: "Creative Director",
  },
];

const TestimonialsSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // Cambia automáticamente cada 6 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-transparent bg-clip-text">
          TESTIMONIALS
        </p>
        <h2 className="text-5xl font-black mt-2 tracking-tight">Client Feedback</h2>

        <div className="mt-16 relative" role="region" aria-roledescription="carousel" aria-label="Client testimonials">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full transition-opacity duration-700 ease-in-out ${
                index === current ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="mx-auto max-w-4xl text-center">
                <p className="text-3xl font-black mt-2 leading-snug flex justify-center">
                  <span
                    className="text-8xl font-black bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text select-none"
                    aria-hidden="true"
                  >
                    “
                  </span>
                  <span className="mt-7 ml-2">{t.quote}</span>
                </p>
                <div className="mt-8">
                  <p className="font-black">{t.author}</p>
                  <p className="text-gray-600">{t.role}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Botones */}
          <div className="flex justify-center mt-10 space-x-2 relative z-10">
            <button
              onClick={prevSlide}
              className="bg-black text-white p-3 font-medium rounded-[4px] hover:bg-gray-200 hover:text-gray-600 transition-colors focus:outline-none focus-visible:ring focus-visible:ring-purple-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-black text-white p-3 font-medium rounded-[4px] hover:bg-gray-200 hover:text-gray-600 transition-colors focus:outline-none focus-visible:ring focus-visible:ring-purple-300"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;

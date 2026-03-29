import React from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { ArrowTopRightIcon } from './icons/ArrowTopRightIcon';
import { Link } from 'react-router-dom';
import { useSmoothScroll } from './Header';

const Hero: React.FC = () => {
  const smoothScroll = useSmoothScroll();

  return (
    <section id="home" className="mx-auto max-w-7xl px-6 py-6 pb-10">
      {/* Hasta 1100px = 1 columna (imagen arriba). Desde 1100px = 2 columnas */}
      <div className="grid grid-cols-1 min-[1100px]:grid-cols-2 gap-12 items-center">
        
        {/* Imagen: arriba hasta 1100px, a la derecha desde 1100px */}
        <div className="w-full flex justify-center min-[1100px]:justify-end mt-6 min-[1100px]:mt-0 min-[1100px]:order-last">
          <img
            src="/profile_pic.png"
            alt="Federico Mosqueira, Business Consultant | AI & Automation Strategy"
            className="w-[220px] sm:w-[280px] md:w-[480px] mt-[-10px] lg:w-[560px] h-auto rounded-2xl object-contain"
          />
        </div>

        {/* Texto */}
        <div className="space-y-6 text-center min-[1100px]:text-left">
  <h1 className="text-4xl sm:text-6xl md:text-[4.2rem] font-black tracking-tighter leading-[1.05] sm:leading-[1.05]">
  Bridging{' '}
  <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-transparent bg-clip-text">
    AI's potential
  </span>{' '}
  to your business's success.
</h1>

          <p className="text-gray-600 text-lg sm:text-xl max-w-xl mx-auto min-[1100px]:mx-0">
            I help non-technical teams in Belgium turn manual processes into AI-powered, plug-and-play workflows and
            microapps that save time and reduce complexity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center min-[1100px]:justify-start space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
            <a
              href="/#blogs"
              onClick={(e) => smoothScroll(e, '#blogs')}
              className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 font-medium rounded-[4px] hover:bg-gray-200 hover:text-gray-700 transition-colors duration-200 ease-in-out group"
            >
              <span>Discover Our Services</span>
              <ArrowRightIcon
                className="w-4 h-4 transform rotate-90 transition-transform duration-150 motion-safe:group-hover:translate-y-1"
                aria-hidden="true"
              />
            </a>

            <Link
              to="/resume"
              className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 font-medium rounded-[4px] hover:bg-gray-200 hover:text-gray-700 transition-colors duration-200 ease-in-out group"
            >
              <span>View My Resume</span>
              <ArrowTopRightIcon
                className="w-5 h-5 transition-transform duration-150 transform motion-safe:group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

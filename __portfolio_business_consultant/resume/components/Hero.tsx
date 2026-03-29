import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  name: string;
  profile: {
    title: string;
    summary: string;
  };
  contactEmail: string;
}

const GradientText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-transparent bg-clip-text">
    {children}
  </span>
);

const Hero: React.FC<HeroProps> = ({ name, profile, contactEmail }) => {
  return (
    <section className="bg-white pb-16 px-3 sm:pt-12 sm:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-44 h-44 md:w-52 md:h-52 rounded-full mx-auto overflow-hidden bg-white">
              <img
                className="w-full h-full rounded-full object-contain object-top"
                src="profile_pic.png"
                alt={`Profile picture of ${name}`}
              />
            </div>

            {/* Nombre */}
            <h1 className="text-4xl mt-4 font-extrabold text-black tracking-tight">
              {name}
            </h1>

            {/* Título profesional */}
            <h2 className="mt-2 text-md font-bold tracking-wide uppercase bg-gradient-to-r from-purple-600 via-pink-600 to-orange-200 text-transparent bg-clip-text">
              {profile.title}
            </h2>

            {/* Descripción corta */}
            <p className="mt-4 text-md text-gray-500 leading-relaxed max-w-3xl mx-auto">
              I translate manual processes into accessible, fast and digital solutions 
              <br />— without technical friction.
            </p>

            {/* Ubicación */}
            <p className="mt-4 text-sm text-black tracking-wide">
              Based in Antwerp, Belgium
            </p>
          </div>

          {/* Botones */}
          <div className="mt-8 flex justify-center">
            {/* 
              <500px: columna centrada y ancho completo para que queden perfectamente centrados.
              >=500px: fila, ancho auto (como antes).
            */}
            <div className="w-full min-[500px]:w-auto flex flex-col min-[500px]:flex-row items-stretch min-[500px]:items-center justify-center gap-4">
              {/* View Portfolio */}
              <Link
                to="/"
                className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium rounded-[4px] text-white bg-black hover:bg-gray-200 hover:text-black transition-colors w-full min-[500px]:w-auto"
              >
                View Portfolio
              </Link>

              {/* Download Curriculum */}
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-sm font-medium rounded-[4px] text-black hover:text-white bg-gray-200 hover:bg-black transition-colors w-full min-[500px]:w-auto"
              >
                Download Curriculum
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';

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
            
            {/* Imagen */}
            <div className="w-44 h-44 md:w-52 md:h-52 rounded-full mx-auto overflow-hidden bg-white">
              <img
                className="w-full h-full rounded-full object-contain object-top"
                src="profile_pic.png"
                alt={`Profile picture of ${name}`}
              />
            </div>

            {/* Nombre */}
            <h1 className="text-3xl mt-4 font-bold text-black tracking-tight">
              {name}
            </h1>

            {/* 🔥 TÍTULO DESDE CONSTANTS */}
            <div className="flex items-center justify-center mt-2 text-sm font-semibold text-[#0078d4] tracking-wide uppercase">
              <span className="leading-none">
                {profile.title}
              </span>
            </div>

            {/* 🔥 SUMMARY DESDE CONSTANTS */}
            <p className="mt-4 text-md text-gray-500 leading-relaxed max-w-3xl mx-auto">
              {profile.summary}
            </p>

            {/* Ubicación / Branding */}
            <p className="mt-6 text-sm text-black tracking-wide flex items-center justify-center gap-3">
              <img 
                src="/app-logos/microsoft-logo.svg" 
                alt="Microsoft"
                className="h-[27px] object-contain flex-shrink-0"
              />
            </p>

          </div>

          {/* Botones */}
          <div className="mt-12 flex justify-center">
            <div className="flex flex-wrap gap-4">

              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-sm font-medium rounded-[4px] text-white bg-black hover:bg-gray-200 hover:text-black transition-colors"
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
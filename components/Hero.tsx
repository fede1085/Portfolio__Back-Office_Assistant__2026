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
    <section className="bg-[#F7F7F7] pb-16 px-3 sm:pt-12 sm:pb-24 border-b border-gray-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="text-center">

            {/* Imagen */}
            <div className="w-44 h-44 md:w-52 md:h-52 rounded-full mx-auto overflow-hidden">
              <img
                className="w-full h-full rounded-full object-contain object-top"
                src="profile_pic.svg"
                alt={`Profile picture of ${name}`}
              />
            </div>

            {/* Nombre */}
            <h1 className="text-3xl mt-4 font-bold text-[#333131] tracking-tight">
              {name}
            </h1>

            {/* 🔥 TÍTULO DESDE CONSTANTS */}
            <div className="flex items-center justify-center mt-2 text-sm font-medium text-[#0067B8] tracking-widest uppercase">
              <span className="leading-none">
                {profile.title}
              </span>
            </div>

            {/* 🔥 SUMMARY DESDE CONSTANTS */}
            <p className="mt-4 text-md text-[#333131] leading-relaxed max-w-3xl mx-auto">
              {profile.summary}
            </p>

            {/* Ubicación / Branding */}
            <p className="mt-6 text-sm text-[#333131] tracking-wide flex items-center justify-center gap-3">
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
                href="/Back-Office_Assistant_Curriculum.pdf"
                download="Federico-Mosqueira-CV.pdf"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-sm font-medium rounded-[3px] text-white bg-[#333131] hover:bg-gray-200 hover:text-[#333131] transition-colors"
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
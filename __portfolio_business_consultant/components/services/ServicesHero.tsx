import React from 'react';

const ServicesHero: React.FC = () => {
  return (
    <section className="bg-black text-white py-24 sm:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
          End-to-End <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-transparent bg-clip-text">AI & Automation</span> Services
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mt-4 max-w-3xl mx-auto">
          Practical, measurable, and ready-to-use AI solutions for non-technical teams.
        </p>
      </div>
    </section>
  );
};

export default ServicesHero;
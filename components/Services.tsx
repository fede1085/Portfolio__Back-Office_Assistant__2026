import React from 'react';

interface ServicesProps {
  valueProposition: string[];
}

const Services: React.FC<ServicesProps> = ({ valueProposition }) => {
  return (
    <section id="overview" className="pb-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-sm font-medium text-[#0067B8] tracking-widest uppercase">
            Value Proposition
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-[#333131]">
            {valueProposition.join('0')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

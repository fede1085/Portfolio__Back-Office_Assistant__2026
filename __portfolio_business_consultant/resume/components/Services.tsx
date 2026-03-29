import React from 'react';

interface ServicesProps {
  valueProposition: string[];
}

const Services: React.FC<ServicesProps> = ({ valueProposition }) => {
  return (
    <section id="overview" className="pb-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-sm font-semibold text-purple-600 tracking-wider uppercase">
            Value Proposition
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Consultant specialized in AI and automation for SMEs and organizations. I help teams redesign workflows,
            build low-code solutions, and deploy measurable automation within days — balancing speed, compliance, and
            real ROI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

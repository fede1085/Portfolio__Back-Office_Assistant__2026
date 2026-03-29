import React from 'react';
import { EducationIcon } from './icons/ExperienceIcons';
import Timeline from './services/Timeline';

const Experience: React.FC = () => {
  const methodologyData = [
    { title: 'Identify goals', subtitle: 'Clarify objectives and KPIs with stakeholders', period: '1' },
    { title: 'Analyze current processes', subtitle: 'Audit workflows to detect inefficiencies and risks', period: '2' },
    { title: 'Design improvements', subtitle: 'Map optimized workflows with AI and low-code tools', period: '3' },
    { title: 'Pilot & validate', subtitle: 'Test improvements with real users and refine quickly', period: '4' },
    { title: 'Deploy organization-wide', subtitle: 'Launch MVP in 7–14 days with training for adoption', period: '5' },
    { title: 'Evaluate & improve', subtitle: 'Measure results, adjust, and ensure continuous ROI', period: '6' },
  ];

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        {/* header centrado */}
        <div className="text-center mb-20">
          <div className="flex flex-col items-center mb-6">
            <EducationIcon className="mb-10 w-16 h-16" />
            <h2 className="text-5xl font-black mt-2 tracking-tight">Methodology</h2>
          </div>
          <p className="text-gray-600 max-w-2xl text-lg mx-auto">
            A clear, step-by-step workflow to deliver AI and automation projects effectively.
          </p>
        </div>

        {/* WRAPPER centrado del timeline */}
        <div className="relative w-full max-w-xl mx-auto flex flex-col md:flex-row max-w-2xl flex justify-center">
          <Timeline items={methodologyData} />
        </div>
      </div>
    </section>
  );
};

export default Experience;

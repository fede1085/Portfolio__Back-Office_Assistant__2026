
import React from 'react';

interface ExperienceItem {
  role: string;
  location: string;
  period: string;
  highlights: string[];
}

interface ExperienceProps {
  experience: ExperienceItem[];
}

const BriefcaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);


const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section id="experience" className="pb-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-sm font-medium text-[#0067B8] tracking-widest uppercase">Timeline</h2>
          <p className="mt-2 text-2xl font-extrabold text-[#333131] tracking-tight sm:text-3xl">Operational Background</p>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="flow-root">
            <ul className="mb-8">
              {experience.map((job, jobIdx) => (
                <li key={job.role + job.period}>
                  <div className="relative">
                    {jobIdx !== experience.length - 1 ? (
                      <span className="absolute top-4 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                    ) : null}
                    <div className="relative flex space-x-4 items-start">
                      <div>
                        <span className="h-10 w-10 rounded-full border border-gray-200 bg-[#F7F7F7] flex items-center justify-center">
                          <BriefcaseIcon className="h-5 w-5 text-[#333131]" aria-hidden="true" />
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex justify-between items-center">
                          <p className="text-lg font-bold text-[#333131]">{job.role}</p>
                          <p className="text-sm text-[#333131] whitespace-nowrap">{job.period}</p>
                        </div>
                        <p className="text-sm text-[#333131]">{job.location}</p>
                        <ul className="mt-2 list-disc list-inside text-[#333131] space-y-1">
                          {job.highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

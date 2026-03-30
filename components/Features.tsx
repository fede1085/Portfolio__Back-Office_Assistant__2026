
import React from 'react';

interface Skill {
  title: string;

}

interface PersonalSkillsProps {
  skills: Skill[];
}

const skillIcons = [
  // Bridging Technical & Business Needs -> Communication/Users
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
  ),
  // Agile Prototyping & Execution -> Lightning bolt
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  ),
  // Strategic Process Automation -> Gears/Settings
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  ),
];

const PersonalSkills: React.FC<PersonalSkillsProps> = ({ skills }) => {
  return (
    <section id="personal-skills" className="pb-20 sm:pb-28">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wider uppercase">Skills</h2>
          <p className="mt-2 text-lg font-extrabold text-[#333131] tracking-tight sm:text-3xl">Core Competencies</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-0">
          {skills.map((skill, index) => {
            const Icon = skillIcons[index % skillIcons.length];
            return (
              <div key={index} className="text-center px-4">
                <div className="flex items-center justify-center h-16 w-16 rounded-md border border-gray-300 bg-gray-100 text-[#333131] hover:bg-gray-200 hover:text-[#333131] transition-colors mx-auto">
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </div>

                <h3 className="mt-6 text-base leading-6 font-medium text-[#333131]">
                  {skill.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PersonalSkills;

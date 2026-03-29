import React from 'react';

interface SkillsProps {
  toolStack: Record<string, string[]>;
}

const Skills: React.FC<SkillsProps> = ({ toolStack }) => {
  return (
    <section id="skills" className="pb-12 sm:py-20 sm:pb-28 text-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-sm font-semibold text-purple-600 tracking-wider uppercase">
            Tool Stack
          </h2>
          <p className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
            The tools I use to build solutions
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            From AI Generation to Development, this is my tool-stack for delivering results.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {Object.entries(toolStack).map(([category, tools]: [string, string[]]) => (
            <div key={category}>
              <h3 className="text-lg font-bold text-black tracking-wide capitalize mb-4 border-b border-gray-200 pb-2">
                {category.replace(/_/g, ' ')}
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-1 rounded-[4px] text-sm font-medium border border-gray-300 bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-600 transition-colors cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

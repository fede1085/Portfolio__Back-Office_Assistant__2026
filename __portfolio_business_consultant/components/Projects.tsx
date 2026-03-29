import React from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { categoryStyles } from './services/BlockItem'; // reutiliza estilos de tags

interface ProjectCardProps {
  image: string;
  category: string;
  title: string;
  ctaLabel: string;
  ctaHref: string;
  tags?: string[]; // ← nuevo (opcional)
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, category, title, ctaLabel, ctaHref, tags = [] }) => (
  <div className="rounded-[4px] overflow-hidden">
   {/* <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400  opacity-1" /> */}

    <div className="bg-white p-6">
      <p className="text-sm bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-transparent bg-clip-text font-bold">
        {category}
      </p>


      {/* Tags (si hay) */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-3 [&_span]:transform [&_span]:origin-left [&_span]:scale-90">
          {tags.map((tag, i) => (
            <span
              key={i}
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-[4px] text-sm font-medium ring-1 ring-inset ${
                categoryStyles[tag] || 'bg-gray-1000/10 text-gray-400 ring-gray-500/20'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <h3 className="text-2xl font-black mt-4 leading-tight">{title}</h3>

      <a
        href={ctaHref}
        className="text-md text-black hover:text-gray-300 transition-colors font-medium flex items-center space-x-2 mt-8 group"
      >
        <span>{ctaLabel}</span>
        <ArrowRightIcon
          className="w-4 h-4 transition-transform duration-150 transform motion-safe:group-hover:translate-x-1 motion-reduce:transform-none"
          aria-hidden="true"
        />
      </a>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const projectsData = [
    {
      image: 'https://placehold.co/600x400?text=Case+Study+Coming+Soon',
      // category: 'Logistics automation',
      title: 'Pending case study: Discovery audit for an Antwerp logistics',
      ctaLabel: 'Request similar roadmap',
      ctaHref: '#contact',
      tags: ['Ops & Administration', 'Agents & Automations'], // ← ejemplo
    },
    {
      image: 'https://placehold.co/600x400?text=Case+Study+Coming+Soon',
      // category: 'Public sector enablement',
      title: 'Pending case study: Copilot program for municipal HR',
      ctaLabel: 'Book a capability review',
      ctaHref: '#contact',
      tags: ['Copilots & Assistants', 'MicroApps & Services'],
    },
    {
      image: 'https://placehold.co/600x400?text=Case+Study+Coming+Soon',
      // category: 'Agency content ops',
      title: 'Pending case study: AI content factory for a digital agency',
      ctaLabel: 'Preview the playbook',
      ctaHref: '#contact',
      tags: ['Marketing & Content', 'Agents & Automations'],
    },
  ];

  return (
    <section className="bg-gray-100 py-24">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-sm font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-transparent bg-clip-text tracking-wide">
              PROJECTS
            </p>
            <h2 className="text-4xl md:text-5xl font-black mt-2 tracking-tight">Selected Case Studies.</h2>
          </div>
          <a
            // onClick={(e) => handleSmoothScroll(e, '#contact')}
            href="/#contact"
            className="bg-black text-white px-6 py-3 font-medium rounded-[4px] hover:bg-gray-200 hover:text-gray-600 transition-colors hidden md:inline-flex items-center gap-2"
          >
            <span>Start a Project</span>
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

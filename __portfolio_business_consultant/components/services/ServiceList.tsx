import React, { useState, useEffect, useRef } from 'react';
import { ArrowRightIcon } from '../icons/ArrowRightIcon';
import { Link } from 'react-router-dom';
import { SERVICE_MAP } from '../../App';

const servicesData = [
  { category: 'Ops & Administration', title: 'Google Workspace Admin', description: 'Prebuilt automation templates for logistics, energy, public sector, and agency operations.' },
  { category: 'Copilots & Assistants', title: 'Custom AI Copilots & Assistants', description: 'Tailored copilots for sales, HR, or support teams with reusable prompt libraries and memory.' },
  { category: 'Agents & Automations', title: 'AI Agents & Automation', description: 'Autonomous agents to monitor data, trigger workflows, and escalate exceptions.' },
  { category: 'Marketing & Content', title: 'AI Marketing Factory', description: 'Continuous improvement program to monitor KPIs and capture new automation value.' },
  { category: 'MicroApps & Services', title: 'AI-Microapps', description: 'Prebuilt automation templates for logistics, energy, public sector, and agency operations.' },
  { category: 'Digital Avatars', title: 'Real-Time Digital Avatars', description: 'Flagship experiments such as real-time digital avatars, AI content factory, and AI microapps.' },
];

const categoryStyles: { [key: string]: string } = {
  'Ops & Administration': 'bg-purple-500/10 text-purple-400 ring-purple-500/20',
  'MicroApps & Services': 'bg-pink-500/10 text-pink-400 ring-pink-500/20',
  'Marketing & Content': 'bg-orange-500/10 text-orange-400 ring-orange-500/20',
  'Digital Avatars': 'bg-teal-500/10 text-teal-400 ring-teal-500/20',
  'Copilots & Assistants': 'bg-blue-500/10 text-blue-400 ring-blue-500/20',
  'Agents & Automations': 'bg-green-500/10 text-green-400 ring-green-500/20',
};

interface Service {
  category: string;
  title: string;
  description: string;
}

/* --- Mapeo explícito título -> slug (evita discrepancias de texto) --- */
const TITLE_TO_SLUG: Record<string, keyof typeof SERVICE_MAP> = {
  'Google Workspace Admin': 'google-workspace-admin',
  'Custom AI Copilots & Assistants': 'custom-copilots-and-assistants',
  'AI Agents & Automation': 'ai-agents',
  'AI Marketing Factory': 'ai-marketing-factory',
  'AI-Microapps': 'ai-microapps',               // tu título aquí tiene guion
  'Real-Time Digital Avatars': 'real-time-ai-avatars',
};

/* Helper: intenta primero el mapeo explícito; si no, busca por título en SERVICE_MAP */
const getSlug = (title: string): string => {
  if (TITLE_TO_SLUG[title]) return TITLE_TO_SLUG[title];
  const found = Object.entries(SERVICE_MAP).find(([, v]) => v.title === title);
  return found ? found[0] : '';
};

/* Componente mínimo interno para renderizar la tag de color. */
const CategoryTag: React.FC<{ category?: string }> = ({ category }) => {
  if (!category) return null;
  const tagClass = categoryStyles[category] || 'bg-gray-1000/10 text-gray-400 ring-gray-500/20';
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-[4px] text-sm font-medium w-fit whitespace-nowrap flex-shrink-0 ring-1 ring-inset ${tagClass}`}
    >
      {category}
    </span>
  );
};

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const slug = getSlug(service.title);
  const to = slug ? `/services/${slug}` : '/#contact'; // fallback seguro

  return (
    <div
      ref={ref}
      className={`bg-white border border-gray rounded-[4px] p-8 space-y-4 flex flex-col transition-all duration-500 ease-out hover:scale-105 hover:shadow-[0_0_30px_rgba(192,132,252,0.2)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <CategoryTag category={service.category} />

      <h3 className="text-2xl font-black text-black flex-grow">{service.title}</h3>
      <p className="text-gray-600 flex-grow">{service.description}</p>

      {/* Solo cambiamos el enlace del CTA, respetando clases */}
      <Link to={to} className="text-sm flex items-center space-x-2 text-black hover:text-gray-500 font-medium group pt-4">
        <span>View details</span>
        <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

const ServiceList: React.FC = () => {
  return (
    <section className="bg-gray-100 text-white py-24">
      <div className="container mx-auto px-6">
        <div className="bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;

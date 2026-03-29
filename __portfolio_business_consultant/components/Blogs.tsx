import React from 'react';
import BlockItem from './services/BlockItem';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

import { Link } from 'react-router-dom';
import { SERVICE_MAP } from '../App';

// helper base: título → slug usando SERVICE_MAP (sin duplicar metadatos)
const getSlug = (title: string) =>
  Object.entries(SERVICE_MAP).find(([, v]) => v.title === title)?.[0] ?? '';

// mapeo explícito para tus títulos actuales (evita depender de coincidencias exactas)
const TITLE_TO_SLUG: Record<string, keyof typeof SERVICE_MAP> = {
  'Google Workspace Administration': 'google-workspace-admin',
  'AI MicroApps & AI Builds': 'ai-microapps',
  'AI-Powered Marketing Factory': 'ai-marketing-factory',
  'Real-Time Digital Avatars': 'real-time-ai-avatars',
  'Custom AI Copilots & Assistants': 'custom-copilots-and-assistants',
  'AI Agents for Operations': 'ai-agents',
};

const blogsData = [
  { category: 'Ops & Administration',     title: 'Google Workspace Administration',     description: '', ctaLabel: 'Learn more', ctaHref: '#contact' },
  { category: 'MicroApps & Services',     title: 'AI MicroApps & AI Builds',            description: '', ctaLabel: 'Learn more', ctaHref: '#contact' },
  { category: 'Marketing & Content',      title: 'AI-Powered Marketing Factory',        description: '', ctaLabel: 'Learn more', ctaHref: '#contact' },
  { category: 'Digital Avatars',          title: 'Real-Time Digital Avatars',           description: '', ctaLabel: 'Learn more', ctaHref: '#contact' },
  { category: 'Copilots & Assistants',    title: 'Custom AI Copilots & Assistants',     description: '', ctaLabel: 'Learn more', ctaHref: '#contact' },
  { category: 'Agents & Automations',     title: 'AI Agents for Operations',            description: '', ctaLabel: 'Learn more', ctaHref: '#contact' },
];

const Blogs: React.FC = () => {
  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-6">
        <p className="text-sm font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-transparent bg-clip-text mb-4">
          SERVICES
        </p>

        <div className="grid md:grid-cols-7 gap-12">
          {/* LEFT: sticky within this section only */}
          <div className="md:col-span-3">
            {/* Sticky element (stops at the bottom of the grid/section) */}
            <div className="md:sticky md:top-24 md:self-start">
              <h2 className="text-5xl font-black tracking-tight">
                End-to-End{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-transparent bg-clip-text">
                  AI & Automation
                </span>{' '}
                Services
              </h2>

              {/* SPA navigation to /services */}
              <div className="md:flex items-center space-x-2 text-md mt-10">
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white inline-flex items-center gap-2 group"
                >
                  <span>View All Services</span>
                  <ArrowRightIcon
                    className="w-4 h-4 transition-transform duration-150 transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>

            </div>
          </div>

          {/* RIGHT: scrollable list */}
          <div className="md:col-span-4">
            {blogsData.map((b, i) => {
              // calcula slug seguro para cada tarjeta
              const slug =
                TITLE_TO_SLUG[b.title] || getSlug(b.title) || '';
              const ctaTo = slug ? `/services/${slug}` : '#contact';

              return (
                <BlockItem
                  key={i}
                  category={b.category}
                  title={b.title}
                  description={b.description}
                  ctaLabel={b.ctaLabel}
                  // 👇 solo cambiamos el destino del CTA
                  ctaHref={ctaTo}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;

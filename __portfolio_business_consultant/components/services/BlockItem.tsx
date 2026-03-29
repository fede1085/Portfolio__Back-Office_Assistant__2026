import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../icons/ArrowRightIcon';

export interface BlockItemProps {
  category?: string;
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaHref: string;
}

// ⬇️ ÚNICO CAMBIO: exportar categoryStyles
export const categoryStyles: Record<string, string> = {
  'Ops & Administration': 'bg-purple-500/10 text-purple-400 ring-purple-500/20',
  'MicroApps & Services': 'bg-pink-500/10 text-pink-400 ring-pink-500/20',
  'Marketing & Content': 'bg-orange-500/10 text-orange-400 ring-orange-500/20',
  'Digital Avatars': 'bg-teal-500/10 text-teal-400 ring-teal-500/20',
  'Copilots & Assistants': 'bg-blue-500/10 text-blue-400 ring-blue-500/20',
  'Agents & Automations': 'bg-green-500/10 text-green-400 ring-green-500/20',
};

const isExternal = (url?: string) => !!url && /^https?:\/\//i.test(url);

const BlockItem: React.FC<BlockItemProps> = ({
  category,
  title,
  description,
  ctaLabel = 'Learn more',
  ctaHref,
}) => {
  const tagClass = category
    ? categoryStyles[category] || 'bg-gray-900/10 text-gray-400 ring-gray-500/20'
    : '';

  return (
    <div className="py-8 border-b border-gray-800">
      {category && (
        <span
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-[4px] text-sm font-medium w-fit whitespace-nowrap flex-shrink-0 ring-1 ring-inset ${tagClass}`}
        >
          {category}
        </span>
      )}

      <h3 className="text-2xl font-bold mt-2 text-white">
        {isExternal(ctaHref) ? (
          <a href={ctaHref} className="inline-block" aria-label={`Leer ${title}`}>
            {title}
          </a>
        ) : (
          <Link to={ctaHref} className="inline-block" aria-label={`Leer ${title}`}>
            {title}
          </Link>
        )}
      </h3>

      {description && <p className="text-gray-400 mt-2">{description}</p>}

      {isExternal(ctaHref) ? (
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm flex items-center space-x-2 mt-4 text-gray-300 hover:text-white transition-colors font-medium group"
          aria-label={ctaLabel}
        >
          <span>{ctaLabel}</span>
          <ArrowRightIcon
            className="w-4 h-4 transition-transform duration-150 transform motion-safe:group-hover:translate-x-1 motion-reduce:transform-none"
            aria-hidden="true"
          />
        </a>
      ) : (
        <Link
          to={ctaHref}
          className="text-sm flex items-center space-x-2 mt-4 text-gray-300 hover:text-white transition-colors font-medium group"
          aria-label={ctaLabel}
        >
          <span>{ctaLabel}</span>
          <ArrowRightIcon
            className="w-4 h-4 transition-transform duration-150 transform motion-safe:group-hover:translate-x-1 motion-reduce:transform-none"
            aria-hidden="true"
          />
        </Link>
      )}
    </div>
  );
};

export default BlockItem;

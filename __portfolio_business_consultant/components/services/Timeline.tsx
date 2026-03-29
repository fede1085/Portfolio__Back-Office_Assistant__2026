// codename: timeline-unified-v2
// File: components/services/Timeline.tsx
import React from "react";

export type TimelineItemType = {
  id?: string | number;
  title: string;
  subtitle?: string;
  period?: string | number;
  details?: string;
  icon?: React.ReactNode;
  side?: "left" | "right" | "full";
};

const TIMELINE_CLS = {
  wrapper: "relative",
  verticalLine: "absolute left-[24px] top-0 h-[95%] w-0.5 bg-gray-600",
  list: "space-y-12",
  item: "relative flex items-center space-x-6",
  circle: "flex items-center justify-center w-12 h-12 rounded-full bg-black text-white font-black ring-8 ring-white flex-shrink-0 z-10",
  textWrap: "min-w-0",
  title: "text-xl font-bold m-0",
  subtitle: "mt-1 text-gray-600",
};

/**
 * Timeline (compatible con markup original en Experience.tsx)
 * - Mantiene las mismas clases para que visualmente no cambie nada.
 * - Data-driven: recibe items: TimelineItemType[]
 */
type Props = {
  items: TimelineItemType[];
  className?: string;
};

const Timeline: React.FC<Props> = ({ items, className = "" }) => {
  return (
    <div className={`${TIMELINE_CLS.wrapper} ${className}`}>
      {/* vertical line (igual que en tu archivo original) */}
      <div className={TIMELINE_CLS.verticalLine} />
      <ul className={TIMELINE_CLS.list}>
        {items.map((it, i) => (
          <li key={it.id ?? i} className={TIMELINE_CLS.item}>
            <div className={TIMELINE_CLS.circle}>
              <span className="text-md font-medium">{it.period}</span>
            </div>

            <div className={TIMELINE_CLS.textWrap}>
              <h4 className={TIMELINE_CLS.title}>{it.title}</h4>
              {it.subtitle && <p className={TIMELINE_CLS.subtitle}>{it.subtitle}</p>}
              {it.details && <p className="text-sm text-gray-500 mt-2">{it.details}</p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;

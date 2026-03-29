// pages/main-services/ServiceDetailPage.tsx
import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRightIcon } from '../../components/icons/ArrowRightIcon';
import Timeline from '../../components/services/Timeline';

type Metric = { icon: 'rocket' | 'sparkles' | 'scale'; title: string; description: string };
type Content = {
  heroDescription: string;
  overviewTitle: string;
  overviewParagraphs: string[];
  deliverables: string[];
  tools: string[];
  metrics: Metric[];
  cta: { title: string; text: string; primary: string; secondary: string };
};

// ---- Inline icons (auto-contenidos) ----
const CheckCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeWidth="2" d="M9 12l2 2 4-4" />
    <path strokeWidth="2" d="M12 22a10 10 0 100-20 10 10 0 000 20z" />
  </svg>
);
const RocketLaunchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeWidth="2" d="M5 13l4 4" />
    <path strokeWidth="2" d="M7 11l6 6" />
    <path strokeWidth="2" d="M12 6l6 6" />
    <path strokeWidth="2" d="M5 19a3 3 0 014 0" />
    <path strokeWidth="2" d="M14 5l5-2-2 5" />
  </svg>
);
const SparklesIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeWidth="2" d="M12 3l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4z" />
    <path strokeWidth="2" d="M19 14l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" />
  </svg>
);
const ScaleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeWidth="2" d="M12 3v18M3 7h18" />
    <path strokeWidth="2" d="M5 7l-3 6a5 5 0 0010 0L9 7M19 7l-3 6a5 5 0 0010 0l-3-6" />
  </svg>
);

// “Píldora” simple para el stack
const Pill = ({ label }: { label: string }) => (
  <div className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl space-y-4">
    <div className="w-16 h-16 rounded-full border flex items-center justify-center text-sm font-black">
      {label[0]}
    </div>
    <span className="font-semibold text-gray-700">{label}</span>
  </div>
);

// ---- Meta titulos/descr para el hero ----
const META: Record<string, { title: string; description: string }> = {
  'ai-microapps': {
    title: 'AI MicroApps & AI Builds',
    description: 'Lightweight AI-powered apps to digitalize processes, dashboards and documents in 7–14 days.',
  },
  'google-workspace-admin': {
    title: 'Google Workspace Admin',
    description: 'Information Ops-as-a-Service to organize, secure and maintain your company data.',
  },
  'real-time-ai-avatars': {
    title: 'Real-Time Digital Avatars',
    description: 'AI avatars with voice and video for onboarding, training and 24/7 support.',
  },
  'ai-agents': {
    title: 'AI Agents & Automations',
    description: 'Autonomous agents to orchestrate workflows, decisions and reporting.',
  },
  'ai-marketing-factory': {
    title: 'AI-Powered Marketing Factory',
    description: 'AI + low-code marketing system to create, publish and measure content fast.',
  },
  'custom-copilots-and-assistants': {
    title: 'Custom Copilots & Assistants',
    description: 'Tailored copilots embedded in your tools for sales, HR or operations.',
  },
};

// ---- Contenido por servicio (mismo layout) ----
const CONTENT_MAP: Record<string, Content> = {
  'google-workspace-admin': {
    heroDescription: META['google-workspace-admin'].description,
    overviewTitle: 'What is Google Workspace Admin?',
    overviewParagraphs: [
      'A managed “Information Ops-as-a-Service” that keeps your Workspace organized, auditable and efficient.',
      'We standardize folder structures, fix permissions and automate maintenance tasks like onboarding, archiving and reporting — saving ≥ 30 % of coordination time.',
    ],
    deliverables: [
      'Workspace audit + prioritized report',
      'Folder structure & naming conventions',
      'Permission cleanup & governance policies',
      'Automated onboarding / archival flows',
      'Training sessions + quick-use playbook',
    ],
    tools: ['Google Workspace', 'Apps Script', 'n8n / Zapier', 'Notion / Confluence'],
    metrics: [
      { icon: 'rocket', title: 'Setup in 7–14 days', description: 'Audit + initial fixes live within two weeks.' },
      { icon: 'sparkles', title: '≥ 30 % time saved', description: 'Less time wasted searching and coordinating files.' },
      { icon: 'scale', title: 'Governance-ready', description: 'Clear policies, logs and audit trails.' },
    ],
    cta: {
      title: 'Ready to organize your Workspace?',
      text: 'Book a short discovery call — we’ll show measurable quick wins.',
      primary: 'Book a Discovery Call',
      secondary: 'See Case Studies',
    },
  },

  'ai-microapps': {
    heroDescription: META['ai-microapps'].description,
    overviewTitle: 'What are AI MicroApps & AI Builds?',
    overviewParagraphs: [
      'Small, purpose-built apps that automate repetitive work, generate reports or sync data across tools.',
      'Built with AI and low-code platforms, they deliver functional MVPs in 7–14 days — no heavy IT projects required.',
    ],
    deliverables: [
      'Custom UI / UX & logic generated by AI',
      'Workflow automation + API integration',
      'Dashboard or document automation',
      'Playbook + video demo',
      '2 training sessions + support period',
    ],
    tools: ['Google AI Studio Builds', 'Google Opal', 'n8n', 'Zapier', 'OpenAI / Gemini'],
    metrics: [
      { icon: 'rocket', title: 'MVP in ≤ 14 days', description: 'From idea to live app in two weeks.' },
      { icon: 'sparkles', title: '≥ 30 % manual work reduced', description: 'Automated data and document flows.' },
      { icon: 'scale', title: 'Scalable & maintainable', description: 'Low-code foundations ready to grow.' },
    ],
    cta: {
      title: 'Launch your MicroApp Sprint',
      text: 'Let’s design a 7-day build that saves your team hours every week.',
      primary: 'Start a Sprint',
      secondary: 'View Examples',
    },
  },

  'ai-marketing-factory': {
    heroDescription: META['ai-marketing-factory'].description,
    overviewTitle: 'What is the AI-Powered Marketing Factory?',
    overviewParagraphs: [
      'A full content system that generates, publishes and measures campaigns using AI + low-code automation.',
      'From prompts to posts to reports, everything runs on autopilot — saving ≥ 30 % of coordination time.',
    ],
    deliverables: [
      'Initial AI content bank (5–12 pieces)',
      'Automated publishing workflows (n8n / Zapier / Make)',
      'Brand tokens & prompt templates',
      'Dashboard for metrics and versioning',
      '2–3 training sessions + manual',
    ],
    tools: ['ComfyUI', 'Sora', 'Veo3', 'Adobe Firefly', 'Nano Banana', 'Flux', 'Google Workspace'],
    metrics: [
      { icon: 'rocket', title: 'Live in ≤ 7 days', description: 'Factory ready and publishing within a week.' },
      { icon: 'sparkles', title: '≥ 30 % time saved', description: 'Fewer manual uploads and approvals.' },
      { icon: 'scale', title: 'Consistent tone & compliance', description: 'Central governance for assets and rights.' },
    ],
    cta: {
      title: 'Build Your Marketing Factory',
      text: 'Automate content creation and publishing — fast and GDPR-compliant.',
      primary: 'Book a Discovery Call',
      secondary: 'See Case Studies',
    },
  },

  'real-time-ai-avatars': {
    heroDescription: META['real-time-ai-avatars'].description,
    overviewTitle: 'What are Real-Time Digital Avatars?',
    overviewParagraphs: [
      'Interactive AI avatars with voice, video and chat for onboarding, support and training.',
      'They speak, listen and guide users in real time — reducing manual training time by ≥ 30 %.',
    ],
    deliverables: [
      'Personalized avatars with scripts and tone',
      'Real-time FAQ and voice integration',
      'Knowledge connectors (LLM + internal KB)',
      'Testing & guardrails + handover docs',
      'GDPR consent and privacy setup',
    ],
    tools: ['HeyGen', 'D-ID', 'ElevenLabs', 'OpenAI', 'Gemini', 'n8n'],
    metrics: [
      { icon: 'rocket', title: 'Go live in 7–14 days', description: 'First avatar demo delivered fast.' },
      { icon: 'sparkles', title: '≥ 80 % automated interactions', description: '24 / 7 support and training.' },
      { icon: 'scale', title: 'GDPR by design', description: 'Voice & image consent managed securely.' },
    ],
    cta: {
      title: 'Activate Your Digital Avatar',
      text: 'Bring your brand to life with interactive AI personas.',
      primary: 'Request a Demo',
      secondary: 'See Examples',
    },
  },

  'ai-agents': {
    heroDescription: META['ai-agents'].description,
    overviewTitle: 'What are AI Agents?',
    overviewParagraphs: [
      'Autonomous AI systems that handle multi-step processes, monitor workflows and take action across tools.',
      'Ideal for operations, data ops and back-office tasks needing speed and traceability.',
    ],
    deliverables: [
      'Process mapping and logic design',
      'Tool integrations (n8n / Zapier / APIs)',
      'Agent policies & guardrails',
      'Runbook + training materials',
    ],
    tools: ['n8n', 'Zapier', 'LLM APIs', 'DB / API connectors'],
    metrics: [
      { icon: 'rocket', title: 'Pilot in 7–14 days', description: 'Functional agent running within two weeks.' },
      { icon: 'sparkles', title: 'Fewer hand-offs', description: 'Agents coordinate routine steps autonomously.' },
      { icon: 'scale', title: 'Governed and auditable', description: 'Logs, alerts and fallback paths built-in.' },
    ],
    cta: {
      title: 'Ready for an Agent Pilot?',
      text: 'We’ll map and deploy an agent for your workflow.',
      primary: 'Book a Discovery Call',
      secondary: 'See Case Studies',
    },
  },

  'custom-copilots-and-assistants': {
    heroDescription: META['custom-copilots-and-assistants'].description,
    overviewTitle: 'What are Custom Copilots & Assistants?',
    overviewParagraphs: [
      'AI copilots embedded directly into your daily tools (Gmail, Notion, Sheets, CRMs).',
      'They learn from your data with guardrails and handoff logic for safe, auditable usage.',
    ],
    deliverables: [
      'Use-case mapping and prompt base',
      'Integration within your tools and channels',
      'Knowledge grounding and policies',
      'Training manual and support sessions',
    ],
    tools: ['OpenAI', 'Gemini', 'n8n', 'Google Workspace', 'Docs / Drive'],
    metrics: [
      { icon: 'rocket', title: 'Fast pilot', description: 'Prototype ready in days with real data.' },
      { icon: 'sparkles', title: 'On-tool assistance', description: 'Help where your team already works.' },
      { icon: 'scale', title: 'Compliant by design', description: 'Access controls and logs for GDPR safety.' },
    ],
    cta: {
      title: 'Spin Up Your Copilot',
      text: 'Let’s prototype a domain assistant in your own stack.',
      primary: 'Book a Discovery Call',
      secondary: 'See Case Studies',
    },
  },
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ---- Aux: icono de métricas ----
const MetricIcon = ({ name }: { name: Metric['icon'] }) => {
  const cls = 'w-12 h-12 text-purple-500';
  if (name === 'rocket') return <RocketLaunchIcon className={cls} />;
  if (name === 'sparkles') return <SparklesIcon className={cls} />;
  return <ScaleIcon className={cls} />;
};

/* -----------------------
   howItWorksData (used by unified Timeline component)
   ----------------------- */
const howItWorksData = [
  { title: 'Identify Goals', subtitle: 'Define objectives, KPIs, and the core problem to solve.', period: '1' },
  { title: 'Analyze & Design', subtitle: 'Audit current workflows and design the solution logic/UI.', period: '2' },
  { title: 'Develop & Test', subtitle: 'Build in a controlled environment and conduct user testing.', period: '3' },
  { title: 'Implement & Improve', subtitle: 'Deploy, train, and iterate with feedback.', period: '4' },
];

const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();

  // ✅ Guard: si el slug no existe en META, redirige al listado de servicios
  if (!slug || !(slug in META)) {
    return <Navigate to="/services" replace />;
  }

  // --- ORDEN Y NAVEGACIÓN PREV/NEXT (añadido) ---
  const ORDER: (keyof typeof META)[] = [
    'google-workspace-admin',
    'ai-microapps',
    'ai-marketing-factory',
    'real-time-ai-avatars',
    'custom-copilots-and-assistants',
    'ai-agents',
  ];
  const current = slug as keyof typeof META;
  const idx = ORDER.indexOf(current);
  const prevSlug = idx > 0 ? ORDER[idx - 1] : null;
  const nextSlug = idx >= 0 && idx < ORDER.length - 1 ? ORDER[idx + 1] : null;
  // --- fin añadido ---

  const key = slug && META[slug] ? slug : 'ai-microapps'; // fallback visible
  const { title, description } = META[key];
  const content = CONTENT_MAP[key]; // <-- CORRECTO (sin paréntesis)

  // refs + state for sticky-bottom nav showing/hiding based on CTA position
  const navRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
  const [navHidden, setNavHidden] = useState(false);

  useEffect(() => {
    const handle = () => {
      if (!navRef.current || !contactRef.current) return;
      const navRect = navRef.current.getBoundingClientRect();
      const contactRect = contactRef.current.getBoundingClientRect();

      const navHeight = navRect.height || 0;
      const margin = 12; // pequeño margen antes del CTA
      // Si la parte superior del CTA entra en el área que la barra ocuparía -> ocultar la barra
      if (contactRect.top <= window.innerHeight - navHeight - margin) {
        setNavHidden(true);
      } else {
        setNavHidden(false);
      }
    };

    // run on load
    handle();

    window.addEventListener('scroll', handle, { passive: true });
    window.addEventListener('resize', handle);
    return () => {
      window.removeEventListener('scroll', handle);
      window.removeEventListener('resize', handle);
    };
  }, []);

  return (
    <div className="bg-white">
      {/* Fixed centered bottom nav */}
      <div aria-hidden={navHidden} role="navigation" aria-label="Navegación entre servicios">
        <div
          ref={navRef}
          /* Centrado fijo bottom, width auto (ajusta al contenido) */
          className={`fixed left-1/2 transform -translate-x-1/2 z-50 mb-3 ${navHidden ? 'opacity-0 pointer-events-none translate-y-4' : 'opacity-100 translate-y-0'} transition-all duration-200`}
          style={{ bottom: 'env(safe-area-inset-bottom,16px)' }} /* safe-area para iOS, fallback 16px */
        >
          <nav
            className="inline-flex items-center gap-6 bg-white/100 backdrop-blur-xs px-6 py-[14px] rounded-[4px] border border-gray-100"
            /* Para ocultar en móviles: añadir 'hidden sm:inline-flex' aquí si quieres */
          >
            {/* Previous */}
            {prevSlug ? (
              <Link
                to={`/services/${prevSlug}`}
                aria-label="Ir al servicio anterior"
                className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
              >
                <span aria-hidden="true">←</span>
                <span className="whitespace-nowrap">Previous</span>
              </Link>
            ) : (
              <span className="text-gray-300 select-none">← Previous</span>
            )}

            {/* Back to services */}
            <Link
              to="/services"
              aria-label="Volver al listado de servicios"
              className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
            >
              <span className="whitespace-nowrap">Back to services</span>
            </Link>

            {/* Next */}
            {nextSlug ? (
              <Link
                to={`/services/${nextSlug}`}
                aria-label="Ir al siguiente servicio"
                className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
              >
                <span className="whitespace-nowrap">Next</span>
                <span aria-hidden="true">→</span>
              </Link>
            ) : (
              <span className="text-gray-300 select-none">Next →</span>
            )}
          </nav>
        </div>
      </div>

      {/* 1. Hero Section */}
      <section className="bg-black py-24 sm:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-transparent bg-clip-text">
              {title}
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            {content.heroDescription || description}
          </p>
        </div>
      </section>

      {/* 2. Overview */}
      <section className="py-24">
        <div className="container px-6 text-center max-w-2xl mx-auto items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-black tracking-tight">{content.overviewTitle}</h2>
            {content.overviewParagraphs.map((p) => (
              <p key={p} className="text-gray-600 leading-slug pt-1">{p}</p>
            ))}
          </div>
          {/* <div>
            <img
              src="https://placehold.co/600x450/f3f4f6/111827?text=Service+Showcase"
              alt={`${title} showcase`}
              className="rounded-[4px] w-full"
            />
          </div> */}
        </div>
      </section>

      {/* 3. Deliverables */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">What You Get</h2>
            <p className="mt-4 text-gray-600 text-lg">A complete, ready-to-use solution that empowers your team from day one.</p>
          </div>
          <ul className="mt-16 grid md:grid-cols-2 lg:grid-cols-2 gap-4 text-lg max-w-lg mx-auto">
            {content.deliverables.map((item) => (
              <li key={item} className="flex items-start space-x-3 font-bold">
                <CheckCircleIcon className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Process */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">How It Works</h2>
            <p className="mt-4 text-gray-600 text-lg">
              A collaborative process to ensure we build exactly what you need.
            </p>
          </div>

          {/* WRAPPER centrado del timeline: ahora usamos el componente Timeline unificado */}
          <div className="flex flex-col md:flex-row flex justify-center">
            <Timeline items={howItWorksData} />
          </div>
        </div>
      </section>

      {/* 6. Metrics */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Results You Can Expect</h2>
            <p className="mt-4 text-gray-600 text-lg">Tangible outcomes that translate into real business value.</p>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.metrics.map((m) => (
            <div key={m.title} className="p-8 bg-gray-100 rounded-[4px] space-y-2">
              {/* <MetricIcon name={m.icon} /> */}
              <h3 className="text-xl font-bold">{m.title}</h3>
              <p className="text-gray-600 mt-1">{m.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CTA 2 (this is the "Ready to launch" section) */}
      <section ref={contactRef} className="bg-black text-white py-24">
        <div className="bg-black text-white text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">{content.cta.title}</h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">{content.cta.text}</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              className="
                inline-flex items-center justify-center
                group
                bg-white text-black
                px-6 py-3 rounded-[4px] font-semibold
                border border transparent shadow-sm
                transition-colors duration-100 ease-in-out
                hover:bg-gray-500 hover:text-white
                focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black
              "
              href="mailto:hello@federicomosqueira.site"
            >
              <span>{content.cta.primary}</span>
              <ArrowRightIcon
                className="w-4 h-4 ml-2 transition-transform duration-150 transform motion-safe:group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;

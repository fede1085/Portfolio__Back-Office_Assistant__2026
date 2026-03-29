/// <reference types="vite/client" />
import React from 'react';

import Privacy from './pages/Privacy';


import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
  useLocation,
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/main-services/ServicesPage';
import ServiceDetailPage from './pages/main-services/ServiceDetailPage';

// IMPORTA el mini-app del CV que movimos a /resume
import ResumeApp from './resume/App';

// Mapa de servicios (igual que tenías)
export const SERVICE_MAP = {
  'ai-agents': { title: 'AI Agents', description: 'Autonomous agents to automate recurring workflows.' },
  'ai-marketing-factory': { title: 'AI Marketing Factory', description: 'AI-powered content & campaign automation.' },
  'ai-microapps': { title: 'AI MicroApps', description: 'Plug-and-play micro-apps for internal workflows.' },
  'custom-copilots-and-assistants': { title: 'Custom Copilots & Assistants', description: 'Domain-specific copilots integrated into your tools.' },
  'google-workspace-admin': { title: 'Google Workspace Admin', description: 'Workspace setup, governance and productivity ops.' },
  'real-time-ai-avatars': { title: 'Real-Time AI Avatars', description: 'Interactive avatars for customer-facing experiences.' },
} as const;
export type ServiceSlug = keyof typeof SERVICE_MAP;

const ServiceLoader: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug || !SERVICE_MAP[slug]) return <Navigate to="/services" replace />;
  const meta = SERVICE_MAP[slug];
  return <ServiceDetailPage serviceName={meta.title} description={meta.description} />;
};

// Shell con “chrome” condicional (oculta Header/Footer en /resume)
const Shell: React.FC = () => {
  const { pathname } = useLocation();
  const hideChrome = pathname.startsWith('/resume'); // <- clave

  return (
    <div className="bg-white">
      {!hideChrome && <Header />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceLoader />} />

        {/* CV embebido; permite subrutas del CV si las tuviera */}
        <Route path="/resume/*" element={<ResumeApp />} />

        <Route path="/privacy" element={<Privacy />} />

        {/* compatibilidad vieja */}
        <Route path="/services/:id" element={<Navigate to="/services" replace />} />
        {/* 404 -> Home */}
        <Route path="*" element={<HomePage />} />
      </Routes>
      {!hideChrome && <Footer />}
    </div>
  );
};

const App: React.FC = () => (
  <BrowserRouter>
    <Shell />
  </BrowserRouter>
);

export default App;

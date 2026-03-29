import React from 'react';
import { ServiceIcon1, ServiceIcon2, ServiceIcon3 } from './icons/ServiceIcons';

interface ServiceItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    points: string[];
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, title, description, points }) => (
    <div className="space-y-4">
        <div className="w-12 h-12">{icon}</div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-gray-600 text-md">{description}</p>
        <ul className="space-y-2">
            {points.map((point, index) => (
                <li key={index} className="flex items-center font-bold">
                    <span className="text-purple-500 mr-2">•</span>
                    {point}
                </li>
            ))}
        </ul>
    </div>
);


const Services: React.FC = () => {
  const servicesData = [
    // {
    //   icon: <ServiceIcon1 />,
    //   title: 'AI & Automation Discovery Audit',
    //   description: 'Half-day diagnostic to map manual work, prioritise quick wins, and scope ROI in 90 days.',
    //   points: ['Process mapping workshop', 'Quick-win scorecard and prioritised backlog', 'Roadmap for the first 90 days'],
    // },
    {
      icon: <ServiceIcon1 />,
      title: 'Prototype Sprint (7-14 days)',
      description: 'Build a working automation or micro-app in two weeks, ready for stakeholder demos.',
      points: ['Wireframes in Stitch or Figma', 'Operational MVPs and Workflows', 'ROI >3×, 30% less manual work'],
    },
    // {
    //   icon: <ServiceIcon3 />,
    //   title: 'Custom Copilots & AI Assistants',
    //   description: 'Tailored copilots for sales, HR, or support teams with reusable prompt libraries and memory.',
    //   points: ['Reusable prompt base', 'Copilot orchestrated in n8n or Manus AI', 'User onboarding playbook'],
    // },
    // {
    //   icon: <ServiceIcon1 />,
    //   title: 'AI Agents for Operations',
    //   description: 'Autonomous agents to monitor data, trigger workflows, and escalate exceptions.',
    //   points: ['Agent design and configuration', 'Integration with existing workflows', 'Monitoring and optimisation guide'],
    // },
    // {
    //   icon: <ServiceIcon2 />,
    //   title: '360 Integration (Google + Hybrid)',
    //   description: 'Connect Google Workspace and mixed environments with CRMs, ERPs, and dashboards without heavy IT projects.',
    //   points: ['Flows in AppSheet, n8n, or Make', 'CRM and ERP data sync', 'Executive metrics dashboard'],
    // },
    {
      icon: <ServiceIcon3 />,
      title: 'Citizen-Developer Training',
      description: 'Hands-on training so non-technical teams can maintain and extend automations.',
      points: ['Live workshops + Tutorials + Playbook', 'Step-by-step manuals and templates', '30-day support channel for adoption'],
    },
    //  {
    //   icon: <ServiceIcon1 />,
    //   title: 'Compliance & Governance Light',
    //   description: 'Ensure every automation is GDPR aligned and audit ready from day one.',
    //   points: ['GDPR checklist and risk log', 'Audit-ready workflow documentation', 'AI ethics awareness session'],
    // },
    // {
    //   icon: <ServiceIcon2 />,
    //   title: 'AI-Ops Retainer',
    //   description: 'Continuous improvement program to monitor KPIs, capture new automation value, and scale adoption.',
    //   points: ['Monthly KPI reviews and adjustments', 'New integrations prioritised by ROI', 'Value capture report for stakeholders'],
    // },
    {
      icon: <ServiceIcon2 />,
      title: 'Sector Packs Ready-to-Run',
      description: 'Prebuilt packs for small/medium businesses, focused on back-office and daily workflows.',
      points: ['Plug-and-play Flows and Microapps', '≥30% time savings', 'Quick training for fast team adoption'],
    }
    //  {
    //   icon: <ServiceIcon1 />,
    //   title: 'Innovation Studio',
    //   description: 'Flagship experiments such as real-time digital avatars, AI content factory, and AI microapps.',
    //   points: ['Concept lab scoped to business goals', 'Prototype assets for testing', 'Handover plan for scale-up'],
    // },
  ];

  return (
    <section className="bg-white py-24 pb-36">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-sm font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-transparent bg-clip-text">WHAT MAKES THE DIFFERENCE</p>
          <h2 className="text-4xl md:text-5xl font-black mt-2 tracking-tight">AI and Automation</h2>
          <h2 className="text-4xl md:text-5xl font-black mt-2 tracking-tight">Ready to Run for Your Team.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {servicesData.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


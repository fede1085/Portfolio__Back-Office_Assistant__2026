import React, { useState } from 'react';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-6 border-b border-gray-800">
      <button
        className="w-full flex justify-between items-center text-left hover:text-gray-400 text-white transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-md font-medium">{question}</span>
        <ChevronDownIcon className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="mt-4 text-sm text-gray-400">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const Faq: React.FC = () => {
  const faqData = [
    {
      question: 'How quickly can we see results if we start today?',
      answer: 'I usually deliver a functional MVP in 7–14 days, ready for your team to use in practice. It includes a demo, playbook, and training so that the value is visible within the first month.'
    },
    {
      question: 'What concrete benefits do Belgian SMEs gain',
      answer: 'Logistics: real-time dashboards and reporting. Energy: lighter, auditable compliance processes. Public sector: digital onboarding with 24/7 avatars. All cases achieve ≥30% less manual work and GDPR-by-design compliance.'
    },
    {
      question: 'Do we need an internal technical team to maintain these solutions?',
      answer: 'No. Everything is built with low-code tools and comes with training so administrative or marketing staff can run it. I also provide citizen-developer training packs to ensure autonomy.'
    },
    {
      question: 'How do you guarantee that our data stays secure and compliant?',
      answer: 'Each flow and microapp is built on privacy by design principles. They include permission audits, GDPR checklists, and ready-to-inspect documentation—critical in Belgium’s strict regulatory context.'
    },
    {
      question: 'What is your pricing model and how does it fit a Belgian SME?',
      answer: 'I work with three levels: one-off audits, MVP sprints, and monthly AI-Ops retainers. This way, any company—from a 10-person SME to a 50-person agency—can start with an accessible ticket and scale risk-free.'
    },
    {
      question: 'What makes your approach different from traditional agencies?',
      answer: 'Delivery in days, not months; plug & play solutions in Google/Microsoft environments; real last-mile adoption (solutions actually used); and clear documentation available in English, Spanish, or basic Dutch.'
    },
    {
      question: 'How is ROI measured in an AI automation project?',
      answer: 'Every delivery includes a KPI dashboard with metrics on time saved, error reduction, and better coordination. The benchmark is to document at least a 3× ROI compared to the monthly retainer cost.'
    },
    {
      question: 'Can we start with a small case before committing further?',
      answer: 'Yes, and I recommend it. Starting with a sector quick-win (e.g., logistics pack or content factory) allows validation in 1–2 weeks before deciding whether to scale into an AI-Ops retainer. It reduces risk and speeds up adoption.'
    },
  ];

  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-6">
        <p className="text-sm font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-transparent bg-clip-text">FAQ</p>
        <h2 className="text-5xl font-black tracking-tight">Answers to the <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-transparent bg-clip-text">most common</span> objections</h2>

        <div className="mt-20 grid md:grid-cols-2 gap-x-12 ">
          {faqData.map((faqItem, index) => (
            <FaqItem key={index} question={faqItem.question} answer={faqItem.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;

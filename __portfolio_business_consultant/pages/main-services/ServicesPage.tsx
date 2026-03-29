// pages/main-services/ServicesPage.tsx
import React from 'react';
import ServicesHero from '../../components/services/ServicesHero';
import ServiceList from '../../components/services/ServiceList';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-black">
      <ServicesHero />
      <ServiceList />
    </div>
  );
};

export default ServicesPage;

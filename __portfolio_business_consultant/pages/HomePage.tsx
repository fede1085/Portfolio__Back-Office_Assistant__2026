// pages/HomePage.tsx
import React from 'react';

import Hero from '../components/Hero';
// import TrustedBy from '../components/TrustedBy';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Blogs from '../components/Blogs';
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import Testimonials from '../components/Testimonials';
import Faq from '../components/Faq';

const HomePage: React.FC = () => {
  return (
    <main>
      {/* Hero / home */}
      <div id="home" aria-label="home-section">
        <Hero />
      </div>
      {/* Services */}
      <div id="services" aria-label="services-section">
        <Services />
      </div>

      {/* Blogs (services list) */}
      <div id="blogs" aria-label="blogs-section">
        <Blogs />
      </div>

      {/* Projects */}
      <div id="projects" aria-label="projects-section">
        <Projects />
      </div>

      {/* Methodology / Experience */}
      <div id="methodology" aria-label="methodology-section">
        <Experience />
      </div>

      {/* About */}
      <div id="about" aria-label="about-section">
        <AboutMe />
      </div>

      {/* Testimonials */}
      <div id="testimonials" aria-label="testimonials-section">
        <Testimonials />
      </div>

      {/* FAQs */}
      <div id="faqs" aria-label="faqs-section">
        <Faq />
      </div>

      <div id="contact" aria-label="contact-section">
        <contact />
      </div>
    </main>
  );
};

export default HomePage;

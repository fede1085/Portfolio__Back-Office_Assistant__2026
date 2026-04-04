import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
// import PersonalSkills from './components/Features';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';
import { resumeData } from './constants';
import SoftSkills from './components/SoftSkills';

// ✅ NUEVO IMPORT
import SkillAIProductivity from './components/SkillAIProductivity';

const App: React.FC = () => {
  return (
    <main>
      <Header name={resumeData.name} />

      <Hero
        name={resumeData.name}
        profile={resumeData.professional_profile}
        contactEmail={resumeData.contact.split(' | ')[0]}
      />

      <div className="max-w-6xl bg-white mx-auto px-4">
        <div className="max-w-3xl mx-auto px-4">

          <Services valueProposition={resumeData.value_proposition} />

          {/* <PersonalSkills skills={resumeData.personal_skills} /> */}

          <SoftSkills />

          {/* ✅ NUEVA SECCIÓN */}
          {/* <SkillAIProductivity /> */}

          <Skills toolStack={resumeData.tool_stack} />

          <Experience experience={resumeData.experience} />

        </div>
      </div>

      <Footer data={resumeData} />
    </main>
  );
};

export default App;
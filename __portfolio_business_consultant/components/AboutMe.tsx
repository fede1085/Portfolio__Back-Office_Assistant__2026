import React from 'react';

interface ExperienceItemProps {
  title: string;
  subtitle: string;
  period: string;
  icon: React.ReactNode;
}

const ExperienceListItem: React.FC<ExperienceItemProps> = ({ title, subtitle, period, icon }) => (
  <div className="flex justify-between items-start py-6 border-b border-gray-200">
    <div className="flex items-start space-x-4">
      <div className="w-3 flex items-start rounded-full bg-gray-100">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="text-gray-600 text-sm">{subtitle} - {period}</p>
      </div>
    </div>
    {/* <div className="flex items-start space-x-4">
      <p className="text-gray-500 text-sm">{period}</p>
    </div> */}
  </div>
);

const AboutMe: React.FC = () => {
  const experienceData = [
    { title: 'Independent Consultant - AI & Automation', subtitle: 'Antwerp, Belgium', period: '2023-2025' },
    { title: 'Previous consulting engagements', subtitle: 'SMEs and agencies across logistics, energy, and public sector', period: '2019-2023' },
    { title: 'Community builder', subtitle: 'Workshops on citizen developer skills', period: 'Ongoing' },
  ];

  return (
    <section className="bg-gray-100 py-24">
      <div className="container mx-auto px-6">
        {/* Single row with two columns: left = intro + experience, right = 3 stacked images */}
        <div className="grid md:grid-cols-7 gap-x-20 items-start">
          {/* LEFT column: intro + experience (stacked) */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <p className="text-sm font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-transparent bg-clip-text">
                Business Consultant | AI & Automation Strategy 
              </p>
              <h2 className="text-5xl font-black mt-2 tracking-tight">Meet <span>Federico Mosqueira</span></h2>
              <p className="text-gray-600 text-md mt-14">
                I partner with SMEs and back-office teams in Belgium to translate business goals into AI powered operations. 
                I am specialized in generative AI, automation, and low-code tools. 
                <br /><br />
                I act as a bridge between non-technical teams and practical solutions, 
                turning manual processes into workflows that reduce effort and boost productivity.
                <br /><br />
                My approach is simple: I don’t sell software, I deliver solutions — fast, tangible, and compliance-ready. 
                I simplify complexity, deliver MVPs in 7-14 days, and coach teams so adoption sticks.
              </p>
            </div>

            {/* Experience placed below the intro inside the same left column */}
            <div className="mt-20 md:mt-20">
              <h3 className="text-3xl font-black mb-4 flex items-center space-x-2 tracking-tight">
                <span>Experience</span>
              </h3>
              <div>
                {experienceData.map((item, index) => (
                  <ExperienceListItem
                    key={index}
                    {...item}
                    icon={<span className="text-2xl leading-none flex items-top">•</span>}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT column: three images stacked vertically (1/4 width) */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <div className="w-full">
              <img
                src="/me_office_1.png"
                alt="Workshop session placeholder"
                className="w-full h-96 object-cover rounded-[4px]"
              />
            </div>

            <div className="w-full">
              <img
                src="/me_office_2.png"
                alt="Automation flow mockup placeholder"
                className="w-full h-96 object-cover rounded-[4px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

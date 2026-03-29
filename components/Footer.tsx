import React from 'react';

interface FooterProps {
  data: {
    name: string;
    contact: string;
    address: string;
    languages: string[];
  };
}

const GradientText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="bg-[linear-gradient(90deg,#0078d4_0%,#17A4E8_50%,#5DE4FB_100%)] text-transparent bg-clip-text">
    {children}
  </span>
);

const Footer: React.FC<FooterProps> = ({ data }) => {
  const [email, phone] = data.contact.split(' | ');

  return (
    <footer id="contact" className="pb-12 sm:py-12 sm:pb-4 bg-white text-black">
      <div className="max-w-3xl mx-auto pb-18 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-6xl font-extrabold text-black sm:text-4xl mb-4">
            <GradientText>Looking for a reliable assistant to keep your operations organized?</GradientText>
          </h2>
          <h2 className="text-lg font-medium sm:text-lg text-gray-500">
           I organize documents, tasks and daily office work using Microsoft 365. — Let’s start the conversation.
          </h2>
          <a
            href={`mailto:${email}`}
            className="mt-8 inline-flex items-center justify-center px-8 py-3 border text-base font-medium rounded-[4px] text-white bg-black hover:bg-gray-200 hover:text-black transition-colors"
          >
            Get in touch
          </a>
        </div>

<div className="mt-16 border-t border-gray-200 pt-8 flex flex-col items-center text-center">
  <div>
    {/* <h3 className="text-lg font-bold text-gray-900">{data.name}</h3> */}
    <h4 className="text-sm font-semibold text-gray-900">Contact Info</h4>
    
    <div className="mt-2 text-gray-600 flex flex-col space-y-1 text-sm items-center">
      <a href={`mailto:${email}`} className="hover:text-gray-900">
        {email}
      </a>
      <p className="mt-2 text-sm text-gray-600">{data.address}</p>
      <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-gray-900">
        {phone}
      </a>
    </div>
  </div>
</div>


<div className="mt-8 border-t border-gray-200 py-8 flex items-center justify-center text-center">
  <p className="text-xs text-gray-600">
    &copy; {new Date().getFullYear()} {data.name}. All rights reserved.
  </p>
</div>

      </div>
    </footer>
  );
};

export default Footer;

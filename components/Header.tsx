import React from 'react';

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Skills', href: '#skills' },
    { name: 'Tools', href: '#tools' },
    { name: 'Background', href: '#experience' },
    { name: 'Hire me', href: '#contact' },
  ];

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-14">
          <div className="hidden md:block">
            <nav className="flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#333131] hover:text-gray-400 px-3 py-2 text-[15px] hover:underline hover:decoration-[#333131] hover:decoration-2 hover:underline-offset-[8px]"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

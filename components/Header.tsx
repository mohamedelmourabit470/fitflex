
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#servicios', text: 'Servicios' },
    { href: '#precios', text: 'Precios' },
    { href: '#testimonios', text: 'Testimonios' },
    { href: '#contacto', text: 'Contacto' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-indigo-600">
          FitFlex
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-600 hover:text-indigo-600 transition duration-300">
              {link.text}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-indigo-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="block text-center py-2 px-4 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition duration-300" onClick={() => setIsMenuOpen(false)}>
              {link.text}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;

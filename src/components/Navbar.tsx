import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollToSection } = useSmoothScroll();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Free AI Consultancy', href: '#free-consultancy' },
    { name: 'Services', href: '#services' },
    { name: 'Premium Plans', href: '#premium-plans' },
    { name: 'Expert Consultancy', href: '#expert-consultancy' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 h-full w-56 z-50 bg-black/20 backdrop-blur-md border-r border-purple-500/20 flex flex-col items-center py-8 hidden md:flex">
      {/* Logo */}
      <div className="flex flex-col items-center mb-12">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-2">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          StratxceI.AI
        </span>
      </div>
      {/* Navigation Links */}
      <div className="flex flex-col gap-2 w-full px-4">
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => scrollToSection(link.href)}
            className="text-gray-300 hover:text-white px-4 py-2 text-base font-medium transition-colors duration-200 hover:bg-purple-500/10 rounded-md cursor-pointer text-left w-full"
          >
            {link.name}
          </button>
        ))}
      </div>
      {/* CTA Buttons */}
      <div className="flex flex-col items-center gap-2 mt-auto w-full px-4 pb-8">
        <button className="text-purple-300 hover:text-white px-4 py-2 text-base font-medium transition-colors duration-200 w-full text-left">
          Sign In
        </button>
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-base font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 w-full text-left">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
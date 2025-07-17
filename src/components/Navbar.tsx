import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollToSection } = useSmoothScroll();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', href: '/', isHome: true },
    { name: 'Accelerate', href: '/free-ai-consultancy', isFreeAI: true },
    { name: 'Services', href: '/services', isServices: true },
    { name: 'Premium Plans', href: '/premium-plans', isPremium: true },
    { name: 'Expert Consultancy', href: '/expert-consultancy', isExpert: true },
    { name: 'About', href: '/about', isAbout: true },
    { name: 'Contact', href: '/contact', isContact: true },
  ];

  const handleClick = (href: string, isContact?: boolean, isHome?: boolean, isAbout?: boolean, isFreeAI?: boolean, isPremium?: boolean, isExpert?: boolean, isServices?: boolean) => {
    if (isHome) {
      navigate('/');
    } else if (isContact) {
      navigate('/contact');
    } else if (isAbout) {
      navigate('/about');
    } else if (isFreeAI) {
      navigate('/free-ai-consultancy');
    } else if (isPremium) {
      navigate('/premium-plans');
    } else if (isExpert) {
      navigate('/expert-consultancy');
    } else if (isServices) {
      navigate('/services');
    } else {
      scrollToSection(href);
    }
    setIsMenuOpen(false); // close menu on link click
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 h-full w-56 z-50 bg-black/20 backdrop-blur-md border-r border-purple-500/20 hidden md:flex flex-col items-center py-8">
        {/* Logo */}
        <div className="flex flex-col items-center mb-12">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-2">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            StratxceL
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2 w-full px-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleClick(link.href, link.isContact, link.isHome, link.isAbout, link.isFreeAI, link.isPremium, link.isExpert, link.isServices)}
              className="text-gray-300 hover:text-white px-4 py-2 text-sm lg:text-base font-medium transition-colors duration-200 hover:bg-purple-500/10 rounded-md text-left w-full"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-2 mt-auto w-full px-4 pb-8">
          <button className="text-purple-300 hover:text-white px-4 py-2 text-sm lg:text-base font-medium w-full text-left">
            Sign In
          </button>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm lg:text-base font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 w-full text-left">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden bg-black/40 backdrop-blur-md border-b border-purple-500/20 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            StratxceL
          </span>
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-purple-300">
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-14 left-0 right-0 bg-black/90 backdrop-blur-md border-t border-purple-500/10 z-40 px-4 py-6 flex flex-col items-start space-y-4 md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleClick(link.href, link.isContact, link.isHome, link.isAbout, link.isFreeAI, link.isPremium, link.isExpert, link.isServices)}
              className="text-gray-300 hover:text-white text-base font-medium transition-all duration-200 w-full text-left"
            >
              {link.name}
            </button>
          ))}
          <div className="mt-4 w-full flex flex-col gap-2">
            <button className="text-purple-300 hover:text-white px-4 py-2 text-sm font-medium w-full text-left">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 w-full text-left">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

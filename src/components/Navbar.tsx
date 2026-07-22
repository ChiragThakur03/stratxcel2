import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollToSection } = useSmoothScroll();
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/', isHome: true },
    { name: 'Accelerate', href: '/free-ai-consultancy', isFreeAI: true },
    { name: 'Services', href: '/services', isServices: true },
    { name: 'Premium Plans', href: '/premium-plans', isPremium: true },
    { name: 'Expert Consultancy', href: '/expert-consultancy', isExpert: true },
    { name: 'About', href: '/about', isAbout: true },
    { name: 'Contact', href: '/contact', isContact: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (
    href: string,
    isContact?: boolean,
    isHome?: boolean,
    isAbout?: boolean,
    isFreeAI?: boolean,
    isPremium?: boolean,
    isExpert?: boolean,
    isServices?: boolean
  ) => {
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
    setIsMenuOpen(false);
  };

  const isLinkActive = (link: typeof navLinks[0]) => {
    if (link.isHome) {
      return location.pathname === '/';
    }
    return location.pathname === link.href;
  };

  return (
    <>
      {/* Top Floating Centered Glass Navbar Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 flex justify-center`}
      >
        <nav 
          className={`w-full max-w-6xl flex items-center justify-between px-6 py-3.5 rounded-2xl border transition-all duration-500 ${
            scrolled 
              ? 'bg-[#06080F]/70 backdrop-blur-xl border-white/[0.08] shadow-[0_15px_30px_rgba(0,0,0,0.5)]' 
              : 'bg-white/[0.02] border-white/5 backdrop-blur-sm'
          }`}
        >
          {/* Logo & Brand */}
          <div 
            className="flex items-center space-x-2.5 cursor-pointer group" 
            onClick={() => navigate('/')}
          >
            <div className="relative w-9 h-9 bg-[#0d0e1f] border border-white/10 rounded-xl flex items-center justify-center shadow-lg group-hover:border-purple-500/30 transition-colors">
              <Sparkles className="w-4.5 h-4.5 text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-white">
              Strat<span className="text-purple-400">X</span>cel
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const active = isLinkActive(link);
              return (
                <button
                  key={link.name}
                  onClick={() =>
                    handleClick(
                      link.href,
                      link.isContact,
                      link.isHome,
                      link.isAbout,
                      link.isFreeAI,
                      link.isPremium,
                      link.isExpert,
                      link.isServices
                    )
                  }
                  className={`relative px-3.5 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors duration-200 ${
                    active ? 'text-purple-300' : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="topNavActivePill"
                      className="absolute inset-0 bg-white/[0.03] border border-white/[0.08] rounded-lg shadow-inner z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </button>
              );
            })}
          </div>

          {/* Desktop Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-gray-400 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors">
              Sign In
            </button>
            <button className="px-5 py-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 active:scale-95">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Action Burger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-purple-400 p-1.5 hover:bg-white/5 rounded-xl transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
          </button>
        </nav>
      </header>

      {/* Mobile Sidebar Navigation Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-6 right-6 bg-[#06080F]/95 backdrop-blur-2xl border border-white/[0.08] rounded-2xl z-50 p-6 flex flex-col space-y-4 lg:hidden shadow-2xl"
          >
            {navLinks.map((link) => {
              const active = isLinkActive(link);
              return (
                <button
                  key={link.name}
                  onClick={() =>
                    handleClick(
                      link.href,
                      link.isContact,
                      link.isHome,
                      link.isAbout,
                      link.isFreeAI,
                      link.isPremium,
                      link.isExpert,
                      link.isServices
                    )
                  }
                  className={`text-sm font-bold uppercase tracking-wider py-2 w-full text-left transition-colors ${
                    active ? 'text-purple-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
            <div className="h-px bg-white/10 my-2" />
            <div className="flex flex-col gap-3">
              <button className="text-gray-300 hover:text-white py-2 text-sm font-bold uppercase tracking-wider w-full text-left">
                Sign In
              </button>
              <button className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white py-3 rounded-xl text-sm font-bold uppercase tracking-wider shadow-lg hover:shadow-purple-500/20 active:scale-95 transition-all">
                Sign Up
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

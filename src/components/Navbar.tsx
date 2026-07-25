import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [authModal, setAuthModal] = useState<'signin' | 'signup' | null>(null);
  const [authSuccess, setAuthSuccess] = useState(false);
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

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthSuccess(true);
    setTimeout(() => {
      setAuthSuccess(false);
      setAuthModal(null);
    }, 2000);
  };

  return (
    <>
      {/* Floating Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-center">
        <nav 
          className={`w-full max-w-6xl flex items-center justify-between px-6 py-3.5 rounded-2xl border transition-all duration-500 ${
            scrolled 
              ? 'bg-[#04344C]/90 backdrop-blur-xl border-[#B0EDF9]/30 shadow-[0_15px_30px_rgba(0,0,0,0.5)]' 
              : 'bg-[#04344C]/60 border-[#B0EDF9]/20 backdrop-blur-md'
          }`}
        >
          {/* Logo & Brand */}
          <div 
            className="flex items-center space-x-2.5 cursor-pointer group" 
            onClick={() => navigate('/')}
          >
            <div className="relative w-9 h-9 bg-[#021C2A] border border-[#B0EDF9]/30 rounded-xl flex items-center justify-center shadow-lg group-hover:border-[#B0EDF9] transition-colors">
              <Sparkles className="w-4.5 h-4.5 text-[#B0EDF9] group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-white">
              Strat<span className="text-[#B0EDF9]">xce</span>L
            </span>
          </div>

          {/* Desktop Links */}
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
                    active ? 'text-[#B0EDF9]' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="topNavActivePill"
                      className="absolute inset-0 bg-[#021C2A]/60 border border-[#B0EDF9]/30 rounded-lg shadow-inner z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </button>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={() => setAuthModal('signin')}
              className="text-slate-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Sign In
            </button>
            <button 
              onClick={() => setAuthModal('signup')}
              className="px-5 py-2.5 bg-[#B0EDF9] hover:bg-white text-[#04344C] font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow-md active:scale-95"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[#B0EDF9] p-1.5 hover:bg-[#021C2A] rounded-xl transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-6 right-6 bg-[#04344C] backdrop-blur-2xl border border-[#B0EDF9]/30 rounded-2xl z-50 p-6 flex flex-col space-y-4 lg:hidden shadow-2xl"
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
                  className={`text-xs font-bold uppercase tracking-wider py-2 w-full text-left transition-colors ${
                    active ? 'text-[#B0EDF9]' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
            <div className="h-px bg-[#B0EDF9]/20 my-2" />
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => { setIsMenuOpen(false); setAuthModal('signin'); }}
                className="text-slate-300 hover:text-white py-2 text-xs font-bold uppercase tracking-wider w-full text-left"
              >
                Sign In
              </button>
              <button 
                onClick={() => { setIsMenuOpen(false); setAuthModal('signup'); }}
                className="w-full bg-[#B0EDF9] text-[#04344C] py-3 rounded-xl text-xs font-bold uppercase tracking-wider active:scale-95 transition-all"
              >
                Sign Up
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Auth Modal */}
      <AnimatePresence>
        {authModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setAuthModal(null)}
              className="absolute inset-0 bg-[#021C2A]/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="relative w-full max-w-md bg-[#04344C] border border-[#B0EDF9]/40 rounded-3xl p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] z-10"
            >
              <button
                onClick={() => setAuthModal(null)}
                className="absolute top-6 right-6 text-slate-300 hover:text-white p-1 rounded-lg transition-colors"
                aria-label="Close authentication modal"
              >
                <X className="w-5 h-5 text-[#B0EDF9]" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#021C2A] border border-[#B0EDF9]/30 rounded-xl flex items-center justify-center">
                  <Lock className="w-5 h-5 text-[#B0EDF9]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {authModal === 'signin' ? 'Executive Portal Access' : 'Create Strategy Account'}
                  </h3>
                  <p className="text-xs text-[#B0EDF9] font-medium">
                    {authModal === 'signin' ? 'Enter your credentials to continue' : 'Join 50,000+ business leaders'}
                  </p>
                </div>
              </div>

              {authSuccess ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <CheckCircle2 className="w-12 h-12 text-[#B0EDF9] mb-3 animate-pulse" />
                  <h4 className="text-lg font-bold text-white mb-1">Authentication Verified</h4>
                  <p className="text-xs text-slate-300">Loading StratxceL telemetry workspace...</p>
                </div>
              ) : (
                <form onSubmit={handleAuthSubmit} className="space-y-4">
                  {authModal === 'signup' && (
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Executive Name"
                        className="w-full px-4 py-3 bg-[#021C2A] border border-[#B0EDF9]/20 focus:border-[#B0EDF9] rounded-xl text-white text-xs placeholder-slate-500"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 bg-[#021C2A] border border-[#B0EDF9]/20 focus:border-[#B0EDF9] rounded-xl text-white text-xs placeholder-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Password
                    </label>
                    <input
                      type="password"
                      required
                      placeholder="••••••••••••"
                      className="w-full px-4 py-3 bg-[#021C2A] border border-[#B0EDF9]/20 focus:border-[#B0EDF9] rounded-xl text-white text-xs placeholder-slate-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3.5 bg-[#B0EDF9] hover:bg-white text-[#04344C] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
                  >
                    <span>{authModal === 'signin' ? 'Sign In to Workspace' : 'Create Account'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="pt-2 text-center text-xs text-slate-300">
                    {authModal === 'signin' ? (
                      <span>Don't have an account? <button type="button" onClick={() => setAuthModal('signup')} className="text-[#B0EDF9] font-bold hover:underline">Sign Up</button></span>
                    ) : (
                      <span>Already registered? <button type="button" onClick={() => setAuthModal('signin')} className="text-[#B0EDF9] font-bold hover:underline">Sign In</button></span>
                    )}
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;


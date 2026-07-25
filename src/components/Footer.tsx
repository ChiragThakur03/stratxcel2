import React from 'react';
import { Sparkles, Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

type FooterLink =
  | { label: string; id: string }
  | { label: string; href: string };

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks: {
    product: FooterLink[];
    company: FooterLink[];
    resources: FooterLink[];
    legal: FooterLink[];
  } = {
    product: [
      { label: 'Free AI Consultancy', id: 'free-ai' },
      { label: 'Premium Plans', id: 'premium' },
      { label: 'Expert Consultancy', id: 'expert-consultancy' },
      { label: 'API Access', href: '#' }
    ],
    company: [
      { label: 'About Us', id: 'about' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Partners', href: '#' }
    ],
    resources: [
      { label: 'Blog', href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'Help Center', href: '#' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'GDPR', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub' },
    { icon: <Mail className="w-5 h-5" />, href: '#', label: 'Email' }
  ];

  const renderLinks = (links: FooterLink[]) => (
    <ul className="space-y-2 sm:space-y-3">
      {links.map((link, index) => (
        <li key={index}>
          {'id' in link ? (
            <button
              onClick={() => scrollToSection(link.id)}
              className="text-slate-300 hover:text-[#B0EDF9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B0EDF9] rounded-sm transition-colors duration-200 text-left text-xs leading-snug sm:leading-relaxed"
            >
              {link.label}
            </button>
          ) : (
            <a
              href={link.href}
              className="text-slate-300 hover:text-[#B0EDF9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B0EDF9] rounded-sm transition-colors duration-200 text-xs leading-snug sm:leading-relaxed"
            >
              {link.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <footer className="relative z-10 bg-[#021C2A] border-t border-[#B0EDF9]/20">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-2">
            <div className="flex items-center space-x-2.5 mb-4 sm:mb-6">
              <div className="w-9 h-9 bg-[#04344C] border border-[#B0EDF9]/30 rounded-xl flex items-center justify-center">
                <Sparkles className="w-4.5 h-4.5 text-[#B0EDF9]" />
              </div>
              <span className="text-xl font-extrabold text-white">Strat<span className="text-[#B0EDF9]">xce</span>L</span>
            </div>
            <p className="text-slate-300 mb-4 sm:mb-6 max-w-sm text-xs leading-relaxed">
              Transform your business with AI-powered strategy. From instant insights to expert consultation — your complete business strategy solution.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-11 h-11 bg-[#04344C] border border-[#B0EDF9]/20 hover:border-[#B0EDF9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B0EDF9] rounded-xl flex items-center justify-center text-slate-300 hover:text-[#B0EDF9] transition-all duration-200 active:scale-95"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          <div className="col-span-1">
            <h3 className="text-[#B0EDF9] font-bold uppercase tracking-wider mb-3 sm:mb-4 text-xs">Product</h3>
            {renderLinks(footerLinks.product)}
          </div>

          <div className="col-span-1">
            <h3 className="text-[#B0EDF9] font-bold uppercase tracking-wider mb-3 sm:mb-4 text-xs">Company</h3>
            {renderLinks(footerLinks.company)}
          </div>

          <div className="col-span-1">
            <h3 className="text-[#B0EDF9] font-bold uppercase tracking-wider mb-3 sm:mb-4 text-xs">Resources</h3>
            {renderLinks(footerLinks.resources)}
          </div>

          <div className="col-span-1">
            <h3 className="text-[#B0EDF9] font-bold uppercase tracking-wider mb-3 sm:mb-4 text-xs">Legal</h3>
            {renderLinks(footerLinks.legal)}
          </div>
        </div>

        {/* Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-start lg:items-center mb-8 sm:mb-12 pt-8 border-t border-[#B0EDF9]/15">
          <div className="mb-4 lg:mb-0">
            <h3 className="text-lg sm:text-xl font-extrabold text-white mb-1">
              Stay Updated
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Get the latest insights on AI-powered business strategy delivered to your inbox.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-[#04344C] border border-[#B0EDF9]/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B0EDF9] text-xs transition-all"
            />
            <button className="px-6 py-3 bg-[#B0EDF9] text-[#04344C] font-bold uppercase tracking-wider rounded-xl hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white transition-all whitespace-nowrap text-xs active:scale-95">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#B0EDF9]/15 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs text-center sm:text-left">
            © 2026 StratxceL. All rights reserved.
          </p>
          <div className="flex items-center space-x-3 text-xs text-slate-400">
            <span>Made with ❤️ by TRUSTING BRAINS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

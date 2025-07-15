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
    { icon: <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />, href: '#', label: 'GitHub' },
    { icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />, href: '#', label: 'Email' }
  ];

  const renderLinks = (links: FooterLink[]) => (
    <ul className="space-y-2 sm:space-y-3">
      {links.map((link, index) => (
        <li key={index}>
          {'id' in link ? (
            <button
              onClick={() => scrollToSection(link.id)}
              className="text-gray-400 hover:text-white transition-colors duration-200 text-left text-xs sm:text-sm leading-snug sm:leading-relaxed"
            >
              {link.label}
            </button>
          ) : (
            <a
              href={link.href}
              className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm leading-snug sm:leading-relaxed"
            >
              {link.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <footer className="relative z-10 bg-gray-900/50 backdrop-blur-sm border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 mb-8 sm:mb-12"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div
            className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <div className="relative">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full blur-md opacity-50"></div>
              </div>
              <span className="text-lg sm:text-xl font-bold text-white">Stratxcel.AI</span>
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 max-w-sm text-xs sm:text-base leading-snug sm:leading-relaxed">
              Transform your business with AI-powered strategy. From instant insights to expert consultation — your complete business strategy solution.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 active:scale-95"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Columns */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Product</h3>
            {renderLinks(footerLinks.product)}
          </motion.div>

          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
            {renderLinks(footerLinks.company)}
          </motion.div>

          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Resources</h3>
            {renderLinks(footerLinks.resources)}
          </motion.div>

          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h3>
            {renderLinks(footerLinks.legal)}
          </motion.div>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-start lg:items-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="mb-4 lg:mb-0">
            <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">
              Stay Updated
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-snug sm:leading-relaxed">
              Get the latest insights on AI-powered business strategy delivered to your inbox.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2.5 sm:px-4 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm sm:text-base"
            />
            <button className="px-4 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-200 whitespace-nowrap text-sm sm:text-base active:scale-95">
              Subscribe
            </button>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-6 sm:pt-8 border-t border-gray-700/50 flex flex-col sm:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            © 2024 Stratxcel.AI. All rights reserved.
          </p>
          <div className="flex items-center space-x-3 sm:space-x-6 text-xs sm:text-sm text-gray-400">
            <span className="text-center">Made with ❤️ by TRUSTING BRAINS</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

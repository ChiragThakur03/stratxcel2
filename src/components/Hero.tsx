import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-0">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0">
        <Spline 
          scene="https://prod.spline.design/UHyZqZcrkJ393yEb/scene.splinecode" 
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen pt-12 sm:pt-16 lg:pt-20">
          {/* Left Content */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left mb-8 sm:mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div>
              <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-500/10 rounded-full border border-purple-500/20 mb-4 sm:mb-6">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 mr-1.5 sm:mr-2" />
                <span className="text-purple-300 text-[clamp(10px,3vw,14px)] font-medium">
                  AI-Powered Business Strategy
                </span>
              </div>
              <h1 className="text-[clamp(28px,7vw,64px)] font-bold leading-tight mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 bg-clip-text text-transparent block">
                  Transform Your Business
                </span>
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent block">
                  with AI-Powered Strategy
                </span>
              </h1>
              <p className="text-[clamp(14px,3.5vw,20px)] text-gray-300 mb-6 sm:mb-8 max-w-xs sm:max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                From instant AI insights to expert human consultation — your complete business strategy solution.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="group w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-[clamp(14px,3.5vw,18px)] font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center active:scale-95"
                >
                  Start Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button 
                  onClick={() => scrollToSection('premium')}
                  className="w-full sm:w-auto border-2 border-purple-400 text-purple-300 hover:text-white hover:bg-purple-500/10 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-[clamp(14px,3.5vw,18px)] font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  View Premium Plans
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Spline Robot */}
          <motion.div
            className="hidden lg:block w-1/2 h-full relative"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 flex items-center justify-center -translate-y-16">
              <div className="w-full h-[80vh] xl:h-[100vh] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
                <iframe
                  src="https://my.spline.design/robotfollowcursorforlandingpagemc-Owr5wEPjXCOYVI1Hru0naen0"
                  className="w-full h-full scale-[1.2] lg:scale-[1.5] relative z-10"
                  frameBorder="0"
                  allowFullScreen
                  title="Interactive 3D Robot"
                />
              </div>
            </div>
          </motion.div>

          {/* Mobile 3D Element */}
          <motion.div
            className="block lg:hidden w-full h-64 sm:h-80 md:h-96 relative mt-8 sm:mt-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-2xl"></div>
            {/* <iframe
              src="https://my.spline.design/robotfollowcursorforlandingpagemc-Owr5wEPjXCOYVI1Hru0naen0"
              className="w-full h-full scale-[0.8] sm:scale-[1] relative z-10 rounded-2xl"
              frameBorder="0"
              allowFullScreen
              title="Interactive 3D Robot Mobile"
            /> */}
          </motion.div>
        </div>
      </div>

      {/* Floating Elements - Responsive */}
      <div className="absolute top-1/4 left-4 sm:left-10 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-8 sm:right-20 w-2 h-2 sm:w-3 sm:h-3 bg-pink-400 rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-700"></div>
      <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-300 rounded-full animate-pulse delay-1000"></div>
      <div className="hidden sm:block absolute top-1/2 left-1/6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-500"></div>
      <div className="hidden md:block absolute bottom-1/6 right-1/6 w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-900"></div>
    </div>
  );
};

export default Hero;

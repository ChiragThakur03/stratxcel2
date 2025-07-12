import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen pt-16">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20 mb-6">
                <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
                <span className="text-purple-300 text-sm font-medium">
                  AI-Powered Business Strategy
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
                  Transform Your Business
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  with AI-Powered Strategy
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                From instant AI insights to expert human consultation — your complete business strategy solution.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center">
                  Start Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                
                <button className="border-2 border-purple-400 text-purple-300 hover:text-white hover:bg-purple-500/10 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  View Premium Plans
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Spline Robot */}
          <div className="hidden lg:block w-1/2 h-full relative">
            <div className="absolute inset-0 flex items-center justify-center -translate-y-16">
              <div className="w-full h-[100vh] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
                <iframe
                  src="https://my.spline.design/robotfollowcursorforlandingpagemc-Owr5wEPjXCOYVI1Hru0naen0"
                  className="w-full h-full scale-[1.5] relative z-10"
                  frameBorder="0"
                  allowFullScreen
                  title="Interactive 3D Robot"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-700"></div>
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-purple-300 rounded-full animate-pulse delay-1000"></div>
    </div>
  );
};

export default Hero;
import React, { useState } from 'react';
import { ArrowRight, Sparkles, Check, Play, Zap, Shield, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero: React.FC = () => {
  // Simulator State
  const [automateSelected, setAutomateSelected] = useState(false);
  const [seoSelected, setSeoSelected] = useState(false);
  const [expertSelected, setExpertSelected] = useState(false);

  // Compute values based on toggles
  const speedMultiplier = 1 + (automateSelected ? 2.5 : 0) + (seoSelected ? 1.0 : 0) + (expertSelected ? 4.5 : 0);
  const roiValue = 10 + (automateSelected ? 15 : 0) + (seoSelected ? 12 : 0) + (expertSelected ? 43 : 0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden bg-[#06080F]"
    >
      {/* Dynamic Background Radial Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none z-0">
        <div className="absolute top-12 left-1/4 w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-[130px] animate-pulse" />
        <div className="absolute top-24 right-1/4 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[130px] animate-pulse delay-700" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Editorial Copy Column */}
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-full text-purple-300 text-xs font-semibold uppercase tracking-wider mb-8">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            AI-Driven Strategy Simulator
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(34px,6.5vw,72px)] font-extrabold leading-[1.08] mb-6 tracking-tight text-white">
            Simulate Your
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent block mt-1.5">
              Business Growth
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-lg mb-10 leading-relaxed font-medium">
            Test strategy configurations in real time. Model automations, SEO channels, and consultant validation audits instantly.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => window.open('https://stratxcel.ai', '_blank')}
              className="group relative w-full sm:w-auto overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-8 py-4 rounded-xl text-xs uppercase tracking-wider font-bold transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] active:scale-95 flex items-center justify-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                Launch Platform
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 transition-transform duration-300 z-0" />
            </button>

            <button
              onClick={() => scrollToSection('premium-plans')}
              className="w-full sm:w-auto px-8 py-4 border border-white/[0.08] hover:border-purple-500/30 bg-white/[0.02] hover:bg-white/[0.05] text-white rounded-xl text-xs uppercase tracking-wider font-bold transition-all active:scale-95"
            >
              View Plans & Tier Pricing
            </button>
          </div>
        </div>

        {/* Right Interactive Simulator Dashboard (Bento Graphic) */}
        <div className="flex-1 w-full max-w-xl">
          <div className="glass-card rounded-3xl p-6 relative overflow-hidden border-purple-500/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]">
            
            {/* Ambient inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />

            {/* Header console */}
            <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
              <span className="text-xs font-bold text-gray-300 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                Live Modeling Center
              </span>
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white/10" />
                <span className="w-2 h-2 rounded-full bg-white/10" />
              </div>
            </div>

            {/* Toggle Configuration Tiers */}
            <div className="space-y-3 mb-8">
              
              {/* Option 1 */}
              <div 
                onClick={() => setAutomateSelected(!automateSelected)}
                className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all duration-300 ${
                  automateSelected 
                    ? 'bg-purple-500/10 border-purple-500/40 text-purple-200' 
                    : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04] text-gray-400 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                    automateSelected ? 'bg-purple-500 border-purple-400' : 'border-white/20'
                  }`}>
                    {automateSelected && <Check className="w-3.5 h-3.5 text-white" />}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider">Automated Sales Workflows</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Integrate chatbots & lead score models</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-purple-400">+2.5x Velocity</span>
              </div>

              {/* Option 2 */}
              <div 
                onClick={() => setSeoSelected(!seoSelected)}
                className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all duration-300 ${
                  seoSelected 
                    ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-200' 
                    : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04] text-gray-400 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                    seoSelected ? 'bg-cyan-500 border-cyan-400' : 'border-white/20'
                  }`}>
                    {seoSelected && <Check className="w-3.5 h-3.5 text-white" />}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider">Localized SEO Campaigns</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Automate brand content generation</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-cyan-400">+1.0x Velocity</span>
              </div>

              {/* Option 3 */}
              <div 
                onClick={() => setExpertSelected(!expertSelected)}
                className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all duration-300 ${
                  expertSelected 
                    ? 'bg-amber-500/10 border-amber-500/40 text-amber-200' 
                    : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04] text-gray-400 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                    expertSelected ? 'bg-amber-500 border-amber-400' : 'border-white/20'
                  }`}>
                    {expertSelected && <Check className="w-3.5 h-3.5 text-white" />}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider">Senior Strategy Consultant Audit</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Validated board-ready growth reports</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-amber-400">+4.5x Velocity</span>
              </div>

            </div>

            {/* Projection Indicators */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* Stat 1 */}
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 text-center">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Total Scaling Velocity</p>
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={speedMultiplier}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-3xl font-extrabold text-white flex items-center justify-center gap-1.5"
                  >
                    <Zap className="w-5 h-5 text-purple-400 fill-current" />
                    <span>{speedMultiplier.toFixed(1)}x</span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Stat 2 */}
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 text-center">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Estimated ROI Gain</p>
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={roiValue}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-3xl font-extrabold text-white flex items-center justify-center gap-1.5"
                  >
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                    <span>+{roiValue}%</span>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

import React, { useState } from 'react';
import { ArrowRight, Sparkles, Check, Zap, TrendingUp, Radar, BarChart3, ShieldCheck, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero: React.FC = () => {
  // Telemetry Simulator State
  const [activeTab, setActiveTab] = useState<'radar' | 'forecast'>('radar');
  const [automateSelected, setAutomateSelected] = useState(true);
  const [seoSelected, setSeoSelected] = useState(false);
  const [expertSelected, setExpertSelected] = useState(true);

  // Computed projections
  const speedMultiplier = 1.0 + (automateSelected ? 2.5 : 0) + (seoSelected ? 1.2 : 0) + (expertSelected ? 4.8 : 0);
  const roiValue = 15 + (automateSelected ? 18 : 0) + (seoSelected ? 14 : 0) + (expertSelected ? 46 : 0);
  const confidenceScore = 88 + (automateSelected ? 4 : 0) + (expertSelected ? 7 : 0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden bg-[#021C2A]"
    >
      {/* Background Pastel & Sky Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none z-0">
        <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-[#B0EDF9]/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute top-28 right-1/4 w-[450px] h-[450px] bg-[#04344C]/60 rounded-full blur-[140px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Headline Column */}
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-[#04344C]/60 backdrop-blur-xl border border-[#B0EDF9]/30 rounded-full text-[#B0EDF9] text-xs font-semibold uppercase tracking-wider mb-8 shadow-[0_0_20px_rgba(176,237,249,0.15)]">
            <Sparkles className="w-4 h-4 mr-2 text-[#B0EDF9] animate-pulse" />
            AI + Human Strategy Platform
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(36px,6vw,72px)] font-black leading-[1.08] mb-6 tracking-tight text-white">
            Democratizing Strategic
            <span className="text-[#B0EDF9] block mt-1.5">
              Business Intelligence
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-xl mb-10 leading-relaxed font-normal">
            StratxceL fuses real-time AI market analytics with elite senior strategy consultants—delivering executive decision matrix tools tailored to your business velocity.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => scrollToSection('premium-plans')}
              className="group relative w-full sm:w-auto bg-[#B0EDF9] hover:bg-white text-[#04344C] px-8 py-4 rounded-xl text-xs uppercase tracking-wider font-bold transition-all duration-300 hover:shadow-[0_0_35px_rgba(176,237,249,0.4)] active:scale-95 flex items-center justify-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Strategy Matrix
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button
              onClick={() => scrollToSection('expert-consultancy')}
              className="w-full sm:w-auto px-8 py-4 border border-[#B0EDF9]/30 hover:border-[#B0EDF9] bg-[#04344C]/40 hover:bg-[#04344C] text-[#B0EDF9] hover:text-white rounded-xl text-xs uppercase tracking-wider font-bold transition-all active:scale-95"
            >
              Book Strategy Audit
            </button>
          </div>

          {/* Trust Ticker Badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-300 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#B0EDF9]" />
              <span>50,000+ Businesses Served</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#B0EDF9]" />
              <span>150+ Countries Worldwide</span>
            </div>
          </div>
        </div>

        {/* Right Interactive Telemetry Console */}
        <div className="flex-1 w-full max-w-xl">
          <div className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-[#B0EDF9]/25 bg-[#04344C]/80 backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,0,0,0.6)]">
            
            {/* Ambient Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#B0EDF9]/10 via-transparent to-[#04344C]/40 pointer-events-none" />

            {/* Console Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#B0EDF9]/20 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B0EDF9] animate-ping" />
                <span className="text-xs font-bold text-[#B0EDF9] uppercase tracking-widest">
                  Strategy Telemetry Core
                </span>
              </div>
              
              {/* Telemetry Tabs */}
              <div className="flex gap-1 bg-[#021C2A]/60 p-1 rounded-lg border border-[#B0EDF9]/20">
                <button
                  onClick={() => setActiveTab('radar')}
                  className={`p-1.5 rounded-md transition-all ${activeTab === 'radar' ? 'bg-[#B0EDF9] text-[#04344C]' : 'text-slate-300 hover:text-white'}`}
                  title="Competitive Radar"
                >
                  <Radar className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setActiveTab('forecast')}
                  className={`p-1.5 rounded-md transition-all ${activeTab === 'forecast' ? 'bg-[#B0EDF9] text-[#04344C]' : 'text-slate-300 hover:text-white'}`}
                  title="Predictive Forecasting"
                >
                  <BarChart3 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Telemetry Details */}
            <div className="mb-6">
              {activeTab === 'radar' && (
                <div className="bg-[#021C2A]/50 border border-[#B0EDF9]/20 rounded-2xl p-4 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">Market Radar Index</span>
                    <span className="text-lg font-bold text-white">Tier-1 Competitor Intelligence</span>
                  </div>
                  <span className="px-3 py-1 bg-[#B0EDF9]/20 text-[#B0EDF9] border border-[#B0EDF9]/40 rounded-full text-xs font-bold">
                    Active Radar
                  </span>
                </div>
              )}
              {activeTab === 'forecast' && (
                <div className="bg-[#021C2A]/50 border border-[#B0EDF9]/20 rounded-2xl p-4 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">Predictive Model</span>
                    <span className="text-lg font-bold text-white">Quarterly Growth Trajectory</span>
                  </div>
                  <span className="px-3 py-1 bg-[#B0EDF9]/20 text-[#B0EDF9] border border-[#B0EDF9]/40 rounded-full text-xs font-bold">
                    Real-time AI
                  </span>
                </div>
              )}
            </div>

            {/* Strategy Configuration Toggles */}
            <div className="space-y-3 mb-8">
              
              {/* Toggle 1 */}
              <div 
                onClick={() => setAutomateSelected(!automateSelected)}
                className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${
                  automateSelected 
                    ? 'bg-[#B0EDF9]/15 border-[#B0EDF9]/60 text-white shadow-[0_0_20px_rgba(176,237,249,0.15)]' 
                    : 'bg-[#021C2A]/40 border-[#B0EDF9]/15 hover:bg-[#021C2A]/60 text-slate-300 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                    automateSelected ? 'bg-[#B0EDF9] border-[#B0EDF9]' : 'border-white/20'
                  }`}>
                    {automateSelected && <Check className="w-3.5 h-3.5 text-[#04344C]" />}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider">Automated Sales & Market Workflows</p>
                    <p className="text-xs text-slate-300 mt-0.5">Integrate AI lead scoring & competitive tracking</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#B0EDF9]">+2.5x Speed</span>
              </div>

              {/* Toggle 2 */}
              <div 
                onClick={() => setSeoSelected(!seoSelected)}
                className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${
                  seoSelected 
                    ? 'bg-[#B0EDF9]/15 border-[#B0EDF9]/60 text-white shadow-[0_0_20px_rgba(176,237,249,0.15)]' 
                    : 'bg-[#021C2A]/40 border-[#B0EDF9]/15 hover:bg-[#021C2A]/60 text-slate-300 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                    seoSelected ? 'bg-[#B0EDF9] border-[#B0EDF9]' : 'border-white/20'
                  }`}>
                    {seoSelected && <Check className="w-3.5 h-3.5 text-[#04344C]" />}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider">Localized SEO & Content Intelligence</p>
                    <p className="text-xs text-slate-300 mt-0.5">Automated high-intent search visibility</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#B0EDF9]">+1.2x Speed</span>
              </div>

              {/* Toggle 3 */}
              <div 
                onClick={() => setExpertSelected(!expertSelected)}
                className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${
                  expertSelected 
                    ? 'bg-[#B0EDF9]/15 border-[#B0EDF9]/60 text-white shadow-[0_0_20px_rgba(176,237,249,0.15)]' 
                    : 'bg-[#021C2A]/40 border-[#B0EDF9]/15 hover:bg-[#021C2A]/60 text-slate-300 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                    expertSelected ? 'bg-[#B0EDF9] border-[#B0EDF9]' : 'border-white/20'
                  }`}>
                    {expertSelected && <Check className="w-3.5 h-3.5 text-[#04344C]" />}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider">Senior Strategy Consultant Validation</p>
                    <p className="text-xs text-slate-300 mt-0.5">Board-ready audit & expert human review</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#B0EDF9]">+4.8x Speed</span>
              </div>

            </div>

            {/* Projection Indicators */}
            <div className="grid grid-cols-3 gap-3">
              
              {/* Stat 1 */}
              <div className="bg-[#021C2A]/50 border border-[#B0EDF9]/20 rounded-2xl p-3.5 text-center">
                <p className="text-xs text-slate-300 font-bold uppercase tracking-wider mb-1">Velocity</p>
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={speedMultiplier}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="text-2xl font-black text-[#B0EDF9] flex items-center justify-center gap-1"
                  >
                    <Zap className="w-4 h-4 text-[#B0EDF9] fill-current" />
                    <span>{speedMultiplier.toFixed(1)}x</span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Stat 2 */}
              <div className="bg-[#021C2A]/50 border border-[#B0EDF9]/20 rounded-2xl p-3.5 text-center">
                <p className="text-xs text-slate-300 font-bold uppercase tracking-wider mb-1">ROI Gain</p>
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={roiValue}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="text-2xl font-black text-[#B0EDF9] flex items-center justify-center gap-1"
                  >
                    <TrendingUp className="w-4 h-4 text-[#B0EDF9]" />
                    <span>+{roiValue}%</span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Stat 3 */}
              <div className="bg-[#021C2A]/50 border border-[#B0EDF9]/20 rounded-2xl p-3.5 text-center">
                <p className="text-xs text-slate-300 font-bold uppercase tracking-wider mb-1">Confidence</p>
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={confidenceScore}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="text-2xl font-black text-[#B0EDF9] flex items-center justify-center gap-1"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#B0EDF9]" />
                    <span>{confidenceScore}%</span>
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

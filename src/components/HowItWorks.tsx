import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Zap, Target, Users, ArrowRight, Sparkles, Shield, Check } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <Brain className="w-5 h-5 text-purple-400" />,
      badge: "Step 01",
      title: "Model Processing",
      shortDesc: "Train custom strategy models on proprietary corporate telemetry.",
      longDesc: "Our neural engines parse your organization's metric histories to build dedicated local models. By matching data against 100+ industry verticals, we find key execution anomalies and hidden marketing vectors.",
      deliverable: "Custom Model Architecture",
      timeframe: "Instant",
      color: "border-purple-500/20 text-purple-400 bg-purple-500/5",
      glow: "rgba(168, 85, 247, 0.15)"
    },
    {
      icon: <Zap className="w-5 h-5 text-cyan-400" />,
      badge: "Step 02",
      title: "Simulation Triggers",
      shortDesc: "Run automated velocity audits to test scaling boundaries.",
      longDesc: "Test workflow configurations, lead score metrics, and SEO automation triggers against actual client traffic constraints. Optimize resource allocation before launching live.",
      deliverable: "Interactive Velocity Report",
      timeframe: "3-5 mins",
      color: "border-cyan-500/20 text-cyan-400 bg-cyan-500/5",
      glow: "rgba(6, 182, 212, 0.15)"
    },
    {
      icon: <Target className="w-5 h-5 text-emerald-400" />,
      badge: "Step 03",
      title: "Targeting Matrix",
      shortDesc: "Align regional campaign budgets with precision ROI goals.",
      longDesc: "Define localized marketing targets and automate ad funnel bids. Our systems dynamically re-allocate investments to preserve a high customer lifetime-value to acquisition ratio.",
      deliverable: "Localized Campaign Maps",
      timeframe: "Daily updates",
      color: "border-emerald-500/20 text-emerald-400 bg-emerald-500/5",
      glow: "rgba(16, 185, 129, 0.15)"
    },
    {
      icon: <Users className="w-5 h-5 text-amber-400" />,
      badge: "Step 04",
      title: "Analyst Validation",
      shortDesc: "Deploy verified senior strategy directors for compliance review.",
      longDesc: "Every automated output is reviewed and validated by our verified network of senior corporate consultants. Get human insights to justify decisions to stakeholders.",
      deliverable: "Board-Ready Signed Playbook",
      timeframe: "2 hour SLA",
      color: "border-amber-500/20 text-amber-400 bg-amber-500/5",
      glow: "rgba(245, 158, 11, 0.15)"
    }
  ];

  return (
    <section id="how-it-works" className="relative z-10 py-24 px-6 sm:px-8 lg:px-12 bg-[#06080F]">
      {/* Background radial overlays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-950/5 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-full text-purple-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <Shield className="w-4 h-4 mr-2 text-purple-400" />
            Execution Roadmap
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-white">
            Operational Blueprint
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Four sequential phases engineered to accelerate strategic decision-making with high-fidelity accuracy.
          </p>
        </div>

        {/* Stepper Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`relative p-6 rounded-2xl border cursor-pointer transition-all duration-300 flex flex-col justify-between h-52 group ${
                  isActive 
                    ? 'bg-[#0E1324]/80 border-purple-500/40 shadow-lg shadow-purple-500/5' 
                    : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/10'
                }`}
              >
                {/* Accent glow corner */}
                <div 
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-20 group-hover:opacity-45"
                  style={{
                    background: `radial-gradient(circle at 90% 10%, ${step.glow}, transparent 35%)`
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 bg-white/[0.03] border border-white/[0.08] rounded-xl flex items-center justify-center">
                      {step.icon}
                    </div>
                    <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                      {step.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{step.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{step.shortDesc}</p>
                </div>

                <div className="relative z-10 flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-purple-400 group-hover:text-purple-300 transition-colors">
                  <span>View Phase</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detail Viewer Panel */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 relative overflow-hidden border-purple-500/10 min-h-[250px] flex flex-col lg:flex-row justify-between gap-10">
          <div 
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              background: `radial-gradient(circle at 10% 10%, ${steps[activeStep].glow}, transparent 40%)`
            }}
          />

          {/* Left Details */}
          <div className="flex-1 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/[0.06] rounded-full text-xs font-bold uppercase tracking-wider text-purple-300 mb-4">
              <span>{steps[activeStep].badge}</span>
              <span>•</span>
              <span>Active Stage</span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight">
              {steps[activeStep].title} Process
            </h4>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              {steps[activeStep].longDesc}
            </p>
          </div>

          {/* Right Metrics / Hand-offs */}
          <div className="w-full lg:w-96 bg-white/[0.01] border border-white/[0.06] rounded-2xl p-6 backdrop-blur-sm z-10 flex flex-col justify-between gap-6">
            <div>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-3">Deliverable Output</p>
              <div className="flex items-center gap-2.5 bg-white/[0.02] border border-white/5 p-3 rounded-xl mb-4">
                <div className="w-5 h-5 rounded-md bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                  <Check className="w-3 h-3 text-purple-400" />
                </div>
                <span className="text-xs font-bold text-white">{steps[activeStep].deliverable}</span>
              </div>

              <div className="flex justify-between items-center text-xs font-semibold text-gray-400">
                <span>Verification Time</span>
                <span className="text-white font-bold">{steps[activeStep].timeframe}</span>
              </div>
            </div>

            <button 
              onClick={() => window.open('https://stratxcel.ai', '_blank')}
              className="w-full py-3 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] text-white font-bold rounded-xl text-xs uppercase tracking-wider active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              <span>Initialize phase</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
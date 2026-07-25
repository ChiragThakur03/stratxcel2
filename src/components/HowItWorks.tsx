import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Zap, Target, Users, ArrowRight, Shield, Check } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <Brain className="w-5 h-5 text-[#B0EDF9]" />,
      badge: "Step 01",
      title: "Model Processing",
      shortDesc: "Train custom strategy models on proprietary corporate telemetry.",
      longDesc: "Our neural engines parse your organization's metric histories to build dedicated local models. By matching data against 100+ industry verticals, we find key execution anomalies and hidden marketing vectors.",
      deliverable: "Custom Model Architecture",
      timeframe: "Instant"
    },
    {
      icon: <Zap className="w-5 h-5 text-[#B0EDF9]" />,
      badge: "Step 02",
      title: "Simulation Triggers",
      shortDesc: "Run automated velocity audits to test scaling boundaries.",
      longDesc: "Test workflow configurations, lead score metrics, and SEO automation triggers against actual client traffic constraints. Optimize resource allocation before launching live.",
      deliverable: "Interactive Velocity Report",
      timeframe: "3-5 mins"
    },
    {
      icon: <Target className="w-5 h-5 text-[#B0EDF9]" />,
      badge: "Step 03",
      title: "Targeting Matrix",
      shortDesc: "Align regional campaign budgets with precision ROI goals.",
      longDesc: "Define localized marketing targets and automate ad funnel bids. Our systems dynamically re-allocate investments to preserve a high customer lifetime-value to acquisition ratio.",
      deliverable: "Localized Campaign Maps",
      timeframe: "Daily updates"
    },
    {
      icon: <Users className="w-5 h-5 text-[#B0EDF9]" />,
      badge: "Step 04",
      title: "Analyst Validation",
      shortDesc: "Deploy verified senior strategy directors for compliance review.",
      longDesc: "Every automated output is reviewed and validated by our verified network of senior corporate consultants. Get human insights to justify decisions to stakeholders.",
      deliverable: "Board-Ready Signed Playbook",
      timeframe: "2 hour SLA"
    }
  ];

  return (
    <section id="how-it-works" className="relative z-10 py-24 px-6 sm:px-8 lg:px-12 bg-[#021C2A]">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#B0EDF9]/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center px-4 py-2 bg-[#04344C]/60 backdrop-blur-xl border border-[#B0EDF9]/30 rounded-full text-[#B0EDF9] text-xs font-semibold uppercase tracking-wider mb-6">
            <Shield className="w-4 h-4 mr-2 text-[#B0EDF9]" />
            Execution Roadmap
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-white">
            Operational Blueprint
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
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
                    ? 'bg-[#04344C] border-[#B0EDF9] shadow-[0_0_25px_rgba(176,237,249,0.15)]' 
                    : 'bg-[#04344C]/40 border-[#B0EDF9]/20 hover:bg-[#04344C]/70 hover:border-[#B0EDF9]/40'
                }`}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 bg-[#021C2A] border border-[#B0EDF9]/30 rounded-xl flex items-center justify-center">
                      {step.icon}
                    </div>
                    <span className="text-xs uppercase font-bold text-[#B0EDF9] tracking-wider">
                      {step.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{step.title}</h3>
                  <p className="text-slate-300 text-xs leading-relaxed">{step.shortDesc}</p>
                </div>

                <div className="relative z-10 flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-[#B0EDF9] group-hover:text-white transition-colors">
                  <span>View Phase</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detail Viewer Panel */}
        <div className="glass-card bg-[#04344C]/80 rounded-3xl p-6 sm:p-10 relative overflow-hidden border border-[#B0EDF9]/30 min-h-[250px] flex flex-col lg:flex-row justify-between gap-10">
          
          {/* Left Details */}
          <div className="flex-1 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#021C2A] border border-[#B0EDF9]/30 rounded-full text-xs font-bold uppercase tracking-wider text-[#B0EDF9] mb-4">
              <span>{steps[activeStep].badge}</span>
              <span>•</span>
              <span>Active Stage</span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight">
              {steps[activeStep].title} Process
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {steps[activeStep].longDesc}
            </p>
          </div>

          {/* Right Output Panel */}
          <div className="w-full lg:w-96 bg-[#021C2A]/60 border border-[#B0EDF9]/20 rounded-2xl p-6 backdrop-blur-sm z-10 flex flex-col justify-between gap-6">
            <div>
              <p className="text-xs text-slate-300 font-bold uppercase tracking-widest mb-3">Deliverable Output</p>
              <div className="flex items-center gap-2.5 bg-[#04344C] border border-[#B0EDF9]/30 p-3 rounded-xl mb-4">
                <div className="w-5 h-5 rounded-md bg-[#B0EDF9] flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-[#04344C]" />
                </div>
                <span className="text-xs font-bold text-white">{steps[activeStep].deliverable}</span>
              </div>

              <div className="flex justify-between items-center text-xs font-semibold text-slate-300">
                <span>Verification Time</span>
                <span className="text-[#B0EDF9] font-bold">{steps[activeStep].timeframe}</span>
              </div>
            </div>

            <button 
              onClick={() => window.open('https://stratxcel.ai', '_blank')}
              className="w-full py-3.5 bg-[#B0EDF9] hover:bg-white text-[#04344C] font-bold rounded-xl text-xs uppercase tracking-wider active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>Initialize Phase</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
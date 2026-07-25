import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Zap, Target, Users, ArrowRight, Shield, Check, 
  Cpu, Activity, Compass, Award, Play, RefreshCw, BarChart3, Lock
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      icon: <Brain className="w-6 h-6 text-[#B0EDF9]" />,
      stepNum: "01",
      title: "Model Processing",
      subtitle: "Neural Telemetry Audit",
      shortDesc: "Train custom strategy models on proprietary corporate telemetry.",
      longDesc: "Our neural engines ingest your organization's metric histories to build dedicated local models. By matching data against 100+ industry verticals, we isolate key execution anomalies and hidden marketing vectors.",
      deliverable: "Custom Neural Architecture",
      timeframe: "Instant Processing",
      metrics: [
        { label: "Data Nodes Scanned", value: "1.2M+" },
        { label: "Anomaly Accuracy", value: "99.8%" }
      ],
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 1,
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      stepNum: "02",
      title: "Simulation Triggers",
      subtitle: "Velocity & Stress Testing",
      shortDesc: "Run automated velocity audits to test scaling boundaries.",
      longDesc: "Simulate campaign budget scenarios, lead scoring thresholds, and automated follow-up cadences against real traffic constraints. Uncover bottlenecks before spending a single dollar live.",
      deliverable: "Velocity & Risk Audit",
      timeframe: "3 - 5 mins",
      metrics: [
        { label: "Simulated Scenarios", value: "500+" },
        { label: "Risk Mitigation Rate", value: "94.2%" }
      ],
      color: "from-amber-400 to-orange-500"
    },
    {
      id: 2,
      icon: <Target className="w-6 h-6 text-emerald-400" />,
      stepNum: "03",
      title: "Targeting Matrix",
      subtitle: "Precision Capital Allocation",
      shortDesc: "Align regional campaign budgets with precision ROI goals.",
      longDesc: "Define localized marketing targets and automate ad funnel bidding rules. Our engines dynamically rebalance budget allocation across channels to protect your LTV:CAC ratios.",
      deliverable: "Localized Campaign Map",
      timeframe: "Real-time Sync",
      metrics: [
        { label: "Target Precision", value: "98.5%" },
        { label: "CAC Reduction", value: "35% Avg" }
      ],
      color: "from-emerald-400 to-teal-500"
    },
    {
      id: 3,
      icon: <Users className="w-6 h-6 text-purple-400" />,
      stepNum: "04",
      title: "Analyst Validation",
      subtitle: "Human Strategy Sign-Off",
      shortDesc: "Deploy verified senior strategy directors for compliance review.",
      longDesc: "Every automated playbook is reviewed and validated by senior corporate consultants. Get human executive commentary and signed documentation ready for board presentation.",
      deliverable: "Board-Ready Signed Playbook",
      timeframe: "2 Hour SLA",
      metrics: [
        { label: "Executive Reviewers", value: "150+" },
        { label: "Board Approval Rate", value: "100%" }
      ],
      color: "from-purple-400 to-fuchsia-500"
    }
  ];

  return (
    <section id="how-it-works" className="relative z-10 py-24 px-4 sm:px-6 lg:px-12 bg-[#021C2A] overflow-hidden">
      
      {/* Background Ambient SVG Mesh & Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(176, 237, 249, 0.2)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#B0EDF9]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#04344C]/80 border border-[#B0EDF9]/30 rounded-full text-[#B0EDF9] text-xs font-semibold uppercase tracking-wider mb-6 shadow-lg backdrop-blur-md">
            <Cpu className="w-4 h-4 text-[#B0EDF9]" />
            Sequential Execution Pipeline
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-white">
            Operational Blueprint
          </h2>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            Four interconnected engine phases designed to convert raw corporate telemetry into verified high-velocity growth execution.
          </p>
        </div>

        {/* Holographic Step Navigation Bar */}
        <div className="relative mb-12">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-1 bg-white/10 -translate-y-1/2 rounded-full z-0" />
          <div 
            className="hidden lg:block absolute top-1/2 left-12 h-1 bg-gradient-to-r from-[#B0EDF9] to-purple-400 -translate-y-1/2 rounded-full z-0 transition-all duration-500" 
            style={{ width: `${(activeStep / (steps.length - 1)) * 85}%` }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 relative group overflow-hidden ${
                    isActive
                      ? 'bg-[#04344C] border-[#B0EDF9] shadow-[0_0_30px_rgba(176,237,249,0.2)] scale-[1.02]'
                      : 'bg-[#04344C]/40 border-white/10 hover:border-white/30 hover:bg-[#04344C]/70'
                  }`}
                >
                  {/* Glowing Top Indicator */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`} />

                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-transform duration-300 ${
                      isActive ? 'bg-[#021C2A] border-[#B0EDF9]' : 'bg-[#021C2A]/60 border-white/10'
                    }`}>
                      {step.icon}
                    </div>
                    <span className="text-xs font-black text-slate-400 font-mono">PHASE {step.stepNum}</span>
                  </div>

                  <h3 className="text-base font-extrabold text-white mb-1">{step.title}</h3>
                  <p className="text-xs text-slate-400 font-medium truncate">{step.subtitle}</p>

                  <div className="mt-4 flex items-center justify-between text-[11px] font-bold text-[#B0EDF9]">
                    <span>{isActive ? 'Active Stage' : 'Select Stage'}</span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'translate-x-1' : ''}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Holographic Interactive Visualizer Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-[#04344C]/70 border border-[#B0EDF9]/30 rounded-3xl p-6 sm:p-10 backdrop-blur-xl relative overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#021C2A] border border-[#B0EDF9]/40 rounded-full text-xs font-bold uppercase tracking-wider text-[#B0EDF9]">
                  Phase {steps[activeStep].stepNum} Architecture
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                  <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" /> Live Telemetry Sync
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-4xl font-black text-white mb-2 tracking-tight">
                  {steps[activeStep].title} Engine
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {steps[activeStep].longDesc}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                {steps[activeStep].metrics.map((m, idx) => (
                  <div key={idx} className="p-4 bg-[#021C2A]/80 border border-white/10 rounded-2xl">
                    <div className="text-xl sm:text-2xl font-black text-white">{m.value}</div>
                    <div className="text-xs text-slate-400 font-medium">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Deliverables Banner */}
              <div className="p-4 bg-[#021C2A]/90 border border-[#B0EDF9]/30 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#B0EDF9] text-[#04344C] flex items-center justify-center font-bold flex-shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Engine Deliverable</div>
                    <div className="text-sm font-extrabold text-white">{steps[activeStep].deliverable}</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs text-slate-400 font-medium">Turnaround Benchmark</div>
                  <div className="text-xs font-bold text-[#B0EDF9] font-mono">{steps[activeStep].timeframe}</div>
                </div>
              </div>
            </div>

            {/* Right Visual Graphic Component (5 Cols) */}
            <div className="lg:col-span-5 bg-[#021C2A]/90 border border-white/10 rounded-2xl p-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[320px]">
              
              {/* Dynamic Graphic based on activeStep */}
              {activeStep === 0 && (
                <div className="w-full flex flex-col items-center justify-center space-y-4">
                  <div className="relative w-40 h-40 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#B0EDF9]/40 animate-spin" style={{ animationDuration: '12s' }} />
                    <div className="absolute inset-3 rounded-full border border-cyan-500/30 animate-ping" style={{ animationDuration: '3s' }} />
                    <Brain className="w-16 h-16 text-[#B0EDF9]" />
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-bold text-slate-300 font-mono">NEURAL MODEL TRAINED</div>
                    <div className="text-[11px] text-slate-500">100+ Vertical Embeddings Active</div>
                  </div>
                </div>
              )}

              {activeStep === 1 && (
                <div className="w-full space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                    <span>SIMULATION SPEED</span>
                    <span className="text-amber-400 font-bold">120K OPS/SEC</span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                        <span>Ad Spend Velocity Audit</span>
                        <span>94%</span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-400 rounded-full" style={{ width: '94%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                        <span>Lead Score Accuracy Test</span>
                        <span>98%</span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-400 rounded-full" style={{ width: '98%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                        <span>Conversion Bottleneck Stress Test</span>
                        <span>89%</span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-400 rounded-full" style={{ width: '89%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="w-full flex flex-col items-center justify-center space-y-4">
                  <div className="relative w-36 h-36 border border-emerald-500/30 rounded-full flex items-center justify-center">
                    <div className="absolute inset-0 border border-emerald-500/20 rounded-full animate-ping" />
                    <div className="w-24 h-24 bg-emerald-500/10 rounded-full border border-emerald-400/40 flex items-center justify-center">
                      <Target className="w-10 h-10 text-emerald-400" />
                    </div>
                  </div>
                  <div className="text-center space-y-1">
                    <div className="text-xs font-bold text-white font-mono">REGIONAL TARGET RADAR</div>
                    <div className="text-[11px] text-emerald-400 font-semibold">Active Bid Allocation Triggered</div>
                  </div>
                </div>
              )}

              {activeStep === 3 && (
                <div className="w-full space-y-4 text-center">
                  <div className="w-16 h-16 bg-purple-500/10 border border-purple-400/40 rounded-2xl mx-auto flex items-center justify-center">
                    <Award className="w-8 h-8 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Verified Senior Director Sign-Off</div>
                    <div className="text-xs text-slate-400 mt-1">Compliance & Strategic Alignment Verified</div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs font-mono text-purple-300">
                    SECURITY HASH: 0x9F82A3B4...VERIFIED
                  </div>
                </div>
              )}

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default HowItWorks;
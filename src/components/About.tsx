import React, { useState } from 'react';
import { 
  Globe, Target, Users, Lightbulb, TrendingUp, Award, Rocket, 
  Shield, Star, CheckCircle, ArrowRight, Play, Eye, Compass, Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'story' | 'timeline' | 'footprint'>('story');
  const [selectedMilestone, setSelectedMilestone] = useState<number>(0);
  const [activeRegion, setActiveRegion] = useState<string>('Americas');

  const stats = [
    { number: "50K+", label: "Global Businesses", sub: "Served across 150+ countries", icon: <Users className="w-5 h-5 text-[#B0EDF9]" /> },
    { number: "99.4%", label: "Client Satisfaction", sub: "Verified executive audit score", icon: <Star className="w-5 h-5 text-amber-400" /> },
    { number: "$2.5B+", label: "Client Revenue Created", sub: "Attributed strategic impact", icon: <TrendingUp className="w-5 h-5 text-emerald-400" /> },
    { number: "150+", label: "Senior Advisors", sub: "Ex-McKinsey, BCG, Bain network", icon: <Award className="w-5 h-5 text-purple-400" /> }
  ];

  const timeline = [
    {
      year: "2019",
      title: "Foundation & Neural Research",
      description: "StratxceL was founded by former management consultants and AI telemetry researchers to disrupt traditional corporate advisory.",
      milestone: "Company Inception",
      stats: "Initial Seed Capital Raised"
    },
    {
      year: "2021",
      title: "V1 AI Telemetry Engine Launch",
      description: "Deployed our first automated market intelligence platform, processing 1M+ competitor data points daily for 1,000+ early adopters.",
      milestone: "Platform V1 Rollout",
      stats: "1,000+ Active Enterprise Clients"
    },
    {
      year: "2023",
      title: "Global Advisor Network Expansion",
      description: "Combined AI telemetry models with 150+ verified senior strategy directors across North America, Europe, and Asia-Pacific.",
      milestone: "Advisor Hybrid Integration",
      stats: "50,000+ Audits Completed"
    },
    {
      year: "2025",
      title: "Enterprise Autonomous Strategy Hub",
      description: "Launched real-time velocity simulations, legal/funding pitch deck generators, and automated CRM integration suites.",
      milestone: "Enterprise Hub V3",
      stats: "150+ Countries Reached"
    }
  ];

  const regions = [
    { name: "Americas", clients: "24,000+", hubs: "New York, San Francisco, Toronto", growth: "+42% YoY" },
    { name: "Europe & UK", clients: "16,500+", hubs: "London, Berlin, Zurich", growth: "+38% YoY" },
    { name: "Asia-Pacific", clients: "9,800+", hubs: "Singapore, Tokyo, Sydney", growth: "+55% YoY" },
    { name: "LATAM & MEA", clients: "4,200+", hubs: "Dubai, São Paulo", growth: "+60% YoY" }
  ];

  const coreValues = [
    {
      title: "Democratized Intelligence",
      desc: "Making institutional-grade strategic consulting accessible to every ambitious team.",
      color: "border-cyan-500/40 text-cyan-400"
    },
    {
      title: "Human + AI Synergy",
      desc: "Neural automation handles data processing; human advisors validate strategic direction.",
      color: "border-purple-500/40 text-purple-400"
    },
    {
      title: "Uncompromising Precision",
      desc: "Every recommendation is grounded in empirical telemetry, not arbitrary guesswork.",
      color: "border-emerald-500/40 text-emerald-400"
    },
    {
      title: "Speed to Execution",
      desc: "Delivering board-ready execution playbooks in days rather than traditional 6-month cycles.",
      color: "border-amber-500/40 text-amber-400"
    }
  ];

  return (
    <section id="about" className="relative z-10 py-24 px-4 sm:px-6 lg:px-12 bg-[#021C2A] overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#B0EDF9]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#04344C]/80 border border-[#B0EDF9]/30 rounded-full text-[#B0EDF9] text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md">
            <Compass className="w-4 h-4 text-[#B0EDF9]" />
            Corporate Vision & Global Impact
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-white">
            About StratxceL
          </h2>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            Re-architecting how global enterprises and growth-stage startups formulate, validate, and execute commercial strategy.
          </p>
        </div>

        {/* Impact Metric Cards Grid (Distinct Custom Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((s, idx) => (
            <div key={idx} className="p-6 bg-[#04344C]/50 border border-[#B0EDF9]/20 hover:border-[#B0EDF9]/50 rounded-3xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-[#021C2A] border border-white/10 rounded-2xl w-fit mb-4">
                {s.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white mb-1">{s.number}</div>
              <div className="text-sm font-bold text-[#B0EDF9] mb-1">{s.label}</div>
              <div className="text-xs text-slate-400">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-[#04344C]/60 border border-[#B0EDF9]/20 rounded-2xl backdrop-blur-md">
            <button
              onClick={() => setActiveTab('story')}
              className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-200 ${
                activeTab === 'story' ? 'bg-[#B0EDF9] text-[#04344C] shadow-lg' : 'text-slate-400 hover:text-white'
              }`}
            >
              Our Mission & Story
            </button>
            <button
              onClick={() => setActiveTab('timeline')}
              className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-200 ${
                activeTab === 'timeline' ? 'bg-[#B0EDF9] text-[#04344C] shadow-lg' : 'text-slate-400 hover:text-white'
              }`}
            >
              Company Timeline
            </button>
            <button
              onClick={() => setActiveTab('footprint')}
              className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-200 ${
                activeTab === 'footprint' ? 'bg-[#B0EDF9] text-[#04344C] shadow-lg' : 'text-slate-400 hover:text-white'
              }`}
            >
              Global Footprint
            </button>
          </div>
        </div>

        {/* Tab 1: Story & Core Values Wheel */}
        {activeTab === 'story' && (
          <div className="space-y-12">
            <div className="bg-[#04344C]/70 border border-[#B0EDF9]/30 rounded-3xl p-8 sm:p-10 backdrop-blur-xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Why We Built StratxceL
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Traditional strategy consulting firm engagements take 6 months and cost $250,000+. By the time reports are delivered, market realities have already shifted.
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  We engineered StratxceL to eliminate latency and high costs. Our neural telemetry models ingest real-time market data, while verified senior strategy directors validate the results before board delivery.
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-[#B0EDF9]">
                  <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4" /> 100% Data Backed</span>
                  <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4" /> Senior Advisor Seal</span>
                  <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4" /> 3-Day Turnaround</span>
                </div>
              </div>

              <div className="bg-[#021C2A] border border-white/10 rounded-2xl p-6 space-y-4">
                <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">Vision Target 2030</div>
                <div className="text-2xl font-black text-white">Empowering 1 Million Growth Companies Globally</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Deploying autonomous strategic command networks across 180 countries to equalize competitive opportunities between agile startups and global incumbents.
                </p>
              </div>
            </div>

            {/* Core Values 4-Column Section */}
            <div>
              <h3 className="text-xl font-bold text-center text-white mb-6">Our Operating Principles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {coreValues.map((v, idx) => (
                  <div key={idx} className={`p-6 bg-[#04344C]/40 border ${v.color} rounded-2xl transition-all duration-300 hover:bg-[#04344C]`}>
                    <h4 className="text-base font-bold text-white mb-2">{v.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Timeline Odyssey */}
        {activeTab === 'timeline' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {timeline.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedMilestone(idx)}
                  className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer ${
                    selectedMilestone === idx
                      ? 'bg-[#04344C] border-[#B0EDF9] shadow-[0_0_25px_rgba(176,237,249,0.15)] text-white'
                      : 'bg-[#04344C]/30 border-white/10 hover:border-white/20 text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl font-black text-[#B0EDF9] font-mono">{item.year}</span>
                    <span className="px-3 py-1 bg-[#021C2A] border border-[#B0EDF9]/30 rounded-full text-xs font-bold text-[#B0EDF9]">
                      {item.milestone}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{item.description}</p>
                  <div className="text-[11px] font-mono text-emerald-400 font-bold">Key Metric: {item.stats}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Global Footprint Map & Regional Hubs */}
        {activeTab === 'footprint' && (
          <div className="bg-[#04344C]/60 border border-[#B0EDF9]/30 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-2">Global Operations & Advisor Hubs</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Active telemetry coverage and local strategy advisors across major commercial zones.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {regions.map((r, idx) => (
                <div key={idx} className="p-5 bg-[#021C2A] border border-white/10 hover:border-[#B0EDF9]/40 rounded-2xl transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-base font-bold text-white">{r.name}</h4>
                    <span className="text-xs font-mono font-bold text-emerald-400">{r.growth}</span>
                  </div>
                  <div className="text-xl font-black text-[#B0EDF9] mb-1">{r.clients}</div>
                  <div className="text-xs text-slate-400 font-medium">Active Businesses</div>
                  <div className="mt-3 pt-3 border-t border-white/10 text-[11px] text-slate-300 font-mono">
                    Hubs: {r.hubs}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default About;
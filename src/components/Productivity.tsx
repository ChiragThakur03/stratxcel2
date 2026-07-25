import React, { useState } from 'react';
import { Search, Calendar, MoreHorizontal, Globe, Sparkles, TrendingUp, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Productivity: React.FC = () => {
  const [activeShortcut, setActiveShortcut] = useState<number | null>(null);
  const [selectedTask, setSelectedTask] = useState<number | null>(null);
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  const shortcutKeys = [
    { key: "⌘K", desc: "Open Strategy AI Console" },
    { key: "⇧C", desc: "Connect Live Consultant" },
    { key: "⌥M", desc: "Run Local Market Audit" },
    { key: "⌘S", desc: "Save Active Roadmap" }
  ];

  const calendarTasks = [
    { id: 1, title: "Execute Regional Competitor Audit", tier: "High Priority" },
    { id: 2, title: "Optimize Landing Page Conversion", tier: "Medium Priority" }
  ];

  const vaultFiles = [
    { name: "Market_Audit_Q3.pdf", size: "3.5 MB", type: "PDF" },
    { name: "Automation_GTM_Roadmap.xlsx", size: "1.8 MB", type: "XLS" },
    { name: "Brand_Positioning_Brief.docx", size: "6.2 MB", type: "DOC" }
  ];

  return (
    <section id="productivity" className="relative z-10 py-24 px-6 sm:px-8 lg:px-12 bg-[#021C2A]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center px-4 py-2 bg-[#04344C]/60 backdrop-blur-xl border border-[#B0EDF9]/30 rounded-full text-[#B0EDF9] text-xs font-semibold uppercase tracking-wider mb-6">
            <Globe className="w-4 h-4 mr-2 text-[#B0EDF9]" />
            Unmatched Velocity
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-white">
            Supercharge Strategy
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            StratxceL integrates advanced decision tooling to build, share, and launch growth playbooks at 10x speed.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Command Console (width 5/12) */}
          <div className="lg:col-span-5 h-[400px] glass-card bg-[#04344C]/70 border border-[#B0EDF9]/20 hover:border-[#B0EDF9]/50 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between transition-all">
            
            {/* Top Command Mockup */}
            <div className="bg-[#021C2A]/60 border border-[#B0EDF9]/20 rounded-2xl p-4 backdrop-blur-sm z-10">
              <div className="flex items-center justify-between text-slate-300 text-xs uppercase font-bold tracking-wider mb-3 pb-2 border-b border-[#B0EDF9]/15">
                <span className="flex items-center gap-1.5"><Search className="w-3.5 h-3.5 text-[#B0EDF9]" /> Strategy Shortcuts</span>
                <span className="text-xs bg-[#04344C] px-2 py-0.5 rounded text-[#B0EDF9] border border-[#B0EDF9]/30 font-mono">Connected</span>
              </div>
              
              <div className="space-y-1">
                {shortcutKeys.map((item, idx) => (
                  <div 
                    key={idx}
                    onMouseEnter={() => setActiveShortcut(idx)}
                    onMouseLeave={() => setActiveShortcut(null)}
                    className={`flex items-center justify-between px-3 py-2 rounded-xl transition-all duration-200 cursor-pointer ${
                      activeShortcut === idx ? 'bg-[#B0EDF9]/15 text-[#B0EDF9] border border-[#B0EDF9]/40' : 'bg-transparent text-slate-300 border border-transparent'
                    }`}
                  >
                    <span className="text-xs font-semibold">{item.desc}</span>
                    <span className="text-xs bg-[#021C2A] px-2 py-0.5 rounded text-white font-mono">{item.key}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Content text */}
            <div className="z-10 mt-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-1.5">
                <Sparkles className="w-4 h-4 text-[#B0EDF9]" /> Command Palette Keybinds
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Navigate business intelligence audits instantly. Keyboard layouts ensure low-friction dashboard operations.
              </p>
            </div>
          </div>

          {/* Card 2: Strategy Planner Timeline (width 7/12) */}
          <div className="lg:col-span-7 h-[400px] glass-card bg-[#04344C]/70 border border-[#B0EDF9]/20 hover:border-[#B0EDF9]/50 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between transition-all">
            
            {/* Calendar Mockup */}
            <div className="bg-[#021C2A]/60 border border-[#B0EDF9]/20 rounded-2xl p-4 backdrop-blur-sm z-10 flex flex-col gap-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#B0EDF9]/15">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#04344C] border border-[#B0EDF9]/30 rounded-lg flex items-center justify-center">
                    <Calendar className="w-3.5 h-3.5 text-[#B0EDF9]" />
                  </div>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Roadmap Planner</span>
                </div>
                <span className="text-xs text-slate-300">July 2026</span>
              </div>

              <div className="space-y-2">
                {calendarTasks.map((task) => (
                  <div 
                    key={task.id}
                    onClick={() => setSelectedTask(selectedTask === task.id ? null : task.id)}
                    className={`border border-[#B0EDF9]/30 bg-[#04344C] rounded-xl p-3 cursor-pointer transition-all duration-300 text-slate-200 ${
                      selectedTask === task.id ? 'scale-[1.01] shadow-lg border-[#B0EDF9]' : 'hover:border-[#B0EDF9]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs uppercase font-bold tracking-wider text-[#B0EDF9]">{task.tier}</span>
                      <span className="w-2 h-2 rounded-full bg-[#B0EDF9]" />
                    </div>
                    <p className="text-xs font-semibold">{task.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Content text */}
            <div className="z-10 mt-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-1.5">
                <Calendar className="w-4 h-4 text-[#B0EDF9]" /> Strategy Roadmap Planner
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Track audits, consultant syncs, and roadmap targets dynamically. Keep teams fully aligned on release vectors.
              </p>
            </div>
          </div>

          {/* Card 3: Revenue Index Chart (width 7/12) */}
          <div className="lg:col-span-7 h-[400px] glass-card bg-[#04344C]/70 border border-[#B0EDF9]/20 hover:border-[#B0EDF9]/50 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between transition-all">
            
            {/* Chart Mockup */}
            <div className="bg-[#021C2A]/60 border border-[#B0EDF9]/20 rounded-2xl p-4 backdrop-blur-sm z-10 flex flex-col gap-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#B0EDF9]/15">
                <span className="text-xs font-bold text-white flex items-center gap-2 uppercase tracking-wider">
                  <TrendingUp className="w-3.5 h-3.5 text-[#B0EDF9]" /> Revenue Expansion Index
                </span>
                <span className="text-xs text-slate-300 font-semibold">Current Qtr</span>
              </div>

              {/* Bar Graph Columns */}
              <div className="flex items-end justify-between h-24 pt-2">
                {[55, 75, 45, 90, 60, 85, 70, 95, 65, 80].map((val, idx) => (
                  <div 
                    key={idx} 
                    className="flex-1 flex flex-col items-center gap-1.5 group cursor-pointer"
                    onMouseEnter={() => setHoveredBar(idx)}
                    onMouseLeave={() => setHoveredBar(null)}
                  >
                    <div 
                      className={`w-[70%] rounded-t transition-all duration-300 ${
                        hoveredBar === idx 
                          ? 'bg-[#B0EDF9] shadow-[0_0_15px_rgba(176,237,249,0.5)]' 
                          : 'bg-[#B0EDF9]/20 group-hover:bg-[#B0EDF9]/40'
                      }`}
                      style={{ height: `${val}%` }}
                    />
                    <span className="text-xs text-slate-400 font-mono">M{idx+1}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Content text */}
            <div className="z-10 mt-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-1.5">
                <TrendingUp className="w-4 h-4 text-[#B0EDF9]" /> Real-time Analytics Dashboard
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Consolidate campaign outcomes and pipeline speed. Feed raw sales intelligence directly to model training networks.
              </p>
            </div>
          </div>

          {/* Card 4: Document Vault (width 5/12) */}
          <div className="lg:col-span-5 h-[400px] glass-card bg-[#04344C]/70 border border-[#B0EDF9]/20 hover:border-[#B0EDF9]/50 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between transition-all">
            
            {/* Document Vault Mockup */}
            <div className="bg-[#021C2A]/60 border border-[#B0EDF9]/20 rounded-2xl p-4 backdrop-blur-sm z-10 flex flex-col gap-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#B0EDF9]/15">
                <span className="text-xs font-bold text-white flex items-center gap-2 uppercase tracking-wider">
                  <Shield className="w-3.5 h-3.5 text-[#B0EDF9]" /> Document Vault
                </span>
                <span className="text-xs text-[#B0EDF9] bg-[#04344C] border border-[#B0EDF9]/30 px-2 py-0.5 rounded font-bold uppercase tracking-wider">Encrypted</span>
              </div>

              <div className="space-y-2">
                {vaultFiles.map((file, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-[#04344C]/40 border border-[#B0EDF9]/20 rounded-xl p-2 hover:bg-[#04344C] transition-all">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-[#B0EDF9] text-[#04344C] flex items-center justify-center font-bold text-xs flex-shrink-0">
                        {file.type}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-slate-200 truncate">{file.name}</p>
                        <p className="text-xs text-slate-400">{file.size}</p>
                      </div>
                    </div>
                    <MoreHorizontal className="w-3.5 h-3.5 text-slate-400 cursor-pointer hover:text-white flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            {/* Content text */}
            <div className="z-10 mt-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-1.5">
                <Shield className="w-4 h-4 text-[#B0EDF9]" /> Secure Strategy Vault
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Export high-compliance strategy briefs securely. Share board-ready roadmap documents directly with legal offices.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Productivity;
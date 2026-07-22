import React, { useState } from 'react';
import { Search, X, Calendar, MoreHorizontal, Plus, Globe, Sparkles, TrendingUp, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    { id: 1, title: "Execute Regional Competitor Audit", tier: "High", color: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300" },
    { id: 2, title: "Optimize Landing Page Conversion", tier: "Medium", color: "border-blue-500/30 bg-blue-500/10 text-blue-300" }
  ];

  const vaultFiles = [
    { name: "Market_Audit_Q3.pdf", size: "3.5 MB", type: "PDF", color: "bg-red-500/20 text-red-300" },
    { name: "Automation_GTM_Roadmap.xlsx", size: "1.8 MB", type: "XLS", color: "bg-emerald-500/20 text-emerald-300" },
    { name: "Brand_Positioning_Brief.docx", size: "6.2 MB", type: "DOC", color: "bg-blue-500/20 text-blue-300" }
  ];

  return (
    <section id="productivity" className="relative z-10 py-24 px-6 sm:px-8 lg:px-12 bg-[#06080F]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-full text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <Globe className="w-4 h-4 mr-2 text-emerald-400" />
            Unmatched Velocity
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-white">
            Supercharge Strategy
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            StratXcel integrates advanced tooling to build, share, and launch growth playbooks at 10x speed.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Keyboard Command Console (width 5/12) */}
          <div className="lg:col-span-5 h-[400px] glass-card glass-card-hover rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 via-transparent to-transparent pointer-events-none" />
            
            {/* Top Keyboard Console Mockup */}
            <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-4 backdrop-blur-sm z-10">
              <div className="flex items-center justify-between text-gray-400 text-[10px] uppercase font-bold tracking-wider mb-3 pb-2 border-b border-white/5">
                <span className="flex items-center gap-1.5"><Search className="w-3.5 h-3.5" /> Strategy Shortcuts</span>
                <span className="text-[9px] bg-white/10 px-1.5 py-0.5 rounded text-emerald-400 border border-emerald-500/10 font-mono">Connected</span>
              </div>
              
              <div className="space-y-1">
                {shortcutKeys.map((item, idx) => (
                  <div 
                    key={idx}
                    onMouseEnter={() => setActiveShortcut(idx)}
                    onMouseLeave={() => setActiveShortcut(null)}
                    className={`flex items-center justify-between px-3 py-2 rounded-xl transition-all duration-200 cursor-pointer ${
                      activeShortcut === idx ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20' : 'bg-transparent text-gray-400 border border-transparent'
                    }`}
                  >
                    <span className="text-xs font-semibold">{item.desc}</span>
                    <span className="text-xs bg-white/10 px-2 py-0.5 rounded text-white font-mono">{item.key}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Content text */}
            <div className="z-10 mt-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-1.5">
                <Sparkles className="w-4 h-4 text-emerald-400" /> Command Palette Keybinds
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Navigate business intelligence audits instantly. Keyboard layouts ensure low-friction dashboard operations.
              </p>
            </div>
          </div>

          {/* Card 2: Strategy Planner Timeline (width 7/12) */}
          <div className="lg:col-span-7 h-[400px] glass-card glass-card-cyan-hover rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent pointer-events-none" />

            {/* Calendar Mockup */}
            <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-4 backdrop-blur-sm z-10 flex flex-col gap-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Roadmap Planner</span>
                </div>
                <span className="text-[10px] text-gray-500">July 2026</span>
              </div>

              <div className="space-y-2">
                {calendarTasks.map((task) => (
                  <div 
                    key={task.id}
                    onClick={() => setSelectedTask(selectedTask === task.id ? null : task.id)}
                    className={`border rounded-xl p-3 cursor-pointer transition-all duration-300 ${task.color} ${
                      selectedTask === task.id ? 'scale-[1.01] shadow-lg border-opacity-70' : 'opacity-85 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] uppercase font-bold tracking-wider opacity-85">{task.tier} Priority</span>
                      <span className={`w-1.5 h-1.5 rounded-full ${task.id === 1 ? 'bg-emerald-400' : 'bg-blue-400'}`} />
                    </div>
                    <p className="text-xs font-semibold">{task.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Content text */}
            <div className="z-10 mt-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-1.5">
                <Calendar className="w-4 h-4 text-blue-400" /> Strategy Roadmap Planner
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Track audits, consultant syncs, and roadmap targets dynamically. Keep teams fully aligned on release vectors.
              </p>
            </div>
          </div>

          {/* Card 3: Revenue Index Chart (width 7/12) */}
          <div className="lg:col-span-7 h-[400px] glass-card glass-card-hover rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 via-transparent to-transparent pointer-events-none" />

            {/* Chart Mockup */}
            <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-4 backdrop-blur-sm z-10 flex flex-col gap-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="text-xs font-bold text-white flex items-center gap-2 uppercase tracking-wider">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" /> Revenue Expansion Index
                </span>
                <span className="text-[10px] text-gray-500 font-semibold">Current Qtr</span>
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
                          ? 'bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)]' 
                          : 'bg-white/10 group-hover:bg-white/20'
                      }`}
                      style={{ height: `${val}%` }}
                    />
                    <span className="text-[9px] text-gray-600 font-mono">M{idx+1}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Content text */}
            <div className="z-10 mt-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-1.5">
                <TrendingUp className="w-4 h-4 text-emerald-400" /> Real-time Analytics Dashboard
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Consolidate campaign outcomes and pipeline speed. Feed raw sales intelligence directly to model training networks.
              </p>
            </div>
          </div>

          {/* Card 4: Strategy Document Vault (width 5/12) */}
          <div className="lg:col-span-5 h-[400px] glass-card glass-card-cyan-hover rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent pointer-events-none" />

            {/* Document Vault Mockup */}
            <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-4 backdrop-blur-sm z-10 flex flex-col gap-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="text-xs font-bold text-white flex items-center gap-2 uppercase tracking-wider">
                  <Shield className="w-3.5 h-3.5 text-blue-400" /> Document Vault
                </span>
                <span className="text-[9px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded font-bold uppercase tracking-wider">Encrypted</span>
              </div>

              <div className="space-y-2">
                {vaultFiles.map((file, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-white/[0.01] border border-white/5 rounded-xl p-2 hover:bg-white/[0.04] transition-all">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-[9px] flex-shrink-0 ${file.color}`}>
                        {file.type}
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold text-gray-200 truncate">{file.name}</p>
                        <p className="text-[9px] text-gray-500">{file.size}</p>
                      </div>
                    </div>
                    <MoreHorizontal className="w-3.5 h-3.5 text-gray-500 cursor-pointer hover:text-white flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            {/* Content text */}
            <div className="z-10 mt-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-1.5">
                <Shield className="w-4 h-4 text-blue-400" /> Secure Strategy Vault
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
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
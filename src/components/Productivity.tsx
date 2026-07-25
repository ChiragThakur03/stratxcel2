import React, { useState } from 'react';
import { 
  Terminal, Search, Calendar, Shield, TrendingUp, Sparkles, 
  Globe, Play, CheckCircle2, Lock, Sliders, Cpu, ArrowUpRight, FileText, Download
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Productivity: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'terminal' | 'analytics' | 'vault'>('terminal');
  
  // Terminal Interactive State
  const [selectedCommand, setSelectedCommand] = useState<string>('audit');
  const [terminalOutput, setTerminalOutput] = useState<string>('Executing /audit: Scanning 500+ competitor metrics across regional sectors...');

  // Analytics Slider State
  const [monthlySpend, setMonthlySpend] = useState<number>(5000);

  const commands = [
    { id: 'audit', cmd: '/audit --competitors', label: 'Competitor Audit', desc: 'Scan regional competitors for positioning gaps.' },
    { id: 'forecast', cmd: '/forecast --q4-arr', label: 'ARR Revenue Forecast', desc: 'Predict 12-month ARR trajectories.' },
    { id: 'lead', cmd: '/leads --score-icp', label: 'ICP Lead Scoring', desc: 'Sort incoming pipelines by conversion intent.' },
    { id: 'vault', cmd: '/vault --export-pdf', label: 'Board Playbook Export', desc: 'Generate encrypted executive brief.' }
  ];

  const vaultFiles = [
    { name: "Executive_Strategy_Brief_2026.pdf", size: "4.2 MB", date: "Today, 14:20", type: "PDF", status: "Verified" },
    { name: "Competitor_Matrix_Analysis.xlsx", size: "2.1 MB", date: "Yesterday", type: "XLS", status: "Verified" },
    { name: "Brand_Positioning_Framework.pdf", size: "5.8 MB", date: "2 days ago", type: "PDF", status: "Encrypted" },
    { name: "GTM_Revenue_Model_v3.xlsx", size: "1.4 MB", date: "3 days ago", type: "XLS", status: "Verified" }
  ];

  const handleCommandSelect = (cmdId: string) => {
    setSelectedCommand(cmdId);
    if (cmdId === 'audit') setTerminalOutput('Executing /audit: Scanned 120 regional competitors. Found 3 positioning gaps in Mid-Market SaaS.');
    if (cmdId === 'forecast') setTerminalOutput('Executing /forecast: Computing 12-month trajectory... Estimated ARR expansion +34.2% YoY.');
    if (cmdId === 'lead') setTerminalOutput('Executing /leads: Qualified 1,420 incoming prospects. Top 15% tagged high-intent.');
    if (cmdId === 'vault') setTerminalOutput('Executing /vault: Compiling encrypted PDF brief with signed senior strategist seal.');
  };

  return (
    <section id="productivity" className="relative z-10 py-24 px-4 sm:px-6 lg:px-12 bg-[#021C2A] overflow-hidden">
      
      {/* Ambient Radial Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#B0EDF9]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#04344C]/80 border border-[#B0EDF9]/30 rounded-full text-[#B0EDF9] text-xs font-semibold uppercase tracking-wider mb-6 shadow-md backdrop-blur-md">
            <Cpu className="w-4 h-4 text-[#B0EDF9]" />
            High-Velocity Strategy Command Engine
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-white">
            Command Cockpit & Cockpit Tools
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            Consolidate real-time competitor telemetry, automated lead scoring, and financial modeling into an ultra-fast interactive executive workspace.
          </p>
        </div>

        {/* Workspace Tab Controls */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-[#04344C]/60 border border-[#B0EDF9]/20 rounded-2xl backdrop-blur-md">
            <button
              onClick={() => setActiveTab('terminal')}
              className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2 transition-all duration-200 ${
                activeTab === 'terminal' 
                  ? 'bg-[#B0EDF9] text-[#04344C] shadow-lg' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Terminal className="w-4 h-4" />
              Live Command Terminal
            </button>

            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2 transition-all duration-200 ${
                activeTab === 'analytics' 
                  ? 'bg-[#B0EDF9] text-[#04344C] shadow-lg' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              Interactive ROI Simulator
            </button>

            <button
              onClick={() => setActiveTab('vault')}
              className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2 transition-all duration-200 ${
                activeTab === 'vault' 
                  ? 'bg-[#B0EDF9] text-[#04344C] shadow-lg' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Shield className="w-4 h-4" />
              Encrypted Vault
            </button>
          </div>
        </div>

        {/* Tab 1: Live Command Terminal Interface */}
        {activeTab === 'terminal' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Left Command Selection List */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Available Command Triggers:
              </div>
              {commands.map((c) => {
                const active = selectedCommand === c.id;
                return (
                  <div
                    key={c.id}
                    onClick={() => handleCommandSelect(c.id)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                      active
                        ? 'bg-[#04344C] border-[#B0EDF9] shadow-[0_0_20px_rgba(176,237,249,0.15)] text-white'
                        : 'bg-[#04344C]/30 border-white/10 hover:border-white/20 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono font-bold text-[#B0EDF9] bg-[#021C2A] px-2.5 py-0.5 rounded border border-[#B0EDF9]/20">
                        {c.cmd}
                      </span>
                      {active && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />}
                    </div>
                    <div className="text-sm font-bold text-white mt-2">{c.label}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{c.desc}</div>
                  </div>
                );
              })}
            </div>

            {/* Right Terminal Window */}
            <div className="lg:col-span-7 bg-[#01141F] border border-[#B0EDF9]/30 rounded-3xl p-6 font-mono text-xs flex flex-col justify-between shadow-2xl relative overflow-hidden min-h-[360px]">
              {/* Terminal Title Bar */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-slate-400 text-xs ml-2">stratxcel-cli --console v3.4</span>
                  </div>
                  <span className="text-emerald-400 text-[11px] font-bold">STATUS: CONNECTED</span>
                </div>

                {/* Command Output Log */}
                <div className="space-y-3 text-slate-300">
                  <div className="text-slate-500">&gt; Initializing StratxceL Decision Engine Kernel...</div>
                  <div className="text-slate-500">&gt; Telemetry Stream: ACTIVE [1,240 events/sec]</div>
                  <div className="text-[#B0EDF9] font-bold">
                    &gt; {commands.find(c => c.id === selectedCommand)?.cmd}
                  </div>
                  <div className="p-3 bg-[#04344C]/60 border border-[#B0EDF9]/20 rounded-xl text-white leading-relaxed mt-2">
                    {terminalOutput}
                  </div>
                </div>
              </div>

              {/* Terminal Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-slate-400 text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Ready for input</span>
                </div>
                <span>Press ⌘K to open full console</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 2: Interactive ROI & Revenue Expansion Simulator */}
        {activeTab === 'analytics' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-[#04344C]/60 border border-[#B0EDF9]/30 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Controls & Slider (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h3 className="text-2xl font-black text-white mb-2">Interactive ROI Calculator</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Adjust your monthly growth investment to project 12-month revenue expansion backed by StratxceL automation benchmarks.
                </p>
              </div>

              {/* Slider Component */}
              <div className="p-5 bg-[#021C2A] border border-white/10 rounded-2xl space-y-4">
                <div className="flex justify-between items-center text-xs font-bold text-slate-300">
                  <span>Monthly Growth Investment:</span>
                  <span className="text-base text-[#B0EDF9] font-mono font-black">${monthlySpend.toLocaleString()}</span>
                </div>

                <input
                  type="range"
                  min="1000"
                  max="50000"
                  step="1000"
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#B0EDF9]"
                />

                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>$1,000/mo</span>
                  <span>$50,000/mo</span>
                </div>
              </div>

              {/* Projected Output metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-[#021C2A]/90 border border-emerald-500/30 rounded-2xl">
                  <div className="text-xs text-slate-400 font-medium">Est. 12-Mo Revenue</div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">
                    ${(monthlySpend * 6.5).toLocaleString()}
                  </div>
                </div>

                <div className="p-4 bg-[#021C2A]/90 border border-[#B0EDF9]/30 rounded-2xl">
                  <div className="text-xs text-slate-400 font-medium">Est. Hours Saved</div>
                  <div className="text-xl sm:text-2xl font-black text-[#B0EDF9] font-mono">
                    {Math.round(monthlySpend * 0.12)} hrs/mo
                  </div>
                </div>
              </div>
            </div>

            {/* Right Dynamic Bar Chart Graphic (7 Cols) */}
            <div className="lg:col-span-7 bg-[#021C2A] border border-white/10 rounded-2xl p-6 flex flex-col justify-between min-h-[320px]">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="text-xs font-bold text-white flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#B0EDF9]" /> Projected Revenue Growth Trajectory
                </div>
                <span className="text-[11px] font-mono text-emerald-400 font-bold">+550% Avg ROI</span>
              </div>

              {/* Bar Graph Columns */}
              <div className="flex items-end justify-between h-44 pt-6 gap-2">
                {[30, 45, 60, 75, 90, 110, 135, 160, 190, 220, 260, 310].map((multiplier, idx) => {
                  const barHeight = Math.min(100, (monthlySpend / 50000) * 30 + (multiplier / 310) * 70);
                  return (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                      <div 
                        className="w-full bg-gradient-to-t from-[#04344C] via-[#B0EDF9] to-cyan-300 rounded-t transition-all duration-300 group-hover:brightness-125"
                        style={{ height: `${barHeight}%` }}
                      />
                      <span className="text-[10px] text-slate-500 font-mono">M{idx + 1}</span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-white/10 flex justify-between items-center text-[11px] text-slate-400">
                <span>Model Target: Seed to Series B Scale</span>
                <span className="text-[#B0EDF9] font-bold">100% Backed by Verified Telemetry</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 3: Encrypted Document Vault */}
        {activeTab === 'vault' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-[#04344C]/60 border border-[#B0EDF9]/30 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Lock className="w-5 h-5 text-[#B0EDF9]" /> Encrypted Strategy Asset Vault
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  All generated roadmaps and auditor briefs are encrypted with bank-grade 256-bit AES protection.
                </p>
              </div>

              <span className="px-3 py-1.5 bg-[#021C2A] border border-[#B0EDF9]/30 rounded-xl text-xs font-bold text-[#B0EDF9] flex items-center gap-2 self-start sm:self-auto">
                <Shield className="w-4 h-4 text-emerald-400" /> SOC-2 Type II Certified
              </span>
            </div>

            {/* File List Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {vaultFiles.map((file, idx) => (
                <div key={idx} className="p-4 bg-[#021C2A] border border-white/10 hover:border-[#B0EDF9]/40 rounded-2xl transition-all flex items-center justify-between group">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#04344C] border border-[#B0EDF9]/30 text-[#B0EDF9] flex items-center justify-center font-bold text-xs flex-shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-white truncate group-hover:text-[#B0EDF9] transition-colors">{file.name}</div>
                      <div className="text-[11px] text-slate-400 flex items-center gap-2 mt-0.5">
                        <span>{file.size}</span>
                        <span>•</span>
                        <span>{file.date}</span>
                      </div>
                    </div>
                  </div>

                  <button className="p-2 bg-white/5 border border-white/10 hover:bg-[#B0EDF9] hover:text-[#04344C] rounded-xl transition-all text-white active:scale-95 flex-shrink-0">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default Productivity;
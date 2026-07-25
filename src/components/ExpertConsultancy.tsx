import React, { useState } from 'react';
import { 
  Users, Brain, Target, Award, ArrowRight, Star, CheckCircle, 
  Calendar, MessageCircle, Zap, TrendingUp, ShieldCheck, Clock, Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ExpertConsultancy: React.FC = () => {
  const [selectedExpertIndex, setSelectedExpertIndex] = useState<number>(0);
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);

  const experts = [
    {
      id: 0,
      name: "Dr. Sarah Chen",
      role: "AI Strategy Director",
      background: "Ex-McKinsey Principal",
      experience: "15+ Years",
      status: "Available Today",
      statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      avatar: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["AI Telemetry Architecture", "Process Automation", "Corporate M&A Strategy"],
      rating: 4.9,
      auditsCompleted: 520,
      bio: "Spearheaded digital transformation initiatives for Fortune 500 enterprises and hyper-growth AI startups globally."
    },
    {
      id: 1,
      name: "Marcus Rodriguez",
      role: "Growth Engineering Lead",
      background: "Ex-Sequoia Portfolio Lead",
      experience: "12+ Years",
      status: "Available 14:00 EST",
      statusColor: "text-[#B0EDF9] bg-[#04344C] border-[#B0EDF9]/30",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["LTV:CAC Optimization", "GTM Funnel Scaling", "Outbound Automation"],
      rating: 4.8,
      auditsCompleted: 430,
      bio: "Specializes in converting raw AI competitive research into high-velocity outbound sales and GTM engines."
    },
    {
      id: 2,
      name: "Dr. Emily Watson",
      role: "Market Intelligence Director",
      background: "Ex-BCG Senior Partner",
      experience: "18+ Years",
      status: "Available Tomorrow",
      statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
      avatar: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["Predictive Forecasting", "Regional Market Audits", "Pricing Strategy"],
      rating: 4.9,
      auditsCompleted: 680,
      bio: "Decodes complex market shifts using quantitative telemetry modeling and qualitative executive interviews."
    },
    {
      id: 3,
      name: "James Thompson",
      role: "Operations Strategy Director",
      background: "Ex-Bain Advisory Lead",
      experience: "14+ Years",
      status: "Available Today",
      statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["Process Re-engineering", "Unit Economics", "Board Deck Preparation"],
      rating: 4.7,
      auditsCompleted: 390,
      bio: "Streamlines backend corporate execution models to maximize operating margins and team velocity."
    }
  ];

  const currentExpert = experts[selectedExpertIndex];

  const handleBookSession = () => {
    setBookingSuccess(true);
    setTimeout(() => setBookingSuccess(false), 4000);
  };

  return (
    <section id="expert-consultancy" className="relative z-10 py-24 px-4 sm:px-6 lg:px-12 bg-[#021C2A] overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#B0EDF9]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#04344C]/80 border border-[#B0EDF9]/30 rounded-full text-[#B0EDF9] text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md">
            <Users className="w-4 h-4 text-[#B0EDF9]" />
            Human Advisory Network
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-white">
            Senior Strategy Advisor Roster
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            Every AI telemetry playbook generated on StratxceL can be validated 1-on-1 with verified senior strategy directors from top-tier consulting backgrounds.
          </p>
        </div>

        {/* Advisor Roster Grid & Detail Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Roster List (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              <span>Select Strategy Advisor:</span>
              <span>4 Senior Directors Online</span>
            </div>

            {experts.map((exp, idx) => {
              const active = selectedExpertIndex === idx;
              return (
                <div
                  key={exp.id}
                  onClick={() => setSelectedExpertIndex(idx)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 flex items-center justify-between group ${
                    active
                      ? 'bg-[#04344C] border-[#B0EDF9] shadow-[0_0_25px_rgba(176,237,249,0.2)] text-white'
                      : 'bg-[#04344C]/30 border-white/10 hover:border-white/30 hover:bg-[#04344C]/60 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={exp.avatar}
                        alt={exp.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-[#B0EDF9]/40"
                      />
                      <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-[#021C2A]" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-extrabold text-white">{exp.name}</h3>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#021C2A] text-[#B0EDF9] border border-[#B0EDF9]/20 font-mono">
                          {exp.background}
                        </span>
                      </div>

                      <div className="text-xs text-[#B0EDF9] font-bold mt-0.5">{exp.role}</div>

                      <div className="flex items-center gap-3 text-xs text-slate-400 mt-1 font-medium">
                        <span>{exp.experience} Exp</span>
                        <span>•</span>
                        <span>{exp.auditsCompleted}+ Audits</span>
                        <span>•</span>
                        <span className="text-amber-400 font-bold">★ {exp.rating}</span>
                      </div>
                    </div>
                  </div>

                  <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${
                    active ? 'translate-x-1 text-[#B0EDF9]' : 'text-slate-500 group-hover:text-white'
                  }`} />
                </div>
              );
            })}
          </div>

          {/* Right Advisor Inspector Card (5 Cols) */}
          <div className="lg:col-span-5 bg-[#04344C]/80 border border-[#B0EDF9]/40 rounded-3xl p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between shadow-2xl relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentExpert.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Advisor Bio Header */}
                <div className="flex items-start gap-4">
                  <img
                    src={currentExpert.avatar}
                    alt={currentExpert.name}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-[#B0EDF9] shadow-lg"
                  />
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold border mb-1.5 ${currentExpert.statusColor}">
                      <Clock className="w-3 h-3" />
                      <span>{currentExpert.status}</span>
                    </div>
                    <h3 className="text-xl font-black text-white">{currentExpert.name}</h3>
                    <div className="text-xs font-bold text-[#B0EDF9]">{currentExpert.role}</div>
                  </div>
                </div>

                {/* Quote Box */}
                <div className="p-4 bg-[#021C2A] border border-white/10 rounded-2xl text-xs text-slate-300 leading-relaxed italic">
                  "{currentExpert.bio}"
                </div>

                {/* Specialties Tags */}
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Core Focus Areas:</div>
                  <div className="flex flex-wrap gap-2">
                    {currentExpert.specialties.map((spec, idx) => (
                      <span key={idx} className="px-3 py-1 bg-[#021C2A] border border-[#B0EDF9]/30 rounded-xl text-xs text-[#B0EDF9] font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Booking Button */}
                <button
                  onClick={handleBookSession}
                  className="w-full py-4 bg-[#B0EDF9] hover:bg-white text-[#04344C] font-black uppercase tracking-wider text-xs rounded-xl shadow-lg shadow-[#B0EDF9]/20 transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book 30-Min Strategy Audit Session</span>
                </button>

                {bookingSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-emerald-500/20 border border-emerald-500/40 rounded-xl text-center text-xs font-bold text-emerald-400"
                  >
                    🎉 Audit session requested! Our team will contact you within 15 minutes.
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ExpertConsultancy;
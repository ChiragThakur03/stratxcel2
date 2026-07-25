import React, { useState } from 'react';
import { Users, Brain, Target, Award, ArrowRight, Star, CheckCircle, Calendar, MessageCircle, Zap, TrendingUp, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ExpertConsultancy: React.FC = () => {
  const [activeExpert, setActiveExpert] = useState(0);

  const experts = [
    {
      name: "Dr. Sarah Chen",
      role: "AI Strategy Director",
      expertise: "Machine Learning & Market Telemetry",
      experience: "15+ years",
      avatar: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["AI Architecture", "Data Telemetry", "Process Automation"],
      rating: 4.9,
      consultations: 500,
      bio: "Former McKinsey lead directing AI transformation initiatives for growth-stage startups and enterprise organizations."
    },
    {
      name: "Marcus Rodriguez",
      role: "Business Transformation Lead",
      expertise: "Digital Transformation & Scale Strategy",
      experience: "12+ years",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["Growth Engineering", "Market Expansion", "Executive Advisory"],
      rating: 4.8,
      consultations: 420,
      bio: "Specializes in turning complex AI business analytics into high-impact operational playbooks."
    },
    {
      name: "Dr. Emily Watson",
      role: "Competitive Intelligence Strategist",
      expertise: "Consumer Dynamics & Predictive Analytics",
      experience: "18+ years",
      avatar: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["Predictive Forecasting", "Behavioral Intelligence", "Trend Auditing"],
      rating: 4.9,
      consultations: 650,
      bio: "Uncovers untapped market opportunities using quantitative research and predictive AI models."
    },
    {
      name: "James Thompson",
      role: "Operations Optimization Specialist",
      expertise: "Operational Execution & Efficiency",
      experience: "14+ years",
      avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["Process Mapping", "KPI Benchmarking", "Resource Allocation"],
      rating: 4.7,
      consultations: 380,
      bio: "Transforms backend workflows into scalable execution systems using lean methodology and automated triggers."
    }
  ];

  const services = [
    {
      icon: <Brain className="w-6 h-6 text-[#B0EDF9]" />,
      title: "Strategic AI Planning",
      description: "Custom business strategy roadmaps backed by real-time market telemetry and AI forecasting models.",
      features: ["Competitive Radar", "Predictive Modeling", "Growth Playbook"]
    },
    {
      icon: <Target className="w-6 h-6 text-[#B0EDF9]" />,
      title: "Market Intelligence Audits",
      description: "Deep-dive competitive positioning analysis to capture untapped market share.",
      features: ["TAM/SAM Modeling", "Competitor Pivots", "Target Persona Insights"]
    },
    {
      icon: <Users className="w-6 h-6 text-[#B0EDF9]" />,
      title: "Executive Advisory",
      description: "1-on-1 strategy sessions with senior consultants to validate board reports and growth targets.",
      features: ["Board Deck Reviews", "Capital Allocation", "Performance Coaching"]
    },
    {
      icon: <Award className="w-6 h-6 text-[#B0EDF9]" />,
      title: "Operations Optimization",
      description: "Systematic operational workflows to maximize margin velocity and team throughput.",
      features: ["KPI Benchmarking", "Workflow Automation", "Unit Economics"]
    }
  ];

  const stats = [
    { number: "500+", label: "Strategy Audits", icon: <CheckCircle className="w-4 h-4 text-[#B0EDF9]" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="w-4 h-4 text-[#B0EDF9]" /> },
    { number: "15+", label: "Avg Advisor Exp", icon: <TrendingUp className="w-4 h-4 text-[#B0EDF9]" /> },
    { number: "24/7", label: "Executive Support", icon: <ShieldCheck className="w-4 h-4 text-[#B0EDF9]" /> }
  ];

  return (
    <section id="expert-consultancy" className="relative z-10 py-24 px-6 sm:px-8 lg:px-12 bg-[#021C2A]">
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#B0EDF9]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-[#04344C]/60 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        
        {/* Header */}
        <motion.div
          className="text-center mb-20 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-[#04344C]/60 backdrop-blur-xl border border-[#B0EDF9]/30 rounded-full text-[#B0EDF9] text-xs font-semibold uppercase tracking-wider mb-6">
            <Users className="w-4 h-4 mr-2 text-[#B0EDF9]" />
            Human Advisory Network
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-white">
            Expert Consultancy Hub
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-12">
            Pair cutting-edge AI strategy telemetry with senior management consultants for flawless execution.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl bg-[#04344C]/80 border border-[#B0EDF9]/30 rounded-3xl p-6 backdrop-blur-xl">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white mb-1">{stat.number}</div>
                <div className="text-[#B0EDF9] text-xs font-semibold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Expert Selector Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-24">
          
          {/* List of Experts (width 7/12) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Star className="w-4 h-4 text-[#B0EDF9] fill-current" /> Verified Senior Strategists
            </h3>
            {experts.map((expert, index) => {
              const active = activeExpert === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveExpert(index)}
                  className={`relative p-5 rounded-2xl border cursor-pointer transition-all duration-300 flex items-center justify-between ${
                    active 
                      ? 'bg-[#04344C] border-[#B0EDF9] shadow-[0_0_30px_rgba(176,237,249,0.2)]' 
                      : 'bg-[#04344C]/40 border-[#B0EDF9]/20 hover:bg-[#04344C]/70 hover:border-[#B0EDF9]/40'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={expert.avatar}
                        alt={expert.name}
                        className="w-14 h-14 rounded-full object-cover border border-[#B0EDF9]/40"
                      />
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#B0EDF9] rounded-full border-2 border-[#021C2A]" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-0.5">{expert.name}</h4>
                      <p className="text-[#B0EDF9] text-xs font-bold uppercase tracking-wider">{expert.role}</p>
                      <div className="flex items-center gap-3 text-xs text-slate-300 font-semibold mt-1">
                        <span>{expert.experience} Exp</span>
                        <span>•</span>
                        <span>{expert.consultations}+ Audits Completed</span>
                      </div>
                    </div>
                  </div>
                  <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${
                    active ? 'rotate-90 text-[#B0EDF9]' : 'text-slate-400'
                  }`} />
                </div>
              );
            })}
          </div>

          {/* Expert Detail Card (width 5/12) */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExpert}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-card bg-[#04344C] border border-[#B0EDF9]/30 rounded-3xl p-6 flex flex-col justify-between"
              >
                <div className="text-center mb-6">
                  <div className="relative inline-block mb-4">
                    <img
                      src={experts[activeExpert].avatar}
                      alt={experts[activeExpert].name}
                      className="w-20 h-20 rounded-full object-cover border border-[#B0EDF9] shadow-xl"
                    />
                    <div className="absolute top-0 right-0 bg-[#B0EDF9] rounded-full p-1 text-[#04344C]">
                      <Star className="w-3.5 h-3.5 fill-current" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-0.5">{experts[activeExpert].name}</h4>
                  <span className="text-xs font-semibold text-[#B0EDF9] uppercase tracking-wider">{experts[activeExpert].expertise}</span>
                  
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mt-4 bg-[#021C2A]/60 border border-[#B0EDF9]/20 p-4 rounded-2xl">
                    "{experts[activeExpert].bio}"
                  </p>
                </div>

                <div className="mb-6">
                  <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">Specialized Focus</h5>
                  <div className="flex flex-wrap gap-2">
                    {experts[activeExpert].specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#021C2A] border border-[#B0EDF9]/40 rounded-full text-[#B0EDF9] text-xs font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => window.open('https://stratxcel.ai', '_blank')}
                  className="w-full py-4 bg-[#B0EDF9] hover:bg-white text-[#04344C] font-bold uppercase tracking-wider text-xs rounded-xl hover:shadow-lg hover:shadow-[#B0EDF9]/30 flex items-center justify-center gap-2 active:scale-95 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  Book Strategy Audit Session
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Goals Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-extrabold text-white tracking-tight mb-4">
              Strategic Target Services
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              Custom strategic execution playbooks tailored to your organization's goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative glass-card bg-[#04344C]/70 border border-[#B0EDF9]/20 hover:border-[#B0EDF9]/50 rounded-3xl p-6 flex flex-col justify-between overflow-hidden transition-all duration-300"
              >
                <div className="relative z-10">
                  <div className="w-11 h-11 bg-[#021C2A] border border-[#B0EDF9]/30 rounded-xl flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#B0EDF9] transition-colors">
                    {service.title}
                  </h4>
                  
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="px-2.5 py-1 bg-[#021C2A]/60 border border-[#B0EDF9]/20 rounded-full text-xs text-[#B0EDF9] font-semibold uppercase tracking-wider">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Card Section */}
        <motion.div
          className="relative glass-card bg-[#04344C] border border-[#B0EDF9]/40 rounded-3xl p-10 text-center overflow-hidden flex flex-col items-center shadow-[0_0_50px_rgba(176,237,249,0.15)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="relative z-10 max-w-2xl flex flex-col items-center">
            <div className="inline-flex items-center px-4 py-2 bg-[#021C2A] border border-[#B0EDF9]/30 rounded-full text-[#B0EDF9] text-xs font-semibold uppercase tracking-wider mb-6">
              <Zap className="w-4 h-4 mr-2 text-[#B0EDF9]" />
              Immediate Execution
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
              Start Your Strategy Audit
            </h3>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              Book a complimentary 30-minute consultation with a senior strategist to review your custom AI strategy output.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button 
                className="group px-8 py-4 bg-[#B0EDF9] hover:bg-white text-[#04344C] font-bold uppercase tracking-wider rounded-xl hover:shadow-lg hover:shadow-[#B0EDF9]/30 transition-all flex items-center justify-center gap-2 text-xs active:scale-95"
                onClick={() => window.open('https://stratxcel.ai', '_blank')}
              >
                <Calendar className="w-4 h-4" />
                <span>Book Strategy Session</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => window.open('https://stratxcel.ai', '_blank')}
                className="px-8 py-4 bg-[#021C2A]/60 border border-[#B0EDF9]/30 text-[#B0EDF9] hover:text-white font-bold uppercase tracking-wider rounded-xl hover:bg-[#021C2A] transition-all text-xs flex items-center justify-center gap-2 active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message Advisor</span>
              </button>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-slate-300 font-semibold">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#B0EDF9]" />
                Free Initial Audit
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#B0EDF9]" />
                No commitments
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#B0EDF9]" />
                30m Executive Review
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ExpertConsultancy;
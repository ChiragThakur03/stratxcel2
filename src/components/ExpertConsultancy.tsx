import React, { useState } from 'react';
import { Users, Brain, Target, Award, ArrowRight, Star, CheckCircle, Calendar, MessageCircle, Zap, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ExpertConsultancy: React.FC = () => {
  const [activeExpert, setActiveExpert] = useState(0);

  const experts = [
    {
      name: "Dr. Sarah Chen",
      role: "AI Strategy Director",
      expertise: "Machine Learning & Business Intelligence",
      experience: "15+ years",
      avatar: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["AI Implementation", "Data Analytics", "Process Automation"],
      rating: 4.9,
      consultations: 500,
      bio: "Leading AI transformation initiatives for Fortune 500 companies with a proven track record in scaling intelligent systems."
    },
    {
      name: "Marcus Rodriguez",
      role: "Business Transformation Lead",
      expertise: "Digital Transformation & Growth Strategy",
      experience: "12+ years",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["Digital Strategy", "Market Expansion", "Team Leadership"],
      rating: 4.8,
      consultations: 420,
      bio: "Specialized in guiding businesses through digital transformation with a focus on sustainable growth and innovation."
    },
    {
      name: "Dr. Emily Watson",
      role: "Market Research Specialist",
      expertise: "Consumer Behavior & Market Analysis",
      experience: "18+ years",
      avatar: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["Market Research", "Consumer Psychology", "Trend Analysis"],
      rating: 4.9,
      consultations: 650,
      bio: "Expert in uncovering market opportunities through advanced research methodologies and behavioral analysis."
    },
    {
      name: "James Thompson",
      role: "Operations Optimization Expert",
      expertise: "Process Improvement & Efficiency",
      experience: "14+ years",
      avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["Process Optimization", "Lean Management", "Quality Systems"],
      rating: 4.7,
      consultations: 380,
      bio: "Transforming business operations through systematic process improvements and efficiency optimization strategies."
    }
  ];

  const services = [
    {
      icon: <Brain className="w-6 h-6 text-blue-400" />,
      title: "Strategic Planning",
      description: "Comprehensive business strategy development with AI-powered insights and market intelligence.",
      features: ["SWOT Analysis", "Competitive Intelligence", "Growth Roadmap"],
      color: "from-blue-500/20 to-cyan-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      icon: <Target className="w-6 h-6 text-purple-400" />,
      title: "Market Analysis",
      description: "Deep-dive market research and competitive intelligence for informed decision making.",
      features: ["Market Sizing", "Competitor Analysis", "Customer Insights"],
      color: "from-purple-500/20 to-pink-500/10",
      borderColor: "border-purple-500/20"
    },
    {
      icon: <Users className="w-6 h-6 text-emerald-400" />,
      title: "Team Training",
      description: "Comprehensive workshops and training sessions for leadership and operational teams.",
      features: ["Leadership Development", "Skill Assessment", "Performance Coaching"],
      color: "from-emerald-500/20 to-teal-500/10",
      borderColor: "border-emerald-500/20"
    },
    {
      icon: <Award className="w-6 h-6 text-amber-400" />,
      title: "Operations Optimization",
      description: "Data-driven recommendations and implementation support for operational excellence.",
      features: ["KPI Development", "Process Mapping", "Efficiency Metrics"],
      color: "from-amber-500/20 to-red-500/10",
      borderColor: "border-amber-500/20"
    }
  ];

  const stats = [
    { number: "500+", label: "Completed Projects", icon: <CheckCircle className="w-4 h-4" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="w-4 h-4" /> },
    { number: "15+", label: "Years Experience", icon: <TrendingUp className="w-4 h-4" /> },
    { number: "24/7", label: "Executive Support", icon: <MessageCircle className="w-4 h-4" /> }
  ];

  return (
    <section id="expert-consultancy" className="relative z-10 py-24 px-6 sm:px-8 lg:px-12 bg-[#06080F]">
      {/* Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-emerald-950/5 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-blue-950/5 rounded-full blur-[130px]" />
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
          <div className="inline-flex items-center px-4 py-2 bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-full text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <Users className="w-4 h-4 mr-2 text-emerald-400" />
            Human Expertise
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-white">
            Expert Consultancy
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-12">
            Decades of senior consulting experience paired with state-of-the-art AI systems for peak organization execution.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl bg-white/[0.02] border border-white/[0.06] rounded-3xl p-6 backdrop-blur-md">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2 text-emerald-400">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">{stat.number}</div>
                <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Expert Selector Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-24">
          
          {/* List of experts (width 7/12) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Star className="w-4 h-4 text-emerald-400 fill-current" /> Select a Senior Consultant
            </h3>
            {experts.map((expert, index) => {
              const active = activeExpert === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveExpert(index)}
                  className={`relative p-5 rounded-2xl border cursor-pointer transition-all duration-300 flex items-center justify-between ${
                    active 
                      ? 'bg-[#0d1814] border-emerald-500/40 shadow-[0_10px_30px_rgba(16,185,129,0.05)]' 
                      : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={expert.avatar}
                        alt={expert.name}
                        className="w-14 h-14 rounded-full object-cover border border-white/10"
                      />
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#06080F]" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-0.5">{expert.name}</h4>
                      <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider">{expert.role}</p>
                      <div className="flex items-center gap-3 text-[10px] text-gray-500 font-semibold mt-1">
                        <span>{expert.experience} Exp</span>
                        <span>•</span>
                        <span>{expert.consultations}+ Audits</span>
                      </div>
                    </div>
                  </div>
                  <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${
                    active ? 'rotate-90 text-emerald-400' : 'text-gray-600'
                  }`} />
                </div>
              );
            })}
          </div>

          {/* Expert detail preview card (width 5/12) */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExpert}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-3xl p-6 flex flex-col justify-between border-emerald-500/20"
              >
                <div className="text-center mb-6">
                  <div className="relative inline-block mb-4">
                    <img
                      src={experts[activeExpert].avatar}
                      alt={experts[activeExpert].name}
                      className="w-20 h-20 rounded-full object-cover border border-emerald-500/30 shadow-xl"
                    />
                    <div className="absolute top-0 right-0 bg-emerald-500/10 border border-emerald-500/30 rounded-full p-1 text-emerald-400">
                      <Star className="w-3.5 h-3.5 fill-current" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-0.5">{experts[activeExpert].name}</h4>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{experts[activeExpert].expertise}</span>
                  
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-4 bg-white/[0.01] border border-white/[0.04] p-4 rounded-2xl">
                    "{experts[activeExpert].bio}"
                  </p>
                </div>

                <div className="mb-6">
                  <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">Expertise Focus</h5>
                  <div className="flex flex-wrap gap-2">
                    {experts[activeExpert].specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-300 text-xs font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => window.open('https://stratxcel.ai', '_blank')}
                  className="w-full py-3 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-emerald-500/15 flex items-center justify-center gap-2 text-sm active:scale-98 transition-all"
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
              Strategic Target Goals
            </h3>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
              We structure custom playbooks to hit key metrics across core functional areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative glass-card glass-card-hover rounded-3xl p-6 flex flex-col justify-between overflow-hidden"
              >
                <div 
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-20 group-hover:opacity-45"
                  style={{
                    background: `radial-gradient(circle at 10% 10%, rgba(16, 185, 129, 0.15), transparent 30%)`
                  }}
                />
                
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-white/[0.02] border border-white/[0.08] rounded-xl flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h4>
                  
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="px-2.5 py-0.5 bg-white/[0.02] border border-white/5 rounded-full text-[10px] text-gray-500 font-semibold uppercase tracking-wider">
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
          className="relative glass-card border-emerald-500/20 rounded-3xl p-10 text-center overflow-hidden flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 opacity-10 bg-gradient-to-tr from-emerald-500 to-blue-500 blur-2xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl flex flex-col items-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/[0.03] border border-white/[0.08] rounded-full text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Scale Velocity
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
              Start Your Strategy Audit
            </h3>
            
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
              Book a complimentary 30-minute session with a verified industry strategist to review your custom AI roadmap outputs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button 
                className="group px-6 py-3 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-emerald-500/15 transition-all flex items-center justify-center gap-2 text-sm active:scale-98"
                onClick={() => window.open('https://stratxcel.ai', '_blank')}
              >
                <Calendar className="w-4 h-4" />
                <span>Book Strategy Session</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-6 py-3 bg-white/[0.04] border border-white/[0.08] text-gray-300 hover:text-white font-bold rounded-xl hover:bg-white/[0.08] transition-all text-sm flex items-center justify-center gap-2 active:scale-98">
                <MessageCircle className="w-4 h-4" />
                <span>Message Analyst</span>
              </button>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-gray-500 font-semibold">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                Free Initial Audit
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                No commitments
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                30m Strategic review
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ExpertConsultancy;
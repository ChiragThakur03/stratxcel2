import React, { useState } from 'react';
import { Target, Users, Lightbulb, TrendingUp, Award, Globe, Calendar, Rocket, Shield, Star, CheckCircle, ArrowRight, Play, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const values = [
    {
      icon: <Target className="w-6 h-6 text-[#B0EDF9]" />,
      title: "Mission-Driven Excellence",
      description: "We're committed to democratizing strategic business intelligence through AI innovation, making world-class consulting accessible to every business.",
      features: ["Strategic Focus", "Global Impact", "Innovation Leadership"]
    },
    {
      icon: <Users className="w-6 h-6 text-[#B0EDF9]" />,
      title: "Human-Centered Design",
      description: "Technology serves people. Our AI enhances human decision-making while preserving senior executive wisdom.",
      features: ["User Experience", "Empathy First", "Human Insight"]
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-[#B0EDF9]" />,
      title: "Innovation First",
      description: "We continuously push the boundaries of what's possible in AI-powered business strategy, staying ahead of industry trends.",
      features: ["Cutting Edge Tech", "Research & Development", "Future Ready"]
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#B0EDF9]" />,
      title: "Results Focused",
      description: "Every recommendation is designed to drive measurable business growth and success, with clear KPIs and actionable insights.",
      features: ["Measurable Impact", "ROI Driven", "Success Metrics"]
    }
  ];

  const stats = [
    { 
      number: "50K+", 
      label: "Businesses Served",
      icon: <Users className="w-6 h-6 text-[#B0EDF9]" />,
      description: "Companies transformed globally"
    },
    { 
      number: "95%", 
      label: "Client Satisfaction",
      icon: <Star className="w-6 h-6 text-[#B0EDF9]" />,
      description: "Average satisfaction rating"
    },
    { 
      number: "$2.5B+", 
      label: "Revenue Generated",
      icon: <TrendingUp className="w-6 h-6 text-[#B0EDF9]" />,
      description: "Total client revenue impact"
    },
    { 
      number: "150+", 
      label: "Countries Reached",
      icon: <Globe className="w-6 h-6 text-[#B0EDF9]" />,
      description: "Global market presence"
    }
  ];

  const timeline = [
    {
      year: "2019",
      title: "Foundation",
      description: "StratxceL was founded with a vision to democratize business consulting through AI innovation.",
      milestone: "Company Launch"
    },
    {
      year: "2020",
      title: "AI Development",
      description: "Launched our first AI-powered business analysis platform, serving 1,000+ early adopters.",
      milestone: "Product Launch"
    },
    {
      year: "2021",
      title: "Global Expansion",
      description: "Expanded to 50+ countries and introduced localized market intelligence for international markets.",
      milestone: "International Growth"
    },
    {
      year: "2022",
      title: "Expert Network",
      description: "Built our expert consultant network, combining AI insights with senior human expertise.",
      milestone: "Human + AI Integration"
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Received multiple awards for AI innovation and helped 25,000+ businesses achieve growth.",
      milestone: "Market Leadership"
    },
    {
      year: "2024",
      title: "Future Vision",
      description: "Continuing to innovate with advanced AI telemetry and expanding our global impact.",
      milestone: "Innovation Leader"
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-7 h-7 text-[#B0EDF9]" />,
      title: "AI Innovation Award",
      year: "2024",
      organization: "Tech Excellence Awards"
    },
    {
      icon: <Rocket className="w-7 h-7 text-[#B0EDF9]" />,
      title: "Fastest Growing AI Company",
      year: "2023",
      organization: "Business Growth Awards"
    },
    {
      icon: <Shield className="w-7 h-7 text-[#B0EDF9]" />,
      title: "Best Business Intelligence Platform",
      year: "2023",
      organization: "Industry Choice Awards"
    },
    {
      icon: <Star className="w-7 h-7 text-[#B0EDF9]" />,
      title: "Customer Excellence Award",
      year: "2022",
      organization: "Service Quality Institute"
    }
  ];

  const tabs = ["Our Story", "Timeline", "Achievements"];

  return (
    <section id="about" className="relative z-10 py-24 px-6 sm:px-8 lg:px-12 bg-[#021C2A]">
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
            <Globe className="w-4 h-4 mr-2 text-[#B0EDF9]" />
            Our Story & Vision
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-white">
            About StratxceL
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed mb-8">
            We're on a mission to democratize strategic business intelligence, making world-class consulting accessible to every business through the transformative power of AI innovation.
          </p>

          <button
            onClick={() => window.open('https://stratxcel.ai', '_blank')}
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#B0EDF9] text-[#04344C] font-bold rounded-xl text-xs uppercase tracking-wider hover:bg-white transition-all shadow-md active:scale-95"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Watch Our Story</span>
          </button>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#04344C]/70 border border-[#B0EDF9]/20 hover:border-[#B0EDF9]/50 rounded-3xl p-6 text-center transition-all"
            >
              <div className="inline-flex p-3 rounded-2xl bg-[#021C2A] border border-[#B0EDF9]/30 mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-black text-white mb-1">
                {stat.number}
              </div>
              <div className="text-sm font-bold text-[#B0EDF9] mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-300">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Tabbed Content */}
        <div className="mb-24">
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-[#04344C] border border-[#B0EDF9]/30 p-1.5 rounded-2xl">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    activeTab === index
                      ? 'bg-[#B0EDF9] text-[#04344C] shadow-md'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="min-h-[450px]">
            {activeTab === 0 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Transforming Business Strategy
                  </h3>
                  <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                    <p>
                      Founded in 2019, StratxceL emerged from a simple yet powerful observation: traditional business consulting was too expensive, too slow, and too exclusive for the majority of businesses that needed strategic guidance.
                    </p>
                    <p>
                      Our founders, a team of seasoned consultants and AI researchers, envisioned a world where every business—from startups to enterprises—could access world-class strategic insights powered by artificial intelligence.
                    </p>
                    <p>
                      Today, we combine cutting-edge AI telemetry with senior human expertise to deliver data-driven, contextually aware strategies. We've helped over 50,000 businesses across 150+ countries achieve sustainable growth.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-6 mt-8">
                    <div className="flex items-center gap-2 text-[#B0EDF9]">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-xs font-semibold">AI-Powered Insights</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#B0EDF9]">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-xs font-semibold">Human Expertise</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#B0EDF9]">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-xs font-semibold">Global Reach</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#04344C] border border-[#B0EDF9]/30 rounded-3xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#021C2A] border border-[#B0EDF9]/30 rounded-2xl flex items-center justify-center">
                      <Eye className="w-6 h-6 text-[#B0EDF9]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">Our Vision</h4>
                      <p className="text-xs text-[#B0EDF9]">Shaping the future of business intelligence</p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    To become the global leader in AI-powered business intelligence, empowering every organization to make data-driven decisions and achieve sustainable growth.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-[#021C2A] border border-[#B0EDF9]/20 rounded-xl">
                      <div className="text-2xl font-bold text-[#B0EDF9]">2030</div>
                      <div className="text-xs text-slate-300">Vision Target</div>
                    </div>
                    <div className="text-center p-4 bg-[#021C2A] border border-[#B0EDF9]/20 rounded-xl">
                      <div className="text-2xl font-bold text-[#B0EDF9]">1M+</div>
                      <div className="text-xs text-slate-300">Businesses Goal</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#04344C]/70 border border-[#B0EDF9]/20 hover:border-[#B0EDF9]/50 rounded-2xl p-6 transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-black text-[#B0EDF9]">{item.year}</span>
                      <span className="px-3 py-1 bg-[#021C2A] border border-[#B0EDF9]/30 rounded-full text-[#B0EDF9] text-xs font-bold uppercase tracking-wider">
                        {item.milestone}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-slate-300 text-xs leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-[#04344C]/70 border border-[#B0EDF9]/20 hover:border-[#B0EDF9]/50 rounded-2xl p-6 transition-all flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-[#021C2A] border border-[#B0EDF9]/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{achievement.title}</h4>
                      <p className="text-xs text-[#B0EDF9] font-bold mb-1">{achievement.year} • {achievement.organization}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-extrabold text-white mb-4">
              Our Core Values
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              The principles that guide everything we build and shape our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-[#04344C]/70 border border-[#B0EDF9]/20 hover:border-[#B0EDF9]/50 rounded-3xl p-6 transition-all"
              >
                <div className="w-11 h-11 bg-[#021C2A] border border-[#B0EDF9]/30 rounded-xl flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                
                <h4 className="text-lg font-bold text-white mb-2">
                  {value.title}
                </h4>
                
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {value.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {value.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-2.5 py-1 bg-[#021C2A] border border-[#B0EDF9]/20 rounded-full text-[#B0EDF9] text-xs font-semibold uppercase tracking-wider"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
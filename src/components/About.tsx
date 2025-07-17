import React, { useState } from 'react';
import { Target, Users, Lightbulb, TrendingUp, Award, Globe, Calendar, MapPin, Rocket, Shield, Star, CheckCircle, ArrowRight, Play, Zap, Heart, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mission-Driven Excellence",
      description: "We're committed to democratizing strategic business intelligence through AI innovation, making world-class consulting accessible to every business.",
      color: "from-blue-500 to-cyan-500",
      features: ["Strategic Focus", "Global Impact", "Innovation Leadership"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Human-Centered Design",
      description: "Technology serves people, not the other way around. Our AI enhances human decision-making while preserving the human touch in business strategy.",
      color: "from-pink-500 to-rose-500",
      features: ["User Experience", "Empathy First", "Human Insight"]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation First",
      description: "We continuously push the boundaries of what's possible in AI-powered business strategy, staying ahead of industry trends and technological advances.",
      color: "from-yellow-500 to-orange-500",
      features: ["Cutting Edge Tech", "Research & Development", "Future Ready"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Results Focused",
      description: "Every recommendation is designed to drive measurable business growth and success, with clear KPIs and actionable insights for implementation.",
      color: "from-green-500 to-emerald-500",
      features: ["Measurable Impact", "ROI Driven", "Success Metrics"]
    }
  ];

  const stats = [
    { 
      number: "50K+", 
      label: "Businesses Served",
      icon: <Users className="w-6 h-6" />,
      description: "Companies transformed globally"
    },
    { 
      number: "95%", 
      label: "Client Satisfaction",
      icon: <Star className="w-6 h-6" />,
      description: "Average satisfaction rating"
    },
    { 
      number: "$2.5B+", 
      label: "Revenue Generated",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Total client revenue impact"
    },
    { 
      number: "150+", 
      label: "Countries Reached",
      icon: <Globe className="w-6 h-6" />,
      description: "Global market presence"
    }
  ];

  const timeline = [
    {
      year: "2019",
      title: "Foundation",
      description: "Stratxcel.AI was founded with a vision to democratize business consulting through AI innovation.",
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
      description: "Expanded to 50+ countries and introduced multi-language support for international markets.",
      milestone: "International Growth"
    },
    {
      year: "2022",
      title: "Expert Network",
      description: "Built our expert consultant network, combining AI insights with human expertise.",
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
      description: "Continuing to innovate with advanced AI models and expanding our global impact.",
      milestone: "Innovation Leader"
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "AI Innovation Award",
      year: "2024",
      organization: "Tech Excellence Awards",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Fastest Growing AI Company",
      year: "2023",
      organization: "Business Growth Awards",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Best Business Intelligence Platform",
      year: "2023",
      organization: "Industry Choice Awards",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Customer Excellence Award",
      year: "2022",
      organization: "Service Quality Institute",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const tabs = ["Our Story", "Timeline", "Achievements"];

  return (
    <section id="about" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/3 to-cyan-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm">
            <Globe className="w-5 h-5 mr-2" />
            Our Story & Vision
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              About StratxceL
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            We're on a mission to democratize strategic business intelligence, making world-class consulting accessible to every business through the transformative power of AI innovation.
          </p>

          {/* Video/Demo Button */}
          <motion.button
            className="group inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-300 font-medium hover:from-blue-600/30 hover:to-cyan-600/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Play className="w-5 h-5 text-white ml-1" />
            </div>
            <span>Watch Our Story</span>
          </motion.button>
        </motion.div>

        {/* Enhanced Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 text-center hover:border-blue-500/50 transition-all duration-500 overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -5 }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-blue-400">
                    {stat.icon}
                  </div>
                </div>
                
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                  {stat.number}
                </div>
                
                <div className="text-lg font-semibold text-gray-300 mb-2">
                  {stat.label}
                </div>
                
                <div className="text-sm text-gray-500">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tabbed Content Section */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-2">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px]">
            {activeTab === 0 && (
              <motion.div
                key="story"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <h3 className="text-4xl font-bold text-white mb-6">
                    Transforming Business Strategy
                  </h3>
                  <div className="space-y-6 text-gray-300 leading-relaxed">
                    <p>
                      Founded in 2019, Stratxcel.AI emerged from a simple yet powerful observation: traditional business consulting was too expensive, too slow, and too exclusive for the majority of businesses that needed strategic guidance.
                    </p>
                    <p>
                      Our founders, a team of seasoned consultants and AI researchers, envisioned a world where every business—from startups to enterprises—could access world-class strategic insights powered by artificial intelligence.
                    </p>
                    <p>
                      Today, we combine cutting-edge AI with human expertise to deliver data-driven, contextually aware strategies. We've helped over 50,000 businesses across 150+ countries achieve sustainable growth and competitive advantage.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-6 mt-8">
                    <div className="flex items-center gap-2 text-green-400">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-sm">AI-Powered Insights</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-400">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-sm">Human Expertise</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-400">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-sm">Global Reach</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                          <Eye className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white">Our Vision</h4>
                          <p className="text-gray-400">Shaping the future of business</p>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        To become the global leader in AI-powered business intelligence, empowering every organization to make data-driven decisions and achieve sustainable growth.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
                          <div className="text-2xl font-bold text-blue-400">2030</div>
                          <div className="text-sm text-gray-400">Vision Target</div>
                        </div>
                        <div className="text-center p-4 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                          <div className="text-2xl font-bold text-cyan-400">1M+</div>
                          <div className="text-sm text-gray-400">Businesses Goal</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 1 && (
              <motion.div
                key="timeline"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
                
                <div className="space-y-12">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={index}
                      className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
                              {item.milestone}
                            </div>
                          </div>
                          <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                          <p className="text-gray-300 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                      
                      <div className="relative z-10 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {item.year}
                      </div>
                      
                      <div className="flex-1"></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 2 && (
              <motion.div
                key="achievements"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="group bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-500 overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${achievement.color} bg-opacity-20 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">
                          {achievement.icon}
                        </div>
                      </div>
                      
                      <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                        {achievement.title}
                      </h4>
                      
                      <div className="flex items-center gap-4 text-gray-400 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{achievement.year}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          <span className="text-sm">{achievement.organization}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Enhanced Core Values */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">
              Our Core Values
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${value.color} bg-opacity-20 mb-6`}>
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {value.title}
                  </h4>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {value.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {value.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-gray-700/50 border border-gray-600/50 rounded-full text-gray-300 text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        {/* <motion.div
          className="relative bg-gradient-to-r from-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-12 text-center overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        > */}
          {/* Background Pattern */}
          {/* <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500"></div>
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center px-6 py-3 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-8">
              <Zap className="w-5 h-5 mr-2" />
              Ready to Transform Your Business?
            </div>
            
            <h3 className="text-4xl font-bold text-white mb-6">
              Join Thousands of Successful Businesses
            </h3>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Experience the power of AI-driven business intelligence and take your company to the next level with Stratxcel.AI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-blue-500/25 hover:scale-105 flex items-center gap-3">
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-full hover:border-gray-500 hover:text-white transition-all duration-200 flex items-center gap-3">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>
            
            <div className="flex items-center justify-center gap-8 mt-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Free trial available
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                No setup fees
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                24/7 support
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default About;
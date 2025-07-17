import React, { useState } from 'react';
import { Users, Brain, Target, Award, ArrowRight, Star, CheckCircle, Calendar, MessageCircle, Zap, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

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
      bio: "Leading AI transformation initiatives for Fortune 500 companies with proven track record in scaling intelligent systems."
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
      bio: "Specialized in guiding businesses through digital transformation with focus on sustainable growth and innovation."
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
      icon: <Brain className="w-8 h-8" />,
      title: "Strategic Planning",
      description: "Comprehensive business strategy development with AI-powered insights and market intelligence",
      features: ["SWOT Analysis", "Competitive Intelligence", "Growth Roadmap", "Risk Assessment"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Market Analysis",
      description: "Deep-dive market research and competitive intelligence for informed decision making",
      features: ["Market Sizing", "Competitor Analysis", "Customer Insights", "Trend Forecasting"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Training",
      description: "Comprehensive workshops and training sessions for leadership and operational teams",
      features: ["Leadership Development", "Skill Assessment", "Custom Workshops", "Performance Coaching"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Data-driven recommendations and implementation support for operational excellence",
      features: ["KPI Development", "Process Mapping", "Efficiency Metrics", "Continuous Improvement"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Successful Projects", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "15+", label: "Years Experience", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <MessageCircle className="w-6 h-6" /> }
  ];

  return (
    <section id="expert-consultancy" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
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
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm font-medium mb-8 backdrop-blur-sm">
            <Users className="w-5 h-5 mr-2" />
            Human Expertise Meets AI Innovation
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              Expert Consultancy
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Transform your business with our world-class consultants who combine decades of experience with cutting-edge AI insights to deliver exceptional results.
          </p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
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
                className="text-center"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <div className="flex justify-center mb-3 text-orange-400">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Expert Team - Interactive Cards */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">
              Meet Our Expert Team
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Industry leaders with proven track records in transforming businesses across various sectors
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Expert Cards */}
            <div className="space-y-4">
              {experts.map((expert, index) => (
                <motion.div
                  key={index}
                  className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
                    activeExpert === index
                      ? 'bg-gradient-to-r from-orange-900/30 to-red-900/20 border-orange-500/50 shadow-lg shadow-orange-500/20'
                      : 'bg-gray-800/40 border-gray-700/50 hover:border-gray-600/50'
                  }`}
                  onClick={() => setActiveExpert(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={expert.avatar}
                        alt={expert.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-orange-400/50"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-900 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-1">
                        {expert.name}
                      </h4>
                      <p className="text-orange-400 font-medium mb-2">
                        {expert.role}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span>{expert.rating}</span>
                        </div>
                        <div>{expert.consultations}+ consultations</div>
                        <div>{expert.experience}</div>
                      </div>
                    </div>
                    <ArrowRight className={`w-5 h-5 transition-transform ${
                      activeExpert === index ? 'rotate-90 text-orange-400' : 'text-gray-500'
                    }`} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Expert Details */}
            <motion.div
              key={activeExpert}
              className="bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-8">
                <img
                  src={experts[activeExpert].avatar}
                  alt={experts[activeExpert].name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-orange-400/50"
                />
                <h4 className="text-2xl font-bold text-white mb-2">
                  {experts[activeExpert].name}
                </h4>
                <p className="text-orange-400 font-medium mb-4">
                  {experts[activeExpert].role}
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {experts[activeExpert].bio}
                </p>
              </div>

              <div className="mb-8">
                <h5 className="text-lg font-semibold text-white mb-4">Specialties</h5>
                <div className="flex flex-wrap gap-2">
                  {experts[activeExpert].specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-orange-500/25 hover:scale-105 flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                Book Session with {experts[activeExpert].name.split(' ')[0]}
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">
              Our Goals
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs with measurable outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
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
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} bg-opacity-20 mb-6`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-400 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h4>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="relative bg-gradient-to-r from-orange-900/20 to-red-900/20 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-12 text-center overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500 to-red-500"></div>
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center px-6 py-3 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm font-medium mb-8">
              <Zap className="w-5 h-5 mr-2" />
              Ready to Transform Your Business?
            </div>
            
            <h3 className="text-4xl font-bold text-white mb-6">
              Start Your Journey with Our Experts
            </h3>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Schedule a free consultation and discover how our expert team can accelerate your business growth with personalized strategies and proven methodologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-orange-500/25 hover:scale-105 flex items-center gap-3" onClick={() => window.open('https://stratxcel.ai', '_blank')}>
                <Calendar className="w-5 h-5" />
                Book Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-full hover:border-gray-500 hover:text-white transition-all duration-200 flex items-center gap-3">
                <MessageCircle className="w-5 h-5" />
                Chat with Expert
              </button>
            </div>
            
            <div className="flex items-center justify-center gap-8 mt-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Free initial assessment
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                No commitment required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                30-minute session
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertConsultancy;
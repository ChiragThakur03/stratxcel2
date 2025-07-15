import React from 'react';
import { Users, Brain, Target, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ExpertConsultancy: React.FC = () => {
  const experts = [
    {
      name: "Dr. Sarah Chen",
      role: "AI Strategy Director",
      expertise: "Machine Learning & Business Intelligence",
      experience: "15+ years",
      avatar: "👩‍💼"
    },
    {
      name: "Marcus Rodriguez",
      role: "Business Transformation Lead",
      expertise: "Digital Transformation & Growth Strategy",
      experience: "12+ years",
      avatar: "👨‍💼"
    },
    {
      name: "Dr. Emily Watson",
      role: "Market Research Specialist",
      expertise: "Consumer Behavior & Market Analysis",
      experience: "18+ years",
      avatar: "👩‍🔬"
    },
    {
      name: "James Thompson",
      role: "Operations Optimization Expert",
      expertise: "Process Improvement & Efficiency",
      experience: "14+ years",
      avatar: "👨‍💻"
    }
  ];

  const services = [
    {
      icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Strategic Planning",
      description: "Comprehensive business strategy development with AI-powered insights"
    },
    {
      icon: <Target className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Market Analysis",
      description: "Deep-dive market research and competitive intelligence"
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Team Training",
      description: "Workshops and training sessions for your leadership team"
    },
    {
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Performance Optimization",
      description: "Data-driven recommendations for operational excellence"
    }
  ];

  return (
    <section id="expert-consultancy" className="relative z-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Human Expertise
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Expert Consultancy
            </span>
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-snug sm:leading-relaxed">
            Combine the power of AI with human expertise. Our certified consultants bring decades of experience to help you navigate complex business challenges.
          </p>
        </motion.div>

        {/* Expert Team */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-12">
            Meet Our Expert Team
          </h3>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            viewport={{ once: true }}
          >
            {experts.map((expert, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-orange-900/20 to-red-900/10 backdrop-blur-sm border border-gray-700/50 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center hover:border-orange-500/50 hover:from-orange-900/30 hover:to-red-900/20 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl sm:text-4xl mb-3 sm:mb-4">{expert.avatar}</div>
                <h4 className="text-base sm:text-xl font-semibold text-white mb-2">
                  {expert.name}
                </h4>
                <p className="text-orange-400 font-medium mb-2 text-sm sm:text-base">
                  {expert.role}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 leading-snug sm:leading-relaxed">
                  {expert.expertise}
                </p>
                <div className="text-xs text-gray-500">
                  {expert.experience} experience
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Services */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-12">
            Our Expert Services
          </h3>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-red-900/20 to-orange-900/10 backdrop-blur-sm border border-gray-700/50 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center hover:border-red-500/50 hover:from-red-900/30 hover:to-orange-900/20 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-red-400 mb-3 sm:mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h4 className="text-base sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-400 text-sm sm:text-base leading-snug sm:leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="order-2 lg:order-1">
            <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to Work with Our Experts?
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-snug sm:leading-relaxed">
              Schedule a consultation with our expert team. We'll analyze your business needs and create a customized strategy to drive your growth.
            </p>
            <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0"></div>
                Personalized consultation sessions
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0"></div>
                Custom strategy development
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0"></div>
                Ongoing support and guidance
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0"></div>
                Implementation assistance
              </li>
            </ul>
          </div>
          <div className="text-center lg:text-right order-1 lg:order-2">
            <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-orange-500/25 hover:scale-105 inline-flex items-center justify-center text-sm sm:text-base active:scale-95">
              Book Consultation
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-xs sm:text-sm text-gray-400 mt-2 sm:mt-3">
              Free initial assessment
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertConsultancy;

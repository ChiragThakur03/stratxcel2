import React from 'react';
import { Users, Brain, Target, Award, ArrowRight } from 'lucide-react';

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
      icon: <Brain className="w-8 h-8" />,
      title: "Strategic Planning",
      description: "Comprehensive business strategy development with AI-powered insights"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Market Analysis",
      description: "Deep-dive market research and competitive intelligence"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Training",
      description: "Workshops and training sessions for your leadership team"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Data-driven recommendations for operational excellence"
    }
  ];

  return (
    <section id="expert-consultancy" className="relative z-10 py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            Human Expertise
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Expert Consultancy
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Combine the power of AI with human expertise. Our certified consultants bring decades of experience to help you navigate complex business challenges.
          </p>
        </div>

        {/* Expert Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Meet Our Expert Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experts.map((expert, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-900/20 to-red-900/10 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-orange-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">{expert.avatar}</div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {expert.name}
                </h4>
                <p className="text-orange-400 font-medium mb-2">
                  {expert.role}
                </p>
                <p className="text-gray-400 text-sm mb-3">
                  {expert.expertise}
                </p>
                <div className="text-xs text-gray-500">
                  {expert.experience} experience
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Our Expert Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-red-900/20 to-orange-900/10 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-red-500/50 transition-all duration-300">
                <div className="text-red-400 mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Work with Our Experts?
              </h3>
              <p className="text-gray-300 mb-6">
                Schedule a consultation with our expert team. We'll analyze your business needs and create a customized strategy to drive your growth.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  Personalized consultation sessions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  Custom strategy development
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  Ongoing support and guidance
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  Implementation assistance
                </li>
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <button className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-orange-500/25 hover:scale-105 inline-flex items-center">
                Book Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-sm text-gray-400 mt-3">
                Free initial assessment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertConsultancy; 
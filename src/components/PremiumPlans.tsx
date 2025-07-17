import React, { useState } from 'react';
import { Check, Crown, Rocket, Building2, Star, Zap, Shield, Users, ArrowRight, Calendar, CreditCard, Phone, Mail, Globe, TrendingUp, Award, Target, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const PremiumPlans: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  const plans = [
    {
      name: "Starter",
      icon: <Rocket className="w-8 h-8" />,
      monthlyPrice: 99,
      yearlyPrice: 79,
      description: "Perfect for small businesses and startups looking to leverage AI insights",
      features: [
        "Advanced AI Analytics Dashboard",
        "Monthly Strategy Reports",
        "Email Support (24h response)",
        "Basic Market Intelligence",
        "Goal Tracking & KPI Dashboard",
        "Up to 5 Team Members",
        "Mobile App Access",
        "Data Export (CSV/PDF)"
      ],
      popular: false,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-900/20 to-cyan-900/10",
      borderColor: "border-blue-500/30",
      hoverBorder: "hover:border-blue-400/60",
      buttonStyle: "border-2 border-blue-500 text-blue-300 hover:bg-blue-500 hover:text-white",
      savings: "Save $240/year"
    },
    {
      name: "Professional",
      icon: <Crown className="w-8 h-8" />,
      monthlyPrice: 299,
      yearlyPrice: 239,
      description: "Ideal for growing businesses ready to scale with comprehensive AI tools",
      features: [
        "Everything in Starter",
        "Weekly Strategy Sessions",
        "Priority Support (4h response)",
        "Advanced Market Intelligence",
        "Custom KPI Tracking",
        "Up to 25 Team Members",
        "API Access & Integrations",
        "White-label Reports",
        "Competitor Analysis Tools",
        "Advanced Analytics & Forecasting"
      ],
      popular: true,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-900/20 to-pink-900/10",
      borderColor: "border-purple-500/50",
      hoverBorder: "hover:border-purple-400/70",
      buttonStyle: "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-purple-500/25",
      savings: "Save $720/year"
    },
    {
      name: "Enterprise",
      icon: <Building2 className="w-8 h-8" />,
      monthlyPrice: 999,
      yearlyPrice: 799,
      description: "For large organizations requiring enterprise-grade AI solutions",
      features: [
        "Everything in Professional",
        "Daily AI Insights & Alerts",
        "Dedicated Account Manager",
        "Custom AI Model Training",
        "Advanced Integrations (Salesforce, HubSpot)",
        "Unlimited Team Members",
        "24/7 Phone Support",
        "Custom Development",
        "On-premise Deployment Option",
        "Advanced Security & Compliance",
        "Custom Reporting & Dashboards",
        "Training & Onboarding"
      ],
      popular: false,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-900/20 to-red-900/10",
      borderColor: "border-orange-500/30",
      hoverBorder: "hover:border-orange-400/60",
      buttonStyle: "border-2 border-orange-500 text-orange-300 hover:bg-orange-500 hover:text-white",
      savings: "Save $2400/year"
    }
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Real-time AI processing and insights"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Built for teams of all sizes"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Support",
      description: "24/7 support in multiple languages"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "Stratxcel.AI transformed our business strategy. The insights are incredible!",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Michael Chen",
      role: "COO, Growth Dynamics",
      content: "The ROI we've seen from the Professional plan is outstanding.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Emily Rodriguez",
      role: "VP Strategy, InnovateCorp",
      content: "Enterprise features helped us scale our operations globally.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  return (
    <section id="premium-plans" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-purple-950">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/3 to-pink-500/3 rounded-full blur-3xl"></div>
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
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-8 backdrop-blur-sm">
            <Crown className="w-5 h-5 mr-2" />
            Premium AI-Powered Solutions
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Premium Plans
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Unlock the full potential of AI-powered business strategy with our comprehensive plans designed for serious growth and competitive advantage.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-2 mb-12">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 relative ${
                billingCycle === 'yearly'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Plans Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-gradient-to-br ${plan.bgGradient} backdrop-blur-sm border ${plan.borderColor} ${plan.hoverBorder} rounded-3xl p-8 transition-all duration-500 overflow-hidden group ${
                plan.popular ? 'scale-105 shadow-2xl shadow-purple-500/20' : 'hover:scale-105'
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Background Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${plan.gradient} rounded-3xl text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {plan.description}
                  </p>
                  
                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-5xl font-bold text-white">
                        ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-gray-400 ml-2">/{billingCycle === 'monthly' ? 'month' : 'month'}</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <div className="text-green-400 text-sm font-medium">
                        {plan.savings}
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Everything included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-start text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center mr-3 mt-0.5 flex-shrink-0`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 ${plan.buttonStyle} flex items-center justify-center gap-2 group/btn`}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>

                {/* Additional Info */}
                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500">
                    14-day free trial • No credit card required
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-6 right-6 text-white/5 text-8xl font-bold leading-none">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-white/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">
              Why Choose Stratxcel.AI?
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Built for modern businesses with enterprise-grade features and security
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-purple-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-purple-400">
                    {feature.icon}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              See what our customers are saying about their experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-purple-400/50"
                  />
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        {/* <motion.div
          className="relative bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-12 text-center overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        > */}
          {/* Background Pattern */}
          {/* <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center px-6 py-3 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-8">
              <Sparkles className="w-5 h-5 mr-2" />
              Ready to Transform Your Business?
            </div>
            
            <h3 className="text-4xl font-bold text-white mb-6">
              Start Your Free Trial Today
            </h3>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Join thousands of businesses already using Stratxcel to drive growth and make data-driven decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-purple-500/25 hover:scale-105 flex items-center gap-3">
                <Calendar className="w-5 h-5" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-full hover:border-gray-500 hover:text-white transition-all duration-200 flex items-center gap-3">
                <Phone className="w-5 h-5" />
                Schedule Demo
              </button>
            </div>
            
            <div className="flex items-center justify-center gap-8 mt-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                14-day free trial
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                Cancel anytime
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default PremiumPlans;
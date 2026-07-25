import React, { useState } from 'react';
import { Check, Crown, Rocket, Building2, Star, Zap, Shield, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const PremiumPlans: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: "Starter",
      icon: <Rocket className="w-6 h-6 text-[#B0EDF9]" />,
      monthlyPrice: 99,
      yearlyPrice: 79,
      description: "Ideal for growth-stage startups launching AI-driven strategy pipelines.",
      features: [
        "Real-Time AI Telemetry Dashboard",
        "Monthly Strategic Audits",
        "Competitor Matrix Insights",
        "Up to 5 Team Seats",
        "Standard Executive PDF Exports",
        "24/7 Priority Email Support"
      ],
      popular: false,
      borderColor: "border-[#B0EDF9]/20 hover:border-[#B0EDF9]/60",
      buttonStyle: "bg-[#021C2A]/60 border border-[#B0EDF9]/30 hover:bg-[#021C2A] text-[#B0EDF9]",
      savings: "Save $240/year"
    },
    {
      name: "Professional",
      icon: <Crown className="w-6 h-6 text-[#04344C]" />,
      monthlyPrice: 299,
      yearlyPrice: 239,
      description: "Optimized for scaling organizations requiring custom strategy execution & expert consulting.",
      features: [
        "Everything in Starter",
        "Bi-Weekly Senior Consultant Synch",
        "Custom KPI Telemetry Tracking",
        "Priority Support (4h SLA)",
        "Up to 25 Team Seats",
        "Full API & Webhook Access",
        "White-Label Reporting"
      ],
      popular: true,
      borderColor: "border-[#B0EDF9] shadow-[0_0_35px_rgba(176,237,249,0.25)]",
      buttonStyle: "bg-[#B0EDF9] hover:bg-white text-[#04344C] font-bold shadow-lg",
      savings: "Save $720/year"
    },
    {
      name: "Enterprise",
      icon: <Building2 className="w-6 h-6 text-[#B0EDF9]" />,
      monthlyPrice: 999,
      yearlyPrice: 799,
      description: "Unlimited AI capacity, custom model fine-tuning, and dedicated Chief Strategy Advisor.",
      features: [
        "Everything in Professional",
        "Dedicated Chief Strategist Advisor",
        "Daily Market Trigger Alerts",
        "Custom AI Model Fine-Tuning",
        "CRM & Salesforce Integrations",
        "Unlimited Team Seats",
        "On-Premise & Private Cloud Option"
      ],
      popular: false,
      borderColor: "border-[#B0EDF9]/20 hover:border-[#B0EDF9]/60",
      buttonStyle: "bg-[#021C2A]/60 border border-[#B0EDF9]/30 hover:bg-[#021C2A] text-[#B0EDF9]",
      savings: "Save $2,400/year"
    }
  ];

  const featuresList = [
    {
      icon: <Shield className="w-5 h-5 text-[#B0EDF9]" />,
      title: "Bank-Grade Encryption",
      description: "SOC2 compliance, end-to-end data encryption, and secure cloud infrastructure."
    },
    {
      icon: <Zap className="w-5 h-5 text-[#B0EDF9]" />,
      title: "Real-time Intelligence Triggers",
      description: "Receive instant notifications on competitor pivots and market shifts."
    },
    {
      icon: <Users className="w-5 h-5 text-[#B0EDF9]" />,
      title: "Seamless Advisor Hand-offs",
      description: "Transition AI telemetry directly into senior human strategist consultation."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "StratxceL transformed our market expansion strategy. Combining AI analytics with human consultant validation gave us 10x confidence.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Michael Chen",
      role: "COO, Growth Dynamics",
      content: "The ROI we achieved on the Professional plan exceeded expectations. The weekly consultant review is game-changing.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Emily Rodriguez",
      role: "VP Strategy, InnovateCorp",
      content: "Dedicated on-demand strategist feedback completely revolutionized how we present growth projections to our board.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  return (
    <section id="premium-plans" className="relative z-10 py-24 px-6 sm:px-8 lg:px-12 bg-[#021C2A]">
      {/* Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#B0EDF9]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-[#04344C]/60 rounded-full blur-[140px]" />
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
            <Crown className="w-4 h-4 mr-2 text-[#B0EDF9]" />
            Transparent Pricing
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-white">
            Flexible Strategy Pricing
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-10">
            Scale your business strategy seamlessly. Select the subscription plan tailored to your team's velocity.
          </p>

          {/* Toggle Track */}
          <div className="relative inline-flex bg-[#04344C] border border-[#B0EDF9]/30 p-1.5 rounded-2xl backdrop-blur-xl">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 z-10 ${
                billingCycle === 'monthly' ? 'text-[#04344C]' : 'text-slate-300 hover:text-white'
              }`}
            >
              {billingCycle === 'monthly' && (
                <motion.div
                  layoutId="billingPill"
                  className="absolute inset-0 bg-[#B0EDF9] rounded-xl shadow-lg z-0"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">Monthly Billing</span>
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 z-10 ${
                billingCycle === 'yearly' ? 'text-[#04344C]' : 'text-slate-300 hover:text-white'
              }`}
            >
              {billingCycle === 'yearly' && (
                <motion.div
                  layoutId="billingPill"
                  className="absolute inset-0 bg-[#B0EDF9] rounded-xl shadow-lg z-0"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                Yearly Billing
                <span className="bg-[#04344C] border border-[#04344C] text-[#B0EDF9] text-xs px-2 py-0.5 rounded-full font-bold">
                  -20% OFF
                </span>
              </span>
            </button>
          </div>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-24">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative glass-card ${plan.borderColor} bg-[#04344C]/70 backdrop-blur-2xl rounded-3xl p-8 transition-all duration-500 flex flex-col justify-between overflow-hidden group ${
                plan.popular ? 'lg:scale-[1.03]' : 'hover:scale-[1.01]'
              }`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Popular Tag */}
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-[#B0EDF9] text-[#04344C] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Card Contents */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 bg-[#021C2A]/60 border border-[#B0EDF9]/30 rounded-xl flex items-center justify-center">
                    {plan.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{plan.name}</h3>
                    {billingCycle === 'yearly' && (
                      <span className="text-xs text-[#B0EDF9] font-bold">{plan.savings}</span>
                    )}
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-1.5 mb-8">
                  <span className="text-4xl sm:text-5xl font-black text-white">
                    ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className="text-slate-300 text-xs font-semibold">/month</span>
                </div>

                {/* Divider & Feature Bullet Points */}
                <div className="h-px bg-[#B0EDF9]/20 mb-6" />
                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-slate-200">
                      <Check className="w-4 h-4 text-[#B0EDF9] mr-2.5 mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA button */}
              <button
                onClick={() => window.open('https://stratxcel.ai', '_blank')}
                className={`relative z-10 w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-95 ${plan.buttonStyle} flex items-center justify-center gap-2`}
              >
                <span>Select {plan.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-[#B0EDF9]/20 mb-24">
          {featuresList.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#04344C] border border-[#B0EDF9]/30 rounded-xl flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1.5">{item.title}</h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-16 flex flex-col items-center">
            <h3 className="text-3xl font-extrabold text-white tracking-tight mb-4">
              Trusted by Executive Leaders
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-lg leading-relaxed">
              Discover how founders and strategists leverage StratxceL to achieve rapid market growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <div key={idx} className="glass-card bg-[#04344C]/50 border border-[#B0EDF9]/20 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between h-56 hover:border-[#B0EDF9]/40 transition-all">
                <div className="flex items-center gap-1.5 mb-4 text-[#B0EDF9]">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                
                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{test.content}"
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    className="w-9 h-9 rounded-full object-cover border border-[#B0EDF9]"
                  />
                  <div>
                    <h5 className="text-xs font-bold text-white">{test.name}</h5>
                    <p className="text-xs text-slate-300">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PremiumPlans;
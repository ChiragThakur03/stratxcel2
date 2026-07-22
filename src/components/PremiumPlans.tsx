import React, { useState } from 'react';
import { Check, Crown, Rocket, Building2, Star, Zap, Shield, Users, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PremiumPlans: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  const plans = [
    {
      name: "Starter",
      icon: <Rocket className="w-6 h-6 text-blue-400" />,
      monthlyPrice: 99,
      yearlyPrice: 79,
      description: "Perfect for fast-moving startups getting started with AI strategies.",
      features: [
        "Real-Time Strategy Dashboard",
        "Monthly Strategy Audits",
        "Email Support (24h turnaround)",
        "Competitor Matrix Insights",
        "Up to 5 Team Seats",
        "Standard PDF Export"
      ],
      popular: false,
      glowColor: "rgba(59, 130, 246, 0.15)",
      borderColor: "border-blue-500/20 hover:border-blue-500/50",
      buttonStyle: "bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] text-white",
      savings: "Save $240/year"
    },
    {
      name: "Professional",
      icon: <Crown className="w-6 h-6 text-emerald-400" />,
      monthlyPrice: 299,
      yearlyPrice: 239,
      description: "Optimized for scaling operations requiring custom strategy pipelines.",
      features: [
        "Everything in Starter",
        "Weekly Strategy Synch Meetings",
        "Priority Support (4h SLA)",
        "Advanced Market Intelligence",
        "Custom KPI Metric Tracking",
        "Up to 25 Team Seats",
        "Full API Integration Access"
      ],
      popular: true,
      glowColor: "rgba(16, 185, 129, 0.2)",
      borderColor: "border-emerald-500/40 hover:border-emerald-500/70",
      buttonStyle: "bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-500 text-white shadow-lg hover:shadow-emerald-500/25",
      savings: "Save $720/year"
    },
    {
      name: "Enterprise",
      icon: <Building2 className="w-6 h-6 text-slate-300" />,
      monthlyPrice: 999,
      yearlyPrice: 799,
      description: "Custom strategies, dedicated analysts, and infinite AI capacity.",
      features: [
        "Everything in Professional",
        "Daily AI Insights & Trigger Alerts",
        "Dedicated Chief Strategist Consultant",
        "Custom LLM Fine-Tuning & Training",
        "Salesforce / CRM Integrations",
        "Infinite Team Seats Available",
        "On-premise Deployment Capabilities"
      ],
      popular: false,
      glowColor: "rgba(255, 255, 255, 0.1)",
      borderColor: "border-white/[0.08] hover:border-white/20",
      buttonStyle: "bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] text-white",
      savings: "Save $2400/year"
    }
  ];

  const featuresList = [
    {
      icon: <Shield className="w-5 h-5 text-emerald-400" />,
      title: "Enterprise Vault Security",
      description: "Complete compliance protocols, SOC2 readiness, and bank-grade data security."
    },
    {
      icon: <Zap className="w-5 h-5 text-emerald-400" />,
      title: "Real-time AI Triggers",
      description: "Instantly process competitive landscape alerts without layout shifts."
    },
    {
      icon: <Users className="w-5 h-5 text-emerald-400" />,
      title: "Direct Analyst Hand-offs",
      description: "Seamlessly transition automated outputs to verified senior strategy managers."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "StratXcel transformed our market expansion pipeline. The speed is unmatched!",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Michael Chen",
      role: "COO, Growth Dynamics",
      content: "The ROI we've seen from the Professional plan exceeded all our expectations.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Emily Rodriguez",
      role: "VP Strategy, InnovateCorp",
      content: "Having dedicated on-demand consultant feedback changed how we present to the board.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  return (
    <section id="premium-plans" className="relative z-10 py-24 px-6 sm:px-8 lg:px-12 bg-[#06080F]">
      {/* Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-emerald-950/5 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-blue-950/5 rounded-full blur-[130px]" />
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
            <Crown className="w-4 h-4 mr-2" />
            Pricing Plans
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-white">
            Flexible Strategy Pricing
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-10">
            Start free, scale on-demand. Choose the roadmap tier tailored to your team's velocity constraints.
          </p>

          {/* Premium Toggle Track */}
          <div className="relative inline-flex bg-white/[0.02] border border-white/[0.08] p-1.5 rounded-2xl backdrop-blur-md">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 z-10 ${
                billingCycle === 'monthly' ? 'text-white' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {billingCycle === 'monthly' && (
                <motion.div
                  layoutId="billingPill"
                  className="absolute inset-0 bg-white/[0.04] border border-white/[0.08] rounded-xl shadow-inner z-0"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">Monthly Billing</span>
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 z-10 ${
                billingCycle === 'yearly' ? 'text-white' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {billingCycle === 'yearly' && (
                <motion.div
                  layoutId="billingPill"
                  className="absolute inset-0 bg-white/[0.04] border border-white/[0.08] rounded-xl shadow-inner z-0"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                Yearly Billing
                <span className="bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                  -20%
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
              className={`relative glass-card ${plan.borderColor} rounded-3xl p-8 transition-all duration-500 flex flex-col justify-between overflow-hidden group ${
                plan.popular ? 'lg:scale-[1.03] border-emerald-500/40 shadow-[0_20px_50px_rgba(16,185,129,0.08)]' : 'hover:scale-[1.01]'
              }`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Corner Glow Radial */}
              <div 
                className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-30 group-hover:opacity-75"
                style={{
                  background: `radial-gradient(circle at 90% 10%, ${plan.glowColor}, transparent 35%)`
                }}
              />

              {/* Popular Tag */}
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                  Popular
                </div>
              )}

              {/* Card Contents */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white/[0.03] border border-white/[0.08] rounded-xl flex items-center justify-center">
                    {plan.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{plan.name}</h3>
                    {billingCycle === 'yearly' && (
                      <span className="text-[10px] text-emerald-400 font-bold">{plan.savings}</span>
                    )}
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-extrabold text-white">
                    ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className="text-gray-500 text-xs font-semibold">/month</span>
                </div>

                {/* Feature Bullet Points */}
                <div className="h-px bg-white/5 mb-6" />
                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <Check className="w-4 h-4 text-emerald-400 mr-2.5 mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA button */}
              <button
                className={`relative z-10 w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-98 ${plan.buttonStyle} flex items-center justify-center gap-2`}
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-white/5 mb-24">
          {featuresList.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white/[0.02] border border-white/[0.08] rounded-xl flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1.5">{item.title}</h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-16 flex flex-col items-center">
            <h3 className="text-3xl font-extrabold text-white tracking-tight mb-4">
              Trusted by Product Leaders
            </h3>
            <p className="text-gray-400 text-sm sm:text-base max-w-lg leading-relaxed">
              Fast-scaling founders use StratXcel to automate audits and get instant feedback.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <div key={idx} className="glass-card rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between h-56 hover:border-white/10 transition-all">
                <div className="flex items-center gap-1.5 mb-4 text-emerald-400">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{test.content}"
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    className="w-9 h-9 rounded-full object-cover border border-emerald-500/30"
                  />
                  <div>
                    <h5 className="text-xs font-bold text-white">{test.name}</h5>
                    <p className="text-[10px] text-gray-500">{test.role}</p>
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
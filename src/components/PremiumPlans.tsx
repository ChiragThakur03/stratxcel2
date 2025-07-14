import React from 'react';
import { Check, Crown, Rocket, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const PremiumPlans: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      icon: <Rocket className="w-8 h-8" />,
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Advanced AI Analytics",
        "Monthly Strategy Reports",
        "Email Support",
        "Basic Market Intelligence",
        "Goal Tracking Dashboard",
        "Up to 5 Team Members"
      ],
      popular: false,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      icon: <Crown className="w-8 h-8" />,
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Everything in Starter",
        "Weekly Strategy Sessions",
        "Priority Support",
        "Advanced Market Intelligence",
        "Custom KPI Tracking",
        "Up to 25 Team Members",
        "API Access",
        "White-label Reports"
      ],
      popular: true,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      icon: <Building2 className="w-8 h-8" />,
      price: "$999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Daily AI Insights",
        "Dedicated Account Manager",
        "Custom AI Model Training",
        "Advanced Integrations",
        "Unlimited Team Members",
        "24/7 Phone Support",
        "Custom Development"
      ],
      popular: false,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="premium-plans" className="relative z-10 py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
            <Crown className="w-4 h-4 mr-2" />
            Premium Features
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Premium Plans
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Unlock the full potential of AI-powered business strategy with our premium plans designed for serious growth.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 ${
                plan.popular 
                  ? 'border-purple-500/50 shadow-lg shadow-purple-500/20' 
                  : 'border-gray-700/50 hover:border-purple-500/30'
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-full text-white mb-4`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-purple-500/25'
                    : 'border-2 border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white'
                }
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-400 mr-2" />
              Cancel anytime
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-400 mr-2" />
              30-day money back guarantee
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-400 mr-2" />
              24/7 customer support
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumPlans;
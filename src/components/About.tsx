import React from 'react';
import { Target, Users, Lightbulb, TrendingUp, Award, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mission-Driven",
      description: "We're committed to democratizing strategic business intelligence through AI innovation."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Human-Centered",
      description: "Technology serves people, not the other way around. Our AI enhances human decision-making."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation First",
      description: "We continuously push the boundaries of what's possible in AI-powered business strategy."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Results Focused",
      description: "Every recommendation is designed to drive measurable business growth and success."
    }
  ];

  const stats = [
    { number: "50K+", label: "Businesses Served" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "$2.5B+", label: "Revenue Generated" },
    { number: "150+", label: "Countries Reached" }
  ];

  const timeline = [
    {
      year: "2019",
      title: "Founded",
      description: "Started with a vision to make strategic consulting accessible to all businesses"
    },
    {
      year: "2020",
      title: "AI Integration",
      description: "Launched our first AI-powered business analysis platform"
    },
    {
      year: "2021",
      title: "Global Expansion",
      description: "Expanded to serve businesses across 50+ countries"
    },
    {
      year: "2022",
      title: "Expert Network",
      description: "Built a network of 500+ strategy consultants worldwide"
    },
    {
      year: "2023",
      title: "Advanced AI",
      description: "Introduced GPT-powered strategic recommendations"
    },
    {
      year: "2024",
      title: "Market Leader",
      description: "Became the #1 AI-powered business strategy platform"
    }
  ];

  return (
    <section id="about" className="relative z-10 py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6">
            <Globe className="w-4 h-4 mr-2" />
            Our Story
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              About Stratxcel.AI
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're on a mission to democratize strategic business intelligence, making world-class consulting accessible to every business through the power of AI.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Transforming Business Strategy
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Founded in 2019, Stratxcel.AI emerged from a simple observation: traditional business consulting was too expensive, too slow, and too exclusive. We believed that every business, regardless of size, deserved access to world-class strategic insights.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Today, we combine cutting-edge artificial intelligence with human expertise to deliver strategic recommendations that are both data-driven and contextually aware. Our platform has helped over 50,000 businesses across 150+ countries achieve their growth objectives.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 text-center">
              <Award className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">AI Leader</div>
              <div className="text-sm text-gray-400">2024 Innovation Award</div>
            </div>
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6 text-center">
              <TrendingUp className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">Fast Growth</div>
              <div className="text-sm text-gray-400">500% YoY Growth</div>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.h3
          className="text-3xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Our Core Values
        </motion.h3>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-blue-900/20 to-purple-900/10 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-blue-400 mb-4 flex justify-center">
                {value.icon}
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">
                {value.title}
              </h4>
              <p className="text-gray-400">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
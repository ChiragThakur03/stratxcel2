import React from 'react';
import { Bot, Zap, BarChart3, Target, ArrowRight } from 'lucide-react';
import './FreeAI.css';
import { motion } from 'framer-motion';

const FreeAI: React.FC = () => {
  // const features = [
  //   {
  //     icon: <Bot className="w-8 h-8" />,
  //     title: "AI Business Analysis",
  //     description: "Get instant insights into your business performance with our advanced AI algorithms."
  //   },
  //   {
  //     icon: <Zap className="w-8 h-8" />,
  //     title: "Quick Recommendations",
  //     description: "Receive actionable recommendations in minutes, not weeks."
  //   },
  //   {
  //     icon: <BarChart3 className="w-8 h-8" />,
  //     title: "Market Intelligence",
  //     description: "Access real-time market data and competitive analysis."
  //   },
  //   {
  //     icon: <Target className="w-8 h-8" />,
  //     title: "Goal Setting",
  //     description: "Set SMART goals with AI-powered strategic planning."
  //   }
  // ];

  return (
    <section id="free-consultancy" className="relative z-10 py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-medium mb-6">
            <Bot className="w-4 h-4 mr-2" />
            100% Free Forever
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Free AI Consultancy
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the power of AI-driven business strategy without any cost. Get started with our comprehensive free tools.
          </p>
        </motion.div>

        <motion.div
          className="first-row"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          viewport={{ once: true }}
        >
          <motion.div
            className="card card1 bg-gradient-to-r from-purple-900/60 to-blue-900/60"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="card-content">
              <p> <span>AI Business Analysis. </span>
                Get instant insights into your business performance with our advanced AI algorithms.</p>
            </div>
          </motion.div>
          <motion.div
            className="card card2 bg-gradient-to-r from-purple-900/60 to-blue-900/60"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="card-content">
              <p><span> Quick Recommendations. </span>
                Receive actionable recommendations in minutes, not weeks.</p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="second-row"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          viewport={{ once: true }}
        >
          <motion.div
            className="card card3 bg-gradient-to-r from-purple-900/60 to-blue-900/60"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="card-content">
              <p><span> Market Intelligence. </span> 
                Access real-time market data and competitive analysis.</p>
            </div>
          </motion.div>
          <motion.div
            className="card card4 bg-gradient-to-r from-purple-900/60 to-blue-900/60"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="card-content">
              <p> <span> Goal Setting. </span>
              Set smart goals by
              using AI-powered strategic planning to achieve faster results.</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Start Your Free AI Analysis
            </h3>
            <p className="text-gray-300 mb-6">
              Upload your business data and get instant AI-powered insights. No credit card required, no hidden fees.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                Instant business health score
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                Competitive analysis report
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                Growth opportunity identification
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                Strategic recommendations
              </li>
            </ul>
          </div>
          <div>
            <button className="group px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-full hover:from-green-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-green-500/25 hover:scale-105 inline-flex items-center">
              Get Free Analysis
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm text-gray-400 mt-3">
              Takes less than 5 minutes
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeAI;
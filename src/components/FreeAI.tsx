import React from 'react';
import { Bot, ArrowRight } from 'lucide-react';

const FreeAI: React.FC = () => {
  return (
    <section id="free-ai" className="relative z-10 py-20 px-4 sm:px-6  lg:px-8 pt-20 sm:pt-0">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-medium mb-6">
            <Bot className="w-4 h-4 mr-2" />
            100% Free Forever
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Free AI Consultancy
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the power of AI-driven business strategy without any cost. Get started with our comprehensive free tools.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-col gap-10 mb-16">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-[60%] bg-gradient-to-br from-purple-900/60 to-blue-900/60 border border-[#434d72] rounded-xl p-6 text-white lg:pt-80">
              <p className="text-base sm:text-lg">
                <span className="font-semibold text-red-300 ">AI Business Analysis. </span> Get instant insights into your business performance with our advanced AI algorithms.
              </p>
            </div>
            <div className="w-full md:w-[40%] bg-gradient-to-br from-purple-900/60 to-blue-900/60 border border-[#434d72] rounded-xl p-6 text-white lg:pb-80">
              <p className="text-base sm:text-lg">
                <span className="font-semibold text-red-300">Quick Recommendations.</span> Receive actionable recommendations in minutes, not weeks.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-[40%] bg-gradient-to-br from-purple-900/60 to-blue-900/60 border border-[#434d72] rounded-xl p-6 text-white lg:pt-80">
              <p className="text-base sm:text-lg">
                <span className="font-semibold text-red-300">Market Intelligence.</span> Access real-time market data and competitive analysis.
              </p>
            </div>
            <div className="w-full md:w-[60%] bg-gradient-to-br from-purple-900/60 to-blue-900/60 border border-[#434d72] rounded-xl p-6 text-white lg:pb-80">
              <p className="text-base sm:text-lg">
                <span className="font-semibold text-red-300">Goal Setting.</span> Set smart goals by using AI-powered strategic planning to achieve faster results.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
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
            <div className="text-center lg:text-right">
              <button className="group px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-full hover:from-green-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-green-500/25 hover:scale-105 inline-flex items-center">
                Get Free Analysis
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-sm text-gray-400 mt-3">
                Takes less than 5 minutes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeAI;

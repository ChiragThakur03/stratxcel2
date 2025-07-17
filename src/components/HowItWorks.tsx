import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Zap, Target, Users, ArrowRight, Sparkles, TrendingUp, Shield } from 'lucide-react';

const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Get instant business insights powered by advanced AI algorithms that analyze market trends, competitor data, and consumer behavior patterns to deliver actionable recommendations for your business growth.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-purple-500 via-pink-500 to-red-500",
      stats: "99.7% Accuracy",
      badge: "AI Powered"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Receive comprehensive strategy reports in minutes, not days. Our optimized AI processing pipeline ensures rapid analysis while maintaining the highest quality of insights and recommendations.",
      //  image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=800",
      image: "https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?auto=compress&cs=tinysrgb&w=800",
       gradient: "from-blue-500 via-cyan-500 to-teal-500",
       stats: "< 5 Minutes",
       badge: "Ultra Fast"
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Industry-specific solutions tailored to your business needs. Our AI understands the nuances of different sectors and provides customized strategies that align with your market dynamics.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-pink-500 via-purple-500 to-indigo-500",
      stats: "100+ Industries",
      badge: "Precision"
    },
    {
      icon: Users,
      title: "Expert Network",
      description: "Access to verified industry experts for specialized consultation. Connect with seasoned professionals who can provide human insight to complement our AI-powered recommendations.",
      image: "https://images.pexels.com/photos/7156099/pexels-photo-7156099.jpeg?_gl=1*5ijy7g*_ga*MTA5NDczMjM5NS4xNzUyNjQ2MDU1*_ga_8JE65Q40S6*czE3NTI2NDYwNTQkbzEkZzEkdDE3NTI2NDYxMjQkajUwJGwwJGgw",
      gradient: "from-cyan-500 via-blue-500 to-purple-500",
      stats: "500+ Experts",
      badge: "Expert Network"
    }
  ];

  return (
    <div ref={containerRef} className="relative bg-black min-h-screen">
      {/* Header Section */}
      <div className="sticky top-0 h-screen flex items-center justify-center bg-black">
        <div className="text-center z-10">
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            How It Works
          </motion.div>
          
          <motion.h2 
            className="text-[clamp(32px,10vw,96px)] font-bold mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Transform Your Business
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-[clamp(16px,4vw,24px)] text-gray-300 max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Experience the future of business consulting with our comprehensive AI-powered platform
          </motion.p>
        </div>

        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(147,51,234,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]" />
          <div className="absolute inset-0 opacity-30">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Sticky Cards Section */}
      {features.map((feature, index) => {
        const Icon = feature.icon;
        const targetScale = 1 - ((features.length - index) * 0.05);
        const range = [index * 0.25, 1];
        const scale = useTransform(scrollYProgress, range, [1, targetScale]);

        return (
          <div key={index} className="sticky top-0 h-screen flex items-center justify-center px-4">
            <motion.div
              style={{
                scale,
                top: `calc(-5vh + ${index * 25}px)`
              }}
              className={`relative w-full max-w-[900px] md:max-w-[1200px] h-[400px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl group`}
            >
              {/* Enhanced Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-90`} />
              
              {/* Glassmorphism Overlay */}
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl border border-white/20 group-hover:border-white/40 transition-all duration-500" />
              
              {/* Content Container */}
              <div className="relative h-full p-6 md:p-12 flex flex-col md:flex-row gap-8">
                
                {/* Content Section */}
                <div className="flex-1 flex flex-col justify-center text-white z-10">
                  
                  {/* Badge */}
                  <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-sm font-medium mb-6 w-fit">
                    <Shield className="w-4 h-4 mr-2" />
                    {feature.badge}
                  </div>
                  
                  {/* Icon Container */}
                  {/* <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/20 rounded-3xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/30 relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                    <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white relative z-10" />
                  </div> */}
                  
                  {/* Title */}
                  <h3 className="text-[clamp(24px,5vw,40px)] font-bold mb-4 leading-tight">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[clamp(16px,4vw,20px)] leading-relaxed opacity-90 mb-6 max-w-lg">
                    {feature.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm font-semibold">{feature.stats}</span>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <button className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 w-fit group/btn">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Enhanced Visual Section */}
                <div className="flex-1 relative">
                  <div className="absolute inset-0 bg-black/30 rounded-2xl overflow-hidden border border-white/20 backdrop-blur-sm group-hover:scale-105 transition-transform duration-500">
                    
                    {/* Main Image */}
                    <img
                      src={feature.image}
                      alt={`${feature.title} visualization`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                    
                    {/* Floating Elements */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium border border-white/30">
                      Step {index + 1}
                    </div>
                    
                    {/* Progress Dots */}
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      {features.map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            i === index ? 'bg-white' : 'bg-white/40'
                          }`}
                        />
                      ))}
                    </div>
                    
                    {/* Animated Particles */}
                    <div className="absolute inset-0 opacity-40">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                          style={{
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: `${1 + Math.random() * 2}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Decorative Elements */}
              <div className="absolute top-6 right-6 text-white/10 text-6xl sm:text-8xl font-bold leading-none">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Enhanced Glow Effects */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-black/20 pointer-events-none" />
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-br-3xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-white/20 to-transparent rounded-tl-3xl" />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default HowItWorks;
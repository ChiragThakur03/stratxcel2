import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Zap, Target, Users } from 'lucide-react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';

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
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Receive comprehensive strategy reports in minutes, not days. Our optimized AI processing pipeline ensures rapid analysis while maintaining the highest quality of insights and recommendations.",
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Industry-specific solutions tailored to your business needs. Our AI understands the nuances of different sectors and provides customized strategies that align with your market dynamics.",
    },
    {
      icon: Users,
      title: "Expert Network",
      description: "Access to verified industry experts for specialized consultation. Connect with seasoned professionals who can provide human insight to complement our AI-powered recommendations.",
    }
  ];

  const images = [image1, image2, image3, image4];

  return (
    <div ref={containerRef} className="relative bg-black min-h-screen ">
      {/* Header Section */}
      <div className="sticky top-0 h-screen flex items-center justify-center bg-black">
        <div className="text-center z-10">
          <motion.h2 
            className="text-[clamp(32px,10vw,96px)] font-bold mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              How It Works
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

        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]" />
          <div className="absolute inset-0 opacity-20">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="absolute w-px h-px bg-purple-400 rounded-full animate-pulse"
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

      {/* Sticky Cards Section */}
      {features.map((feature, index) => {
        const Icon = feature.icon;
        const targetScale = 1 - ((features.length - index) * 0.05);
        const range = [index * 0.25, 1];
        const scale = useTransform(scrollYProgress, range, [1, targetScale]);

        return (
          <div key={index} className="sticky top-0 h-screen flex items-center justify-center px-4">
            <motion.div
              style={{
                background: `linear-gradient(135deg, #ec4899, #8b5cf6, #3b82f6)`,
                scale,
                top: `calc(-5vh + ${index * 25}px)`
              }}
              className="relative w-full max-w-[760px] md:max-w-[1000px] h-[370px] md:h-[500px] rounded-3xl p-6 md:p-12 flex flex-col md:flex-row gap-8 shadow-2xl border border-white/10 backdrop-blur-sm overflow-hidden"
            >
              {/* Content Section */}
              <div className="flex-1 flex flex-col justify-center text-white">
                <div className="mb-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/30 relative overflow-hidden">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="text-[clamp(20px,5vw,32px)] font-bold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[clamp(14px,4vw,20px)] leading-relaxed opacity-90 mb-6">
                    {feature.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <span>Learn More</span>
                    <svg width="20" height="12" viewBox="0 0 22 12" fill="none" className="opacity-80">
                      <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Visual Section */}
              <div className="flex-1 relative hidden sm:block">
                <div className="absolute inset-0 bg-black/20 rounded-2xl  overflow-hidden border border-white/20">
                  {/* Image replacing Animated Tech Pattern */}
                  <img
                    src={images[index]}
                    alt="How it works visual"
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                  />
                  {/* Progress Indicator */}
                 
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 text-white/20 text-5xl sm:text-6xl font-bold">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-black/30 pointer-events-none" />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default HowItWorks;

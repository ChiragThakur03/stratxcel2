import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CARDS = [
  {
    title: "Market Analysis",
    description: "In-depth research to identify opportunities and threats in your industry, helping you make data-driven decisions.",
    buttonText: "View Analysis"
  },
  {
    title: "Digital Transformation",
    description: "Modernize your business processes and technology stack for greater efficiency and agility.",
    buttonText: "Start Transformation"
  },
  {
    title: "AI-Powered Insights",
    description: "Leverage artificial intelligence to uncover actionable insights and drive smarter strategies.",
    buttonText: "Get Insights"
  },
  {
    title: "Growth Strategy",
    description: "Tailored plans to accelerate your business growth and expand your market reach.",
    buttonText: "See Strategy"
  },
  {
    title: "Brand Positioning",
    description: "Define and communicate your unique value to stand out in a crowded marketplace.",
    buttonText: "Explore Branding"
  },
  {
    title: "Customer Experience Design",
    description: "Enhance every touchpoint to deliver exceptional experiences and build lasting loyalty.",
    buttonText: "Improve Experience"
  },
  {
    title: "Operational Excellence",
    description: "Streamline operations to boost productivity, reduce costs, and maximize value.",
    buttonText: "Optimize Now"
  },
  {
    title: "Innovation Workshops",
    description: "Empower your team with creative tools and frameworks to drive innovation and solve complex challenges.",
    buttonText: "Join Workshop"
  }
];

const ServicesMobile: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % CARDS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % CARDS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + CARDS.length) % CARDS.length);
  };

  return (
    <section className="block lg:hidden px-4 py-10">
      <div className="relative">
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {CARDS.map((card, index) => (
              <div key={index} className="min-w-full px-4">
                <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-6 flex flex-col items-center text-center gap-4">
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {card.description}
                  </p>
                  <button className="text-sm px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-md hover:from-purple-600 hover:to-pink-600 transition-all">
                    {card.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/40 p-2 rounded-full text-white"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/40 p-2 rounded-full text-white"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {CARDS.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-blue-400' : 'bg-gray-600'} cursor-pointer`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesMobile;

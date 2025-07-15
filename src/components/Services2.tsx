import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Services2.css'

const SERVICES = [
  'AI-Powered Business Automation',
  'Branding & Positioning',
  'Business Development Strategy',
  'Digital Marketing',
  'Lead Generation & CRM Setup',
  'Market Research & Analysis',
  'Pitch Deck & Funding Support',
  'Sales Funnel Building',
  'Startup Registration & Legal Consultancy',
  'Website & App Development',
];

const Services2: React.FC = () => {
  const navigate = useNavigate();
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Duplicate the services for infinite effect
  const sliderServices = [...SERVICES, ...SERVICES];

  useEffect(() => {
    // Pause on hover (optional)
    const marquee = marqueeRef.current;
    if (!marquee) return;
    const handleMouseEnter = () => marquee.style.animationPlayState = 'paused';
    const handleMouseLeave = () => marquee.style.animationPlayState = 'running';
    marquee.addEventListener('mouseenter', handleMouseEnter);
    marquee.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      marquee.removeEventListener('mouseenter', handleMouseEnter);
      marquee.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id='services2' className="relative z-10 py-12 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Our Services
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore our range of business solutions designed to accelerate your growth.
          </p>
        </div>
        {/* Infinite Marquee Slider */}
        <div className="relative w-full overflow-hidden select-none">
          <div
            ref={marqueeRef}
            className="flex gap-6 animate-marquee"
            style={{
              width: 'max-content',
              animation: 'marquee 30s linear infinite',
            }}
          >
            {sliderServices.map((title, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-72 bg-gray-800/70 border border-purple-500/20 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300 group hover:scale-105"
              >
                <h3 className="text-lg font-semibold text-white mb-6 group-hover:text-purple-300 transition-colors duration-200">
                  {title}
                </h3>
                <button
                  className="mt-auto px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium shadow-md hover:from-purple-600 hover:to-pink-600 transition-all duration-200 active:scale-95"
                  onClick={() => navigate('/services')}
                >
                  Explore More
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* Explore All Services Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate('/services')}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 text-lg md:text-xl active:scale-95"
          >
            Explore All Services
          </button>
        </div>
      </div>
      {/* Marquee Keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Services2;

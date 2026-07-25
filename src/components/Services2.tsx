import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Services2.css';

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

  const sliderServices = [...SERVICES, ...SERVICES];

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;
    const handleMouseEnter = () => (marquee.style.animationPlayState = 'paused');
    const handleMouseLeave = () => (marquee.style.animationPlayState = 'running');
    marquee.addEventListener('mouseenter', handleMouseEnter);
    marquee.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      marquee.removeEventListener('mouseenter', handleMouseEnter);
      marquee.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="services2" className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 bg-[#021C2A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
            Our Core Services
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Explore our specialized business solutions engineered to accelerate your organization's growth.
          </p>
        </div>

        {/* Marquee Slider */}
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
                className="flex-shrink-0 w-72 bg-[#04344C] border border-[#B0EDF9]/30 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:border-[#B0EDF9] transition-all duration-300 group"
              >
                <h3 className="text-base font-bold text-white mb-6 group-hover:text-[#B0EDF9] transition-colors duration-200">
                  {title}
                </h3>
                <button
                  className="mt-auto px-5 py-2.5 bg-[#B0EDF9] text-[#04344C] font-bold rounded-xl text-xs uppercase tracking-wider hover:bg-white transition-all duration-200 active:scale-95"
                  onClick={() => navigate('/services')}
                >
                  Explore Service
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Explore Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate('/services')}
            className="px-8 py-3.5 bg-[#B0EDF9] hover:bg-white text-[#04344C] font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all"
          >
            Explore All Services
          </button>
        </div>
      </div>

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

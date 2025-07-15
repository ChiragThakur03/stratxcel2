import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

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

const RADIUS = 400;

const Services: React.FC = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<HTMLDivElement>(null);
    const mobileSliderRef = useRef<HTMLDivElement>(null);
    const [selectedCard, setSelectedCard] = useState<null | typeof CARDS[0]>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();

    // Check if mobile device
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Arrange cards in a 3D circle (desktop only)
    useEffect(() => {
        if (!carouselRef.current || isMobile) return;
        
        const cells = carouselRef.current.children;
        const n = cells.length;
        const angleStep = 360 / n;

        for (let i = 0; i < n; i++) {
            const el = cells[i] as HTMLElement;
            gsap.set(el, {
                transform: `rotateY(${i * angleStep}deg) translateZ(${RADIUS}px)`,
                position: "absolute",
                top: "0",
                left: "0",
                width: "260px",
                height: "270px"
            });
        }

        // Cleanup function to revert GSAP styles
        return () => {
            if (carouselRef.current) {
                const cells = carouselRef.current.children;
                for (let i = 0; i < cells.length; i++) {
                    const el = cells[i] as HTMLElement;
                    gsap.set(el, { clearProps: 'transform,position,top,left,width,height' });
                }
            }
        };
    }, [isMobile]);

    // Animate carousel rotation on scroll (desktop only)
    useEffect(() => {
        if (isMobile || !carouselRef.current || !sceneRef.current) return;

        const scrollTrigger = ScrollTrigger.create({
            trigger: sceneRef.current,
            start: "top top",
            end: "+=1000",
            scrub: true,
            pin: true,
            anticipatePin: 1,
            onUpdate: (self) => {
                const rotation = -360 * self.progress;
                gsap.set(carouselRef.current, { rotateY: rotation });
            },
        });

        return () => {
            scrollTrigger.kill();
        };
    }, [isMobile]);

    // Mobile slider navigation
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % CARDS.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + CARDS.length) % CARDS.length);
    };

    // Auto-scroll for mobile slider
    useEffect(() => {
        if (!isMobile) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [isMobile]);

    const renderCard = (card: typeof CARDS[0], index: number, isActive = false) => (
        <div
            key={index}
            className={`
                ${isMobile 
                    ? `min-w-full px-4 transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-70 scale-95'}`
                    : 'text-center'
                }
            `}
            style={{
                background: "linear-gradient(135deg, rgba(34,193,195,0.15), rgba(253,187,45,0.10))",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: "2rem",
                boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)",
                backdropFilter: "blur(8px)",
                padding: isMobile ? "2rem 1.5rem" : "1.5rem 1.25rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                gap: isMobile ? "1rem" : "0.75rem",
                position: isMobile ? "relative" : "absolute",
                width: isMobile ? "100%" : 280,
                maxWidth: "90vw",
                height: isMobile ? "auto" : 320,
                minHeight: isMobile ? 280 : 320,
                overflow: "hidden",
            }}
        >
            {/* <div
                style={{
                    position: "absolute",
                    top: "-0.75rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 2,
                    background: "rgba(59,130,246,0.2)",
                    border: "1px solid rgba(59,130,246,0.3)",
                    borderRadius: "9999px",
                    padding: "0.25rem 0.75rem",
                    color: "#60a5fa",
                    fontWeight: 500,
                    fontSize: "0.75rem",
                }}
            >
                Service
            </div> */}
            <h3 className={`font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent ${isMobile ? 'text-xl' : 'text-lg'} mt-4`}>
                {card.title}
            </h3>
            <p className={`text-gray-200 ${isMobile ? 'text-sm' : 'text-xs'} leading-relaxed text-center`} style={{ margin: 0, padding: 0 }}>
                {card.description}
            </p>
            <button
                onClick={() => setSelectedCard(card)}
                className={`${isMobile ? 'px-5 py-2.5 text-sm' : 'px-4 py-1.5 text-xs'} font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:from-purple-600 hover:to-pink-600 hover:scale-105 transition-all duration-200 mt-auto`}
            >
                {card.buttonText}
            </button>
        </div>
    );

    return (
        <section id="services" className="relative z-10 py-12 md:py-20 px-4 md:px-6 lg:px-8 ">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 md:mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-4 md:mb-6">
                        <Globe className="w-4 h-4 mr-2" />
                        Our Services
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                            Empower Your Business
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                        Unlock a suite of innovative services designed to accelerate your growth, streamline operations, and give you a competitive edge in today's market.
                    </p>
                </div>

                {/* Mobile Vertical Slider */}
                {isMobile && (
                    <div className="relative">
                        <div
                            ref={mobileSliderRef}
                            className="flex overflow-hidden"
                            style={{
                                transform: `translateX(-${currentSlide * 100}%)`,
                                transition: 'transform 0.5s ease-in-out',
                            }}
                        >
                            {CARDS.map((card, index) => renderCard(card, index, index === currentSlide))}
                        </div>
                        
                        {/* Navigation buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>

                        {/* Dots indicator */}
                        <div className="flex justify-center mt-6 space-x-2">
                            {CARDS.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                        index === currentSlide ? 'bg-blue-500' : 'bg-gray-600'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Desktop 3D Carousel */}
                {!isMobile && (
                    <div
                        ref={sceneRef}
                        className="relative z-10 min-h-screen flex items-center justify-center px-6 lg:px-8"
                        style={{
                            perspective: "1200px",
                            overflow: "hidden",
                        }}
                    >
                        <div
                            ref={carouselRef}
                            style={{
                                position: "relative",
                                width: "500px",
                                height: "300px",
                                transformStyle: "preserve-3d",
                            }}
                        >
                            {CARDS.map((card, index) => renderCard(card, index))}
                        </div>
                    </div>
                )}

                {/* Modal for card details */}
                {selectedCard && (
                    <div 
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" 
                        onClick={() => setSelectedCard(null)}
                    >
                        <div
                            className="bg-gradient-to-br from-blue-900/80 to-purple-900/60 backdrop-blur-lg border border-gray-700/70 rounded-2xl shadow-2xl p-6 md:p-8 max-w-sm md:max-w-md w-full text-center relative max-h-[90vh] overflow-y-auto"
                            onClick={e => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-4 right-4 text-gray-300 hover:text-white text-2xl font-bold focus:outline-none"
                                onClick={() => setSelectedCard(null)}
                                aria-label="Close"
                            >
                                &times;
                            </button>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent pr-8">
                                {selectedCard.title}
                            </h2>
                            <p className="text-gray-200 mb-6 text-base md:text-lg">
                                {selectedCard.description}
                            </p>
                            <button
                                className="px-4 py-2 text-sm bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-purple-500/25 hover:scale-105"
                                onClick={() => setSelectedCard(null)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
                {/* Explore All Services Button */}
                <div className="flex justify-center mt-12">
                    <button
                        onClick={() => navigate('/services')}
                        className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 text-lg md:text-xl active:scale-95"
                    >
                        Explore All Services
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Services;
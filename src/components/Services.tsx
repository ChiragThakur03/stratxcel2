import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe } from "lucide-react";

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
    const [selectedCard, setSelectedCard] = useState<null | typeof CARDS[0]>(null);

    // Arrange cards in a 3D circle
    useEffect(() => {
        if (!carouselRef.current) return;
        const cells = carouselRef.current.children;
        const n = cells.length;
        const angleStep = 360 / n;

        for (let i = 0; i < n; i++) {
            const el = cells[i] as HTMLElement;
            el.style.transform = `rotateY(${i * angleStep}deg) translateZ(${RADIUS}px)`;
            el.style.position = "absolute";
            el.style.top = "0";
            el.style.left = "0";
            el.style.width = "260px";
            el.style.height = "270px";
        }
    }, []);

    // Animate carousel rotation on scroll after section is fully visible
    useEffect(() => {
        if (carouselRef.current && sceneRef.current) {
            ScrollTrigger.create({
                trigger: sceneRef.current,
                start: "top top",
                end: "+=1000", // Amount of scroll needed to complete rotation
                scrub: true,
                pin: true,
                anticipatePin: 1,
                onUpdate: (self) => {
                    const rotation = -360 * self.progress; // Changed from -180 to -360 for full rotation
                    gsap.set(carouselRef.current, { rotateY: rotation });
                },
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section id="services" className="relative z-10 py-20 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6">
                <Globe className="w-4 h-4 mr-2" />
                Our Services
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                    Empower Your Business
                </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Unlock a suite of innovative services designed to accelerate your growth, streamline operations, and give you a competitive edge in today’s market.
            </p>
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

                    {CARDS.map((card, i) => (
                        <div
                            key={i}
                            className="bg-gradient-to-br from-blue-900/20 to-purple-900/10 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-lg hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-center items-center p-8 text-center"
                            style={{
                                color: "#ffffff",
                                fontFamily: "sans-serif",
                            }}
                        >
                            <div className="inline-flex items-center px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-xs font-medium mb-4">
                                Service
                            </div>
                            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                                {card.title}
                            </h3>
                            <p className="text-gray-300 mb-6 text-sm">
                                {card.description}
                            </p>
                            <button
                                className="px-4 py-2 text-sm bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-purple-500/25 hover:scale-105"
                                onClick={() => setSelectedCard(card)}
                            >
                                {card.buttonText}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Modal for card details */}
                {selectedCard && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setSelectedCard(null)}>
                        <div
                            className="bg-gradient-to-br from-blue-900/80 to-purple-900/60 backdrop-blur-lg border border-gray-700/70 rounded-2xl shadow-2xl p-8 max-w-md w-full text-center relative"
                            onClick={e => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-4 right-4 text-gray-300 hover:text-white text-2xl font-bold focus:outline-none"
                                onClick={() => setSelectedCard(null)}
                                aria-label="Close"
                            >
                                &times;
                            </button>
                            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                                {selectedCard.title}
                            </h2>
                            <p className="text-gray-200 mb-6 text-lg">
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
            </div>
        </div>
            </div>
        </section>
    );
};

export default Services;

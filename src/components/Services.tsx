import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {Bot, Star, TrendingUp, Globe, Rocket, Users, Briefcase, FileText, ChevronLeft, ChevronRight, X, ExternalLink, Clock, DollarSign, Check } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import './Services.css'

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    icon: <Bot className="w-8 h-8 text-purple-400" />,
    title: 'AI-Powered Business Automation',
    sub: [
      {
        icon: <Bot className="w-6 h-6 text-purple-400" />,
        title: 'Workflow Automation with AI',
        description: 'Automate repetitive business processes using advanced AI algorithms.',
        features: ['Seamless integration', 'Custom workflow rules'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Bot className="w-6 h-6 text-purple-400" />,
        title: 'Chatbot Development (Customer Support Bots)',
        description: 'Deploy intelligent chatbots to handle customer queries 24/7.',
        features: ['Natural language understanding', 'Multi-channel support'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Bot className="w-6 h-6 text-purple-400" />,
        title: 'AI-Based Inventory Management',
        description: 'Optimize inventory levels and reduce costs with AI-driven insights.',
        features: ['Real-time tracking', 'Demand forecasting'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Bot className="w-6 h-6 text-purple-400" />,
        title: 'Predictive Analytics for Sales',
        description: 'Boost sales with predictive analytics and actionable insights.',
        features: ['Sales forecasting', 'Customer segmentation'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Bot className="w-6 h-6 text-purple-400" />,
        title: 'CRM & Email Automation Integration',
        description: 'Integrate AI with your CRM and automate email campaigns.',
        features: ['CRM sync', 'Automated follow-ups'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Bot className="w-6 h-6 text-purple-400" />,
        title: 'AI-Powered Report Generation',
        description: 'Generate business reports automatically using AI.',
        features: ['Custom templates', 'Scheduled delivery'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Bot className="w-6 h-6 text-purple-400" />,
        title: 'Intelligent Lead Scoring System',
        description: 'Prioritize leads with AI-based scoring models.',
        features: ['Dynamic scoring', 'Integration ready'],
        price: '$99',
        delivery: '3 days',
      },
    ],
  },
  {
    icon: <Star className="w-8 h-8 text-pink-400" />,
    title: 'Branding & Positioning',
    sub: [
      {
        icon: <Star className="w-6 h-6 text-pink-400" />,
        title: 'Brand Identity Design',
        description: 'Create a unique brand identity with logo, colors, and typography.',
        features: ['Logo design', 'Brand guidelines'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Star className="w-6 h-6 text-pink-400" />,
        title: 'Brand Messaging & Voice Strategy',
        description: 'Develop a consistent brand voice and messaging.',
        features: ['Voice strategy', 'Messaging templates'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Star className="w-6 h-6 text-pink-400" />,
        title: 'Competitor Brand Analysis',
        description: 'Analyze your competitors\' branding strategies.',
        features: ['Brand comparison', 'Gap analysis'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Star className="w-6 h-6 text-pink-400" />,
        title: 'Tagline & Slogan Creation',
        description: 'Develop compelling taglines and slogans for your brand.',
        features: ['Tagline generation', 'Slogan development'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Star className="w-6 h-6 text-pink-400" />,
        title: 'Rebranding Services',
        description: 'Redesign your brand identity for a fresh look.',
        features: ['Logo redesign', 'Color scheme update'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Star className="w-6 h-6 text-pink-400" />,
        title: 'Brand Guidelines Documentation',
        description: 'Create comprehensive brand guidelines for internal and external use.',
        features: ['Brand manual', 'Guidelines document'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Star className="w-6 h-6 text-pink-400" />,
        title: 'Positioning Map & Strategy',
        description: 'Define your brand\'s unique position in the market.',
        features: ['Market positioning', 'Competitive analysis'],
        price: '$99',
        delivery: '3 days',
      },
    ],
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
    title: 'Business Development Strategy',
    sub: [
      {
        icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
        title: 'Market Entry Strategy',
        description: 'Develop a comprehensive plan to enter a new market or industry.',
        features: ['Market research', 'SWOT analysis'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
        title: 'Strategic Partnerships & Alliances',
        description: 'Identify and establish strategic partnerships for growth.',
        features: ['Partner identification', 'Negotiation support'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
        title: 'Sales Strategy & Roadmap',
        description: 'Create a detailed sales strategy and roadmap for your business.',
        features: ['Sales plan', 'Go-to-market strategy'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
        title: 'Competitive Landscape Mapping',
        description: 'Analyze your competitors and market trends.',
        features: ['Competitor analysis', 'Market trends'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
        title: 'Product-Market Fit Analysis',
        description: 'Determine if your product or service is a good fit for the market.',
        features: ['Market validation', 'Product-market fit'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
        title: 'Go-To-Market (GTM) Planning',
        description: 'Plan the execution of your go-to-market strategy.',
        features: ['GTM strategy', 'Execution plan'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
        title: 'Revenue Forecasting & Modeling',
        description: 'Develop accurate revenue forecasts and models for your business.',
        features: ['Revenue forecasting', 'Financial modeling'],
        price: '$99',
        delivery: '3 days',
      },
    ],
  },
  {
    icon: <Globe className="w-8 h-8 text-green-400" />,
    title: 'Digital Marketing',
    sub: [
      {
        icon: <Globe className="w-6 h-6 text-green-400" />,
        title: 'SEO (Search Engine Optimization)',
        description: 'Optimize your website for search engines to increase organic traffic.',
        features: ['Keyword research', 'On-page optimization'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Globe className="w-6 h-6 text-green-400" />,
        title: 'Social Media Marketing (SMM)',
        description: 'Develop and execute a social media marketing strategy.',
        features: ['Content creation', 'Community management'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Globe className="w-6 h-6 text-green-400" />,
        title: 'Google Ads & PPC Management',
        description: 'Manage and optimize your Google Ads and pay-per-click campaigns.',
        features: ['Campaign setup', 'Bid optimization'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Globe className="w-6 h-6 text-green-400" />,
        title: 'Content Marketing Strategy',
        description: 'Develop a content marketing strategy to attract and engage your audience.',
        features: ['Content calendar', 'Content distribution'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Globe className="w-6 h-6 text-green-400" />,
        title: 'Email Marketing Campaigns',
        description: 'Create and execute email marketing campaigns to nurture leads.',
        features: ['Email list building', 'Campaign automation'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Globe className="w-6 h-6 text-green-400" />,
        title: 'Influencer Marketing Setup',
        description: 'Identify and collaborate with influencers for your brand.',
        features: ['Influencer outreach', 'Content creation'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Globe className="w-6 h-6 text-green-400" />,
        title: 'Marketing Analytics & Reporting',
        description: 'Track and report on your marketing performance.',
        features: ['Analytics setup', 'Reporting tools'],
        price: '$99',
        delivery: '3 days',
      },
    ],
  },
  {
    icon: <Users className="w-8 h-8 text-yellow-400" />,
    title: 'Lead Generation & CRM Setup',
    sub: [
      {
        icon: <Users className="w-6 h-6 text-yellow-400" />,
        title: 'B2B/B2C Lead Generation Strategy',
        description: 'Develop a strategy to generate high-quality leads for your business.',
        features: ['Lead generation plan', 'Lead qualification'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Users className="w-6 h-6 text-yellow-400" />,
        title: 'Landing Page & Funnel Creation',
        description: 'Create compelling landing pages and sales funnels.',
        features: ['Landing page design', 'Funnel optimization'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Users className="w-6 h-6 text-yellow-400" />,
        title: 'CRM Integration (HubSpot, Zoho, Salesforce)',
        description: 'Integrate your CRM system for better lead management.',
        features: ['CRM sync', 'Lead tracking'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Users className="w-6 h-6 text-yellow-400" />,
        title: 'Lead Nurturing Automation',
        description: 'Automate the process of nurturing leads and converting them into customers.',
        features: ['Email automation', 'Follow-up sequences'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Users className="w-6 h-6 text-yellow-400" />,
        title: 'LinkedIn Lead Outreach',
        description: 'Reach out to potential leads on LinkedIn for business development.',
        features: ['LinkedIn connection', 'Message templates'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Users className="w-6 h-6 text-yellow-400" />,
        title: 'Lead Qualification Framework',
        description: 'Establish a framework for qualifying and scoring leads.',
        features: ['Lead scoring', 'Qualification criteria'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Users className="w-6 h-6 text-yellow-400" />,
        title: 'Email Capture & Retargeting Setup',
        description: 'Set up email capture forms and retargeting campaigns.',
        features: ['Email capture forms', 'Retargeting pixels'],
        price: '$99',
        delivery: '3 days',
      },
    ],
  },
  {
    icon: <Briefcase className="w-8 h-8 text-orange-400" />,
    title: 'Market Research & Analysis',
    sub: [
      {
        icon: <Briefcase className="w-6 h-6 text-orange-400" />,
        title: 'Target Audience Profiling',
        description: 'Understand your target audience\'s demographics, interests, and behaviors.',
        features: ['Demographics', 'Behavioral analysis'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Briefcase className="w-6 h-6 text-orange-400" />,
        title: 'Industry Trends & Reports',
        description: 'Stay updated with the latest industry trends and reports.',
        features: ['Trend analysis', 'Market reports'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Briefcase className="w-6 h-6 text-orange-400" />,
        title: 'SWOT & PESTLE Analysis',
        description: 'Conduct a SWOT and PESTLE analysis for your business.',
        features: ['SWOT analysis', 'PESTLE analysis'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Briefcase className="w-6 h-6 text-orange-400" />,
        title: 'Customer Surveys & Interviews',
        description: 'Collect and analyze customer feedback and opinions.',
        features: ['Survey design', 'Data analysis'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Briefcase className="w-6 h-6 text-orange-400" />,
        title: 'Competitor Benchmarking',
        description: 'Compare your business against your competitors.',
        features: ['Competitor analysis', 'Benchmarking report'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Briefcase className="w-6 h-6 text-orange-400" />,
        title: 'Product Demand Validation',
        description: 'Validate the demand for your product or service.',
        features: ['Market research', 'Demand analysis'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Briefcase className="w-6 h-6 text-orange-400" />,
        title: 'Market Size Estimation',
        description: 'Estimate the potential market size for your business.',
        features: ['Market research', 'Size estimation'],
        price: '$99',
        delivery: '3 days',
      },
    ],
  },
  {
    icon: <FileText className="w-8 h-8 text-cyan-400" />,
    title: 'Pitch Deck & Funding Support',
    sub: [
      {
        icon: <FileText className="w-6 h-6 text-cyan-400" />,
        title: 'Investor-Ready Pitch Deck Design',
        description: 'Create a professional pitch deck for attracting investors.',
        features: ['Design', 'Content'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <FileText className="w-6 h-6 text-cyan-400" />,
        title: 'Business Plan Writing',
        description: 'Develop a comprehensive business plan for your startup.',
        features: ['Content', 'Structure'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <FileText className="w-6 h-6 text-cyan-400" />,
        title: 'Financial Projection Modeling',
        description: 'Create accurate financial projections for your business.',
        features: ['Modeling', 'Forecasting'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <FileText className="w-6 h-6 text-cyan-400" />,
        title: 'Startup Valuation Consulting',
        description: 'Get expert advice on your startup\'s valuation.',
        features: ['Valuation', 'Consulting'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <FileText className="w-6 h-6 text-cyan-400" />,
        title: 'Fundraising Strategy',
        description: 'Develop a comprehensive strategy for raising capital.',
        features: ['Strategy', 'Execution'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <FileText className="w-6 h-6 text-cyan-400" />,
        title: 'Angel/VC Matching',
        description: 'Connect your startup with potential investors.',
        features: ['Matching', 'Introduction'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <FileText className="w-6 h-6 text-cyan-400" />,
        title: 'Pitch Rehearsal & Feedback Sessions',
        description: 'Practice your pitch and get feedback from experts.',
        features: ['Rehearsal', 'Feedback'],
        price: '$99',
        delivery: '3 days',
      },
    ],
  },
  {
    icon: <Rocket className="w-8 h-8 text-fuchsia-400" />,
    title: 'Sales Funnel Building',
    sub: [
      {
        icon: <Rocket className="w-6 h-6 text-fuchsia-400" />,
        title: 'Funnel Strategy Blueprint',
        description: 'Develop a comprehensive blueprint for your sales funnel.',
        features: ['Strategy', 'Blueprint'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Rocket className="w-6 h-6 text-fuchsia-400" />,
        title: 'Landing Page & Email Funnel Setup',
        description: 'Create and optimize your landing pages and email sequences for your funnel.',
        features: ['Landing pages', 'Email sequences'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Rocket className="w-6 h-6 text-fuchsia-400" />,
        title: 'Lead Magnet Creation',
        description: 'Develop compelling lead magnets to attract visitors to your funnel.',
        features: ['Content', 'Design'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Rocket className="w-6 h-6 text-fuchsia-400" />,
        title: 'Conversion Rate Optimization (CRO)',
        description: 'Optimize your sales funnel to increase conversion rates.',
        features: ['Optimization', 'Testing'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Rocket className="w-6 h-6 text-fuchsia-400" />,
        title: 'Sales Copywriting',
        description: 'Write compelling sales copy for your landing pages and emails.',
        features: ['Copywriting', 'Conversion'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Rocket className="w-6 h-6 text-fuchsia-400" />,
        title: 'Funnel Analytics & A/B Testing',
        description: 'Track and optimize your sales funnel using A/B testing.',
        features: ['Analytics', 'Testing'],
        price: '$99',
        delivery: '3 days',
      },
      {
        icon: <Rocket className="w-6 h-6 text-fuchsia-400" />,
        title: 'Retargeting & Upsell Funnels',
        description: 'Create retargeting campaigns and upsell offers for your existing customers.',
        features: ['Retargeting', 'Upsell'],
        price: '$99',
        delivery: '3 days',
      },
    ],
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
    const [isModalVisible, setIsModalVisible] = useState(false);
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

    // Handle modal animations
    const openModal = (card: typeof CARDS[0]) => {
        setSelectedCard(card);
        setIsModalVisible(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalVisible(false);
        setTimeout(() => {
            setSelectedCard(null);
            document.body.style.overflow = 'auto';
        }, 300);
    };

    // Update renderCard to expect sub-services as objects
    const renderCard = (card: typeof CARDS[0], index: number, isActive = false) => (
        <div
            key={index}
            className={
                `${isMobile 
                    ? `min-w-full px-4 transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-70 scale-95'}`
                    : 'text-center'
                }`
                }
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
            <h3 className={`font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent ${isMobile ? 'text-xl' : 'text-lg'} mt-4`}>
                {card.title}
            </h3>
            <ul className="text-gray-200 text-xs md:text-sm leading-relaxed text-left my-2 list-disc list-inside">
                {card.sub.slice(0, 3).map((item: any, i: number) => (
                    <li key={i}>{item.title}</li>
                ))}
                {card.sub.length > 3 && <li className="text-gray-400">...and more</li>}
            </ul>
            <button
                onClick={() => openModal(card)}
                className={`${isMobile ? 'px-5 py-2.5 text-sm' : 'px-4 py-1.5 text-xs'} font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:from-purple-600 hover:to-pink-600 hover:scale-105 transition-all duration-200 mt-auto`}
            >
                See All
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

                {/* Enhanced Modal for card details */}
                {selectedCard && (
                    <div 
                        className={`fixed inset-0 z-50 flex items-center justify-center pl-40 bg-black/60 backdrop-blur-sm  transition-all duration-300 ${
                            isModalVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
                        }`}
                        onClick={closeModal}
                    >
                        <div
                            className={`bg-gradient-to-br from-slate-900/95 to-blue-900/90 backdrop-blur-xl border border-gray-600/30 rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden transition-all duration-300 transform ${
                                isModalVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
                            }`}
                            onClick={e => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-6 border-b border-gray-600/30">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-gray-600/30">
                                        {selectedCard.icon}
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                                        {selectedCard.title}
                                    </h2>
                                </div>
                                <button
                                    className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-xl transition-all duration-200"
                                    onClick={closeModal}
                                    aria-label="Close modal"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {selectedCard.sub.map((item: any, i: number) => (
                                        <div
                                            key={i}
                                            className="group bg-gradient-to-br from-white/5 to-white/10 border border-gray-600/30 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:transform hover:scale-105"
                                        >
                                            {/* Service Icon */}
                                            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-200">
                                                {item.icon}
                                            </div>

                                            {/* Service Title */}
                                            <h3 className="font-bold text-white text-lg mb-3 group-hover:text-blue-300 transition-colors duration-200">
                                                {item.title}
                                            </h3>

                                            {/* Service Description */}
                                            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                                {item.description}
                                            </p>

                                            {/* Features */}
                                            <div className="mb-4">
                                                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Features</h4>
                                                <ul className="space-y-1">
                                                    {item.features && item.features.map((feature: string, idx: number) => (
                                                        <li key={idx} className="flex items-center text-sm text-green-300">
                                                            <Check className="w-3 h-3 mr-2 flex-shrink-0" />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Pricing and Delivery */}
                                            <div className="flex items-center justify-between mb-4 pt-4 border-t border-gray-600/30">
                                                <div className="flex items-center text-sm">
                                                    <DollarSign className="w-4 h-4 text-green-400 mr-1" />
                                                    <span className="text-white font-semibold">{item.price}</span>
                                                </div>
                                                <div className="flex items-center text-sm">
                                                    <Clock className="w-4 h-4 text-blue-400 mr-1" />
                                                    <span className="text-gray-300">{item.delivery}</span>
                                                </div>
                                            </div>

                                            {/* Action Button */}
                                            <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 group-hover:shadow-lg group-hover:shadow-purple-500/25 flex items-center justify-center gap-2">
                                                Get Started
                                                <ExternalLink className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                {/* Modal Footer */}
                                <div className="mt-8 pt-6 border-t border-gray-600/30 flex flex-col sm:flex-row gap-4 justify-center">
                                    <button
                                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
                                        onClick={() => navigate('/contact')}
                                    >
                                        Request Custom Quote
                                    </button>
                                    <button
                                        className="px-6 py-3 border border-gray-600/50 text-gray-300 font-medium rounded-xl hover:bg-gray-700/50 hover:text-white transition-all duration-200"
                                        onClick={closeModal}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
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
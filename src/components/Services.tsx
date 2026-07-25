import React, { useState, useMemo, useRef, useEffect } from "react";
import { 
  Bot, Star, TrendingUp, Globe, Users, Briefcase, FileText, Rocket, 
  ShieldCheck, Code2, Search, Check, ChevronRight, Sparkles, Clock, 
  DollarSign, X, Layers, Plus, Trash2, Send, SlidersHorizontal, Zap,
  CheckCircle2, ExternalLink
} from "lucide-react";
import { useNavigate } from 'react-router-dom';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

export interface SubService {
  title: string;
  description: string;
  features: string[];
  price: string;
  delivery: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  tagline: string;
  iconName: string;
  accentColor: string;
  badge: string;
  sub: SubService[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'ai-automation',
    title: 'AI-Powered Business Automation',
    tagline: 'Streamline workflows and drive intelligent decision-making.',
    iconName: 'bot',
    accentColor: '#B0EDF9',
    badge: 'High ROI',
    sub: [
      {
        title: 'Workflow Automation with AI',
        description: 'Automate repetitive business processes using custom AI algorithms and intelligent event triggers.',
        features: ['Seamless API integrations', 'Custom logic rules', 'Real-time error logging'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Chatbot Development (Customer Support Bots)',
        description: 'Deploy 24/7 intelligent conversational bots trained on your business data and knowledgebase.',
        features: ['Natural language processing', 'Multi-platform widget', 'Human handoff protocol'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'AI-Based Inventory Management',
        description: 'Predict demand spikes and manage inventory levels automatically with machine learning models.',
        features: ['Real-time stock tracking', 'Automated reorder alerts', 'Demand forecasting'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Predictive Analytics for Sales',
        description: 'Uncover hidden revenue patterns and accurately forecast quarterly deal closures.',
        features: ['Historical data modeling', 'Churn risk flags', 'Executive dashboard'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'CRM & Email Automation Integration',
        description: 'Connect AI engines to your customer database for personalized nurture sequences.',
        features: ['CRM sync', 'Smart follow-up triggers', 'A/B email generation'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'AI-Powered Report Generation',
        description: 'Transform raw database metrics into clean, structured executive summaries automatically.',
        features: ['Scheduled PDF delivery', 'Custom visual templates', 'Multi-source aggregation'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Intelligent Lead Scoring System',
        description: 'Automatically rank incoming sales prospects based on intent signals and ICP fit.',
        features: ['Dynamic scoring rules', 'CRM pipeline tagging', 'High-intent alerts'],
        price: '$99',
        delivery: '3 days',
      },
    ],
  },
  {
    id: 'branding',
    title: 'Branding & Positioning',
    tagline: 'Craft an unforgettable brand identity that commands market dominance.',
    iconName: 'star',
    accentColor: '#B0EDF9',
    badge: 'Popular',
    sub: [
      {
        title: 'Brand Identity Design',
        description: 'Complete visual identity system including primary logo, color palette, and typography system.',
        features: ['Vector logo kit', 'Typography system', 'Color token specs'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Brand Messaging & Voice Strategy',
        description: 'Define your brand tone, core value propositions, and messaging matrix for all channels.',
        features: ['Voice & tone guide', 'Elevator pitch decks', 'Core messaging pillars'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Competitor Brand Analysis',
        description: 'Comprehensive audit of competitor positioning to identify whitespace and differentiation.',
        features: ['Visual brand audit', 'Market gap mapping', 'Strategic recommendations'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Tagline & Slogan Creation',
        description: 'Memorable brand hook lines crafted to capture attention and communicate value.',
        features: ['Tagline options matrix', 'Trademark availability check', 'Domain name search'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Rebranding Services',
        description: 'Modernize legacy brands to align with current market expectations and premium standards.',
        features: ['Brand refresh roadmap', 'Asset migration guide', 'Launch press release'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Brand Guidelines Documentation',
        description: 'Comprehensive design manual ensuring consistent execution across web, print, and social.',
        features: ['PDF brand manual', 'Digital design tokens', 'Usage do & don’ts'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Positioning Map & Strategy',
        description: 'Establish clear market differentiation against legacy competitors and new entrants.',
        features: ['Perceptual map graph', 'ICP alignment matrix', 'Competitive matrix'],
        price: '$99',
        delivery: '3 days',
      },
    ],
  },
  {
    id: 'business-strategy',
    title: 'Business Development Strategy',
    tagline: 'Actionable roadmaps designed to open new markets and accelerate ARR.',
    iconName: 'trending-up',
    accentColor: '#B0EDF9',
    badge: 'Growth Engine',
    sub: [
      {
        title: 'Market Entry Strategy',
        description: 'End-to-end strategy for launching your offerings in new geographic or industry segments.',
        features: ['TAM/SAM analysis', 'Regulatory overview', 'Channel partner roadmap'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Strategic Partnerships & Alliances',
        description: 'Identify and structure co-marketing and integration partnerships to amplify distribution.',
        features: ['Partner target matrix', 'Outreach scripts', 'Joint-venture terms template'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Sales Strategy & Roadmap',
        description: 'Define outbound tactics, compensation models, and quota milestones for your sales team.',
        features: ['Sales playbook', 'KPI dashboard specs', 'Cadence templates'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Competitive Landscape Mapping',
        description: 'Deep-dive intelligence report analyzing rival pricing, features, and target verticals.',
        features: ['Feature comparison chart', 'Pricing tier analysis', 'Battle cards'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Product-Market Fit Analysis',
        description: 'Data-driven assessment of user retention metrics, customer feedback, and market demand.',
        features: ['Sean Ellis test setup', 'Cohort analysis review', 'Feature priority matrix'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Go-To-Market (GTM) Planning',
        description: 'Comprehensive plan aligning product, marketing, and sales for new feature or product rollouts.',
        features: ['Launch timeline', 'Channel distribution strategy', 'Budgets & metrics'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Revenue Forecasting & Modeling',
        description: 'Custom financial spreadsheets modeling revenue growth, CAC payback, and unit economics.',
        features: ['3-Year financial model', 'Sensitivity scenario analysis', 'LTV:CAC calculator'],
        price: '$99',
        delivery: '3 days',
      },
    ],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    tagline: 'Omnichannel acquisition strategies that drive qualified traffic and revenue.',
    iconName: 'globe',
    accentColor: '#B0EDF9',
    badge: 'High Impact',
    sub: [
      {
        title: 'SEO (Search Engine Optimization)',
        description: 'Dominate search rankings with technical site audits, keyword mapping, and content optimization.',
        features: ['Technical site audit', 'Target keyword strategy', 'On-page metadata plan'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Social Media Marketing (SMM)',
        description: 'Build brand presence and community engagement across LinkedIn, Twitter/X, and Instagram.',
        features: ['Content calendar grid', 'Visual creative templates', 'Community engagement plan'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Google Ads & PPC Management',
        description: 'High-converting ad campaigns optimized for low cost-per-acquisition and maximum intent.',
        features: ['Ad copy variations', 'Negative keyword list', 'Conversion tracking setup'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Content Marketing Strategy',
        description: 'Thought leadership articles and downloadable assets designed to attract decision makers.',
        features: ['Content roadmap', 'SEO topic clusters', 'Distribution strategy'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Email Marketing Campaigns',
        description: 'High-converting newsletter and transactional email sequences that drive repeat sales.',
        features: ['Drip campaign structure', 'Responsive email design', 'A/B subject line tests'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Influencer Marketing Setup',
        description: 'Connect with niche industry creators to build social proof and extend brand reach.',
        features: ['Creator roster curation', 'Outreach contract templates', 'Campaign brief design'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Marketing Analytics & Reporting',
        description: 'Unified marketing analytics dashboard connecting Google Analytics 4, Meta, and CRM metrics.',
        features: ['Custom GA4 dashboard', 'Multi-touch attribution', 'Monthly reporting template'],
        price: '$99',
        delivery: '3 days',
      },
    ],
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation & CRM Setup',
    tagline: 'Build automated sales pipelines that convert visitors into booked meetings.',
    iconName: 'users',
    accentColor: '#B0EDF9',
    badge: 'High Demand',
    sub: [
      {
        title: 'B2B/B2C Lead Generation Strategy',
        description: 'Targeted lead sourcing and multi-touch outreach framework designed for high conversion.',
        features: ['ICP demographic filter', 'Outreach cadences', 'Lead magnet ideas'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Landing Page & Funnel Creation',
        description: 'High-converting landing pages built with fast loading speeds and compelling sales copy.',
        features: ['Mobile-optimized layout', 'Form validation', 'Social proof widgets'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'CRM Integration (HubSpot, Zoho, Salesforce)',
        description: 'Configure pipeline stages, deal properties, and contact syncing across your software stack.',
        features: ['Field mapping', 'Pipeline automation', 'Team permission setup'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Lead Nurturing Automation',
        description: 'Automated email & SMS follow-ups that re-engage cold leads and drive call bookings.',
        features: ['Multi-channel triggers', 'Behavioral segmentation', 'Re-engagement workflows'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'LinkedIn Lead Outreach',
        description: 'Organic LinkedIn outreach system using targeted message scripts and connection strategies.',
        features: ['Profile optimization', 'InMail script library', 'Connection strategy'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Lead Qualification Framework',
        description: 'BANT and MEDDPICC criteria frameworks to ensure your sales team only speaks to SQLs.',
        features: ['Discovery call script', 'Qualification matrix', 'Deal handoff rules'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Email Capture & Retargeting Setup',
        description: 'Exit-intent popups, slide-ins, and retargeting pixel tracking for high conversion.',
        features: ['Pop-up trigger logic', 'Meta & Google pixel setup', 'Lead lead capture form'],
        price: '$99',
        delivery: '3 days',
      },
    ],
  },
  {
    id: 'market-research',
    title: 'Market Research & Analysis',
    tagline: 'Deep-dive data intelligence to de-risk decisions and uncover growth opportunities.',
    iconName: 'briefcase',
    accentColor: '#B0EDF9',
    badge: 'Data Intelligence',
    sub: [
      {
        title: 'Target Audience Profiling',
        description: 'Detailed buyer personas outlining pain points, buying triggers, and decision criteria.',
        features: ['3 Detailed personas', 'Psychographic profiles', 'Channel preference map'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Industry Trends & Reports',
        description: 'In-depth research report highlighting macroeconomic shifts and technology disruptions.',
        features: ['Comprehensive PDF report', 'Key trend takeaways', 'Strategic implications'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'SWOT & PESTLE Analysis',
        description: 'Framework analysis assessing Internal Strengths/Weaknesses & External Macro Drivers.',
        features: ['SWOT Matrix diagram', 'PESTLE Factor report', 'Risk mitigation steps'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Customer Surveys & Interviews',
        description: 'Structured survey design and qualitative feedback analysis to decode customer intent.',
        features: ['Survey question design', 'Response synthesis', 'Actionable takeaways'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Competitor Benchmarking',
        description: 'Quantitative benchmark scoring your product against top 5 industry rivals.',
        features: ['Feature scorecard', 'Pricing benchmark', 'UX/UI rating scale'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Product Demand Validation',
        description: 'Pre-launch smoke testing and search volume analysis to validate commercial viability.',
        features: ['Keyword demand metrics', 'Landing page validation test', 'Interest score'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Market Size Estimation',
        description: 'Rigorous Top-Down and Bottom-Up market calculations for TAM, SAM, and SOM.',
        features: ['TAM/SAM/SOM breakdown', 'Growth rate projections', 'Investor-grade chart'],
        price: '$99',
        delivery: '3 days',
      },
    ],
  },
  {
    id: 'pitch-deck',
    title: 'Pitch Deck & Funding Support',
    tagline: 'Investor-ready storyboards and financial models designed to close capital rounds.',
    iconName: 'file-text',
    accentColor: '#B0EDF9',
    badge: 'Investor Ready',
    sub: [
      {
        title: 'Investor-Ready Pitch Deck Design',
        description: '15-slide compelling pitch deck formatted to capture VC & Angel investor interest.',
        features: ['Narrative storytelling structure', 'Custom slide design', 'Editable PowerPoint/Figma'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Business Plan Writing',
        description: 'Formal business plan document formatted for institutional lenders and grant applications.',
        features: ['Executive summary', 'Operational plan', 'Financial outline'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Financial Projection Modeling',
        description: 'Dynamic 5-year pro-forma financial model including P&L, Balance Sheet, and Cash Flow.',
        features: ['Excel/Google Sheet model', 'KPI assumptions tab', 'Cap table overview'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Startup Valuation Consulting',
        description: 'Multi-method valuation estimate (Berkus, DCF, Scorecard) for fundraising negotiations.',
        features: ['Valuation summary sheet', 'Methodology rationale', 'Negotiation points'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Fundraising Strategy',
        description: 'Step-by-step roadmap for seed, series A, or strategic debt financing rounds.',
        features: ['Investor target persona', 'Outreach email scripts', 'Data room checklist'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Angel/VC Matching',
        description: 'Curated list of venture funds and active angel investors specializing in your sector.',
        features: ['50+ Verified investor contacts', 'Investment thesis alignment', 'Warm intro scripts'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Pitch Rehearsal & Feedback Sessions',
        description: 'Mock pitch practice sessions with seasoned advisors to refine Q&A responses.',
        features: ['1-on-1 Mock pitch call', 'Tough Q&A preparation', 'Slide tweak notes'],
        price: '$99',
        delivery: '3 days',
      },
    ],
  },
  {
    id: 'sales-funnel',
    title: 'Sales Funnel Building',
    tagline: 'Engineer multi-step conversion funnels that maximize lifetime customer value.',
    iconName: 'rocket',
    accentColor: '#B0EDF9',
    badge: 'Conversion Engine',
    sub: [
      {
        title: 'Funnel Strategy Blueprint',
        description: 'Architectural schematic detailing user journey steps from first impression to checkout.',
        features: ['Visual funnel flow diagram', 'Offer stack structure', 'Upsell/Downsell path'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Landing Page & Email Funnel Setup',
        description: 'Turnkey development of landing pages and automated email nurture sequences.',
        features: ['High-speed landing page', 'Automated email sequence', 'CRM integration'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Lead Magnet Creation',
        description: 'High-value downloadable guides, cheat sheets, or interactive calculators that collect leads.',
        features: ['Content writing', 'Graphic PDF design', 'Opt-in delivery email'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Conversion Rate Optimization (CRO)',
        description: 'Systematic UX audit and heat-map review to eliminate drop-off points in your funnel.',
        features: ['UX friction audit', 'A/B test suggestions', 'Checkout optimization'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Sales Copywriting',
        description: 'Persuasive direct-response sales copy crafted to handle objections and trigger action.',
        features: ['Headline variations', 'Objection handling blocks', 'Call-to-action scripts'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Funnel Analytics & A/B Testing',
        description: 'Set up step-by-step conversion funnel tracking and split-testing dashboards.',
        features: ['Funnel conversion tracking', 'Google Tag Manager setup', 'A/B test dashboard'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Retargeting & Upsell Funnels',
        description: 'One-click upsell sequences and retargeting ads that increase Average Order Value (AOV).',
        features: ['Order bump strategies', '1-Click upsell pages', 'Ad pixel triggers'],
        price: '$99',
        delivery: '3 days',
      },
    ],
  },
  {
    id: 'legal-consultancy',
    title: 'Startup Registration & Legal Consultancy',
    tagline: 'Protect your business assets, ensure compliance, and streamline corporate filings.',
    iconName: 'shield',
    accentColor: '#B0EDF9',
    badge: 'Essential',
    sub: [
      {
        title: 'Company Incorporation (Private Ltd, LLP, etc.)',
        description: 'End-to-end guidance for registering your corporate legal entity with government registries.',
        features: ['Name availability check', 'Document checklist', 'Filing assistance'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'GST, MSME, and Startup India Registration',
        description: 'Complete registration setup for tax IDs, government subsidies, and startup tax benefits.',
        features: ['Tax ID registration', 'Government portal filing', 'Certificate issuance'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Trademark & IP Filing',
        description: 'Secure rights for your brand name, logo, and proprietary IP assets.',
        features: ['Trademark search', 'Application filing draft', 'IP portfolio advice'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: "Founders' Agreement Drafting",
        description: 'Custom equity split agreements, vesting schedules, and IP assignment clauses.',
        features: ['Vesting schedule setup', 'IP assignment terms', 'Dispute resolution rules'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Legal Compliance Checklist',
        description: 'Custom corporate compliance matrix detailing required filings and tax deadlines.',
        features: ['Annual compliance calendar', 'Data privacy checklist', 'Labor law overview'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'NDA & Employment Contract Drafting',
        description: 'Bulletproof Non-Disclosure, Employment, and Independent Contractor agreements.',
        features: ['Standard NDA draft', 'Contractor agreement', 'Non-compete clauses'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Investment Term Sheet Review',
        description: 'Legal review of VC term sheets analyzing liquidation preferences and governance rights.',
        features: ['Clause breakdown', 'Founder protection check', 'Negotiation strategy'],
        price: '$99',
        delivery: '3 days',
      },
    ],
  },
  {
    id: 'web-app-dev',
    title: 'Website & App Development',
    tagline: 'High-performance digital products built with modern web technologies.',
    iconName: 'code',
    accentColor: '#B0EDF9',
    badge: 'Tech Stack',
    sub: [
      {
        title: 'UI/UX Design & Wireframing',
        description: 'Modern Figma interactive prototypes and design systems tailored for your brand.',
        features: ['Figma design system', 'Interactive prototype', 'Mobile responsive specs'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Responsive Website Development',
        description: 'Lightning-fast marketing website built with React, Vite, Tailwind, and sleek animations.',
        features: ['100% Mobile responsive', 'SEO optimized code', 'Smooth GSAP animations'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'E-commerce Store Setup (Shopify, WooCommerce)',
        description: 'High-converting online store with seamless payment gateway integration and inventory sync.',
        features: ['Payment gateway setup', 'Product catalog layout', 'Cart optimization'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Custom Web App Development',
        description: 'Full-stack web application built with modern APIs, database models, and secure auth.',
        features: ['REST/GraphQL API design', 'Database schema setup', 'Secure user auth'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Mobile App Development (iOS & Android)',
        description: 'Cross-platform mobile apps delivering native performance and offline capabilities.',
        features: ['React Native / Flutter app', 'App Store submission guide', 'Push notifications'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Backend Integration (APIs, Databases)',
        description: 'Connect third-party webhooks, payment processors, and cloud databases to your front-end.',
        features: ['Stripe / PayPal integration', 'Firebase / Supabase database', 'Serverless functions'],
        price: '$99',
        delivery: '3 days',
      },
      {
        title: 'Hosting, Domain & Deployment Support',
        description: 'Set up high-availability cloud hosting (Vercel, AWS, Cloudflare) with SSL security.',
        features: ['Domain DNS configuration', 'Vercel / AWS deployment', 'Free SSL certificate'],
        price: '$99',
        delivery: '3 days',
      },
    ],
  },
];

const renderIcon = (name: string, className = "w-6 h-6") => {
  switch (name) {
    case 'bot': return <Bot className={className} />;
    case 'star': return <Star className={className} />;
    case 'trending-up': return <TrendingUp className={className} />;
    case 'globe': return <Globe className={className} />;
    case 'users': return <Users className={className} />;
    case 'briefcase': return <Briefcase className={className} />;
    case 'file-text': return <FileText className={className} />;
    case 'rocket': return <Rocket className={className} />;
    case 'shield': return <ShieldCheck className={className} />;
    case 'code': return <Code2 className={className} />;
    default: return <Sparkles className={className} />;
  }
};

const Services: React.FC = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);

  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeViewMode, setActiveViewMode] = useState<'explorer' | 'bundle'>('explorer');
  const [inspectorCategory, setInspectorCategory] = useState<ServiceCategory | null>(null);
  
  // Custom Service Bundle Cart State
  const [selectedBundleServices, setSelectedBundleServices] = useState<Array<{ categoryTitle: string; subTitle: string; price: string }>>([]);

  // Filtered categories
  const filteredCategories = useMemo(() => {
    return SERVICE_CATEGORIES.filter((cat) => {
      const matchesCategory = activeCategoryFilter === 'all' || cat.id === activeCategoryFilter;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesTitle = cat.title.toLowerCase().includes(q);
      const matchesTagline = cat.tagline.toLowerCase().includes(q);
      const matchesSub = cat.sub.some(s => s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q));

      return matchesCategory && (matchesTitle || matchesTagline || matchesSub);
    });
  }, [activeCategoryFilter, searchQuery]);

  // GSAP animations
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.fromTo('.services-hero-animate', 
        { opacity: 0, y: 30 }, 
        {
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.15, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Handle bundle selection toggle
  const toggleBundleService = (categoryTitle: string, subTitle: string, price: string) => {
    setSelectedBundleServices(prev => {
      const exists = prev.some(item => item.categoryTitle === categoryTitle && item.subTitle === subTitle);
      if (exists) {
        return prev.filter(item => !(item.categoryTitle === categoryTitle && item.subTitle === subTitle));
      } else {
        return [...prev, { categoryTitle, subTitle, price }];
      }
    });
  };

  const isServiceInBundle = (categoryTitle: string, subTitle: string) => {
    return selectedBundleServices.some(item => item.categoryTitle === categoryTitle && item.subTitle === subTitle);
  };

  const handleSendBundleInquiry = () => {
    if (selectedBundleServices.length === 0) return;
    const selectedTitles = selectedBundleServices.map(s => `${s.categoryTitle}: ${s.subTitle}`).join(', ');
    navigate('/contact', { state: { selectedServices: selectedTitles, customBundleCount: selectedBundleServices.length } });
  };

  return (
    <section id="services" ref={sectionRef} className="relative z-10 py-16 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#021C2A] services-glow-bg min-h-screen text-white overflow-hidden">
      
      {/* Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B0EDF9]/5 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 services-hero-animate">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#04344C]/80 border border-[#B0EDF9]/30 rounded-full text-[#B0EDF9] text-xs md:text-sm font-semibold tracking-wide uppercase mb-6 shadow-md">
            <Sparkles className="w-4 h-4 text-[#B0EDF9]" />
            Strategic Solutions Architecture
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
            Services Engineered for <br className="hidden sm:inline" />
            <span className="text-[#B0EDF9]">
              Modern Enterprise Scale
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4">
            Explore 10 specialized execution domains offering 70+ turnkey business solutions. Filter by category, inspect deliverables, or build a custom strategy bundle in real-time.
          </p>

          {/* Metrics Counter Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-10 p-4 bg-[#04344C]/40 border border-[#B0EDF9]/15 rounded-2xl backdrop-blur-md">
            <div className="p-3 text-center border-r border-white/10 last:border-r-0">
              <div className="text-2xl sm:text-3xl font-black text-[#B0EDF9]">10</div>
              <div className="text-xs text-slate-400 font-medium">Core Domains</div>
            </div>
            <div className="p-3 text-center md:border-r border-white/10">
              <div className="text-2xl sm:text-3xl font-black text-white">70+</div>
              <div className="text-xs text-slate-400 font-medium">Turnkey Solutions</div>
            </div>
            <div className="p-3 text-center border-r border-white/10">
              <div className="text-2xl sm:text-3xl font-black text-[#B0EDF9]">3 Days</div>
              <div className="text-xs text-slate-400 font-medium">Typical Turnaround</div>
            </div>
            <div className="p-3 text-center">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">99.4%</div>
              <div className="text-xs text-slate-400 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Control Bar: Mode Toggle + Search + Filter Pills */}
        <div className="mb-10 space-y-6 services-hero-animate">
          
          {/* Mode Switcher & Search Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-2 bg-[#04344C]/60 border border-[#B0EDF9]/20 rounded-2xl backdrop-blur-md">
            
            {/* View Mode Toggle */}
            <div className="flex items-center p-1 bg-[#021C2A] rounded-xl border border-white/5 w-full md:w-auto">
              <button
                onClick={() => setActiveViewMode('explorer')}
                className={`flex-1 md:flex-initial px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200 ${
                  activeViewMode === 'explorer' 
                    ? 'bg-[#B0EDF9] text-[#04344C] shadow-lg' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-4 h-4" />
                Service Explorer Grid
              </button>
              
              <button
                onClick={() => setActiveViewMode('bundle')}
                className={`flex-1 md:flex-initial px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200 ${
                  activeViewMode === 'bundle' 
                    ? 'bg-[#B0EDF9] text-[#04344C] shadow-lg' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Bundle Architect ({selectedBundleServices.length})
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search services, e.g. 'SEO', 'AI', 'Pitch'..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#021C2A] border border-white/10 focus:border-[#B0EDF9]/50 rounded-xl text-xs md:text-sm text-white placeholder-slate-400 focus:outline-none transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills (Visible in Explorer mode) */}
          {activeViewMode === 'explorer' && (
            <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-2 pt-1 select-none">
              <button
                onClick={() => setActiveCategoryFilter('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                  activeCategoryFilter === 'all'
                    ? 'bg-[#B0EDF9] text-[#04344C]'
                    : 'bg-[#04344C]/40 border border-white/10 text-slate-300 hover:border-[#B0EDF9]/40 hover:text-white'
                }`}
              >
                All Domains ({SERVICE_CATEGORIES.length})
              </button>

              {SERVICE_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryFilter(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-2 transition-all duration-200 ${
                    activeCategoryFilter === cat.id
                      ? 'bg-[#B0EDF9] text-[#04344C]'
                      : 'bg-[#04344C]/40 border border-white/10 text-slate-300 hover:border-[#B0EDF9]/40 hover:text-white'
                  }`}
                >
                  {renderIcon(cat.iconName, "w-3.5 h-3.5")}
                  <span>{cat.title}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* View Mode 1: Explorer Bento Grid */}
        {activeViewMode === 'explorer' && (
          <div>
            {filteredCategories.length === 0 ? (
              <div className="text-center py-20 bg-[#04344C]/20 border border-white/10 rounded-3xl">
                <Search className="w-12 h-12 text-slate-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">No Matching Services Found</h3>
                <p className="text-slate-400 text-sm mb-6">Try searching with a different keyword or resetting filters.</p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategoryFilter('all'); }}
                  className="px-6 py-2.5 bg-[#B0EDF9] text-[#04344C] font-bold rounded-xl text-xs uppercase tracking-wider"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div ref={cardsGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCategories.map((cat) => (
                  <div
                    key={cat.id}
                    className="glass-bento-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative group overflow-hidden"
                  >
                    {/* Top Glow Accent Bar */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-1 transition-all duration-300"
                      style={{ backgroundColor: cat.accentColor }}
                    />

                    <div>
                      {/* Card Header */}
                      <div className="flex items-start justify-between gap-3 mb-5">
                        <div className="p-3.5 bg-[#021C2A] border border-white/10 rounded-2xl text-white group-hover:scale-105 transition-transform duration-300">
                          {renderIcon(cat.iconName, "w-6 h-6 text-[#B0EDF9]")}
                        </div>
                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-slate-300 tracking-wider">
                          {cat.badge}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-[#B0EDF9] transition-colors duration-200">
                        {cat.title}
                      </h3>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                        {cat.tagline}
                      </p>

                      {/* Sub-services Teaser (Top 3) */}
                      <div className="space-y-2 mb-6">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Key Deliverables ({cat.sub.length}):
                        </div>
                        {cat.sub.slice(0, 3).map((subItem, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 font-medium truncate">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#B0EDF9] flex-shrink-0" />
                            <span className="truncate">{subItem.title}</span>
                          </div>
                        ))}
                        {cat.sub.length > 3 && (
                          <div className="text-xs text-slate-400 font-medium pl-5">
                            + {cat.sub.length - 3} more sub-services available
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Card Actions Footer */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                      <button
                        onClick={() => setInspectorCategory(cat)}
                        className="flex-1 py-2.5 px-4 bg-white/5 border border-white/10 hover:bg-[#B0EDF9] hover:text-[#04344C] text-white rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 active:scale-95"
                      >
                        Inspect All ({cat.sub.length})
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => {
                          setInspectorCategory(cat);
                        }}
                        className="p-2.5 bg-[#04344C] border border-[#B0EDF9]/30 text-[#B0EDF9] hover:bg-[#B0EDF9] hover:text-[#04344C] rounded-xl transition-all duration-200 active:scale-95"
                        title="Quick View Category"
                      >
                        <Zap className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* View Mode 2: Bundle Architect (Interactive Custom Service Package Builder) */}
        {activeViewMode === 'bundle' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Service Selection Checklist (2 Columns on Large Screens) */}
            <div className="lg:col-span-2 space-y-6">
              <div className="p-6 bg-[#04344C]/40 border border-[#B0EDF9]/20 rounded-3xl backdrop-blur-md">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5 text-[#B0EDF9]" />
                  Select Services to Build Custom Execution Package
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mb-6">
                  Check any sub-services below to compute real-time turnaround benchmarks and generate a tailored execution strategy quote.
                </p>

                <div className="space-y-6 max-h-[600px] overflow-y-auto custom-scrollbar pr-2">
                  {SERVICE_CATEGORIES.map((cat) => (
                    <div key={cat.id} className="p-4 bg-[#021C2A]/70 border border-white/10 rounded-2xl">
                      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/10">
                        {renderIcon(cat.iconName, "w-4 h-4 text-[#B0EDF9]")}
                        <h4 className="text-sm font-bold text-white">{cat.title}</h4>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {cat.sub.map((sub, idx) => {
                          const selected = isServiceInBundle(cat.title, sub.title);
                          return (
                            <div
                              key={idx}
                              onClick={() => toggleBundleService(cat.title, sub.title, sub.price)}
                              className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                                selected
                                  ? 'bg-[#04344C] border-[#B0EDF9] text-white'
                                  : 'bg-white/5 border-white/5 hover:border-white/20 text-slate-300'
                              }`}
                            >
                              <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                                selected ? 'bg-[#B0EDF9] text-[#04344C]' : 'border border-white/30'
                              }`}>
                                {selected && <Check className="w-3 h-3" />}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-xs font-bold leading-tight truncate">{sub.title}</div>
                                <div className="text-xs text-slate-400 mt-1 flex items-center justify-between">
                                  <span>{sub.delivery}</span>
                                  <span className="text-[#B0EDF9] font-bold">{sub.price}</span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Bundle Summary Drawer / Card */}
            <div className="space-y-6">
              <div className="p-6 bg-[#04344C] border border-[#B0EDF9]/40 rounded-3xl shadow-2xl sticky top-24">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                  <h4 className="text-lg font-extrabold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#B0EDF9]" />
                    Custom Bundle Summary
                  </h4>
                  <span className="px-3 py-1 bg-[#B0EDF9]/20 text-[#B0EDF9] text-xs font-bold rounded-full">
                    {selectedBundleServices.length} Selected
                  </span>
                </div>

                {selectedBundleServices.length === 0 ? (
                  <div className="text-center py-10 text-slate-400 text-xs">
                    No services selected yet. Click any service on the left to add it to your custom bundle.
                  </div>
                ) : (
                  <>
                    <div className="space-y-3 mb-6 max-h-60 overflow-y-auto custom-scrollbar pr-1">
                      {selectedBundleServices.map((item, idx) => (
                        <div key={idx} className="p-2.5 bg-[#021C2A] border border-white/10 rounded-xl flex items-center justify-between text-xs">
                          <div className="truncate pr-2">
                            <div className="font-bold text-white truncate">{item.subTitle}</div>
                            <div className="text-xs text-slate-400 truncate">{item.categoryTitle}</div>
                          </div>
                          <button
                            onClick={() => toggleBundleService(item.categoryTitle, item.subTitle, item.price)}
                            className="text-slate-500 hover:text-red-400 p-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3 mb-6 pt-4 border-t border-white/10 text-xs">
                      <div className="flex justify-between text-slate-300">
                        <span>Total Services:</span>
                        <span className="font-bold text-white">{selectedBundleServices.length} Items</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Est. Turnaround:</span>
                        <span className="font-bold text-[#B0EDF9]">3 - 5 Business Days</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Package Support:</span>
                        <span className="font-bold text-emerald-400">Dedicated Strategist Included</span>
                      </div>
                    </div>

                    <button
                      onClick={handleSendBundleInquiry}
                      className="w-full py-3 px-4 bg-[#B0EDF9] hover:bg-white text-[#04344C] font-extrabold rounded-xl text-xs uppercase tracking-wider shadow-lg transition-all duration-200 flex items-center justify-center gap-2 active:scale-95"
                    >
                      <Send className="w-4 h-4" />
                      Request Custom Package Quote
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Bottom Callout CTA */}
        <div className="mt-16 md:mt-24 p-8 sm:p-10 bg-gradient-to-r from-[#04344C] via-[#021C2A] to-[#04344C] border border-[#B0EDF9]/30 rounded-3xl text-center relative overflow-hidden services-hero-animate">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Need a Custom Enterprise Solution?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">
              Have specific compliance requirements or complex integrations? Schedule a 1-on-1 discovery session with our lead strategic consultants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-3.5 bg-[#B0EDF9] text-[#04344C] font-extrabold rounded-xl text-xs uppercase tracking-wider hover:bg-white transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
              >
                Book Strategic Consultation
                <ExternalLink className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('/services')}
                className="px-8 py-3.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all"
              >
                View Full Service Catalogue
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Sub-Services Inspector Side Drawer / Modal */}
      {inspectorCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-all duration-300">
          <div 
            className="bg-[#021C2A] border border-[#B0EDF9]/40 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#04344C]/60">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#021C2A] border border-[#B0EDF9]/30 rounded-xl">
                  {renderIcon(inspectorCategory.iconName, "w-6 h-6 text-[#B0EDF9]")}
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white leading-tight">
                    {inspectorCategory.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">{inspectorCategory.tagline}</p>
                </div>
              </div>

              <button
                onClick={() => setInspectorCategory(null)}
                className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body: Sub-services Grid */}
            <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {inspectorCategory.sub.map((item, idx) => {
                  const inBundle = isServiceInBundle(inspectorCategory.title, item.title);
                  return (
                    <div
                      key={idx}
                      className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                        inBundle 
                          ? 'bg-[#04344C]/80 border-[#B0EDF9]' 
                          : 'bg-[#04344C]/30 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h4 className="font-bold text-white text-base leading-snug">
                            {item.title}
                          </h4>
                          <span className="text-xs font-bold text-[#B0EDF9] bg-[#021C2A] px-2.5 py-1 rounded-lg border border-[#B0EDF9]/20 flex-shrink-0">
                            {item.price}
                          </span>
                        </div>

                        <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-1.5 mb-4">
                          {item.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-center text-xs text-slate-300 font-medium gap-2">
                              <Check className="w-3.5 h-3.5 text-[#B0EDF9] flex-shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Footer Actions */}
                      <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                        <div className="flex items-center text-xs text-slate-400 gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#B0EDF9]" />
                          <span>{item.delivery}</span>
                        </div>

                        <button
                          onClick={() => toggleBundleService(inspectorCategory.title, item.title, item.price)}
                          className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                            inBundle
                              ? 'bg-emerald-500 text-white'
                              : 'bg-[#B0EDF9] text-[#04344C] hover:bg-white'
                          }`}
                        >
                          {inBundle ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              Added to Bundle
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              Add to Bundle
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-white/10 bg-[#04344C]/40 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-300">
                <span>Total sub-services in domain: </span>
                <span className="font-bold text-white">{inspectorCategory.sub.length}</span>
              </div>

              <div className="flex gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setActiveViewMode('bundle');
                    setInspectorCategory(null);
                  }}
                  className="flex-1 sm:flex-initial px-5 py-2.5 bg-[#B0EDF9] text-[#04344C] font-bold rounded-xl text-xs uppercase tracking-wider hover:bg-white transition-all"
                >
                  Configure In Bundle Architect
                </button>
                
                <button
                  onClick={() => setInspectorCategory(null)}
                  className="px-5 py-2.5 bg-white/10 text-white font-bold rounded-xl text-xs uppercase tracking-wider hover:bg-white/20 transition-all"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Services;
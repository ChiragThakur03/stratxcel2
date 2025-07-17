import React from 'react';
import { Bot, Star, TrendingUp, Globe, Rocket, Users, Briefcase, FileText, Code2 } from 'lucide-react';

const SERVICES = [
  {
    icon: <Bot className="w-8 h-8 text-purple-400" />,
    title: 'AI-Powered Business Automation',
    sub: [
      'Workflow Automation with AI',
      'Chatbot Development (Customer Support Bots)',
      'AI-Based Inventory Management',
      'Predictive Analytics for Sales',
      'CRM & Email Automation Integration',
      'AI-Powered Report Generation',
      'Intelligent Lead Scoring System',
    ],
  },
  {
    icon: <Star className="w-8 h-8 text-pink-400" />,
    title: 'Branding & Positioning',
    sub: [
      'Brand Identity Design (Logo, Colors, Typography)',
      'Brand Messaging & Voice Strategy',
      'Competitor Brand Analysis',
      'Tagline & Slogan Creation',
      'Rebranding Services',
      'Brand Guidelines Documentation',
      'Positioning Map & Strategy',
    ],
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
    title: 'Business Development Strategy',
    sub: [
      'Market Entry Strategy',
      'Strategic Partnerships & Alliances',
      'Sales Strategy & Roadmap',
      'Competitive Landscape Mapping',
      'Product-Market Fit Analysis',
      'Go-To-Market (GTM) Planning',
      'Revenue Forecasting & Modeling',
    ],
  },
  {
    icon: <Globe className="w-8 h-8 text-green-400" />,
    title: 'Digital Marketing',
    sub: [
      'SEO (Search Engine Optimization)',
      'Social Media Marketing (SMM)',
      'Google Ads & PPC Management',
      'Content Marketing Strategy',
      'Email Marketing Campaigns',
      'Influencer Marketing Setup',
      'Marketing Analytics & Reporting',
    ],
  },
  {
    icon: <Users className="w-8 h-8 text-yellow-400" />,
    title: 'Lead Generation & CRM Setup',
    sub: [
      'B2B/B2C Lead Generation Strategy',
      'Landing Page & Funnel Creation',
      'CRM Integration (HubSpot, Zoho, Salesforce)',
      'Lead Nurturing Automation',
      'LinkedIn Lead Outreach',
      'Lead Qualification Framework',
      'Email Capture & Retargeting Setup',
    ],
  },
  {
    icon: <Briefcase className="w-8 h-8 text-orange-400" />,
    title: 'Market Research & Analysis',
    sub: [
      'Target Audience Profiling',
      'Industry Trends & Reports',
      'SWOT & PESTLE Analysis',
      'Customer Surveys & Interviews',
      'Competitor Benchmarking',
      'Product Demand Validation',
      'Market Size Estimation',
    ],
  },
  {
    icon: <FileText className="w-8 h-8 text-cyan-400" />,
    title: 'Pitch Deck & Funding Support',
    sub: [
      'Investor-Ready Pitch Deck Design',
      'Business Plan Writing',
      'Financial Projection Modeling',
      'Startup Valuation Consulting',
      'Fundraising Strategy',
      'Angel/VC Matching',
      'Pitch Rehearsal & Feedback Sessions',
    ],
  },
  {
    icon: <Rocket className="w-8 h-8 text-fuchsia-400" />,
    title: 'Sales Funnel Building',
    sub: [
      'Funnel Strategy Blueprint',
      'Landing Page & Email Funnel Setup',
      'Lead Magnet Creation',
      'Conversion Rate Optimization (CRO)',
      'Sales Copywriting',
      'Funnel Analytics & A/B Testing',
      'Retargeting & Upsell Funnels',
    ],
  },
  {
    icon: <Users className="w-8 h-8 text-green-400" />,
    title: 'Startup Registration & Legal Consultancy',
    sub: [
      'Company Incorporation (Private Ltd, LLP, etc.)',
      'GST, MSME, and Startup India Registration',
      'Trademark & IP Filing',
      "Founders' Agreement Drafting",
      'Legal Compliance Checklist',
      'NDA & Employment Contract Drafting',
      'Investment Term Sheet Review',
    ],
  },
  {
    icon: <Code2 className="w-8 h-8 text-blue-400" />,
    title: 'Website & App Development',
    sub: [
      'UI/UX Design & Wireframing',
      'Responsive Website Development',
      'E-commerce Store Setup (Shopify, WooCommerce)',
      'Custom Web App Development',
      'Mobile App Development (iOS & Android)',
      'Backend Integration (APIs, Databases)',
      'Hosting, Domain & Deployment Support',
    ],
  },
];

const Services: React.FC = () => {
  return (
    <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Our Services
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive business solutions tailored to accelerate your growth and success
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-gray-800/80 via-gray-900/60 to-black/40 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-pink-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon and title header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-2xl border border-gray-600/30 group-hover:border-purple-400/50 transition-all duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300 leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Services list */}
                <div className="space-y-3">
                  {service.sub.map((sub, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 group/item opacity-80 group-hover:opacity-100 transition-all duration-300"
                      style={{ animationDelay: `${i * 50}ms` }}
                    >
                      <div className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 group-hover/item:scale-150 transition-transform duration-200"></div>
                      <span className="text-gray-300 text-sm leading-relaxed group-hover/item:text-white transition-colors duration-200">
                        {sub}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover overlay with subtle pattern */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Animated corner accent */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-16">
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
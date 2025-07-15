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
    <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 animate-fade-in-up">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Services</h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">Explore our detailed sub-services for each business solution.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="bg-gray-800/60 border border-purple-500/20 rounded-2xl p-8 flex flex-col shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300 group hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-200">{service.title}</h3>
              </div>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-2 pl-2">
                {service.sub.map((sub, i) => (
                  <li key={i}>{sub}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

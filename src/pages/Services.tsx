import React from 'react';
import { Bot, Star, TrendingUp, Globe, Rocket, Users, Briefcase, FileText, Code2 } from 'lucide-react';

const SERVICES = [
  {
    icon: <Bot className="w-7 h-7 text-[#B0EDF9]" />,
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
    icon: <Star className="w-7 h-7 text-[#B0EDF9]" />,
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
    icon: <TrendingUp className="w-7 h-7 text-[#B0EDF9]" />,
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
    icon: <Globe className="w-7 h-7 text-[#B0EDF9]" />,
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
    icon: <Users className="w-7 h-7 text-[#B0EDF9]" />,
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
    icon: <Briefcase className="w-7 h-7 text-[#B0EDF9]" />,
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
    icon: <FileText className="w-7 h-7 text-[#B0EDF9]" />,
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
    icon: <Rocket className="w-7 h-7 text-[#B0EDF9]" />,
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
    icon: <Users className="w-7 h-7 text-[#B0EDF9]" />,
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
    icon: <Code2 className="w-7 h-7 text-[#B0EDF9]" />,
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
    <section className="relative z-10 py-24 px-6 sm:px-8 lg:px-12 min-h-screen bg-[#021C2A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-4">
            Our Core Services
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Comprehensive business solutions tailored to accelerate your growth and strategic execution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#04344C]/70 border border-[#B0EDF9]/20 hover:border-[#B0EDF9]/50 rounded-3xl p-6 shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="p-3 bg-[#021C2A] border border-[#B0EDF9]/30 rounded-xl flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {service.title}
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {service.sub.map((sub, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                      <span className="w-1.5 h-1.5 bg-[#B0EDF9] rounded-full flex-shrink-0" />
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
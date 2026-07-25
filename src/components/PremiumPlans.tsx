import React, { useState } from 'react';
import { 
  Check, Crown, Rocket, Building2, Star, Zap, Shield, Users, 
  ArrowRight, Sparkles, Sliders, CheckCircle2, HelpCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

export const PremiumPlans: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [teamSize, setTeamSize] = useState<number>(5);

  const plans = [
    {
      id: "starter",
      name: "Starter Execution",
      badge: "Growth Stage",
      icon: <Rocket className="w-6 h-6 text-cyan-400" />,
      monthlyPrice: 99,
      yearlyPrice: 79,
      description: "Designed for agile startups and founders launching AI-driven market telemetry.",
      accentClass: "border-cyan-500/40 hover:border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.15)]",
      headerBg: "bg-cyan-950/40 border-cyan-500/30",
      buttonStyle: "bg-cyan-400 text-[#04344C] hover:bg-white font-black",
      features: [
        "Real-Time AI Competitor Telemetry",
        "Monthly Automated Strategic Audits",
        "Competitor Positioning Matrix",
        "Up to 5 Team Seats",
        "Standard Executive PDF Exports",
        "Priority Email Support (24h SLA)"
      ]
    },
    {
      id: "pro",
      name: "Professional Scale",
      badge: "MOST POPULAR",
      icon: <Crown className="w-6 h-6 text-[#04344C]" />,
      monthlyPrice: 299,
      yearlyPrice: 239,
      description: "Optimized for scaling organizations requiring custom strategy execution & senior advisor reviews.",
      accentClass: "border-[#B0EDF9] shadow-[0_0_35px_rgba(176,237,249,0.3)] scale-[1.03] z-10",
      headerBg: "bg-gradient-to-r from-[#04344C] to-[#085379] border-[#B0EDF9]/50",
      buttonStyle: "bg-[#B0EDF9] text-[#04344C] hover:bg-white font-black shadow-lg shadow-[#B0EDF9]/30",
      features: [
        "Everything in Starter Execution",
        "Bi-Weekly Senior Strategy Director Review",
        "Custom KPI & Telemetry Triggers",
        "Up to 25 Team Seats",
        "Full API & Webhook Suite Access",
        "White-Label Executive Reports",
        "Priority SLA Support (4h Window)"
      ]
    },
    {
      id: "enterprise",
      name: "Enterprise Sovereign",
      badge: "Custom Fine-Tuned",
      icon: <Building2 className="w-6 h-6 text-amber-400" />,
      monthlyPrice: 999,
      yearlyPrice: 799,
      description: "Unlimited AI model capacity, fine-tuned corporate telemetry, and dedicated Chief Advisor.",
      accentClass: "border-amber-500/40 hover:border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.15)]",
      headerBg: "bg-amber-950/30 border-amber-500/30",
      buttonStyle: "bg-amber-400 text-[#04344C] hover:bg-white font-black shadow-lg shadow-amber-500/20",
      features: [
        "Everything in Professional Scale",
        "Dedicated Chief Strategy Advisor (Ex-McKinsey)",
        "Custom Fine-Tuning on Corporate Data",
        "CRM, Salesforce & HubSpot Full Integration",
        "Unlimited Team & Workspace Seats",
        "Private Cloud & On-Premise Deployment",
        "Dedicated 24/7 Hotline & 1h SLA"
      ]
    }
  ];

  return (
    <section id="premium-plans" className="relative z-10 py-24 px-4 sm:px-6 lg:px-12 bg-[#021C2A] overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#B0EDF9]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#04344C]/80 border border-[#B0EDF9]/30 rounded-full text-[#B0EDF9] text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md">
            <Crown className="w-4 h-4 text-[#B0EDF9]" />
            Transparent Scale Pricing
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-white">
            Flexible Strategy Pricing
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            Choose the subscription plan aligned with your execution velocity. All plans include automated telemetry audits.
          </p>

          {/* Billing Switcher Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 bg-[#04344C]/80 border border-[#B0EDF9]/30 rounded-2xl backdrop-blur-md">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${
                billingCycle === 'monthly' ? 'bg-[#B0EDF9] text-[#04344C]' : 'text-slate-300 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>

            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2.5 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2 transition-all ${
                billingCycle === 'yearly' ? 'bg-[#B0EDF9] text-[#04344C]' : 'text-slate-300 hover:text-white'
              }`}
            >
              <span>Yearly Billing</span>
              <span className="px-2 py-0.5 bg-[#04344C] text-[#B0EDF9] text-[10px] font-black rounded-full border border-[#B0EDF9]/30">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid (Distinct Card Aesthetics per Tier) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {plans.map((p) => {
            const price = billingCycle === 'yearly' ? p.yearlyPrice : p.monthlyPrice;
            const isPro = p.id === 'pro';

            return (
              <div
                key={p.id}
                className={`rounded-3xl p-8 border backdrop-blur-xl bg-[#04344C]/70 flex flex-col justify-between relative transition-all duration-300 ${p.accentClass}`}
              >
                {/* Popular Floating Badge */}
                {isPro && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#B0EDF9] text-[#04344C] text-xs font-black uppercase tracking-wider rounded-full shadow-lg border border-white">
                    ⭐ MOST POPULAR CHOICE
                  </div>
                )}

                <div>
                  {/* Card Top Header */}
                  <div className={`p-4 rounded-2xl border ${p.headerBg} flex items-center justify-between mb-6`}>
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-[#021C2A] rounded-xl border border-white/10">
                        {p.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-white">{p.name}</h3>
                        <div className="text-[11px] text-slate-300 font-medium">{p.badge}</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {p.description}
                  </p>

                  {/* Price Block */}
                  <div className="mb-6 p-4 bg-[#021C2A]/60 rounded-2xl border border-white/5">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-white">${price}</span>
                      <span className="text-xs text-slate-400 font-semibold">/ month</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <div className="text-[11px] font-bold text-emerald-400 mt-1">
                        Billed annually (Saves ${(p.monthlyPrice - p.yearlyPrice) * 12}/year)
                      </div>
                    )}
                  </div>

                  {/* Features Bullet List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">What's Included:</div>
                    {p.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-200 font-medium">
                        <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isPro ? 'text-[#B0EDF9]' : 'text-emerald-400'}`} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Action CTA */}
                <button
                  onClick={() => window.open('https://stratxcel.ai', '_blank')}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 ${p.buttonStyle}`}
                >
                  <span>Select {p.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Enterprise Custom Banner */}
        <div className="p-8 bg-[#04344C]/40 border border-[#B0EDF9]/20 rounded-3xl backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Need a Custom Organization-Wide Deployment?</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              We offer tailored SLAs, private cloud hosting, and dedicated advisory boards for holding companies.
            </p>
          </div>
          <button
            onClick={() => window.open('https://stratxcel.ai', '_blank')}
            className="px-6 py-3 bg-white/10 hover:bg-[#B0EDF9] hover:text-[#04344C] text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all whitespace-nowrap"
          >
            Contact Enterprise Advisory
          </button>
        </div>

      </div>
    </section>
  );
};

export default PremiumPlans;
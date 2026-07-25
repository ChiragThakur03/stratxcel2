---
version: 1
slug: "landing-page"
primary_target: "landing-page"
related_targets: []
---

# Landing Page Brief: StratxceL

## 1. Job and Audience
- **Visitor Mode**: Persuade (visitor evaluates capability, trusts the hybrid model, and converts).
- **Target Audience**: Small-to-midsize business leaders, founders, and VP-level decision-makers looking for high-velocity strategic business intelligence and expert consulting.
- **Context & Mindset**: Evaluating AI strategy tools vs. expensive traditional consulting agencies. Needs instant proof of analytical capability and clear path to expert advisory.

## 2. Outcome and Proof
- **Primary Action**: Select a subscription plan (Starter $99, Pro $299, Enterprise $999) or book an expert consultation session.
- **Success Criteria**: Clear understanding of how AI analytics + Human expert consulting work together; high-converting plan comparison; frictionless booking entry.
- **Product Truth & Evidence**: 50,000+ businesses served across 150+ countries with 95%+ client satisfaction rate. Interactive AI strategy engine preview.

## 3. Selected Visual Direction
- **Direction Name**: Quantum Strategy Matrix (Deep Void & Radiant Plasma)
- **Visual System**: Deep void background (`#06070C`), luminous electric violet (`#7C3AED`) glow conduits, radiant emerald (`#10B981`) data pulse accents, glassmorphic container cards with subtle hairlines (`rgba(255,255,255,0.08)`), and high-contrast display typography.
- **First Viewport Thesis**: Interactive split layout—left side featuring high-impact headline, value thesis, and primary action buttons; right side featuring a dynamic live AI Strategy Telemetry module (simulated real-time competitive analysis & market forecast cards with interactive controls) alongside the Spline 3D robot.
- **Sequential Flow**:
  1. *Hero*: Split viewport with headline, live AI telemetry widget, and 3D Spline scene.
  2. *Social Proof & Metrics Bar*: 50K+ businesses, 150+ countries, 95% satisfaction ticker.
  3. *How It Works*: 3-step interactive progression (Data Ingestion -> AI Strategy Engine -> Expert Execution).
  4. *AI Capabilities Showcase*: Interactive feature cards (Competitive Radar, Predictive Forecasting, KPI Telemetry).
  5. *Pricing & Plans*: Interactive 3-tier matrix (Starter $99, Pro $299, Enterprise $999) with monthly/yearly billing toggle and feature highlighting.
  6. *Expert Advisory Hub*: Specialist consultation profiles and interactive booking drawer/modal.
  7. *Trust, Security & Footer*: Enterprise encryption badge, compliance certifications, and comprehensive navigation.

## 4. Scope and Boundaries
- **Scope**: Complete landing page architecture (`Hero.tsx`, `HowItWorks.tsx`, `Services.tsx`/`Productivity.tsx`, `PremiumPlans.tsx`, `ExpertConsultancy.tsx`, `Contact.tsx`, `Footer.tsx`).
- **Boundaries**: Retain core product facts (pricing tiers, client metrics, 3D Spline integrations). Replace outdated CSS/layout patterns with the new *Quantum Strategy Matrix* visual world.

## 5. States and Content Ranges
- **Data Ranges**:
  - Pricing: $99/mo (Starter), $299/mo (Professional), $999/mo (Enterprise).
  - Metrics: 50,000+ businesses, 150+ countries, 95% satisfaction.
- **Interactive States**: Default, Hover glow effect, Active plan selection, Billing toggle (Monthly vs Annual), Booking modal active/submitted state, Telemetry tab switching.

## 6. Interaction and Layout Intent
- **Topology**: Asymmetric split hero -> structured multi-column feature cards -> high-impact 3-tier pricing matrix -> focused expert advisory grid.
- **Motion**: Framer Motion scroll-triggered reveals, smooth tab transitions, micro-glow hovers on cards, ambient background particle/glow shifts.

## 7. Constraints and Open Decisions
- **Technical Stack**: React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, GSAP, Spline 3D (`@splinetool/react-spline`).
- **Platform**: Web (fully responsive across mobile, tablet, desktop).
- **Accessibility**: High contrast text ratios, focus rings, semantic section landmarks.

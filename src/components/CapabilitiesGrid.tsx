
import React from 'react';
import { Users, Target, Rocket, Heart, BarChart3, TrendingUp, Building2, Brain, Presentation, Zap } from 'lucide-react';

const capabilities = [
  {
    title: "Fractional Product Leadership",
    icon: Users,
    description: "Embed senior-level product leadership into your team to drive clarity, focus, and results—without the overhead of a full-time hire."
  },
  {
    title: "Cross-Functional Team Orchestration",
    icon: Target,
    description: "Lead and align product, design, engineering, and business teams around shared goals with velocity and transparency."
  },
  {
    title: "Zero-to-One Product Development",
    icon: Rocket,
    description: "Take early-stage concepts from idea to launch with structured, validated roadmaps and crisp execution—used by startups like StyleRow and BeClear."
  },
  {
    title: "Customer-Centric Platform Design",
    icon: Heart,
    description: "Build product experiences around the real needs of users—improving retention, satisfaction, and business outcomes, as proven across B2B2C and enterprise SaaS platforms."
  },
  {
    title: "Data-Informed Prioritization and Ops",
    icon: BarChart3,
    description: "Set up frameworks that move product and BI teams from siloed activity to business-aligned delivery—like at Real Defense's BI and Ecommerce functions."
  },
  {
    title: "GTM and Monetization Strategy",
    icon: TrendingUp,
    description: "Translate product innovation into market traction and revenue through positioning, packaging, and cross-channel rollout planning."
  },
  {
    title: "Enterprise Readiness & Scaling",
    icon: Building2,
    description: "Design scalable infrastructure and internal processes that support client onboarding, customer care, and high-growth environments—experience spanning Series A startups to $50MM+ ARR businesses."
  },
  {
    title: "AI and Emerging Tech Integration",
    icon: Brain,
    description: "Shape and ship future-forward products—Web3 loyalty platforms, AI-powered coaching apps, or decentralized fan engagement tools—grounded in real commercial use cases."
  },
  {
    title: "Executive-Level Communication & Strategy",
    icon: Presentation,
    description: "Craft and present compelling product strategies and business cases to boards, investors, and C-suites—securing funding and buy-in."
  },
  {
    title: "Fast-Start Engagements That Deliver",
    icon: Zap,
    description: "Plug in quickly, find high-leverage opportunities, and start delivering value within the first week—ideal for fast-moving teams that need senior horsepower now."
  }
];

const CapabilitiesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {capabilities.map((capability, index) => {
        const IconComponent = capability.icon;
        return (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-accentBlue/10 rounded-lg flex items-center justify-center">
                <IconComponent className="w-5 h-5 text-accentBlue" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2 leading-tight">
                  {capability.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {capability.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CapabilitiesGrid;

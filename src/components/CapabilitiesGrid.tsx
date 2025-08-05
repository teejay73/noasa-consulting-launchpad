
import React, { useState } from 'react';
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
    title: "0→1 and 1→10 Product Development",
    icon: Rocket,
    description: "Guiding products from concept to MVP, and from MVP to real market traction and scaling."
  },
  {
    title: "Customer-Centered Platform Design",
    icon: Heart,
    description: "Building intuitive, scalable products rooted in real user needs and behavior."
  },
  {
    title: "Data-Driven Prioritization & Operations",
    icon: BarChart3,
    description: "Using metrics, insights, and structured workflows to focus teams and accelerate delivery."
  },
  {
    title: "Go-to-Market (GTM) Strategy & Execution",
    icon: TrendingUp,
    description: "Connecting product, marketing, and sales to drive adoption, revenue, and brand."
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {capabilities.map((capability, index) => {
        const IconComponent = capability.icon;
        const isHovered = hoveredIndex === index;
        
        return (
          <div
            key={index}
            className="relative bg-cardBg/50 border border-white/5 rounded-lg p-6 hover:shadow-[0_0_20px_rgba(86,204,242,0.2)] hover:border-techBlue-light/30 transition-all duration-300 cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setHoveredIndex(isHovered ? null : index)} // For mobile
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-techBlue-light/10 rounded-lg flex items-center justify-center">
                <IconComponent className="w-5 h-5 text-techBlue-light" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white leading-tight">
                  {capability.title}
                </h3>
              </div>
            </div>
            
            {/* Overlay */}
            {isHovered && (
              <div className="absolute inset-0 bg-cardBg/95 backdrop-blur-sm border border-techBlue-light/50 rounded-lg p-6 shadow-xl z-10 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-techBlue-light/20 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-techBlue-light" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-3 leading-tight">
                      {capability.title}
                    </h3>
                    <p className="text-sm text-techGray-light leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CapabilitiesGrid;

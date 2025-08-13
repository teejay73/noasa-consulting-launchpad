
import React, { useState } from 'react';
import { Users, Target, Rocket, Heart, BarChart3, TrendingUp, Building2, Brain, Presentation, Zap } from 'lucide-react';

const capabilities = [
  {
    title: "Fractional Product Leadership",
    icon: Users,
    description: "Hands-on, executive-level product leadership that ramps fast, embeds seamlessly, and delivers from day one, without the full-time cost."
  },
  {
    title: "Cross-Functional Team Orchestration",
    icon: Target,
    description: "Driving alignment across product, design, engineering, and business teams to deliver on feature scope, GTM plans, and KPI targets.."
  },
  {
    title: "Customer-Centered Platform Design",
    icon: Heart,
    description: "Using Customer Development methodologies to create intuitive, scalable products grounded in real user needs and behavior."
  },
  {
    title: "Data-Driven Prioritization & Operations",
    icon: BarChart3,
    description: "Using metrics, insights, and structured workflows to focus teams, accelerate delivery, and iterate based on results, anchored by clear success metrics and KPIs."
  },
  {
    title: "0→1 and 1→10 Product Development",
    icon: Rocket,
    description: "Guiding products from concept to MVP, through product-market fit, and into real market traction, growth, and scale."
  },
  {
    title: "AI & Emerging Tech Integration",
    icon: Brain,
    description: "Embedding practical AI and new technologies to unlock business value and velocity."
  },
  {
    title: "Go-to-Market (GTM) Strategy & Execution",
    icon: TrendingUp,
    description: "Connecting product, marketing, and sales to drive adoption, revenue, and brand."
  },
  {
    title: "Enterprise Readiness & Scaling",
    icon: Building2,
    description: "Preparing products and teams for the next stage, scale, complexity, compliance, and growth."
  },
  {
    title: "Executive-Level Strategy & Communication",
    icon: Presentation,
    description: "Translating vision into action through clear, confident, and strategic communication."
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
            className="bg-cardBg/50 border border-white/5 rounded-lg p-6 hover:shadow-[0_0_20px_rgba(86,204,242,0.2)] hover:border-techBlue-light/30 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-techBlue-light/10 rounded-lg flex items-center justify-center">
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
        );
      })}
    </div>
  );
};

export default CapabilitiesGrid;

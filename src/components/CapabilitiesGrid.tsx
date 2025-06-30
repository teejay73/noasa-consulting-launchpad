
import React from 'react';
import { Target, Calendar, Rocket, Settings, Users, TrendingUp } from 'lucide-react';

const capabilities = [
  {
    title: "Fractional Head of Product / Product Strategy",
    icon: Target,
    description: "Strategic product leadership and vision setting"
  },
  {
    title: "Roadmap Planning & Prioritization",
    icon: Calendar,
    description: "Clear roadmaps that align teams and drive results"
  },
  {
    title: "MVP Scoping & Delivery",
    icon: Rocket,
    description: "From concept to launch with focused execution"
  },
  {
    title: "Ops & Executional Support",
    icon: Settings,
    description: "Streamline processes and improve team efficiency"
  },
  {
    title: "Cross-Functional Team Alignment",
    icon: Users,
    description: "Unite teams around shared goals and priorities"
  },
  {
    title: "Go-To-Market Acceleration",
    icon: TrendingUp,
    description: "Accelerate growth and market penetration"
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

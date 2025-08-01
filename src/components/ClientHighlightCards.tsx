import React from 'react';
import { Shield, Ruler, Brain } from 'lucide-react';

const clientHighlights = [
  {
    icon: Shield,
    name: "Real Defense",
    description: "Leading customer care and ecommerce product initiatives"
  },
  {
    icon: Ruler,
    name: "StyleRow", 
    description: "Developing new project management solutions"
  },
  {
    icon: Brain,
    name: "BeClear",
    description: "Building AI-powered leadership platform"
  }
];

const ClientHighlightCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {clientHighlights.map((client, index) => {
        const IconComponent = client.icon;
        return (
          <div
            key={index}
            className="bg-techGray-dark rounded-xl p-6 border border-white/10 hover:border-techBlue-light/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_10px_40px_rgba(47,128,237,0.2)] group cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-techBlue/20 rounded-lg flex items-center justify-center group-hover:bg-techBlue/30 transition-colors duration-300">
                <IconComponent className="w-6 h-6 text-techBlue-light" />
              </div>
              <div className="flex-1">
                <h3 className="font-grotesk font-semibold text-xl text-white mb-2 group-hover:text-techBlue-light transition-colors duration-300">
                  {client.name}
                </h3>
                <p className="text-techGray-light text-sm leading-relaxed">
                  {client.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ClientHighlightCards;
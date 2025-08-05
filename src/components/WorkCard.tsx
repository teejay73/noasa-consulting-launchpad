
import React from "react";

interface WorkCardProps {
  company: string;
  subtitle: string;
  bullets: string[];
}

const WorkCard: React.FC<WorkCardProps> = ({ company, subtitle, bullets }) => (
  <div className="bg-cardBg border border-white/10 hover:border-techBlue-light/50 rounded-lg p-6 h-full flex flex-col transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_10px_40px_rgba(47,128,237,0.2)] group">
    <h3 className="font-grotesk font-semibold text-xl mb-2 text-white group-hover:text-techBlue-light transition-colors duration-300">{company}</h3>
    <h4 className="font-grotesk font-medium text-sm mb-4 text-techBlue-light">{subtitle}</h4>
    <ul className="text-techGray-light text-sm leading-relaxed space-y-3 flex-1">
      {bullets.map((bullet, index) => (
        <li key={index} className="flex items-start">
          <span className="text-techBlue-light mr-2 flex-shrink-0">•</span>
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default WorkCard;

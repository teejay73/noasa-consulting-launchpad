
import React from "react";

interface WorkCardProps {
  title: string;
  description: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ title, description }) => (
  <div className="bg-cardBg border border-white/10 hover:border-techBlue-light/50 rounded-lg p-6 h-full flex flex-col transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_10px_40px_rgba(47,128,237,0.2)] group">
    <h3 className="font-grotesk font-semibold text-lg mb-2 text-white group-hover:text-techBlue-light transition-colors duration-300">{title}</h3>
    <p className="text-techGray-light text-base leading-relaxed">{description}</p>
  </div>
);

export default WorkCard;

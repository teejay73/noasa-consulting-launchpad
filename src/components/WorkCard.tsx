
import React from "react";

interface WorkCardProps {
  title: string;
  description: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ title, description }) => (
  <div className="bg-white shadow-md border border-gray-200 rounded-lg p-6 h-full flex flex-col">
    <h3 className="font-semibold text-lg mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-700 text-base">{description}</p>
  </div>
);

export default WorkCard;

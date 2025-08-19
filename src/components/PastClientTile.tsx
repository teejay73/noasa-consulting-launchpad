import React from "react";

interface PastClientTileProps {
  name: "BeClear" | "McCourt Global" | "Resilia" | "StyleRow" | "Real Defense";
  className?: string;
}

const PastClientTile: React.FC<PastClientTileProps> = ({ name, className = "" }) => {
  return (
    <div className={`flex flex-col items-center gap-3 p-4 rounded-lg bg-white border border-gray-200 shadow-sm ${className}`}>
      {name === "BeClear" && (
        <div className="w-16 h-16 flex items-center justify-center">
          <img
            src="/lovable-uploads/77b3a80f-7b00-45a0-8f55-cf0e389001e4.png"
            alt="BeClear logo"
            className="h-16 w-auto"
            loading="lazy"
          />
        </div>
      )}
      {name === "Real Defense" && (
        <div className="w-16 h-16 flex items-center justify-center">
          <img
            src="/lovable-uploads/f65f9ab9-718c-48b6-a2cf-d9f3adcc99da.png"
            alt="Real Defense logo"
            className="h-8 w-auto scale-[1.62]"
            loading="lazy"
          />
        </div>
      )}
      {name === "StyleRow" && (
        <div className="w-16 h-16 flex items-center justify-center">
          <img
            src="/lovable-uploads/e31ee190-81cc-4b57-a41b-f278f6d7af09.png"
            alt="StyleRow logo"
            className="h-[4.5rem] w-auto object-contain"
            loading="lazy"
          />
        </div>
      )}
      {name === "McCourt Global" && (
        <div className="w-16 h-16 flex items-center justify-center">
          <img
            src="/lovable-uploads/9c690c92-d62f-4d6e-b01e-70d4e13bb9ad.png"
            alt="McCourt Global logo"
            className="h-10 w-auto scale-[2]"
            loading="lazy"
          />
        </div>
      )}
      {name === "Resilia" && (
        <div className="w-16 h-16 flex items-center justify-center">
          <img
            src="/lovable-uploads/6b29020c-fe63-49f6-8c80-133632208d80.png"
            alt="Resilia logo"
            className="h-6 w-auto scale-x-[1.2]"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
};

export default PastClientTile;

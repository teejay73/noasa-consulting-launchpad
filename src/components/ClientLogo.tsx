import React from "react";

export type ClientName = 
  | "Real Defense"
  | "StyleRow" 
  | "BeClear"
  | "McCourt Global"
  | "Resilia"
  | "TigerText"
  | "TigerConnect"
  | "AT&T Interactive"
  | "Evite";

interface ClientLogoProps {
  name: ClientName;
  className?: string;
  containerClassName?: string;
}

const ClientLogo = ({ name, className = "", containerClassName = "" }: ClientLogoProps) => {
  const renderLogo = () => {
    switch (name) {
      case "BeClear":
        return (
          <img 
            src="/lovable-uploads/77b3a80f-7b00-45a0-8f55-cf0e389001e4.png" 
            alt="BeClear" 
            className={`h-12 w-auto ${className}`}
          />
        );
      
      case "Real Defense":
        return (
          <img 
            src="/lovable-uploads/f65f9ab9-718c-48b6-a2cf-d9f3adcc99da.png" 
            alt="Real Defense" 
            className={`h-10 w-auto scale-y-[1.94] scale-x-[2.23] ${className}`}
          />
        );
      
      case "StyleRow":
        return (
          <img 
            src="/lovable-uploads/e31ee190-81cc-4b57-a41b-f278f6d7af09.png" 
            alt="StyleRow" 
            className={`h-12 w-auto object-contain scale-[1.5] ${className}`}
          />
        );
      
      case "AT&T Interactive":
        return (
          <img 
            src="/lovable-uploads/8f054358-ab6d-4d3a-ac7f-1eb9c28c276d.png" 
            alt="AT&T Interactive" 
            className={`h-6 w-auto object-contain scale-[1.25] ${className}`}
          />
        );
      
      case "McCourt Global":
        return (
          <img 
            src="/lovable-uploads/9c690c92-d62f-4d6e-b01e-70d4e13bb9ad.png" 
            alt="McCourt Global" 
            className={`h-6 w-auto scale-[3] ${className}`}
          />
        );
      
      case "Resilia":
        return (
          <img 
            src="/lovable-uploads/6b29020c-fe63-49f6-8c80-133632208d80.png" 
            alt="Resilia" 
            className={`h-6 w-auto scale-x-[1.08] ${className}`}
          />
        );
      
      case "TigerText":
      case "TigerConnect":
        return (
          <img 
            src="/lovable-uploads/3eb07ce8-7494-49e1-bc5e-3ef33c980f5e.png" 
            alt={name} 
            className={`h-10 w-auto scale-[1.56] ${className}`}
          />
        );
      
      case "Evite":
        return (
          <img 
            src="/lovable-uploads/7bfc9c21-7a93-4fec-8d9f-a768b0b3c9fb.png" 
            alt="Evite" 
            className={`h-6 w-auto ${className}`}
          />
        );
      
      default:
        // This should never happen with proper ClientName typing, but providing fallback
        return (
          <span className={`font-bold text-md text-gray-500 select-none ${className}`}>
            {(name as string).split(" ").map(w => w[0]).join("")}
          </span>
        );
    }
  };

  return (
    <div className={`w-16 h-16 flex items-center justify-center ${containerClassName}`}>
      {renderLogo()}
    </div>
  );
};

export default ClientLogo;
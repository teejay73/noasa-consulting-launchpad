
import React from "react";

const CLIENTS_DATA = [
  { name: "Real Defense", hasLogo: true },
  { name: "StyleRow", hasLogo: true },
  { name: "BeClear", hasLogo: true },
  { name: "McCourt Global", hasLogo: true },
  { name: "Resilia", hasLogo: true },
  { name: "Tigertext", hasLogo: true },
  { name: "AT&T Interactive", hasLogo: true },
  { name: "Evite", hasLogo: true },
];

// Logo components for clients with actual logos
const BeClearLogo = () => (
  <div className="w-16 h-16 flex items-center justify-center">
    <img 
      src="/lovable-uploads/77b3a80f-7b00-45a0-8f55-cf0e389001e4.png" 
      alt="BeClear" 
      className="h-12 w-auto"
    />
  </div>
);

const ATTLogo = () => (
  <div className="w-14 h-8 flex items-center justify-center">
    <div className="flex items-center gap-1">
      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#00A8CC] to-[#0078A0] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00A8CC] to-[#0078A0]"></div>
        <div className="absolute inset-[2px] bg-white rounded-full"></div>
        <div className="absolute inset-[3px] bg-gradient-to-br from-[#00A8CC] to-[#0078A0] rounded-full"></div>
        <div className="absolute inset-[4px] bg-white rounded-full"></div>
        <div className="absolute inset-[5px] bg-gradient-to-br from-[#00A8CC] to-[#0078A0] rounded-full"></div>
      </div>
      <span className="text-black font-bold text-sm">AT&T</span>
    </div>
  </div>
);

const McCourtLogo = () => (
  <div className="w-12 h-8 flex items-center justify-center">
    <img 
      src="/lovable-uploads/9c690c92-d62f-4d6e-b01e-70d4e13bb9ad.png" 
      alt="McCourt Global" 
      className="h-6 w-auto scale-[2]"
    />
  </div>
);

const EviteLogo = () => (
  <div className="w-12 h-8 flex items-center justify-center">
    <img 
      src="/lovable-uploads/7d3bdd8b-649d-438f-a757-5cc7761d53d2.png" 
      alt="Evite" 
      className="h-6 w-auto"
    />
  </div>
);

const RealDefenseLogo = () => (
  <div className="w-16 h-16 flex items-center justify-center">
    <img 
      src="/lovable-uploads/f65f9ab9-718c-48b6-a2cf-d9f3adcc99da.png" 
      alt="Real Defense" 
      className="h-10 w-auto scale-y-[2.1] scale-x-[2.415]"
    />
  </div>
);

const StyleRowLogo = () => (
  <div className="w-16 h-16 flex items-center justify-center">
    <img 
      src="/lovable-uploads/b8b28767-6fcf-4f73-9936-6bb9e8e68d70.png" 
      alt="StyleRow" 
      className="h-10 w-auto scale-[2.4]"
    />
  </div>
);

const ResiliaLogo = () => (
  <div className="w-16 h-16 flex items-center justify-center">
    <img 
      src="/lovable-uploads/6b29020c-fe63-49f6-8c80-133632208d80.png" 
      alt="Resilia" 
      className="h-6 w-auto scale-x-[1.2]"
    />
  </div>
);

const TigerTextLogo = () => (
  <div className="w-16 h-16 flex items-center justify-center">
    <img 
      src="/lovable-uploads/3eb07ce8-7494-49e1-bc5e-3ef33c980f5e.png" 
      alt="TigerText" 
      className="h-10 w-auto"
    />
  </div>
);

const ClientLogoGrid = () => (
  <div className="flex w-full overflow-x-auto py-2">
    <div className="flex gap-8 min-w-[680px] md:min-w-[850px] mx-auto">
      {CLIENTS_DATA.map((client) => (
        <div
          key={client.name}
          className="flex flex-col items-center justify-center min-w-[80px] px-2"
        >
          <div className="rounded-lg bg-white border border-gray-200 w-16 h-16 flex items-center justify-center shadow-sm mb-2">
            {client.hasLogo ? (
              client.name === "BeClear" ? <BeClearLogo /> :
              client.name === "Real Defense" ? <RealDefenseLogo /> :
              client.name === "StyleRow" ? <StyleRowLogo /> :
              client.name === "AT&T Interactive" ? <ATTLogo /> :
              client.name === "McCourt Global" ? <McCourtLogo /> :
              client.name === "Resilia" ? <ResiliaLogo /> :
              client.name === "Evite" ? <EviteLogo /> :
              client.name === "Tigertext" ? <TigerTextLogo /> :
              <span className="font-bold text-md text-gray-500 select-none">{client.name.split(" ").map(w => w[0]).join("")}</span>
            ) : (
              <span className="font-bold text-md text-gray-500 select-none">{client.name.split(" ").map(w => w[0]).join("")}</span>
            )}
          </div>
          {client.name !== "Evite" && client.name !== "McCourt Global" && client.name !== "BeClear" && client.name !== "Real Defense" && client.name !== "StyleRow" && client.name !== "Resilia" && client.name !== "Tigertext" && (
            <span className="text-[13px] text-gray-500">{client.name}</span>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default ClientLogoGrid;

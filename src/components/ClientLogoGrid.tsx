
import React from "react";

const CLIENTS_DATA = [
  { name: "Real Defense", hasLogo: false },
  { name: "StyleRow", hasLogo: false },
  { name: "BeClear", hasLogo: true },
  { name: "McCourt Global", hasLogo: true },
  { name: "Resilia", hasLogo: false },
  { name: "Tigertext", hasLogo: false },
  { name: "AT&T Interactive", hasLogo: true },
  { name: "Evite", hasLogo: true },
];

// Logo components for clients with actual logos
const BeClearLogo = () => (
  <div className="w-12 h-8 flex items-center justify-center">
    <span className="text-[#4A90A4] font-bold text-lg tracking-tight">Be.Clear</span>
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
      className="h-6 w-auto"
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
              client.name === "AT&T Interactive" ? <ATTLogo /> :
              client.name === "McCourt Global" ? <McCourtLogo /> :
              client.name === "Evite" ? <EviteLogo /> :
              <span className="font-bold text-md text-gray-500 select-none">{client.name.split(" ").map(w => w[0]).join("")}</span>
            ) : (
              <span className="font-bold text-md text-gray-500 select-none">{client.name.split(" ").map(w => w[0]).join("")}</span>
            )}
          </div>
          {client.name !== "Evite" && client.name !== "McCourt Global" && (
            <span className="text-[13px] text-gray-500">{client.name}</span>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default ClientLogoGrid;


import React from "react";
import ClientLogo, { ClientName } from "./ClientLogo";

const CLIENTS_DATA = [
  { name: "Real Defense" as ClientName, hasLogo: true },
  { name: "StyleRow" as ClientName, hasLogo: true },
  { name: "BeClear" as ClientName, hasLogo: true },
  { name: "McCourt Global" as ClientName, hasLogo: true },
  { name: "Resilia" as ClientName, hasLogo: true },
  { name: "TigerText" as ClientName, hasLogo: true },
  { name: "AT&T Interactive" as ClientName, hasLogo: true },
  { name: "Evite" as ClientName, hasLogo: true },
];

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
              <ClientLogo name={client.name} containerClassName="w-16 h-16" />
            ) : (
              <span className="font-bold text-md text-gray-500 select-none">{client.name.split(" ").map(w => w[0]).join("")}</span>
            )}
          </div>
          {client.name !== "Evite" && client.name !== "McCourt Global" && client.name !== "BeClear" && client.name !== "Real Defense" && client.name !== "StyleRow" && client.name !== "Resilia" && client.name !== "TigerText" && client.name !== "AT&T Interactive" && (
            <span className="text-[13px] text-gray-500">{client.name}</span>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default ClientLogoGrid;

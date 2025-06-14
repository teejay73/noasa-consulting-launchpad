
import React from "react";

const LOGO_NAMES = [
  "Real Defense",
  "StyleRow",
  "BeClear",
  "McCourt Global",
  "Resilia",
  "Tigertext",
  "AT&T Interactive",
  "Evite",
];

const ClientLogoGrid = () => (
  <div className="flex w-full overflow-x-auto py-2">
    <div className="flex gap-8 min-w-[680px] md:min-w-[850px] mx-auto">
      {LOGO_NAMES.map((name) => (
        <div
          key={name}
          className="flex flex-col items-center justify-center min-w-[80px] px-2"
        >
          <div className="rounded-lg bg-gray-50 border border-gray-200 w-16 h-16 flex items-center justify-center shadow-sm mb-2">
            {/* Simple initials for each client */}
            <span className="font-bold text-md text-gray-500 select-none">{name.split(" ").map(w => w[0]).join("")}</span>
          </div>
          <span className="text-[13px] text-gray-500">{name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default ClientLogoGrid;

import { Phone } from "lucide-react";
import React from "react";

const PhoneButton = () => {
  return (
    <a className="border-white border-2 rounded-full bg-white/20 text-white font-bold py-1 px-4 flex items-center gap-2 min-h-10 text-sm cursor-pointer">
      <Phone /> +6012-345-6789
    </a>
  );
};

export default PhoneButton;

import { Phone } from "lucide-react";
import React from "react";

const PhoneButton = () => {
  return (
    <a className="rounded-full bg-lime-200 text-lime-950 py-2 px-4 cursor-pointer text-xs font-semibold flex items-center gap-1">
      <Phone height={20} width={20} />
      +6012-345-6789
    </a>
  );
};

export default PhoneButton;

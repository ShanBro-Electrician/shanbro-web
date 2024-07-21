import { Phone } from "lucide-react";
import React from "react";

const PhoneButton = () => {
  return (
    <a
      href="tel:+60168566184"
      target="_blank"
      className="rounded-full bg-lime-200/80 text-lime-950 py-2 px-4 cursor-pointer text-xs font-semibold flex items-center gap-1"
    >
      {/* <Phone height={20} width={20} /> */}
      +6016-856-6184
    </a>
  );
};

export default PhoneButton;

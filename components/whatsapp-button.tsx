import React from "react";

const WhatsappButton = () => {
  return (
    <a className="border-white border-2 rounded-full bg-[#25D366] text-[#003112] font-extrabold py-1 px-4 flex items-center gap-2 min-h-10 text-sm cursor-pointer">
      <img src="WhatsApp.svg" alt="whatsapp logo" width={28} />
      Whatsapp
    </a>
  );
};

export default WhatsappButton;

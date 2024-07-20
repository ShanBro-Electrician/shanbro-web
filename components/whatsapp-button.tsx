import React from "react";

const WhatsappButton = () => {
  return (
    <a className="rounded-full bg-lime-950 text-white py-2 px-4 cursor-pointer text-xs font-semibold flex items-center gap-1">
      <img src="WhatsApp.svg" alt="whatsapp logo" width={20} />
      Whatsapp
    </a>
  );
};

export default WhatsappButton;

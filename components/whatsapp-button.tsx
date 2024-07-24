import React from "react";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/60168566184"
      target="_blank"
      className="rounded-full bg-lime-600 text-white py-2 px-4 cursor-pointer text-xs font-semibold flex items-center gap-1"
    >
      <img src="WhatsApp.svg" alt="whatsapp logo" width={20} />
      Whatsapp
    </a>
  );
};

export default WhatsappButton;

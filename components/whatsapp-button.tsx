import Image from "next/image";
import React from "react";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/60168566184"
      target="_blank"
      className="rounded-full bg-lime-600 text-white py-2 px-4 cursor-pointer text-xs font-semibold flex items-center gap-1"
    >
      <div className="relative w-6 h-6">
        <Image src="WhatsApp.svg" alt="whatsapp logo" fill />
      </div>
      Whatsapp
    </a>
  );
};

export default WhatsappButton;

import Image from "next/image";
import PhoneButton from "../phone-button";
import WhatsappButton from "../whatsapp-button";

const Footer = () => {
  return (
    <div className="container py-8 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center bg-gradient-to-br from-lime-200 to-lime-400 rounded-3xl">
      <div className="space-y-2">
        <div className="relative h-12 w-40 mx-auto sm:mx-0">
          <Image src="/Logo.svg" alt="Logo" fill />
        </div>
        <p className="text-lime-950 font-medium text-xs text-center sm:text-left">
          8A, Sentul Park,
          <br /> Jalan Sentul Pasar, Sentul,
          <br /> 51100 WP Kuala Lumpur.
        </p>
      </div>
      <div className="flex flex-col gap-1 h-max sm:flex-row">
        <WhatsappButton />
        <PhoneButton />
      </div>
    </div>
  );
};

export default Footer;

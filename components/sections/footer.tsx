import PhoneButton from "../phone-button";
import WhatsappButton from "../whatsapp-button";

const Footer = () => {
  return (
    <div className="bg-stone-950">
      <div className="container py-8 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
        <div className="space-y-2">
          <div className="flex flex-col items-center gap-2 sm:flex-row">
            <img src="Logo.png" alt="Logo" className="w-10" />
            <img src="LogoText.png" alt="Logo" className="w-20" />
          </div>
          <p className="text-white/70 text-xs text-center sm:text-left">
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
    </div>
  );
};

export default Footer;

import Image from "next/image";
import PhoneButton from "./phone-button";
import WhatsappButton from "./whatsapp-button";

const Navbar = () => {
  return (
    <div className="z-50 fixed top-0 right-0 left-0 sm:py-4 sm:px-4">
      <div className="shadow-lg border border-stone-300 bg-gradient-to-r from-lime-200/80 to-lime-400/80 backdrop-blur-lg container flex justify-end py-2 sm:rounded-full sm:p-2 sm:pl-4">
        {/* <div className="flex flex-col items-center gap-2 ml-4 sm:flex-row">
          <img src="Logo.png" alt="Logo" className="w-10" />
          <img src="LogoText.png" alt="Logo" className="w-20" />
        </div> */}
        <div className="absolute w-16 h-16 left-2 scale-125 sm:-top-1 sm:ml-4">
          <Image src="/Logo.png" alt="Logo" fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-1 sm:flex-row">
          <WhatsappButton />
          <PhoneButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

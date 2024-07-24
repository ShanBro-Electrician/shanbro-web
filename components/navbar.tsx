import Image from "next/image";
import PhoneButton from "./phone-button";
import WhatsappButton from "./whatsapp-button";

const Navbar = () => {
  return (
    <div className="z-50 fixed top-0 right-0 left-0 sm:py-4 sm:px-4">
      <div className="shadow-lg bg-gradient-to-r from-lime-200 to-lime-400 flex justify-between p-2 sm:rounded-full sm:w-max sm:mx-auto sm:gap-32">
        {/* shadow-lg bg-gradient-to-r from-lime-200 to-lime-400 container flex justify-between py-2 sm:rounded-full sm:p-2 */}
        <div className="flex items-center">
          <div className="relative w-12 h-10 ">
            <Image src="/Logo.svg" alt="Logo" fill />
          </div>
          <div className="font-bold text-xl text-lime-950">ShanBro</div>
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

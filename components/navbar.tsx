import PhoneButton from "./phone-button";
import WhatsappButton from "./whatsapp-button";

const Navbar = () => {
  return (
    <div className="sticky top-0">
      <div className="bg-[#4260FF] px-5 py-2 flex justify-between items-center">
        <div>
          <img src="LogoVertical.png" alt="Logo" width={96} />
        </div>
        <div className="flex flex-col gap-1">
          <WhatsappButton />
          <PhoneButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

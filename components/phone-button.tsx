import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";
import React from "react";

const PhoneButton = ({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"a">) => {
  return (
    <a
      href="tel:+60182709026"
      target="_blank"
      className={cn(
        "rounded-full bg-lime-200/80 text-lime-950 py-2 px-4 cursor-pointer text-xs font-semibold flex items-center gap-1",
        className
      )}
      {...rest}
    >
      {/* <Phone height={20} width={20} /> */}
      +6018-270 9026
    </a>
  );
};

export default PhoneButton;

import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ashley Foo",
    text: "ShanBro Electrical Service is the best electrician I've searched for. Everyone give 5 star for a reason! He came to my company for electric trip issue, and he found the cause of electric trip very fast too. Price is reasonable, and he can also give estimation cost after telling the issue we are facing before we book the service with him. Thank you ShanBro for your service!",
  },
  {
    name: "Richelle",
    text: "Recommended!! Happy with their works!! Always responsible, craftsmanship is neat and tidy, price is reasonable also. Have been approaching them for the 3rd times already for different scopes, water plumbing, tiles works and electrical wiring.👍🏻👍🏻",
  },
  {
    name: "Sara Roy",
    text: "Found their ads on facebook. happy and satisfied with their services. urgently need wireman and he came immediately when other wiremen ignored me and didn't reply my text. he did the job very well and quickly.affordable charges. kerja bguss! my husband and i sukaa sangat",
  },
];

const Reviews = () => {
  return (
    <div className="bg-neutral-200">
      <div className="container py-8 space-y-4">
        <div className="flex flex-col-reverse text-center font-display">
          <h1 className="font-bold text-xl md:text-4xl md:w-[30rem] md:mx-auto">
            WHAT OUR CUSTOMERS SAY ABOUT US
          </h1>
          <h2 className="text-muted-foreground">REVIEWS</h2>
        </div>
        <div className="space-y-2 md:space-y-0 md:grid md:grid-cols-4 md:gap-8 md:items-end md:py-8 md:px-10 lg:px-20 2xl:px-48">
          <ReviewCard
            name={reviews[0].name}
            text={reviews[0].text}
            className="col-span-2"
          />
          <ReviewCard
            name={reviews[1].name}
            text={reviews[1].text}
            className="col-span-2 md:h-max"
          />
          <ReviewCard
            name={reviews[2].name}
            text={reviews[2].text}
            className="col-start-2 col-span-2"
          />
        </div>
      </div>
    </div>
  );
};

interface ReviewCardProps extends React.ComponentPropsWithoutRef<"div"> {
  name: string;
  text: string;
}

export const ReviewCard = ({
  name,
  text,
  className,
  ...rest
}: ReviewCardProps) => {
  return (
    <div className={cn("bg-white p-4 space-y-2", className)} {...rest}>
      <h3 className="font-bold text-xl">{name}</h3>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star key={i} stroke="0" fill="#FFC700" />
        ))}
      </div>
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default Reviews;

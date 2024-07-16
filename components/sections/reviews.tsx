import { Star } from "lucide-react";

const Reviews = () => {
  return (
    <div className="container bg-neutral-200 py-8 space-y-4">
      <div className="flex flex-col-reverse text-center font-display">
        <h1 className="font-bold text-2xl">WHAT OUR CUSTOMERS SAY ABOUT US</h1>
        <h2 className="text-muted-foreground">REVIEWS</h2>
      </div>
      <div className="space-y-2">
        <ReviewCard
          name="Ashley Foo"
          text="ShanBro Electrical Service is the best electrician I've searched for. Everyone give 5 star for a reason! He came to my company for electric trip issue, and he found the cause of electric trip very fast too. Price is reasonable, and he can also give estimation cost after telling the issue we are facing before we book the service with him. Thank you ShanBro for your service!"
        />
        <ReviewCard
          name="Richelle"
          text="Recommended!! Happy with their works!!
Always responsible, craftsmanship is neat and tidy, price is reasonable also.
Have been approaching them for the 3rd times already for different scopes, water plumbing, tiles works and electrical wiring.👍🏻👍🏻"
        />
        <ReviewCard
          name="Sara Roy"
          text="Found their ads on facebook. happy and satisfied with their services. urgently need wireman and he came immediately when other wiremen ignored me and didn't reply my text. he did the job very well and quickly.affordable charges. kerja bguss! my husband and i sukaa sangat"
        />
      </div>
    </div>
  );
};

export const ReviewCard = ({ name, text }: { name: string; text: string }) => {
  return (
    <div className="bg-white p-4 space-y-2">
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

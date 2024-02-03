import { FC } from "react";
import { ShowMoreButton } from "../ui/button";
import { Separator } from "../ui/separator";

interface DescriptionProps {
  description: string;
  location: string;
}

const Description: FC<DescriptionProps> = ({ description, location }) => {
  return (
    <div className="my-2">
      <h2 className="my-2 text-base font-semibold">{location}</h2>
      <p className="text-sm md:text-base text-gray-800 font-sans  ">
        {description}
      </p>
      <ShowMoreButton />
      <Separator className="w-full my-3" />
      <div className="mt-4">
        <h1 className="text-xl text-gray-900 font-semibold">Things to know </h1>
        <div className="flex justify-between flex-col gap-y-3 md:flex-row text-gray-900 mt-4">
          <div className="flex flex-col gap-y-3 text-gray-800">
            <h2 className="text-lg md:text-base font-medium text-black">
              House rules
            </h2>
            <h3 className="text-sm md:text-base ">Flexible Check-in</h3>
            <h3 className="text-sm md:text-base ">Checkout: Before 1:00 PM</h3>
            <h3 className="text-sm md:text-base ">3 guests maximum</h3>
            <ShowMoreButton />
          </div>
          <div className="flex flex-col gap-y-3 text-gray-800">
            <h2 className="text-lg md:text-base font-medium text-black">
              Safety & property
            </h2>
            <h3 className="text-sm md:text-base ">
              Carbon monoxide alarm not reported
            </h3>
            <h3 className="text-sm md:text-base ">Smoke alarm not reported</h3>
            <h3 className="text-sm md:text-base ">Must climb stairs</h3>
            <ShowMoreButton />
          </div>
          <div className="flex flex-col gap-y-3 text-gray-800 sm:w-full md:w-80 ">
            <h2 className="text-lg md:text-base font-medium text-black">
              Cancellation policy
            </h2>
            <h3 className="text-sm md:text-base ">
              Cancel before check-in day for a partial refund.
            </h3>
            <span className="text-sm md:text-base ">
              Review the Host’s full cancellation policy which applies even if
              you cancel for illness or disruptions caused by COVID-19.
            </span>
            <ShowMoreButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;

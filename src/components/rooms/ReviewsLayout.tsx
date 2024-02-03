import { FC } from "react";
import { StarIcon } from "lucide-react";
import { Separator } from "../ui/separator";
import dynamic from "next/dynamic";
import { Button } from "../ui/button";

const Review = dynamic(() => import("./Review"));

interface ReviewsLayoutProps { }

const ReviewsLayout: FC<ReviewsLayoutProps> = ({ }) => {
  return (
    <>
      <div className="flex flex-col gap-y-4 ">
        <div className="flex items-center text-gray-800">
          <StarIcon fill="black" className="h-5 w-5 mr-2" />
          <h1 className="text-2xl font-semibold ">4.97</h1>
          <Separator orientation="vertical" className="w-1 h-1 mx-2 bg-black" />
          <h1 className="text-2xl font-semibold">30 reviews</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-4">
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
        </div>
        <Button variant="ghost" className="font-medium text-base w-48 border border-black" >Show all 30 reviews</Button>
      </div>
      <Separator className="w-full my-4" />
    </>
  );
};

export default ReviewsLayout;

"use client";
import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import Icon from "../DynamicIcons";

interface ReviewProps { }

const Review: FC<ReviewProps> = ({ }) => {
  const text =
    "Everything about staying at Manju’s was wonderful. The house is vernacular, intricate and warm, while Manju makes you feel at home instantly and Mika is always there to help and feed you wholesome home-food. Manju is the sweetest, most caring hostess and will always go out of her way to help. Meanwhile, the location too is great for travelers who like to take it slow and discover the area through walking and exploring hidden alleys. Patan durbar square, the old town heritage routes, museum, golden temple and a bunch of local bazaars and cafes are just around the corner. Highly, highly recommend and will definitely be coming back myself!";
  return (
    <div className="max-w-[500px] min-w-[250px] w-full md:w-[450px] flex flex-col ">
      <div>
        <div className="flex gap-x-4">
          <Avatar>
            <AvatarImage src="" alt="feedback-avatar" />
            <AvatarFallback>BN</AvatarFallback>
          </Avatar>
          <div className="">
            <h2 className="text-base font-semibold">Sidak</h2>
            <h4 className="text-sm text-gray-600">July 2023</h4>
          </div>
        </div>
      </div>
      <div>
        <p className="text-base mt-2 text-gray-800">
          {text.slice(0, 170) + "..."}
        </p>
      </div>
      <div className="flex items-center cursor-pointer group">
        <Button
          variant="ghost"
          className="p-0 text-base underline text-gray-800 group-hover:text-black hover:bg-white"
        >
          Show more
        </Button>
        <Icon name="arrow-right" className="h-5 w-5 ml-1 " />
      </div>
    </div>
  );
};

export default Review;

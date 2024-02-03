import { ListingType } from "@/types";
import { FC } from "react";
import { Button } from "../ui/button";
import { HeartIcon, Star, UploadIcon } from "lucide-react";
import { Separator } from "../ui/separator";

interface RoomHeaderProps {
  data: ListingType;
}

const RoomHeader: FC<RoomHeaderProps> = ({ data }) => {
  return (
    <div>
      <div className="mb-2">
        <h1 className="font-bold text-lg md:text-2xl font-sans">
          {data.title}
        </h1>
      </div>
      <div className="w-full h-0 md:h-8 flex flex-col md:flex-row justify-between items-center text-sm font-semibold">
        <div className="flex text-xs md:text-sm items-center space-x-2">
          <div className="flex ">
            <Star className="w-4 h-4 mr-1" fill="black" />
            4.88
          </div>
          <Separator
            orientation="vertical"
            className="h-1 w-1 rounded-full bg-gray-500"
          />
          <h2 className="underline">28 reviews</h2>
          <Separator
            orientation="vertical"
            className="h-1 w-1 hidden md:block rounded-full bg-gray-500"
          />
          <div className="md:flex hidden">
            ❣<h2 className="text-gray-600 font-normal ml-2">Superhost</h2>
          </div>
          <Separator
            orientation="vertical"
            className="h-1 w-1 rounded-full bg-gray-600"
          />
          <div className="flex">
            <span className="underline">{data.locationValue}</span>
          </div>
        </div>
        <div className="hidden md:block">
          <Button variant="ghost" className="underline">
            <UploadIcon className="w-4 h-4 mr-2" /> Share
          </Button>
          <Button variant="ghost" className="underline">
            <HeartIcon className="w-4 h-4 mr-2" /> Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoomHeader;

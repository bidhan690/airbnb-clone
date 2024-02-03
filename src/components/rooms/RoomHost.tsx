import { ListingType } from "@/types";
import {
  BedSingle,
  HeartIcon,
  Home,
  UploadIcon,
} from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import HostCard from "./HostCard";
import AboutCard from "./AboutCard";
import Amenities from "./Amenities";
import CalenderLayout from "./CalenderLayout";
import RoomCheckout from "./RoomCheckout";

interface RoomHostProps {
  data: ListingType;
}

const RoomHost: FC<RoomHostProps> = ({ data }) => {
  return (
    <div className=" w-full md:w-[60%] flex flex-col gap-5">
      <div className="md:hidden flex justify-between flex-row-reverse">
        <Button variant="ghost" className="underline">
          <UploadIcon className="w-4 h-4 mr-2" /> Share
        </Button>
        <Button variant="ghost" className="underline">
          <HeartIcon className="w-4 h-4 mr-2" /> Save
        </Button>
      </div>
      <div>
        <h2 className="text-xl md:text-2xl text-center md:text-start font-semibold text-gray-900">
          Room in a {data.category.replace("&", ` and `)} hosted by {data.host}
        </h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 place-self-center text-gray-900 font-medium">
        <div className="w-[150px] md:w-52 h-16 flex items-center p-6 border rounded-lg">
          <BedSingle className="w-5 h-5 mr-3" />
          <h2 className="text-xs md:text-sm ">2 single beds</h2>
        </div>
        <div className="w-[150px] md:w-52 h-16 flex items-center p-6 border rounded-lg">
          <Image
            src="/icons/shower.svg"
            alt="shower-icon"
            width={24}
            height={24}
            priority
            className="w-6 h-6 mr-3"
          />
          <h2 className="text-xs md:text-sm">Private attached bathroom </h2>
        </div>
        <div className="w-[150px] md:w-52 h-16 flex items-center p-6 border rounded-lg">
          <Home className="w-7 h-7 mr-3" />
          <h2 className="text-xs md:text-sm">Other guests may be here </h2>
        </div>
      </div>
      <Separator className="w-full my-2" />
      <div className="flex flex-col gap-5 md:gap-6">
        <div className="flex items-center ">
          <Image
            src="/icons/bed.svg"
            alt="bed-icon"
            width={24}
            height={24}
            priority
            className="w-6 h-6 mr-3"
          />

          <div className="flex flex-col">
            <h2 className="text-sm md:text-base font-semibold">
              Room in a {data.category.replace("&", " and ")}
            </h2>
            <p className="text-xs md:text-sm text-gray-500">
              Your room in a home, plus access to shared spaces.
            </p>
          </div>
        </div>
        <div className="flex items-center ">
          <Image
            src="/icons/medal.svg"
            alt="bed-icon"
            width={24}
            height={24}
            priority
            className="w-6 h-6 mr-3"
          />

          <div className="flex flex-col">
            <h2 className="text-sm md:text-base font-semibold">
              {data.host} is a Superhost
            </h2>
            <p className="text-xs md:text-sm text-gray-500">
              Superhosts are experienced, highly rated hosts who are committed
              to providing great stays for guests.
            </p>
          </div>
        </div>
        <div className="flex items-center ">
          <Image
            src="/icons/location.svg"
            alt="location-icon"
            width={24}
            height={24}
            priority
            className="w-6 h-6 mr-3"
          />
          <div className="flex flex-col">
            <h2 className="text-sm md:text-base font-semibold">
              Great location
            </h2>
            <p className="text-xs md:text-sm text-gray-500">
              100% of recent guests gave the location a 5-star rating.
            </p>
          </div>
        </div>
      </div>
      <Separator className="w-full my-2" />
      <HostCard host={data.host} description={data.description} image={data.imageSrc} />
      <AboutCard data={data.description} />
      <Separator className="w-full my-2" />
      <Amenities data={data.amenities} />
      <Separator className="w-full my-2" />
      <CalenderLayout location={data.locationValue} />
      <div className="block md:hidden">
        <RoomCheckout data={data} />
      </div>
      <Separator className=" w-full my-2" />

    </div>
  );
};

export default RoomHost;

import { ArrowRight, Star } from "lucide-react";
import { FC } from "react";
import { Separator } from "../ui/separator";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import AboutCard from "./AboutCard";

interface HostCardProps {
  image?: string;
  host: string;
  description: string
}

const HostCard: FC<HostCardProps> = ({ host, image, description }) => {
  return (
    <div className="w-full md:w-[620px] flex flex-col gap-5">
      <h1 className="text-2xl font-semibold">Meet your host</h1>
      <div className=" flex flex-col gap-5 bg-gray-200/60 rounded-lg py-4">
        <div className="w-full flex flex-col items-center gap-3 ">
          <div className="h-[200px] md:h-[200px] w-[80%] md:w-[50%] flex mt-6 bg-white shadow-lg shadow-black/30 mb-2  rounded-xl">
            <div className="w-full h-full p-4 flex items-center justify-around ">
              <div className="h-full flex flex-col items-center justify-center gap-2">
                <div className="w-24 h-24 rounded-full relative">
                  <Image
                    src={image ? image : "/icons/account-icon.svg"}
                    alt="host"
                    fill
                    priority
                    className="w-24 h-24 object-cover rounded-full"
                  />

                  <Image
                    src="/icons/verified.svg"
                    alt="verified.svg"
                    width={32}
                    height={32}
                    priority
                    className="w-8 h-8 absolute bottom-0 -right-1"
                  />
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                  <h1 className="text-lg md:text-2xl font-semibold">{host}</h1>
                  <h2 className="text-xs md:text-sm font-semibold">
                    Superhost
                  </h2>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-2">
                <div className="flex flex-col gap-1">
                  <h1 className="font-semibold text-xl">28</h1>
                  <h2 className="text-xs font-semibold">Reviews</h2>
                </div>
                <Separator className="w-full" />
                <div className="flex flex-col gap-1">
                  <div className="flex items-center">
                    <h1 className="font-semibold text-xl">4.96</h1>
                    <Star className="w-5 h-5 ml-1" fill="black" />
                  </div>
                  <h2 className="text-xs font-semibold">Rating</h2>
                </div>
                <Separator className="w-full" />
                <div className="flex flex-col gap-1">
                  <h1 className="font-semibold text-xl">10</h1>
                  <h2 className="text-xs font-semibold">Years hosting</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[80%] md:w-[50%] flex flex-col justify-center gap-3">
            <div className="flex items-center ">
              <Image src='/icons/bag-icon.svg' alt="bag-icon" width={20} height={20} className="w-5 h-5 mr-2" />
              <h2 className="text-sm md:text-base text-gray-800 ">My work: Hira Guest House Pvt.Ltd</h2>
            </div>
            <div className="flex items-center">
              <Image src='/icons/globe-icon.svg' alt="globe-icon" width={20} height={20} className="w-5 h-5 mr-2" />
              <h2 className="text-sm md:text-base text-gray-800 ">Lives in Kathmandu, Nepal</h2>
            </div>
            <div className="flex items-center">
              <Image src='/icons/people-chatting-icon.svg' alt="peoples-icon" width={20} height={20} className="w-5 h-5 mr-2" />
              <h2 className="text-sm md:text-base text-gray-800 ">I like to spend time with my guests</h2>
            </div>

          </div>
          <div className="w-[80%] md:w-[50%] mt-3 flex flex-col justify-center gap-2">
            <h1 className="text-sm md:text-base text-gray-800">I am {host} Lama</h1>
            <Link href="/" className="flex items-center underline font-semibold text-lg " >Show more  <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          <div className="w-[80%] md:w-[50%] my-2">
            <Button className="">Message host</Button>
          </div>
          <Separator className="w-[80%] md:w-[50%] my-4 bg-gray-300" />
          <div className="w-[80%] md:w-[50%] pb-2">
            <p className="text-xs text-gray-700">To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostCard;

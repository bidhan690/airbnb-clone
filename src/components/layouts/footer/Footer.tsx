import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { FC } from "react";

interface FooterProps { }

const Footer: FC<FooterProps> = ({ }) => {
  const supports = ["Help Center", "AirCover", "Supporting people with disabilities", "Cancellation options", "Our COVID-19 Response", "Report a neighborhood concern"]
  const communities = ["Airbnb.org: disaster relief housing", "Combating discrimination"]
  const hostings = ["Airbnb your home", "AirCover for Hosts", "Explore hosting resources", "Visit our community forum", "How to host responsibly", "Airbnb-friendly apartments"]
  const airbnb = ["Newsroom", "Learn about new features", "Letter from our founders", "Careers", "Investors", "Gift cards"]
  return (
    <div className="bg-gray-100/90">
      <Separator className="w-full my-3" />
      <div className="px-0 md:px-20 mt-5 flex justify-between flex-col md:flex-row">
        <div className="flex flex-col gap-y-3 text-gray-800 ">
          <h2 className="text-lg md:text-base font-medium text-black">
            Support
          </h2>
          {supports.map(item => (
            <h3 key={item} className="text-sm  hover:underline ">
              {item}
            </h3>
          ))}
        </div>
        <div className="flex flex-col gap-y-3 text-gray-800 ">
          <h2 className="text-lg md:text-base font-medium text-black">
            Community
          </h2>
          {communities.map(item => (
            <h3 key={item} className="text-sm  hover:underline ">
              {item}
            </h3>
          ))}
        </div>
        <div className="flex flex-col gap-y-3 text-gray-800 ">
          <h2 className="text-lg md:text-base font-medium text-black">
            Hosting
          </h2>
          {hostings.map(item => (
            <h3 key={item} className="text-sm  hover:underline ">
              {item}
            </h3>
          ))}
        </div>
        <div className="flex flex-col gap-y-3 text-gray-800 ">
          <h2 className="text-lg md:text-base font-medium text-black">
            Airbnb
          </h2>
          {airbnb.map(item => (
            <h3 key={item} className="text-sm  hover:underline ">
              {item}
            </h3>
          ))}
        </div>
      </div>
      <Separator className="w-full my-8" />
      <div className="px-4 md:px-20 py-4 flex justify-between">
        <div className="flex items-center gap-x-3 text-gray-800 text-sm">
          <h3 className="">&copy; {new Date().getFullYear()} Airbnb, Inc</h3>
          <Separator orientation="vertical" className="h-1 w-1 bg-black" />
          <h3 className="hover:underline">Terms</h3>
          <Separator orientation="vertical" className="h-1 w-1 bg-black" />
          <h3 className="hover:underline">Sitemap</h3>
          <Separator orientation="vertical" className="h-1 w-1 bg-black" />
          <h3 className="hover:underline">Privacy</h3>
          <Separator orientation="vertical" className="h-1 w-1 bg-black" />
          <h3 className="hover:underline">Your Privacy Choices</h3>
        </div>
        <div className="flex gap-x-3 items-center text-sm font-semibold">
          <Image src="/icons/earth-icon.svg" alt="earth icon" width={14} height={14} className="h-4 w-4" />
          <h3 className="">English (US)</h3>
          <h3 className="">$ USD</h3>
          <Image src="/icons/facebook-logo.svg" alt="fb logo" width={20} height={20} className="h-6 w-6 " />
          <Image src="/icons/apple-logo.svg" alt="apple logo" width={20} height={20} className="h-6 w-6 " />

        </div>

      </div>
    </div>
  );
};

export default Footer;

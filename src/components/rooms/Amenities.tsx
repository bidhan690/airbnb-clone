import { WifiIcon } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface AmenitiesProps {
  data: string[];
}

const Amenities: FC<AmenitiesProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">What this place offers</h1>
      <div className="mt-4 grid grid-cols-2  space-y-3 justify-between">
        {amenities.map((items, i) => {
          return (
            <div key={i} className="flex items-center">
              <Image
                src={`/icons/${items.icon}.svg`}
                alt={items.icon}
                width={20}
                height={20}
                className="w-5 h-5 mr-3"
              />
              <span className="text-xs md:text-base ">{items.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const amenities = [
  { name: "Wifi", icon: "wifi" },
  { name: "Lock on bedroom door", icon: "locked-door" },
  { name: "Kitchen", icon: "cutlery" },
  { name: "Parking", icon: "car" },
  { name: "Pets allowed", icon: "pets" },
  { name: "Washer", icon: "washer" },
  { name: "Patio or balcony", icon: "balcony" },
  { name: "Luggage dropoff allowed", icon: "luggage" },
];

export default Amenities;

import { ListingType } from "@/types";
import React, { FC } from "react";
import RoomHeader from "./RoomHeader";
import RoomImages from "./RoomImages";
import RoomHost from "./RoomHost";
import dynamic from "next/dynamic";
import ListingSkeleton from "../skeleton/ListingSkeleton";
import ReviewsLayout from "./ReviewsLayout";

import Description from "./Description";
import MapSkeleton from "../skeleton/MapSkeleton";

const Map = dynamic(() => import("./Map"), { ssr: false, loading: () => <MapSkeleton /> });


const RoomCheckout = dynamic(() => import("./RoomCheckout"));


interface RoomLayoutProps {
  data: ListingType;
}

const RoomLayout: FC<RoomLayoutProps> = ({ data }) => {
  return (
    <div className="w-full flex flex-col gap-y-4 px-2 md:px-14 lg:px-24 ">
      <RoomHeader data={data} />
      <RoomImages image={data.imageSrc} />
      <div className="flex items-start justify-between  mt-0 md:mt-8 relative">
        <RoomHost data={data} />
        <RoomCheckout data={data} className="hidden md:flex" />
      </div>
      <ReviewsLayout />
      <div className="flex flex-col ">
        <h1 className="my-3 text-2xl font-semibold">Where you&apos;ll be</h1>
        <Map />
      </div>
      <Description description={data.description} location={data.locationValue} />
    </div>
  );
};

export default RoomLayout;

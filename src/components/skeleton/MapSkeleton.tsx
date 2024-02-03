import { FC } from "react";
import { Skeleton } from "../ui/skeleton";
import Loader from "../Loader";

interface MapSkeletonProps { }

const MapSkeleton: FC<MapSkeletonProps> = ({ }) => {
  return (
    <div className="h-[300px] md:h-[500px] w-full">
      <Skeleton className="w-full h-full rounded-xl bg-gray-400" />{" "}
    </div>
  );
};

export default MapSkeleton;

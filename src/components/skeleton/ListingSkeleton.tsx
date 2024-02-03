import { FC } from "react";
import { Skeleton } from "../ui/skeleton";

interface ListingSkeleton {}

const ListingSkeleton: FC<ListingSkeleton> = ({}) => {
  return (
    <div className="w-[300px]">
      <div className="h-72 w-full">
        <Skeleton className="w-full h-full rounded-xl bg-gray-300" />
      </div>
      <div className="space-y-2 mt-2">
        <div className="w-full flex justify-between  ">
          <Skeleton className="h-4 w-32  bg-gray-300" />
          <Skeleton className="h-3 w-10  bg-gray-300" />
        </div>
        <Skeleton className="h-4 w-[110px]  bg-gray-300" />

        <Skeleton className="h-4 w-20  bg-gray-300" />

        <Skeleton className="h-4 w-16  bg-gray-300" />
      </div>
    </div>
  );
};

export default ListingSkeleton;

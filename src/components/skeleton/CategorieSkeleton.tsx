import { Skeleton } from "../ui/skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CategorieSkeleton = ({ }) => {
  return (
    <div className="flex flex-col items-center justify-center h-20 w-[100px] space-y-2">
      <Skeleton className="w-12 h-12 bg-gray-300 rounded-full" />
      <Skeleton className="w-24 h-4 bg-gray-300" />
    </div>
  );
};

export default CategorieSkeleton;


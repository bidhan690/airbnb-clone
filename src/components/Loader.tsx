import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { FC } from "react";

interface LoaderProps {
  loaderClassName?: string;
  containerClassName?: string;
}

const Loader: FC<LoaderProps> = ({ loaderClassName, containerClassName }) => {
  return (
    <div
      className={cn(
        "w-full h-20 flex items-center justify-center",
        containerClassName
      )}
    >
      <Loader2
        className={cn(
          "h-12 w-12 md:h-16 md:w-16 animate-spin",
          loaderClassName
        )}
      />
    </div>
  );
};

export default Loader;

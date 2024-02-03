import { cn, shimmer, toBase64 } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

interface RoomImagesProps {
  image: string;
}

const RoomImages: FC<RoomImagesProps> = ({ image }) => {
  const images: string[] = [
    "https://a0.muscache.com/im/pictures/6c69c279-3da5-4dea-ab44-737f4499ec91.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/e2b765e4-8294-4bae-a67b-8135aca9b62a.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/798b177b-be45-4c08-a43e-73bbe1a6702e.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/9cbaa268-477b-4514-a46f-694d9833c3d3.jpg?im_w=720",
  ];
  return (
    <div className="flex mt-3 gap-x-2 h-[250px] md:h-[350px] px-2 w-full">
      <div className="w-full lg:min-w-[470px] lg:max-w-[600px]  h-[250px] md:h-[350px]  flex justify-center relative">
        <Image
          src={image}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(24, 24))}`}
          className="h-full object-cover w-[300px] md:w-full rounded-xl lg:rounded-l-xl"
          priority
          fill
          sizes="(max-width-768px) 300px, (max-width-1280px) 600px,500px"
          alt="hey"
        />
      </div>
      <div className="hidden lg:grid grid-cols-2 w-full h-full overflow-hidden gap-2">
        {images.map((image, index) => {
          return (
            <div key={index} className="relative h-[170px] w-full">
              <Image
                src={image}
                priority
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(24, 24)
                )}`}
                className={cn(
                  "h-full w-full object-cover",
                  index === 1 && "rounded-tr-lg",
                  index === 3 && "rounded-br-lg"
                )}
                fill
                sizes="(max-width-768px) 300px, (max-width-1280px) 100%, 100% "
                alt="hey"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoomImages;

"use client";
import { shimmer, toBase64 } from "@/lib/utils";
import { ListingType } from "@/types";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC, useState, useTransition } from "react";
import { useSession } from "next-auth/react"
import { useLogin } from "@/hooks/useLogin";
interface ListingItem {
  data: ListingType;
}

const ListingItem: FC<ListingItem> = ({ data }) => {
  const todayDay = new Date().toLocaleDateString("en-US", {
    day: "numeric",
  });
  const month = new Date().toLocaleDateString("en-US", {
    month: "short",
  });
  const [isPending, startTransition] = useTransition();
  const [isFav, setIsFav] = useState<boolean>(false);
  const { data: session, status } = useSession()
  const modal = useLogin()

  function toggleFav(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();

    if (session?.user && status === "authenticated") {
      setIsFav(!isFav);
    } else {
      modal.onOpen()
    }
  }

  return (
    <Link href={`/rooms/${data.title.toLowerCase().replace(/\s+/g, "-")}?id=${data.id}`}>
      <div className="w-full md:min-w-full flex flex-col justify-center md:block group ">
        <div className="w-full flex flex-col justify-center md:block h-72 rounded-xl border relative aspect-square overflow-hidden">
          <Image
            fill
            sizes="(max-width-768px) 340px, (max-width-1280px) 300px, 400px "
            src={data.imageSrc}
            alt={data.title}
            className="object-cover w-[340px] md:w-[300px] h-full rounded-xl group-hover:scale-110 transition duration-300"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(24, 24)
            )}`}
          />
          <div
            className="absolute top-3 right-4 cursor-pointer  "
            onClick={(e) => startTransition(() => toggleFav(e))}
          >
            <Image
              width={24}
              height={24}
              src={`icons/${isFav ? "heart-filled" : "heart"}.svg`}
              alt="heart icon"
              className="w-7 h-7 "
            />
          </div>
        </div>
        <div className="mt-2 w-11/12 md:w-full">
          <div className="w-full flex justify-between text-sm ">
            <h1 className="font-medium text-base">{data.locationValue}</h1>
            <div className="h-5 flex gap-1.5 items-center">
              <Star className="w-3.5 h-3.5 " fill="black" />
              <h1>4</h1>
            </div>
          </div>
          <div>
            <div className="flex flex-col text-gray-500 text-sm">
              <h1>Hosted by {data.host}</h1>
              <h1>
                {month} {todayDay}-{parseInt(todayDay) + 2}
              </h1>
            </div>
            <div className="flex text-black text-base mt-1">
              <span className="font-medium mr-1">${data.price}</span>
              <h1 className="">night</h1>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListingItem;

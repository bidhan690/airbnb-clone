"use client";
import { ListingType } from "@/types";
import { FC } from "react";
import { Separator } from "../ui/separator";
import { ArrowDown, Star } from "lucide-react";
import { Button } from "../ui/button";
import { useCalenderStore } from "@/context/CalenderStore";
import { cn } from "@/lib/utils";

interface RoomCheckoutProps {
  data: ListingType;
  className?: string
}

const RoomCheckout: FC<RoomCheckoutProps> = ({ data, className }) => {
  const calenderStore = useCalenderStore();

  const isValidDate = calenderStore.fromDate && calenderStore.toDate;

  function getCheckinDate() {
    return calenderStore.fromDate
      ? `${calenderStore.fromDate.getMonth() || 1
      }/${calenderStore.fromDate.getDate()}/${calenderStore.fromDate.getFullYear()}`
      : "Add date";
  }

  function getCheckoutDate() {
    return calenderStore.toDate
      ? `${calenderStore.toDate.getMonth() || 1
      }/${calenderStore.toDate.getDate()}/${calenderStore.toDate.getFullYear()}`
      : "Add date";
  }

  return (
    <div className={cn(" w-[350px] flex flex-col justify-between p-5 sticky top-14 right-14 bg-white shadow-all border rounded-lg",
      className,
      isValidDate ? "h-[450px]" : "h-[270px] "
    )}>
      <div className="flex justify-between items-end">
        <div className="flex gap-1 items-baseline">
          <span className="text-2xl font-semibold ">${data?.price ?? 12} </span>
          <span className="ml-1 text-gray-700 text-lg ">night</span>
        </div>
        <div className="w-36  flex justify-between text-sm items-center">
          <div className="flex font-semibold">
            <Star className="w-4 h-4 mr-1" fill="black" />
            <h2>4.88</h2>
          </div>
          <Separator
            orientation="vertical"
            className="h-1 w-1 rounded-full bg-gray-500"
          />
          <h2 className="underline">28 reviews</h2>
        </div>
      </div>
      <div className="border border-gray-500/50 mt-1 flex flex-col gap-1 rounded-lg cursor-pointer">
        <div className="flex items-center justify-between px-3 py-1 border-b border-gray-500/50">
          <div className="flex flex-col">
            <h2 className="text-xs font-semibold uppercase">Check-in</h2>
            <h2>{getCheckinDate()}</h2>
          </div>
          <Separator className="h-12 bg-gray-500/50" orientation="vertical" />
          <div className="flex flex-col">
            <h2 className="text-xs font-semibold uppercase">Checkout</h2>
            <h2>{getCheckoutDate()}</h2>
          </div>
        </div>
        <div className="flex items-center justify-between px-3 py-1">
          <div className="flex flex-col ">
            <h2 className="text-xs font-semibold uppercase">Guests</h2>
            <h2 className="text-sm text-gray-600">1 guest</h2>
          </div>
          <ArrowDown className="w-4 h-4" />
        </div>
      </div>
      <div className="mt-1 flex flex-col items-center gap-2">
        <Button className="w-full bg-red-500 h-12 font-semibold hover:bg-red-600">
          {isValidDate ? "Reserve" : "Check availability"}
        </Button>
        {isValidDate && (
          <p className="text-sm text-gray-600">You won&apos;t be charged yet</p>
        )}
      </div>
      {isValidDate && (
        <>
          <div className="mt-1 flex flex-col gap-y-2">
            <div className="flex justify-between">
              <h2 className="underline">
                ${data.price ?? 12} x {calenderStore.totalDays} nights
              </h2>
              <h2>${data.price * calenderStore.totalDays}</h2>
            </div>
            <div className="flex justify-between">
              <h2 className="underline">Airbnb service fee</h2>
              <h1>$11</h1>
            </div>
          </div>
          <Separator className="w-full" />
          <div className="flex justify-between">
            <h2 className="font-semibold">Total before taxes</h2>
            <h2 className="font-semibold">
              ${data.price * calenderStore.totalDays + 11}
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default RoomCheckout;

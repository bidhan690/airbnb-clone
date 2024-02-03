"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover } from "@/components/ui/popover";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import Image from "next/image";
import React from "react";
import PopoverAccountBar from "./PopoverAccountBar";
import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";

export default function Navcontent() {
  const { status, data } = useSession();
  const isLoaded = status === "loading" ? false : true;
  const isSignedIn = data?.user ? true : false;
  const user = data?.user;
  const userImageUrl =
    user?.image ? user?.image : "https://www.gravatar.com/avatar/?d=m";
  return (
    <div className="flex justify-end lg:justify-between w-[830px]">
      <div className="rounded-2xl hidden lg:flex h-12 w-[330px] hover:shadow-xl border text-black/90 font-medium">
        <div className="flex justify-between items-center h-full w-full py-3 pl-4 pr-2 text-sm">
          <div className="">Anywhere</div>
          <div className="border-r h-full" />
          <div>Any week</div>
          <div className="border-r h-full" />
          <div className="text-gray-400">Add guests</div>
          <div className="rounded-full bg-red-500 w-8 h-8 flex items-center justify-center ">
            <Image
              src="/icons/search-icon.svg"
              width={20}
              height={20}
              priority
              alt="search-icon"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end lg:justify-between h-12 ">
        <div className="hidden md:block rounded-full hover:bg-gray-200/40 p-3 text-sm font-medium">
          Airbnb your home
        </div>
        <div className="hidden md:block rounded-full hover:bg-gray-200/40 p-2 w-9 h-9">
          <Image
            src="/icons/earth-icon.svg"
            width={36}
            height={36}
            priority
            alt="earth-icon"
          />
        </div>
        <Popover>
          <PopoverTrigger>
            <div className="flex gap-2 h-10 justify-center items-center rounded-full hover:bg-gray-2 p-2 border hover:shadow-xl">
              <Image
                src="/icons/3line-icon.svg"
                alt="3line-icon"
                width={24}
                height={24}
                priority
                className="h-[80%] w-[80%]"
              />

              <Avatar className="flex items-center h-10">
                <AvatarImage
                  src={isLoaded && isSignedIn ? userImageUrl : ""}
                  alt="User avatar"
                  className="w-8 h-8 rounded-full"
                />
                <AvatarFallback className={cn("w-8 h-8",
                  isSignedIn && "bg-green-500 text-white"
                )}>
                  {isLoaded && !isSignedIn ? <Image
                    src="/icons/account-icon.svg"
                    alt="account-icon"
                    height={32}
                    width={32}
                    priority
                    className="w-8 h-8"
                  />
                    : user?.email?.slice(0, 2).toUpperCase()! ?? <Image
                      src={"/icons/account-icon.svg"}
                      alt="account-icon"
                      height={32}
                      width={32}
                      priority
                      className="w-8 h-8"
                    />

                  }
                </AvatarFallback>
              </Avatar>
            </div>
          </PopoverTrigger>
          <PopoverContent className="z-10">
            <PopoverAccountBar />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

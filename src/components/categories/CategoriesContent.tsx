"use client";
import React, { useEffect, useState, useRef } from "react";
import { Button } from "../ui/button";
import { SlidersHorizontal } from "lucide-react";
import RightButton from "./RightButton";
import LeftButton from "./LeftButton";
import { ContentType } from "@/types";
import { nanoid } from "nanoid";
import dynamic from "next/dynamic";
import CategorieSkeleton from "../skeleton/CategorieSkeleton";
import { motion } from "framer-motion"

const CategoriesItem = dynamic(() => import("./CategoriesItem"), {
  loading: () => <CategorieSkeleton />,
});

// import CategoriesItem from "./CategoriesItem";

export default function SlidebarContent() {
  const [content, setContent] = useState<ContentType[]>(
    [
      {
        id: 1,
        title: "Bed & breakfasts",
        src: "icons/cup.svg",
        show: true
      },
      {
        id: 2,
        title: "Rooms",
        src: "icons/bed.svg",
        show: false

      },
      {
        id: 3,
        title: "Amazing views",
        src: "icons/amazing-views.svg",
        show: false

      },
      {
        id: 4,
        title: "Lake front",
        src: "icons/lake-front.svg",
        show: false

      },
      {
        id: 5,
        title: "New",
        src: "https://img.icons8.com/ios/50/key.png",
        show: false

      },
      {
        id: 6,
        title: "Desert",
        src: "https://img.icons8.com/external-basicons-line-edtgraphics/50/external-desert-outdoor-activities-edtim-outline-edtim.png",
        show: false

      },
      {
        id: 7,
        title: "Boats",
        src: "https://img.icons8.com/windows/100/sailing-ship-medium.png",
        show: false

      },
      {
        id: 8,
        title: "Trending",
        src: "https://img.icons8.com/ios/50/fire-element--v1.png",
        show: false

      },
      {
        id: 9,
        title: "Tiny homes",
        src: "https://img.icons8.com/ios/50/country-house.png",
        show: false

      },
      {
        id: 10,
        title: "National parks",
        src: "https://img.icons8.com/ios/50/national-park.png",
        show: false

      },
      {
        id: 11,
        title: "Vine yards",
        src: "https://img.icons8.com/windows/32/grapes.png",
        show: false

      },
      {
        id: 12,
        title: "Beach",
        src: "https://img.icons8.com/wired/64/umbrella.png",
        show: false

      },
      {
        id: 13,
        title: "Camping",
        src: "https://img.icons8.com/quill/50/camping-tent.png",
        show: false

      },
      {
        id: 14,
        title: "Creative Spaces",
        src: "https://img.icons8.com/ios/50/color-palette.png",
        show: false

      },
      {
        id: 15,
        title: "Surfing",
        src: "https://img.icons8.com/ios/50/surfing.png",
        show: false

      },
      {
        id: 16,
        title: "Historical homes",
        src: "https://img.icons8.com/quill/50/cathedral.png",
        show: false

      },
      {
        id: 17,
        title: "Cabins",
        src: "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/external-cabin-tourism-and-outdoor-recreation-flatart-icons-outline-flatarticons.png",
        show: false

      },
      {
        id: 18,
        title: "Castles",
        src: "https://img.icons8.com/dotty/80/castle.png",
        show: false

      },
    ]);
  let sliderRef = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollLeft(e.currentTarget.scrollLeft)

  }

  const handleLeftClick = () => {
    if (sliderRef.current) {
      const width = sliderRef.current.clientWidth;
      sliderRef.current.scrollLeft -= width;
    }
  };

  const handleRightClick = () => {
    if (sliderRef.current) {
      const width = sliderRef.current.clientWidth;
      sliderRef.current.scrollLeft += width;
    }
  };



  const selectItem = (id: number) => {
    const newContent = content.map((item) => {
      return item.id === id
        ? { ...item, show: true }
        : { ...item, show: false };
    });
    setContent(newContent);
  };

  return (
    <div className="flex justify-between items-center h-full w-full">
      <LeftButton
        onClick={handleLeftClick}
        className={scrollLeft < 50 ? "hidden" : "block"}
      />

      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className="flex gap-2 items-center h-full w-[85%] overflow-x-hidden"
      >
        <div
          className="flex gap-2 items-center h-full w-full"
        >
          {content?.map((item) => (
            <motion.div key={item.id}  >
              <CategoriesItem
                key={item.id}
                content={item}
                onClick={(id) => selectItem(id)}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <RightButton onClick={handleRightClick} className={"block"} />

      <Button variant="outline" className="hidden md:flex rounded-xl h-12 text-xs">
        <SlidersHorizontal className="w-[14px] h-[14px] mr-2 " />
        Filters
      </Button>
    </div>
  );
}

function contentItems() {
  const hotels: { title: string; src: string; show: boolean }[] = [
    {
      title: "Bed & breakfasts",
      src: "icons/cup.svg",
      show: false
    },
    {
      title: "Rooms",
      src: "icons/bed.svg",
      show: false

    },
    {
      title: "Amazing views",
      src: "icons/amazing-views.svg",
      show: false

    },
    {
      title: "Lake front",
      src: "icons/lake-front.svg",
      show: false

    },
    {
      title: "New",
      src: "https://img.icons8.com/ios/50/key.png",
      show: false

    },
    {
      title: "Desert",
      src: "https://img.icons8.com/external-basicons-line-edtgraphics/50/external-desert-outdoor-activities-edtim-outline-edtim.png",
      show: false

    },
    {
      title: "Boats",
      src: "https://img.icons8.com/windows/100/sailing-ship-medium.png",
      show: false

    },
    {
      title: "Trending",
      src: "https://img.icons8.com/ios/50/fire-element--v1.png",
      show: false

    },
    {
      title: "Tiny homes",
      src: "https://img.icons8.com/ios/50/country-house.png",
      show: false

    },
    {
      title: "National parks",
      src: "https://img.icons8.com/ios/50/national-park.png",
      show: false

    },
    {
      title: "Vine yards",
      src: "https://img.icons8.com/windows/32/grapes.png",
      show: false

    },
    {
      title: "Beach",
      src: "https://img.icons8.com/wired/64/umbrella.png",
      show: false

    },
    {
      title: "Camping",
      src: "https://img.icons8.com/quill/50/camping-tent.png",
      show: false

    },
    {
      title: "Creative Spaces",
      src: "https://img.icons8.com/ios/50/color-palette.png",
      show: false

    },
    {
      title: "Surfing",
      src: "https://img.icons8.com/ios/50/surfing.png",
      show: false

    },
    {
      title: "Historical homes",
      src: "https://img.icons8.com/quill/50/cathedral.png",
      show: false

    },
    {
      title: "Cabins",
      src: "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/external-cabin-tourism-and-outdoor-recreation-flatart-icons-outline-flatarticons.png",
      show: false

    },
    {
      title: "Castles",
      src: "https://img.icons8.com/dotty/80/castle.png",
      show: false

    },
  ];
  const content = hotels.map((item) => {
    return { id: nanoid(), ...item };
  });
  content[0].show = true;
  return content;
}

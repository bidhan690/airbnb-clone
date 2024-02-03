"use client";
import { ContentType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";

interface SlidebarItemsProps {
  content: ContentType;
  onClick: (id: number) => void;
}

const SlidebarItems: FC<SlidebarItemsProps> = ({ content, onClick }) => {
  return (
    <Link
      href={`/?category=${content.title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div
        className={`slidebar-content ${content.show ? "selected" : ""}`}
        onClick={() => onClick(content.id)}
      >
        <div className="flex flex-col items-center w-[98px] ">
          <Image
            src={content.src}
            alt={content.title}
            width={24}
            height={24}
            className="h-7 w-7 mb-2 "
          />

          <h3 className="text-xs font-medium">{content.title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default SlidebarItems;

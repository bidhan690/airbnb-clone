"use client";
import { FC, useState } from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

interface AboutCardProps {
  data: string;
}

const AboutCard: FC<AboutCardProps> = ({ data }) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const visibleText = data.substring(0, 180) + "...";

  return (
    <div className="w-[80%] md:w-[50%] mt-3 flex flex-col gap-3">
      <h1 className="text-xl md:text-2xl font-semibold">About this place</h1>
      <div>
        <p>{isShow ? data : visibleText}</p>
      </div>
      <Button
        variant="ghost"
        onClick={() => setIsShow(!isShow)}
        className="flex justify-start pl-0 hover:bg-white items-center w-[150px] underline font-semibold text-base "
      >
        {isShow ? "Show less" : "Show more"}{" "}
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
};

export default AboutCard;

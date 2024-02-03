import { FC } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

interface RightButtonProps {
  onClick: () => void;
  className: string;
}

const RightButton: FC<RightButtonProps> = ({ onClick, className }) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className={`hover:bg-transparent  ${className}`}
      onClick={onClick}
    >
      <Image
        src="/icons/right-arrow.svg"
        width={28}
        height={28}
        priority
        alt="right-arrow"
        className="w-7 h-7 ml-2"
      />
    </Button>
  );
};

export default RightButton;

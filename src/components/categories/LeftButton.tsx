import { FC } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

interface LeftButtonProps {
  className?: string;
  onClick: () => void;
}

const LeftButton: FC<LeftButtonProps> = ({ onClick, className }) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className={`hover:bg-transparent  ${className}`}
      onClick={onClick}
    >
      <Image
        src="/icons/left-arrow.svg"
        width={28}
        height={28}
        alt="left-arrow"
        className="w-7 h-7 mr-2 "
      />
    </Button>
  );
};

export default LeftButton;

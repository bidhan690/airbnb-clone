import React, { FC, useState } from "react";
import { Input, InputProps } from "../ui/input";
import { EyeOff } from "lucide-react";
import { Eye } from "lucide-react";
import { cn } from "@/lib/utils";

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

    const handleShowPassword = () => {
      setIsShowPassword(!isShowPassword);
    };

    return (
      <div className="relative">
        <Input
          placeholder="********"
          type={isShowPassword ? "text" : "password"}
          className={cn("pr-8", className)}
          ref={ref}
          {...props}
        />
        <div
          className="absolute top-3 right-2 cursor-pointer"
          onClick={handleShowPassword}
        >
          {isShowPassword ? (
            <Eye className="h-4 w-4" />
          ) : (
            <EyeOff className="h-4 w-4" />
          )}
        </div>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };

import Signout from "@/components/auth/Signout";
import Upload from "@/components/listings/Upload";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useLogin } from "@/hooks/useLogin";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface PopoverAccountBarProps { }

const PopoverAccountBar: FC<PopoverAccountBarProps> = ({ }) => {
  const { status, data } = useSession();
  const isLoaded = status === "loading" ? false : true;
  const isSignedIn = data?.user ? true : false;
  return (
    <div
      className={cn(
        "mt-3 mr-6 w-64 rounded-xl bg-white shadow-all ",
        isLoaded && isSignedIn ? "h-[350px]" : "h-50"
      )}
    >
      <div className="flex flex-col justify-between items-start p-3 w-full h-full">
        {isLoaded && isSignedIn ? <SignedInOptions /> : <DefaultOptions />}
      </div>
    </div>
  );
};

export default PopoverAccountBar;

const SignedInOptions = ({ }) => {
  const router = useRouter();

  return (
    <>
      <div className="w-full">
        <Button variant="ghost" className="w-full justify-start">
          Messages
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          Notifications
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          Trips
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          Wishlists
        </Button>
      </div>
      <Separator />
      <div className="w-full text-black/80  ">
        <Button
          variant="ghost"
          className="w-full justify-start hover:text-black"
        >
          Airbnb your home
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start hover:text-black"
          onClick={() => router.push("/account")}
        >
          Account
        </Button>
      </div>
      <Separator />
      <div className="w-full text-black/80 ">
        {/* <Button
          variant="ghost"
          className="w-full justify-start hover:text-black"
        >
          Help
        </Button> */}
        <Upload />
        <Signout className="hover:text-black" />
      </div>
    </>
  );
};

const DefaultOptions = ({ }) => {
  const modal = useLogin();
  const handleClick = (mode: string) => {
    modal.setMode(mode);
    modal.onOpen();
  }
  return (
    <>
      <div className="w-full flex flex-col">
        <Button variant="ghost" className="w-full justify-start" onClick={() => handleClick('signin')}>
          Log in
        </Button>
        <Button variant="ghost" className="w-full justify-start" onClick={() => handleClick("signup")}>
          Sign up
        </Button>
      </div>
      <Separator />
      <div className="w-full text-black/80 ">
        <Button
          variant="ghost"
          className="w-full justify-start hover:text-black"
        >
          Airbnb your home
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start hover:text-black"
        >
          Help
        </Button>
      </div>
    </>
  );
};

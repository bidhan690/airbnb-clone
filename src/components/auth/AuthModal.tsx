"use client"
import React, { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "../ui/dialog";
import { useLogin } from "@/hooks/useLogin";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Signin from "./Signin";
import Signup from "./Signup";
import { createPortal } from "react-dom";
import OAuthButtons from "./OAuthButtons";

interface SigninProps {
  children?: React.ReactNode;
  mode?: string;
}

const AuthModal: FC<SigninProps> = ({ children, mode }) => {
  const modal = useLogin();
  return createPortal(
    <>
      <Dialog
        open={modal.isOpen}
        onOpenChange={() => modal.onOpenChange(!modal.isOpen)}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            {/* <DialogDescription>Signin to your account</DialogDescription> */}
          </DialogHeader>
          <Tabs defaultValue={modal.mode}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign up</TabsTrigger>
            </TabsList>
            <TabsContent value="signin" className="sm:max-w-[425px]">
              <Signin />
            </TabsContent>
            <TabsContent value="signup" className="sm:max-w-[425px]">
              <Signup />
            </TabsContent>
          </Tabs>
          <OAuthButtons />
          <DialogFooter></DialogFooter>
        </DialogContent>
      </Dialog>
    </>, document.body
  );
};

export default AuthModal;

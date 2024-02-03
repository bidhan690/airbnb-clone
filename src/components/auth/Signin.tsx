import React, { FC, useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { PasswordInput } from "./PasswordInput";
import { authSchema } from "@/lib/validations/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { z } from "zod";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useLogin } from "@/hooks/useLogin";

interface SigninProps {
  children?: React.ReactNode;
}

type Inputs = z.infer<typeof authSchema>;

const Signin: FC<SigninProps> = ({ children }) => {

  const modal = useLogin()

  const [isPending, setIsPending] = useState<boolean>(false);

  const form = useForm<Inputs>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: Inputs) {
    if (!data.email && !data.password) return
    try {
      setIsPending(true)

      const res = await signIn("credentials", {
        redirect: false,
        ...data
      })
      if (res?.error) throw new Error(res.error)
      toast.success("Successfully signed in")
      modal.onClose()
    } catch (err: any) {

      toast.error(err.message || "Something went wrong, please try again", { duration: 5000 })
    } finally {
      setIsPending(false)
    }
  }

  return (<Form {...form}  >
    <form autoFocus={false} onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="joe@gmail.com"
                className=""
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <PasswordInput  {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />




      <Button type="submit" disabled={isPending} className="w-full">
        {isPending && <Loader2 className="mr-2 w-4 h-4 animate-spin" />}
        {isPending ? "Logging in.." : "Log in"}
      </Button>
    </form>
  </Form>
  );
};

export default Signin;

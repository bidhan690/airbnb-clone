"use client";
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
import { z } from "zod";
import { authSchema } from "@/lib/validations/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";
import { signUp } from "@/actions/auth";

interface SignupProps {
  children?: React.ReactNode;
}

type Inputs = z.infer<typeof authSchema>;

const Signup: FC<SignupProps> = ({ children }) => {
  const [isPending, setIsPending] = useState<boolean>(false);

  const form = useForm<Inputs>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: Inputs) {
    try {
      setIsPending(true);
      await signUp(data)
      toast.success(
        "Successfully created account. Please proceed to sign in."
        , { duration: 5000 }
      );

    } catch (error: any) {
      const unknownError = "Something went wrong, please try again.";
      toast.error(error.message || unknownError);
    } finally {
      setIsPending(false);
    }
  }

  return (
    <Form {...form}>
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
                <PasswordInput {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isPending}
          className="w-full"
        >
          {isPending && <Loader2 className="mr-2 w-4 h-4 animate-spin" />}
          {isPending ? "Signing up" : "Sign up"}
        </Button>
      </form>
    </Form>

  );
};

export default Signup;

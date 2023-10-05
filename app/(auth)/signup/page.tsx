"use client";
import { useState } from "react";
import Container from "@/components/Container";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { formSchema } from "@/constants/constants";
import { useAuth } from "@/hooks/useAuth";
import { googleAuth } from "@/lib/auth";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { signup, googleAuth } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "samueloseh007@gmail.com",
      password: "StrongPass@123",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    signup(values);
  };

  const handleGoogleAuth = () => {
    googleAuth();
  };

  return (
    <Container className="w-[390px] px-[3.25rem] ">
      <Image height={55} width={117} src="./Logo.svg" alt="logo" />
      <h1 className="text-[1.5rem] mt-[2.25rem]">Create a new account!</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <div className="space-y-[1.12rem]">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mt-[1.12rem]">
                  <FormLabel className="text-sm">Email</FormLabel>
                  <FormControl>
                    <Input type="email" className="outline-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mb-0">
                  <FormLabel className="text-sm">Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        className="outline-none pr-[2.5rem]"
                        {...field}
                      />
                      <Image
                        src={showPassword ? "/eye-closed.svg" : "/eye.svg"}
                        height={25}
                        width={19}
                        alt="eye.svg"
                        className="absolute cursor-pointer top-[29%] right-3"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button className="w-full mt-[0.75rem]" type="submit">
            Sign Up
          </Button>
        </form>
      </Form>
      <div className="flex items-center justify-between w-full mt-[1.87rem]">
        <span className="w-[7.6rem] bg-input h-[1px]"></span>
        <p className="text-sm">Or</p>
        <span className="w-[7.6rem] bg-input h-[1px]"></span>
      </div>
      <Button
        variant="outline"
        className="w-full mt-[1.25rem] text-sm"
        onClick={handleGoogleAuth}
      >
        <Image src="/google.png" alt="google logo" height={24} width={24} />
        Sign up with Google
      </Button>
      <Button variant="outline" className="w-full mt-[1.12rem] text-sm">
        <Image src="/apple.png" alt="google logo" height={24} width={24} />
        Sign up with Apple
      </Button>
      <p className="mt-[1.62rem] text-sm">
        Already have an accout?{" "}
        <span>
          <Button variant="link" className="p-0 text-sm">
            Sign in
          </Button>
        </span>
      </p>
    </Container>
  );
}

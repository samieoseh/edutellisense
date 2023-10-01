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

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%^&])[A-Za-z\d@#$!%^&*]{8,}$/;

const formSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: "Email must be at least 2 characters",
    })
    .regex(emailRegex, "Email must be of the format 'test@example.com'"),

  password: z
    .string()
    .min(8, {
      message: "password must be at least 8 characters",
    })
    .regex(
      passwordRegex,
      "Password must contain at least 8 characters, an uppercase and a symbol"
    ),
});

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Container className="px-[3.25rem] ">
      <Image height={55} width={117} src="./Logo.svg" alt="logo" />
      <h1 className="text-[1.5rem] mt-[2.25rem]">Welcome Back!</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <div className="space-y-[1.12rem]">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mt-[1.12rem]">
                  <FormLabel className="text-xs">Email</FormLabel>
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
                  <FormLabel className="text-xs">Password</FormLabel>
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
          <div className="flex justify-end">
            <Link
              href=""
              className="text-right mt-[0.3rem] text-xs text-primary"
            >
              Forgot Password?
            </Link>
          </div>
          <Button className="w-full mt-[0.75rem]" type="submit">
            Sign in
          </Button>
        </form>
      </Form>
      <div className="flex items-center justify-between w-full mt-[1.87rem]">
        <span className="w-[7.6rem] bg-input h-[1px]"></span>
        <p className="text-xs">Or</p>
        <span className="w-[7.6rem] bg-input h-[1px]"></span>
      </div>
      <Button variant="outline" className="w-full mt-[1.25rem] text-xs">
        <Image src="/google.png" alt="google logo" height={24} width={24} />
        Sign in with Google
      </Button>
      <Button variant="outline" className="w-full mt-[1.12rem] text-xs">
        <Image src="/apple.png" alt="google logo" height={24} width={24} />
        Sign in with Apple
      </Button>
      <p className="mt-[1.62rem] text-xs">
        Do not have an accout?{" "}
        <span>
          <Button variant="link" className="p-0 text-xs">
            Sign Up
          </Button>
        </span>
      </p>
    </Container>
  );
}

"use client";
import { useState } from "react";
import Container from "@/components/Container";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { apiState, signupFormSchema } from "@/constants/constants";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { signup, status } = useAuth();
  const router = useRouter();

  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      name: "Samuel Oseh",
      email: "samueloseh007@gmail.com",
      password: "StrongPass@123",
    },
  });

  const onSubmit = (values: z.infer<typeof signupFormSchema>) => {
    signup(values, () => router.push("/plan"));
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
              name="name"
              render={({ field }) => (
                <FormItem className="mt-[1.12rem]">
                  <FormLabel className="text-sm">Username</FormLabel>
                  <FormControl>
                    <Input type="text" className="outline-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
          <Button
            className="w-full mt-[0.75rem]"
            type="submit"
            disabled={status === apiState.LOADING ? true : false}
          >
            {status === apiState.LOADING ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Signing up...
              </>
            ) : (
              "Sign up"
            )}
          </Button>
        </form>
      </Form>
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

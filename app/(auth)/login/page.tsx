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
import { authState, formSchema } from "@/constants/constants";
import { useAuth } from "@/hooks/useAuth";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { login, status, error, googleAuth } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "samueloseh007@gmail.com",
      password: "StrongPass@123",
    },
  });
  const router = useRouter();

  const onSubmit = (formData: z.infer<typeof formSchema>) => {
    login(formData, () => router.push("/dashboard"));
  };

  const handleGoogleAuth = () => {
    googleAuth();
  };
  return (
    <Container className="w-[390px] px-[3.25rem] ">
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
          <div className="flex justify-end">
            <Link
              href="/"
              className="text-right mt-[0.3rem] text-sm text-primary"
            >
              Forgot Password?
            </Link>
          </div>
          <Button
            className="w-full mt-[0.75rem]"
            type="submit"
            disabled={status === "loading" ? true : false}
          >
            {status === "loading" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Signing in...
              </>
            ) : (
              "Sign in"
            )}
          </Button>
          <p className="mt-1 text-destructive text-xs text-center">
            {status === authState.ERROR ? error.message : ""}
          </p>
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
        Sign in with Google
      </Button>
      <Button variant="outline" className="w-full mt-[1.12rem] text-sm">
        <Image src="/apple.png" alt="google logo" height={24} width={24} />
        Sign in with Apple
      </Button>
      <p className="mt-[1.62rem] text-sm">
        Do not have an accout?{" "}
        <span>
          <Button variant="link" className="p-0 text-sm">
            Sign up
          </Button>
        </span>
      </p>
    </Container>
  );
}

import { UserProps } from "@/typings";
import { setCookie, deleteCookie } from "cookies-next";
import uuidv4 from "uuid4";
import { account } from "./appwriteConfig";
import { Dispatch, SetStateAction } from "react";
import { authState } from "@/constants/constants";

export const signup = async ({ email, password }: UserProps) => {
  try {
    const userId = uuidv4();
    await account.create(userId, email, password, email);
    await account.createEmailSession(email, password);
  } catch (error: any) {
    if (error.type === "user_already_exists") {
      console.log("User with provided email already exists");
    } else if (error.type === "general_rate_limit_exceeded") {
      console.log("Api Limit Exceeded, try again in one hour");
    } else {
      console.log(error);
      console.log("An error occured, please contact tech support");
    }
  }
};

export const login = async (
  email: string,
  password: string,
  setStatus: Dispatch<SetStateAction<string>>,
  setError: Dispatch<
    SetStateAction<{
      type: string;
      message: string;
    }>
  >,
  onSuccess: () => void
) => {
  try {
    setStatus(authState.LOADING);
    await account.createEmailSession(email, password);
    setCookie("auth", true, { maxAge: 60 * 60 * 60 * 6 * 24 });
    setStatus(authState.SUCCESS);
    onSuccess();
  } catch (error: any) {
    setStatus(authState.ERROR);
    if (error.type === "user_invalid_credentials") {
      setError({
        type: error.type,
        message: "Invalid email and/or password",
      });
    } else if (error.type === "general_rate_limit_exceeded") {
      setError({
        type: error.type,
        message: "Api Limit Exceeded, try again in one hour",
      });
    } else {
      setError({
        type: error.type,
        message: "An error occured, please contact tech support",
      });
    }
  }
};

export const googleAuth = () => {
  const environment = process.env.NEXT_PUBLIC_ENVIRONMENT;
  const redirectDomain =
    environment === "development"
      ? "http://locahost:3000"
      : "https//edutellisense.vercel.app";
  try {
    account.createOAuth2Session(
      "google",
      `${redirectDomain}/dashboard`,
      `${redirectDomain}/login`
    );
    setCookie("auth", true, { maxAge: 60 * 60 * 60 * 6 * 24 });
  } catch (error: any) {
    console.log(error.type);
  }
};
export const logout = async () => {
  await account.deleteSession("current");
  deleteCookie("auth");
};

import { setCookie, deleteCookie } from "cookies-next";
import uuidv4 from "uuid4";
import { account } from "./appwriteConfig";
import { Dispatch, SetStateAction } from "react";
import { apiState } from "@/constants/constants";
import { storeToDatabase } from "./utils";

export const signup = async (
  email: string,
  password: string,
  name: string,
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
    setStatus(apiState.LOADING);
    const userId = uuidv4();
    await account.create(userId, email, password, name);
    await account.createEmailSession(email, password);
    setStatus(apiState.SUCCESS);
    setCookie("auth", true, { maxAge: 60 * 6 * 24 });
    storeToDatabase(userId);
    onSuccess();
  } catch (error: any) {
    setStatus(apiState.ERROR);
    if (error.type === "user_already_exists") {
      setError({
        type: "user_already_exists",
        message: "User with provided email already exists",
      });
    } else if (error.type === "general_rate_limit_exceeded") {
      setError({
        type: "general_rate_limit_exceeded",
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
    setStatus(apiState.LOADING);
    await account.createEmailSession(email, password);
    setCookie("auth", true, { maxAge: 60 * 60 * 60 * 6 * 24 });
    setStatus(apiState.SUCCESS);
    onSuccess();
  } catch (error: any) {
    setStatus(apiState.ERROR);
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

export const googleAuth = (success: string, failure: string) => {
  const environment = process.env.NEXT_PUBLIC_ENVIRONMENT;
  const redirectDomain =
    environment === "development"
      ? "http://localhost:3000"
      : "https://edutellisense.vercel.app";
  console.log(redirectDomain);
  try {
    account.createOAuth2Session(
      "google",
      `${redirectDomain}${success}`,
      `${redirectDomain}${failure}`
    );
    setCookie("auth", true, { maxAge: 60 * 6 * 24 });
  } catch (error: any) {
    console.log(error.type);
  }
};
export const logout = async () => {
  await account.deleteSession("current");
  deleteCookie("auth", { maxAge: 60 * 6 * 24 });
};

import { apiState } from "@/constants/constants";
import { googleAuth, login, logout, signup } from "@/lib/auth";
import { SignupProps, LoginProps } from "@/typings";
import { useState } from "react";
export const useAuth = () => {
  const [status, setStatus] = useState(apiState.IDLE);
  const [error, setError] = useState({
    type: "",
    message: "",
  });

  return {
    status,
    error,
    signup: ({ email, password, name }: SignupProps, onSuccess: () => void) =>
      signup(email, password, name, setStatus, setError, onSuccess),
    googleAuth: (success: string, failure: string) =>
      googleAuth(success, failure),
    login: ({ email, password }: LoginProps, onSuccess: () => void) =>
      login(email, password, setStatus, setError, onSuccess),
    logout: () => logout(),
  };
};

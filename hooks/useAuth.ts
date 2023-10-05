import { authState } from "@/constants/constants";
import { googleAuth, login, logout, signup } from "@/lib/auth";
import { UserProps } from "@/typings";
import { useState } from "react";
export const useAuth = () => {
  const [status, setStatus] = useState(authState.IDLE);
  const [error, setError] = useState({
    type: "",
    message: "",
  });

  return {
    status,
    error,
    signup: ({ email, password }: UserProps) => signup({ email, password }),
    googleAuth: () => googleAuth(),
    login: ({ email, password }: UserProps, onSuccess: () => void) =>
      login(email, password, setStatus, setError, onSuccess),
    logout: () => logout(),
  };
};

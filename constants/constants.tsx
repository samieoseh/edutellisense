import * as z from "zod";
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%^&])[A-Za-z\d@#$!%^&*]{8,}$/;

export const loginFormSchema = z.object({
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

export const signupFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
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

export const apiState = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};

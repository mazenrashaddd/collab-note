import * as yup from "yup";

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email is required"),

    password: yup
      .string()
      .required("Password is required")
      .min(6, "Invalid password"),
  })
  .required();

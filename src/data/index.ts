import type { ILoginForm, IRegisterForm } from "../interfaces";

export const loginFormInputData: ILoginForm[] = [
  {
    label: "Email address",
    placeholder: "you@example.com",
    type: "string",
    name: "email",
  },
  {
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    name: "password",
  },
];

export const registerFormInputData: IRegisterForm[] = [
  {
    label: "Email address",
    placeholder: "you@example.com",
    type: "string",
    name: "email",
  },
  {
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    name: "password",
  },
  {
    label: "Confirm Password",
    placeholder: "Re-enter your password",
    type: "password",
    name: "confirmPassword",
  },
];

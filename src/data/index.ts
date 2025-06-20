import type { ILoginForm } from "../interfaces";

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

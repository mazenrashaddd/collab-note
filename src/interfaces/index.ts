export interface ILoginFormData {
  email: string;
  password: string;
}

export interface ILoginForm {
  label: "Email address" | "Password";
  placeholder: string;
  type: "string" | "password";
  name: "email" | "password";
}

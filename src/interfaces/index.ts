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

export interface IRegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IRegisterForm {
  label: "Email address" | "Password" | "Confirm Password";
  placeholder: string;
  type: "string" | "password";
  name: "email" | "password" | "confirmPassword";
}

export interface IResetPasswordFormData {
  email: string;
}

export interface IResetPasswordForm {
  label: "Email address";
  placeholder: string;
  type: "string";
  name: "email";
}

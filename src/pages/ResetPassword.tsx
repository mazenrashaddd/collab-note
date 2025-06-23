import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPasswordEmailSchema } from "../validation";
import { resetPasswordFormInputData } from "../data";
import ResetPasswordFormIcon from "../components/ui/ResetPasswordFormIcon";
import Button from "../components/ui/Button";
import InlineLink from "../components/ui/InlineLink";
import type { IResetPasswordFormData } from "../interfaces";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ResetPasswordPage = () => {
  /* ---------------------------- Constants ---------------------------- */
  const navigate = useNavigate();

  /* ---------------------------- States ---------------------------- */
  const [isLoading, setIsLoading] = useState(false);

  /* ---------------------------- React Hook Form Constants & Functions ---------------------------- */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resetPasswordEmailSchema),
  });

  /* ---------------------------- Handlers ---------------------------- */
  const onSubmit: SubmitHandler<IResetPasswordFormData> = (
    data: IResetPasswordFormData
  ) => {
    setIsLoading(true);
    toast.success(`Password reset link was sent to ${data?.email}`, {
      position: "bottom-center",
      duration: 2000,
      style: {
        backgroundColor: "black",
        color: "white",
        display: "flex",
        textAlign: "center",
        minWidth: "420px",
      },
    });
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  /* ---------------------------- Renders ---------------------------- */
  const renderResetPasswordFormInputs = resetPasswordFormInputData.map(
    ({ label, type, name, placeholder }, idx) => {
      return (
        <div key={idx} className="mb-3">
          <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {label}
          </label>
          <div className="relative">
            <input
              type={type}
              placeholder={placeholder}
              className="w-full pl-10 pr-4 py-2 text-gray-700 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register(name)}
            />
            <ResetPasswordFormIcon inputName={name} />
          </div>
          <p className="mt-1 text-sm font-medium text-red-500">
            {errors[name]?.message}
          </p>
        </div>
      );
    }
  );

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col w-md sm:w-lg justify-center items-center bg-white p-8 border-white rounded-2xl shadow-lg space-y-8">
        <div className="flex flex-col items-center text-center justify-center space-y-2">
          <span className="font-[Pacifico] text-5xl text-blue-400">
            abs.ai notes
          </span>
          <span className="font-[Inter] text-gray-600">
            Forgot your password? Enter your email to reset your password
          </span>
        </div>
        <div className="w-95">
          <form onSubmit={handleSubmit(onSubmit)}>
            {renderResetPasswordFormInputs}
            <div className="flex flex-col space-y-4 mt-6">
              <Button type="submit" isLoading={isLoading}>
                Reset Password
              </Button>
            </div>
            <div className="flex flex-col w-full justify-center items-center space-y-4 mt-6 text-gray-700 text-sm">
              <span>Or</span>
              <span className="flex items-center">
                Don't have an account?
                <InlineLink
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Register now
                </InlineLink>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;

import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validation";
import { loginFormInputData } from "../data";
import LoginFormIcon from "../components/ui/LoginFormIcon";
import Button from "../components/ui/Button";
import type { ILoginFormData } from "../interfaces";
import { useState } from "react";
import axiosInstance from "../config/axios.config";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthLogin } from "../app/features/auth/authLoginSlice";

const LoginPage = () => {
  /* ---------------------------- Constants ---------------------------- */
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /* ---------------------------- States ---------------------------- */
  const [isLoading, setIsLoading] = useState(false);

  /* ---------------------------- React Hook Form Constants & Functions ---------------------------- */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  /* ---------------------------- Handlers ---------------------------- */
  const onSubmit: SubmitHandler<ILoginFormData> = async (
    data: ILoginFormData
  ) => {
    setIsLoading(true);
    try {
      const { status, data: resData } = await axiosInstance.post(
        "/auth/login",
        data
      );
      if (status === 200) {
        setIsLoading(false);

        dispatch(
          setAuthLogin({
            token: resData.data.token,
            email: resData.data.user.email,
          })
        );
        localStorage.setItem(
          "loggedInUserData",
          JSON.stringify({
            token: resData.data.token,
            email: resData.data.user.email,
          })
        );

        toast.success("Login successfully, navigating to  home page", {
          position: "bottom-center",
          duration: 1900,
          style: {
            backgroundColor: "black",
            color: "white",
            width: "fit-content",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          },
        });

        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log("Failed to login:", error.message);
      } else {
        console.log("Failed to login");
      }
    } finally {
      setIsLoading(false);
    }
  };

  /* ---------------------------- Renders ---------------------------- */
  const renderLoginFormInputs = loginFormInputData.map(
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
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register(name)}
            />
            <LoginFormIcon inputName={name} />
          </div>
          <p className="font-medium text-red-400">{errors[name]?.message}</p>
        </div>
      );
    }
  );

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col w:md sm:w-lg justify-center items-center bg-white p-8 border-white rounded-2xl shadow-lg space-y-8">
        <div className="flex flex-col items-center space-y-2">
          <span className="font-[Pacifico] text-5xl text-blue-400">
            abs.ai notes
          </span>
          <span className="font-[Inter] text-gray-600">
            Welcome back! Please login to your account.
          </span>
        </div>
        <div className="w-95">
          <form onSubmit={handleSubmit(onSubmit)}>
            {renderLoginFormInputs}
            <div className="flex flex-col space-y-4 mt-4">
              <div className="flex-1 text-end">
                <Button
                  type="button"
                  width="fit"
                  textColor="blue-500"
                  backgroundColor="white"
                  className="text-sm"
                >
                  Forgot Password?
                </Button>
              </div>
              <Button type="submit" isLoading={isLoading}>
                Login
              </Button>
            </div>
            <div className="flex flex-col w-full justify-center items-center space-y-4 mt-6 text-gray-700 text-sm">
              <span>Or</span>
              <span className="flex items-center">
                Don't have an account?
                <Button
                  type="button"
                  width="fit"
                  backgroundColor="white"
                  textColor="blue-500"
                  className="ms-2"
                >
                  Register now
                </Button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

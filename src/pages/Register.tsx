import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../validation";
import { registerFormInputData } from "../data";
import RegisterFormIcon from "../components/ui/RegisterFormIcon";
import Button from "../components/ui/Button";
import InlineLink from "../components/ui/InlineLink";
import type { IRegisterFormData } from "../interfaces";
import { useState } from "react";
import axiosInstance from "../config/axios.config";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
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
    resolver: yupResolver(registerSchema),
  });

  /* ---------------------------- Handlers ---------------------------- */
  const onSubmit: SubmitHandler<IRegisterFormData> = async (
    data: IRegisterFormData
  ) => {
    setIsLoading(true);
    try {
      const { status } = await axiosInstance.post("/auth/register", data);
      if (status === 200) {
        setIsLoading(false);

        toast.success("Register successfully, navigating to login page", {
          position: "bottom-center",
          duration: 2000,
          style: {
            backgroundColor: "black",
            color: "white",
            width: "fit-content",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          },
        });

        navigate("/login");
      }
    } catch (error: any) {
      const errMsg = error?.response?.data?.message;
      if (errMsg === "User already exists") {
        toast.error(`${errMsg}, please login`, {
          position: "bottom-center",
          duration: 2000,
          style: {
            backgroundColor: "black",
            color: "white",
          },
        });
      } else {
        toast.error("Something went wrong, please try again", {
          position: "bottom-center",
          duration: 2500,
          style: {
            backgroundColor: "black",
            color: "white",
          },
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  /* ---------------------------- Renders ---------------------------- */
  const renderRegisterFormInputs = registerFormInputData.map(
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
            <RegisterFormIcon inputName={name} />
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
        <div className="flex flex-col items-center justify-center text-center space-y-2">
          <span className="font-[Pacifico] text-5xl text-blue-400">
            abs.ai notes
          </span>
          <span className="font-[Inter] text-gray-600">
            Welcome! Please register to get access to ABS.AI Notes.
          </span>
        </div>
        <div className="w-95">
          <form onSubmit={handleSubmit(onSubmit)}>
            {renderRegisterFormInputs}
            <div className="flex flex-col space-y-4 mt-5">
              <Button type="submit" isLoading={isLoading}>
                Register
              </Button>
            </div>
            <div></div>
            <div className="flex flex-col w-full justify-center items-center space-y-4 mt-6 text-gray-700 text-sm">
              <span>Or</span>
              <span className="flex items-center">
                Already have an account?
                <InlineLink
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </InlineLink>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

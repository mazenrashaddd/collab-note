import type { ReactNode } from "react";

interface IProps {
  isLoading?: boolean;
  backgroundColor?: string;
  textColor?: string;
  width?: "fit" | "full";
  type: "submit" | "button";
  children: ReactNode;
  className?: string;
}

const Button = ({
  isLoading,
  backgroundColor,
  textColor = "white",
  width = "full",
  children,
  className,
}: IProps) => {
  return (
    <button
      disabled={isLoading}
      style={{ backgroundColor }}
      className={`py-2 text-sm ${
        textColor === "white" ? "text-white" : `text-${textColor}`
      } ${width === "fit" ? "w-fit" : "w-full"} ${
        backgroundColor ? "" : "bg-blue-500 hover:bg-blue-600"
      } rounded-lg cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

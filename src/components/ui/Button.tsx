import type { ReactNode } from "react";

interface IProps {
  isLoading?: boolean;
  backgroundColor?: string;
  textColor?: string;
  width?: "fit" | "full";
  type: "submit" | "button";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({
  isLoading,
  backgroundColor,
  textColor = "white",
  width = "full",
  type = "button",
  children,
  className,
  onClick,
}: IProps) => {
  return (
    <button
      onClick={onClick ? onClick : undefined}
      type={type}
      disabled={isLoading}
      style={{ backgroundColor, color: textColor }}
      className={`py-2 ${width === "fit" ? "w-fit" : "w-full"} ${
        backgroundColor ? "" : "bg-blue-500 hover:bg-blue-600"
      } rounded-lg cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

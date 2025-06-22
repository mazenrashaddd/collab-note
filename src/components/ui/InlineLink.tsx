import type { ReactNode } from "react";

interface IProps {
  type?: "submit" | "button";
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

const InlineLink = ({
  type = "button",
  className = "text-blue-500 text-sm ms-1 cursor-pointer",
  children,
  onClick,
}: IProps) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default InlineLink;

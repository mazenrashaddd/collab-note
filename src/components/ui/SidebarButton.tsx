import type { ReactNode } from "react";

interface IProps {
  isSelected: boolean;
  children: ReactNode;
  onClick: () => void;
}

const SidebarButton = ({ isSelected, children, onClick }: IProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`w-full px-2 py-3 rounded-lg text-md ${
          isSelected
            ? "bg-blue-200 text-blue-500 font-semibold"
            : "text-gray-600 font-medium hover:bg-gray-200 duration-200"
        }`}
      >
        <div className="flex justify-start items-center space-x-2">
          {children}
        </div>
      </button>
    </div>
  );
};

export default SidebarButton;

import { LayoutDashboard, NotebookPen, Share2, Wallet } from "lucide-react";

interface IProps {
  iconName: string;
}

const SidebarIcon = ({ iconName }: IProps) => {
  if (iconName === "Dashboard") {
    return <LayoutDashboard size={17} className="text-gray-600" />;
  } else if (iconName === "My Notes") {
    return <NotebookPen size={17} className="text-gray-600" />;
  } else if (iconName === "Shared With Me") {
    return <Share2 size={17} className="text-gray-600" />;
  } else if (iconName === "Payment") {
    return <Wallet size={17} className="text-gray-600" />;
  }
};

export default SidebarIcon;

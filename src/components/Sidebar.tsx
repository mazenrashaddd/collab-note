import { useState } from "react";
import { useDispatch } from "react-redux";
import { ArrowLeftFromLine } from "lucide-react";
import { clearAuthLogin } from "../app/features/auth/authLoginSlice";
import SidebarButton from "./ui/SideBarButton";
import SidebarIcon from "./ui/SideBarIcon";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState("Dashboard");

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="space-y-5 p-6">
        <SidebarButton
          isSelected={selectedTab === "Dashboard"}
          onClick={() => {
            setSelectedTab("Dashboard");
            navigate("/");
          }}
        >
          <SidebarIcon iconName="Dashboard" />
          <span>Dashboard</span>
        </SidebarButton>

        <SidebarButton
          isSelected={selectedTab === "My Notes"}
          onClick={() => {
            setSelectedTab("My Notes");
            navigate("/my-notes");
          }}
        >
          <SidebarIcon iconName="My Notes" />
          <span>My Notes</span>
        </SidebarButton>

        <SidebarButton
          isSelected={selectedTab === "Shared With Me"}
          onClick={() => {
            setSelectedTab("Shared With Me");
            navigate("./shared-with-me");
          }}
        >
          <SidebarIcon iconName="Shared With Me" />
          <span>Shared With Me</span>
        </SidebarButton>

        <SidebarButton
          isSelected={selectedTab === "Payment"}
          onClick={() => {
            setSelectedTab("Payment");
            navigate("/payment");
          }}
        >
          <SidebarIcon iconName="Payment" />
          <span>Payment</span>
        </SidebarButton>
      </div>

      <div className="flex w-full w-100 border-t-2 border-gray-200 px-6 py-5">
        <button
          className="group flex items-start space-x-1 cursor-pointer"
          onClick={() => {
            dispatch(clearAuthLogin());
            localStorage.removeItem("loggedInUserData");
          }}
        >
          <ArrowLeftFromLine className="text-gray-500 group-hover:text-red-500 transition-colors ease-out duration-200" />
          <span className="text-gray-600 font-medium group-hover:text-red-500 transition-colors ease-out duration-200">
            Logout
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

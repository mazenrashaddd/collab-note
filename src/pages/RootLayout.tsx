import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1 mt-16">
        <div className="w-3xs bg-gray-100 border-r-1 border-gray-200">
          <Sidebar />
        </div>
        <div className="flex flex-1 p-8 bg-gray-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;

import { useNavigate } from "react-router-dom";
import Button from "./ui/Button";
import { Crown, UserRound, ChevronDown } from "lucide-react";
import { useDispatch } from "react-redux";
import { clearAuthLogin } from "../app/features/auth/authLoginSlice";

const Navbar = () => {
  /* ---------------------------- Constants ---------------------------- */

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <nav className="flex justify-between items-center fixed h-16 w-full top-0 left-0 shadow-md px-6 bg-white z-50">
      <div>
        <span className="font-[Pacifico] text-blue-500 text-2xl">
          CollabNote
        </span>
      </div>

      <div className="flex space-x-3 relative">
        {/* Premium Button */}
        <Button
          type="button"
          className="px-5 py-2 flex space-x-2 items-center justify-center"
        >
          <Crown size={18} />
          <span>Go Premium</span>
        </Button>

        {/* Avatar + Dropdown */}
        <div className="relative group">
          {/* Avatar Button */}
          <button className="flex items-center justify-center cursor-pointer space-x-2">
            <div className="flex justify-center items-center rounded-full w-[35px] h-[35px] bg-[#E5E7EB]">
              <UserRound size={20} color="#535D6A" />
            </div>
            <div>
              <ChevronDown size={15} strokeWidth={3} />
            </div>
          </button>

          {/* Submenu */}
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-md py-2 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transform transition-all duration-200 ease-out z-50">
            <button
              onClick={() => {
                navigate("/profile");
              }}
              className="w-full text-left px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 cursor-pointer"
            >
              Profile
            </button>
            <button
              onClick={() => {
                navigate("/settings");
              }}
              className="w-full text-left px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 cursor-pointer"
            >
              Settings
            </button>
            <hr className="text-gray-200" />
            <button
              onClick={() => {
                dispatch(clearAuthLogin());
                localStorage.removeItem("loggedInUserData");
              }}
              className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100 cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

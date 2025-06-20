import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

const RootLayout = () => {
  const email = useSelector((state: RootState) => {
    return state.authLogin.user?.email;
  });
  return (
    <>
      {/* navbar later */}
      <span>{email}</span>
      <Outlet />
    </>
  );
};

export default RootLayout;

import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";

interface IProps {
  redirectPath: string;
  children: ReactNode;
}

const ProtectedRoute = ({ redirectPath, children }: IProps) => {
  const user = useSelector((state: RootState) => state.authLogin.user);

  if (user === undefined) return null;

  if (!user?.token) {
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

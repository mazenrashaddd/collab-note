import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="reset-password" element={<ResetPassword />} />
      <Route
        path="/"
        element={
          <ProtectedRoute redirectPath="login">
            <RootLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<span>Outlet</span>} />
      </Route>
    </>
  )
);

export default router;

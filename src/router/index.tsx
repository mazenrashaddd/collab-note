import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import LoginPage from "../pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <ProtectedRoute redirectPath="login">
            <RootLayout />
          </ProtectedRoute>
        }
      ></Route>
    </>
  )
);

export default router;

import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setAuthLogin } from "./app/features/auth/authLoginSlice";

const App = () => {
  const [isAuthLoaded, setIsAuthLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const userDataString = localStorage.getItem("loggedInUserData");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      dispatch(setAuthLogin(userData));
    }
    setIsAuthLoaded(true);
  }, []);
  if (!isAuthLoaded) return null;
  return (
    <>
      <div>
        <Toaster />
      </div>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

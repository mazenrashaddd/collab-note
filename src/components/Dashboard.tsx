import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import useCustomQuery from "../hooks/useCustomQuery";

const Dashboard = () => {
  /* ---------------------------- Redux States ---------------------------- */
  const userData = useSelector((state: RootState) => {
    return state.authLogin.user;
  });

  /* ---------------------------- useQuery Notes Fetching ---------------------------- */

  const { data } = useCustomQuery({
    queryKey: ["notesData"],
    url: "/notes",
    config: {
      headers: {
        token: userData?.token,
      },
    },
  });

  return (
    <div>
      <div className="flex flex-col space-y-1">
        <span className="font-semibold text-2xl text-gray-800">
          Welcome Back, {userData?.email}
        </span>
        <span className="text-gray-600">
          You have 12 notes in your workspace
        </span>
      </div>
      {!data && (
        <div className="flex h-100 justify-center items-center">
          <span className="text-gray-600 text-xl">
            No available notes, please try again later or add some.
          </span>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

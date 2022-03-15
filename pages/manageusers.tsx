import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingAnimation from "../components/LoadingAnimation";
import UserCard from "../components/UserCard";
import { RootStore } from "../store";
import { deleteUser, getAllUsers } from "../store/actions/UserActions";

const ManageUsers = () => {
  const [findUser, setFindUser] = useState("");
  const dispatch = useDispatch();
  const token = useSelector((state: RootStore) => state.auth.token);
  const users = useSelector((state: RootStore) => state.user.users);
  const userRole = useSelector((state: RootStore) => state.auth.userRole);
  const isLoading = useSelector((state: RootStore) => state.user.isLoading);

  useEffect(() => {
    console.log("how manytimes");
    dispatch(getAllUsers(token));
  }, [dispatch]);
  if (userRole != "admin") {
    return (
      <div className="text-2xl text-red-400 flex items-center justify-center h-screen">
        Access Denied. Please contact Bibin
      </div>
    );
  }
  if (isLoading) {
    return <LoadingAnimation message="Loading users data. Please wait.." />;
  }
  return (
    <div className="h-screen pt-4 bg-zinc-100 px-10 lg:px-96">
      <div className="pt-10">
        <h1 className="font-bold text-gray-500 text-2xl capitalize pb-4">
          Manage Users
        </h1>

        <input
          className="w-full rounded-lg shadow-md p-2 my-2"
          placeholder="Search for a user"
          value={findUser}
          onChange={(e) => setFindUser(e.target.value)}
        />
        <div>
          {users
            ?.filter((user) => user.username.includes(findUser))
            .map((user) => (
              <UserCard
                key={user.id}
                username={user.username}
                userRole={user.roles}
                id={user.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;

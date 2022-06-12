import LoadingAnimation from "@Components/LoadingAnimation";
import UserCard from "@Components/UserCard";
import { UsersProps } from "@Store/users/types";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Users = ({ users, getUsers, createUser, loading }: UsersProps) => {
  const router = useRouter();
  const [searchUser, setSearchUser] = useState("");
  useEffect(() => {
    getUsers({ search: "" });
  }, [getUsers]);
  if (loading) {
    return <LoadingAnimation message="Loading users. Please wait.." />;
  }
  const createNewUser = () => {
    router.push("users/create");
  };

  return (
    <div className="pt-4  flex justify-center">
      <div className="max-w-xl">
        <div>
          <div className=" mt-12 items-center justify-center flex flex-col ">
            <img
              className="object-contain  max-h-[600px] mt-2 rounded-xl"
              src="/images/Users.png"
            />
          </div>
          <div className="flex relative min-w-full">
            <h1 className="text-2xl font-bold text-left">Manager Users </h1>
            <button
              onClick={createNewUser}
              className="absolute right-0 p-2 text-white rounded-lg bg-primary"
            >
              Create New
            </button>
          </div>
          <div className="mt-8">
            <input
              className="w-full rounded-lg p-2 my-2"
              placeholder="Search for a user"
              value={searchUser}
              onChange={(e) => setSearchUser(e.target.value)}
            />
          </div>
          <div>
            {users
              ?.filter(
                (user) =>
                  user.firstName
                    .toLowerCase()
                    .includes(searchUser.toLowerCase()) ||
                  user.lastName.toLowerCase().includes(searchUser.toLowerCase())
              )
              .map((user) => (
                <UserCard
                  key={user.id}
                  id={user.id}
                  firstName={user.firstName}
                  lastName={user.lastName}
                  role={user.role}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;

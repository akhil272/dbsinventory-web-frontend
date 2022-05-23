import LoadingAnimation from "@Components/LoadingAnimation";
import SearchField from "@Components/SearchField";
import UserCard from "@Components/UserCard";
import { UsersProps } from "@Store/users/types";
import React, { useEffect } from "react";

const Users = ({ users, getUsers, createUser, loading }: UsersProps) => {
  useEffect(() => {
    getUsers({ search: "" });
  }, [getUsers]);
  if (loading) {
    return <LoadingAnimation message="Loading users. Please wait.." />;
  }
  const userData = users.map(({ first_name, id }) => ({
    name: first_name,
    id,
  }));
  return (
    <div className=" flex flex-col justify-center">
      <div className="h-1/2 mt-12  items-center justify-center flex flex-col ">
        <img
          className="object-contain mt-2 rounded-xl"
          src="/images/Users.png"
        />
      </div>
      <div className="flex relative min-w-full">
        <h1 className="text-2xl font-bold text-left">Manager Users </h1>
        <button className="absolute right-0 p-2 text-white rounded-lg bg-primary">
          Create New
        </button>
      </div>
      <div className="mt-8">
        <SearchField data={userData} placeholder="Search for users" />
      </div>
      <div>
        {users.map((user) => (
          <UserCard
            key={user.id}
            first_name={user.first_name}
            last_name={user.last_name}
            role={user.roles}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;

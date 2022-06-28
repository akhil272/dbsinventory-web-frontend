import Link from "next/link";
import React from "react";

interface UserCardProps {
  username: string;
  userRole: string;
  id: string;
  updateUserRole: any;
  deleteUser: any;
}

const UserCard = ({ firstName, lastName, role, id }) => {
  return (
    <div className="flex relative bg-white  rounded-lg p-4 my-2 ">
      <div className="w-1/3">
        <div>
          <img className=" max-h-24" src="/images/Avatar.png" />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center ">
        <div className="text-2xl font-semibold">
          {firstName} {lastName}
        </div>
        <div className="text-sm capitalize">{role}</div>
      </div>
      <div className="flex absolute bottom-0 right-0  text-white">
        <Link href={{ pathname: "/admin/users/update", query: { id } }}>
          <a className="px-4 py-1 bg-pastel_green rounded-tl-lg ">Update</a>
        </Link>
        <Link
          href={{
            pathname: "/admin/users/delete",
            query: { id, firstName, lastName, role },
          }}
        >
          <a className="px-4 py-1 bg-primary rounded-br-lg">Delete</a>
        </Link>
      </div>
    </div>
  );
};

export default UserCard;

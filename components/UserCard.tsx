import React from "react";

interface UserCardProps {
  username: string;
  userRole: string;
  id: string;
  updateUserRole: any;
  deleteUser: any;
}

const UserCard = ({
  username,
  userRole,
  id,
  updateUserRole,
  deleteUser,
}: UserCardProps) => {
  return (
    <>
      <div className="grid bg-neutral-200 my-6 py-4 px-2 rounded-lg grid-cols-4 shadow-md ">
        <div className="capitalize font-semibold">{username}</div>
        <div className="capitalize font-normal text-gray-600">{userRole}</div>
        <div
          onClick={updateUserRole}
          className="bg-gray-500 mx-2 text-center rounded-md text-white shadow-md"
        >
          Update
        </div>
        <div
          onClick={deleteUser}
          className="bg-red-500 text-center mx-2 rounded-md text-white  shadow-md"
        >
          Delete
        </div>
      </div>
    </>
  );
};

export default UserCard;

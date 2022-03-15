import React, { useState } from "react";
import UpdateRoleModal from "./UpdateRoleModal";

interface UserCardProps {
  username: string;
  userRole: string;
  id: string;
}

const UserCard = ({ username, userRole, id }: UserCardProps) => {
  const [showUpdateRoleModal, setShowUpdateRoleModal] = useState(false);
  const [showDeleteUserModal, setShowDeleteUserModal] = useState(false);
  const updateUserRole = () => {
    setShowUpdateRoleModal(true);
    console.log("update user", id);
  };
  const deleteUser = () => {
    setShowDeleteUserModal(true);
    console.log("delete user", id);
  };
  return (
    <>
      {showUpdateRoleModal && (
        <UpdateRoleModal
          showUpdateRoleModal={showUpdateRoleModal}
          setShowUpdateRoleModal={setShowUpdateRoleModal}
          username={username}
        />
      )}

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

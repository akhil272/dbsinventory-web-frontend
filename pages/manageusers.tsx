import { PlusOutlined } from "@ant-design/icons";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteUserModal from "../components/DeleteUserModal";
import LoadingAnimation from "../components/LoadingAnimation";
import UpdateRoleModal from "../components/UpdateRoleModal";
import UserCard from "../components/UserCard";
import { RootStore } from "../store";
import { deleteUser, getAllUsers } from "../store/actions/UserActions";
import { CLEAR_USER_STATES } from "../store/actions/UserActionTypes";

const ManageUsers = () => {
  const [findUser, setFindUser] = useState("");
  const dispatch = useDispatch();
  const token = useSelector((state: RootStore) => state.auth.token);
  const users = useSelector((state: RootStore) => state.user.users);
  const userRole = useSelector((state: RootStore) => state.auth.userRole);
  const isLoading = useSelector((state: RootStore) => state.user.isLoading);
  const [showModal, setShowModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [updateUserData, setUpdateUserData] = useState({
    id: "",
    username: "",
  });
  const [deleteUserData, setDeleteUserData] = useState({
    id: "",
    username: "",
  });

  useEffect(() => {
    dispatch({ type: CLEAR_USER_STATES });
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
  const updateAUserRole = (id, username) => {
    dispatch({ type: CLEAR_USER_STATES });
    setUpdateUserData({ id, username });
    setShowModal(!showModal);
  };

  const deleteAUser = (id, username) => {
    dispatch({ type: CLEAR_USER_STATES });
    setDeleteUserData({ id, username });
    setDeleteModal(!deleteModal);
  };

  return (
    <>
      {showModal && (
        <div className="w-screen h-screen absolute flex items-center justify-center ">
          <UpdateRoleModal
            showUpdateRoleModal={showModal}
            setShowUpdateRoleModal={setShowModal}
            username={updateUserData.username}
            userId={updateUserData.id}
          />
        </div>
      )}
      {deleteModal && (
        <div className="w-screen h-screen absolute flex items-center justify-center ">
          <DeleteUserModal
            showUpdateRoleModal={deleteModal}
            setShowUpdateRoleModal={setDeleteModal}
            username={deleteUserData.username}
            userId={deleteUserData.id}
          />
        </div>
      )}
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
                  updateUserRole={() => updateAUserRole(user.id, user.username)}
                  deleteUser={() => deleteAUser(user.id, user.username)}
                />
              ))}
          </div>
        </div>
        <div
          onClick={() => {
            dispatch({ type: CLEAR_USER_STATES });
          }}
          className=" text-white items-center shadow-md justify-center flex text-2xl fixed right-4 bottom-5 rounded-full w-10 h-10 bg-red-500  p2"
        >
          <Link href="/users">
            <PlusOutlined />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ManageUsers;

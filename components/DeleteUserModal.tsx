import { CloseCircleOutlined } from "@ant-design/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../components/InputField";
import LoadingAnimation from "../components/LoadingAnimation";
import { RootStore } from "../store";
import { signIn } from "../store/actions/AuthActions";
import {
  deleteUser,
  getAllUsers,
  updateUserRole,
} from "../store/actions/UserActions";
import { CLEAR_USER_STATES } from "../store/actions/UserActionTypes";
import UserAuthSchema, { UserUpdateRoleSchema } from "../utils/UserAuthSchema";

const DeleteUserModal = ({
  username,
  showUpdateRoleModal,
  setShowUpdateRoleModal,
  userId,
}) => {
  const token = useSelector((state: RootStore) => state.auth.token);
  const isLoading = useSelector((state: RootStore) => state.user.isLoading);
  const onSuccess = useSelector((state: RootStore) => state.user.onSuccess);
  const dispatch = useDispatch();

  const handleDeteleUser = () => {
    dispatch(deleteUser(userId, token));
  };

  const handleClose = () => {
    dispatch({ type: CLEAR_USER_STATES });
    setShowUpdateRoleModal(!showUpdateRoleModal);
    dispatch(getAllUsers(token));
  };

  return (
    <div className="h-full w-full items-center justify-center flex">
      <div
        onClick={handleClose}
        className="flex absolute items-center justify-center   h-full w-full bg-gray-900 opacity-40"
      />
      <div className="flex items-center justify-center w-4/5 z-10 absolute">
        <div className=" bg-zinc-100 shadow-lg w-full rounded-2xl  p-4">
          <div className="flex items-center justify-center">
            <div onClick={handleClose} className="absolute top-2 right-4">
              <CloseCircleOutlined />
            </div>
            <h1 className="font-semibold uppercase text-3xl ">Delete </h1>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-md py-2">Delete user : {username}</p>
          </div>
          <button
            onClick={handleDeteleUser}
            type="button"
            className="bg-red-500 w-full uppercase rounded-lg text-white text-center p-4 mt-4"
          >
            Delete
          </button>
          <div>
            {isLoading && <div>Processing...</div>}
            {onSuccess === "true" && (
              <div className="text-center flex text-red-500 mt-2">
                User deleted
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserModal;

import { CloseCircleOutlined } from "@ant-design/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../store";
import { getAllUsers, updateUserRole } from "../store/actions/UserActions";
import { CLEAR_USER_STATES } from "../store/actions/UserActionTypes";
import { UserUpdateRoleSchema } from "../utils/UserAuthSchema";

type updateFormData = {
  userRole: string;
};

const UpdateRoleModal = ({
  username,
  showUpdateRoleModal,
  setShowUpdateRoleModal,
  userId,
}) => {
  const token = useSelector((state: RootStore) => state.auth.token);
  const isLoading = useSelector((state: RootStore) => state.user.isLoading);
  const onSuccess = useSelector((state: RootStore) => state.user.onSuccess);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch({ type: CLEAR_USER_STATES });
    setShowUpdateRoleModal(!showUpdateRoleModal);
    dispatch(getAllUsers(token));
  };

  const handleUpdateRole = (data) => {
    dispatch(updateUserRole(userId, data.userRole, token));
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<updateFormData>({ resolver: yupResolver(UserUpdateRoleSchema) });
  const onSubmit = handleSubmit((data) => handleUpdateRole(data));

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
            <h1 className="font-semibold uppercase text-3xl ">Update </h1>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-md py-2">Select user role for {username}</p>
          </div>
          <div>
            <form onSubmit={onSubmit}>
              <div className="flex-col justify-center">
                <div>
                  <label>Select Role</label>
                  <select
                    className="p-1 ml-2 rounded-lg  shadow-md"
                    {...register("userRole")}
                  >
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                    <option value="user">User</option>
                  </select>
                  <p className="text-sm text-red-600">
                    {errors.userRole?.message}
                  </p>
                </div>
              </div>
              {isLoading && <div>Please wait..</div>}

              <button
                className="bg-red-500 w-full uppercase rounded-lg text-white p-4 mt-4"
                type="button"
                onClick={onSubmit}
              >
                Submit
              </button>
            </form>
            {onSuccess === "true" && (
              <div className="text-center flex text-red-500 mt-2">
                User role updated
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateRoleModal;

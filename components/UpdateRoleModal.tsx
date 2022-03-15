import { CloseCircleOutlined } from "@ant-design/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../components/InputField";
import LoadingAnimation from "../components/LoadingAnimation";
import { RootStore } from "../store";
import { signIn } from "../store/actions/AuthActions";
import { updateUserRole } from "../store/actions/UserActions";
import UserAuthSchema from "../utils/UserAuthSchema";

type updateFormData = {
  userRole: string;
};

const UpdateRoleModal = ({
  username,
  showUpdateRoleModal,
  setShowUpdateRoleModal,
}) => {
  const token = useSelector((state: RootStore) => state.auth.token);
  const isLoading = useSelector((state: RootStore) => state.auth.isLoading);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleUpdateRole = (data: updateFormData) => {
    // dispatch(updateUserRole(token,data));
    console.log(data, "role select");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<updateFormData>({ resolver: yupResolver(UserAuthSchema) });
  const onSubmit = handleSubmit((data) => handleUpdateRole(data));
  if (isLoading) {
    return <LoadingAnimation message="Please wait..." />;
  }

  return (
    <div className="flex items-center justify-start w-4/5 absolute">
      <div
        onClick={() => setShowUpdateRoleModal(!showUpdateRoleModal)}
        className="absolute top-4 right-4"
      >
        <CloseCircleOutlined />
      </div>
      <div className=" bg-zinc-100 shadow-lg w-full rounded-2xl  p-4">
        <div className="flex items-center justify-center">
          <h1 className="font-semibold text-3xl "> ! Work in progress</h1>
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

            <button
              className="bg-red-500 w-full uppercase rounded-lg text-white p-4 mt-4"
              type="button"
              onClick={onSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateRoleModal;

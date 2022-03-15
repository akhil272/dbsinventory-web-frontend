import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import CreateUserSchema from "../../utils/CreateUserSchema";
import InputField from "../../components/InputField";
import LoadingAnimation from "../../components/LoadingAnimation";
import Modal from "../../components/Modal";
import { RootStore } from "../../store";
import { createUser } from "../../store/actions/UserActions";

interface CreateNewUserProps {
  username: string;
  password: string;
  email: string;
}

const CreateUser = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateNewUserProps>({ resolver: yupResolver(CreateUserSchema) });
  const onSubmit = handleSubmit((data) => createNewUser(data));

  const token = useSelector((state: RootStore) => state.auth.token);
  const isLoading = useSelector((state: RootStore) => state.user.isLoading);
  const onSuccess = useSelector((state: RootStore) => state.user.onSuccess);
  const errorMessage = useSelector(
    (state: RootStore) => state.user.errorMessage
  );
  const createNewUser = (data) => {
    const { username, email, password } = data;
    dispatch(createUser(username, email, password, token));
  };

  if (isLoading) {
    return (
      <LoadingAnimation message="Adding user to DBS Inventory. Please wait..." />
    );
  }
  if (onSuccess === "true") {
    return (
      <Modal
        data="user"
        description="User successfully added to DBS Inventory"
      />
    );
  }
  if (errorMessage?.length > 3) {
    return <Modal data="user" description={`Failed. ${errorMessage}`} />;
  }

  return (
    <div className="bg-zinc-100 h-screen px-10 pt-4 pb-10 2xl:px-96">
      <div className="pt-10 md:px-96">
        <h1 className="font-bold text-gray-500 text-2xl capitalize pb-4">
          Create a new user
        </h1>
      </div>
      <div>
        <form className="space-y-5 2xl:px-56" onSubmit={onSubmit}>
          <div className="flex-col justify-center">
            <InputField
              placeholder="Enter username"
              register={register("username")}
              error={errors.username?.message}
            />
            <InputField
              placeholder="Enter email"
              register={register("email")}
              error={errors.email?.message}
              type="email"
            />
            <InputField
              placeholder="Enter password"
              register={register("password")}
              error={errors.password?.message}
            />
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
  );
};

export default CreateUser;

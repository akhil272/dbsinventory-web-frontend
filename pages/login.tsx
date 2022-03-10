import Router from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../store";
import { signIn } from "../store/actions/AuthActions";

type loginFormData = {
  username: string;
  password: string;
};

const Login = () => {
  const token = useSelector((state: RootStore) => state.auth.token);

  const dispatch = useDispatch();
  const handleLogin = (data: loginFormData) => {
    dispatch(signIn(data.username, data.password));
    if (token != null) {
      Router.push("search");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormData>();
  const onSubmit = handleSubmit((data) => handleLogin(data));
  return (
    <div className="h-screen px-6 w-screen bg-gray-300 flex items-center justify-center">
      <div className="h-1/2 w-96 p-4 bg-white shadow-lg rounded-2xl">
        <div className="p-4">
          <div className="flex items-center justify-center">
            <h1 className="font-semibold text-3xl ">Login Now</h1>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-md py-4">
              Please enter your credentials to login
            </p>
          </div>
          <div>
            <form className="space-y-5" onSubmit={onSubmit}>
              <div className="flex justify-center">
                <input
                  placeholder="Enter your username"
                  className="bg-gray-200 rounded-lg p-2 w-full"
                  {...register("username", { required: true, maxLength: 20 })}
                />
              </div>
              <div>
                <input
                  placeholder="Enter your password"
                  className="bg-gray-200 rounded-lg p-2 w-full"
                  {...register("password", { required: true, maxLength: 20 })}
                />
              </div>
              {errors.username?.type === "required" && "username is required"}
              {errors.password?.type === "required" && "password is required"}
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
    </div>
  );
};

export default Login;

import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../components/InputField";
import LoadingAnimation from "../components/LoadingAnimation";
import { RootStore } from "../store";
import { signIn } from "../store/actions/AuthActions";
import UserAuthSchema from "../utils/UserAuthSchema";

type loginFormData = {
  username: string;
  password: string;
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const token = useSelector((state: RootStore) => state.auth.token);
  const isLoading = useSelector((state: RootStore) => state.auth.isLoading);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogin = (data: loginFormData) => {
    dispatch(signIn(data.username, data.password));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormData>({ resolver: yupResolver(UserAuthSchema) });
  const onSubmit = handleSubmit((data) => handleLogin(data));
  if (isLoading) {
    return <LoadingAnimation message="Please wait..." />;
  }
  if (token != null) {
    router.push("search");
  }
  return (
    <div className="h-screen px-6 w-screen bg-gray-300 flex items-center justify-center">
      <div className=" w-96 p-4 bg-zinc-100 shadow-lg rounded-2xl">
        <div className="p-4">
          <div className="flex items-center justify-center">
            <h1 className="font-semibold text-3xl ">Login Now</h1>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-md py-2">
              Please enter your credentials to login
            </p>
          </div>
          <div>
            <form className="space-y-5" onSubmit={onSubmit}>
              <div className="flex-col justify-center">
                <InputField
                  placeholder="Enter your username"
                  register={register("username")}
                  error={errors.username?.message}
                />
                <InputField
                  placeholder="Enter your username"
                  register={register("password")}
                  error={errors.password?.message}
                  type={showPassword ? "text" : "password"}
                  autoComplete="on"
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
      </div>
    </div>
  );
};

export default Login;

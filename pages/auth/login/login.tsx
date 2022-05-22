import InputField from "@Components/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginProps } from "@Store/auth/types";
import { LoginSchema } from "@Utils/schemas/RegisterAuthSchema";
import storage from "@Utils/storage";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import LoginArt from "../../../public/images/Login_Art.png";
import Image from "next/image";
type formData = {
  phone_number?: string;
  otp?: string;
};

const Login = ({ login, sendOtp }: LoginProps) => {
  const [userOtp, setUserOtp] = useState(false);
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<formData>({ resolver: yupResolver(LoginSchema) });
  const onSubmit = handleSubmit((data) => handleLogin(data));
  const handleLogin = async (data) => {
    if (!data.otp) {
      const response = await sendOtp({
        phone_number: data.phone_number,
      });
      if (response.success) {
        setUserOtp(true);
      }
    }
    if (data.otp) {
      const response = await login({
        phone_number: data.phone_number,
        otp: data.otp,
      });
      if (response.success && response.data) {
        storage().setAccessToken(response.data?.accessToken);
        storage().setRefreshToken(response.data?.refreshToken);
        router.push("/");
      }
    }
  };
  return (
    <div className="min-h-screen ">
      <div className="flex flex-col ">
        <div className="rounded-2xl h-1/2 mt-16  bg-[#fc9797] flex flex-col justify-center items-center w-full">
          <img
            className="flex justify-end items-end py-10 mt-10"
            src="/images/Login_Art.png"
          />
        </div>
        <div className="flex flex-col py-2 mt-2 font-bold text-3xl text-center">
          <h3>Welcome to </h3>
          <h2>DBS Automotive</h2>
        </div>
        <div className="w-full h-fullrounded-2xl">
          <div className="p-4">
            <div className="flex items-center justify-center">
              <h1 className="font-semibold text-3xl ">Login Now</h1>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-md ">Please enter your credentials to login</p>
            </div>
            <div>
              <form className="space-y-5" onSubmit={onSubmit}>
                <div className="flex-col my-2 justify-center">
                  <InputField
                    control={control}
                    name="phone_number"
                    placeholder="Enter phone number"
                    type="text"
                    error={errors.phone_number?.message}
                  />
                  {userOtp && (
                    <InputField
                      control={control}
                      name="otp"
                      placeholder="Enter otp"
                      type="text"
                      error={errors.otp?.message}
                    />
                  )}
                </div>
                <div>
                  Don't have an account?
                  <Link href="/auth/register">Register</Link>{" "}
                </div>
                <button
                  className="bg-primary w-full rounded-lg text-xl font-medium text-center text-white p-3"
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
    </div>
  );
};

export default Login;

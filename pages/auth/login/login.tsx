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
import { toast } from "react-toastify";
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
      if (!response.success) {
        toast.error(`Error. ${response.message} `);
      }
    }
  };
  return (
    <div className="min-h-screen ">
      <div className="flex flex-col ">
        <div className="h-1/2 mt-12 items-center justify-center flex ">
          <img
            className="object-cover h-96 mt-2  rounded-xl"
            src="/images/Login_ArtCover.png"
          />
        </div>
        <div className="flex flex-col py-2 mt-2 font-bold text-3xl text-center">
          <h3 className="text-lg">Welcome to </h3>
          <h2>DBS Automotive</h2>
        </div>
        <div className="w-full h-fullrounded-2xl">
          <div className="p-4 mt-4">
            <div className="flex flex-col space-y-3 items-center justify-center">
              <h1 className="font-semibold text-3xl ">Login Now</h1>
              <p className="text-md ">
                Please enter your registered phone number
              </p>
            </div>
            <div>
              <form className="space-y-4" onSubmit={onSubmit}>
                <div className="flex-col my-2 space-y-2 justify-center">
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
                <button
                  className="bg-primary w-full rounded-lg text-xl font-medium text-center text-white p-3"
                  type="button"
                  onClick={onSubmit}
                >
                  Submit
                </button>
                <div className="flex">
                  Don't have an account?
                  <div className="text-primary font-bold px-1">
                    <Link href="/auth/register">Register</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

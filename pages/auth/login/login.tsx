import InputField from "@Components/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginProps } from "@Store/auth/types";
import { LoginUserFormData } from "@Utils/formTypes/AuthFormData";
import { LoginSchema } from "@Utils/schemas/AuthSchema";
import storage from "@Utils/storage";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Login = ({ login, sendOtp }: LoginProps) => {
  const [userOtp, setUserOtp] = useState(false);
  const [showVerificationLink, setShowVerificationLink] = useState(false);
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginUserFormData>({ resolver: yupResolver(LoginSchema) });
  const onSubmit = handleSubmit((data) => handleLogin(data));
  const handleLogin = async (data: LoginUserFormData) => {
    if (!data.otp) {
      const response = await sendOtp({
        phoneNumber: data.phoneNumber,
      });
      if (response.success) {
        setUserOtp(true);
      }
      if (!response.success) {
        toast.error(`${response.message}`);
        if (response.status === 403) {
          setShowVerificationLink(true);
        }
      }
    }
    if (data.otp) {
      const response = await login({
        phoneNumber: data.phoneNumber,
        otp: data.otp,
      });
      if (response.success && response.data) {
        storage().setAccessToken(response.data?.accessToken);
        storage().setRefreshToken(response.data?.refreshToken);
        router.reload();
        router.push("/");
      }
      if (!response.success) {
        toast.error(`Error. ${response.message} `);
      }
    }
  };
  return (
    <div className="flex min-h-screen items-center w-full justify-center">
      <div className="md:max-w-sm w-full">
        <div className="h-1/2 mt-12 items-center justify-center flex ">
          <img
            className="object-contain h-96 mt-2  rounded-xl"
            src="/images/Login_ArtCover.png"
          />
        </div>
        <div className="flex flex-col py-2 mt-2 font-bold text-3xl text-center">
          <h3 className="text-lg">Welcome to </h3>
          <h2>DBS Tyres</h2>
        </div>
        <div className="w-full ">
          <div className="p-4 mt-4">
            <div className="flex flex-col space-y-2 items-center justify-center">
              <h1 className="font-semibold text-2xl ">Login Now</h1>
              <p className="text-sm ">
                Please enter your registered phone number
              </p>
            </div>
            <div>
              <form className="space-y-4" onSubmit={onSubmit}>
                <div className="flex-col my-2 space-y-2 justify-center">
                  <InputField
                    control={control}
                    name="phoneNumber"
                    placeholder="Enter phone number"
                    type="tel"
                    error={errors.phoneNumber?.message}
                  />
                  {userOtp && (
                    <InputField
                      control={control}
                      name="otp"
                      placeholder="Enter otp"
                      type="number"
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
                {showVerificationLink && (
                  <div className="flex">
                    <div className="text-primary font-bold px-1">
                      <Link href="auth/retry-verification">Click Here</Link>
                    </div>
                    to verify your account
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

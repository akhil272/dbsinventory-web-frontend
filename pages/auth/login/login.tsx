import InputField from "@Components/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginProps } from "@Store/auth/types";
import { LoginSchema } from "@Utils/schemas/RegisterAuthSchema";
import storage from "@Utils/storage";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

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

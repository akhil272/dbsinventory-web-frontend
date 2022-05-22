import InputField from "@Components/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterProps } from "@Store/auth/types";
import { RegisterAuthSchema } from "@Utils/schemas/RegisterAuthSchema";
import storage from "@Utils/storage";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";

type formData = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
};

const Register = ({ register, initiateVerification }: RegisterProps) => {
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<formData>({ resolver: yupResolver(RegisterAuthSchema) });
  const onSubmit = handleSubmit((data) => handleLogin(data));
  const handleLogin = async (data: formData) => {
    const response = await register({
      first_name: data.first_name,
      last_name: data.last_name,
      phone_number: data.phone_number,
      email: data.email,
    });

    if (response.success && response.data) {
      storage().setAccessToken(response.data?.accessToken);
      initiateVerification();
      router.push("/auth/verify-user");
    }
  };
  return (
    <div className="flex flex-col min-h-screen items-center justify-center ">
      <div className="w-full  bg-white shadow-lg rounded-2xl">
        <div className="p-4">
          <div className="flex items-center justify-center">
            <h1 className="font-semibold text-3xl ">Register Now</h1>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-md py-2">Fill details below to register</p>
          </div>
          <div>
            <form className="space-y-5" onSubmit={onSubmit}>
              <div className="flex-col space-y-2 justify-center">
                <InputField
                  control={control}
                  name="first_name"
                  placeholder="Enter first_name"
                  type="text"
                  error={errors.first_name?.message}
                />
                <InputField
                  control={control}
                  name="last_name"
                  placeholder="Enter last_name"
                  type="text"
                  error={errors.last_name?.message}
                />
                <InputField
                  control={control}
                  name="email"
                  placeholder="Enter email"
                  type="text"
                  error={errors.email?.message}
                />
                <InputField
                  control={control}
                  name="phone_number"
                  placeholder="Enter phone_number"
                  type="text"
                  error={errors.phone_number?.message}
                />
              </div>
              <div>
                Already have an account? <Link href="/auth/login">Login</Link>
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

export default Register;

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
      <div className="h-1/2 mt-12 items-center justify-center flex ">
        <img
          className="object-cover h-96 mt-2  rounded-xl"
          src="/images/Register_ArtCover.png"
        />
      </div>
      <div className="w-full rounded-2xl">
        <div className="p-4">
          <div className="flex items-center justify-center">
            <h1 className="font-semibold text-3xl ">Register Now</h1>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-md py-2">
              Fill in the details below to register
            </p>
          </div>
          <div>
            <form className="space-y-5" onSubmit={onSubmit}>
              <div className="flex-col space-y-2 justify-center">
                <InputField
                  control={control}
                  name="first_name"
                  placeholder="Enter first name"
                  type="text"
                  error={errors.first_name?.message}
                />
                <InputField
                  control={control}
                  name="last_name"
                  placeholder="Enter last name"
                  type="text"
                  error={errors.last_name?.message}
                />
                <InputField
                  control={control}
                  name="email"
                  placeholder="Enter your email"
                  type="text"
                  error={errors.email?.message}
                />
                <InputField
                  control={control}
                  name="phone_number"
                  placeholder="Enter your phone number"
                  type="text"
                  error={errors.phone_number?.message}
                />
              </div>

              <button
                className="bg-primary w-full rounded-lg text-xl font-medium text-center text-white p-3"
                type="button"
                onClick={onSubmit}
              >
                Submit
              </button>
              <div className="flex">
                Already have an account?
                <div className="text-primary font-bold px-1">
                  <Link href="/auth/login">Login</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

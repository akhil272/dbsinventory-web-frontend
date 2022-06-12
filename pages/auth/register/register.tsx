import InputField from "@Components/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterProps } from "@Store/auth/types";
import { RegisterUserFormData } from "@Utils/formTypes/AuthFormData";
import { RegisterAuthSchema } from "@Utils/schemas/AuthSchema";
import storage from "@Utils/storage";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Register = ({ register }: RegisterProps) => {
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterUserFormData>({
    resolver: yupResolver(RegisterAuthSchema),
  });
  const onSubmit = handleSubmit((data) => registerUser(data));
  const registerUser = async (data: RegisterUserFormData) => {
    const response = await register({
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
      email: data.email,
    });
    if (response.success && response.data) {
      storage().setAccessToken(response.data?.accessToken);
      router.push({
        pathname: "/auth/verify-user",
        query: { phoneNumber: data.phoneNumber },
      });
    }
    if (!response.success) {
      toast.error(`Error. ${response.message} `);
    }
  };
  return (
    <div className="flex min-h-screen items-center w-full justify-center">
      <div className="md:max-w-sm w-full">
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
                    name="firstName"
                    placeholder="Enter first name"
                    type="text"
                    error={errors.firstName?.message}
                  />
                  <InputField
                    control={control}
                    name="lastName"
                    placeholder="Enter last name"
                    type="text"
                    error={errors.lastName?.message}
                  />
                  <InputField
                    control={control}
                    name="email"
                    placeholder="Enter your email (optional)"
                    type="email"
                    error={errors.email?.message}
                  />
                  <InputField
                    control={control}
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    type="tel"
                    error={errors.phoneNumber?.message}
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
    </div>
  );
};

export default Register;

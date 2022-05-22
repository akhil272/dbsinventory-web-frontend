import InputField from "@Components/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterDispatchProps } from "@Store/auth/types";
import { ValidateVerificationSchema } from "@Utils/RegisterAuthSchema";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
type formData = {
  verification_code: string;
};

const VerifyUser = ({ validateVerification }: RegisterDispatchProps) => {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<formData>({ resolver: yupResolver(ValidateVerificationSchema) });
  const onSubmit = handleSubmit((data) => handleVerification(data));
  const handleVerification = async (data: formData) => {
    const response = await validateVerification({
      verification_code: data.verification_code,
    });
    if (response.success) {
      router.push("/auth/login");
    }
  };
  return (
    <div className="h-screen px-6 w-screen flex items-center justify-center">
      <div className=" w-96 p-4 bg-zinc-100 shadow-lg rounded-2xl">
        <div className="p-4">
          <div className="flex items-center justify-center">
            <h1 className="font-semibold text-3xl ">Enter the OTP</h1>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-md py-2">Please check your phone for OTP</p>
          </div>
          <div>
            <form className="space-y-5" onSubmit={onSubmit}>
              <div className="flex-col justify-center">
                <InputField
                  control={control}
                  name="verification_code"
                  placeholder="Enter verification code"
                  type="text"
                  error={errors.verification_code?.message}
                />
              </div>
              <button
                className="bg-red-500 w-full uppercase rounded-lg text-white p-4 mt-4"
                type="button"
                onClick={onSubmit}
              >
                Verify
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyUser;

import InputField from "@Components/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterDispatchProps } from "@Store/auth/types";
import { ValidateVerificationSchema } from "@Utils/schemas/RegisterAuthSchema";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
type formData = {
  phone_number?: string;
  verification_code?: string;
};

const RetryUserVerification = ({
  retryVerification,
  initiateVerification,
  retryInitiateVerification,
}: RegisterDispatchProps) => {
  const [userOtp, setUserOtp] = useState(false);

  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<formData>({ resolver: yupResolver(ValidateVerificationSchema) });
  const onSubmit = handleSubmit((data) => handleVerification(data));
  const handleVerification = async (data: formData) => {
    if (!data.verification_code) {
      const response = await retryInitiateVerification({
        phone_number: data.phone_number,
      });
      if (response.success) {
        toast.info("Verification OTP successfully send.");
        setUserOtp(true);
      }
      if (!response.success) {
        toast.error(`${response.message}`);
      }
    }
    if (data.verification_code) {
      const response = await retryVerification({
        phone_number: data.phone_number,
        otp: data.verification_code,
      });
      if (response.success) {
        toast.success("Phone number successfully verified.");
        router.push("/auth/login");
      }
      if (!response.success) {
        toast.error(`Error. ${response.message} `);
      }
    }
  };
  return (
    <div className="h-screen  flex items-center justify-center">
      <div className=" w-96 p-4  rounded-2xl">
        <div className="p-4">
          <div className="flex items-center justify-center">
            <h1 className="font-semibold text-3xl ">User Verification</h1>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-md py-2">Please enter your phone number.</p>
          </div>
          <div>
            <form className="space-y-5" onSubmit={onSubmit}>
              <div className="flex-col space-y-2 justify-center">
                <InputField
                  control={control}
                  name="phone_number"
                  placeholder="Enter phone number"
                  type="tel"
                  error={errors.phone_number?.message}
                />
                {userOtp && (
                  <InputField
                    control={control}
                    name="verification_code"
                    placeholder="Enter verification code"
                    type="number"
                    error={errors.verification_code?.message}
                  />
                )}
              </div>
              <button
                className="bg-primary w-full rounded-lg text-xl font-medium text-center text-white p-3"
                type="button"
                onClick={onSubmit}
              >
                {userOtp ? "Verify" : "Request OTP"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetryUserVerification;

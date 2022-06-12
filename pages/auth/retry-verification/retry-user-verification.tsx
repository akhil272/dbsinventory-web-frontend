import InputField from "@Components/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { RetryVerificationProps } from "@Store/auth/types";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { RetryPhoneVerificationSchema } from "@Utils/schemas/UserSchema";
import { RetryPhoneVerificationFormData } from "@Utils/formTypes/UserFormData";
const RetryUserVerification = ({
  retryVerification,
  retryInitiateVerification,
}: RetryVerificationProps) => {
  const [userOtp, setUserOtp] = useState(false);
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RetryPhoneVerificationFormData>({
    resolver: yupResolver(RetryPhoneVerificationSchema),
  });
  const onSubmit = handleSubmit((data) => handleRetry(data));
  const handleRetry = async (data: RetryPhoneVerificationFormData) => {
    if (!data.otp) {
      const response = await retryInitiateVerification({
        phoneNumber: data.phoneNumber,
      });
      if (response.success) {
        toast.info("Verification OTP successfully send.");
        setUserOtp(true);
      }
      if (!response.success) {
        toast.error(`${response.message}`);
      }
    }
    if (data.otp) {
      const response = await retryVerification({
        phoneNumber: data.phoneNumber,
        otp: data.otp,
      });
      if (response.success) {
        toast.success("Phone number successfully verified.");
        router.push("/");
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
                  name="phoneNumber"
                  placeholder="Enter phone number"
                  type="tel"
                  error={errors.phoneNumber?.message}
                />
                {userOtp && (
                  <InputField
                    control={control}
                    name="otp"
                    placeholder="Enter verification code"
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

import InputField from "@Components/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { VerifyUserProps } from "@Store/auth/types";
import { VerifyUserOtpFormData } from "@Utils/formTypes/AuthFormData";
import { VerifyUserOtpSchema } from "@Utils/schemas/AuthSchema";
import storage from "@Utils/storage";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const VerifyUser = ({ validateOtpAndVerifyPhoneNumber }: VerifyUserProps) => {
  const router = useRouter();
  const {
    query: { phoneNumber },
  } = router;

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<VerifyUserOtpFormData>({
    resolver: yupResolver(VerifyUserOtpSchema),
  });
  const onSubmit = handleSubmit((data) => handleVerification(data));
  const handleVerification = async (data: VerifyUserOtpFormData) => {
    const response = await validateOtpAndVerifyPhoneNumber({
      otp: data.otp,
      phoneNumber: String(phoneNumber),
    });
    if (response.success) {
      toast.success("Phone number successfully verified.");
      storage().setAccessToken(response.data?.accessToken);
      storage().setRefreshToken(response.data?.refreshToken);
      router.push("/");
    }
    if (!response.success) {
      toast.error(`Error. ${response.message} `);
    }
  };

  return (
    <div className="h-screen  flex items-center justify-center">
      <div className=" w-96 p-4  rounded-2xl">
        <div className="p-4">
          <div className="flex items-center justify-center">
            <h1 className="font-semibold text-3xl ">Enter OTP</h1>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-base py-2">Please check your phone for OTP</p>
          </div>
          <div>
            <form className="space-y-5" onSubmit={onSubmit}>
              <div className="flex-col justify-center">
                <InputField
                  control={control}
                  name="otp"
                  placeholder="Enter verification code"
                  type="number"
                  inputMode="numeric"
                  error={errors.otp?.message}
                />
              </div>
              <button
                className="bg-primary w-full rounded-lg text-xl font-medium text-center text-white p-3"
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

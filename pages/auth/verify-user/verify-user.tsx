import InputField from "@Components/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterDispatchProps } from "@Store/auth/types";
import { ValidateVerificationSchema } from "@Utils/schemas/RegisterAuthSchema";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
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
      toast.success("Phone number successfully verified.");
      router.push("/auth/login");
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
                  type="number"
                  error={errors.verification_code?.message}
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

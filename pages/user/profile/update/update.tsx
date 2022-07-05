import InputField from "@Components/InputField";
import LoadingAnimation from "@Components/LoadingAnimation";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProfileUpdateProps } from "@Store/users/types";
import { UpdateUserProfileFormData } from "@Utils/formTypes/UserFormData";
import { UpdateUserProfileSchema } from "@Utils/schemas/UserSchema";

import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Update = ({
  getUserById,
  updateUserProfile,
  userProfile,
  loading,
}: ProfileUpdateProps) => {
  const router = useRouter();
  const {
    query: { userId },
  } = router;

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<UpdateUserProfileFormData>({
    resolver: yupResolver(UpdateUserProfileSchema),
  });
  const onSubmit = handleSubmit((data) => updateData(data));
  const updateData = async (data: UpdateUserProfileFormData) => {
    const response = await updateUserProfile({
      id: +userId,
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
      addressLine1: data.addressLine1,
      addressLine2: data.addressLine2,
      email: data.email,
    });
    if (response.success) {
      toast.success(`Successfully updated user profile.`);
      router.back();
    }
    if (!response.success) {
      toast.error(`Failed to update user profile. ${response.message}`);
    }
  };

  useEffect(() => {
    if (router.isReady) {
      getUserById(+userId);
    }
  }, [router.isReady]);

  useEffect(() => {
    if (userProfile) {
      setValue("firstName", userProfile.firstName);
      setValue("lastName", userProfile.lastName);
      setValue("phoneNumber", userProfile.phoneNumber);
      setValue("email", userProfile.email);
      setValue("addressLine1", userProfile.addressLine1 ?? "");
      setValue("addressLine2", userProfile.addressLine2 ?? "");
    }
  }, [userProfile]);

  if (loading) {
    return <LoadingAnimation message="Please wait..," />;
  }

  return (
    <div className="pb-4">
      <div className="flex items-center justify-center">
        <img
          className="object-contain h-96 rounded-xl"
          src="/images/Update_Stock.png"
        />
      </div>
      <div>
        <h1 className="font-bold text-2xl pb-4">Update Profile</h1>
      </div>
      <div>
        <div className="">
          <form className="space-y-3" onSubmit={onSubmit}>
            <div>
              <p className="text-sm text-gray-500">First Name</p>
              <InputField
                placeholder={"Enter first name"}
                name={"firstName"}
                control={control}
                inputMode="text"
                error={errors.firstName?.message}
                defaultValue={userProfile?.firstName ?? ""}
              />
            </div>
            <div>
              <p className="text-sm text-gray-500">Last Name</p>
              <InputField
                placeholder={"Enter last name"}
                name={"lastName"}
                control={control}
                inputMode="text"
                error={errors.lastName?.message}
                defaultValue={userProfile?.lastName ?? ""}
              />
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone number</p>
              <InputField
                placeholder={"Enter phone number"}
                name={"phoneNumber"}
                control={control}
                inputMode="tel"
                error={errors.phoneNumber?.message}
                defaultValue={userProfile?.phoneNumber ?? ""}
              />
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <InputField
                placeholder={"Enter email name"}
                name={"email"}
                control={control}
                inputMode="email"
                error={errors.email?.message}
                defaultValue={userProfile?.email ?? ""}
              />
            </div>
            <div>
              <p className="text-sm text-gray-500">Address Line 1</p>
              <InputField
                placeholder={"Enter address line 1"}
                name={"addressLine1"}
                control={control}
                inputMode="text"
                error={errors.addressLine1?.message}
                defaultValue={userProfile?.addressLine1 ?? ""}
              />
            </div>
            <div>
              <p className="text-sm text-gray-500">Address Line2</p>
              <InputField
                placeholder={"Enter address line 2"}
                name={"addressLine2"}
                control={control}
                inputMode="text"
                error={errors.addressLine2?.message}
                defaultValue={userProfile?.addressLine2 ?? ""}
              />
            </div>
            <button
              className="bg-primary w-full rounded-lg text-lg font-medium text-center text-white p-2"
              onClick={onSubmit}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;

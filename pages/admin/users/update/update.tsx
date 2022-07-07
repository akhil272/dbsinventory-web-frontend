import Button from "@Components/Button";
import InputField from "@Components/InputField";
import LoadingAnimation from "@Components/LoadingAnimation";
import { yupResolver } from "@hookform/resolvers/yup";
import { getUserById } from "@Store/users/actions";
import { UpdateUserProps } from "@Store/users/types";

import { UpdateUserFormData } from "@Utils/formTypes/UserFormData";
import { UpdateUserSchema } from "@Utils/schemas/UserSchema";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Update = ({ userProfile, loading, updateUser }: UpdateUserProps) => {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  console.log(id);
  const {
    handleSubmit,
    control,
    setValue,
    register,
    formState: { errors },
  } = useForm<UpdateUserFormData>({
    resolver: yupResolver(UpdateUserSchema),
  });
  const onSubmit = handleSubmit((data) => updateUserData(data));
  const updateUserData = async (data: UpdateUserFormData) => {
    const response = await updateUser({
      id: +id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      role: data.role,
    });
    if (response.success) {
      toast.success(`Successfully updated user detail in the system.`);
    }
    if (!response.success) {
      toast.error(
        `Failed to update user detail in the system. ${response.message}`
      );
    }
  };

  useEffect(() => {
    if (router.isReady) {
      getUserById(+id);
    }
  }, [router.isReady]);

  useEffect(() => {
    if (userProfile) {
      setValue("firstName", userProfile.firstName);
      setValue("lastName", userProfile.lastName);
      setValue("email", userProfile.email);
      setValue("phoneNumber", userProfile.phoneNumber);
      setValue("role", userProfile.role);
    }
  }, [userProfile]);

  if (loading) {
    return <LoadingAnimation message="Please wait.." />;
  }

  return (
    <div className="pb-4 ">
      <img
        className="object-contain max-w-sm rounded-xl h-96"
        src="/images/Update_User.png"
      />
      <div>
        <h1 className="font-bold text-2xl pb-4">Update User</h1>
      </div>
      <div>
        <div className="">
          <form className="space-y-3" onSubmit={onSubmit}>
            <div>
              <p className="text-sm text-gray-500">First Name</p>
              <InputField
                placeholder={"Enter First Name"}
                name={"firstName"}
                control={control}
                error={errors.firstName?.message}
                defaultValue={userProfile?.firstName ?? ""}
              />
            </div>
            <div>
              <p className="text-sm text-gray-500">Last Name</p>
              <InputField
                placeholder={"Enter Last Name"}
                name={"lastName"}
                control={control}
                error={errors.lastName?.message}
                defaultValue={userProfile?.lastName ?? ""}
              />
            </div>

            <div>
              <p className="text-sm text-gray-500">Phone Number</p>
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
                placeholder={"Enter email"}
                name={"email"}
                inputMode="email"
                control={control}
                error={errors.email?.message}
                defaultValue={userProfile?.email ?? ""}
              />
            </div>
            <div>
              <p className="text-sm text-gray-500">Role</p>
              <select
                className="form-select 
      block
      w-full
      px-3
      py-2
      text-base
      font-normal
      text-gray-700
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:outline-none rounded-md"
                aria-label="Default select example"
                {...register("role")}
              >
                <option
                  className="capitalize"
                  defaultValue={userProfile?.role ?? ""}
                >
                  Current Role {userProfile?.role ?? ""}
                </option>
                <option value="user">User</option>
                <option value="employee">Employee</option>
                <option value="manager">Manager</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <Button onClick={onSubmit}>Update</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;

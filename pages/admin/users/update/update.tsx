import InputField from "@Components/InputField";
import LoadingAnimation from "@Components/LoadingAnimation";
import { yupResolver } from "@hookform/resolvers/yup";
import { getUserById } from "@Store/users/actions";
import { UpdateUserProps } from "@Store/users/types";

import { UpdateUserFormData } from "@Utils/formTypes/UserFormData";
import { UpdateStockSchema } from "@Utils/schemas/StockSchema";
import { UpdateUserSchema } from "@Utils/schemas/UserSchema";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Update = ({ user, loading, updateUser }: UpdateUserProps) => {
  const router = useRouter();
  const {
    query: { id },
  } = router;

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
    if (user) {
      setValue("firstName", user.firstName);
      setValue("lastName", user.lastName);
      setValue("email", user.email);
      setValue("phoneNumber", user.phoneNumber);
      setValue("role", user.role);
    }
  }, [user]);

  if (loading) {
    return <LoadingAnimation message="Please wait.." />;
  }

  return (
    <div className="py-10  flex justify-center ">
      <div className="max-w-2xl">
        <div className=" items-center justify-center flex ">
          <img
            className="object-contain mt-4 rounded-xl"
            src="/images/Update_User.png"
          />
        </div>
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
                  defaultValue={user?.firstName ?? ""}
                />
              </div>
              <div>
                <p className="text-sm text-gray-500">Last Name</p>
                <InputField
                  placeholder={"Enter Last Name"}
                  name={"lastName"}
                  control={control}
                  error={errors.lastName?.message}
                  defaultValue={user?.lastName ?? ""}
                />
              </div>

              <div>
                <p className="text-sm text-gray-500">Phone Number</p>
                <InputField
                  placeholder={"Enter phone number"}
                  name={"phoneNumber"}
                  control={control}
                  error={errors.phoneNumber?.message}
                  defaultValue={user?.phoneNumber ?? ""}
                />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <InputField
                  placeholder={"Enter email"}
                  name={"email"}
                  control={control}
                  error={errors.email?.message}
                  defaultValue={user?.email ?? ""}
                />
              </div>
              <div>
                <p className="text-sm text-gray-500">Role</p>
                <select
                  className="p-2 capitalize  w-full rounded-lg "
                  {...register("role")}
                >
                  <option
                    className="capitalize"
                    defaultValue={user?.role ?? ""}
                  >
                    Current Role {user?.role ?? ""}
                  </option>
                  <option value="user">User</option>
                  <option value="employee">Employee</option>
                  <option value="manager">Manager</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <button
                className="bg-primary w-full rounded-lg text-lg font-medium text-center text-white p-2"
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

export default Update;

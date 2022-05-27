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
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phone_number: data.phone_number,
      roles: data.roles,
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
      setValue("first_name", user.first_name);
      setValue("last_name", user.last_name);
      setValue("email", user.email);
      setValue("phone_number", user.phone_number);
      setValue("roles", user.roles);
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
                  name={"first_name"}
                  control={control}
                  error={errors.first_name?.message}
                  defaultValue={user?.first_name ?? ""}
                />
              </div>
              <div>
                <p className="text-sm text-gray-500">Last Name</p>
                <InputField
                  placeholder={"Enter Last Name"}
                  name={"last_name"}
                  control={control}
                  error={errors.last_name?.message}
                  defaultValue={user?.last_name ?? ""}
                />
              </div>

              <div>
                <p className="text-sm text-gray-500">Phone Number</p>
                <InputField
                  placeholder={"Enter phone number"}
                  name={"phone_number"}
                  control={control}
                  error={errors.phone_number?.message}
                  defaultValue={user?.phone_number ?? ""}
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
                  {...register("roles")}
                >
                  <option
                    className="capitalize"
                    defaultValue={user?.roles ?? ""}
                  >
                    Current Role {user?.roles ?? ""}
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

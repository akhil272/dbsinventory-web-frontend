import InputField from "@Components/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateUserFormData } from "@Utils/formTypes/UserFormData";
import { CreateUserSchema } from "@Utils/schemas/UserSchema";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Create = ({ createUser }) => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm<CreateUserFormData>({ resolver: yupResolver(CreateUserSchema) });
  const onSubmit = handleSubmit((data) => createAUserByAdmin(data));
  const createAUserByAdmin = async (data: CreateUserFormData) => {
    const response = await createUser({
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
      email: data.email,
      role: data.role,
    });
    if (response.success) {
      toast.success("Created user");
    }
    if (response.status === 409) {
      toast.error(`Failed to create user. ${response.message}`);
    }
  };
  return (
    <div className="pt-4 h-max flex justify-center">
      <div className="max-w-xl">
        <div>
          <div className="mt-12 items-center justify-center flex ">
            <img
              className="object-contain h-96 w-96 mt-2 rounded-xl"
              src="/images/Create_User.png"
            />
          </div>
          <div className="w-full rounded-2xl">
            <div className="p-4">
              <div className="flex items-center justify-center">
                <h1 className="font-semibold text-3xl ">Create User</h1>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-md py-2">Fill in the details below</p>
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
                      type="text"
                      error={errors.email?.message}
                    />
                    <InputField
                      control={control}
                      name="phoneNumber"
                      placeholder="Enter your phone number"
                      type="text"
                      error={errors.phoneNumber?.message}
                    />
                    <select
                      className="p-2  w-full rounded-lg "
                      {...register("role")}
                    >
                      <option value="" disabled selected>
                        Select a user role
                      </option>
                      <option value="user">User</option>
                      <option value="employee">Employee</option>
                      <option value="manager">Manager</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>

                  <button
                    className="bg-primary w-full rounded-lg text-xl font-medium text-center text-white p-3"
                    type="button"
                    onClick={onSubmit}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;

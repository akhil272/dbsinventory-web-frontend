import Button from "@Components/Button";
import InputField from "@Components/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { AdminCreateUserProps } from "@Store/users/types";
import { CreateUserFormData } from "@Utils/formTypes/UserFormData";
import { CreateUserSchema } from "@Utils/schemas/UserSchema";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Create = ({ createUser }: AdminCreateUserProps) => {
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
      email: data.email === "" ? null : data.email,
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
    <div className="h-max flex justify-center">
      <div>
        <div className="items-center justify-center flex ">
          <img
            className="object-contain h-96 w-96 mt-2 rounded-xl"
            src="/images/Create_User.png"
          />
        </div>
        <div className="w-full rounded-2xl">
          <div>
            <div className="flex items-center justify-center">
              <h1 className="font-semibold text-3xl ">Create User</h1>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-base py-2">Fill in the details below</p>
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
                    inputMode="email"
                    error={errors.email?.message}
                  />
                  <InputField
                    control={control}
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    type="text"
                    inputMode="tel"
                    error={errors.phoneNumber?.message}
                  />
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
                    <option value="user">User</option>
                    <option value="employee">Employee</option>
                    <option value="manager">Manager</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>

                <Button onClick={onSubmit}>Create</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;

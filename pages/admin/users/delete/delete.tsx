import { DeleteUserProps } from "@Store/users/types";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";

const DeleteAUser = ({ deleteUser }: DeleteUserProps) => {
  const router = useRouter();
  const {
    query: { id, role, first_name, last_name },
  } = router;
  const cancel = () => {
    router.push("/admin/users");
  };
  const confirmDelete = async () => {
    const response = await deleteUser({ id: +id });
    if (response.success) {
      toast.success("User deleted successfully.");
      router.push("/admin/users");
    }
    if (!response.success) {
      toast.error(`Failed to delete user. ${response.message}`);
    }
  };
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="max-w-2xl lg:min-w-[600px]">
        <div className=" mt-12  items-center justify-center flex ">
          <img
            className="object-contain h-96 mt-2  rounded-xl"
            src="/images/Delete_User.png"
          />
        </div>
        <div className="w-full rounded-2xl">
          <div className="p-4 space-y-4">
            <div className="flex ">
              <h1 className="font-semibold text-3xl ">Delete User</h1>
            </div>
            <div className="bg-white p-4 flex rounded-md">
              <div className="w-1/2 text-gray-400">
                <div>First Name</div>
                <div>Last Name</div>
                <div>Role</div>
              </div>
              <div className="w-1/2">
                <div>{first_name}</div>
                <div>{last_name}</div>
                <div>{role}</div>
              </div>
            </div>
            <div className="flex flex-col space-y-2 items-center justify-center">
              <button
                className="bg-primary w-full rounded-lg text-xl font-medium text-center text-white p-3"
                type="button"
                onClick={confirmDelete}
              >
                Yes
              </button>
              <button
                className="bg-pastel_green w-full rounded-lg text-xl font-medium text-center text-white p-3"
                type="button"
                onClick={cancel}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAUser;

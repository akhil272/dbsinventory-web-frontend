import Button from "@Components/Button";
import { DeleteUserProps } from "@Store/users/types";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";

const DeleteAUser = ({ deleteUser }: DeleteUserProps) => {
  const router = useRouter();
  const {
    query: { id, role, firstName, lastName },
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
    <div className="flex flex-col min-h-screen ">
      <div className="max-w-2xl lg:min-w-[600px]">
        <div className=" items-center justify-center flex ">
          <img
            className="object-contain h-96 rounded-xl"
            src="/images/Delete_User.png"
          />
        </div>
        <div className="w-full rounded-2xl">
          <div className="py-4 space-y-4">
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
                <div>{firstName}</div>
                <div>{lastName}</div>
                <div>{role}</div>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button onClick={confirmDelete}>Yes</Button>
              <Button bgColor="bg-pastel_green" onClick={cancel}>
                No
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAUser;

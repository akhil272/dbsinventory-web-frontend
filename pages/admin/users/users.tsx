import UserFilterTabs from "@Components/Dashboard/Admin/UserFilterTabs";
import LoadingAnimation from "@Components/LoadingAnimation";
import UserCard from "@Components/UserCard";
import { UsersProps } from "@Store/users/types";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Users = ({
  users,
  getUsers,
  createUser,
  loading,
  total,
  lastPage,
  page: metaPage,
}: UsersProps) => {
  const router = useRouter();
  const [searchUser, setSearchUser] = useState("");
  const [selectedUserRole, setSelectedUserRole] = useState("admin");
  const [userInput, setUserInput] = useState("");
  const [onFind, setOnFind] = useState(false);
  const [page, setPage] = useState<number>(1);
  const take = 10;
  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  const createNewUser = () => {
    router.push("users/create");
  };
  const handleUserRole = (ROLE: string) => {
    setSelectedUserRole(ROLE);
  };
  const handleFindUser = () => {
    setSearchUser(userInput);
    setOnFind(!onFind);
  };

  useEffect(() => {
    if (router.isReady) {
      let url = `&take=${take}&page=${page}&role=${selectedUserRole}`;
      if (searchUser?.length > 1) {
        url = `=${searchUser}` + url;
      }
      const fetchAllUsers = async () => {
        const response = await getUsers({ search: url });
        if (response.success) {
          setUserInput("");
          setSearchUser("");
        }
        if (!response.success) {
          setUserInput("");
          setSearchUser("");
          toast.error(`${response.message}`);
        }
      };
      fetchAllUsers();
    }
  }, [getUsers, selectedUserRole, router.isReady, page, onFind]);
  if (loading) {
    return <LoadingAnimation message="Loading users. Please wait.." />;
  }
  return (
    <div>
      <div className="space-y-4">
        <img
          className="object-contain  max-h-[600px] mt-2 rounded-xl"
          src="/images/Users.png"
        />

        <div className="flex relative min-w-full">
          <h1 className="text-2xl font-bold text-left">Manager Users </h1>
          <button
            onClick={createNewUser}
            className="absolute right-0 py-1 px-4 text-white rounded-lg bg-primary"
          >
            Create New
          </button>
        </div>
        <UserFilterTabs
          handleUserRole={handleUserRole}
          selectedUserRole={selectedUserRole}
        />
        <div className="flex">
          <input
            className="w-full rounded-l-md p-2 "
            placeholder="Search for a user"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button
            onClick={handleFindUser}
            className="w-36 rounded-r-md bg-gray-200 active:bg-gray-50"
          >
            Find User
          </button>
        </div>
        <div>
          {users?.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              firstName={user.firstName}
              lastName={user.lastName}
              role={user.role}
            />
          ))}
        </div>
      </div>
      {users?.length > 1 && (
        <div>
          <div className="flex place-items-center w-full pt-4 text-base justify-between">
            <button
              disabled={metaPage <= 1 ? true : false}
              className={metaPage <= 1 ? " text-stone-400 py-2" : " py-2"}
              onClick={previousPage}
            >
              Previous
            </button>
            {page >= 2 && (
              <button
                disabled={metaPage <= 1 ? true : false}
                onClick={previousPage}
                className="text-sm text-gray-400"
              >
                {page - 1}
              </button>
            )}
            <div className="text-base py-1 font-bold px-3 text-white rounded-md bg-secondary">
              {page}
            </div>
            {page <= lastPage && (
              <button
                disabled={metaPage >= lastPage ? true : false}
                onClick={nextPage}
                className="text-sm text-gray-400"
              >
                {page + 1}
              </button>
            )}

            <button
              disabled={metaPage >= lastPage ? true : false}
              className={
                metaPage >= lastPage ? " text-stone-400  py-2" : "  py-2"
              }
              onClick={nextPage}
            >
              Next
            </button>
          </div>
          <div className="flex justify-between text-sm pb-2 text-gray-400">
            <div>Total Results : {total}</div>
            Page : {metaPage} of {lastPage} pages
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;

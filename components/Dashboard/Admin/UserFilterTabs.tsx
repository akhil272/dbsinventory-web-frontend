import React from "react";

const UserFilterTabs = ({ handleUserRole, selectedUserRole }) => {
  return (
    <div className="flex bg-white rounded-md p-2 mt-4 justify-between space-x-2">
      <button
        className={`text-sm ${
          selectedUserRole === "admin" ? "bg-gray-300" : "bg-gray-100"
        } p-2 w-full rounded-md`}
        onClick={() => handleUserRole("admin")}
      >
        Admin
      </button>
      <button
        className={`text-sm ${
          selectedUserRole === "manager" ? "bg-gray-300" : "bg-gray-100"
        } p-2 w-full rounded-md`}
        onClick={() => handleUserRole("manager")}
      >
        Manager
      </button>
      <button
        className={`text-sm ${
          selectedUserRole === "employee" ? "bg-gray-300" : "bg-gray-100"
        } p-2 w-full rounded-md`}
        onClick={() => handleUserRole("employee")}
      >
        Employee
      </button>
      <button
        className={`text-sm ${
          selectedUserRole === "user" ? "bg-gray-300" : "bg-gray-100"
        } p-2 w-full rounded-md`}
        onClick={() => handleUserRole("user")}
      >
        User
      </button>
    </div>
  );
};

export default UserFilterTabs;

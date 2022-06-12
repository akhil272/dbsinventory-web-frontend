import React from "react";

const Profile = ({ user }) => {
  return (
    <div className="min-h-screen">
      <div className="h-1/2 pt-40  rounded-lg space-y-2 flex flex-col items-center justify-center">
        <div className="max-h-64 max-w-64">
          <img
            className="bg-contain max-h-64 max-w-64"
            src="/images/Avatar.png"
          />
        </div>
        <div className="flex flex-col capitalize place-items-center">
          <h2 className="text-3xl font-bold">{user?.firstName}</h2>
          <h4 className="text-md ">{user?.role}</h4>
        </div>
      </div>
      <div className="rounded-lg p-10 bg-white mt-10 flex flex-col space-y-4">
        <div className="flex flex-col  place-items-center">
          <div className="text-md">Name</div>
          <div className="text-xl">
            {user?.firstName} {user?.lastName}
          </div>
        </div>
        <div className="flex flex-col  place-items-center">
          <div className="text-md">Phone</div>
          <div className="text-xl">{user?.phoneNumber} </div>
        </div>
        <div className="flex flex-col  place-items-center">
          <div className="text-md">Email</div>
          <div className="text-xl">{user?.email}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

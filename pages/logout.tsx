import storage from "@Utils/storage";
import { useEffect } from "react";

const LogOut = () => {
  useEffect(() => {
    storage().clear();
  }, []);

  return (
    <div className="min-h-screen flex justify-center ">
      <div className="flex flex-col max-w-3xl">
        <div className="h-1/2 mt-12 items-center justify-center flex ">
          <img
            className="object-contain h-96 mt-2  rounded-xl"
            src="/images/Logout.png"
          />
        </div>
        <div className="flex flex-col py-2 mt-2 font-bold text-3xl text-center">
          <h3 className="text-lg">You have been</h3>
          <h2>Logged Out</h2>
        </div>
        <div className="w-full ">
          <div className="p-4 mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default LogOut;

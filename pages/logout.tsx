import storage from "@Utils/storage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const LogOut = () => {
  const router = useRouter();
  const [counter, setCounter] = useState(10);
  useEffect(() => {
    const timer =
      counter > 0 &&
      setInterval(() => {
        storage().clear();
        setCounter(counter - 1);
      }, 1000);
    if (counter === 1) {
      router.push("/");
    }
    return () => clearInterval(timer);
  }, [counter]);

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
        <p className="text-sm text-gray-500 text-center italic">
          Redirecting to login page in {counter}s
        </p>
      </div>
    </div>
  );
};

export default LogOut;

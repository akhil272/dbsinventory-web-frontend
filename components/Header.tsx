import React from "react";
import { MenuOutlined } from "@ant-design/icons";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../store/actions/AuthActions";
import { RootStore } from "../store";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const signOutUser = () => {
    dispatch(signOut());
    router.push("login");
  };
  const token = useSelector((state: RootStore) => state.auth.token);
  return (
    <div className="w-full h-12 flex items-center absolute justify-center bg-gray-200">
      <div className="absolute left-4 ">
        {/* <MenuOutlined /> */}
        {token != null ? <button onClick={signOutUser}>Sign Out</button> : null}
      </div>
      <div className="flex ">
        <Image width={100} height={35} src={"/images/DBS_Logo_Header.png"} />
      </div>
    </div>
  );
};

export default Header;

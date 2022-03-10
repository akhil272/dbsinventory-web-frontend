import React from "react";
import { MenuOutlined } from "@ant-design/icons";
import Image from "next/image";
const Header = () => {
  return (
    <div className="w-full h-12 flex items-center justify-center bg-gray-200">
      <div className="absolute left-4 ">
        <MenuOutlined />
      </div>
      <div className="flex ">
        <Image width={100} height={35} src={"/images/DBS_Logo_Header.png"} />
      </div>
    </div>
  );
};

export default Header;

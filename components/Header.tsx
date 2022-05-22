import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import Image from "next/image";
import SideBar from "./SideBar";
import Link from "next/link";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <nav className="flex flex-wrap px-5 py-3 w-full justify-between items-center">
        <Link href={"/"}>
          <h2 className="font-bold text-lg">DBS Automotive</h2>
        </Link>

        <div>
          <button>
            <MenuOutlined />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

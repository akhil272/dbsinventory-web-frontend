import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import SideBar from "./SideBar";
import Link from "next/link";
const Header = ({ userRole }) => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <nav className="flex flex-wrap px-5 py-3 w-full justify-between items-center">
        <Link href={"/"}>
          <h2 className="font-bold text-lg">DBS Automotive</h2>
        </Link>

        <div>
          <button onClick={() => setOpen(!open)}>
            <MenuOutlined />
          </button>
        </div>
        {open && <SideBar userRole={userRole} open={open} setOpen={setOpen} />}
      </nav>
    </header>
  );
};

export default Header;

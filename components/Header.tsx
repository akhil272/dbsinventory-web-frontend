import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import SideBar from "./SideBar/SideBar";
import Link from "next/link";
const Header = ({ userRole, userName, userId }) => {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-inherit ">
      <nav className="flex bg-inherit fixed w-full  px-5 py-3 justify-between items-center">
        <Link href={"/"}>
          <h2 className="font-bold text-lg">DBS Tyres</h2>
        </Link>
        {!open && (
          <button onClick={() => setOpen(!open)}>
            <MenuOutlined />
          </button>
        )}
      </nav>
      {open && (
        <SideBar
          userId={userId}
          userRole={userRole}
          open={open}
          setOpen={setOpen}
          userName={userName}
        />
      )}
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import SideBar from "./SideBar";
import Link from "next/link";
import MenuBar from "./Menu";
const Header = ({ userRole, userName }) => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <nav className="flex  px-5 py-3 justify-between items-center">
        <Link href={"/"}>
          <h2 className="font-bold text-lg">DBS Automotive</h2>
        </Link>
        {!open && (
          <button onClick={() => setOpen(!open)}>
            <MenuOutlined />
          </button>
        )}
      </nav>

      {open && (
        <SideBar
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

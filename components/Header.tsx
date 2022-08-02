import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import SideBar from "./SideBar/SideBar";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = ({ userRole, userName, userId }) => {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-inherit">
      <nav className="flex bg-inherit fixed w-full z-10  px-5 py-3 justify-between items-center">
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
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "tween" }}
          className="w-64 h-full fixed shadow-md bg-white right-0 z-10"
        >
          <SideBar
            userId={userId}
            userRole={userRole}
            open={open}
            setOpen={setOpen}
            userName={userName}
          />
        </motion.div>
      )}
    </header>
  );
};

export default Header;

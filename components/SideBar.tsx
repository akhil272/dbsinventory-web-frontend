import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  MenuOutlined,
  SearchOutlined,
  HomeOutlined,
  FileAddOutlined,
  LogoutOutlined,
  UserAddOutlined,
  ControlOutlined,
  DatabaseOutlined,
  WindowsOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import storage from "@Utils/storage";

const adminLink = [
  { name: "Overview", to: "/admin", id: 1, iconName: <ControlOutlined /> },
  { name: "Profile", to: "/user/profile", id: 2, iconName: <HomeOutlined /> },
  {
    name: "Quotations",
    to: "/quotations",
    id: 3,
    iconName: <DatabaseOutlined />,
  },
  { name: "Search", to: "/search", id: 4, iconName: <SearchOutlined /> },
  {
    name: "Add Stock",
    to: "/stocks/create",
    id: 5,
    iconName: <FileAddOutlined />,
  },
  {
    name: "Manage Users",
    to: "/admin/users",
    id: 6,
    iconName: <UserAddOutlined />,
  },
];
const userLink = [
  { name: "Profile", to: "/user/profile", id: 1, iconName: <HomeOutlined /> },
  { name: "Dashboard", to: "/user", id: 2, iconName: <WindowsOutlined /> },
];
const managerLink = [
  { name: "Profile", to: "/user/profile", id: 1, iconName: <HomeOutlined /> },
  { name: "Search", to: "/search", id: 2, iconName: <SearchOutlined /> },
  {
    name: "Add Stock",
    to: "/stocks/create",
    id: 3,
    iconName: <FileAddOutlined />,
  },
];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

export default function SideBar({ open, setOpen, userRole, userName }) {
  const router = useRouter();
  const signOutUser = () => {
    storage().clear();
    router.push("/logout");
  };
  return (
    <main>
      <AnimatePresence>
        {open && (
          <motion.div
            className="w-40 min-h-screen fixed top-0 z-10 right-2 px-2 bg-zinc-100"
            initial={{ width: 0 }}
            animate={{
              width: 250,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.5, duration: 0.3 },
            }}
          >
            <motion.div
              onClick={() => setOpen(!open)}
              className="absolute right-3 top-3 "
            >
              <MenuOutlined />
            </motion.div>

            <motion.div
              className="h-full  mt-10 "
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
                className="pt-4 pb-2 px-1 flex"
              >
                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={sideVariants}
                  className="h-20 w-20 rounded-full bg-zinc-800"
                >
                  <img src="/images/Avatar.png" />
                </motion.div>
                <motion.div
                  variants={sideVariants}
                  className="flex-col self-center px-4 "
                >
                  <motion.div
                    className="text-lg uppercase font-semibold"
                    variants={itemVariants}
                  >
                    {userName}
                  </motion.div>
                  <motion.div
                    className="text-md capitalize font-normal"
                    variants={itemVariants}
                  >
                    {userRole}
                  </motion.div>
                </motion.div>
              </motion.div>
              {userRole === "admin" && (
                <>
                  {adminLink.map(({ name, to, id, iconName }) => (
                    <motion.div onClick={() => setOpen(!open)} key={id}>
                      <Link href={to}>
                        <motion.a
                          className="text-gray-700 h-10 items-center flex p-1 text-md  "
                          whileHover={{
                            scale: 1.1,
                            x: 50,
                            color: "black",
                            transition: { type: "spring", stiffness: 80 },
                          }}
                          variants={itemVariants}
                        >
                          <motion.div className="pr-4 h-8 text-red-500 ">
                            {iconName}
                          </motion.div>
                          <motion.div className="flex"> {name}</motion.div>
                        </motion.a>
                      </Link>
                    </motion.div>
                  ))}
                </>
              )}
              {userRole === "user" && (
                <>
                  {userLink.map(({ name, to, id, iconName }) => (
                    <motion.div onClick={() => setOpen(!open)} key={id}>
                      <Link href={to}>
                        <motion.a
                          className="text-gray-700 h-10 items-center flex p-1 text-md  "
                          whileHover={{
                            scale: 1.1,
                            x: 50,
                            color: "black",
                            transition: { type: "spring", stiffness: 80 },
                          }}
                          variants={itemVariants}
                        >
                          <motion.div className="pr-4 h-8 text-red-500 ">
                            {iconName}
                          </motion.div>
                          <motion.div className="flex"> {name}</motion.div>
                        </motion.a>
                      </Link>
                    </motion.div>
                  ))}
                </>
              )}
              {userRole === "manager" && (
                <>
                  {managerLink.map(({ name, to, id, iconName }) => (
                    <motion.div onClick={() => setOpen(!open)} key={id}>
                      <Link href={to}>
                        <motion.a
                          className="text-gray-700 h-10 items-center flex p-1 text-md  "
                          whileHover={{
                            scale: 1.1,
                            x: 50,
                            color: "black",
                            transition: { type: "spring", stiffness: 80 },
                          }}
                          variants={itemVariants}
                        >
                          <motion.div className="pr-4 h-8 text-red-500 ">
                            {iconName}
                          </motion.div>
                          <motion.div className="flex"> {name}</motion.div>
                        </motion.a>
                      </Link>
                    </motion.div>
                  ))}
                </>
              )}
              {userRole === "employee" && (
                <>
                  {managerLink.map(({ name, to, id, iconName }) => (
                    <motion.div onClick={() => setOpen(!open)} key={id}>
                      <Link href={to}>
                        <motion.a
                          className="text-gray-700 h-10 items-center flex p-1 text-md  "
                          whileHover={{
                            scale: 1.1,
                            x: 50,
                            color: "black",
                            transition: { type: "spring", stiffness: 80 },
                          }}
                          variants={itemVariants}
                        >
                          <motion.div className="pr-4 h-8 text-red-500 ">
                            {iconName}
                          </motion.div>
                          <motion.div className="flex"> {name}</motion.div>
                        </motion.a>
                      </Link>
                    </motion.div>
                  ))}
                </>
              )}
            </motion.div>
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              onClick={signOutUser}
              variants={sideVariants}
              className="text-red-500  absolute bottom-4 font-bold uppercase"
              whileHover={{
                scale: 1.1,
                x: 50,
                color: "red",
              }}
            >
              <motion.label
                variants={itemVariants}
                className="pr-4 h-8 text-red-500 "
              >
                <LogoutOutlined />
              </motion.label>
              <motion.label
                variants={itemVariants}
                className=" h-10 align-middle items-center"
              >
                Sign Out
              </motion.label>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

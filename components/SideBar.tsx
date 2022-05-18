import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  MenuOutlined,
  SearchOutlined,
  HomeOutlined,
  FileAddOutlined,
  LogoutOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  { name: "Home", to: "/search", id: 1, iconName: <HomeOutlined /> },
  { name: "Search", to: "/search", id: 2, iconName: <SearchOutlined /> },
  { name: "Add Stock", to: "/addstock", id: 3, iconName: <FileAddOutlined /> },
  {
    name: "Manage Users",
    to: "/manageusers",
    id: 4,
    iconName: <UserAddOutlined />,
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

export default function SideBar({ open, setOpen }) {
  const router = useRouter();

  return (
    <main>
      <AnimatePresence>
        {open && (
          <motion.div
            className="w-72 h-screen z-10 fixed px-2 pt-3 bg-zinc-200"
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
              className="absolute left-4 "
            >
              <MenuOutlined />
            </motion.div>

            <motion.div
              className="h-full mt-10 "
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
                  className="h-20 w-20 rounded-full bg-slate-800"
                />
                <motion.div
                  variants={sideVariants}
                  className="flex-col self-center  px-4 "
                >
                  <motion.div
                    className="text-lg uppercase font-semibold"
                    variants={itemVariants}
                  ></motion.div>
                  <motion.div
                    className="text-md capitalize font-normal"
                    variants={itemVariants}
                  ></motion.div>
                </motion.div>
              </motion.div>

              {links.map(({ name, to, id, iconName }) => (
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
            </motion.div>
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
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

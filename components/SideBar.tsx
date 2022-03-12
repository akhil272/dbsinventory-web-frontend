import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../store/actions/AuthActions";
import { useRouter } from "next/router";
import { RootStore } from "../store";

const links = [
  { name: "Home", to: "/search", id: 1 },
  { name: "Search", to: "/search", id: 2 },
  { name: "Add Stock", to: "/addstock", id: 3 },
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
  const dispatch = useDispatch();
  const router = useRouter();
  const username = useSelector((state: RootStore) => state.auth.username);
  const userRole = useSelector((state: RootStore) => state.auth.userRole);
  const signOutUser = () => {
    dispatch(signOut());
    setOpen(!open);
    router.push("/");
  };
  return (
    <main>
      <AnimatePresence>
        {open && (
          <motion.div
            className="w-72 h-screen fixed px-2 pt-3 bg-zinc-200"
            initial={{ width: 0 }}
            animate={{
              width: 300,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
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
                <motion.div variants={sideVariants} className="flex-row px-4 ">
                  <motion.div variants={itemVariants}>{username}</motion.div>
                  <motion.div variants={itemVariants}>{userRole}</motion.div>
                  <motion.div
                    variants={itemVariants}
                    className="text-red-500 font-bold uppercase"
                    onClick={signOutUser}
                  >
                    Sign Out
                  </motion.div>
                </motion.div>
              </motion.div>

              {links.map(({ name, to, id }) => (
                <motion.div onClick={() => setOpen(!open)} key={id}>
                  <Link href={to}>
                    <motion.a
                      className="text-gray-700 p-1 text-md block"
                      whileHover={{
                        scale: 1.1,
                        x: 50,
                        color: "black",
                      }}
                      variants={itemVariants}
                    >
                      {name}
                    </motion.a>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

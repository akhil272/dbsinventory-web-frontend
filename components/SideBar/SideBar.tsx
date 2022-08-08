import {
  AppstoreFilled,
  CloseOutlined,
  CustomerServiceFilled,
  GitlabFilled,
  LeftCircleFilled,
  PieChartFilled,
  SwitcherFilled,
  ThunderboltFilled,
} from "@ant-design/icons";
import storage from "@Utils/storage";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import MenuItem from "./MenuItem";
import SubMenu from "./SubMenu";
const QuotationMenu = [
  { id: 1, name: "View all quotations", link: "/quotations" },
  { id: 2, name: "Create quotation", link: "/quotations/create" },
  { id: 3, name: "Declined quotations", link: "/quotations/declined" },
];
const StockMenu = [
  { id: 1, name: "View all Stocks", link: "/stocks" },
  { id: 2, name: "Add a stock", link: "/stocks/create" },
  { id: 3, name: "Search stock", link: "/search" },
];
const UsersMenu = [
  { id: 1, name: "View all Users", link: "/admin/users" },
  { id: 2, name: "Create a user", link: "/admin/users/create" },
];

const SideBar = ({ userId, userRole, open, setOpen, userName }) => {
  const signOutUser = () => {
    setOpen(!open);
    storage().clear();
  };
  const handleCloseSideBar = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="py-6">
        <div className="flex items-center px-6">
          <Image width={50} height={50} src="/images/Avatar.png" />
          <div className="flex  flex-col px-2 capitalize">
            <label className="text-lg leading-5">{userName}</label>
            <label className="text-sm font-normal">{userRole}</label>
          </div>
          <CloseOutlined
            onClick={handleCloseSideBar}
            className="absolute right-4"
          />
        </div>
        <div
          onClick={handleCloseSideBar}
          className="flex flex-col space-y-2 py-5 "
        >
          {userRole === "admin" || userRole === "user" ? (
            <MenuItem
              icon={<AppstoreFilled />}
              title="Dashboard"
              link={
                userRole === "admin"
                  ? "/admin"
                  : { pathname: "/user", query: { userId } }
              }
            />
          ) : null}

          <MenuItem
            icon={<GitlabFilled />}
            title="Profile"
            link={{ pathname: "/user/profile", query: { userId } }}
          />
        </div>

        <hr />
        <div className="py-5 space-y-2 ">
          {userRole !== "user" && (
            <>
              <SubMenu
                icon={<ThunderboltFilled />}
                title="Quotation"
                subMenuItem={QuotationMenu}
                link="/quotations"
                handleClose={handleCloseSideBar}
              />
              <SubMenu
                icon={<SwitcherFilled />}
                title="Stock"
                subMenuItem={StockMenu}
                link="/search"
                handleClose={handleCloseSideBar}
              />
            </>
          )}
          {userRole === "admin" && (
            <SubMenu
              icon={<PieChartFilled />}
              title="Users"
              subMenuItem={UsersMenu}
              link="/admin/users"
              handleClose={handleCloseSideBar}
            />
          )}
          {userRole === "user" && (
            <div>
              <Link href={`tel:${process.env.PHONE_NUMBER}`}>
                <a className="flex px-6 py-1 items-center capitalize hover:bg-gray-200  transition-all  active:text-white active:bg-gray-500">
                  <div className="mr-4 flex">
                    <CustomerServiceFilled />
                  </div>
                  Talk to us
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div
        onClick={signOutUser}
        className="bottom-10  py-1 w-full px-6 absolute text-primary capitalize  hover:bg-gray-200  transition-all  active:text-white active:bg-gray-500"
      >
        <a href="/logout">
          <label className="flex items-center">
            <div className="mr-4 flex">
              <LeftCircleFilled />
            </div>
            Sign Out
          </label>
        </a>
      </div>
      <div className="text-center bottom-0 absolute w-full">
        <hr className="m-0" />
        <p className="py-2 text-sm text-gray-700">DBS TYRES</p>
      </div>
    </div>
  );
};

export default SideBar;

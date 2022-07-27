import { CaretDownFilled, CaretRightFilled } from "@ant-design/icons";
import Link from "next/link";
import React, { useState } from "react";

interface SubMenuProps {
  icon: any;
  title: string;
  subMenuItem: { id: number; name: string; link: string }[];
  link: any;
  handleClose: () => void;
}

const SubMenu = ({
  icon,
  title,
  subMenuItem,
  link,
  handleClose,
}: SubMenuProps) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    <div>
      <div className="flex place-items-center ">
        <Link href={link}>
          <a
            className="flex px-6 w-full py-1 items-center hover:bg-gray-200  transition-all  active:text-white active:bg-gray-500"
            onClick={handleClose}
          >
            <div className="mr-4 flex">{icon}</div>
            {title}
          </a>
        </Link>
        <CaretDownFilled
          onClick={() => setShowSubMenu(!showSubMenu)}
          className={`absolute right-6  transition-all ${
            showSubMenu ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      {showSubMenu && (
        <ul className="flex flex-col px-6  py-2 space-y-1">
          {subMenuItem?.map((subMenu) => (
            <li
              onClick={handleClose}
              key={subMenu.id}
              className="flex py-1 items-center active:text-white active:bg-gray-500 transition-all hover:rounded-md hover:bg-gray-200 hover:pl-1 "
            >
              <div className="pl-2 pr-2  flex">
                <CaretRightFilled />
              </div>
              <Link href={subMenu.link}>
                <a className="capitalize">{subMenu.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SubMenu;

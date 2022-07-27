import Link from "next/link";
import React from "react";

interface MenuItemProps {
  icon: any;
  title: string;
  link: any;
}

const MenuItem = ({ icon, title, link }: MenuItemProps) => {
  return (
    <div>
      <Link href={link}>
        <a>
          <label className="flex px-6 py-1 items-center hover:bg-gray-200  transition-all  active:text-white active:bg-gray-500">
            <div className="mr-4 flex">{icon}</div>
            {title}
          </label>
        </a>
      </Link>
    </div>
  );
};

export default MenuItem;

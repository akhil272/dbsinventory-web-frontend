import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="absolute text-white font-bold text-lg bottom-4 flex space-x-16">
      <div className="p-2 bg-red-500 rounded-lg w-32">
        <Link href="search">Search</Link>
      </div>
      <div className="p-2 bg-red-500 rounded-lg w-32">
        <Link href="addstock">Add Stock</Link>
      </div>
    </div>
  );
};

export default Footer;

import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../store";

const Search = () => {
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const router = useRouter();
  const token = useSelector((state: RootStore) => state.auth.token);

  const getStocks = () => {
    if (brand.length > 0 || size.length > 0) {
      router.push(`/search/${brand}`);
    } else {
      router.push("stockslist");
    }
  };

  return (
    <div className="h-screen pt-4 bg-zinc-100 px-10 lg:px-96">
      <div className="pt-10">
        <h1 className="font-bold text-gray-500 text-2xl capitalize pb-4">
          Search for stocks
        </h1>
      </div>
      <div className="space-y-4">
        <input
          className="p-3 shadow-md w-full rounded-lg"
          placeholder="Brand"
          onChange={(e) => setBrand(e.target.value)}
        />
        <input
          className="p-3 shadow-md w-full rounded-lg "
          placeholder="Size"
          onChange={(e) => setBrand(e.target.value)}
        />
      </div>
      <div>
        <button
          className="p-3 mt-5 bg-red-500 w-full text-white uppercase text-xl rounded-lg shadow-md shadow-red-500"
          onClick={getStocks}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;

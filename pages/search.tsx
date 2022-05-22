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
      router.push("stocks");
    }
  };

  return (
    <div className="pt-4 h-screen bg-zinc-100 flex justify-center">
      <div className="w-max-2xl ">
        <div className="h-1/2 mt-12 items-center justify-center flex ">
          <img
            className="object-cover h-96 mt-2  rounded-xl"
            src="/images/Search_Art.png"
          />
        </div>
        <div className="mt-10">
          <h1 className="font-bold text-2xl  pb-4">Search for stocks</h1>
        </div>
        <div className="space-y-4">
          <input
            className="p-3  w-full rounded-lg"
            placeholder="Brand"
            onChange={(e) => setBrand(e.target.value)}
          />
          <input
            className="p-3  w-full rounded-lg "
            placeholder="Size"
            onChange={(e) => setBrand(e.target.value)}
          />
          <button
            className="bg-primary w-full rounded-lg text-xl font-medium text-center text-white p-3"
            onClick={getStocks}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;

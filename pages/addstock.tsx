import React from "react";
import Footer from "../components/Footer";

const AddStock = () => {
  return (
    <div className="h-screen bg-zinc-100 px-10 md:px-96">
      <div className="pt-10">
        <h1 className="font-bold text-gray-500 text-2xl capitalize pb-4">
          Add Stock
        </h1>
      </div>
      <div className="space-y-4"></div>
      <div>
        <button className="p-3 mt-5 bg-red-500 w-full text-white uppercase text-xl rounded-lg shadow-md shadow-red-500">
          Search
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default AddStock;

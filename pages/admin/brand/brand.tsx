import Link from "next/link";
import React, { useEffect, useState } from "react";

const Brand = ({ brands, getBrands, createBrand }) => {
  const [brandSearch, setBrandSearch] = useState("");
  useEffect(() => {
    getBrands({ search: "" });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setBrandSearch(e.target.value);
  };
  const brandsFiltered = brands?.filter((brand) =>
    brand.name
      .toLowerCase()
      .replace(/\s+/g, "")
      .includes(brandSearch.toLowerCase().replace(/\s+/g, ""))
  );
  return (
    <div>
      <p className="text-3xl dark:text-white tracking-wider font-bold border-b-2 border-neutral-400 pb-2">
        Brand
      </p>
      <div className="w-full flex pt-2 justify-end">
        <Link href="brand/create">
          <a className="py-2  bg-primary rounded-md  px-4 text-white ">
            Create new
          </a>
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
        <div className="p-4">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              value={brandSearch}
              onChange={handleSearch}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
            />
          </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>

              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {brandsFiltered?.map((brand) => (
              <tr
                key={brand.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  {brand.id}
                </th>
                <td className="px-6 py-4">{brand.name}</td>

                <td className="px-6 py-4 text-right">
                  <Link
                    href={{
                      pathname: "/admin/brand/update",
                      query: { brandId: brand.id, brandName: brand.name },
                    }}
                  >
                    <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      Edit
                    </a>
                  </Link>
                </td>
                <td className="px-6 py-4 text-right">
                  <Link
                    href={{
                      pathname: "/admin/brand/delete",
                      query: { brandId: brand.id, brandName: brand.name },
                    }}
                  >
                    <a className="font-medium text-primary dark:text-blue-500 hover:underline">
                      Delete
                    </a>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Brand;

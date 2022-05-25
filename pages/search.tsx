import InputField from "@Components/InputField";
import SearchField from "@Components/SearchField";
import { initialState } from "@Store/rootReducer";
import { getBrands, getTyreSizes } from "@Store/tyre/actions";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const mapStateToProps = ({ tyres }: typeof initialState) => ({
  brands: tyres.brands,
  tyreSizes: tyres.tyreSizes,
});

const mapDispatchToProps = () => ({
  getBrands,
  getTyreSizes,
});

const Search = ({ getBrands, getTyreSizes, brands, tyreSizes }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBrand, setSearchBrand] = useState(brands[0]);
  const [searchTyreSize, setSearchTyreSize] = useState(tyreSizes[0]);
  const router = useRouter();
  const handleSearch = () => {
    // if (searchBrand) {
    //   router.push(`/search/&brand=${searchBrand?.name}`);
    //   setSearchBrand(null);
    // }
    // if (searchTyreSize) {
    //   setSearchBrand(brands[0]);
    //   const trim = searchTyreSize?.name?.substring(0, 3);
    //   router.push(`/search/&size=${trim}`);
    // }
    // if (searchTerm) {
    //   router.push(`/search/=${searchTerm}`);
    // }
    // if (!searchTerm && !searchBrand[0] && !searchBrand[0]) {
    router.push("/stocks");
    // }
  };
  useEffect(() => {
    getBrands({ search: "" });
    setSearchBrand(brands[0]);
  }, [getBrands]);
  useEffect(() => {
    getTyreSizes({ search: "" });
    setSearchBrand(tyreSizes[0]);
  }, [getTyreSizes]);

  return (
    <div className="pt-4  flex justify-center">
      <div className="max-w-xl">
        <div>
          <div className="mt-12 items-center justify-center flex ">
            <img
              className="object-contain mt-2 rounded-xl"
              src="/images/Search_Art.png"
            />
          </div>
          <div className="mt-10">
            <h1 className="font-bold text-2xl pb-4">Search for stocks</h1>
          </div>
          <div className="space-y-4">
            <SearchField
              selected={searchBrand}
              setSelected={setSearchBrand}
              data={brands}
              placeholder="Brand name"
            />
            <SearchField
              selected={searchTyreSize}
              setSelected={setSearchTyreSize}
              data={tyreSizes?.map(({ size, id }) => ({
                name: size,
                id,
              }))}
              placeholder="Tyre size"
            />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search in brand / tyre size / pattern"
              className="relative w-full cursor-default p-2 rounded-lg bg-white text-left    sm:text-sm"
            />
            <button
              onClick={handleSearch}
              className="bg-primary w-full rounded-lg text-xl font-medium text-center text-white p-3"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

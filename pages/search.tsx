import InputField from "@Components/InputField";
import SearchField from "@Components/SearchField";
import { initialState } from "@Store/rootReducer";
import { getBrands, getTyreSizes } from "@Store/tyre/actions";
import { SearchStocksFormData } from "@Utils/formTypes/StockFormData";
import { StocksSearchSchema } from "@Utils/schemas/StockSchema";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import AutoComplete from "@Components/AutoComplete";

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
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SearchStocksFormData>({
    resolver: yupResolver(StocksSearchSchema),
  });
  const onSubmit = handleSubmit((data) => console.log(data));

  useEffect(() => {
    getBrands({ search: "" });
    getTyreSizes({ search: "" });
  }, []);

  console.log(searchTerm, "search Term");
  return (
    <div className="pt-4 h-max flex justify-center">
      <div className="md:max-w-sm w-full">
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
          <form onSubmit={onSubmit} className="space-y-4">
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
              className=" w-full cursor-default p-2 rounded-lg bg-white text-left    sm:text-sm"
            />
            <button
              onClick={onSubmit}
              className="bg-primary w-full rounded-lg text-xl font-medium text-center text-white p-3"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

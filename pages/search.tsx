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
import InputField from "@Components/InputField";

const mapStateToProps = ({ tyres }: typeof initialState) => ({
  brands: tyres.brands,
  tyreSizes: tyres.tyreSizes,
});

const mapDispatchToProps = () => ({
  getBrands,
  getTyreSizes,
});

const Search = ({ getBrands, getTyreSizes, brands, tyreSizes }) => {
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SearchStocksFormData>({
    resolver: yupResolver(StocksSearchSchema),
  });
  const onSubmit = handleSubmit((data) => searchStocks(data));
  const searchStocks = (data: SearchStocksFormData) => {
    console.log(data);
    if (
      data.tyre_size === null &&
      data.brand === null &&
      data.search_term === ""
    ) {
      router.push("/stocks");
    }
    if (data.brand != null) {
      router.push({ pathname: "/stocks", query: { brand: data.brand.name } });
    }
    if (data.tyre_size != null) {
      router.push({
        pathname: "/stocks",
        query: { tyreSize: data.tyre_size.name },
      });
    }
    if (data.search_term.length > 1) {
      router.push({
        pathname: "/stocks",
        query: { searchTerm: data.search_term },
      });
    }
  };
  useEffect(() => {
    getBrands({ search: "" });
    getTyreSizes({ search: "" });
  }, []);
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
              placeholder="Enter brand name"
              control={control}
              name={"brand"}
              data={brands}
              error={(errors.brand as any)?.message}
            />

            <SearchField
              data={tyreSizes?.map(({ size, id }) => ({
                name: size,
                id,
              }))}
              placeholder="Tyre size"
              control={control}
              name={"tyre_size"}
            />
            <InputField
              placeholder="Search in brand / tyre size / pattern"
              error={errors.search_term?.message}
              name="search_term"
              control={control}
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

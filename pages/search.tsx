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
      data.tyreSize === null &&
      data.brand === null &&
      data.searchTerm === ""
    ) {
      router.push("/stocks");
    }
    if (data.brand != null) {
      router.push({ pathname: "/stocks", query: { brand: data.brand.name } });
    }
    if (data.tyreSize != null) {
      router.push({
        pathname: "/stocks",
        query: { tyreSize: data.tyreSize.name },
      });
    }
    if (data.searchTerm.length > 1) {
      router.push({
        pathname: "/stocks",
        query: { searchTerm: data.searchTerm },
      });
    }
  };
  useEffect(() => {
    getBrands({ search: "" });
    getTyreSizes({ search: "" });
  }, []);
  return (
    <div>
      <div>
        <img
          className="object-contain lg:max-w-xl rounded-xl"
          src="/images/Search_Art.png"
        />
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
            data={tyreSizes?.map(({ value, id }) => ({
              name: value,
              id,
            }))}
            placeholder="Tyre size"
            control={control}
            name={"tyreSize"}
          />
          <InputField
            placeholder="Search in brand / tyre size / pattern"
            error={errors.searchTerm?.message}
            name="searchTerm"
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
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

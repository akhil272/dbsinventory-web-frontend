import AutoComplete from "@Components/AutoComplete";
import InputField from "@Components/InputField";
import ListBox from "@Components/ListBox";
import { yupResolver } from "@hookform/resolvers/yup";
import { TyresDataProps } from "@Store/tyre/types";
import { AddStockFormData } from "@Utils/formTypes/AddStockFormData";
import CreateStockSchema from "@Utils/schemas/CreateStockSchema";
import React, { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const CreateStock = ({
  brands,
  tyreSizes,
  tyreDetails,
  getBrands,
  createBrand,
  createPattern,
  getTyreSizes,
  createTyreSize,
  getTyreDetails,
  createTyreDetail,
}: TyresDataProps) => {
  useEffect(() => {
    getBrands({ search: "" });
  }, [getBrands]);
  useEffect(() => {
    getTyreSizes({ search: "" });
  }, [getTyreSizes]);
  useEffect(() => {
    getTyreDetails({ search: "" });
  }, [getTyreDetails]);
  console.log("Tyre Details State", tyreDetails);

  const extractTyreSize = tyreDetails?.map(({ tyreSize }) => ({
    tyreSize,
  }));
  const extractPattern = tyreDetails?.map(({ pattern }) => ({
    pattern,
  }));

  console.log("extractTyreSize", extractTyreSize);
  console.log("extractPattern", extractPattern);
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm<AddStockFormData>({ resolver: yupResolver(CreateStockSchema) });
  const onSubmit = handleSubmit((data) => console.log("clicked", data));
  const selectedBrand = watch("brand");
  useEffect(() => {
    setValue("pattern", null);
  }, [selectedBrand]);
  const product_line = [{ name: "PC" }, { name: "TB" }, { name: "2R" }];
  return (
    <div className="pt-20">
      Create a stock
      <div>
        <div className=" w-72">
          <form onSubmit={onSubmit}>
            <ListBox
              control={control}
              name={"product_line"}
              data={product_line}
            />
            <InputField
              placeholder={"Enter DOM"}
              name={"dom"}
              control={control}
              error={errors.dom?.message}
            />
            <AutoComplete
              placeholder="Enter brand name"
              onSuccess={() => getBrands({ search: "" })}
              create={createBrand}
              control={control}
              name={"brand"}
              data={brands}
            />
            <AutoComplete
              placeholder="Enter pattern name"
              onSuccess={() => {
                setValue("brand", null);
                getBrands({ search: "" });
              }}
              create={({ name }) =>
                createPattern({ name, brand_id: selectedBrand.id })
              }
              control={control}
              name={"pattern"}
              data={selectedBrand?.patterns ?? []}
            />
            <AutoComplete
              placeholder="Enter tyre size"
              onSuccess={() => getTyreSizes({ search: "" })}
              create={({ name }) => createTyreSize({ size: name })}
              control={control}
              name={"tyre_size"}
              data={tyreSizes?.map(({ size, ...rest }) => ({
                ...rest,
                name: size,
              }))}
            />
            <InputField
              control={control}
              name="quantity"
              placeholder="Enter quantity"
              type="text"
              error={errors.quantity?.message}
            />
            <InputField
              control={control}
              name="cost"
              placeholder="Enter cost"
              type="text"
              error={errors.cost?.message}
            />
            <button onClick={onSubmit}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateStock;

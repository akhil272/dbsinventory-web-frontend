import AutoComplete from "@Components/AutoComplete";
import DatePicker from "@Components/DatePicker";
import InputField from "@Components/InputField";
import ListBox from "@Components/ListBox";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateStockProps } from "@Store/stocks/types";

import { AddStockFormData } from "@Utils/formTypes/AddStockFormData";
import CreateStockSchema from "@Utils/schemas/CreateStockSchema";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const product_line = [{ name: "PC" }, { name: "TB" }, { name: "2R" }];

const CreateStock = ({
  brands,
  vendors,
  transports,
  locations,
  tyreDetails,
  getBrands,
  createBrand,
  createPattern,
  getTyreDetails,
  createTyreDetailSize,
  getVendors,
  createVendor,
  getTransports,
  createTransport,
  getLocations,
  createLocation,
  createStock,
}: CreateStockProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm<AddStockFormData>({ resolver: yupResolver(CreateStockSchema) });
  const onSubmit = handleSubmit((data) => addStock(data));

  const addStock = async (data: AddStockFormData) => {
    const response = await createStock({
      product_line: data.product_line.name,
      dom: data.dom,
      purchase_date: data.purchase_date,
      transport_id: data.transport.id,
      vendor_id: data.vendor.id,
      location_id: data.location.id,
      quantity: data.quantity,
      cost: data.cost,
      tyre_detail_id: data.tyre_detail_id.id,
    });
    if (response.success && response.data) {
      console.log("Stocks added");
    }
  };

  const selectedBrand = watch("brand");
  const selectedPattern = watch("pattern");

  const createPatternAction = async ({ name }) => {
    const response = await createPattern({ name, brand_id: selectedBrand.id });
    if (response.success) {
      const { id, name, patterns } = selectedBrand;
      setValue("brand", {
        id,
        name,
        patterns: [
          ...patterns,
          { id: response.data.id, name: response.data.name },
        ],
      });
    }
    return response;
  };
  const createTyreSizeAction = async ({ name }) => {
    const response = await createTyreDetailSize({
      size: name,
      pattern_id: selectedPattern?.id,
    });
    if (response.success) {
      const { id, name } = selectedPattern;
      setValue("pattern", {
        id,
        name,
      });
      setValue("tyre_size", {
        id: response.data.tyreSize.id,
        size: response.data.tyreSize.size,
      });
      setValue("tyre_detail_id", {
        id: response.data.id,
      });
    }
    return response;
  };

  useEffect(() => {
    setValue("pattern", null);
  }, [selectedBrand]);
  useEffect(() => {
    setValue("tyre_detail_id", null);
  }, [selectedPattern]);
  useEffect(() => {
    getBrands({ search: "" });
  }, [getBrands]);
  useEffect(() => {
    getTyreDetails({ search: "" });
  }, [getTyreDetails]);
  useEffect(() => {
    getVendors({ search: "" });
  }, [getVendors]);
  useEffect(() => {
    getTransports({ search: "" });
  }, [getTransports]);
  useEffect(() => {
    getLocations({ search: "" });
  }, [getLocations]);

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
                getBrands({ search: "" });
              }}
              create={createPatternAction}
              control={control}
              name={"pattern"}
              data={selectedBrand?.patterns ?? []}
            />
            <AutoComplete
              placeholder="Enter tyre size"
              onSuccess={() => getTyreDetails({ search: "" })}
              create={createTyreSizeAction}
              control={control}
              name={"tyre_detail_id"}
              data={tyreDetails
                ?.filter((pattern) => pattern.patternId === selectedPattern?.id)
                .map(({ tyreSize }) => ({
                  tyreSize,
                }))
                .map(({ tyreSize }) => ({
                  name: tyreSize.size,
                  id: tyreSize.id,
                }))}
            />
            <DatePicker
              control={control}
              name="purchase_date"
              placeholder="Pick a date"
              error={errors.purchase_date?.message}
            />
            <AutoComplete
              placeholder="Enter vendor name"
              onSuccess={() => getVendors({ search: "" })}
              create={createVendor}
              control={control}
              name={"vendor"}
              data={vendors}
            />
            <AutoComplete
              placeholder="Enter transport name"
              onSuccess={() => getTransports({ search: "" })}
              create={({ name }) => createTransport({ mode: name })}
              control={control}
              name={"transport"}
              data={transports?.map(({ mode, ...rest }) => ({
                ...rest,
                name: mode,
              }))}
            />
            <AutoComplete
              placeholder="Enter location name"
              onSuccess={() => getLocations({ search: "" })}
              create={createLocation}
              control={control}
              name={"location"}
              data={locations}
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

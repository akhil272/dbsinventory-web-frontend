import AutoComplete from "@Components/AutoComplete";
import DatePicker from "@Components/DatePicker";
import InputField from "@Components/InputField";
import ListBox from "@Components/ListBox";
import { yupResolver } from "@hookform/resolvers/yup";
import { UpdateProps } from "@Store/stocks/types";

import { AddStockFormData } from "@Utils/formTypes/AddStockFormData";
import CreateStockSchema from "@Utils/schemas/CreateStockSchema";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const product_line = [{ name: "PC" }, { name: "TB" }, { name: "2R" }];

const Update = ({
  brands,
  vendors,
  transports,
  locations,
  tyreDetails,
  stock,
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
  getStockById,
  updateStock,
}: UpdateProps) => {
  const router = useRouter();
  const {
    query: { stockId },
  } = router;

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
      toast.success(`Successfully added new stock to system.`);
    }
    if (response.error) {
      toast.error(`Failed to new stock to system. ${response.message}`);
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
    }
    return response;
  };

  useEffect(() => {
    getStockById({ id: +stockId });
  }, [getStockById]);
  console.log("stock", stock);
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
    <div className="py-10 ">
      <div className="h-1/2 mt-12 items-center justify-center flex ">
        <img
          className="object-contain rounded-xl"
          src="/images/Update_Stock.png"
        />
      </div>
      <div className="mt-2">
        <h1 className="font-bold text-2xl pb-4">Update stock</h1>
      </div>
      <div>
        <div className="">
          <form className="space-y-3" onSubmit={onSubmit}>
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
                .map(({ tyreSize, id }) => ({
                  tyreSize,
                  id,
                }))
                .map(({ tyreSize, id }) => ({
                  name: tyreSize.size,
                  id,
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
              placeholder={"Enter cost"}
              type="text"
              error={errors.cost?.message}
            />
            <button
              className="bg-primary w-full rounded-lg text-lg font-medium text-center text-white p-2"
              onClick={onSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;

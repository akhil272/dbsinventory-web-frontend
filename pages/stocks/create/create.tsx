import AutoComplete from "@Components/AutoComplete";
import DatePicker from "@Components/DatePicker";
import InputField from "@Components/InputField";
import ListBox from "@Components/ListBox";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateStockProps } from "@Store/stocks/types";

import { CreateStockFormData } from "@Utils/formTypes/StockFormData";
import { CreateStockSchema } from "@Utils/schemas/StockSchema";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const product_line = [
  { id: 1, name: "PC" },
  { id: 2, name: "TB" },
  { id: 3, name: "2R" },
  { id: 4, name: "OTR" },
];

const CreateStock = ({
  brands,
  vendors,
  transports,
  locations,
  tyreDetails,
  loadIndexes,
  speedRatings,
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
  createSpeedRating,
  createLoadIndex,
  getSpeedRatings,
  getLoadIndexes,
}: CreateStockProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm<CreateStockFormData>({
    resolver: yupResolver(CreateStockSchema),
  });
  const onSubmit = handleSubmit((data) => addStock(data));

  const addStock = async (data: CreateStockFormData) => {
    const response = await createStock({
      product_line: data.product_line.name,
      dom: Number(data.dom),
      purchase_date: data.purchase_date,
      transport_id: data.transport.id,
      vendor_id: data.vendor.id,
      location_id: data.location.id,
      quantity: data.quantity,
      cost: data.cost,
      tyre_detail_id: data.tyre_detail_id.id,
      load_index_id: data?.load_index?.id,
      speed_rating_id: data?.speed_rating?.id,
    });
    if (response.success && response.data) {
      toast.success(`Successfully added new stock to system.`);
    }
    if (!response.success) {
      toast.error(`Failed to new stock to system. ${response.message}`);
    }
  };

  const selectedBrand = watch("brand");
  const selectedPattern = watch("pattern");
  const createLoadIndexAction = async ({ name }) => {
    const response = await createLoadIndex({ load_index: Number(name) });
    return response;
  };
  const createSpeedRatingAction = async ({ name }) => {
    const response = await createSpeedRating({ speed_rating: name });
    return response;
  };
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
  useEffect(() => {
    getSpeedRatings({ search: "" });
  }, [getSpeedRatings]);
  useEffect(() => {
    getLoadIndexes({ search: "" });
  }, [getLoadIndexes]);

  return (
    <div className="py-10 flex justify-center ">
      <div className="max-w-2xl">
        <div className="items-center justify-center flex ">
          <img
            className="object-contain my-4 rounded-xl"
            src="/images/Create_Stock.png"
          />
        </div>
        <div className="mt-2">
          <h1 className="font-bold text-2xl pb-4">Add stock</h1>
        </div>
        <div>
          <div className="">
            <form className="space-y-3" onSubmit={onSubmit}>
              <ListBox
                error={(errors.product_line as any)?.message}
                control={control}
                name={"product_line"}
                data={product_line}
              />
              <InputField
                control={control}
                name="dom"
                placeholder="Enter DOM"
                type="number"
                error={errors.dom?.message}
              />
              <AutoComplete
                placeholder="Enter brand name"
                onSuccess={() => getBrands({ search: "" })}
                create={createBrand}
                control={control}
                name={"brand"}
                data={brands}
                error={(errors.brand as any)?.message}
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
                error={(errors.pattern as any)?.message}
              />
              <AutoComplete
                placeholder="Enter tyre size eg. 265/65R17"
                onSuccess={() => getTyreDetails({ search: "" })}
                create={createTyreSizeAction}
                control={control}
                name={"tyre_detail_id"}
                data={tyreDetails
                  ?.filter(
                    (pattern) => pattern.patternId === selectedPattern?.id
                  )
                  .map(({ tyreSize, id }) => ({
                    tyreSize,
                    id,
                  }))
                  .map(({ tyreSize, id }) => ({
                    name: tyreSize.size,
                    id,
                  }))}
                error={(errors.tyre_detail_id as any)?.message}
              />
              <AutoComplete
                placeholder="[Optional]Speed rating [Y | 100 km/h]"
                onSuccess={() => getSpeedRatings({ search: "" })}
                create={createSpeedRatingAction}
                control={control}
                name={"speed_rating"}
                data={speedRatings?.map(({ speed_rating, id }) => ({
                  name: speed_rating,
                  id,
                }))}
                error={(errors.speed_rating as any)?.message}
              />
              <AutoComplete
                placeholder="[Optional]Load Index [80]"
                onSuccess={() => getLoadIndexes({ search: "" })}
                create={createLoadIndexAction}
                control={control}
                name={"load_index"}
                data={loadIndexes?.map(({ load_index, id }) => ({
                  name: String(load_index),
                  id,
                }))}
                error={(errors.load_index as any)?.message}
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
                error={(errors.vendor as any)?.message}
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
                error={(errors.transport as any)?.message}
              />
              <AutoComplete
                placeholder="Enter location name"
                onSuccess={() => getLocations({ search: "" })}
                create={createLocation}
                control={control}
                name={"location"}
                data={locations}
                error={(errors.location as any)?.message}
              />
              <InputField
                control={control}
                name="quantity"
                placeholder="Enter quantity"
                type="number"
                error={errors.quantity?.message}
              />
              <InputField
                control={control}
                name="cost"
                placeholder="Enter cost"
                type="number"
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
    </div>
  );
};

export default CreateStock;

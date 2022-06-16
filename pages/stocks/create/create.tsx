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

const CreateStock = ({
  brands,
  vendors,
  transports,
  locations,
  tyreDetails,
  loadIndexes,
  speedRatings,
  productLines,
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
  createProductLine,
  getSpeedRatings,
  getLoadIndexes,
  getProductLines,
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
      productLineId: data.productLine.id,
      dom: Number(data.dom),
      purchaseDate: data.purchaseDate,
      transportId: data.transport.id,
      vendorId: data.vendor.id,
      locationId: data.location.id,
      quantity: data.quantity,
      cost: data.cost,
      tyreDetailId: data.tyreDetailId.id,
      loadIndexId: data?.loadIndex?.id,
      speedRatingId: data?.speedRating?.id,
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
    const response = await createLoadIndex({ value: Number(name) });
    return response;
  };
  const createSpeedRatingAction = async ({ name }) => {
    const response = await createSpeedRating({ value: name });
    return response;
  };
  const createPatternAction = async ({ name }) => {
    const response = await createPattern({ name, brandId: selectedBrand.id });
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
      tyreSizeValue: name,
      patternId: selectedPattern?.id,
    });
    if (response.success) {
      const { id, name } = selectedPattern;
      setValue("pattern", {
        id,
        name,
      });
      setValue("tyreSize", {
        id: response.data.tyreSize.id,
        value: response.data.tyreSize.value,
      });
    }
    return response;
  };

  useEffect(() => {
    setValue("pattern", null);
  }, [selectedBrand]);
  useEffect(() => {
    setValue("tyreDetailId", null);
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
  useEffect(() => {
    getProductLines({ search: "" });
  }, [getProductLines]);

  return (
    <div className="pb-4">
      <div className="items-center justify-center flex ">
        <img
          className="object-contain rounded-xl"
          src="/images/Create_Stock.png"
        />
      </div>
      <div className="mt-2">
        <h1 className="font-bold text-2xl pb-4">Add stock</h1>
      </div>
      <div>
        <div className="">
          <form className="space-y-3" onSubmit={onSubmit}>
            <AutoComplete
              placeholder="Enter product line"
              onSuccess={() => getProductLines({ search: "" })}
              create={createProductLine}
              control={control}
              name={"productLine"}
              data={productLines}
              error={(errors.productLine as any)?.message}
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
              name={"tyreDetailId"}
              data={tyreDetails
                ?.filter((pattern) => pattern.patternId === selectedPattern?.id)
                .map(({ tyreSize, id }) => ({
                  tyreSize,
                  id,
                }))
                .map(({ tyreSize, id }) => ({
                  name: tyreSize.value,
                  id,
                }))}
              error={(errors.tyreDetailId as any)?.message}
            />
            <AutoComplete
              placeholder="[Optional]Speed rating [Y | 100 km/h]"
              onSuccess={() => getSpeedRatings({ search: "" })}
              create={createSpeedRatingAction}
              control={control}
              name={"speedRating"}
              data={speedRatings?.map(({ value, id }) => ({
                name: value,
                id,
              }))}
              error={(errors.speedRating as any)?.message}
            />
            <AutoComplete
              placeholder="[Optional]Load Index [80]"
              onSuccess={() => getLoadIndexes({ search: "" })}
              create={createLoadIndexAction}
              control={control}
              name={"loadIndex"}
              data={loadIndexes?.map(({ value, id }) => ({
                name: String(value),
                id,
              }))}
              error={(errors.loadIndex as any)?.message}
            />
            <DatePicker
              control={control}
              name="purchaseDate"
              placeholder="Pick a date"
              error={errors.purchaseDate?.message}
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
  );
};

export default CreateStock;

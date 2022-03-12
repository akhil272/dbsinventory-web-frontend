import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../components/InputField";
import { Stock } from "../store/actions/StockActionTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import AddStockSchema from "../utils/AddStockSchema";
import { useDispatch, useSelector } from "react-redux";
import { addStock } from "../store/actions/StockActions";
import { RootStore } from "../store";
import LoadingAnimation from "../components/LoadingAnimation";
import Link from "next/link";

const AddStock = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Stock>({ resolver: yupResolver(AddStockSchema) });
  const onSubmit = handleSubmit((data) => addStockToDatabase(data));

  const token = useSelector((state: RootStore) => state.auth.token);
  const isLoading = useSelector((state: RootStore) => state.stock.isLoading);
  const onSuccess = useSelector((state: RootStore) => state.stock.onSuccess);
  const addStockToDatabase = (data) => {
    dispatch(addStock(data, token));
    console.log("stocks dispatch", data);
  };
  if (isLoading) {
    return (
      <LoadingAnimation message="Add stocks to DBS Inventory. Please wait..." />
    );
  }
  if (onSuccess === "true") {
    return (
      <div className="h-screen w-screen bg-red-300 items-center justify-center">
        <div className="text-lg py-10 text-black">Stock added</div>
        <div className="flex-col space-x-3">
          <Link href="/search">Search Page</Link>
          <Link href="/addstock">Add new stock</Link>
        </div>
      </div>
    );
  }
  return (
    <div className=" bg-zinc-100 px-10 pt-4 md:px-96">
      <div className="pt-10">
        <h1 className="font-bold text-gray-500 text-2xl capitalize pb-4">
          Add Stock
        </h1>
      </div>
      <div className="space-y-4"></div>
      <div>
        <form className="space-y-5" onSubmit={onSubmit}>
          <div className="flex-col justify-center">
            <div>
              <label>Select Product Line</label>
              <select
                className="p-1 ml-2 rounded-lg  shadow-md"
                {...register("product_line")}
              >
                <option value="PC">PC</option>
                <option value="TB">TB</option>
                <option value="2R">2R</option>
              </select>
              <p className="text-sm text-red-600">
                {errors.product_line?.message}
              </p>
            </div>
            <InputField
              placeholder="Brand name"
              register={register("brand")}
              error={errors.brand?.message}
            />
            <InputField
              placeholder="Tyre size"
              register={register("tyre_size")}
              error={errors.tyre_size?.message}
            />
            <InputField
              placeholder="Pattern name"
              register={register("pattern_name")}
              error={errors.pattern_name?.message}
            />
            <InputField
              placeholder="DOM"
              register={register("dom")}
              error={errors.dom?.message}
            />
            <InputField
              placeholder="Purchase date"
              register={register("purchase_date")}
              type="date"
              error={errors.purchase_date?.message}
            />
            <InputField
              placeholder="Transport mode"
              register={register("transport_mode")}
              error={errors.transport_mode?.message}
            />
            <InputField
              placeholder="Vendor"
              register={register("vendor")}
              error={errors.vendor?.message}
            />
            <InputField
              placeholder="Location"
              register={register("location")}
              error={errors.location?.message}
            />
            <InputField
              placeholder="Quantity"
              register={register("quantity")}
              error={errors.quantity?.message}
            />
            <InputField
              placeholder="Cost"
              register={register("cost")}
              error={errors.cost?.message}
            />
          </div>

          <button
            className="bg-red-500 w-full uppercase rounded-lg text-white p-4 mt-4"
            type="button"
            onClick={onSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStock;

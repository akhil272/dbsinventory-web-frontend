import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../components/InputField";
import { Stock } from "../store/actions/StockActionTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import AddStockSchema from "../utils/AddStockSchema";
const AddStock = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Stock>({ resolver: yupResolver(AddStockSchema) });
  const onSubmit = handleSubmit((data) => console.log(data));

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

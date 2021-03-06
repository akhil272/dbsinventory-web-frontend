import DatePicker from "@Components/DatePicker";
import InputField from "@Components/InputField";
import LoadingAnimation from "@Components/LoadingAnimation";
import { yupResolver } from "@hookform/resolvers/yup";
import { UpdateProps } from "@Store/stocks/types";

import { UpdateStockFormData } from "@Utils/formTypes/StockFormData";
import { UpdateStockSchema } from "@Utils/schemas/StockSchema";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Update = ({ stock, getStockById, updateStock, loading }: UpdateProps) => {
  const router = useRouter();
  const {
    query: { stockId },
  } = router;

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<UpdateStockFormData>({
    resolver: yupResolver(UpdateStockSchema),
  });
  const onSubmit = handleSubmit((data) => updateData(data));
  const updateData = async (data: UpdateStockFormData) => {
    const response = await updateStock({
      id: +stockId,
      dom: data.dom,
      purchaseDate: data.purchaseDate,
      quantity: data.quantity,
      cost: data.cost,
    });
    if (response.success) {
      toast.success(`Successfully updated stock to system.`);
    }
    if (!response.success) {
      toast.error(`Failed to update stock to system. ${response.message}`);
    }
  };

  useEffect(() => {
    if (router.isReady) {
      getStockById({ id: +stockId });
    }
  }, [router.isReady]);

  useEffect(() => {
    if (stock) {
      setValue("dom", stock.dom);
      setValue("cost", stock.cost);
      setValue("quantity", stock.quantity);
      setValue("purchaseDate", new Date(stock.purchaseDate));
    }
  }, [stock]);

  if (loading) {
    return <LoadingAnimation message="Please wait.." />;
  }

  return (
    <div className="pb-4">
      <div className="flex items-center justify-center">
        <img
          className="object-contain h-96 rounded-xl"
          src="/images/Update_Stock.png"
        />
      </div>
      <div>
        <h1 className="font-bold text-2xl pb-4">Update stock</h1>
      </div>
      <div>
        <div className="">
          <form className="space-y-3" onSubmit={onSubmit}>
            <div>
              <p className="text-sm text-gray-500">DOM</p>
              <InputField
                placeholder={"Enter DOM"}
                name={"dom"}
                control={control}
                inputMode="numeric"
                error={errors.dom?.message}
                defaultValue={stock?.dom ?? ""}
              />
            </div>
            <div>
              <p className="text-sm text-gray-500">Purchase Date</p>
              <DatePicker
                defaultValue={new Date()}
                control={control}
                name="purchaseDate"
                placeholder="Pick a date"
                error={errors.purchaseDate?.message}
              />
            </div>
            <div>
              <p className="text-sm text-gray-500">Quantity</p>
              <InputField
                placeholder={"Enter quantity"}
                name={"quantity"}
                control={control}
                inputMode="numeric"
                error={errors.quantity?.message}
                defaultValue={String(stock?.quantity ?? 0)}
              />
            </div>
            <div>
              <p className="text-sm text-gray-500">Cost</p>
              <InputField
                placeholder={"Enter cost"}
                name={"cost"}
                control={control}
                inputMode="numeric"
                error={errors.cost?.message}
                defaultValue={String(stock?.cost ?? 0)}
              />
            </div>

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

import InputField from "@Components/InputField";
import LoadingAnimation from "@Components/LoadingAnimation";
import StockSaleCard from "@Components/StockSaleCard";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddOrderProps } from "@Store/orders/types";
import { AddOrderToStockData } from "@Utils/formTypes/AddOrderToStockData";
import OrderToStockSchema from "@Utils/schemas/OrderToStockSchema";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddOrder = ({
  orders,
  getOrders,
  addOrderToStock,
  loading,
  user,
}: AddOrderProps) => {
  const router = useRouter();
  const {
    query: { stockId },
  } = router;
  const id = Number(stockId);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AddOrderToStockData>({
    resolver: yupResolver(OrderToStockSchema),
  });

  const onSubmit = handleSubmit((data) => addOrderStock(data));
  const addOrderStock = async (data: AddOrderToStockData) => {
    const response = await addOrderToStock({
      id,
      quantity: data.quantity,
      customer_name: data.customer_name,
      sold_price: data.sold_price,
      customer_phone_number: data.customer_phone_number,
    });

    if (response.success) {
      toast.success(`Successfully recorded sale in the system.`);
      getOrders({ id });
    }
    if (!response.success) {
      toast.error(`Failed to record sale in the system. ${response.message}`);
    }
  };
  useEffect(() => {
    if (router.isReady) {
      getOrders({ id });
    }
  }, [getOrders, router.isReady]);

  if (loading) {
    return <LoadingAnimation message="Loading orders. Please wait.." />;
  }
  return (
    <div className="pt-4 flex justify-center">
      <div className="max-w-xl">
        <div>
          <div className="mt-12 items-center justify-center flex ">
            <img
              className="object-contain max-h-[600px]  mt-2 rounded-xl"
              src="/images/Record_Sale.png"
            />
          </div>
          <div className="pt-10 ">
            <h1 className="font-bold text-2xl capitalize pb-2">Record sale</h1>
          </div>
          <div>
            <form className="space-y-5 " onSubmit={onSubmit}>
              <div className="flex-col space-y-2 justify-center">
                <InputField
                  placeholder="Enter quantity"
                  control={control}
                  name={"quantity"}
                  error={errors.quantity?.message}
                />
                <InputField
                  placeholder="Enter selling price"
                  control={control}
                  name={"sold_price"}
                  error={errors.sold_price?.message}
                />
                <InputField
                  placeholder="Enter customer name"
                  control={control}
                  name={"customer_name"}
                  error={errors.customer_name?.message}
                />
                <InputField
                  placeholder="Enter customer phone number"
                  control={control}
                  name={"customer_phone_number"}
                  error={errors.customer_phone_number?.message}
                />
                <button
                  className="bg-primary w-full rounded-lg text-xl font-medium text-center text-white p-3"
                  onClick={onSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div>
            {user?.roles === "admin" &&
              orders?.map((order) => (
                <StockSaleCard
                  key={order.id}
                  employee_name={order.employee_name}
                  sold_price={order.sold_price}
                  customer_name={order.customer_name}
                  sale_date={order.sale_date}
                  quantity={order.quantity}
                  profit={order.profit}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOrder;

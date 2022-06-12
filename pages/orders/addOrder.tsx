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
      customerName: data.customerName,
      salePrice: data.salePrice,
      customerPhoneNumber: data.customerPhoneNumber,
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
    <div className="pb-4 ">
      <div>
        <img
          className="object-contain h-96  rounded-xl"
          src="/images/Record_Sale.png"
        />

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
                name={"salePrice"}
                error={errors.salePrice?.message}
              />
              <InputField
                placeholder="Enter customer name"
                control={control}
                name={"customerName"}
                error={errors.customerName?.message}
              />
              <InputField
                placeholder="Enter customer phone number"
                control={control}
                name={"customerPhoneNumber"}
                error={errors.customerPhoneNumber?.message}
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
          {user?.role === "admin" &&
            orders?.map((order) => (
              <StockSaleCard
                key={order.id}
                employee_name={order.employeeName}
                salePrice={order.salePrice}
                customerName={order.customerName}
                saleDate={order.saleDate}
                quantity={order.quantity}
                profit={order.profit}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AddOrder;

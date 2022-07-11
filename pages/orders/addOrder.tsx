import InputField from "@Components/InputField";
import LoadingAnimation from "@Components/LoadingAnimation";
import SearchBox from "@Components/SearchBox";
import StockSaleCard from "@Components/StockSaleCard";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddOrderProps } from "@Store/orders/types";
import { OrderStockFormData } from "@Utils/formTypes/OrderFormData";
import OrderStockSchema from "@Utils/schemas/OrderSchema";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddOrder = ({
  orders,
  getOrders,
  addOrderToStock,
  loading,
  getUsers,
  user,
  users,
}: AddOrderProps) => {
  const router = useRouter();
  const {
    query: { stockId },
  } = router;
  const id = Number(stockId);
  const {
    handleSubmit,
    control,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<OrderStockFormData>({
    resolver: yupResolver(OrderStockSchema),
  });
  const userPhoneNumber = watch("phoneNumber");
  const onSubmit = handleSubmit((data) => addOrderStock(data));
  const addOrderStock = async (data: OrderStockFormData) => {
    const response = await addOrderToStock({
      id,
      quantity: data.quantity,
      salePrice: data.salePrice,
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber.name,
      email: data.email === "" ? null : data.email,
    });

    if (response.success) {
      toast.success(`Successfully recorded sale in the system.`);
      getOrders({ id });
      reset();
    }
    if (!response.success) {
      toast.error(`Failed to record sale in the system. ${response.message}`);
      reset();
    }
  };

  useEffect(() => {
    getUsers({ search: "" });
  }, []);
  useEffect(() => {
    if (router.isReady) {
      getOrders({ id });
    }
  }, [getOrders, router.isReady]);

  useEffect(() => {
    if (users.find((user) => user.id === userPhoneNumber?.id)) {
      setValue(
        "firstName",
        users.find((user) => user.id === userPhoneNumber?.id).firstName
      );
      setValue(
        "lastName",
        users.find((user) => user.id === userPhoneNumber?.id).lastName
      );
      setValue(
        "email",
        users.find((user) => user.id === userPhoneNumber?.id).email ?? ""
      );
    }
  }, [userPhoneNumber]);

  if (loading) {
    return <LoadingAnimation message="Please wait..." />;
  }
  if (!users?.length) return <LoadingAnimation message="Loading users..." />;

  return (
    <div className="pb-4 ">
      <div>
        <img
          className="object-contain h-96  rounded-xl"
          src="/images/Record_Sale.png"
        />
        <div>
          <h1 className="font-bold text-2xl capitalize pb-2">Record sale</h1>
        </div>
        <div>
          <form className="space-y-5 " onSubmit={onSubmit}>
            <div className="flex-col space-y-2 justify-center">
              <InputField
                placeholder="Enter quantity"
                control={control}
                name={"quantity"}
                type="number"
                inputMode="numeric"
                error={errors.quantity?.message}
              />
              <InputField
                placeholder="Enter selling price"
                control={control}
                type="number"
                name={"salePrice"}
                inputMode="numeric"
                error={errors.salePrice?.message}
              />
              <SearchBox
                placeholder="Enter phone number [+91XXXXXXXXXX]*"
                control={control}
                name={"phoneNumber"}
                data={users?.map(({ phoneNumber, id }) => ({
                  name: phoneNumber,
                  id,
                }))}
              />
              <InputField
                placeholder="Enter customer first name*"
                control={control}
                name={"firstName"}
                error={errors.firstName?.message}
              />
              <InputField
                placeholder="Enter customer last name*"
                control={control}
                name={"lastName"}
                error={errors.lastName?.message}
              />
              <InputField
                placeholder="Enter email"
                control={control}
                name={"email"}
                error={errors.email?.message}
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
                customerName={`${order.customer.user.firstName} ${order.customer.user.lastName}`}
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

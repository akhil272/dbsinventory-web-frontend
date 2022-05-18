import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../../components/InputField";
import LoadingAnimation from "../../components/LoadingAnimation";
import Modal from "../../components/Modal";
import SaleRecords from "../../components/SaleRecords";
import { RootStore } from "../../store";
import { addOrder, getAllOrders } from "../../store/actions/OrderActions";
import { Order } from "../../store/actions/OrderActionTypes";
import AddOrderSchema from "../../utils/AddOrderSchema";
const OrderDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector((state: RootStore) => state.auth.token);
  const username = useSelector((state: RootStore) => state.auth.username);
  const isLoading = useSelector((state: RootStore) => state.order.isLoading);
  const onSuccess = useSelector((state: RootStore) => state.order.onSuccess);
  const orders = useSelector((state: RootStore) => state.order.orders);
  const userRole = useSelector((state: RootStore) => state.auth.userRole);

  const errorMessage = useSelector(
    (state: RootStore) => state.order.errorMessage
  );
  const { id } = router.query;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Order>({ resolver: yupResolver(AddOrderSchema) });
  const onSubmit = handleSubmit((data) => addOrderToDatabase(data));
  useEffect(() => {
    dispatch(getAllOrders(String(id), token));
  }, []);
  const addOrderToDatabase = (data) => {
    const sale_date = new Date();
    const order = {
      id: String(id),
      sold_price: data.sold_price,
      quantity: data.quantity,
      sold_by_user: username,
      sale_date,

      customer_name: data.customer_name,
    };
    dispatch(addOrder(order, token));
  };
  if (isLoading) {
    return (
      <LoadingAnimation message="Adding order to DBS Inventory. Please wait..." />
    );
  }
  if (onSuccess === "true") {
    return (
      <Modal
        id={String(id)}
        data="order"
        description="Order added successfully"
      />
    );
  }
  if (errorMessage?.length > 3) {
    return (
      <Modal
        id={String(id)}
        data="order"
        description={`Process failed. ${errorMessage}`}
      />
    );
  }

  return (
    <div className="bg-zinc-100 h-screen px-10 pt-4 pb-10 md:px-96">
      <div className="pt-10 md:px-96">
        <h1 className="font-bold text-gray-500 text-2xl capitalize pb-2">
          Record sales
        </h1>
      </div>
      <div>
        <form className="space-y-5 md:px-96" onSubmit={onSubmit}>
          <div className="flex-col justify-center">
            <InputField
              placeholder="Enter quantity"
              register={register("quantity")}
              error={errors.quantity?.message}
            />
            <InputField
              placeholder="Enter selling price"
              register={register("sold_price")}
              error={errors.sold_price?.message}
            />
            <InputField
              placeholder="Enter customer name"
              register={register("customer_name")}
              error={errors.customer_name?.message}
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
      <div>
        {userRole === "admin" &&
          orders?.map((order) => (
            <SaleRecords
              key={order.id}
              sold_by_user={order.sold_by_user}
              sold_price={order.sold_price}
              customer_name={order.customer_name}
              sale_date={order.sale_date}
              quantity={order.quantity}
            />
          ))}
      </div>
    </div>
  );
};

export default OrderDetail;

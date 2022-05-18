import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingAnimation from "../../../components/LoadingAnimation";
import Modal from "../../../components/Modal";
import StockDetail from "../../../components/StockDetail";
import { RootStore } from "../../../store";
import { deleteStock, getStockById } from "../../../store/actions/StockActions";

const DeleteStock = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector((state: RootStore) => state.auth.token);
  const isLoading = useSelector((state: RootStore) => state.stock.isLoading);
  const onSuccess = useSelector((state: RootStore) => state.stock.onSuccess);
  const userRole = useSelector((state: RootStore) => state.auth.userRole);
  const stocks = useSelector(
    (state: RootStore) => state.stock.stocksData?.stocks
  );
  const errorMessage = useSelector(
    (state: RootStore) => state.stock.errorMessage
  );
  const { id } = router.query;

  if (isLoading) {
    return <LoadingAnimation message="Please wait..." />;
  }
  if (userRole != "admin") {
    return (
      <div>
        <div>You do not have permissiom. Please contact admin</div>
      </div>
    );
  }
  if (onSuccess === "true") {
    return (
      <Modal
        id={String(id)}
        data="deleteStock"
        description="Deleted successfully"
      />
    );
  }
  if (errorMessage?.length > 2) {
    return (
      <Modal
        id={String(id)}
        data="deleteStock"
        description={`Process failed. ${errorMessage}`}
      />
    );
  }
  const handleDelete = () => {
    dispatch(deleteStock(token, String(id)));
  };

  return (
    <div className="bg-zinc-100 h-screen px-10 pt-4 pb-10 md:px-96">
      <div className="pt-10 md:px-96">
        <h1 className="font-bold text-gray-500 text-2xl capitalize pb-2 text-center">
          Delete Stock
        </h1>
      </div>
      <div className="bg-zinc-100">
        {stocks
          .filter((filteredStock) => filteredStock.id === String(id))
          .map((stock) => (
            <StockDetail
              key={stock.id}
              brand={stock.brand}
              vendor={stock.vendor}
              tyre_size={stock.tyre_size}
              pattern_name={stock.pattern_name}
              dom={stock.dom}
              product_line={stock.product_line}
              transport_mode={stock.transport_mode}
              purchase_date={stock.purchase_date}
              location={stock.location}
              quantity={stock.quantity}
              cost={stock.cost}
              stockId={stock.id}
            />
          ))}
      </div>
      <div className="flex w-full justify-center space-x-4">
        <button
          className="flex p-2 bg-green-500 justify-center rounded-md w-20 text-white uppercase"
          onClick={() => handleDelete()}
        >
          Yes
        </button>
        <button
          className="flex p-2 bg-red-500 justify-center rounded-md w-20  text-white uppercase"
          onClick={() => router.push("/stockslist")}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default DeleteStock;

import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";

const DeleteAStock = ({ deleteStock }) => {
  const router = useRouter();
  const {
    query: { stockId, brand, tyre_size, quantity, cost },
  } = router;
  const cancel = () => {
    router.push("/stocks");
  };
  const confirmDelete = async () => {
    const response = await deleteStock({ id: stockId });
    if (response.success) {
      toast.success("Stock deleted successfully.");
    }
    if (!response.success) {
      toast.error(`Failed to delete stock. ${response.message}`);
    }
  };
  return (
    <div className="flex flex-col min-h-screen items-center justify-center ">
      <div className="max-w-2xl">
        <div className=" mt-12 items-center justify-center flex ">
          <img
            className="object-contain h-96 mt-2  rounded-xl"
            src="/images/Delete_Stock.png"
          />
        </div>
        <div className="w-full rounded-2xl">
          <div className="p-4 space-y-4">
            <div className="flex ">
              <h1 className="font-semibold text-3xl ">Delete stock</h1>
            </div>
            <div className="bg-white p-4 flex rounded-md">
              <div className="w-1/2 text-gray-400">
                <div>Brand</div>
                <div>Tyre Size</div>
                <div>Quantity</div>
                <div>Cost</div>
              </div>
              <div className="w-1/2">
                <div>{brand}</div>
                <div>{tyre_size}</div>
                <div>{quantity}</div>
                <div>{cost}</div>
              </div>
            </div>
            <div className="flex flex-col space-y-2 items-center justify-center">
              <button
                className="bg-primary w-full rounded-lg text-xl font-medium text-center text-white p-3"
                type="button"
                onClick={confirmDelete}
              >
                Yes
              </button>
              <button
                className="bg-pastel_green w-full rounded-lg text-xl font-medium text-center text-white p-3"
                type="button"
                onClick={cancel}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAStock;

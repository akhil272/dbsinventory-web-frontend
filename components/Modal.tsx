import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { CLEAR_ORDER_STATES } from "../store/actions/OrderActionTypes";
import { CLEAR_STOCKS_STATES } from "../store/actions/StockActionTypes";
import { CLEAR_USER_STATES } from "../store/actions/UserActionTypes";
interface ModalProps {
  description: string;
  data: string;
  id?: string;
}
const Modal = ({ description, data, id }: ModalProps) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const onContinue = () => {
    if (data === "user") {
      dispatch({ type: CLEAR_USER_STATES }), router.push("/users");
    }
    if (data === "stock") {
      dispatch({ type: CLEAR_STOCKS_STATES }), router.push("/addstock");
    }
    if (data === "order") {
      dispatch({ type: CLEAR_ORDER_STATES }), router.push(`/stock/${id}`);
    }
  };
  return (
    <div className="h-screen px-6 w-screen bg-gray-300 flex items-center justify-center">
      <div className="w-96 h-52 items-center justify-center flex flex-col p-4 rounded-lg bg-white">
        <div className=" text-2xl font-bold">{description}</div>
        <button
          className="bg-red-500 w-1/2 uppercase rounded-lg text-white p-4 mt-4"
          type="button"
          onClick={onContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Modal;

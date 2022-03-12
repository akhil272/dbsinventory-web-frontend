import { Dispatch } from "redux";
import dbsServerApi from "../../pages/api/dbsServer";
import {
  ADD_ORDER_FAIL,
  ADD_ORDER_INIT,
  ADD_ORDER_SUCCESS,
  Order,
  OrderDispatchTypes,
  ORDERS_FAIL,
  ORDERS_LOADING,
  ORDERS_SUCCESS,
} from "./OrderActionTypes";

export const getAllOrders =
  (id: string, token: string | null | undefined) =>
  async (dispatch: Dispatch<OrderDispatchTypes>) => {
    try {
      dispatch({ type: ORDERS_LOADING });
      await dbsServerApi
        .get(`/orders/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(function (response) {
          dispatch({ type: ORDERS_SUCCESS, payload: response.data });
        })
        .catch((error) =>
          dispatch({ type: ORDERS_FAIL, payload: error.message })
        );
    } catch (error) {
      dispatch({ type: ORDERS_FAIL, payload: "Failed at frontend" });
    }
  };

export const addOrder =
  (order: Order, token: string | null | undefined) =>
  async (dispatch: Dispatch<OrderDispatchTypes>) => {
    try {
      dispatch({ type: ADD_ORDER_INIT });
      await dbsServerApi
        .post("/orders", order, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(() => dispatch({ type: ADD_ORDER_SUCCESS }))
        .catch((error) => {
          if ((error.status = "409")) {
            dispatch({
              type: ADD_ORDER_FAIL,
              payload: "Not enough stock to sell",
            });
          } else {
            dispatch({ type: ADD_ORDER_FAIL, payload: error.message });
          }
        });
    } catch (error) {
      dispatch({ type: ADD_ORDER_FAIL, payload: "Frontend failure" });
    }
  };

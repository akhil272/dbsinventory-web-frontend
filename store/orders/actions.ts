import fetchAsync from "@Store/api";
import { API_END_POINTS, API_METHODS } from "@Store/api/constants";
import {
  addOrderToStockPayload,
  ORDER_TO_STOCK_CREATE_INIT,
  ORDER_TO_STOCK_CREATE_SUCCESS,
  ORDER_TO_STOCK_CREATE_FAIL,
  getOrdersByStockId,
  ORDERS_FETCH_FAIL,
  ORDERS_FETCH_INIT,
  ORDERS_FETCH_SUCCESS,
} from "./types";

export const addOrderToStock = async (data: addOrderToStockPayload) => {
  const { ORDERS } = API_END_POINTS;
  const pathname = ORDERS;
  const url = `${pathname}`;
  const apiArgs = {
    method: API_METHODS.POST,
    url,
    data,
    TYPES: {
      requestType: ORDER_TO_STOCK_CREATE_INIT,
      successType: ORDER_TO_STOCK_CREATE_SUCCESS,
      failureType: ORDER_TO_STOCK_CREATE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const getOrders = async (payload: getOrdersByStockId) => {
  const { ORDERS } = API_END_POINTS;
  const { id = "" } = payload;
  const pathname = `${ORDERS}/${id}`;

  const url = `${pathname}`;
  const apiArgs = {
    method: API_METHODS.GET,
    url,
    TYPES: {
      requestType: ORDERS_FETCH_INIT,
      successType: ORDERS_FETCH_SUCCESS,
      failureType: ORDERS_FETCH_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

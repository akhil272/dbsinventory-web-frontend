import { ApiReturnType } from "@Store/api";
import { Stock } from "@Store/stocks/types";

export const ORDER_TO_STOCK_CREATE_INIT = "ORDER_TO_STOCK:CREATE:INIT";
export const ORDER_TO_STOCK_CREATE_SUCCESS = "ORDER_TO_STOCK:CREATE:SUCCESS";
export const ORDER_TO_STOCK_CREATE_FAIL = "ORDER_TO_STOCK:CREATE:FAIL";
export const ORDERS_FETCH_INIT = "ORDERS:FETCH:INIT";
export const ORDERS_FETCH_SUCCESS = "ORDERS:FETCH:SUCCESS";
export const ORDERS_FETCH_FAIL = "ORDERS:FETCH:FAIL";

export type Order = {
  id: string;
  sale_date: Date;
  sold_price: number;
  quantity: number;
  employee_name: string;
  customer_name: string;
  stock: Stock;
};
export type OrdersDataPayload = Order;
export type Orders = {
  loading: boolean;
  orders: Order[];
};

export type addOrderToStockPayload = {
  customer_name: string;
  id: number;
  sold_price: number;
  quantity: number;
};

export type getOrdersByStockId = {
  id: number;
};

export type OrderDispatchProps = {
  getOrders: (
    payload: getOrdersByStockId
  ) => Promise<ApiReturnType<OrdersDataPayload[]>>;
  addOrderToStock: (
    data: addOrderToStockPayload
  ) => Promise<ApiReturnType<createOrderToStockResponse>>;
};

export type AddOrderStateProps = {
  orders: Order[];
};

export type AddOrderProps = AddOrderStateProps & OrderDispatchProps;

export type createOrderToStockResponse = {};

type orderToStockCreateInit = {
  type: typeof ORDER_TO_STOCK_CREATE_INIT;
};
type orderToStockCreateSuccess = {
  type: typeof ORDER_TO_STOCK_CREATE_SUCCESS;
  payload: ApiReturnType<createOrderToStockResponse>;
};
type orderToStockCreateFail = {
  type: typeof ORDER_TO_STOCK_CREATE_FAIL;
};

type ordersFetchInit = {
  type: typeof ORDERS_FETCH_INIT;
};
type ordersFetchSuccess = {
  type: typeof ORDERS_FETCH_SUCCESS;
  payload: ApiReturnType<OrdersDataPayload>;
};
type ordersFetchFail = {
  type: typeof ORDERS_FETCH_FAIL;
};

export type OrderActionTypes =
  | orderToStockCreateInit
  | orderToStockCreateSuccess
  | orderToStockCreateFail
  | ordersFetchInit
  | ordersFetchSuccess
  | ordersFetchFail;

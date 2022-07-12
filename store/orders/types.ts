import { ApiReturnType } from "@Store/api";
import { Stock } from "@Store/stocks/types";
import { getUsersPayload, User, UserPayload } from "@Store/users/types";

export const ORDER_DELETE_INIT = "ORDER:DELETE:INIT";
export const ORDER_DELETE_SUCCESS = "ORDER:DELETE:SUCCESS";
export const ORDER_DELETE_FAIL = "ORDER:DELETE:FAIL";

export const ORDER_TO_STOCK_CREATE_INIT = "ORDER_TO_STOCK:CREATE:INIT";
export const ORDER_TO_STOCK_CREATE_SUCCESS = "ORDER_TO_STOCK:CREATE:SUCCESS";
export const ORDER_TO_STOCK_CREATE_FAIL = "ORDER_TO_STOCK:CREATE:FAIL";

export const ORDERS_FETCH_INIT = "ORDERS:FETCH:INIT";
export const ORDERS_FETCH_SUCCESS = "ORDERS:FETCH:SUCCESS";
export const ORDERS_FETCH_FAIL = "ORDERS:FETCH:FAIL";

export type deleteOrderPayload = {
  id: number;
};

export type Order = {
  id: string;
  saleDate: Date;
  salePrice: number;
  quantity: number;
  employeeName: string;
  customer: {
    id: number;
    user: {
      firstName: string;
      lastName: string;
    };
  };
  profit: number;
  stock: Stock;
};
export type OrdersDataPayload = Order;
export type Orders = {
  loading: boolean;
  orders: Order[];
};

export type addOrderToStockPayload = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  id: number;
  salePrice: number;
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
  getUsers: (payload: getUsersPayload) => Promise<ApiReturnType<UserPayload[]>>;
  deleteOrder: (data: deleteOrderPayload) => Promise<ApiReturnType<{}>>;
};

export type AddOrderStateProps = {
  orders: Order[];
  loading: boolean;
  user: User;
  users: UserPayload[];
};

export type AddOrderProps = AddOrderStateProps & OrderDispatchProps;

export type createOrderToStockResponse = {};

type orderDeleteInit = {
  type: typeof ORDER_DELETE_INIT;
};
type orderDeleteSuccess = {
  type: typeof ORDER_DELETE_SUCCESS;
  payload: ApiReturnType<{}>;
};
type orderDeleteFail = {
  type: typeof ORDER_DELETE_FAIL;
};

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
  | orderDeleteInit
  | orderDeleteSuccess
  | orderDeleteFail
  | orderToStockCreateInit
  | orderToStockCreateSuccess
  | orderToStockCreateFail
  | ordersFetchInit
  | ordersFetchSuccess
  | ordersFetchFail;

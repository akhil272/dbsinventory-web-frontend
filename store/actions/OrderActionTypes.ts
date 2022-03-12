export const ORDERS_LOADING = "ORDERS_LOADING";
export const ORDERS_FAIL = "ORDERS_FAIL";
export const ORDERS_SUCCESS = "ORDERS_SUCCESS";

export const ADD_ORDER_INIT = "ADD_ORDER_INIT";
export const ADD_ORDER_SUCCESS = "ADD_ORDER_SUCCESS";
export const ADD_ORDER_FAIL = "ADD_ORDER_FAIL";

export const CLEAR_ORDER_STATES = "CLEAR_ORDER_STATES";

export type Order = {
  id?: string;
  sale_date?: Date;
  quantity?: string;
  sold_by_user?: string;
  sold_price?: string;
  customer_name?: string;
};

export type OrderDispatchTypes =
  | { type: typeof ORDERS_LOADING }
  | { type: typeof ORDERS_SUCCESS; payload: Order[] }
  | { type: typeof ORDERS_FAIL; payload: string }
  | { type: typeof ADD_ORDER_INIT }
  | { type: typeof ADD_ORDER_SUCCESS }
  | { type: typeof ADD_ORDER_FAIL; payload: string }
  | { type: typeof CLEAR_ORDER_STATES };

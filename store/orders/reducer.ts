import {
  OrderActionTypes,
  Orders,
  ORDERS_FETCH_FAIL,
  ORDERS_FETCH_INIT,
  ORDERS_FETCH_SUCCESS,
  ORDER_TO_STOCK_CREATE_FAIL,
  ORDER_TO_STOCK_CREATE_INIT,
  ORDER_TO_STOCK_CREATE_SUCCESS,
} from "./types";

export const initialState: Orders = {
  loading: false,
  orders: [],
};

const reducer = (state = initialState, action: OrderActionTypes) => {
  switch (action.type) {
    case ORDER_TO_STOCK_CREATE_INIT:
      return Object.assign({}, state, { loading: true });
    case ORDER_TO_STOCK_CREATE_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case ORDER_TO_STOCK_CREATE_FAIL:
      return Object.assign({}, state, { loading: false });
    case ORDERS_FETCH_INIT:
      return Object.assign({}, state, { loading: true });
    case ORDERS_FETCH_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        orders: action.payload.data,
      });
    case ORDERS_FETCH_FAIL:
      return Object.assign({}, state, { loading: false });
    default:
      return state;
  }
};

export default reducer;

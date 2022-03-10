import {
  ADD_ORDER_FAIL,
  ADD_ORDER_INIT,
  ADD_ORDER_SUCCESS,
  Order,
  OrderDispatchTypes,
  ORDERS_FAIL,
  ORDERS_LOADING,
  ORDERS_SUCCESS,
} from '../actions/OrderActionTypes';

interface OrderDefaultStateI {
  isLoading: boolean;
  orders?: Order[];
  errorMessage?: string;
  onSuccess?: string;
}
const defaultState: OrderDefaultStateI = {
  isLoading: false,
};

const orderReducer = (
  state: OrderDefaultStateI = defaultState,
  action: OrderDispatchTypes,
): OrderDefaultStateI => {
  switch (action.type) {
    case ORDERS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ORDERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        orders: action.payload,
      };
    case ORDERS_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    case ADD_ORDER_INIT:
      return {
        ...state,
        isLoading: true,
        onSuccess: 'false',
      };
    case ADD_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        onSuccess: 'true',
      };
    case ADD_ORDER_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
        onSuccess: 'false',
      };
    default:
      return state;
  }
};

export default orderReducer;

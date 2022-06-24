import {
  Customer,
  CustomerActionTypes,
  CUSTOMER_CATEGORIES_FETCH_FAIL,
  CUSTOMER_CATEGORIES_FETCH_INIT,
  CUSTOMER_CATEGORIES_FETCH_SUCCESS,
  CUSTOMER_CATEGORY_CREATE_FAIL,
  CUSTOMER_CATEGORY_CREATE_INIT,
  CUSTOMER_CATEGORY_CREATE_SUCCESS,
  CUSTOMER_CATEGORY_NAME_UPDATE_FAIL,
  CUSTOMER_CATEGORY_NAME_UPDATE_INIT,
  CUSTOMER_CATEGORY_NAME_UPDATE_SUCCESS,
  CUSTOMER_CATEGORY_UPDATE_FAIL,
  CUSTOMER_CATEGORY_UPDATE_INIT,
  CUSTOMER_CATEGORY_UPDATE_SUCCESS,
} from "./types";

export const initialState: Customer = {
  customerCategories: [],
  loading: false,
};

const reducer = (state = initialState, action: CustomerActionTypes) => {
  switch (action.type) {
    case CUSTOMER_CATEGORY_NAME_UPDATE_INIT:
      return Object.assign({}, state, { loading: true });
    case CUSTOMER_CATEGORY_NAME_UPDATE_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case CUSTOMER_CATEGORY_NAME_UPDATE_FAIL:
      return Object.assign({}, state, { loading: false });
    case CUSTOMER_CATEGORY_UPDATE_INIT:
      return Object.assign({}, state, { loading: true });
    case CUSTOMER_CATEGORY_UPDATE_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case CUSTOMER_CATEGORY_UPDATE_FAIL:
      return Object.assign({}, state, { loading: false });
    case CUSTOMER_CATEGORY_CREATE_INIT:
      return Object.assign({}, state, { loading: true });
    case CUSTOMER_CATEGORY_CREATE_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case CUSTOMER_CATEGORY_CREATE_FAIL:
      return Object.assign({}, state, { loading: false });
    case CUSTOMER_CATEGORIES_FETCH_INIT:
      return Object.assign({}, state, { loading: true });
    case CUSTOMER_CATEGORIES_FETCH_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        customerCategories: action.payload.data,
      });
    case CUSTOMER_CATEGORIES_FETCH_FAIL:
      return Object.assign({}, state, { loading: false });
    default:
      return state;
  }
};

export default reducer;

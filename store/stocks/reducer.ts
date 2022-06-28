import {
  StockActionTypes,
  Stocks,
  STOCKS_FETCH_FAIL,
  STOCKS_FETCH_INIT,
  STOCKS_FETCH_SUCCESS,
  STOCK_BY_ID_FETCH_FAIL,
  STOCK_BY_ID_FETCH_INIT,
  STOCK_BY_ID_FETCH_SUCCESS,
  STOCK_CREATE_FAIL,
  STOCK_CREATE_INIT,
  STOCK_CREATE_SUCCESS,
  STOCK_DELETE_FAIL,
  STOCK_DELETE_INIT,
  STOCK_DELETE_SUCCESS,
  STOCK_UPDATE_FAIL,
  STOCK_UPDATE_INIT,
  STOCK_UPDATE_SUCCESS,
} from "./types";

export const initialState: Stocks = {
  loading: false,
  stocks: [],
  total: 1,
  page: 1,
  lastPage: 1,
  stock: null,
};

const reducer = (state = initialState, action: StockActionTypes) => {
  switch (action.type) {
    case STOCK_BY_ID_FETCH_INIT:
      return Object.assign({}, state, { loading: true });
    case STOCK_BY_ID_FETCH_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        stock: action.payload.data,
      });
    case STOCK_BY_ID_FETCH_FAIL:
      return Object.assign({}, state, { loading: false });
    case STOCK_UPDATE_INIT:
      return Object.assign({}, state, { loading: true });
    case STOCK_UPDATE_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case STOCK_UPDATE_FAIL:
      return Object.assign({}, state, { loading: false });
    case STOCK_DELETE_INIT:
      return Object.assign({}, state, { loading: true });
    case STOCK_DELETE_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case STOCK_DELETE_FAIL:
      return Object.assign({}, state, { loading: false });
    case STOCK_CREATE_INIT:
      return Object.assign({}, state, { loading: true });
    case STOCK_CREATE_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case STOCK_CREATE_FAIL:
      return Object.assign({}, state, { loading: false });
    case STOCKS_FETCH_INIT:
      return Object.assign({}, state, { loading: true });
    case STOCKS_FETCH_SUCCESS: {
      const {
        stocks,
        meta: { total, page, lastPage },
      } = action.payload.data;
      return Object.assign({}, state, {
        loading: false,
        stocks,
        total,
        page,
        lastPage,
      });
    }
    case STOCKS_FETCH_FAIL:
      return Object.assign({}, state, { loading: false });
    default:
      return state;
  }
};

export default reducer;

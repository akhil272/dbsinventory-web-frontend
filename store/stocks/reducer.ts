import {
  StockActionTypes,
  Stocks,
  STOCKS_FETCH_FAIL,
  STOCKS_FETCH_INIT,
  STOCKS_FETCH_SUCCESS,
  STOCK_CREATE_FAIL,
  STOCK_CREATE_INIT,
  STOCK_CREATE_SUCCESS,
} from "./types";

export const initialState: Stocks = {
  loading: false,
  stocks: [],
  total: 1,
  page: 1,
  last_page: 1,
};

const reducer = (state = initialState, action: StockActionTypes) => {
  switch (action.type) {
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
        meta: { total, page, last_page },
      } = action.payload.data;
      return Object.assign({}, state, {
        loading: false,
        stocks,
        total,
        page,
        last_page,
      });
    }
    case STOCKS_FETCH_FAIL:
      return Object.assign({}, state, { loading: false });
    default:
      return state;
  }
};

export default reducer;

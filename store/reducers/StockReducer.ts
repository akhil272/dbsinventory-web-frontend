import {
  ADD_STOCKS_FAIL,
  ADD_STOCKS_INIT,
  ADD_STOCKS_SUCCESS,
  CLEAR_STOCKS_STATES,
  GET_STOCKS_BY_SEARCH_FAIL,
  GET_STOCKS_BY_SEARCH_INIT,
  GET_STOCKS_BY_SEARCH_SUCCESS,
  StocksData,
  StocksDispatchTypes,
  STOCKS_FAIL,
  STOCKS_SUCCESS,
} from "../actions/StockActionTypes";
import { STOCKS_LOADING } from "./../actions/StockActionTypes";

interface StockDefaultStateI {
  isLoading: boolean;
  stocksData?: StocksData;
  meta?: { total: number; page: number; last_page: number };
  errorMessage?: string;
  onSuccess?: string;
}
const defaultState: StockDefaultStateI = {
  isLoading: false,
};

const stockReducer = (
  state: StockDefaultStateI = defaultState,
  action: StocksDispatchTypes
): StockDefaultStateI => {
  switch (action.type) {
    case STOCKS_LOADING:
    case GET_STOCKS_BY_SEARCH_INIT: {
      return {
        ...state,
        isLoading: true,
        onSuccess: "false",
      };
    }

    case STOCKS_SUCCESS:
    case GET_STOCKS_BY_SEARCH_SUCCESS: {
      return {
        ...state,
        stocksData: action.payload,
        isLoading: false,
        errorMessage: "",
        onSuccess: "true",
      };
    }

    case STOCKS_FAIL:
    case GET_STOCKS_BY_SEARCH_FAIL: {
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false,
        onSuccess: "false",
      };
    }

    case ADD_STOCKS_INIT:
      return {
        ...state,
        isLoading: true,
        onSuccess: "",
        errorMessage: "",
      };
    case ADD_STOCKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        onSuccess: "true",
        errorMessage: "",
      };
    case ADD_STOCKS_FAIL:
      return {
        ...state,
        isLoading: false,
        onSuccess: "false",
        errorMessage: action.payload,
      };
    case CLEAR_STOCKS_STATES:
      return {
        ...state,
        onSuccess: "",
        errorMessage: "",
      };
    default:
      return state;
  }
};

export default stockReducer;
